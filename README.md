# Digital Art Studio — SEO Teaching Website

This is a static, multi-page demo website for a **fictional business, "Digital Art Studio"**,
built to teach students the practical workflow of on-page and off-page SEO. It is designed to
be published directly on **GitHub Pages** (plain HTML/CSS/JS, no build step required).

## Publishing on GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo settings, enable **Pages** → deploy from the `main` branch, root folder.
3. Replace every `https://YOUR-USERNAME.github.io/YOUR-REPO/` placeholder (in `<link rel="canonical">`,
   Open Graph tags, JSON-LD, `sitemap.xml`, and `robots.txt`) with your actual GitHub Pages URL.
4. Submit `sitemap.xml` to Google Search Console once published (optional, for full demonstration).

## Site Map

| Page | Purpose |
|---|---|
| `index.html` | Home page for the fictional business |
| `services.html` | Pillar page linking to all keyword-focused service pages |
| `about.html`, `contact.html` | Standard business pages |
| `keywords/digital-art-prints.html` | Landing page targeting **"digital art prints"** |
| `keywords/custom-portrait-commissions.html` | Landing page targeting **"custom portrait commissions"** |
| `keywords/digital-illustration-services.html` | Landing page targeting **"digital illustration services"** |
| `keywords/nft-digital-art-marketplace.html` | Landing page targeting **"NFT digital art marketplace"** |
| `blog/` | Supporting content-marketing article for internal linking and long-tail keywords |
| `seo-demo/index.html` | **Hub for the SEO teaching demo** — start here |
| `seo-demo/onpage-poor.html` | Poor on-page SEO example |
| `seo-demo/onpage-best.html` | Best-practice on-page SEO example |
| `seo-demo/offpage-poor.html` | Poor off-page SEO example (orphaned page, no social/citation signals) |
| `seo-demo/offpage-best.html` | Best-practice off-page SEO example (schema, reviews, citations, social) |

## How to Use This in Class

1. Open `seo-demo/index.html` — it explains and links every paired example.
2. Have students view page source / use browser dev tools + Lighthouse on each pair.
3. Compare `onpage-poor.html` vs `onpage-best.html`: titles, meta tags, headings, alt text, schema.
4. Compare `offpage-poor.html` vs `offpage-best.html`: internal linking, social proof, citations, schema `sameAs`.
5. Use `keywords/*.html` to discuss keyword mapping — one primary keyword per page ("pillar and cluster" model), linked from `services.html`.
6. Run each page through Google's Rich Results Test / Lighthouse to see structured data and SEO scores differ.

## Disclaimer

"Digital Art Studio" is a fictional business created solely for educational purposes. All
testimonials, addresses, and social links are placeholders and not real.
