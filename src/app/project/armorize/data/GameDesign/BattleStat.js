export default {
    code: "DDR3: 0xBS",
    category: "MECHANICS",
    title: "BATTLE_STATS",
    icon: "📊",
    summary: "Entity attributes, derived formulas, and loadout slots.",
    isLocked: false,
    content: (
      <div className="space-y-8">
        {/* SECTION 1: Primary Attributes */}
        <div>
          <h4 className="text-cyan-400 font-bold text-xs tracking-widest uppercase mb-3 border-b border-cyan-900/50 pb-1">
            {"// CORE_ATTRIBUTES"}
          </h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {/* Row 1 */}
            <div className="bg-gray-900 p-2 rounded flex justify-between border border-gray-800">
              <span className="text-gray-500 font-mono">HP</span>
              <span className="text-green-400 font-bold">Health Points</span>
            </div>
            <div className="bg-gray-900 p-2 rounded flex justify-between border border-gray-800">
              <span className="text-gray-500 font-mono">SPD</span>
              <span className="text-yellow-400 font-bold">
                Speed (Turn Order)
              </span>
            </div>

            {/* Row 2: Physical */}
            <div className="bg-gray-900 p-2 rounded flex justify-between border border-gray-800">
              <span className="text-gray-500 font-mono">ATK</span>
              <span className="text-red-400 font-bold">Physical Atk</span>
            </div>
            <div className="bg-gray-900 p-2 rounded flex justify-between border border-gray-800">
              <span className="text-gray-500 font-mono">DEF</span>
              <span className="text-blue-400 font-bold">Physical Def</span>
            </div>

            {/* Row 3: Special */}
            <div className="bg-gray-900 p-2 rounded flex justify-between border border-gray-800">
              <span className="text-gray-500 font-mono">SPA</span>
              <span className="text-purple-400 font-bold">Special Atk</span>
            </div>
            <div className="bg-gray-900 p-2 rounded flex justify-between border border-gray-800">
              <span className="text-gray-500 font-mono">S.DEF</span>
              <span className="text-indigo-400 font-bold">Special Def</span>
            </div>
          </div>
        </div>

        {/* SECTION 2: Derived Formulas (The Math) */}
        <div className="bg-black/40 border border-gray-800 p-4 rounded relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-10 text-4xl">
            🧮
          </div>
          <h4 className="text-gray-400 font-bold text-xs tracking-widest uppercase mb-3">
            {"// DERIVED_LOGIC"}
          </h4>

          <div className="space-y-3 font-mono text-xs">
            <div className="flex flex-col gap-1">
              <span className="text-cyan-500">TRAIT_PROC_CHANCE</span>
              <span className="text-gray-500">
                = BASE_RATE + (<span className="text-white">INT</span> * 0.1)%
              </span>
            </div>
            <div className="w-full h-px bg-gray-800"></div>
            <div className="flex flex-col gap-1">
              <span className="text-cyan-500">DODGE_RATE</span>
              <span className="text-gray-500">
                = (<span className="text-yellow-400">SPEED</span> * 0.05) + (
                <span className="text-orange-400">LUC</span> * 0.02)%
              </span>
            </div>
            <div className="w-full h-px bg-gray-800"></div>
            <div className="flex flex-col gap-1">
              <span className="text-cyan-500">OBEDIENCE_RATE?!</span>
            </div>
            <div className="w-full h-px bg-gray-800"></div>
            <div className="flex flex-col gap-1">
              <span className="text-cyan-500">HAPPINESS_RATE?!</span>
            </div>
          </div>
        </div>

        {/* SECTION 3: Equipment Slots */}
        <div>
          <h4 className="text-gray-400 font-bold text-xs tracking-widest uppercase mb-3 border-b border-gray-800 pb-1">
            {"// LOADOUT_SLOTS"}
          </h4>
          <div className="flex gap-4 justify-center text-center">
            {/* HEAD */}
            <div className="flex-1 bg-gray-900 border border-gray-700 p-3 rounded flex flex-col items-center gap-2">
              <span className="text-2xl">🥽</span>
              <span className="text-[10px] font-mono text-gray-400 uppercase">
                HEAD
              </span>
              <span className="text-[10px] text-cyan-600"></span>
            </div>

            {/* WEAPON */}
            <div className="flex-1 bg-gray-900 border border-red-900/50 p-3 rounded flex flex-col items-center gap-2 shadow-[0_0_10px_rgba(239,68,68,0.1)]">
              <span className="text-2xl">⚔️</span>
              <span className="text-[10px] font-mono text-gray-400 uppercase">
                WEAPON
              </span>
              <span className="text-[10px] text-red-600"></span>
            </div>

            {/* BODY */}
            <div className="flex-1 bg-gray-900 border border-blue-900/50 p-3 rounded flex flex-col items-center gap-2 shadow-[0_0_10px_rgba(59,130,246,0.1)]">
              <span className="text-2xl">🛡️</span>
              <span className="text-[10px] font-mono text-gray-400 uppercase">
                ARMOR
              </span>
              <span className="text-[10px] text-blue-600"></span>
            </div>
          </div>
        </div>
      </div>
    ),
  }