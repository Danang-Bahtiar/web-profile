export default {
  code: "NVMe: 0xDT0",
  category: "DESIGN_TOOL",
  title: "RESONANCE_SHARD",
  icon: "🧬",
  summary: "Defines entity structure and attribute mapping.",
  isLocked: false,
  content: (
    <div className="w-full max-w-4xl bg-gray-950 border border-blue-900/50 rounded p-6 relative overflow-hidden">
      {/* Background Detail: Watermark */}
      <div className="absolute -right-10 -top-10 text-9xl text-blue-900/10 rotate-12 select-none">
        💎
      </div>

      <div className="flex flex-col md:flex-row gap-8 relative z-10">
        {/* LEFT COLUMN: Visuals */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          {/* IMAGE PLACEHOLDER */}
          <div className="aspect-3/4 w-full bg-black/60 border-2 border-dashed border-blue-800/50 rounded flex items-center justify-center group cursor-pointer hover:border-blue-500 transition-colors">
            <div className="text-center space-y-2">
              <span className="text-4xl opacity-50 group-hover:scale-110 transition-transform block">
                💎
              </span>
              <span className="text-xs font-mono text-blue-500">
                [INSERT_CONCEPT_ART]
              </span>
            </div>
          </div>

          {/* Rarity / Type Badge */}
          <div className="bg-blue-900/20 border border-blue-800 text-center py-2 rounded">
            <span className="text-blue-400 font-mono text-sm tracking-widest uppercase">
              KEY_ITEM // TOOL
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: Specs & Lore */}
        <div className="w-full md:w-2/3 space-y-6">
          {/* Header */}
          <div className="border-b border-gray-800 pb-4">
            <h2 className="text-3xl font-bold text-white tracking-wide">
              RESONANCE SHARD
            </h2>
            <p className="text-sm font-mono text-gray-500 mt-1">
              Model: STD-01 (Pendant Form Factor)
            </p>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2">
              Functionality
            </h4>
            <p className="text-gray-300 leading-relaxed text-sm">
              A stabilizer device capable of creating a 1:1 resonance link with
              a Mystar entity. Once linked, the shard acts as an anchor,
              allowing the Tamer to summon the creature from its biome
              instantly.
            </p>
            <p className="text-xs text-gray-500 mt-2 italic">
              "It doesn't trap them. It calls them."
            </p>
          </div>

          {/* Crafting Recipe (The Industrial Lore) */}
          <div className="bg-gray-900 p-4 rounded border-l-4 border-yellow-600">
            <h4 className="text-xs font-bold text-yellow-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              🛠️ Fabrication Requirements
            </h4>
            <ul className="space-y-2 text-sm font-mono">
              <li className="flex justify-between border-b border-gray-800 pb-1">
                <span className="text-gray-400">Casing</span>
                <span className="text-white">Refined Metal (x2)</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-1">
                <span className="text-gray-400">Circuitry</span>
                <span className="text-white">Copper Wire (x5)</span>
              </li>
              <li className="flex justify-between pt-1">
                <span className="text-yellow-200">Power Source</span>
                <span className="text-yellow-400 font-bold">
                  RAW CORE RESIDUE (x1)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
};
