// components/pills/TechPill.js
export default function TechPill({ children }) {
  return (
    <div className="bg-gray-800 text-cyan-400 font-mono text-sm font-semibold px-3 py-1 rounded-full border border-gray-700">
        <div className="flex flex-row gap-2 justify-center items-center">{children}</div>
    </div>
  );
}