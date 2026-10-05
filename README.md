# EuroAsia Development — Company Website

Static website for **EuroAsia Development Limited** (paper & packaging trading),
built from the company's WordPress draft, intro deck, FSC certificate and the
new blue logo. Ready for **free hosting on GitHub Pages**.

## Pages

| File | Page |
|---|---|
| `index.html` | Home — hero, why-us pillars, product highlights, FSC strip |
| `about.html` | Company overview, global expertise, vision |
| `products.html` | 7 product grades + strategic partner badges |
| `ethics.html` | Ethics & compliance statement + FSC certificate |
| `contact.html` | Contact cards + inquiry form |

Assets: `assets/img/logo.png` (site logo), `assets/img/logo.svg` (vector master),
`assets/docs/fsc-certificate.pdf` (FSC SGSHK-COC-311364).

## Publish on GitHub Pages (free)

1. Create a new **public** repository on GitHub (e.g. `euroasia-website`).
2. Upload everything in this folder to the repo root (drag-and-drop on github.com works).
3. In the repo: **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` / folder `/ (root)` → Save.
4. Your site goes live at `https://wadecao88.github.io/EuroAsia-website/` within a minute or two.
(Note: the repo name is case-sensitive — `EuroAsia-website` with capital E and A.)

Custom domain: point your domain's DNS at GitHub Pages and add a `CNAME` file
containing the domain — GitHub's Pages docs walk through it.

## Inquiry form

`contact.html` posts to [FormSubmit](https://formsubmit.co) (free, no server needed),
currently addressed to `wade.cao@euroasiadevelopment.com`.

- The **first** submission triggers a one-time activation email to that address — click it once and the form works from then on.
- To change the receiving address, edit the `action="https://formsubmit.co/…"` URL in `contact.html`.

## Editing

All pages share `assets/css/style.css` (brand colors: navy `#142D4B`,
steel `#306084`, kraft `#B07D48`). Page text is plain HTML — edit in any text
editor, no build step, no dependencies.
