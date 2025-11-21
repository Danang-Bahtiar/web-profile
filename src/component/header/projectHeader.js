"use client";

export default function ProjectHeader({ currentTab, setTab, tabs }) {
  const activeClass =
    "text-cyan-400 border-b-2 border-cyan-400 pb-2";
  const inactiveClass = "text-gray-500 pb-2";

  return (
    <div className="w-full flex flex-row gap-8 px-4 border-b-2 border-white text-lg font-mono">
      {tabs.map(t => (
        <button
          key={t.key}
          onClick={() => setTab(t.key)}
          className={currentTab === t.key ? activeClass : inactiveClass}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
