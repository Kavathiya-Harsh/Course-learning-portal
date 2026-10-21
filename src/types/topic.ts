export interface TopicModule {
  moduleNumber: string;
  title: string;
  lessonsCount: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  author: string;
  authorRole: string;
  slugPath: string;
  courseSlug: string;
  category: string;
}

export interface RelatedLearningPath {
  title: string;
  description: string;
  tracksText: string;
  href: string;
}

export interface TopicTrack {
  slugSegments: string[];
  fullSlug: string;
  title: string;
  badge: string;
  description: string;
  totalLessons: number;
  difficultyRange: string;
  corePrimitives: string;
  verification: string;
  modules: TopicModule[];
  relatedPaths: RelatedLearningPath[];
}
