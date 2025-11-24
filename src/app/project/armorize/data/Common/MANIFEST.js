export default {
  code: "NVMe: 0x00",
  category: "MANIFEST",
  title: "The Project",
  icon: "📁",
  summary: "Project Meta-Data. Overview, Objectives, and Core Pillars.",
  isLocked: false,
  content: (
    <div className="space-y-4 text-sm text-gray-300 font-mono leading-relaxed">
      {/* The High-Level Pitch */}
      <div className="border-b border-gray-800 pb-4">
        <h3 className="text-cyan-400 font-bold text-lg mb-2">
          // PROJECT_OVERVIEW
        </h3>
        <p>
          <span className="text-white font-bold">Armorize</span> is a
          persistent, community-driven creature-collection RPG played entirely
          within the Discord ecosystem.
        </p>
        <p className="mt-2">
          It merges the strategic depth of a{" "}
          <span className="text-yellow-400">Monster Tamer</span> with complex{" "}
          <span className="text-yellow-400">Economic Simulation</span>, all
          without requiring a massive client download.
        </p>
      </div>

      {/* The Core Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Pillar 1 */}
        <div className="bg-gray-900/50 p-3 border border-gray-800 rounded">
          <h4 className="text-cyan-500 font-bold mb-1"> ZERO_UI_GAMING</h4>
          <p className="text-xs text-gray-400">
            A "Game Client" is not required. Armorize proves that gameplay depth
            comes from systems, not graphics. It uses Discord's native Buttons,
            Select Menus, and Embeds as the primary controller interface.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="bg-gray-900/50 p-3 border border-gray-800 rounded">
          <h4 className="text-cyan-500 font-bold mb-1"> LIVE_ECONOMY</h4>
          <p className="text-xs text-gray-400">
            There are no infinite NPC shops. The economy is dictated by{" "}
            <span className="text-white">Liquidity Pools</span> and player
            activity. Values fluctuate based on supply, demand, and Guild Vault
            reserves.
          </p>
        </div>
      </div>

      {/* The "Why" */}
      <div className="pt-2">
        <h3 className="text-cyan-400 font-bold text-base mb-2">// OBJECTIVE</h3>
        <p>
          To bridge the gap between casual "Chat Bots" and full-scale "MMORPGs."
          Armorize allows players to engage in complex loops (Crafting, Taming,
          Trading) passively throughout their day, turning their Discord server
          into a living Biome.
        </p>
      </div>
    </div>
  ),
};
