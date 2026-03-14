# ⟨/⟩ HTML Previewer

<div align="center">

<img src="https://avatars.githubusercontent.com/u/163276171?v=4" width="64" height="64" style="border-radius:50%" alt="Mr Li Px" />

**Mr Li Px** · [@MrLiPx](https://github.com/MrLiPx)

[![HTML Previewer](https://img.shields.io/badge/HTML-Previewer-58a6ff?style=for-the-badge&logo=html5&logoColor=white)](https://mrlipx.github.io/html-previewer)
[![Version](https://img.shields.io/badge/version-1.1.0-f85149?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/license-MIT-3fb950?style=for-the-badge)](LICENSE)
[![No Dependencies](https://img.shields.io/badge/dependencies-none-d29922?style=for-the-badge)](#)

**A zero-dependency, browser-based HTML editor and live previewer.**

[🚀 Live Demo](https://mrlipx.github.io/html-previewer) · [📦 Releases](https://github.com/MrLiPx/html-previewer/releases) · [🐛 Issues](https://github.com/MrLiPx/html-previewer/issues) · [🌐 MrLiPx.com](https://mrlipx.com)

</div>

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
| 🔗 **Deep Links** | Every action has a shareable URL |

---

## 🔗 Hash Deep Links

Every action in the app is addressable via a URL hash.
Tokens are separated by `&` — multiple can be combined.

### Supported tokens

| Token | Aliases | Effect |
|---|---|---|
| `editor` | — | Open editor tab |
| `preview` | — | Open preview tab (renders HTML) |
| `highlight` | — | Open syntax highlight tab |
| `dark` | `theme=dark` | Apply dark theme |
| `light` | `theme=light` | Apply light theme |
| `sample` | — | Load the sample HTML |
| `format` | — | Format / indent the code |
| `expand` | — | Remove excess blank lines |
| `collapse` | — | Compact to single lines |
| `clear` | — | Clear the editor |
| `export` | — | Trigger file download |
| `import` | — | Open file picker |

### Examples

```
/app                      → editor tab (default)
/app#preview              → preview tab
/app#dark                 → apply dark theme
/app#light                → apply light theme
/app#theme=dark           → same as #dark
/app#theme=light          → same as #light
/app#sample               → load sample, stay on editor
/app#sample&preview       → load sample, switch to preview
/app#sample&preview&dark  → load sample, preview, dark theme
/app#preview&theme=light  → preview in light mode
```

### Embedding with iframe

Because hash tokens are applied on load, you can embed a live preview directly:

```html
<!-- Landing page demo — shows app with sample loaded in preview mode -->
<iframe src="app.html#sample&preview" width="100%" height="500"></iframe>

<!-- Embed in dark mode with the editor visible -->
<iframe src="app.html#sample&dark" width="100%" height="500"></iframe>
```

> **Note:** Browsers never send `#fragment` to the server, so fragments are always
> preserved through 308 redirects automatically. Query strings (`?foo=bar`) are
> forwarded by the redirect rules.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl` / `Cmd` + `Enter` | Run / open preview |
| `Ctrl` / `Cmd` + `S` | Export to file |
| `Tab` | Indent 2 spaces |
| `Shift` + `Tab` | Unindent |

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

---

## 📁 File Structure

```
html-previewer/              ← repo root = web root
│
├── index.html               ← landing page (served at /)
├── app.html                 ← the app    (served at /app or /app.html)
├── 404.html                 ← 404 page
├── README.md
├── LICENSE
│
├── _redirects               ← Netlify / Cloudflare Pages redirect rules
├── vercel.json              ← Vercel redirect rules + cleanUrls
│
├── static/
│   ├── css/style.css        ← landing page styles
│   └── js/main.js           ← landing page scripts (GitHub API, scroll reveal)
│
└── media/
    └── images/
        ├── logos/html5.svg  ← favicon, nav logo, app icon
        ├── banner/og-banner.png
        └── icons/favicon.png
```

---

## ↩️ Redirects (308 Permanent)

`/index.html` → `/` and `/app.html` → `/app`, both 308.

### Where do `_redirects` and `vercel.json` go?

**Both files go in the repo root** — the same folder as `index.html` and `app.html`.

```
html-previewer/
├── _redirects      ← HERE (repo root)
├── vercel.json     ← HERE (repo root)
├── index.html
├── app.html
└── ...
```

### Netlify / Cloudflare Pages

The `_redirects` file is picked up automatically. No extra configuration needed.

```
# _redirects
/index.html   /    308
/app.html     /app 308
```

### Vercel

`vercel.json` is picked up automatically. `"cleanUrls": true` also strips `.html`
extensions sitewide so `/app.html` → `/app` even without an explicit rule.

```json
{
  "redirects": [
    { "source": "/index.html", "destination": "/",    "statusCode": 308 },
    { "source": "/app.html",   "destination": "/app", "statusCode": 308 }
  ],
  "cleanUrls": true
}
```

### GitHub Pages

GitHub Pages does **not** support server-side redirects.
- `/app.html` works as-is — GitHub Pages also serves it at `/app` via Jekyll.
- `/index.html` redirects to `/` automatically (Jekyll default).
- For strict 308 enforcement, put Cloudflare in front (proxy mode) and add
  page rules, or migrate hosting to Netlify/Cloudflare Pages (both free).

---

## 🛠️ Tech

- Pure HTML / CSS / JS — zero dependencies
- Google Fonts (Inter + JetBrains Mono)
- GitHub REST API for live author card on the landing page
- Hash-based routing with multi-token `&` syntax (`history.replaceState`)
- Blob URLs for new-tab preview and file export
- `FileReader` API for local file import
- `IntersectionObserver` for scroll-reveal animations

---

## 🤝 Contributing

PRs welcome. For big changes, open an issue first.

```bash
git checkout -b feature/my-feature
git commit -m "feat: describe the change"
git push origin feature/my-feature
```

---

## 📄 License

MIT © [Mr Li Px (@MrLiPx)](https://github.com/MrLiPx)

---

<div align="center">
Made with ❤️ by <a href="https://github.com/MrLiPx">Mr Li Px</a> · <a href="https://mrlipx.com">mrlipx.com</a>
</div>
