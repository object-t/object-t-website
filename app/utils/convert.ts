export const custom_markdown_convert = (markdown: string): string => {
  let converted = markdown;
  
  converted = remove_frontmatter(converted);
  converted = convert_custom_massage_block(converted);
  converted = convert_labeled_code_block(converted);
  converted = convert_link(converted);

  return converted;
}

const remove_frontmatter = (markdown: string): string => {
  return markdown.replace(/^---[\s\S]*?---\n/, "");
}

const convert_custom_massage_block = (markdown: string): string => {
  return markdown.replace(/:::message\s*([\s\S]*?)\s*:::/g, (_match, content) => {
    return `<div class="message">${content.trim()}</div>`;
  });
}

const convert_labeled_code_block = (markdown: string): string => {
  return markdown.replace(/```((?:\w+\s+)?)(\w+):([^\n]+)\n([\s\S]*?)```/g,
    (_match, maybeLang1, lang2, filename, code) => {
      const fileTitle = filename.trim();
      const langHeader = `${(maybeLang1 + lang2).trim()}`;
      return `<div class="filename-label">${fileTitle}</div>\n\n\`\`\`${langHeader}\n${code}\`\`\``;
    }
  );
}

const convert_link = (markdown: string): string => {
  return markdown.replace(
    /(?<!["'=\](>])\b(https?:\/\/[^\s<>"')\]]+)/g,
    (url) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
  );
}