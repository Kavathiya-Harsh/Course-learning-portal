import { courses } from "@/data/courses";
import CoursesClient from "./CoursesClient";

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const resolved = await searchParams;
  const initialCategory = resolved.category || "All Courses";
  const initialQuery = resolved.q || "";

  return (
    <CoursesClient
      initialCourses={courses}
      initialCategory={initialCategory}
      initialQuery={initialQuery}
    />
  );
}
