# LearnSpace — Course Learning Portal

A disciplined, academic curriculum web application engineered with **Next.js 15 (App Router)** and **TypeScript**.

The platform enables developers and students to browse specialized software engineering tracks, explore syllabus hierarchies, study interactive technical lessons featuring dynamic and catch-all routing patterns, and gracefully handle non-existent routes with custom diagnostics.

---

## 1. Project Overview

LearnSpace is designed for rigorous computer science education and engineering leadership tracks.

### Design Highlights
- **Academic Minimalist Canvas:** Crisp, distraction-free layout with accessible contrast and clean typography.
- **Unified Navigation:** Consistent top navigation bar with brand identity, search bar, active tab indicators, and quick action links.
- **Strict Hierarchy:** Badges for difficulty levels, track categories, lesson durations, and status indicators.
- **Responsive Layout:** Adapts smoothly across mobile screens, tablets, and desktop displays.

---

## 2. Technologies Used

- **Framework:** [Next.js](https://nextjs.org/) (v15 App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/) for strict compile-time type safety
- **UI & Styling:** React 19 with native CSS custom properties and responsive modular layouts
- **Data Source:** Structured local TypeScript datasets with strict typed schemas
- **Icons:** Lightweight, inline SVGs with zero external package dependencies

---

## 3. Main Features

1. **Course Directory & Category Filtering (`/courses`):**
   - Interactive category tabs (All Courses, Frontend, Backend, Architecture, Fundamentals).
   - Real-time search by course title, author, or description.
   - Four-metric summary bar (Published Tracks, Interactive Syllabus, Evaluation Mode, Status).
   - Responsive grid of course cards with category and difficulty badges, instructor metadata, lesson counts, and direct links.
   - Curriculum Sequencing Engine bottom banner.

2. **Course Syllabus & Overview (`/courses/[slug]`):**
   - Detailed course header with level badges, total duration estimates, and instructor profile.
   - Curriculum Structure sidebar outlining Zero Dependencies, Code-Centric Pedagogy, and Production Auditing.
   - 4 modular syllabus sections with lesson breakdowns and estimated study times.
   - Quick launch action to immediately start the curriculum from Lesson 01.

3. **Topic Explorer & Nested Learning Path (`/topics/[...slug]`):**
   - Implemented via Next.js catch-all routing (`/topics/[...slug]`).
   - Route pattern banner displaying dynamic segment resolution (e.g., resolved to `/topics/frontend/react`).
   - Specialized domain track header with total lesson metrics, difficulty range, core primitives, and verification status.
   - Interactive category filter tabs for React, Server Components, State & Signals, and Routing Architecture.
   - 4 technical module cards with slug paths, instructor roles, and direct launch buttons.
   - Related learning paths grid for adjacent competency areas.

4. **Technical Lesson Viewer (`/courses/[slug]/lessons/[lessonSlug]`):**
   - Two-column learning interface with sticky curriculum progress sidebar.
   - Completed lesson checkmarks and active lesson highlight.
   - Deep-dive technical lesson covering Dynamic Segments vs Catch-All Segments (`[slug]` vs `[...slug]`).
   - Code snippet box demonstrating Next.js 15 async `params` resolution.
   - Key Takeaway callout box.
   - Interactive self-assessment checklist with stateful checkboxes.
   - Previous and Next lesson navigation controls.

5. **Custom 404 Route Fallback (`not-found.tsx`):**
   - Triggered automatically via `notFound()` for invalid courses, unresolved lesson identifiers, or non-existent topics.
   - Diagnostic runtime log box displaying boundary trigger details and segment paths.
   - Suggested alternative lessons grid allowing one-click recovery.
   - Return navigation to parent syllabus or course directory.

---

## 4. Folder Structure

```
course-learning-portal/
├── src/
│   ├── app/
│   │   ├── layout.tsx                                      # Root layout with shared Navbar, Footer, and global styling
│   │   ├── globals.css                                     # Color tokens, typography, and responsive utility styles
│   │   ├── page.tsx                                        # Entry route: redirects "/" to "/courses"
│   │   ├── not-found.tsx                                   # Custom 404 fallback with diagnostic log and suggested lessons
│   │   ├── about/
│   │   │   └── page.tsx                                    # Platform architecture and pedagogy overview
│   │   ├── courses/
│   │   │   ├── page.tsx                                    # Server Component for course directory
│   │   │   ├── CoursesClient.tsx                           # Interactive client component (search, category tabs)
│   │   │   └── [slug]/
│   │   │       ├── page.tsx                                # Course details and comprehensive syllabus
│   │   │       └── lessons/
│   │   │           └── [lessonSlug]/
│   │   │               ├── page.tsx                        # Dynamic lesson loader with notFound() verification
│   │   │               └── LessonViewerClient.tsx          # Lesson reading UI with curriculum sidebar and checklist
│   │   └── topics/
│   │       ├── page.tsx                                    # Redirects to /topics/frontend/react
│   │       ├── TopicExplorerClient.tsx                     # Topic filter tabs and module cards
│   │       └── [...slug]/
│   │           └── page.tsx                                # Catch-all dynamic topic path resolver
│   ├── components/
│   │   ├── Navbar.tsx                                      # Header navigation bar with active route highlighting
│   │   ├── Footer.tsx                                      # Academic copyright and footer navigation
│   │   └── Breadcrumbs.tsx                                 # Reusable breadcrumb trail
│   ├── data/
│   │   ├── courses.ts                                      # Complete curriculum courses and lessons dataset
│   │   └── topics.ts                                       # Nested domain tracks and related pathways dataset
│   └── types/
│       ├── course.ts                                       # TypeScript interfaces for Course, Module, and Lesson
│       └── topic.ts                                        # TypeScript interfaces for TopicTrack and TopicModule
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 5. Application Routes and Their Purposes

| Route | Type | Description |
|---|---|---|
| `/` | Server (Redirect) | Automatically redirects visitors to `/courses`. |
| `/courses` | Server / Client | The primary course directory with live search and category filter. |
| `/courses/[slug]` | Dynamic Server Route | Course overview, instructor details, curriculum structure, and full syllabus. |
| `/courses/[slug]/lessons/[lessonSlug]` | Dynamic Server Route | Interactive technical lesson viewer with sticky curriculum navigation and self-assessment. |
| `/topics` | Server (Redirect) | Redirects to `/topics/frontend/react`. |
| `/topics/[...slug]` | Catch-All Server Route | Hierarchical topic explorer resolving parametric paths (e.g., `/topics/frontend/react`). |
| `/about` | Server Component | About page describing LearnSpace architecture, sequencing, and academic verification. |
| `/*` (Invalid path) | Custom Not Found | Renders `not-found.tsx` with diagnostic runtime log and suggested lessons. |

---

## 6. Routing and Architecture Explanation

### App Router Paradigm
- **Server Components by Default:** Page components run on the server, ensuring zero client bundle bloat for static syllabus content.
- **Client Components where Needed (`"use client"`):** Interactive filters, category tabs, bookmarks, and checklists run cleanly on the client.
- **Catch-All Segments (`[...slug]`):** Topics utilize Next.js catch-all routing to capture nested taxonomy depths into string arrays.
- **Next.js 15 Async Params:** Dynamic parameters (`params` and `searchParams`) are accessed asynchronously using `await params`.
- **Deterministic 404 Boundaries:** When a requested course or lesson identifier is not in data records, `notFound()` is invoked immediately to display `not-found.tsx`.

---

## 7. Installation and Setup

### Prerequisites
- Node.js (version 18.18.0 or later, v20+ recommended)
- npm (or pnpm / yarn)

### Step 1: Install Dependencies
Open your terminal in the `course-learning-portal` directory and run:
```bash
npm install
```

### Step 2: Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```

### Step 3: Verify TypeScript Types & Build
To verify that all types and pages compile cleanly:
```bash
npm run lint
npm run build
```

### Step 4: Run the Production Server
```bash
npm run start
```