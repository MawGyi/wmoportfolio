<div align="center">

# 🚀 Win Maw Oo — Portfolio

**Technical Business Analyst | Bridging Business & Technology**

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[**Live Demo**](https://winmawoo.vercel.app) · [**LinkedIn**](https://www.linkedin.com/in/win-maw-oo-33265560/) · [**GitHub**](https://github.com/winmawoo)

</div>

---

## ✨ Features

- **Modern Design** — Clean, minimal aesthetic with Electric Blue accent theme
- **Dark/Light Mode** — System-aware theme switching with smooth transitions
- **Command Palette** — Quick navigation with `⌘K` keyboard shortcut
- **Responsive** — Mobile-first design that looks great on all devices
- **Fast** — Static generation with Next.js for blazing performance
- **Accessible** — Semantic HTML and keyboard navigation support
- **Animations** — Subtle micro-animations powered by Framer Motion

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, CSS Variables |
| **UI Components** | Radix UI, Lucide Icons |
| **Animations** | Framer Motion |
| **Theme** | next-themes |
| **Search** | cmdk |
| **CMS** | Sanity (optional) |
| **Deployment** | Vercel |

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/winmawoo/wmo_portfolio.git
cd wmo_portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
wmo_portfolio/
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── globals.css  # Global styles & theme variables
│   │   ├── layout.tsx   # Root layout with providers
│   │   └── page.tsx     # Main portfolio page & data
│   ├── components/      # React components
│   │   ├── ui/          # Base UI components
│   │   ├── header.tsx   # Navigation header
│   │   ├── hero.tsx     # Hero section
│   │   └── ...          # Other sections
│   └── lib/             # Utilities & configurations
├── sanity/              # Sanity CMS configuration (optional)
└── tailwind.config.ts   # Tailwind configuration
```

## 🎨 Customization

### Update Profile Data

Edit the profile data directly in `src/app/page.tsx`:

```typescript
const profile = {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'Your bio...',
  socialLinks: [...],
}
```

### Change Theme Colors

Modify CSS variables in `src/app/globals.css`:

```css
:root {
  --primary: 217 91% 60%;  /* Electric Blue */
}
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🚢 Deployment

Deploy instantly with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/winmawoo/wmo_portfolio)

Or build manually:

```bash
npm run build
npm run start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by Win Maw Oo**

*Based in Bangkok | Bridging Business & Technology*

</div>
