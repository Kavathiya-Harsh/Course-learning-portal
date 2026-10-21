"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Course } from "@/types/course";

interface CoursesClientProps {
  initialCourses: Course[];
  initialCategory?: string;
  initialQuery?: string;
}

export default function CoursesClient({
  initialCourses,
  initialCategory = "All Courses",
  initialQuery = "",
}: CoursesClientProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchFilter, setSearchFilter] = useState(initialQuery);

  const categories = [
    "All Courses",
    "Frontend",
    "Backend",
    "Architecture",
    "Fundamentals",
  ];

  const filteredCourses = useMemo(() => {
    return initialCourses.filter((course) => {
      const matchesCategory =
        selectedCategory === "All Courses" ||
        course.category.toLowerCase() === selectedCategory.toLowerCase() ||
        (selectedCategory === "Fundamentals" &&
          (course.category === "Language" || course.category === "Database"));

      const q = searchFilter.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        course.title.toLowerCase().includes(q) ||
        course.description.toLowerCase().includes(q) ||
        course.instructor.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [initialCourses, selectedCategory, searchFilter]);

  return (
    <div className="main-container">
      <Breadcrumbs
        items={[
          { label: "Index", href: "/" },
          { label: "Courses" },
        ]}
      />

      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 600,
            color: "#2563eb",
            letterSpacing: "0.06em",
            marginBottom: "6px",
          }}
        >
          CURRICULUM DIRECTORY 2025
        </div>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#0f172a",
            letterSpacing: "-0.02em",
            marginBottom: "6px",
          }}
        >
          Explore courses
        </h1>
        <p
          style={{
            fontSize: "13.5px",
            color: "#64748b",
          }}
        >
          Browse curriculum modules, system design paths, and full-stack development tracks.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: "20px",
        }}
      >
        {categories.map((cat) => {
          const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                backgroundColor: isActive ? "#0f172a" : "#ffffff",
                color: isActive ? "#ffffff" : "#475569",
                border: isActive ? "1px solid #0f172a" : "1px solid #e2e8f0",
                borderRadius: "5px",
                padding: "5px 12px",
                fontSize: "12px",
                fontWeight: 500,
                transition: "all 0.15s ease",
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div
        className="learn-card"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          marginBottom: "24px",
          overflow: "hidden",
        }}
      >
        <div style={{ padding: "14px 18px" }}>
          <div style={{ fontSize: "11px", color: "#64748b", marginBottom: "4px" }}>
            Published Tracks
          </div>
          <div style={{ fontSize: "14px", fontWeight: 600, color: "#0f172a" }}>
            6 Core Units
          </div>
        </div>

        <div
          style={{
            padding: "14px 18px",
            borderLeft: "1px solid #e2e8f0",
          }}
        >
          <div style={{ fontSize: "11px", color: "#64748b", marginBottom: "4px" }}>
            Interactive Syllabus
          </div>
          <div style={{ fontSize: "14px", fontWeight: 600, color: "#0f172a" }}>
            78 Lessons
          </div>
        </div>

        <div
          style={{
            padding: "14px 18px",
            borderLeft: "1px solid #e2e8f0",
          }}
        >
          <div style={{ fontSize: "11px", color: "#64748b", marginBottom: "4px" }}>
            Evaluation Mode
          </div>
          <div style={{ fontSize: "14px", fontWeight: 600, color: "#0f172a" }}>
            Rigorous Peer Review
          </div>
        </div>

        <div
          style={{
            padding: "14px 18px",
            borderLeft: "1px solid #e2e8f0",
          }}
        >
          <div style={{ fontSize: "11px", color: "#64748b", marginBottom: "4px" }}>
            Status
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#0f172a",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: "#2563eb",
                display: "inline-block",
              }}
            />
            Live Cohort
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="learn-card"
            style={{
              padding: "18px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
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
                  {course.category}
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
                  {course.level}
                </span>
              </div>

              <h2
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#0f172a",
                  lineHeight: 1.35,
                  marginBottom: "6px",
                }}
              >
                {course.title}
              </h2>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  color: "#64748b",
                  marginBottom: "10px",
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                {course.instructor}
              </div>

              <p
                style={{
                  fontSize: "12.5px",
                  color: "#475569",
                  lineHeight: 1.5,
                  marginBottom: "16px",
                }}
              >
                {course.description}
              </p>
            </div>

            <div
              style={{
                borderTop: "1px solid #f1f5f9",
                paddingTop: "12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "#64748b",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                {course.lessonsCount} Lessons
              </span>

              <Link
                href={`/courses/${course.slug}`}
                style={{
                  fontSize: "12.5px",
                  fontWeight: 500,
                  color: "#2563eb",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                View course →
              </Link>
            </div>
          </div>
        ))}
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
        <div style={{ maxWidth: "700px" }}>
          <div
            style={{
              fontSize: "13.5px",
              fontWeight: 600,
              color: "#0f172a",
              marginBottom: "4px",
            }}
          >
            Curriculum Sequencing Engine
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "#64748b",
              lineHeight: 1.45,
            }}
          >
            LearnSpace verifies prerequisite competency via deterministic automated assessments prior to advancing modules.
          </div>
        </div>

        <Link
          href="/topics"
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #cbd5e1",
            borderRadius: "5px",
            padding: "7px 14px",
            fontSize: "12px",
            fontWeight: 500,
            color: "#334155",
            whiteSpace: "nowrap",
          }}
        >
          Browse Prerequisite Map
        </Link>
      </div>
    </div>
  );
}
