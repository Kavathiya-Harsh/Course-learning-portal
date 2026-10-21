"use client";

import { useState } from "react";
import Link from "next/link";
import { Course, Lesson } from "@/types/course";

interface LessonViewerClientProps {
  course: Course;
  lesson: Lesson;
  moduleNumber: number;
}

export default function LessonViewerClient({
  course,
  lesson,
  moduleNumber,
}: LessonViewerClientProps) {
  const [checklist, setChecklist] = useState({
    item1: true,
    item2: false,
    item3: false,
  });
  const [isBookmarked, setIsBookmarked] = useState(false);

  const allLessons: { lesson: Lesson; modNumber: number }[] = [];
  course.modules.forEach((mod) => {
    mod.lessons.forEach((l) => {
      allLessons.push({ lesson: l, modNumber: mod.number });
    });
  });

  const currentIndex = allLessons.findIndex(
    (item) => item.lesson.slug === lesson.slug || item.lesson.id === lesson.id
  );

  const prevItem = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextItem =
    currentIndex >= 0 && currentIndex < allLessons.length - 1
      ? allLessons[currentIndex + 1]
      : null;

  return (
    <div>
      <div
        style={{
          borderBottom: "1px solid #e2e8f0",
          backgroundColor: "#ffffff",
          padding: "10px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          fontSize: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Link
            href={`/courses/${course.slug}`}
            style={{ color: "#2563eb", fontWeight: 500 }}
          >
            ← Back to Course Overview
          </Link>
          <span style={{ color: "#cbd5e1" }}>|</span>
          <span style={{ color: "#0f172a", fontWeight: 500 }}>
            {course.title}
          </span>
          <span
            style={{
              backgroundColor: "#f1f5f9",
              color: "#475569",
              fontSize: "10.5px",
              fontWeight: 500,
              padding: "2px 6px",
              borderRadius: "4px",
            }}
          >
            Core Track
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span style={{ color: "#64748b" }}>
            Lesson {lesson.number} of {course.lessonsCount} · 28% completed
          </span>

          <button
            type="button"
            onClick={() => setIsBookmarked(!isBookmarked)}
            aria-label="Bookmark"
            style={{
              color: isBookmarked ? "#2563eb" : "#64748b",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill={isBookmarked ? "#2563eb" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
              }
            }}
            aria-label="Share"
            style={{
              color: "#64748b",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className="lesson-layout-container"
        style={{
          display: "grid",
          gridTemplateColumns: "270px 1fr",
          gap: "28px",
          marginTop: "20px",
          alignItems: "start",
        }}
      >
        <aside
          className="learn-card"
          style={{
            padding: "16px",
            backgroundColor: "#ffffff",
            position: "sticky",
            top: "76px",
            maxHeight: "calc(100vh - 100px)",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "4px",
            }}
          >
            <span
              style={{
                fontSize: "10.5px",
                fontWeight: 600,
                color: "#64748b",
                letterSpacing: "0.06em",
              }}
            >
              COURSE CURRICULUM
            </span>
            <span style={{ fontSize: "11px", color: "#64748b" }}>
              {course.modules.length} Modules
            </span>
          </div>

          <h3
            style={{
              fontSize: "13.5px",
              fontWeight: 700,
              color: "#0f172a",
              marginBottom: "14px",
              paddingBottom: "10px",
              borderBottom: "1px solid #f1f5f9",
            }}
          >
            Next.js App Router
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {course.modules.map((mod) => (
              <div key={mod.id}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "11.5px",
                    fontWeight: 600,
                    color: "#334155",
                    marginBottom: "6px",
                  }}
                >
                  <span>
                    Module {mod.number}: {mod.title.split("&")[0].trim()}
                  </span>
                  <span style={{ color: "#94a3b8" }}>
                    {mod.number === 1 ? "4/4" : `0/${mod.lessons.length}`}
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  {mod.lessons.map((l) => {
                    const isActive = l.slug === lesson.slug;
                    return (
                      <Link
                        key={l.id}
                        href={`/courses/${course.slug}/lessons/${l.slug}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "6px 8px",
                          borderRadius: "4px",
                          backgroundColor: isActive ? "#eff6ff" : "transparent",
                          border: isActive ? "1px solid #bfdbfe" : "1px solid transparent",
                          fontSize: "11.5px",
                          color: isActive ? "#1d4ed8" : "#475569",
                          fontWeight: isActive ? 600 : 400,
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span
                            style={{
                              width: "14px",
                              height: "14px",
                              borderRadius: "50%",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              backgroundColor: l.completed
                                ? "#dcfce7"
                                : isActive
                                ? "#2563eb"
                                : "#f1f5f9",
                              color: l.completed
                                ? "#16a34a"
                                : isActive
                                ? "#ffffff"
                                : "#94a3b8",
                              fontSize: "9px",
                              flexShrink: 0,
                            }}
                          >
                            {l.completed ? "✓" : isActive ? "•" : l.number}
                          </span>
                          <span
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              maxWidth: "165px",
                            }}
                          >
                            {l.number} {l.title}
                          </span>
                        </div>
                        <span style={{ fontSize: "10.5px", color: "#94a3b8" }}>
                          {l.duration.replace(" min", "m")}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "18px",
              paddingTop: "12px",
              borderTop: "1px solid #f1f5f9",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              fontSize: "11.5px",
              color: "#64748b",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              <span>Exercise Sandbox</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <span>Help</span>
            </div>
          </div>
        </aside>

        <article>
          <div
            style={{
              fontSize: "11.5px",
              color: "#64748b",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              marginBottom: "12px",
            }}
          >
            <Link href="/courses" style={{ color: "#64748b" }}>
              Courses
            </Link>
            <span>/</span>
            <Link href={`/courses/${course.slug}`} style={{ color: "#64748b" }}>
              Next.js App Router
            </Link>
            <span>/</span>
            <span>Module {moduleNumber}</span>
            <span>/</span>
            <span style={{ color: "#0f172a", fontWeight: 500 }}>{lesson.title}</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                backgroundColor: "#eff6ff",
                color: "#2563eb",
                fontSize: "11px",
                fontWeight: 600,
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              Module {moduleNumber} · Lesson {lesson.number}
            </span>
            <span
              style={{
                backgroundColor: "#f8fafc",
                color: "#64748b",
                border: "1px solid #e2e8f0",
                fontSize: "11px",
                fontWeight: 500,
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              System Design Foundations
            </span>
          </div>

          <h1
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              marginBottom: "10px",
            }}
          >
            {lesson.number} {lesson.title}
          </h1>

          <div
            style={{
              display: "flex",
              gap: "14px",
              fontSize: "12px",
              color: "#64748b",
              marginBottom: "24px",
              alignItems: "center",
            }}
          >
            <span>8 min read</span>
            <span>•</span>
            <span>Code Practice Available</span>
            <span>•</span>
            <span>Updated for Next.js 15+</span>
          </div>

          <div style={{ fontSize: "14px", color: "#334155", lineHeight: 1.65, marginBottom: "22px" }}>
            <p style={{ marginBottom: "12px" }}>
              When building data-driven web platforms, URLs rarely map to static directory names alone. The Next.js App Router utilizes strict directory conventions to resolve dynamic segments without requiring custom regex routing tables.
            </p>
            <p>
              A dynamic segment is defined by wrapping a folder name in square brackets: <code style={{ backgroundColor: "#f1f5f9", padding: "2px 5px", borderRadius: "3px", fontSize: "13px" }}>[slug]</code> or <code style={{ backgroundColor: "#f1f5f9", padding: "2px 5px", borderRadius: "3px", fontSize: "13px" }}>[id]</code>. This segment parameter is passed directly to the route&apos;s layout, page, and route handler functions via the asynchronous <code style={{ backgroundColor: "#f1f5f9", padding: "2px 5px", borderRadius: "3px", fontSize: "13px" }}>params</code> promise.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
              marginBottom: "28px",
            }}
          >
            <div
              className="learn-card"
              style={{
                padding: "16px",
                backgroundColor: "#ffffff",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    fontSize: "10.5px",
                    fontWeight: 600,
                    color: "#64748b",
                    letterSpacing: "0.06em",
                  }}
                >
                  SINGLE DYNAMIC SEGMENT
                </span>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "11px",
                    color: "#2563eb",
                    backgroundColor: "#eff6ff",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  [param]
                </span>
              </div>
              <p style={{ fontSize: "12px", color: "#475569", lineHeight: 1.45, marginBottom: "12px" }}>
                Matches a single path element. For instance, <code style={{ fontSize: "11.5px" }}>app/posts/[id]/page.tsx</code> matches <code style={{ fontSize: "11.5px" }}>/posts/alpha</code>.
              </p>
              <div
                style={{
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "5px",
                  padding: "8px 12px",
                  fontFamily: "monospace",
                  fontSize: "11.5px",
                  color: "#334155",
                }}
              >
                params: &#123; id: &quot;alpha&quot; &#125;
              </div>
            </div>

            <div
              className="learn-card"
              style={{
                padding: "16px",
                backgroundColor: "#ffffff",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    fontSize: "10.5px",
                    fontWeight: 600,
                    color: "#64748b",
                    letterSpacing: "0.06em",
                  }}
                >
                  CATCH-ALL SEGMENT
                </span>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "11px",
                    color: "#2563eb",
                    backgroundColor: "#eff6ff",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  [...slug]
                </span>
              </div>
              <p style={{ fontSize: "12px", color: "#475569", lineHeight: 1.45, marginBottom: "12px" }}>
                Captures multiple arbitrary nested segments sequentially into a string array.
              </p>
              <div
                style={{
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "5px",
                  padding: "8px 12px",
                  fontFamily: "monospace",
                  fontSize: "11.5px",
                  color: "#334155",
                }}
              >
                params: &#123; slug: [&quot;docs&quot;, &quot;v2&quot;, &quot;routing&quot;] &#125;
              </div>
            </div>
          </div>

          <div style={{ marginBottom: "26px" }}>
            <h2
              style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "#0f172a",
                marginBottom: "10px",
              }}
            >
              The Catch-All Convention ([...slug])
            </h2>
            <p style={{ fontSize: "13.5px", color: "#334155", lineHeight: 1.6, marginBottom: "16px" }}>
              In hierarchical taxonomies such as documentation trees, e-commerce categorization, or multi-tenant CMS architectures, the path depth cannot always be predicted at build time. By prefixing the folder identifier with an ellipsis (<code style={{ backgroundColor: "#f1f5f9", padding: "2px 4px", borderRadius: "3px" }}>...</code>), you instruct the router to consume all child route segments into an array.
            </p>

            <div
              style={{
                backgroundColor: "#0f172a",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid #1e293b",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  padding: "8px 14px",
                  backgroundColor: "#1e293b",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontSize: "11px",
                  color: "#94a3b8",
                  fontFamily: "monospace",
                }}
              >
                <span>app/blog/[...slug]/page.tsx</span>
                <span style={{ color: "#38bdf8" }}>TypeScript</span>
              </div>
              <pre
                style={{
                  padding: "16px",
                  fontFamily: "monospace",
                  fontSize: "12.5px",
                  color: "#f8fafc",
                  lineHeight: 1.6,
                  overflowX: "auto",
                }}
              >
{`export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params;

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold">
        Viewing slug path: {slug.join('/')}
      </h1>
    </section>
  );
}`}
              </pre>
            </div>

            <p style={{ fontSize: "13.5px", color: "#475569", lineHeight: 1.55 }}>
              Note that standard catch-all routes will return a 404 error if the base segment is requested without parameters (e.g., querying <code style={{ backgroundColor: "#f1f5f9", padding: "2px 4px", borderRadius: "3px" }}>/blog</code> directly). If you wish to match the parent route as well, wrap the folder in double brackets: <code style={{ backgroundColor: "#f1f5f9", padding: "2px 4px", borderRadius: "3px" }}>[[...slug]]</code> (Optional Catch-all).
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#eff6ff",
              borderLeft: "4px solid #2563eb",
              borderRadius: "0 6px 6px 0",
              padding: "14px 18px",
              marginBottom: "26px",
            }}
          >
            <div
              style={{
                fontSize: "12.5px",
                fontWeight: 600,
                color: "#1e40af",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginBottom: "4px",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              Key Takeaway
            </div>
            <p style={{ fontSize: "12.5px", color: "#1e3a8a", lineHeight: 1.5 }}>
              Catch-all routes (<code style={{ backgroundColor: "#dbeafe", padding: "1px 4px", borderRadius: "3px" }}>[...slug]</code>) capture all nested path segments into an array of strings. Always remember that starting in modern Next.js versions, the <code style={{ backgroundColor: "#dbeafe", padding: "1px 4px", borderRadius: "3px" }}>params</code> prop must be awaited before accessing its constituent segments.
            </p>
          </div>

          <div
            className="learn-card"
            style={{
              padding: "18px",
              backgroundColor: "#ffffff",
              marginBottom: "28px",
            }}
          >
            <h3
              style={{
                fontSize: "13.5px",
                fontWeight: 600,
                color: "#0f172a",
                marginBottom: "12px",
              }}
            >
              Self-Assessment Checklist
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "12.5px",
                  color: "#334155",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={checklist.item1}
                  onChange={(e) => setChecklist({ ...checklist, item1: e.target.checked })}
                />
                I understand how folder nesting maps brackets to runtime URL resolution.
              </label>

              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "12.5px",
                  color: "#334155",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={checklist.item2}
                  onChange={(e) => setChecklist({ ...checklist, item2: e.target.checked })}
                />
                I can differentiate between single segment [slug] and catch-all array [...slug].
              </label>

              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "12.5px",
                  color: "#334155",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={checklist.item3}
                  onChange={(e) => setChecklist({ ...checklist, item3: e.target.checked })}
                />
                I have verified how async params resolution functions in Next.js 15 Server Components.
              </label>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
              paddingTop: "16px",
              borderTop: "1px solid #e2e8f0",
            }}
          >
            {prevItem ? (
              <Link
                href={`/courses/${course.slug}/lessons/${prevItem.lesson.slug}`}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #cbd5e1",
                  borderRadius: "5px",
                  padding: "8px 14px",
                  fontSize: "12px",
                  color: "#334155",
                  fontWeight: 500,
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                }}
              >
                <span style={{ fontSize: "10px", color: "#64748b" }}>← PREVIOUS LESSON</span>
                <span>{prevItem.lesson.number} {prevItem.lesson.title}</span>
              </Link>
            ) : <div />}

            {nextItem ? (
              <Link
                href={`/courses/${course.slug}/lessons/${nextItem.lesson.slug}`}
                style={{
                  backgroundColor: "#2563eb",
                  borderRadius: "5px",
                  padding: "8px 16px",
                  fontSize: "12px",
                  color: "#ffffff",
                  fontWeight: 500,
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  textAlign: "right",
                }}
              >
                <span style={{ fontSize: "10px", color: "#bfdbfe" }}>NEXT LESSON →</span>
                <span>{nextItem.lesson.number} {nextItem.lesson.title}</span>
              </Link>
            ) : <div />}
          </div>
        </article>
      </div>
    </div>
  );
}
