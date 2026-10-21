"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { TopicTrack } from "@/types/topic";

interface TopicExplorerClientProps {
  topic: TopicTrack;
  resolvedPath: string;
}

export default function TopicExplorerClient({
  topic,
  resolvedPath,
}: TopicExplorerClientProps) {
  const [activeFilter, setActiveFilter] = useState("All React");

  const filterTabs = [
    "All React",
    "Server Components",
    "State & Signals",
    "Routing Architecture",
  ];

  const filteredModules = useMemo(() => {
    if (activeFilter === "All React") {
      return topic.modules;
    }
    return topic.modules.filter(
      (m) => m.category.toLowerCase() === activeFilter.toLowerCase()
    );
  }, [topic.modules, activeFilter]);

  const breadcrumbItems = [
    { label: "All Tracks", href: "/topics" },
    { label: "Topics", href: "/topics" },
    ...topic.slugSegments.map((seg, idx) => ({
      label: seg.charAt(0).toUpperCase() + seg.slice(1),
      href: idx === topic.slugSegments.length - 1 ? undefined : `/topics/${topic.slugSegments.slice(0, idx + 1).join("/")}`,
    })),
  ];

  return (
    <div className="main-container">
      <div
        style={{
          backgroundColor: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderRadius: "6px",
          padding: "8px 14px",
          marginBottom: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
          fontSize: "11.5px",
        }}
      >
        <div style={{ color: "#475569", fontFamily: "monospace" }}>
          Route pattern: <span style={{ color: "#2563eb" }}>/topics/[...slug]</span> | resolved to:{" "}
          <span style={{ color: "#2563eb", fontWeight: 600 }}>{resolvedPath}</span>
        </div>
        <div style={{ display: "flex", gap: "6px" }}>
          <span
            style={{
              backgroundColor: "#eff6ff",
              color: "#2563eb",
              border: "1px solid #bfdbfe",
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: "11px",
              fontWeight: 500,
            }}
          >
            Optional Catch-All
          </span>
          <span
            style={{
              backgroundColor: "#f1f5f9",
              color: "#475569",
              border: "1px solid #cbd5e1",
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: "11px",
              fontWeight: 500,
            }}
          >
            SSR Node Layer
          </span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <Breadcrumbs items={breadcrumbItems} />

        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <span
            style={{
              backgroundColor: "#eff6ff",
              color: "#2563eb",
              fontSize: "11px",
              fontWeight: 600,
              padding: "3px 8px",
              borderRadius: "4px",
            }}
          >
            Curriculum Track 2025
          </span>
          <span style={{ fontSize: "11.5px", color: "#64748b" }}>
            {topic.modules.length} Modules Available
          </span>
        </div>
      </div>

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
          {topic.badge}
        </div>
        <h1
          style={{
            fontSize: "26px",
            fontWeight: 700,
            color: "#0f172a",
            letterSpacing: "-0.02em",
            marginBottom: "8px",
          }}
        >
          {topic.title}
        </h1>
        <p
          style={{
            fontSize: "13.5px",
            color: "#475569",
            lineHeight: 1.5,
            maxWidth: "800px",
          }}
        >
          {topic.description}
        </p>
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
        <div style={{ padding: "12px 18px" }}>
          <div style={{ fontSize: "11px", color: "#64748b", marginBottom: "4px" }}>
            Total Content
          </div>
          <div style={{ fontSize: "13.5px", fontWeight: 600, color: "#0f172a" }}>
            {topic.totalLessons} Lessons
          </div>
        </div>

        <div style={{ padding: "12px 18px", borderLeft: "1px solid #e2e8f0" }}>
          <div style={{ fontSize: "11px", color: "#64748b", marginBottom: "4px" }}>
            Difficulty Range
          </div>
          <div style={{ fontSize: "13.5px", fontWeight: 600, color: "#0f172a" }}>
            {topic.difficultyRange}
          </div>
        </div>

        <div style={{ padding: "12px 18px", borderLeft: "1px solid #e2e8f0" }}>
          <div style={{ fontSize: "11px", color: "#64748b", marginBottom: "4px" }}>
            Core Primitives
          </div>
          <div style={{ fontSize: "13.5px", fontWeight: 600, color: "#0f172a" }}>
            {topic.corePrimitives}
          </div>
        </div>

        <div style={{ padding: "12px 18px", borderLeft: "1px solid #e2e8f0" }}>
          <div style={{ fontSize: "11px", color: "#64748b", marginBottom: "4px" }}>
            Verification
          </div>
          <div style={{ fontSize: "13.5px", fontWeight: 600, color: "#0f172a" }}>
            {topic.verification}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {filterTabs.map((tab) => {
            const isActive = activeFilter.toLowerCase() === tab.toLowerCase();
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                style={{
                  backgroundColor: isActive ? "#0f172a" : "#ffffff",
                  color: isActive ? "#ffffff" : "#475569",
                  border: isActive ? "1px solid #0f172a" : "1px solid #e2e8f0",
                  borderRadius: "5px",
                  padding: "5px 12px",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>
        <div style={{ fontSize: "11.5px", color: "#64748b" }}>
          Sorted by Curriculum Sequence
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gap: "16px",
          marginBottom: "36px",
        }}
      >
        {filteredModules.map((mod) => (
          <div
            key={mod.title}
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
                  marginBottom: "8px",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#eff6ff",
                    color: "#2563eb",
                    fontSize: "11px",
                    fontWeight: 600,
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  {mod.moduleNumber}
                </span>
                <span style={{ fontSize: "11.5px", color: "#64748b" }}>
                  {mod.lessonsCount} Lessons · {mod.level}
                </span>
              </div>

              <h2
                style={{
                  fontSize: "14.5px",
                  fontWeight: 600,
                  color: "#0f172a",
                  marginBottom: "6px",
                }}
              >
                {mod.title}
              </h2>

              <p
                style={{
                  fontSize: "12px",
                  color: "#475569",
                  lineHeight: 1.45,
                  marginBottom: "12px",
                }}
              >
                {mod.description}
              </p>

              <div
                style={{
                  fontSize: "11.5px",
                  color: "#64748b",
                  marginBottom: "14px",
                }}
              >
                {mod.author} · {mod.authorRole}
              </div>
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
                  fontFamily: "monospace",
                  fontSize: "11px",
                  color: "#64748b",
                }}
              >
                Slug: {mod.slugPath}
              </span>

              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Link
                  href={`/courses/${mod.courseSlug}`}
                  style={{
                    fontSize: "12px",
                    color: "#2563eb",
                    fontWeight: 500,
                  }}
                >
                  View course →
                </Link>
                <Link
                  href={`/courses/${mod.courseSlug}/lessons/01-introduction-philosophy`}
                  style={{
                    backgroundColor: "#2563eb",
                    color: "#ffffff",
                    fontSize: "12px",
                    fontWeight: 500,
                    padding: "5px 12px",
                    borderRadius: "4px",
                  }}
                >
                  Start topic
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "14px",
          }}
        >
          <div>
            <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#0f172a", marginBottom: "2px" }}>
              Related Learning Paths
            </h3>
            <p style={{ fontSize: "12px", color: "#64748b" }}>
              Explore adjacent tracks in the curriculum graph to expand full-stack competency.
            </p>
          </div>
          <Link
            href="/courses"
            style={{
              fontSize: "12px",
              color: "#2563eb",
              fontWeight: 500,
            }}
          >
            Explore graph ↗
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "14px",
          }}
        >
          {topic.relatedPaths.map((rp) => (
            <Link
              key={rp.title}
              href={rp.href}
              className="learn-card"
              style={{
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#ffffff",
                transition: "border-color 0.15s ease",
              }}
            >
              <div>
                <div style={{ fontSize: "13.5px", fontWeight: 600, color: "#0f172a", marginBottom: "4px" }}>
                  {rp.title}
                </div>
                <div style={{ fontSize: "11.5px", color: "#64748b", lineHeight: 1.4, marginBottom: "12px" }}>
                  {rp.description}
                </div>
              </div>
              <div style={{ fontSize: "11.5px", fontWeight: 500, color: "#2563eb" }}>
                {rp.tracksText}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
