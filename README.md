# RedDash Admin Template

**Free and open source** admin dashboard template built with Bootstrap 5 and vanilla JavaScript. No build step, no framework lock-in — just HTML, CSS, and JS. Perfect for SaaS apps, internal tools, CRM, and admin panels.

[![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.3-7952b3)](https://getbootstrap.com/)
[![Vanilla JS](https://img.shields.io/badge/JavaScript-Vanilla-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**[▶ Live Demo](https://red-dash-admin-template.vercel.app/)** · [Report Bug](https://github.com) · [Request Feature](https://github.com)

---

## 🔍 Keywords

`admin template` · `admin dashboard` · `bootstrap admin` · `dashboard template` · `admin panel` · `SaaS dashboard` · `responsive admin` · `dark mode` · `free admin template` · `open source dashboard` · `Bootstrap 5 template` · `vanilla JavaScript` · `Chart.js` · `DataTables` · `FullCalendar` · `Kanban` · `multi-language` · `i18n` · `RTL` · `GSAP` · `Three.js`

---

## 🎯 Perfect For

- **SaaS dashboards** — Analytics, charts, user management
- **Admin panels** — Backend for web apps, CMS, e-commerce
- **Internal tools** — CRM, project management, team dashboards
- **Startup MVPs** — Ship fast with a polished UI
- **Prototypes** — Demo your idea without building from scratch

---

## ✨ Features

- **15+ HTML Pages** — Dashboard, Users, Projects, Calendar, Kanban, Chat, Pricing, FAQ, Profile, Auth, Error pages
- **Multi-Layout System** — Default Sidebar, Collapsed, Horizontal, Boxed layouts with Layout Switcher Panel
- **Light / Dark Mode** — CSS variables, localStorage persistence, smooth transitions
- **Multi-Language (i18n)** — English, Hindi, Arabic (with RTL support)
- **GSAP Animations** — Page fade-in, counters, card hover, modal entrance, sidebar toggle
- **Three.js** — Animated particle background on Login & Register pages
- **Chart.js** — Revenue charts, donut charts, analytics
- **DataTables** — Advanced tables with sorting, pagination, search
- **FullCalendar** — Month / Week / Day views with event creation
- **Responsive Design** — Mobile-first, works on all screen sizes

---

## 🧰 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Bootstrap 5** | Layout, components, grid |
| **Remix Icon** | Icon set |
| **GSAP** | UI animations |
| **Three.js** | Animated backgrounds |
| **Chart.js** | Charts & graphs |
| **DataTables** | Advanced tables |
| **FullCalendar** | Calendar views |
| **Vanilla JavaScript** | No framework dependency |
| **Picsum.photos** | Placeholder images |

---

## 📁 Project Structure

```
RedDash Admin Template/
├── index.html              # Dashboard
├── login.html
├── register.html
├── profile.html
├── users.html
├── projects.html
├── calendar.html
├── kanban.html
├── chat.html
├── pricing.html
├── faq.html
├── 404.html
├── maintenance.html
├── documentation.html
├── changelog.html
├── vercel.json
├── .gitignore
├── assets/
│   ├── css/
│   │   ├── theme.css       # CSS variables, light/dark themes
│   │   ├── layout.css      # Sidebar, navbar, main layout
│   │   └── components.css  # Buttons, cards, modals, etc.
│   ├── js/
│   │   ├── theme.js        # Theme toggle, persistence
│   │   ├── layout.js       # Sidebar, layout switcher
│   │   ├── animations.js   # GSAP animations
│   │   ├── i18n.js         # Multi-language
│   │   ├── charts.js       # Chart.js config
│   │   ├── datatable-init.js
│   │   ├── calendar-init.js
│   │   └── three-init.js   # Three.js particle background
│   └── images/
└── components/
    ├── sidebar.html
    ├── navbar.html
    ├── footer.html
    ├── settings-panel.html
    └── components-items/
        ├── card.html
        ├── stat-card.html
        ├── modal.html
        └── table.html
```

---

## 🚀 Quick Start

**[View Live Demo →](https://red-dash-admin-template.vercel.app/)**

### Option 1: Open Directly

1. Clone or download the project
2. Open `index.html` in a browser (or use a local server for best experience)

### Option 2: Local Server (Recommended)

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000`

> **Note:** When you push to GitHub, update the `repository.url` in `package.json` with your repo URL. This helps GitHub show the correct link in the "About" section.

### Option 3: Deploy to Vercel

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy
vercel
```

The project includes `vercel.json` for deployment configuration.

---

## 🎨 Design System

- **Primary Color:** `#ff0038`
- **Border Radius:** 10px (soft rounded corners)
- **Font:** Inter (Google Fonts)
- **Theme:** CSS variables in `assets/css/theme.css`

### Customizing the Primary Color

Edit `assets/css/theme.css`:

```css
:root {
  --primary: #ff0038;        /* Your brand color */
  --primary-soft: rgba(255, 0, 56, 0.1);
  --primary-hover: #cc002d;
}
```

---

## 🌗 Theme Toggle

- Toggle button in the navbar (moon/sun icon)
- Preference saved in `localStorage` under `reddash_theme`
- Charts automatically adapt to light/dark mode

---

## 🌍 Multi-Language (i18n)

Supported languages:

- **English** (default)
- **Hindi** (हिंदी)
- **Arabic** (العربية) — RTL layout enabled

Language selector in navbar. Translations in `assets/js/i18n.js`. Use `data-translate="key"` attribute for translatable elements.

---

## 📄 Pages Overview

| Page | Description |
|------|-------------|
| **Dashboard** | Revenue chart, stat cards, recent transactions, activity feed |
| **Users** | DataTables with sorting, pagination, search |
| **Projects** | Grid cards with progress bars |
| **Calendar** | FullCalendar with month/week/day views |
| **Kanban** | 4-column board (Backlog, In Progress, Review, Done) |
| **Chat** | Two-panel layout, message bubbles |
| **Pricing** | 3-tier pricing cards |
| **FAQ** | Accordion-style FAQ |
| **Profile** | Cover, avatar, tabs (Overview, Activity, Settings) |
| **Login / Register** | Auth pages with Three.js background |
| **404** | Error page with navigation links |
| **Maintenance** | Countdown, progress bar, email subscribe |
| **Documentation** | Full setup & customization guide |
| **Changelog** | Version history |

---

## 🧩 Core Components

- Buttons (primary, outline, soft)
- Cards, Stat Cards
- Alerts, Badges
- Dropdowns, Modals
- Tabs, Accordions
- Breadcrumbs, Pagination
- Avatars, Progress bars
- Timeline, Activity Feed

Component examples in `components/components-items/`.

---

## 📚 Documentation

Full documentation is available at `documentation.html` in the template, covering:

- Installation & folder structure
- Theme customization
- Adding new pages
- DataTables, FullCalendar, Three.js usage
- Deployment on Vercel
- Performance tips

---

## 📦 Dependencies (CDN)

All dependencies are loaded via CDN — no build step required:

- Bootstrap 5.3.3
- Remix Icon 4.6
- GSAP
- Three.js
- Chart.js
- DataTables 2.x
- FullCalendar 6.x

---

## 📝 Changelog

See `changelog.html` for version history. **v1.0.0** (February 2026) — Initial release.

---

## 📄 License

This project is licensed under the **MIT License** — free for personal and commercial use. You can use, modify, and distribute it without restrictions. See [LICENSE](LICENSE) for details.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## ⭐ Show Your Support

If this template helps you, consider giving it a star on GitHub or buying me a coffee!

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/yourusername)

---

## 🔗 References

- [Bootstrap](https://getbootstrap.com/)
- [Remix Icon](https://remixicon.com/)
- [GSAP](https://greensock.com/gsap/)
- [Chart.js](https://www.chartjs.org/)
- [DataTables](https://datatables.net/)
- [FullCalendar](https://fullcalendar.io/)
- [Three.js](https://threejs.org/)

---

---

---

**RedDash Admin Template** — Free, open source admin dashboard. Built for speed, flexibility, and ease of use. Use it for your next SaaS, CRM, internal tool, or admin panel project.

---

### 💡 GitHub Topics (add these to your repo for discoverability)

`admin-dashboard` `bootstrap` `bootstrap-5` `dashboard-template` `free-template` `admin-panel` `html-template` `javascript` `vanilla-js` `chartjs` `datatables` `fullcalendar` `dark-mode` `responsive` `saas` `open-source`
