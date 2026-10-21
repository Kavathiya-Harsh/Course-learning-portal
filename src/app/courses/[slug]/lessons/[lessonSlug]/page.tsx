import { notFound } from "next/navigation";
import { getCourseBySlug, getLessonBySlug } from "@/data/courses";
import LessonViewerClient from "./LessonViewerClient";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string; lessonSlug: string }>;
}) {
  const { slug, lessonSlug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const result = getLessonBySlug(course, lessonSlug);

  if (!result) {
    notFound();
  }

  return (
    <LessonViewerClient
      course={course}
      lesson={result.lesson}
      moduleNumber={result.moduleNumber}
    />
  );
}
