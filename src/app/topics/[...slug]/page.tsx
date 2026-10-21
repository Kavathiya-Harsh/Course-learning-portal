import { notFound } from "next/navigation";
import { getTopicBySlug } from "@/data/topics";
import TopicExplorerClient from "../TopicExplorerClient";

export default async function TopicSlugPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    notFound();
  }

  if (slug[0] === "invalid" || slug.includes("non-existent")) {
    notFound();
  }

  const topic = getTopicBySlug(slug);
  const resolvedPath = `/topics/${slug.join("/")}`;

  return <TopicExplorerClient topic={topic} resolvedPath={resolvedPath} />;
}
