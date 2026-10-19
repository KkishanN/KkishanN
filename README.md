# Kishan Nadageri — Software Engineer Portfolio

A modern, high-performance developer-centric portfolio designed to showcase **enterprise software engineering, production scale, and cloud architecture**.

Built with **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build optimized production bundle
npm run build

# 4. Preview production build
npm run preview
```

Local server runs at: `http://localhost:5173/`

---

## 🌟 Why This Architecture Fits You

As an engineer with **over 3.5 years of production experience** (.NET, Azure, Redis, Event Hubs, React) and no academic research papers, this site positions you where your greatest strength lies: **real-world engineering impact, system architecture, and production reliability**.

### Key Portfolio Features:
1. **Interactive Developer CLI (`TerminalHero.tsx`)**:
   - Visitors can type commands (`whoami`, `skills`, `exp`, `projects`, `arch`, `awards`, `certs`, `contact`, `download-cv`, `clear`).
   - Quick-run interactive chips for instant one-click execution.
2. **System Architecture Deep Dive (`ArchitectureShowcase.tsx`)**:
   - Visual execution flow and design decision breakdowns for:
     - **Distributed Low-Latency Telehealth Engine** (SignalR, Redis Cache, Event Hubs, Cosmos DB Change Feed).
     - **Event-Driven Microsoft Copilot Transcription & Translation Pipeline** (Blob Triggers, Cognitive Services, Teams Webhooks).
     - **Enterprise Oracle & Moodle Viva Integration Gateway** (Polly Circuit Breakers, Graph APIs).
3. **Enterprise Career Timeline (`ExperienceSection.tsx`)**:
   - Full Stack Engineering Senior Analyst & Analyst roles at Accenture (Bangalore & Mumbai).
4. **Inspectable Production Projects (`ProjectsSection.tsx` & `ProjectModal.tsx`)**:
   - Filterable cards with modal view for detailed system components and data flow breakdown.
5. **Interactive Skills Matrix (`SkillsMatrix.tsx`)**:
   - Real-time search filter (type "Azure", "Redis", "C#", etc.) with proficiency indicators and production tags.
6. **Credentials & Recognition (`CertificationsAndAwards.tsx`)**:
   - 2x Accenture ACE Awards.
   - Microsoft Certifications (AZ-900, MS-900, PL-900).
   - Academic background: Master's in Computer Engineering at Universität Paderborn & Bachelor's at SDMCET (CGPA 8.59/10).
7. **Instant Resume PDF Download**:
   - Linked directly to `public/kishan_nadageri_resume.pdf`.

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   └── kishan_nadageri_resume.pdf   # Downloadable PDF resume
├── src/
│   ├── components/
│   │   ├── Navbar.tsx               # Terminal prompt navigation
│   │   ├── TerminalHero.tsx         # Live interactive CLI & hero pitch
│   │   ├── ArchitectureShowcase.tsx # Distributed system visualizer
│   │   ├── ExperienceSection.tsx    # Career timeline & accomplishments
│   │   ├── ProjectsSection.tsx      # Project grid & filter tabs
│   │   ├── ProjectModal.tsx         # Architecture & data flow inspector
│   │   ├── SkillsMatrix.tsx         # Searchable skills matrix
│   │   ├── CertificationsAndAwards.tsx # ACE Awards & MS Certifications
│   │   ├── ContactSection.tsx       # Direct channels & contact form
│   │   └── Footer.tsx               # Terminal status bar
│   ├── data/
│   │   └── portfolioData.ts         # All profile, project, and skill data
│   ├── App.tsx                      # Root component
│   ├── index.css                    # Tailwind CSS & custom styling
│   └── main.tsx                     # Entrypoint
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🚀 Easy Deployment

### Deploy to Vercel / Netlify / GitHub Pages
- **Build command**: `npm run build`
- **Output directory**: `dist`
