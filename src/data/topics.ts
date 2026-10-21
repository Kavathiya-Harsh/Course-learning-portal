import { TopicTrack } from "@/types/topic";

export const defaultTopic: TopicTrack = {
  slugSegments: ["frontend", "react"],
  fullSlug: "frontend/react",
  title: "React & Next.js Ecosystem",
  badge: "SPECIALIZED DOMAIN TRACK",
  description:
    "Deep dive into component architecture, state machines, server rendering paradigms, and modern framework primitives designed for production-scale distributed applications.",
  totalLessons: 44,
  difficultyRange: "Int. to Advanced",
  corePrimitives: "RSC, Hydration, Signals",
  verification: "Peer-Reviewed",
  modules: [
    {
      moduleNumber: "Module 01",
      title: "Next.js App Router Fundamentals",
      lessonsCount: 14,
      level: "Intermediate",
      description:
        "Master nested layouts, parallel slots, intercepting routes, dynamic segment matching, and optimized loading boundaries in modern Next.js architectures.",
      author: "Alex Rivera",
      authorRole: "Senior Platform Architect",
      slugPath: "/frontend/react/nextjs-fundamentals",
      courseSlug: "nextjs-app-router-fundamentals",
      category: "Routing Architecture",
    },
    {
      moduleNumber: "Module 02",
      title: "Modern State Management & Signals",
      lessonsCount: 10,
      level: "Intermediate",
      description:
        "Compare atom-based paradigms, reactive signals, finite state machines, and context optimization strategies without unnecessary component re-renders.",
      author: "Aarav Mehta",
      authorRole: "Reactive Systems Lead",
      slugPath: "/frontend/react/state-signals",
      courseSlug: "modern-state-management-and-signals",
      category: "State & Signals",
    },
    {
      moduleNumber: "Module 03",
      title: "React Server Components Under the Hood",
      lessonsCount: 8,
      level: "Advanced",
      description:
        "Dissect serialized Flight data streams, module boundary graph splitting, selective client hydration, and zero-bundle server logic primitives.",
      author: "Sarah Lin",
      authorRole: "Compilers & Runtimes Researcher",
      slugPath: "/frontend/react/rsc-internals",
      courseSlug: "nextjs-app-router-fundamentals",
      category: "Server Components",
    },
    {
      moduleNumber: "Module 04",
      title: "Enterprise Monorepo Architectures with React",
      lessonsCount: 12,
      level: "Advanced",
      description:
        "Build isolated UI design component packages, orchestrate Turborepo pipelines, configure isolated bundlers, and enforce package isolation boundaries.",
      author: "Marcus Chen",
      authorRole: "Enterprise Infrastructure Lead",
      slugPath: "/frontend/react/monorepo-systems",
      courseSlug: "typescript-enterprise-patterns",
      category: "Routing Architecture",
    },
  ],
  relatedPaths: [
    {
      title: "Frontend Architecture",
      description: "Design systems, micro-frontends & testing at scale",
      tracksText: "5 Tracks →",
      href: "/topics/frontend/architecture",
    },
    {
      title: "Distributed Web",
      description: "Edge computing, caching layers & geo-routing",
      tracksText: "5 Tracks →",
      href: "/topics/backend/distributed-web",
    },
    {
      title: "TypeScript Deep Dive",
      description: "Conditional types, template literals & ASTs",
      tracksText: "4 Tracks →",
      href: "/topics/languages/typescript",
    },
  ],
};

const topicRegistry: Record<string, TopicTrack> = {
  "frontend/react": defaultTopic,
  "frontend/architecture": {
    slugSegments: ["frontend", "architecture"],
    fullSlug: "frontend/architecture",
    title: "Frontend Systems Architecture",
    badge: "ENGINEERING DOMAIN TRACK",
    description:
      "Enterprise design systems, micro-frontend runtimes, module federation, and performance budgets for large web products.",
    totalLessons: 32,
    difficultyRange: "Advanced",
    corePrimitives: "Module Federation, Design Tokens, Profiling",
    verification: "Peer-Reviewed",
    modules: [
      {
        moduleNumber: "Module 01",
        title: "Micro-Frontend Runtimes & Module Federation",
        lessonsCount: 10,
        level: "Advanced",
        description: "Compose distributed client micro-apps into cohesive user workspaces.",
        author: "Alex Rivera",
        authorRole: "Senior Platform Architect",
        slugPath: "/frontend/architecture/federation",
        courseSlug: "nextjs-app-router-fundamentals",
        category: "Routing Architecture",
      },
    ],
    relatedPaths: defaultTopic.relatedPaths,
  },
  "backend/distributed-web": {
    slugSegments: ["backend", "distributed-web"],
    fullSlug: "backend/distributed-web",
    title: "Distributed Web & Edge Systems",
    badge: "INFRASTRUCTURE DOMAIN TRACK",
    description:
      "Edge runtime compute, global cache topologies, CDN routing rules, and resilient streaming protocols.",
    totalLessons: 28,
    difficultyRange: "Advanced",
    corePrimitives: "Edge Compute, Redis Topologies, Streaming",
    verification: "Peer-Reviewed",
    modules: [
      {
        moduleNumber: "Module 01",
        title: "Distributed Cache Architecture",
        lessonsCount: 12,
        level: "Advanced",
        description: "Consistent hashing, cache invalidation, and low-latency storage.",
        author: "Dr. Elena Vance",
        authorRole: "Distributed Systems Researcher",
        slugPath: "/backend/distributed-web/caching",
        courseSlug: "distributed-cache-architecture",
        category: "Server Components",
      },
    ],
    relatedPaths: defaultTopic.relatedPaths,
  },
  "languages/typescript": {
    slugSegments: ["languages", "typescript"],
    fullSlug: "languages/typescript",
    title: "TypeScript Enterprise Foundations",
    badge: "LANGUAGE SPECIFICATION TRACK",
    description:
      "Deep type-level programming, conditional distribution, AST transformation, and compiler plugin architectures.",
    totalLessons: 36,
    difficultyRange: "Int. to Advanced",
    corePrimitives: "Mapped Types, Template Literals, AST",
    verification: "Peer-Reviewed",
    modules: [
      {
        moduleNumber: "Module 01",
        title: "TypeScript Enterprise Patterns",
        lessonsCount: 18,
        level: "Advanced",
        description: "Type-level safety, monorepo configurations, and domain-driven design.",
        author: "Maya Lin",
        authorRole: "Principal Type Systems Architect",
        slugPath: "/languages/typescript/patterns",
        courseSlug: "typescript-enterprise-patterns",
        category: "State & Signals",
      },
    ],
    relatedPaths: defaultTopic.relatedPaths,
  },
};

export function getTopicBySlug(slugSegments: string[]): TopicTrack {
  const key = slugSegments.join("/").toLowerCase();
  if (topicRegistry[key]) {
    return topicRegistry[key];
  }
  for (const registryKey of Object.keys(topicRegistry)) {
    if (registryKey.includes(slugSegments[0]?.toLowerCase())) {
      return topicRegistry[registryKey];
    }
  }
  return {
    ...defaultTopic,
    slugSegments,
    fullSlug: key,
    title: `${slugSegments.map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(" ")} Learning Track`,
  };
}

export function getAllTopicKeys(): string[] {
  return Object.keys(topicRegistry);
}
