# 🛡️ Modern Angular 22 SSG Developer Portfolio

A high-performance, enterprise-grade personal developer portfolio built with **Angular 22**, **Static Site Generation (SSG)**, **Server-Side Rendering (SSR)**, and **Tailwind CSS v4**. Engineered with a modern dark terminal design, signal-driven dynamic components, reactive contact validation, and lazy-loaded feature modules.

## 🌐 Live Demo & Interactive Links

🚀 [**View Live Portfolio Demo**](https://waleed-mehrez.vercel.app/projects)

---

## ⚡ PageSpeed Insights & Performance Benchmarks

Thanks to Angular 22 SSG prerendering, client hydration, and optimized asset delivery, the application achieves near-perfect Core Web Vitals scores:

| Metric Category | Score / Result | Benchmark Status |
| :--- | :---: | :---: |
| **Performance** | **99 / 100** | 🟢 Exceptional |
| **Best Practices** | **100 / 100** | 🟢 Perfect |
| **SEO** | **100 / 100** | 🟢 Perfect |
| **First Contentful Paint (FCP)** | **0.3 s** | 🟢 Blazing Fast |
| **Largest Contentful Paint (LCP)** | **0.9 s** | 🟢 Instant Load |
| **Total Blocking Time (TBT)** | **0 ms** | 🟢 Zero Input Delay |
| **Cumulative Layout Shift (CLS)** | **0.003** | 🟢 Zero Layout Shift |

![PageSpeed Insights Audit Result](public/images/pagespeed-insights.jpg)

---

## 📋 Table of Contents

* [Architectural Patterns & Design Decisions](#-architectural-patterns--design-decisions)
* [Rendering Strategy (SSG & Prerendering)](#-rendering-strategy-ssg--prerendering)
* [Core Features & UI Modules](#-core-features--ui-modules)
* [Repository Structure](#-repository-structure)
* [Getting Started & Installation](#-getting-started--installation)
* [Testing & Quality Assurance](#-testing--quality-assurance)

## 🏗️ Architectural Patterns & Design Decisions

This repository adheres to modern Angular architecture principles, ensuring high performance, clean separation of concerns, and maintainable data flow:

### 1. Smart / Presentational Component Strategy

To decouple presentation logic from data fetching, the portfolio separates data-aware container components from stateless display components:

* **Smart Components (`Projects`, `Certifications`):** Inject dedicated services (`ProjectService`, `CertsService`), manage component state using Angular Signals (`signal<T>()`), and handle RxJS subscription lifecycles safely with `DestroyRef`.
* **Presentational Components (`CertsCard`):** Leverage modern signal inputs (`input<T>()`) to receive immutable data props down the component tree.

### 2. Angular Signals & Reactive State Management

* **State Management:** Local component states leverage Angular's native `signal()` primitive for synchronous, fine-grained reactive tracking without unnecessary change detection overhead.
* **DOM & Animation Lifecycle Integration:** Client-only observers (such as the `IntersectionObserver` driving the timeline scroll steps in the `About` component) are safely invoked inside `afterNextRender` to prevent SSR node hydration conflicts during build prerendering.

### 3. Service Layer Encapsulation

* All external JSON data sources (`projects.json`, `certificates.json`) and backend endpoints (FormBold API) are encapsulated inside injectable services (`ProjectService`, `CertsService`, `HttpClient`).
* Controllers and views never make direct HTTP network requests, guaranteeing clean unit testing mock points for Vitest.

## ⚡ Rendering Strategy (SSG & Prerendering)

The application leverages **Angular 22 Server-Side Rendering (SSR) with Static Site Generation (SSG)**:

* **Build-Time Prerendering (`RenderMode.Prerender`):** Configured in `app.routes.server.ts` using `RenderMode.Prerender` across all fallback paths (`**`). Pages are rendered to static HTML at build time, yielding instant First Contentful Paint (FCP) and optimal SEO indexing.
* **Client Hydration & Event Replay:** Initialized via `provideClientHydration(withEventReplay())` in `app.config.ts`. This guarantees smooth event handling and zero layout shifts during DOM rehydration.
* **Lazy-Loaded Route Chunking:** Feature pages (`projects`, `experience`, `certifications`, `tech-stack`) utilize route-level code splitting (`loadComponent`) to keep initial JavaScript bundle sizes minimal.

## 💡 Core Features & UI Modules

* **Terminal & Engineering Log Aesthetic:** Custom dark-mode system utilizing Tailwind CSS v4 custom variables (`bg-void`, `text-neon`, `text-paper`), custom monospace typography, and interactive terminal badges.
* **Interactive Chapter Directory:** Custom floating navigation grid (`ChapterIndex`) enabling instant deep-linking across key portfolio sections.
* **Reactive Contact Engine:** Contact form built with Angular `FormBuilder` featuring live validation indicators, touch-state tracking, loading spinners, and delayed POST handling via `HttpClient`.
* **Infinite Tech Marquee:** Seamless CSS keyframe marquee showcasing proficiency across modern frontend tools (Angular, TypeScript, Tailwind CSS, RxJS, Vitest).

## 📂 Repository Structure

```
src/
├── app/
│   ├── core/                  # Core layout components (Singleton / Shell)
│   │   ├── about/             # Bio & scroll-animated engineering timeline
│   │   ├── chapter-index/     # Directory navigation grid
│   │   ├── contact/           # Reactive contact form & FormBold integration
│   │   ├── footer/            # Portfolio footer & back-to-top links
│   │   ├── header/            # Responsive sticky header & mobile drawer
│   │   └── hero/              # Hero landing section & tech marquee
│   ├── pages/                 # Lazy-loaded feature routes
│   │   ├── certifications/    # Course cards, models & CertsService
│   │   ├── experience/        # Professional experience log
│   │   ├── projects/          # Showcase projects, models & ProjectService
│   │   └── tech-stack/        # Core technical stack breakdown
│   ├── shared/                # Reusable UI primitives (loading-spinner)
│   ├── app.routes.ts          # Lazy-loaded feature route definitions
│   ├── app.routes.server.ts   # SSG Prerender server route config
│   ├── app.config.ts          # Client hydration & router scroll settings
│   └── app.ts                 # Root shell component
├── main.ts                    # Client bootstrap entry
├── main.server.ts             # SSR server bootstrap entry
└── server.ts                  # Express server for Node runtime SSR fallback
```

## 🛠️ Getting Started & Installation

### Prerequisites

* **Node.js**: v18.0.0 or higher
* **npm**: v10.0.0 or higher

### 1. Clone the Repository

```bash
git clone https://github.com/wello196/my-portfolio.git
cd my-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Development Server

Run the local dev server with hot-reloading:

```bash
npm start
```

Navigate to `http://localhost:4200/`.

### 4. Build SSG / Prerendered Output

Generate static pages and server bundles:

```bash
npm run build
```

## 🧪 Testing & Quality Assurance

Unit testing is configured using **Vitest** for fast execution:

```bash
# Run unit tests
npm run test
```
