import { useEffect } from 'react';

const SITE_URL = 'https://levli.app';
const DEFAULT_OG_IMAGE =
  'https://media.base44.com/images/public/6a54e2b39f4414228ed855fb/4c6f7dd00_generated_image.png';

function upsertMeta(selector, attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id, schema) {
  if (!schema) return;
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(schema);
}

export default function Seo({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  twitterCard = 'summary_large_image',
  schema,
}) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) upsertMeta('meta[name="description"]', 'name', 'description', description);

    const canonical = canonicalPath ? `${SITE_URL}${canonicalPath}` : `${SITE_URL}/`;
    upsertLink('canonical', canonical);

    if (title) {
      upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
      upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    }
    if (description) {
      upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
      upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    }
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', ogImage);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);
    upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', twitterCard);

    if (schema) upsertJsonLd('levli-page-schema', schema);
  }, [title, description, canonicalPath, ogType, ogImage, twitterCard, schema]);

  return null;
}