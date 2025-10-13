// component/header/projectHeader.js
'use client'

// 1. Destructure props correctly: { currentTab, setTab }
export default function ProjectHeader({ currentTab, setTab }) {
  // 2. Define styles for active/inactive tabs for clarity
  const activeClass = "text-cyan-400 border-b-2 border-cyan-400 pb-2";
  const inactiveClass = "text-gray-500 pb-2";

  return (
    <div className="w-full flex flex-row gap-8 px-4 border-b-2 border-white text-lg font-mono">
      {/* 3. Use buttons for accessibility and add onClick handlers */}
      <button
        onClick={() => setTab('Details')}
        className={currentTab === 'Details' ? activeClass : inactiveClass}
      >
        Details
      </button>
      <button
        onClick={() => setTab('Docs')}
        className={currentTab === 'Docs' ? activeClass : inactiveClass}
      >
        Docs
      </button>
      <button
        onClick={() => setTab('FAQ')}
        className={currentTab === 'FAQ' ? activeClass : inactiveClass}
      >
        FAQ
      </button>
      <button
        onClick={() => setTab('Logs')}
        className={currentTab === 'Logs' ? activeClass : inactiveClass}
      >
        Logs
      </button>
      {/* You can add more tabs here */}
    </div>
  )
}