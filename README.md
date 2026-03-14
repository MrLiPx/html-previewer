# ⟨/⟩ HTML Previewer

<div align="center">

<img src="https://avatars.githubusercontent.com/u/163276171?v=4" width="64" height="64" style="border-radius:50%" alt="Mr Li Px" />

**Mr Li Px** · [@MrLiPx](https://github.com/MrLiPx)

[![HTML Previewer](https://img.shields.io/badge/HTML-Previewer-e44d26?style=for-the-badge&logo=html5&logoColor=white)](https://mrlipx.github.io/html-previewer)
[![Version](https://img.shields.io/badge/version-1.1.0-ff5f57?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/license-MIT-28c840?style=for-the-badge)](LICENSE)
[![No Dependencies](https://img.shields.io/badge/dependencies-none-febc2e?style=for-the-badge)](#)

**A zero-dependency, browser-based HTML editor and live previewer.**

[🚀 Live Demo](https://mrlipx.github.io/html-previewer) · [📦 Releases](https://github.com/MrLiPx/html-previewer/releases) · [🐛 Issues](https://github.com/MrLiPx/html-previewer/issues) · [🌐 MrLiPx.com](https://mrlipx.com)

</div>

---

## 🖥️ Screenshot

![HTML Previewer](https://imagedelivery.net/HUDbG83RTqduFMklKurMDw/89808921-f8f7-4da7-3228-395275f4d800/public)

---

## ✨ Features

| Feature | Description |
|---|---|
| ▶ **Preview** | Live render in a sandboxed iframe |
| ✦ **Syntax Highlight** | Colour-coded tags, attributes, values, comments |
| ⊞ **Format** | Auto-indent and beautify HTML |
| ＋ **Expand all** | Remove excess blank lines |
| － **Collapse all** | Compact the code |
| 📄 **Sample** | Load a working example template |
| ✕ **Clear** | Clear the editor |
| ⬆ **Import** | Load a local `.html` file |
| ⬇ **Export** | Download as `index.html` |
| 🌙 **Dark / Light** | Toggle theme |

---

## 🔗 Hash Navigation

Every sidebar action and tab has a dedicated `#` URL so users can link directly to a specific view or bookmark it:

| URL | Opens |
|---|---|
| `/app` | Editor tab (default) |
| `/app#preview` | Preview tab |
| `/app#highlight` | Highlight tab |
| `/app#format` | Runs Format, stays on editor |
| `/app#expand` | Runs Expand all |
| `/app#collapse` | Runs Collapse all |
| `/app#sample` | Loads sample HTML |
| `/app#clear` | Clears the editor |
| `/app#import` | Opens file-import dialog |
| `/app#export` | Downloads the HTML file |
| `/app#theme` | Toggles dark / light mode |

The browser back / forward buttons work with all tab switches.

---

## ↩️ Redirects (308 Permanent)

`/index.html` and `/app.html` redirect permanently to their canonical URLs (`/` and `/app`). Hash fragments (`#...`) are client-side only and are preserved automatically by the browser. Query strings (`?...`) are forwarded by the redirect rules.

### Netlify / Cloudflare Pages

The included `_redirects` file handles this automatically:

```
/index.html   /    308
/app.html     /app 308
```

No extra configuration needed — just deploy.

### Vercel

The included `vercel.json` handles this automatically:

```json
{
  "redirects": [
    { "source": "/index.html", "destination": "/",    "permanent": true, "statusCode": 308 },
    { "source": "/app.html",   "destination": "/app", "permanent": true, "statusCode": 308 }
  ]
}
```

### GitHub Pages

GitHub Pages does not support server-side redirects. The `.html` extension URLs will work but will not redirect. To enforce canonical URLs on GitHub Pages, use a custom domain with Cloudflare in front (proxy mode) and add page rules there, or migrate to Netlify/Cloudflare Pages for free static hosting with redirect support.

---

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/MrLiPx/html-previewer.git
cd html-previewer

# Open directly — no server needed
open app.html        # macOS
start app.html       # Windows
xdg-open app.html   # Linux
```

**Netlify / Cloudflare Pages:** connect your repo — the `_redirects` file is picked up automatically.  
**Vercel:** connect your repo — `vercel.json` is picked up automatically.  
**GitHub Pages:** enable Settings → Pages → Deploy from `/` branch. Your site will be live at `https://mrlipx.github.io/html-previewer`.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl` / `Cmd` + `Enter` | Run preview |
| `Ctrl` / `Cmd` + `S` | Export to file |
| `Tab` | Indent 2 spaces |
| `Shift` + `Tab` | Unindent |

---

## 📁 File Structure

```
html-previewer/
├── app.html                      ← The app (self-contained)
├── index.html                    ← Landing page
├── 404.html                      ← 404 page (also landing page)
├── _redirects                    ← Netlify / Cloudflare Pages redirects
├── vercel.json                   ← Vercel redirects
├── README.md
│
├── static/
│   ├── css/style.css             ← Landing page styles
│   └── js/main.js                ← Landing page scripts
│
└── media/
    └── images/
        ├── logos/html5.svg       ← App icon, favicon, nav logo
        ├── screenshot/app.png    ← App screenshot
        ├── banner/og-banner.png  ← Social / OG banner
        └── icons/favicon.png     ← Fallback favicon
```

---

## 🛠️ Tech

- Pure HTML / CSS / JS — zero dependencies
- Google Fonts (Inter + JetBrains Mono)
- GitHub REST API for live profile data on the landing page
- Hash-based routing in the app (`history.replaceState`)
- Blob URLs for new-tab preview and file export
- FileReader API for local file import

---

## 🤝 Contributing

PRs welcome. For big changes, open an issue first.

```bash
git checkout -b feature/my-feature
git commit -m "feat: my feature"
git push origin feature/my-feature
```

---

## 📄 License

MIT © [Mr Li Px (@MrLiPx)](https://github.com/MrLiPx)

---

<div align="center">
Made with ❤️ by <a href="https://github.com/MrLiPx">Mr Li Px</a> · <a href="https://mrlipx.com">mrlipx.com</a>
</div>
