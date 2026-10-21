import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function NotFound() {
  const suggestedLessons = [
    {
      number: "01",
      title: "Introduction & Philosophy",
      subtitle: "Course foundation & setup",
      slug: "01-introduction-philosophy",
    },
    {
      number: "02",
      title: "Server vs Client Components",
      subtitle: "RSC boundary primitives",
      slug: "02-server-vs-client-components",
    },
    {
      number: "03",
      title: "Nested Layouts & Templates",
      subtitle: "Route composition model",
      slug: "03-nested-layouts-templates",
    },
    {
      number: "04",
      title: "Dynamic & Catch-All Routes",
      subtitle: "Slug matchers & params",
      slug: "04-dynamic-catch-all-routes",
    },
  ];

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
            {
              label: "Next.js App Router",
              href: "/courses/nextjs-app-router-fundamentals",
            },
            { label: "Unresolved Lesson" },
          ]}
        />

        <Link
          href="/courses/nextjs-app-router-fundamentals"
          style={{
            fontSize: "12px",
            color: "#2563eb",
            fontWeight: 500,
          }}
        >
          ← Back to syllabus
        </Link>
      </div>

      <div
        style={{
          maxWidth: "680px",
          margin: "10px auto 40px auto",
        }}
      >
        <div
          className="learn-card"
          style={{
            padding: "24px 28px",
            backgroundColor: "#ffffff",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                backgroundColor: "#eff6ff",
                color: "#2563eb",
                border: "1px solid #bfdbfe",
                fontSize: "11px",
                fontWeight: 600,
                padding: "3px 10px",
                borderRadius: "9999px",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  backgroundColor: "#2563eb",
                }}
              />
              404 · Unresolved Lesson Route
            </span>

            <span
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                color: "#64748b",
                backgroundColor: "#f8fafc",
                border: "1px solid #e2e8f0",
                padding: "2px 8px",
                borderRadius: "4px",
              }}
            >
              HTTP 404
            </span>
          </div>

          <h1
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#0f172a",
              marginBottom: "8px",
            }}
          >
            Lesson not found
          </h1>

          <p
            style={{
              fontSize: "13px",
              color: "#475569",
              lineHeight: 1.5,
              marginBottom: "20px",
            }}
          >
            The lesson or learning module you requested could not be located in this curriculum track. It may have been relocated, deprecated, or the lesson identifier syntax is invalid.
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginBottom: "28px",
            }}
          >
            <Link
              href="/courses/nextjs-app-router-fundamentals"
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                padding: "8px 16px",
                borderRadius: "5px",
                fontSize: "12.5px",
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              ← Return to Course Overview
            </Link>

            <Link
              href="/courses"
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #cbd5e1",
                color: "#334155",
                padding: "8px 16px",
                borderRadius: "5px",
                fontSize: "12.5px",
                fontWeight: 500,
              }}
            >
              Browse All Courses
            </Link>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "12px",
              }}
            >
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#0f172a" }}>
                Suggested alternative lessons in this course:
              </span>
              <span style={{ fontSize: "11px", color: "#64748b" }}>
                4 Modules Available
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              {suggestedLessons.map((item) => (
                <Link
                  key={item.number}
                  href={`/courses/nextjs-app-router-fundamentals/lessons/${item.slug}`}
                  style={{
                    border: "1px solid #e2e8f0",
                    borderRadius: "6px",
                    padding: "10px 12px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#ffffff",
                    transition: "border-color 0.15s ease",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#0f172a",
                        marginBottom: "2px",
                      }}
                    >
                      {item.number} {item.title}
                    </div>
                    <div style={{ fontSize: "11px", color: "#64748b" }}>
                      {item.subtitle}
                    </div>
                  </div>
                  <span style={{ color: "#94a3b8", fontSize: "12px" }}>→</span>
                </Link>
              ))}
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "6px",
              padding: "12px 14px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                fontSize: "10px",
                fontWeight: 600,
                color: "#64748b",
                letterSpacing: "0.06em",
                marginBottom: "6px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
              DIAGNOSTIC RUNTIME LOG
            </div>
            <div
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                lineHeight: 1.5,
                color: "#dc2626",
              }}
            >
              <div>&gt; Router boundary: notFound() triggered at segment /lessons/undefined-module-id</div>
              <div style={{ color: "#64748b" }}>&gt; Code reference: return notFound() inside layout or page component</div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "11px",
              color: "#64748b",
              borderTop: "1px solid #f1f5f9",
              paddingTop: "12px",
            }}
          >
            <span>Curriculum Track: Next.js App Router Architecture v14.2</span>
            <Link
              href="/about"
              style={{ color: "#2563eb", textDecoration: "none" }}
            >
              Report broken link
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
