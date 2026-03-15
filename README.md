# ⟨/⟩ HTML Previewer

<div align="center">

<img src="https://mrlipx.github.io/html-previewer/media/images/logos/html5.svg" width="64" height="64" style="border-radius:50%" alt="HTML5 Icon" />

**Mr Li Px** · [@MrLiPx](https://github.com/MrLiPx)

[![HTML Previewer](https://img.shields.io/badge/HTML-Previewer-58a6ff?style=for-the-badge&logo=html5&logoColor=white)](https://mrlipx.github.io/html-previewer)
[![Version](https://img.shields.io/badge/version-1.2.0-f85149?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/license-MIT-3fb950?style=for-the-badge)](LICENSE)
[![No Dependencies](https://img.shields.io/badge/dependencies-none-d29922?style=for-the-badge)](#)

**A zero-dependency, browser-based HTML editor and live previewer.**

[🚀 Live Demo](https://mrlipx.github.io/html-previewer/) · [📦 Releases](https://github.com/MrLiPx/html-previewer/releases) · [🐛 Issues](https://github.com/MrLiPx/html-previewer/issues) · [🌐 MrLiPx.com](https://mrlipx.com)

</div>

---

## 🖥️ Live Demo

<div align="center">

**[▶ Open Live Demo →](https://mrlipx.github.io/html-previewer/app#sample&preview)**

</div>

### Embed in your own page

The app supports iframe embedding out of the box. Hash tokens load on startup, so you can pre-configure exactly what the viewer sees. Three embed modes are supported:

```html
<!-- Interactive demo: sidebar visible, import/export hidden, full interaction -->
<iframe
  src="https://mrlipx.github.io/html-previewer/app?embed=demo#sample&preview"
  width="100%"
  height="540"
  style="border:none;border-radius:8px;"
  title="HTML Previewer"
></iframe>
```

```html
<!-- Compact: header and status bar hidden, everything else visible -->
<iframe
  src="https://mrlipx.github.io/html-previewer/app?embed=1#sample&preview"
  width="100%"
  height="540"
  style="border:none;"
  title="HTML Previewer"
></iframe>
```

```html
<!-- Read-only showcase: non-interactive, no sidebar/tabs (for decorative demos) -->
<iframe
  src="https://mrlipx.github.io/html-previewer/app?embed=readonly#sample&preview"
  width="100%"
  height="540"
  style="border:none;"
  title="HTML Previewer"
></iframe>
```

When embedded, the app always respects the visitor's saved theme (via `localStorage`) and falls back to their OS preference.

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
| 🌙 **Dark / Light** | Toggle theme (persists across all embed modes) |
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
/app                              → editor tab (default)
/app#preview                      → preview tab
/app#theme=dark                   → apply dark theme
/app#theme=light                  → apply light theme
/app#sample                       → load sample, stay on editor
/app#sample&preview               → load sample, switch to preview
/app#sample&preview&theme=dark    → load sample, preview, dark theme
/app#preview&theme=light          → preview in light mode
```

### URL parameters

| Parameter | Values | Effect |
|---|---|---|
| `?embed` | any value | Compact mode: hide header + status bar |
| `?embed=demo` | `demo` | Demo mode: interactive, sidebar visible, no import/export |
| `?embed=readonly` | `readonly` | Showcase mode: non-interactive, decorative |

> **Note:** All embed modes respect the visitor's saved theme from `localStorage` and OS preference.

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
├── index.html               ← landing page — fully self-contained (CSS + JS inlined)
├── app.html                 ← the app     — fully self-contained (CSS + JS inlined)
├── 404.html                 ← 404 page
├── README.md
├── LICENSE
│
├── _redirects               ← Netlify / Cloudflare Pages redirect rules
├── vercel.json              ← Vercel redirect rules + cleanUrls
│
└── media/
    └── images/
        ├── logos/html5.svg  ← favicon, nav logo, app icon
        ├── banner/og-banner.png
        └── icons/favicon.png
```

> All internal links use **clean URLs** (`/app`, `/404`) — no `.html` suffix.
> The redirect rules and `cleanUrls: true` in `vercel.json` handle this transparently.

---

## ↩️ Redirects (308 Permanent)

`/index.html` → `/` and `/app.html` → `/app`, both 308.

### Where do `_redirects` and `vercel.json` go?

**Both files go in the repo root** — the same folder as `index.html` and `app.html`.

### Netlify / Cloudflare Pages

The `_redirects` file is picked up automatically. No extra configuration needed.

```
# _redirects
/index.html   /    308
/app.html     /app 308
/404.html     /404 308
```

### Vercel

`vercel.json` is picked up automatically. `"cleanUrls": true` also strips `.html`
extensions sitewide so `/app.html` → `/app` even without an explicit rule.

```json
{
  "redirects": [
    { "source": "/index.html", "destination": "/",    "statusCode": 308 },
    { "source": "/app.html",   "destination": "/app", "statusCode": 308 },
    { "source": "/404.html",   "destination": "/404", "statusCode": 308 }
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
- Three embed modes via `?embed=` query param

---

## 🎨 Embed Modes

| Mode | URL | Sidebar | Header | Status | Interactive | Import/Export |
|---|---|---|---|---|---|---|
| Full | `/app` | ✅ | ✅ | ✅ | ✅ | ✅ |
| Compact | `/app?embed=1` | ✅ | ❌ | ❌ | ✅ | ✅ |
| Demo | `/app?embed=demo` | ✅ | ❌ | ❌ | ✅ | ❌ |
| Read-only | `/app?embed=readonly` | ❌ | ❌ | ❌ | ❌ | ❌ |

All modes inherit the visitor's theme from `localStorage` + OS preference.

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
