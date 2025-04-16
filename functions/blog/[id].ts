import type { PagesFunction } from '@cloudflare/workers-types'

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

  const ogTitle = `ブログ記事 ${url.pathname}`;
  const ogDescription = `これはブログ ${url.pathname} の説明です。`;
  const ogImage = `https://object-t.com/assets/logo.webp`;

  html = html
    .replace(/<title>.*<\/title>/, `<title>${ogTitle}</title>`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${ogTitle}"/>`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${ogDescription}"/>`)
    .replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${ogImage}"/>`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url.toString()}"/>`);

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
};