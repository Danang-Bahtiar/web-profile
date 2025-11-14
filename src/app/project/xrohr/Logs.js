import SectionHeader from "@/component/header/sectionHeader";

export default function Logs() {
  return (
    <div className="font-mono text-lg text-gray-300 tracking-wide">
      <SectionHeader>
        <div className="w-full flex flex-row justify-between items-baseline font-mono tracking-widest px-2">
          <h2 className="text-xl font-bold text-white">
            v0.0.1 - The First Commit
          </h2>
          <h3 className="text-base text-gray-400">07-October-2025</h3>
        </div>
      </SectionHeader>
      <ul className="list-disc pl-8 space-y-4 font-mono text-lg text-gray-300 tracking-wide leading-relaxed">
        <li>
          <strong className="text-green-400">Added</strong>: Initial project
          foundation and core architecture.
        </li>
      </ul>

      <SectionHeader>
        <div className="w-full flex flex-row justify-between items-baseline font-mono tracking-widest px-2">
          <h2 className="text-xl font-bold text-white">
            v0.0.2 - Centralized Config
          </h2>
          <h3 className="text-base text-gray-400">14-October-2025</h3>
        </div>
      </SectionHeader>
      <ul className="list-disc pl-8 space-y-4 font-mono text-lg text-gray-300 tracking-wide leading-relaxed">
        <li>
          <strong className="text-green-400">Added</strong>: Implemented{" "}
          <code>xrohr.config.js</code> for centralized server settings and
          module management.
        </li>
      </ul>

      <SectionHeader>
        <div className="w-full flex flex-row justify-between items-baseline font-mono tracking-widest px-2">
          <h2 className="text-xl font-bold text-white">
            v0.0.5 - Core Managers
          </h2>
          <h3 className="text-base text-gray-400">Late October 2025</h3>
        </div>
      </SectionHeader>
      <ul className="list-disc pl-8 space-y-4 font-mono text-lg text-gray-300 tracking-wide leading-relaxed">
        <li>
          <strong className="text-green-400">Added</strong>: Initial{" "}
          <code>RouteManager</code> and <code>MiddlewareManager</code> to handle
          dynamic loading.
        </li>
      </ul>

      <SectionHeader>
        <div className="w-full flex flex-row justify-between items-baseline font-mono tracking-widest px-2">
          <h2 className="text-xl font-bold text-white">
            v0.0.6 - The Module Trio
          </h2>
          <h3 className="text-base text-gray-400">06-November-2025</h3>
        </div>
      </SectionHeader>
      <ul className="list-disc pl-8 space-y-4 font-mono text-lg text-gray-300 tracking-wide leading-relaxed">
        <li>
          <strong className="text-green-400">Added</strong>:{" "}
          <code>Memoria</code> module for in-memory Map-based caching.
        </li>
        <li>
          <strong className="text-green-400">Added</strong>: <code>Rheos</code>{" "}
          module as a wrapper for Axios integration.
        </li>
        <li>
          <strong className="text-green-400">Added</strong>:{" "}
          <code>SparkLite</code> module for event-driven communication.
        </li>
      </ul>

      <SectionHeader>
        <div className="w-full flex flex-row justify-between items-baseline font-mono tracking-widest px-2">
          <h2 className="text-xl font-bold text-white">
            v0.0.8 - Manager Refactor
          </h2>
          <h3 className="text-base text-gray-400">07-November-2025</h3>
        </div>
      </SectionHeader>
      <ul className="list-disc pl-8 space-y-4 font-mono text-lg text-gray-300 tracking-wide leading-relaxed">
        <li>
          <strong className="text-yellow-400">Changed</strong>: Decoupled{" "}
          <code>MiddlewareManager</code> from <code>RouteManager</code>, moving
          it to the main <code>XRohr</code> class for better control.
        </li>
        <li>
          <strong className="text-yellow-400">Changed</strong>: Refactored{" "}
          <code>MiddlewareTemplate</code> to support independent functions.
        </li>
        <li>
          <strong className="text-green-400">Added</strong>: Added{" "}
          <code>callback</code> support to the <code>SparkLite</code> event
          listener template.
        </li>
      </ul>

      <SectionHeader>
        <div className="w-full flex flex-row justify-between items-baseline font-mono tracking-widest px-2">
          <h2 className="text-xl font-bold text-white">
            v1.0.0 - The v1.0 Release
          </h2>
          <h3 className="text-base text-gray-400">14-November-2025</h3>
        </div>
      </SectionHeader>
      <ul className="list-disc pl-8 space-y-4 font-mono text-lg text-gray-300 tracking-wide leading-relaxed">
        <li>
          <strong className="text-yellow-400">Changed</strong>: Major
          architectural refactor: <code>XRohrJS</code> is now the static
          factory/brand, while <code>XRohr</code> is the main server class.
        </li>
        <li>
          <strong className="text-green-400">Added</strong>: Initial{" "}
          <code>README.md</code> documentation.
        </li>
        <li>
          <strong className="text-yellow-400">Changed</strong>: Adjusted{" "}
          <code>Route Recipe</code> structure for more flexibility.
        </li>
        <li>
          <strong className="text-green-400">Fixed</strong>: Improved{" "}
          <code>Memoria</code> functions and fixed various module integration
          bugs.
        </li>
      </ul>
    </div>
  );
}
