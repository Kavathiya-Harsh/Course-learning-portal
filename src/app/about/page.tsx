import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AboutPage() {
  return (
    <div className="main-container">
      <Breadcrumbs
        items={[
          { label: "Index", href: "/" },
          { label: "About" },
        ]}
      />

      <div style={{ maxWidth: "780px", marginBottom: "40px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 600,
            color: "#2563eb",
            letterSpacing: "0.06em",
            marginBottom: "6px",
          }}
        >
          PLATFORM ARCHITECTURE & PEDAGOGY
        </div>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#0f172a",
            letterSpacing: "-0.02em",
            marginBottom: "10px",
          }}
        >
          About LearnSpace
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "#64748b",
            lineHeight: 1.6,
            marginBottom: "28px",
          }}
        >
          LearnSpace is a disciplined academic minimalist curriculum engine engineered to train developers and engineers in advanced distributed software architectures, type systems, and modern framework primitives.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            className="learn-card"
            style={{ padding: "20px", backgroundColor: "#ffffff" }}
          >
            <h2
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#0f172a",
                marginBottom: "6px",
              }}
            >
              Curriculum Sequencing Engine
            </h2>
            <p style={{ fontSize: "13px", color: "#475569", lineHeight: 1.55 }}>
              Courses are structured along prerequisite graphs. Each module introduces strict mental models before exploring source-level mechanics, ensuring engineers build deep intuition for production systems.
            </p>
          </div>

          <div
            className="learn-card"
            style={{ padding: "20px", backgroundColor: "#ffffff" }}
          >
            <h2
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#0f172a",
                marginBottom: "6px",
              }}
            >
              Next.js 15 App Router Foundations
            </h2>
            <p style={{ fontSize: "13px", color: "#475569", lineHeight: 1.55 }}>
              The platform is built natively using React Server Components, dynamic segments, catch-all routing arrays, asynchronous params resolution, and granular streaming boundaries.
            </p>
          </div>

          <div
            className="learn-card"
            style={{ padding: "20px", backgroundColor: "#ffffff" }}
          >
            <h2
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#0f172a",
                marginBottom: "6px",
              }}
            >
              Peer-Reviewed Verification
            </h2>
            <p style={{ fontSize: "13px", color: "#475569", lineHeight: 1.55 }}>
              All tracks are audited by platform architects and distributed systems researchers. Assessments verify determinism and idiomatic design without proprietary lock-in.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "28px" }}>
          <Link
            href="/courses"
            style={{
              backgroundColor: "#2563eb",
              color: "#ffffff",
              padding: "9px 20px",
              borderRadius: "5px",
              fontSize: "13px",
              fontWeight: 500,
            }}
          >
            Explore Curriculum Directory →
          </Link>
        </div>
      </div>
    </div>
  );
}
