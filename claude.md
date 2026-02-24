
# 🚀 Project Name: RedDash Admin Template
Version: 1.0.0
Author: AI Generated System
License: Commercial Ready

You are a senior frontend architect and UI system designer.

Your task is to build a premium-quality, fully responsive, multi-layout, multi-language admin dashboard template similar in quality to Metronic — but fully custom.

---

# 🧰 Tech Stack (Must Use)

- Bootstrap 5 (Latest stable CDN)
- Remix Icon (CDN)
- GSAP (for UI animations)
- Three.js (for animated background / hero visuals)
- FullCalendar (calendar page)
- DataTables (advanced table page)
- Chart.js (charts)
- Vanilla JavaScript (no framework)
- Picsum.photos for placeholder images

No jQuery except if strictly required by DataTables.

---

# 🎨 Design System

Primary Brand Color: #ff0038

Design Feel:
- Premium SaaS
- Clean spacing
- Modern dashboard aesthetic
- Soft rounded corners (10px)
- Smooth GSAP animations
- Professional typography
- Accessible color contrast

---

# 🌗 Light / Dark Mode (Required)

Implement theme system using CSS variables.

Structure:

/assets/css/theme.css

:root {
  --primary: #ff0038;
  --radius: 10px;
  --bg-body: #f8f9fa;
  --bg-card: #ffffff;
  --text-main: #212529;
}

[data-theme="dark"] {
  --bg-body: #0f1115;
  --bg-card: #1c1f26;
  --text-main: #e4e6eb;
}

Requirements:
- Toggle button in navbar
- Save preference in localStorage
- Smooth transition animation
- Charts adapt to theme

---

# 📁 Required Folder Structure (STRICT)

root/
- index.html
- login.html
- register.html
- profile.html
- users.html
- projects.html
- calendar.html
- kanban.html
- chat.html
- pricing.html
- faq.html
- 404.html
- maintenance.html
- documentation.html
- changelog.html
- vercel.json
- .gitignore
- claude.md
- /assets
  - /css
    - theme.css
    - layout.css
    - components.css
  - /js
    - theme.js
    - layout.js
    - animations.js
    - i18n.js
    - charts.js
    - datatable-init.js
    - calendar-init.js
    - three-init.js
  - /images
- /components
  - sidebar.html
  - navbar.html
  - footer.html
  - settings-panel.html
  - /components-items
    - card.html
    - stat-card.html
    - modal.html
    - table.html

---

# 🧱 Core Layout System

## Sidebar
- Collapsible
- Icon + label
- Tooltip in collapsed mode
- Multi-level menu
- Active state indicator

## Navbar
- Search bar
- Theme toggle
- Language selector
- Notification dropdown
- User profile dropdown

## Layout Options

Provide Layout Switcher Panel:
- Default Sidebar
- Collapsed Sidebar
- Horizontal Layout
- Boxed Layout
- Dark Mode
- RTL Mode

Switch layouts using body classes.

---

# 🌍 Multi-language Support

Languages:
- English (default)
- Hindi
- Arabic (RTL enabled)

Use:

/assets/js/i18n.js

Structure:

const translations = {
  en: {},
  hi: {},
  ar: {}
};

Use data-translate attributes in HTML.

Arabic must:
- Switch to RTL
- Flip sidebar direction

---

# 📊 Pages & Features

## Dashboard (index.html)
- Revenue chart (Chart.js)
- Statistics cards
- Recent transactions table (DataTables)
- Activity feed
- Animated counters (GSAP)

## Users Page
- DataTables integration
- Sorting
- Pagination
- Search

## Projects Page
- Grid cards with progress bars

## Calendar Page
- FullCalendar integration
- Month / Week / Day view

## Kanban Page
- Static Kanban UI (drag UI optional)

## Chat Page
- Chat layout UI
- User list
- Message bubbles

## Pricing Page
- 3-tier pricing cards

## Authentication Pages
- Login
- Register
- Forgot password

## Error Pages
- 404
- Maintenance

---

# 🌌 Three.js Integration

Use Three.js for:

- Subtle animated background on login page
OR
- Hero animated gradient particles on dashboard

Must:
- Be lightweight
- Not block UI
- Responsive canvas

---

# ✨ GSAP Animations (Required)

- Sidebar open/close animation
- Page fade-in transition
- Card hover effect
- Modal entrance animation
- Counter animation
- Notification dropdown animation

Animations must be subtle and professional.

---

# 🧩 Core Components

Build reusable UI components:

- Buttons (primary / outline / soft)
- Cards
- Alerts
- Badges
- Dropdowns
- Toast
- Modals
- Tabs
- Accordions
- Breadcrumbs
- Pagination
- Avatars
- Progress bars
- Spinners
- Timeline
- Activity Feed
- File upload UI

---

# 🧠 UX Enhancements

Include:

- Scroll to top button
- Sticky header
- Loading skeleton UI
- Responsive search
- Command palette (Ctrl + K)
- Notification panel
- Settings panel
- Layout persistence in localStorage

---

# 📚 Documentation Page (documentation.html)

Must include:

1. Installation
2. Folder Structure
3. Theme Customization
4. Changing Primary Color
5. Enabling Dark Mode
6. Adding New Page
7. Adding New Component
8. Using DataTables
9. Using FullCalendar
10. Using Three.js
11. Deployment on Vercel
12. Performance Tips

---

# 📝 Changelog Page (changelog.html)

Structure:

## Version 1.0.0
- Initial release
- Multi-layout system
- Dark mode
- Multi-language
- Dashboard analytics
- FullCalendar integration
- DataTables integration
- Three.js background

Future format example:

## Version 1.1.0
- Added CRM module
- Performance improvements
- UI refinements

---

# 📖 References Section (Inside documentation)

Include links:

- Bootstrap
- Remix Icon
- GSAP
- Chart.js
- DataTables
- FullCalendar
- Three.js

---

# ⚙️ vercel.json

{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}

---

# 📦 Code Quality Rules

- No inline CSS
- Minimal inline JS
- Modular architecture
- Reusable components
- Clean indentation
- Comments for major sections
- Avoid unnecessary dependencies
- Optimized CDN usage

---

# 🏁 Output Requirement

Generate:

- All HTML files
- All CSS files
- All JS files
- Folder structure
- Fully working template
- Clean and organized code
- Premium quality UI
- Responsive design

Do NOT simplify.
Do NOT skip features.
Build it like a commercial ThemeForest product.

---

# 🔥 Final Goal

This must feel like:

- Sellable admin template
- Enterprise-ready
- Highly reusable
- Clean architecture
- Professional polish