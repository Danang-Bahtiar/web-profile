// ProjectLayout.js
"use client";

import { useState } from "react";
import ProjectHeader from "../header/projectHeader";

// Create simple components for your tab content for now
function DetailsContent() {
  return <div>This is where the Project Details will go.</div>;
}

function DocsContent() {
  return <div>This is where the Documentation will go.</div>;
}

export default function ProjectLayout({ detailPage, logs, docs }) {
  const [tab, setTab] = useState("Details");

  return (
    <div className="px-4 py-2 text-white">
      {/* 1. Pass both currentTab and the setTab function */}
      <ProjectHeader currentTab={tab} setTab={setTab} />

      <div className="overflow-y-auto max-h-[calc(100vh-17rem)] pr-6 py-4 px-4">
        {/* 2. Conditionally render the content based on the tab state */}
        {tab === "Details" && detailPage }
        {tab === "Docs" && docs}
        {tab === "FAQ" && <DocsContent />}
        {tab === "Logs" && logs}
      </div>
    </div>
  );
}
