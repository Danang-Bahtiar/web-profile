import SectionHeader from "@/component/header/sectionHeader";

export default function Logs() {
  return (
    <div className="font-mono text-lg text-gray-300 tracking-wide">
      <SectionHeader>
        <div className="w-full flex flex-row justify-between items-baseline font-mono tracking-widest px-2">
          {/* Version: Bold, white, and larger */}
          <h2 className="text-xl font-bold text-white">v1.0.0 - The Foundation</h2>

          {/* Date: Dimmer color and slightly smaller text */}
          <h3 className="text-base text-gray-400">23-September-2025</h3>
        </div>
      </SectionHeader>
      <ul className="list-disc pl-8 space-y-4 font-mono text-lg text-gray-300 tracking-wide leading-relaxed">
        <li>
          <strong className="text-green-400">Added</strong>: Initial project setup.
        </li>
        <li>
          <strong className="text-green-400">Added</strong>: Systems for inquiring user preferences.
        </li>
        <li>
          <strong className="text-green-400">Added</strong>: Systems for creating project structure based on user preferences.
        </li>
      </ul>
      <SectionHeader>
        <div className="w-full flex flex-row justify-between items-baseline font-mono tracking-widest px-2">
          {/* Version: Bold, white, and larger */}
          <h2 className="text-xl font-bold text-white">v1.0.1 - Bug Fix</h2>

          {/* Date: Dimmer color and slightly smaller text */}
          <h3 className="text-base text-gray-400">26-September-2025</h3>
        </div>
      </SectionHeader>
      
    </div>
  );
}
