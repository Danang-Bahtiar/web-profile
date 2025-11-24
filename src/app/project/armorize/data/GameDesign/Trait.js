export default {
    code: "DDR3: 0xTR",
    category: "BIOLOGY",
    title: "INNATE_TRAITS",
    icon: "🧬",
    summary: "Biological anomalies and combat mutations.",
    isLocked: false,
    content: (
      <div className="space-y-6">
        {/* Header Info */}
        <div className="bg-cyan-900/10 border-l-2 border-cyan-500 p-3">
          <h4 className="text-cyan-400 font-bold text-xs tracking-widest uppercase mb-1">
            {"// GENETIC_OVERWRITE"}
          </h4>
          <p className="text-sm text-gray-300">
            Traits are "born talents" imprinted on a Mystar's core. These
            effects trigger passively during combat actions.
          </p>
        </div>

        {/* Trait Table */}
        <div className="grid gap-3">
          {/* Entry: Divine (UPDATED) */}
          <div className="bg-black/40 border border-gray-800 p-3 flex items-center justify-between group hover:border-yellow-500 transition-colors">
            <div>
              <h5 className="text-yellow-400 font-bold text-sm flex items-center gap-2">
                <span className="text-xs">✨</span> DIVINE (HOLY)
              </h5>
              <p className="text-xs text-gray-500">
                Triggers [CLEANSE]. Removes all active debuffs from self.
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-gray-600 block">
                PROC_RATE
              </span>
              <span className="text-sm font-mono text-white">x%</span>
            </div>
          </div>

          {/* Entry: Volatile */}
          <div className="bg-black/40 border border-gray-800 p-3 flex items-center justify-between group hover:border-red-500 transition-colors">
            <div>
              <h5 className="text-red-400 font-bold text-sm flex items-center gap-2">
                <span className="text-xs">🔥</span> VOLATILE
              </h5>
              <p className="text-xs text-gray-500">
                Inflicts [BURN] status (DoT + Armor Break).
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-gray-600 block">
                PROC_RATE
              </span>
              <span className="text-sm font-mono text-white">x%</span>
            </div>
          </div>

          {/* Entry: Venomous */}
          <div className="bg-black/40 border border-gray-800 p-3 flex items-center justify-between group hover:border-green-500 transition-colors">
            <div>
              <h5 className="text-green-400 font-bold text-sm flex items-center gap-2">
                <span className="text-xs">🧪</span> VENOMOUS
              </h5>
              <p className="text-xs text-gray-500">
                Inflicts [POISON] status (HP Decay).
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-gray-600 block">
                PROC_RATE
              </span>
              <span className="text-sm font-mono text-white">x%</span>
            </div>
          </div>

          {/* Entry: Undead */}
          <div className="bg-black/40 border border-gray-800 p-3 flex items-center justify-between group hover:border-purple-500 transition-colors">
            <div>
              <h5 className="text-purple-400 font-bold text-sm flex items-center gap-2">
                <span className="text-xs">💀</span> UNDEAD
              </h5>
              <p className="text-xs text-gray-500">
                Inflicts [CORROSION] (Durability Dmg).
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-gray-600 block">
                PROC_RATE
              </span>
              <span className="text-sm font-mono text-white">x%</span>
            </div>
          </div>

          {/* Entry: Abyss */}
          <div className="bg-black/40 border border-gray-800 p-3 flex items-center justify-between group hover:border-purple-500 transition-colors">
            <div>
              <h5 className="text-purple-400 font-bold text-sm flex items-center gap-2">
                <span className="text-xs">🌑</span> ABYSS
              </h5>
              <p className="text-xs text-gray-500">
                Inflicts [CORRUPTION] (Move Cooldown Delay, Silence).
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-gray-600 block">
                PROC_RATE
              </span>
              <span className="text-sm font-mono text-white">x%</span>
            </div>
          </div>
        </div>

        {/* Crafting / Equipment Logic */}
        <div className="mt-4 p-3 bg-gray-900 border border-gray-700 rounded">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
            🛡️ Equipment Resonance Rule
          </h4>
          <ul className="space-y-2 text-xs font-mono text-gray-300">
            <li className="flex justify-between">
              <span>Off-Spec Gear</span>
              <span className="text-red-400">50% Efficiency</span>
            </li>
            <li className="flex justify-between">
              <span>Same-Trait Gear</span>
              <span className="text-green-400">+25% Synergy Bonus</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  }