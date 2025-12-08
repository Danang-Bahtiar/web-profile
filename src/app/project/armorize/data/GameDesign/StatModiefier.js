export default {
  code: "DDR3: 0xSM",
  category: "COMBAT_LOGIC",
  title: "STAT_MODIFIERS",
  icon: "📉",
  summary: "Volatility limits for in-battle attribute scaling.",
  isLocked: false,
  content: (
    <div className="space-y-6 font-mono text-sm">
      {/* Header Warning */}
      <div className="bg-yellow-900/20 border border-yellow-600/50 p-3 rounded flex items-start gap-3">
        <span className="text-2xl">⚠</span>
        <div>
          <h4 className="text-yellow-500 font-bold text-xs uppercase tracking-widest mb-1">
            SYSTEM LIMITER (PROTOTYPE)
          </h4>
          <p className="text-gray-400 leading-relaxed text-xs">
            To prevent "Integer Overflow" and combat instability, all entity
            attributes are capped at{" "}
            <span className="text-white font-bold">±6 Stages</span> from their
            base value during combat.
          </p>
        </div>
      </div>

      {/* The Math Table */}
      <div className="bg-black/40 border border-gray-800 rounded overflow-hidden">
        <div className="bg-gray-900 px-4 py-2 border-b border-gray-800 text-xs text-gray-500 uppercase tracking-widest">
          {"// SCALING_MULTIPLIERS"}
        </div>
        <table className="w-full text-center">
          <thead>
            <tr className="text-gray-600 border-b border-gray-800">
              <th className="py-2">STAGE</th>
              <th className="py-2">MULTIPLIER</th>
              <th className="py-2">EFFECT</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800/50">
            <tr className="text-green-400 bg-green-900/10">
              <td className="py-2 font-bold">+6 (MAX)</td>
              <td>4.0x</td>
              <td>Godlike</td>
            </tr>
            <tr className="text-green-500">
              <td className="py-2">+2</td>
              <td>2.0x</td>
              <td>Double</td>
            </tr>
            <tr className="text-gray-400 bg-gray-900/50">
              <td className="py-2">0</td>
              <td>1.0x</td>
              <td>Baseline</td>
            </tr>
            <tr className="text-red-500">
              <td className="py-2">-2</td>
              <td>0.5x</td>
              <td>Halved</td>
            </tr>
            <tr className="text-red-400 bg-red-900/10">
              <td className="py-2">-6 (MIN)</td>
              <td>0.25x</td>
              <td>Crippled</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Rules & Duration */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-900 p-3 rounded border border-gray-800">
          <h5 className="text-blue-400 text-xs font-bold uppercase mb-2">
            Duration Decay
          </h5>
          <p className="text-gray-500 text-xs leading-relaxed">
            Modifiers typically last for <strong>3-5 Turns</strong>. Re-applying
            the same buff resets the timer and increases the Stage.
          </p>
        </div>
        <div className="bg-gray-900 p-3 rounded border border-gray-800">
          <h5 className="text-purple-400 text-xs font-bold uppercase mb-2">
            Cleanse Logic
          </h5>
          <p className="text-gray-500 text-xs leading-relaxed">
            The <strong>[DIVINE]</strong> trait or "Purge" items reset all
            Stages to 0 (removing both Buffs and Debuffs).
          </p>
        </div>
      </div>
    </div>
  ),
};
