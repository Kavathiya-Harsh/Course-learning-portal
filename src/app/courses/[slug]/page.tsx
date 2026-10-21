import Link from "next/link";
import { notFound } from "next/navigation";
import { getCourseBySlug } from "@/data/courses";
import Breadcrumbs from "@/components/Breadcrumbs";

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const firstLessonSlug =
    course.modules[0]?.lessons[0]?.slug || "01-introduction-philosophy";

  return (
    <div className="main-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <Breadcrumbs
          items={[
            { label: "Courses", href: "/courses" },
            { label: course.title },
          ]}
        />

        <Link
          href="/courses"
          style={{
            fontSize: "12.5px",
            color: "#64748b",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          ← Back to courses
        </Link>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 310px",
          gap: "24px",
          alignItems: "start",
          marginBottom: "36px",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              flexWrap: "wrap",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                backgroundColor: "#eff6ff",
                color: "#2563eb",
                fontSize: "11px",
                fontWeight: 500,
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              {course.level}
            </span>
            <span
              style={{
                backgroundColor: "#f8fafc",
                color: "#475569",
                border: "1px solid #e2e8f0",
                fontSize: "11px",
                fontWeight: 500,
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              {course.lessonsCount} Lessons
            </span>
            <span
              style={{
                backgroundColor: "#f8fafc",
                color: "#475569",
                border: "1px solid #e2e8f0",
                fontSize: "11px",
                fontWeight: 500,
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              Estimated {course.estimatedHours}
            </span>
            <span
              style={{
                backgroundColor: "#eff6ff",
                color: "#2563eb",
                fontSize: "11px",
                fontWeight: 500,
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              {course.access}
            </span>
          </div>

          <h1
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#0f172a",
              letterSpacing: "-0.02em",
              marginBottom: "12px",
            }}
          >
            {course.title}
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "#f1f5f9",
                border: "1px solid #cbd5e1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11.5px",
                fontWeight: 600,
                color: "#334155",
              }}
            >
              {course.instructorInitials}
            </div>
            <div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#0f172a" }}>
                {course.instructor}
              </div>
              <div style={{ fontSize: "11.5px", color: "#64748b" }}>
                {course.instructorRole}
              </div>
            </div>
          </div>

          <p
            style={{
              fontSize: "13.5px",
              color: "#475569",
              lineHeight: 1.55,
              marginBottom: "20px",
              maxWidth: "680px",
            }}
          >
            {course.description}
          </p>

          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Link
              href={`/courses/${course.slug}/lessons/${firstLessonSlug}`}
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                padding: "9px 20px",
                borderRadius: "5px",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              Start learning
            </Link>
            <a
              href="#syllabus"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #cbd5e1",
                color: "#334155",
                padding: "9px 18px",
                borderRadius: "5px",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              View syllabus
            </a>
          </div>
        </div>

        <div
          className="learn-card"
          style={{
            padding: "18px",
            backgroundColor: "#ffffff",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "14px",
              paddingBottom: "10px",
              borderBottom: "1px solid #f1f5f9",
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
              CURRICULUM STRUCTURE
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 500,
                color: "#2563eb",
              }}
            >
              {course.version}
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "#0f172a", marginBottom: "2px" }}>
                Zero Dependencies
              </div>
              <div style={{ fontSize: "11px", color: "#64748b", lineHeight: 1.4 }}>
                Self-contained in-browser sandboxes and local execution paths.
              </div>
            </div>

            <div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "#0f172a", marginBottom: "2px" }}>
                Code-Centric Pedagogy
              </div>
              <div style={{ fontSize: "11px", color: "#64748b", lineHeight: 1.4 }}>
                Structured architectural blueprints and source comparisons.
              </div>
            </div>

            <div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "#0f172a", marginBottom: "2px" }}>
                Production Auditing
              </div>
              <div style={{ fontSize: "11px", color: "#64748b", lineHeight: 1.4 }}>
                Includes cache profiling and server mutation boundaries.
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "16px",
              paddingTop: "14px",
              borderTop: "1px solid #f1f5f9",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "11.5px",
            }}
          >
            <span style={{ color: "#64748b" }}>Progress tracking</span>
            <span style={{ color: "#2563eb", fontWeight: 500 }}>Unenrolled - Free</span>
          </div>
        </div>
      </div>

      <div id="syllabus" style={{ marginBottom: "32px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "16px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "#0f172a",
                marginBottom: "4px",
              }}
            >
              Course Curriculum
            </h2>
            <div style={{ fontSize: "12.5px", color: "#64748b" }}>
              {course.modules.length} Modules · {course.lessonsCount} Comprehensive Technical Lessons
            </div>
          </div>
          <div style={{ fontSize: "12px", color: "#64748b" }}>
            + Test & Code · Guided Walkthroughs
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {course.modules.map((mod) => (
            <div
              key={mod.id}
              className="learn-card"
              style={{
                overflow: "hidden",
                backgroundColor: "#ffffff",
              }}
            >
              <div
                style={{
                  padding: "14px 18px",
                  backgroundColor: "#fcfdfe",
                  borderBottom: "1px solid #f1f5f9",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "10.5px",
                      fontWeight: 600,
                      color: "#2563eb",
                      letterSpacing: "0.04em",
                      marginBottom: "2px",
                    }}
                  >
                    Module {mod.number}
                  </div>
                  <div style={{ fontSize: "13.5px", fontWeight: 600, color: "#0f172a" }}>
                    {mod.title}
                  </div>
                </div>
                <div style={{ fontSize: "12px", color: "#64748b" }}>
                  {mod.lessonCountText}
                </div>
              </div>

              <div>
                {mod.lessons.map((lesson, idx) => (
                  <Link
                    key={lesson.id}
                    href={`/courses/${course.slug}/lessons/${lesson.slug}`}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "12px 18px",
                      borderTop: idx > 0 ? "1px solid #f8fafc" : "none",
                      transition: "background-color 0.1s ease",
                    }}
                  >
                    <div style={{ display: "flex", gap: "14px", alignItems: "baseline" }}>
                      <span
                        style={{
                          fontSize: "11.5px",
                          fontWeight: 500,
                          color: "#94a3b8",
                          width: "20px",
                        }}
                      >
                        {lesson.number}
                      </span>
                      <div>
                        <div
                          style={{
                            fontSize: "13px",
                            fontWeight: 500,
                            color: "#0f172a",
                            marginBottom: "2px",
                          }}
                        >
                          {lesson.title}
                        </div>
                        <div style={{ fontSize: "11.5px", color: "#64748b" }}>
                          {lesson.description}
                        </div>
                      </div>
                    </div>

                    <div
                      style={{
                        fontSize: "11.5px",
                        color: "#94a3b8",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {lesson.duration} &gt;
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="learn-card"
        style={{
          padding: "18px 22px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "13.5px",
              fontWeight: 600,
              color: "#0f172a",
              marginBottom: "4px",
            }}
          >
            Ready to start Module 1?
          </div>
          <div style={{ fontSize: "12px", color: "#64748b" }}>
            Begin with Lesson 01: Introduction & Philosophy. No prerequisites required.
          </div>
        </div>

        <Link
          href={`/courses/${course.slug}/lessons/${firstLessonSlug}`}
          style={{
            backgroundColor: "#2563eb",
            color: "#ffffff",
            padding: "8px 18px",
            borderRadius: "5px",
            fontSize: "12.5px",
            fontWeight: 500,
          }}
        >
          Start learning
        </Link>
      </div>
    </div>
  );
}
