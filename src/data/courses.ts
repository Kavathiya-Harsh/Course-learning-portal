import { Course, Lesson } from "@/types/course";

export const courses: Course[] = [
  {
    id: "course-01",
    slug: "nextjs-app-router-fundamentals",
    title: "Next.js App Router Fundamentals",
    category: "Frontend",
    level: "Intermediate",
    instructor: "Alex Rivera",
    instructorRole: "Staff Frontend Architect",
    instructorInitials: "AR",
    description: "Deep dive into server components, dynamic segment rendering, caching architectures, and streaming SSR.",
    lessonsCount: 14,
    estimatedHours: "6.5 hrs",
    access: "# Open Access",
    version: "v14.2 / Next.js",
    modules: [
      {
        id: "mod-1",
        number: 1,
        title: "Routing Architecture & File Conventions",
        lessonCountText: "4 lessons · 90 min",
        lessons: [
          {
            id: "les-01",
            number: "01",
            title: "Introduction & Philosophy",
            slug: "01-introduction-philosophy",
            description: "Move drift from Pages router to React Server Components (RSC).",
            duration: "15 min",
            completed: true,
          },
          {
            id: "les-02",
            number: "02",
            title: "Server vs Client Components",
            slug: "02-server-vs-client-components",
            description: "The 'use client' directive boundary, component trees, and serialization.",
            duration: "25 min",
            completed: true,
          },
          {
            id: "les-03",
            number: "03",
            title: "Nested Layouts & Templates",
            slug: "03-nested-layouts-templates",
            description: "State preservation between route segments and template remounting.",
            duration: "25 min",
            completed: true,
          },
          {
            id: "les-04",
            number: "04",
            title: "Dynamic & Catch-All Routes",
            slug: "04-dynamic-catch-all-routes",
            description: "Parametric patterns, optional catch-all brackets, and type safety.",
            duration: "25 min",
            readTime: "8 min read",
            completed: false,
          },
        ],
      },
      {
        id: "mod-2",
        number: 2,
        title: "Data Fetching & Caching Tiers",
        lessonCountText: "3 lessons · 65 min",
        lessons: [
          {
            id: "les-05",
            number: "05",
            title: "Server-side Fetching & Cache",
            slug: "05-server-side-fetching-cache",
            description: "Extended fetch API, request memoization, and Data Cache mechanics.",
            duration: "25 min",
            completed: false,
          },
          {
            id: "les-06",
            number: "06",
            title: "Revalidation Strategies",
            slug: "06-revalidation-strategies",
            description: "Time-based ISR versus on-demand revalidation and cache tags.",
            duration: "20 min",
            completed: false,
          },
          {
            id: "les-07",
            number: "07",
            title: "Parallel & Intercepting Routes",
            slug: "07-parallel-intercepting-routes",
            description: "Simultaneous contextual displays, modals, and conditional slots.",
            duration: "20 min",
            completed: false,
          },
        ],
      },
      {
        id: "mod-3",
        number: 3,
        title: "Mutations & Boundary Handling",
        lessonCountText: "4 lessons · 75 min",
        lessons: [
          {
            id: "les-08",
            number: "08",
            title: "Server Actions & Forms",
            slug: "08-server-actions-forms",
            description: "Progressive enhancement, pending states with useFormStatus and useActionState.",
            duration: "20 min",
            completed: false,
          },
          {
            id: "les-09",
            number: "09",
            title: "Error Boundaries & notFound()",
            slug: "09-error-boundaries-notfound",
            description: "Segment error recovery, nested fallbacks, and 404 responses.",
            duration: "20 min",
            completed: false,
          },
          {
            id: "les-10",
            number: "10",
            title: "Loading States & Suspense",
            slug: "10-loading-states-suspense",
            description: "Granular streaming architectures and skeleton boundary segmentation.",
            duration: "15 min",
            completed: false,
          },
          {
            id: "les-11",
            number: "11",
            title: "Route Handlers & Webhooks",
            slug: "11-route-handlers-webhooks",
            description: "Building RESTful primitives, signature verifications, and custom responses.",
            duration: "20 min",
            completed: false,
          },
        ],
      },
      {
        id: "mod-4",
        number: 4,
        title: "Deployment & Optimization",
        lessonCountText: "3 lessons · 55 min",
        lessons: [
          {
            id: "les-12",
            number: "12",
            title: "Metadata & OpenGraph",
            slug: "12-metadata-opengraph",
            description: "Static and dynamic metadata, file-based OG generation with ImageResponse.",
            duration: "15 min",
            completed: false,
          },
          {
            id: "les-13",
            number: "13",
            title: "Static Generation (generateStaticParams)",
            slug: "13-static-generation",
            description: "Pre-rendering dynamic routes ahead of time for edge deployment latency.",
            duration: "20 min",
            completed: false,
          },
          {
            id: "les-14",
            number: "14",
            title: "Production Auditing",
            slug: "14-production-auditing",
            description: "Analyzing bundle sizes, server timing headers, and node runtime diagnostics.",
            duration: "20 min",
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: "course-02",
    slug: "typescript-enterprise-patterns",
    title: "TypeScript Enterprise Patterns",
    category: "Language",
    level: "Advanced",
    instructor: "Maya Lin",
    instructorRole: "Principal Type Systems Architect",
    instructorInitials: "ML",
    description: "Compile-time guarantees, conditional type engines, domain-driven modeling, and resilient Monorepo configurations.",
    lessonsCount: 18,
    estimatedHours: "8.0 hrs",
    access: "# Open Access",
    version: "v5.7 / Enterprise",
    modules: [
      {
        id: "ts-mod-1",
        number: 1,
        title: "Advanced Type System Primitives",
        lessonCountText: "4 lessons · 80 min",
        lessons: [
          {
            id: "ts-01",
            number: "01",
            title: "Conditional Types & Type Distributivity",
            slug: "conditional-types",
            description: "Master pattern matching in types and generic constraints.",
            duration: "20 min",
            completed: false,
          },
          {
            id: "ts-02",
            number: "02",
            title: "Template Literal Types & AST Parsers",
            slug: "template-literal-types",
            description: "Type-level string manipulation, route typing, and schema verification.",
            duration: "20 min",
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: "course-03",
    slug: "distributed-cache-architecture",
    title: "Distributed Cache Architecture",
    category: "Architecture",
    level: "Advanced",
    instructor: "Dr. Elena Vance",
    instructorRole: "Distributed Systems Researcher",
    instructorInitials: "EV",
    description: "Cache invalidation heuristics, consistent hashing algorithms, Redis ring topologies, and high-throughput write-through caching.",
    lessonsCount: 12,
    estimatedHours: "5.5 hrs",
    access: "# Open Access",
    version: "v2.4 / Distributed",
    modules: [
      {
        id: "cache-mod-1",
        number: 1,
        title: "Cache Topologies & Replication",
        lessonCountText: "3 lessons · 60 min",
        lessons: [
          {
            id: "cache-01",
            number: "01",
            title: "Consistent Hashing & Partitioning",
            slug: "consistent-hashing",
            description: "Ring layouts and virtual node distribution across clusters.",
            duration: "20 min",
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: "course-04",
    slug: "modern-state-management-and-signals",
    title: "Modern State Management & Signals",
    category: "Frontend",
    level: "Intermediate",
    instructor: "Aarav Mehta",
    instructorRole: "Reactive Systems Lead",
    instructorInitials: "AM",
    description: "Fine-grained reactivity paradigms, comparing signals vs selectors, mutation boundaries, and memory leak mitigation.",
    lessonsCount: 10,
    estimatedHours: "4.5 hrs",
    access: "# Open Access",
    version: "v3.1 / React 19",
    modules: [
      {
        id: "sig-mod-1",
        number: 1,
        title: "Reactivity Primitives",
        lessonCountText: "3 lessons · 60 min",
        lessons: [
          {
            id: "sig-01",
            number: "01",
            title: "Signals vs Hooks Architecture",
            slug: "signals-vs-hooks",
            description: "Dependency graphs and direct DOM updates without re-rendering trees.",
            duration: "20 min",
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: "course-05",
    slug: "restful-api-design-and-openapi-spec",
    title: "RESTful API Design & OpenAPI Spec",
    category: "Backend",
    level: "Beginner",
    instructor: "Marcus Chen",
    instructorRole: "API Governance Director",
    instructorInitials: "MC",
    description: "Semantic HTTP verb compliance, hypermedia structures, schema auto-generation, and contract testing at scale.",
    lessonsCount: 8,
    estimatedHours: "4.0 hrs",
    access: "# Open Access",
    version: "v3.1 / OAS",
    modules: [
      {
        id: "api-mod-1",
        number: 1,
        title: "Contract-First Architecture",
        lessonCountText: "3 lessons · 55 min",
        lessons: [
          {
            id: "api-01",
            number: "01",
            title: "OpenAPI Specification Modeling",
            slug: "openapi-spec",
            description: "Designing deterministic REST contracts and schemas.",
            duration: "20 min",
            completed: false,
          },
        ],
      },
    ],
  },
  {
    id: "course-06",
    slug: "database-indexing-and-query-tuning",
    title: "Database Indexing & Query Tuning",
    category: "Database",
    level: "Intermediate",
    instructor: "Tariq Al-Mansoor",
    instructorRole: "Database Performance Engineer",
    instructorInitials: "TM",
    description: "B-Tree internals, composite index orders, EXPLAIN output interpretation, and deadlock resolution in high-concurrency systems.",
    lessonsCount: 16,
    estimatedHours: "7.0 hrs",
    access: "# Open Access",
    version: "v16 / SQL",
    modules: [
      {
        id: "db-mod-1",
        number: 1,
        title: "B-Tree Index Physical Storage",
        lessonCountText: "4 lessons · 75 min",
        lessons: [
          {
            id: "db-01",
            number: "01",
            title: "Index Scan vs Bitmap Index Scan",
            slug: "index-scans",
            description: "Analyzing query plans and optimizing high-volume filtering.",
            duration: "25 min",
            completed: false,
          },
        ],
      },
    ],
  },
];

export function getAllCourses(): Course[] {
  return courses;
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(
    (c) => c.slug.toLowerCase() === slug.toLowerCase() || c.id === slug
  );
}

export function getLessonBySlug(course: Course, lessonSlug: string): { lesson: Lesson; moduleNumber: number } | undefined {
  const normalized = lessonSlug.toLowerCase();
  for (const mod of course.modules) {
    const found = mod.lessons.find(
      (l) =>
        l.slug.toLowerCase() === normalized ||
        l.id.toLowerCase() === normalized ||
        l.number === normalized ||
        `0${l.number}`.endsWith(normalized) ||
        normalized.includes(l.slug)
    );
    if (found) {
      return { lesson: found, moduleNumber: mod.number };
    }
  }
  return undefined;
}
