# Korvio — Influencer Marketing Agency

[![Website](https://img.shields.io/badge/Website-korvio.in-7C3AED?style=for-the-badge&logo=googlechrome&logoColor=white)](https://korvio.in)
[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

> **Korvio** is a Karnataka-based influencer marketing agency connecting brands with relevant creators across India for authentic partnerships and campaign collaborations.

---

## 📌 About Korvio

Korvio acts as the connection layer in the creator economy across India. We focus on genuine audience alignment, transparent communication, and managed execution — helping consumer brands discover suitable creators while giving creators structured access to brand collaboration opportunities.

- **Operating Location**: Karnataka
- **Service Area**: Across India
- **Business Focus**: Influencer Marketing, Creator Matchmaking, Campaign Strategy & Management
- **Target Audience**: Consumer Brands & Digital Creators

---

## ✨ Features & Architecture

- ⚡ **Next.js App Router & Turbopack**: High-performance SSR and static generation with modern page architecture.
- 🎯 **Answer Engine Optimization (AEO)**: Dedicated Entity Hub (`/korvio/`) with structured Q&A data for Google Search, Gemini, ChatGPT, and Perplexity entity recognition.
- 🏷️ **Schema.org Structured Data**: Complete `Organization`, `WebSite`, and `WebPage` JSON-LD schemas embedded with region-level location and country service signals (`areaServed: India`).
- 🎨 **Modern Dark Aesthetics & Glassmorphism**: Tailored HSL color palette, smooth backdrop blurs, dynamic gradient overlays, and custom typography (`Geist`, `Geist Mono`, `Instrument Serif`).
- 📱 **Dual Audience Portals**:
  - **For Brands (`/brands/`)**: Targeted creator discovery, campaign brief structuring, managed outreach, and performance insights.
  - **For Creators (`/creators/`)**: 100% free application network, curated brand opportunity matches, and creative freedom.
- 📩 **Integrated Contact Workflows**:
  - Web3Forms API integration for brand inquiries.
  - Google Forms integration for creator onboarding applications.
- 📊 **Analytics & Privacy**: Privacy-focused GA4 tracking (`G-377NG4TXY`) for interaction and conversion events.

---

## 📁 Repository Structure

```text
korvio/
├── app/                        # Next.js App Router Directory
│   ├── about/                  # About Korvio page
│   ├── api/contact/            # Contact form submission handler
│   ├── brands/                 # Korvio for Brands landing portal
│   ├── contact/                # Contact & inquiry page
│   ├── creators/               # Korvio for Creators landing portal
│   ├── korvio/                 # AEO Entity Hub & Direct Q&A reference
│   ├── globals.css             # Design system design tokens & utilities
│   ├── layout.tsx              # Root layout & Schema.org JSON-LD definitions
│   ├── page.tsx                # Homepage
│   ├── robots.ts               # Crawl rules configuration
│   └── sitemap.ts              # Dynamic sitemap generator
├── components/                 # React UI Components
│   ├── about/                  # About page section components
│   ├── analytics/              # Navigation & GA4 tracking handlers
│   ├── brands/                 # Brand portal section components
│   ├── contact/                # Contact section & form components
│   ├── creators/               # Creator portal section components
│   ├── home/                   # Homepage sections (Hero, Ecosystem, Process)
│   ├── layout/                 # Shared Navbar & Footer
│   └── ui/                     # Reusable UI primitives (Buttons, Icons, Badges)
├── config/                     # Single Source of Truth Configuration
│   ├── content.ts              # Service items, process steps, pillars
│   └── site.ts                 # Verified business details, handles, and URLs
├── lib/                        # Utility functions & Analytics helpers
└── public/                     # Static media & brand assets
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `18.x` or later
- `npm`, `pnpm`, or `yarn`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/preethu2896/Korvio.git
   cd Korvio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (optional):
   Create a `.env.local` file in the project root if overriding default endpoints:
   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_measurement_id
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
   NEXT_PUBLIC_CREATOR_FORM_URL=your_creator_form_url
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Build & Deployment

### Production Build

To test the production build locally:

```bash
npm run build
npm run start
```

### Deployment

The project is optimized for deployment on [Vercel](https://vercel.com) or any Node.js/Next.js compatible hosting environment.

---

## 📬 Contact & Official Links

- **Website**: [korvio.in](https://korvio.in)
- **Email**: [hello.korvio@gmail.com](mailto:hello.korvio@gmail.com)
- **Instagram**: [@korvio.in](https://www.instagram.com/korvio.in)
- **LinkedIn**: [Korvio In](https://www.linkedin.com/in/korvio-in-6b9890428/)
- **X (Twitter)**: [@KorvioIn](https://x.com/KorvioIn)

---

## 📄 License

Copyright © 2026 Korvio. All rights reserved.
