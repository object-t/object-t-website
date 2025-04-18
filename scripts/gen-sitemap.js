import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const BASE_URL = "https://object-t.com/blog";

const repoDir = "tmp";
const repoPath = path.resolve(repoDir);

const urlEntries = [];

try {
  if (fs.existsSync(repoPath)) {
    console.log(`[INFO] Removing existing directory: ${repoPath}`);
    fs.rmSync(repoPath, { recursive: true, force: true });
  }

  console.log(`[INFO] Cloning repository into ${repoPath}...`);
  execSync(`git clone https://github.com/object-t/object-t-blog ${repoDir}`, { stdio: 'inherit' });

  const articlesJsonPath = path.join(repoPath, "articles.json");
  if (!fs.existsSync(articlesJsonPath)) {
    throw new Error(`articles.json not found in the cloned repository at ${articlesJsonPath}`);
  }
  console.log(`[INFO] Reading articles list from ${articlesJsonPath}...`);
  const raw = fs.readFileSync(articlesJsonPath, "utf-8");
  const data = JSON.parse(raw);

  console.log("[INFO] Processing articles for sitemap...");
  for (const article of data) {
    const id = article.id;
    if (!id || typeof id !== 'string' || !id.endsWith(".md")) {
      console.warn(`[WARN] Skipping invalid or non-markdown entry: ${JSON.stringify(article)}`);
      continue;
    }

    const slug = id.replace(/\.md$/, '');
    const loc = `${BASE_URL.replace(/\/$/, '')}/${slug}`;

    console.log(`[INFO] Processing ID: ${id} -> ${loc}`);
    const filePathInRepo = path.join("articles", id);

    try {
      const command = `git log -1 --format="%cI" -- "${filePathInRepo}"`;
      const lastmodRaw = execSync(command, {
        encoding: "utf-8",
        cwd: repoPath,
      }).trim();
      
    if (!lastmodRaw) {
      console.warn(`[WARN]   Lastmod is empty for ${id}. Skipping sitemap entry.`);
      continue;
    }
      const lastmod = new Date(lastmodRaw).toISOString();
      console.log(`[INFO]   Lastmod: ${lastmod}`);

      urlEntries.push(`
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`);
    } catch (error) {
      const stderr = error.stderr?.toString('utf-8').trim();
      console.error(`[ERROR]  Error getting git log for ${id}: ${stderr || error.message}. Skipping sitemap entry.`);
    }
  }
  console.log("[INFO] Finished processing articles.");

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries.join('')}
</urlset>`;

  console.log("\n--- Generated Sitemap ---");
  console.log(sitemapXml);

  try {
    const outputFilePath = "public/sitemap.xml";
    fs.writeFileSync(outputFilePath, sitemapXml, "utf-8");
    console.log(`\n[INFO] Sitemap successfully written to ${outputFilePath}`);
  } catch (writeError) {
    console.error(`\n[ERROR] Failed to write sitemap to file: ${writeError.message}`);
  }
} catch (error) {
  console.error("\n[ERROR] An overall error occurred:", error.message);
} finally {
  if (fs.existsSync(repoPath)) {
    console.log(`[INFO] Cleaning up ${repoPath}...`);
    try {
        fs.rmSync(repoPath, { recursive: true, force: true });
        console.log("[INFO] Cleanup successful.");
    } catch (cleanupError) {
        console.error(`[ERROR] Error during cleanup: ${cleanupError.message}`);
    }
  }
}