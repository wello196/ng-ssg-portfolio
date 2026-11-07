# 🛡️ Modern Angular 22 SSG Developer Portfolio

A high-performance, enterprise-grade personal developer portfolio built with **Angular 22**, **Static Site Generation (SSG)**, **Server-Side Rendering (SSR)**, and **Tailwind CSS v4**[cite: 6, 18]. Engineered with a modern dark terminal design, signal-driven dynamic components, reactive contact validation, and lazy-loaded feature modules[cite: 17, 19, 21].

---

## 🌐 Live Demo & Interactive Links

🚀 **[View Live Portfolio Demo](https://your-portfolio-live-url.com)**

---

## 📋 Table of Contents

- [Architectural Patterns & Design Decisions](#-architectural-patterns--design-decisions)
- [Rendering Strategy (SSG & Prerendering)](#-rendering-strategy-ssg--prerendering)
- [Core Features & UI Modules](#-core-features--ui-modules)
- [Repository Structure](#-repository-structure)
- [Getting Started & Installation](#-getting-started--installation)
- [Testing & Quality Assurance](#-testing--quality-assurance)

---

## 🏗️ Architectural Patterns & Design Decisions

This repository adheres to modern Angular architecture principles, ensuring high performance, clean separation of concerns, and maintainable data flow:

### 1. Smart / Presentational Component Strategy
To decouple presentation logic from data fetching, the portfolio separates data-aware container components from stateless display components:
* **Smart Components (`Projects`, `Certifications`):** Inject dedicated services (`ProjectService`, `CertsService`), manage component state using Angular Signals (`signal<T>()`), and handle RxJS subscription lifecycles safely with `DestroyRef`[cite: 28, 30, 32, 36].
* **Presentational Components (`CertsCard`):** Leverage modern signal inputs (`input<T>()`) to receive immutable data props down the component tree[cite: 34].

### 2. Angular Signals & Reactive State Management
* **State Management:** Local component states leverage Angular's native `signal()` primitive for synchronous, fine-grained reactive tracking without unnecessary change detection overhead[cite: 28, 32].
* **DOM & Animation Lifecycle Integration:** Client-only observers (such as the `IntersectionObserver` driving the timeline scroll steps in the `About` component) are safely invoked inside `afterNextRender` to prevent SSR node hydration conflicts during build prerendering[cite: 16].

### 3. Service Layer Encapsulation
* All external JSON data sources (`projects.json`, `certificates.json`) and backend endpoints (FormBold API) are encapsulated inside injectable services (`ProjectService`, `CertsService`, `HttpClient`)[cite: 20, 30, 36].
* Controllers and views never make direct HTTP network requests, guaranteeing clean unit testing mock points for Vitest[cite: 5].

---

## ⚡ Rendering Strategy (SSG & Prerendering)

The application leverages **Angular 22 Server-Side Rendering (SSR) with Static Site Generation (SSG)**[cite: 1, 18]:

* **Build-Time Prerendering (`RenderMode.Prerender`):** Configured in `app.routes.server.ts` using `RenderMode.Prerender` across all fallback paths (`**`)[cite: 18]. Pages are rendered to static HTML at build time, yielding instant First Contentful Paint (FCP) and optimal SEO indexing[cite: 18].
* **Client Hydration & Event Replay:** Initialized via `provideClientHydration(withEventReplay())` in `app.config.ts`[cite: 10]. This guarantees smooth event handling and zero layout shifts during DOM rehydration[cite: 10].
* **Lazy-Loaded Route Chunking:** Feature pages (`projects`, `experience`, `certifications`, `tech-stack`) utilize route-level code splitting (`loadComponent`) to keep initial JavaScript bundle sizes minimal[cite: 19].

---

## 💡 Core Features & UI Modules

* **Terminal & Engineering Log Aesthetic:** Custom dark-mode system utilizing Tailwind CSS v4 custom variables (`bg-void`, `text-neon`, `text-paper`), custom monospace typography, and interactive terminal badges[cite: 15, 25].
* **Interactive Chapter Directory:** Custom floating navigation grid (`ChapterIndex`) enabling instant deep-linking across key portfolio sections[cite: 17, 18].
* **Reactive Contact Engine:** Contact form built with Angular `FormBuilder` featuring live validation indicators, touch-state tracking, loading spinners, and delayed POST handling via `HttpClient`[cite: 20].
* **Infinite Tech Marquee:** Seamless CSS keyframe marquee showcasing proficiency across modern frontend tools (Angular, TypeScript, Tailwind CSS, RxJS, Vitest)[cite: 25].

---

## 📂 Repository Structure

```text
src/
├── app/
│   ├── core/                  # Core layout components (Singleton / Shell)
│   │   ├── about/             # Bio & scroll-animated engineering timeline[cite: 15, 16]
│   │   ├── chapter-index/     # Directory navigation grid[cite: 17, 18]
│   │   ├── contact/           # Reactive contact form & FormBold integration[cite: 19, 20]
│   │   ├── footer/            # Portfolio footer & back-to-top links[cite: 21, 22]
│   │   ├── header/            # Responsive sticky header & mobile drawer[cite: 23, 24]
│   │   └── hero/              # Hero landing section & tech marquee[cite: 25, 26]
│   ├── pages/                 # Lazy-loaded feature routes
│   │   ├── certifications/    # Course cards, models & CertsService[cite: 31, 32, 35, 36]
│   │   ├── experience/        # Professional experience log
│   │   ├── projects/          # Showcase projects, models & ProjectService[cite: 27, 28, 29, 30]
│   │   └── tech-stack/        # Core technical stack breakdown
│   ├── shared/                # Reusable UI primitives (loading-spinner)
│   ├── app.routes.ts          # Lazy-loaded feature route definitions[cite: 14, 19]
│   ├── app.routes.server.ts   # SSG Prerender server route config[cite: 13, 18]
│   ├── app.config.ts          # Client hydration & router scroll settings[cite: 10]
│   └── app.ts                 # Root shell component[cite: 12, 17]
├── main.ts                    # Client bootstrap entry[cite: 7]
├── main.server.ts             # SSR server bootstrap entry[cite: 6]
└── server.ts                  # Express server for Node runtime SSR fallback[cite: 8]
