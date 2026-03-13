# ⟨/⟩ HTML Previewer

<div align="center">

<img src="https://avatars.githubusercontent.com/u/163276171?v=4" width="64" height="64" style="border-radius:50%" alt="Mr Li Px" />

**Mr Li Px** · [@MrLiPx](https://github.com/MrLiPx)

[![HTML Previewer](https://img.shields.io/badge/HTML-Previewer-4f9eff?style=for-the-badge&logo=html5&logoColor=white)](https://mrlipx.github.io/html-previewer)
[![Version](https://img.shields.io/badge/version-1.0.0-ff5f57?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/license-MIT-28c840?style=for-the-badge)](LICENSE)
[![No Dependencies](https://img.shields.io/badge/dependencies-none-febc2e?style=for-the-badge)](#)

**A zero-dependency, browser-based HTML editor and live previewer.**

[🚀 Live Demo](https://mrlipx.github.io/html-previewer) · [📦 Releases](https://github.com/MrLiPx/html-previewer/releases) · [🐛 Issues](https://github.com/MrLiPx/html-previewer/issues) · [🌐 MrLiPx.com](https://mrlipx.com)

</div>

---

## 🖥️ Screenshot

> **Placeholder** — take a screenshot of `html-previewer.html`, save it to `media/images/screenshot/app.png`, then replace this block.

```
┌───────────────────────────────────────────┐
│  [ Replace with screenshot ]              │
│  Path: media/images/screenshot/app.png   │
└───────────────────────────────────────────┘
```

<!-- Once you have a screenshot, replace the block above with:
![HTML Previewer](media/images/screenshot/app.png)
-->

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

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/MrLiPx/html-previewer.git
cd html-previewer

# Open directly — no server needed
open html-previewer.html        # macOS
start html-previewer.html       # Windows
xdg-open html-previewer.html   # Linux
```

**GitHub Pages:** enable Settings → Pages → Deploy from `/` branch.  
Your site will be live at `https://mrlipx.github.io/html-previewer`.

---

## 📁 File Structure

```
html-previewer/
├── html-previewer.html           ← The app (self-contained)
├── index.html                    ← GitHub Pages landing page
├── README.md
│
├── static/
│   ├── css/style.css             ← Landing page styles
│   └── js/main.js                ← Landing page scripts
│
└── media/
    └── images/
        ├── screenshot/app.png    ← ⬅ Add your screenshot here
        ├── banner/og-banner.png  ← ⬅ Social/OG banner
        └── icons/favicon.png     ← ⬅ Favicon
```

---

## 🛠️ Tech

- Pure HTML / CSS / JS — zero dependencies
- Google Fonts (Inter + JetBrains Mono)
- GitHub REST API for live profile data on the landing page
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
