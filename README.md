# ⟨/⟩ HTML Online Viewer

<div align="center">

![HTML Viewer Banner](https://img.shields.io/badge/HTML-Online%20Viewer-00e5ff?style=for-the-badge&logo=html5&logoColor=white)
![Version](https://img.shields.io/badge/version-1.0.0-ff4d6d?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-00ffa3?style=for-the-badge)
![No Dependencies](https://img.shields.io/badge/dependencies-none-ffd166?style=for-the-badge)

**A zero-dependency, browser-based HTML editor & live previewer.**  
Paste, format, highlight, and preview HTML — entirely in your browser.

[🚀 Live Demo](https://mrlipx.github.io/html-viewer) · [📦 Download](https://github.com/MrLiPx/html-viewer/releases) · [🐛 Report Bug](https://github.com/MrLiPx/html-viewer/issues)

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 👁 **Preview** | Live full-page render of your HTML inside an iframe |
| ✦ **Syntax Highlight** | Color-coded HTML with tag, attribute, and value highlighting |
| ⊞ **Format** | Auto-indent and beautify messy HTML code |
| ＋ **Expand All** | Expand all collapsed nodes |
| － **Collapse All** | Collapse nodes for a cleaner overview |
| 📄 **Sample** | Load a working example HTML template |
| ✕ **Clear** | Wipe the editor with one click |
| ⬆ **Import** | Load a local `.html` or `.htm` file |
| ⬇ **Export** | Download your HTML as `index.html` |
| 🌙 **Dark / Light Mode** | Toggle between dark and light themes |

---

## 🚀 Quick Start

### Option 1 — Use directly (no install)

Just open `html-viewer.html` in your browser. That's it — no server, no build step.

```bash
# Clone the repo
git clone https://github.com/MrLiPx/html-viewer.git
cd html-viewer

# Open directly
open html-viewer.html        # macOS
start html-viewer.html       # Windows
xdg-open html-viewer.html    # Linux
```

### Option 2 — GitHub Pages

Fork this repo, enable **Settings → Pages → Deploy from `/` branch**, and your viewer will be live at:

```
https://mrlipx.github.io/html-viewer
```

---

## 🖥️ Screenshot

```
┌─────────────────────────────────────────────────────┐
│  ⟨/⟩ HTML Viewer                      @MrLiPx v1.0  │
├─────────────┬───────────────────────────────────────┤
│  View       │  ✏ Editor  │ 👁 Preview │ ✦ Highlight │
│  ─────────  ├─────────────────────────────────────── │
│  👁 Preview  │  1  <!DOCTYPE html>                   │
│  ✦ Highlight│  2  <html lang="en">                  │
│             │  3    <head>                           │
│  Edit       │  4      <title>Sample</title>          │
│  ─────────  │  5    </head>                          │
│  ⊞ Format   │  6    <body>                           │
│  ＋ Expand  │  7      <h1>Hello!</h1>               │
│  － Collapse│  8    </body>                          │
│             │  9  </html>                            │
│  File       ├─────────────────────────────────────── │
│  ─────────  │  ● Ready  │  UTF-8  │  HTML           │
│  📄 Sample  └─────────────────────────────────────── │
│  ✕ Clear    │
│  ⬆ Import   │
│  ⬇ Export   │
│             │
│  🌙 Dark    │
└─────────────┘
```

---

## 🛠️ Tech Stack

- **Pure HTML / CSS / JS** — zero dependencies, zero build tools
- **Google Fonts** — JetBrains Mono + Syne
- **CSS Variables** — for seamless dark/light theming
- **Blob URLs** — secure sandboxed preview & file export
- **FileReader API** — client-side file import

---

## 📁 File Structure

```
html-viewer/
├── html-viewer.html    ← The entire app (single file)
├── index.html          ← GitHub Pages landing page
└── README.md           ← This file
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

```bash
# Fork → Clone → Branch → PR
git checkout -b feature/my-feature
git commit -m "feat: add my feature"
git push origin feature/my-feature
```

---

## 📄 License

MIT © [MrLiPx](https://github.com/MrLiPx)

---

<div align="center">
Made with ❤️ by <a href="https://github.com/MrLiPx">@MrLiPx</a>
</div>
