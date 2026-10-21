"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const isCoursesActive = pathname === "/" || pathname.startsWith("/courses");
  const isTopicsActive = pathname.startsWith("/topics");
  const isAboutActive = pathname.startsWith("/about");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/courses?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e2e8f0",
        position: "sticky",
        top: 0,
        zIndex: 40,
      }}
    >
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          padding: "0 20px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <Link
            href="/courses"
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#2563eb",
              letterSpacing: "-0.02em",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            LearnSpace
          </Link>

          <form onSubmit={handleSearchSubmit} style={{ position: "relative" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                padding: "6px 10px",
                width: "240px",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginRight: "8px", flexShrink: 0 }}
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search syllabus or topics..."
                style={{
                  border: "none",
                  outline: "none",
                  backgroundColor: "transparent",
                  fontSize: "12px",
                  color: "#0f172a",
                  width: "100%",
                }}
              />
            </div>
          </form>
        </div>

        <nav style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link
            href="/courses"
            style={{
              fontSize: "13.5px",
              fontWeight: isCoursesActive ? 600 : 500,
              color: isCoursesActive ? "#2563eb" : "#475569",
              paddingBottom: "2px",
              borderBottom: isCoursesActive ? "2px solid #2563eb" : "2px solid transparent",
            }}
          >
            Courses
          </Link>
          <Link
            href="/topics"
            style={{
              fontSize: "13.5px",
              fontWeight: isTopicsActive ? 600 : 500,
              color: isTopicsActive ? "#2563eb" : "#475569",
              paddingBottom: "2px",
              borderBottom: isTopicsActive ? "2px solid #2563eb" : "2px solid transparent",
            }}
          >
            Topics
          </Link>
          <Link
            href="/about"
            style={{
              fontSize: "13.5px",
              fontWeight: isAboutActive ? 600 : 500,
              color: isAboutActive ? "#2563eb" : "#475569",
              paddingBottom: "2px",
              borderBottom: isAboutActive ? "2px solid #2563eb" : "2px solid transparent",
            }}
          >
            About
          </Link>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            type="button"
            aria-label="Notifications"
            style={{
              color: "#64748b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "4px",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Help"
            style={{
              color: "#64748b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "4px",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </button>

          <Link
            href="/about"
            style={{
              backgroundColor: "#2563eb",
              color: "#ffffff",
              fontSize: "12.5px",
              fontWeight: 500,
              padding: "6px 14px",
              borderRadius: "5px",
            }}
          >
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}
