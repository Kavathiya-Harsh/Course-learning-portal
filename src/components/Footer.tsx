import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e2e8f0",
        backgroundColor: "#ffffff",
        padding: "20px 24px",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          fontSize: "12px",
          color: "#64748b",
        }}
      >
        <div>
          © 2025 LearnSpace Inc. Disciplined academic minimalist curriculum engine.
        </div>
        <div style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
          <Link href="/about" style={{ color: "#64748b" }}>
            Documentation
          </Link>
          <Link href="/courses" style={{ color: "#64748b" }}>
            Curriculum Index
          </Link>
          <Link href="/about" style={{ color: "#64748b" }}>
            Privacy
          </Link>
          <Link href="/about" style={{ color: "#64748b" }}>
            Terms
          </Link>
          <Link href="/about" style={{ color: "#64748b" }}>
            System Status
          </Link>
        </div>
      </div>
    </footer>
  );
}
