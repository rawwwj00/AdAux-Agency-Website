# ADAUX AGENCY — Website

Hip Hop Event Management · India

---

## Files

```
adaux/
├── index.html    — Entry point (loads React via CDN + fonts)
├── styles.css    — All styles, animations, responsive breakpoints
├── app.jsx       — React app: all pages, data, components
└── README.md     — This file
```

## How to Run

### Option A — Local (easiest)
1. Download all files into a single folder
2. Open `index.html` directly in Chrome or Firefox
   - Note: some browsers block local `.jsx` scripts via Babel CDN.
   - If it doesn't load, use Option B.

### Option B — Local Dev Server (recommended)
```bash
# With Python
cd adaux/
python3 -m http.server 3000
# Open http://localhost:3000

# With Node (npx)
npx serve .
```

### Option C — Deploy to Netlify / Vercel
Drag the `adaux/` folder into Netlify Drop → live in seconds.  
No build step needed — pure HTML + CDN React.

---

## Pages

| Page     | Route (internal) | Description                          |
|----------|-----------------|--------------------------------------|
| Home     | HOME            | Hero, stats, events preview, CTA     |
| Events   | EVENTS          | Filterable events table              |
| Services | SERVICES        | Sticky-scroll services list          |
| About    | ABOUT           | Story, team, stats                   |
| Contact  | CONTACT         | Inquiry form with validation         |

---

## Customisation

- **Events**: Edit the `EVENTS` array at the top of `app.jsx`
- **Services**: Edit `SERVICES` array
- **Team**: Edit `TEAM` array
- **Clients**: Edit `CLIENTS` array
- **Colors**: Change CSS custom properties at the top of `styles.css`
- **Logo**: Replace the `ADAUX` text in the `<header>` with an `<img>` tag

---

## Tech Stack

- React 18 (CDN, no build step)
- Babel Standalone (JSX in browser)
- Google Fonts: Bebas Neue, Barlow, Barlow Condensed
- Pure CSS animations (no external animation library)
- No dependencies to install

---

© 2025 Adaux Agency
