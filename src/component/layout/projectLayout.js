"use client";

import { useEffect, useState } from "react";
import ProjectHeader from "../header/projectHeader";

export default function ProjectLayout({ tabs }) {
  // Default first tab
  const [tab, setTab] = useState(tabs?.[0]?.key ?? "");

  // Handler for mobile dropdown change
  const handleMobileTabChange = (event) => {
    setTab(event.target.value);
  };

  return (
    <div className="px-4 py-2 text-white">
      
      {/* Mobile Dropdown (visible on screens < md) */}
      <div className="block md:hidden mb-4">
        <select
          value={tab}
          onChange={handleMobileTabChange}
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {tabs.map((t) => (
            <option key={t.key} value={t.key}>
              {/* Assuming 'name' or 'label' exists on the tab object for display */}
              {t.label || t.key.charAt(0).toUpperCase() + t.key.slice(1)} 
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Header (hidden on screens < md) */}
      <div className="hidden md:block">
        <ProjectHeader currentTab={tab} setTab={setTab} tabs={tabs} />
      </div>

      {/* Scrollable Content */}
      {/* max-h-[calc(100vh-17rem)] might need adjustment if the mobile dropdown takes up less space than the original mobile helper/header */}
      <div className="overflow-y-auto max-h-[calc(100vh-17rem)] pr-6 py-4 px-4">

        {/* Both Mobile & Desktop now display the content based on the 'tab' state */}
        {tabs.map(t =>
          t.key === tab ? <div key={t.key}>{t.content}</div> : null
        )}
        
      </div>

      {/* The mobile footer helper is removed since all content is accessible via the dropdown */}
    </div>
  );
}