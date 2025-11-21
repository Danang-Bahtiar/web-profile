"use client";

import { useEffect, useState } from "react";
import ProjectHeader from "../header/projectHeader";

export default function ProjectLayout({ tabs }) {
  // Default first tab
  const [tab, setTab] = useState(tabs?.[0]?.key ?? "");

  return (
    <div className="px-4 py-2 text-white">
      
      {/* Desktop Header */}
      <div className="hidden md:block">
        <ProjectHeader currentTab={tab} setTab={setTab} tabs={tabs} />
      </div>

      {/* Scrollable Content */}
      <div className="overflow-y-auto max-h-[calc(100vh-17rem)] pr-6 py-4 px-4">

        {/* Mobile: Always show first tab only */}
        <div className="block md:hidden">
          {tabs[0]?.content}
        </div>

        {/* Desktop: Tabbed content */}
        <div className="hidden md:block">
          {tabs.map(t =>
            t.key === tab ? <div key={t.key}>{t.content}</div> : null
          )}
        </div>
      </div>

      {/* Mobile footer helper */}
      <div className="block md:hidden text-center text-gray-400 text-sm py-4 border-t border-gray-700">
        <p>More information (Docs, FAQ, Logs) is available on a wider screen.</p>
      </div>
    </div>
  );
}
