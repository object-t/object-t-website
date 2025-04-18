import type { PagesFunction } from '@cloudflare/workers-types'

interface Article {
  id: string;
  title: string;
  type: string;
  description: string;
  topics: string[];
  author: string;
  created_at: string;
  thumbnail: string;
}

const ARTICLES_JSON_URL = 'https://raw.githubusercontent.com/object-t/object-t-blog/refs/heads/main/articles.json';

export const onRequestGet: PagesFunction = async (context) => {
  const url = new URL(context.request.url);

  if (/\.(js|css|png|jpg|jpeg|webp|woff2?|ttf|svg|ico|map)$/.test(url.pathname)) {
    return context.env.ASSETS.fetch(context.request);
  }

  const indexUrl = new URL('/', url.origin);

  const indexRequest = new Request(indexUrl.toString(), context.request);

  const baseHtmlRes = await context.env.ASSETS.fetch(indexRequest);
  if (!baseHtmlRes.ok) {
    return new Response(`Failed to fetch index.html: ${baseHtmlRes.status} ${baseHtmlRes.statusText}`, { status: baseHtmlRes.status });
  }

  let html = await baseHtmlRes.text();

  const slag = url.pathname;
  const res = await fetch(ARTICLES_JSON_URL);
  const articles: Article[] = await res.json();
  const article = articles.find(a => a.id === `${slag}.md`) ?? null;

  const ogTitle = article?.title ?? "存在しません。";
  const ogDescription = article?.description ?? "";
  const ogImage = "https://raw.githubusercontent.com/object-t/object-t-blog/refs/heads/main/thumbnail/" + (article?.thumbnail ?? `${slag}.jpeg`);

  html = html
    .replace(/<title>.*<\/title>/, `<title>${ogTitle}</title>`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${escapeHtml(ogTitle)}"/>`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${escapeHtml(ogDescription)}"/>`)
    .replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${escapeHtml(ogImage)}"/>`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url.toString()}"/>`);

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
};

function escapeHtml(unsafe: string): string {
  return unsafe
       .replace(/&/g, "&amp;")
       .replace(/</g, "&lt;")
       .replace(/>/g, "&gt;")
       .replace(/"/g, "&quot;")
       .replace(/'/g, "&#039;");
}