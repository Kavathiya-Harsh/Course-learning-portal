export interface Lesson {
  id: string;
  number: string;
  title: string;
  slug: string;
  description: string;
  duration: string;
  readTime?: string;
  completed?: boolean;
}

export interface CourseModule {
  id: string;
  number: number;
  title: string;
  lessonCountText: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: "Frontend" | "Backend" | "Architecture" | "Language" | "Database" | "Fundamentals";
  level: "Beginner" | "Intermediate" | "Advanced";
  instructor: string;
  instructorRole: string;
  instructorInitials: string;
  description: string;
  lessonsCount: number;
  estimatedHours: string;
  access: string;
  version: string;
  modules: CourseModule[];
}
