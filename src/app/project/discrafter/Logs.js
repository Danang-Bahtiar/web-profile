import SectionHeader from "@/component/header/sectionHeader";

export default function Logs() {
  return (
    <div className="font-mono text-lg text-gray-300 tracking-wide">
      <SectionHeader>
        <div className="w-full flex flex-row justify-between items-baseline font-mono tracking-widest px-2">
          {/* Version: Bold, white, and larger */}
          <h2 className="text-xl font-bold text-white">v0.2.0 - The Foundation</h2>

          {/* Date: Dimmer color and slightly smaller text */}
          <h3 className="text-base text-gray-400">19-September-2025</h3>
        </div>
      </SectionHeader>
      <ul className="list-disc pl-8 space-y-4 font-mono text-lg text-gray-300 tracking-wide leading-relaxed">
        <li>
          <strong className="text-green-400">Added</strong>: Initial project setup with core architecture for booting the application.
        </li>
        <li>
          <strong className="text-green-400">Added</strong>: Systems for loading configuration, events, and slash commands.
        </li>
        <li>
          <strong className="text-yellow-400">Changed</strong>: Project renamed from ChordJS to DiscrafterJS.
        </li>
      </ul>
      <SectionHeader>
        <div className="w-full flex flex-row justify-between items-baseline font-mono tracking-widest px-2">
          {/* Version: Bold, white, and larger */}
          <h2 className="text-xl font-bold text-white">v0.3.0 - Helpers & Docs</h2>

          {/* Date: Dimmer color and slightly smaller text */}
          <h3 className="text-base text-gray-400">23-September-2025</h3>
        </div>
      </SectionHeader>
      <ul className="list-disc pl-8 space-y-4 font-mono text-lg text-gray-300 tracking-wide leading-relaxed">
        <li>
          <strong className="text-green-400">Added</strong>: A new loader for custom helper functions.
        </li>
        <li>
          <strong className="text-green-400">Added</strong>: Initial project documentation (README.md).
        </li>
      </ul>
      <SectionHeader>
        <div className="w-full flex flex-row justify-between items-baseline font-mono tracking-widest px-2">
          {/* Version: Bold, white, and larger */}
          <h2 className="text-xl font-bold text-white">v0.3.1 - Type Safety & Bug Fix</h2>

          {/* Date: Dimmer color and slightly smaller text */}
          <h3 className="text-base text-gray-400">25-September-2025</h3>
        </div>
      </SectionHeader>
      <ul className="list-disc pl-8 space-y-4 font-mono text-lg text-gray-300 tracking-wide leading-relaxed">
        <li>
          <strong className="text-green-400">Fixed</strong>: Resolved a TypeScript issue where custom helper functions could not be accessed from the main client object.
        </li>
        <li>
          <strong className="text-yellow-400">Changed</strong>: Implemented an ExtendedClient interface to properly expose custom services, ensuring type safety across the framework.
        </li>
      </ul>
    </div>
  );
}
