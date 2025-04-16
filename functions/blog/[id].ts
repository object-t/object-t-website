import type { PagesFunction } from '@cloudflare/workers-types'

export const onRequestGet: PagesFunction = async (context) => {
  const accept = context.request.headers.get('accept') || '';
  
  if (!accept.includes('text/html')) {
    return fetch(context.request);
  }

  const { id } = context.params;
  const baseHtmlRes = await fetch('https://object-t.com/index.html');
  let html = await baseHtmlRes.text();

  const ogTitle = `ブログ記事 ${id}`;
  const ogDescription = `これはブログ ${id} の説明です。`;
  const ogImage = `https://object-t.com/assets/logo.webp`;

  html = html
    .replace(/<title>.*<\/title>/, `<title>${ogTitle}</title>`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${ogTitle}"/>`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${ogDescription}"/>`)
    .replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${ogImage}"/>`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="https://object-t.com/blog/${id}"/>`);

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
};