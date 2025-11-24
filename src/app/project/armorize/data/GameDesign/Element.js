export default {
    code: "DDR3: 0xET0",
    category: "ELEMENT_CHART",
    title: "ELEMENTAL_MATRIX",
    icon: "⚔️", // Or use FaBolt / FaFire
    summary: "Combat interaction multipliers and tactical advantages.",
    isLocked: false,
    content: (
      <div className="space-y-6">
        {/* Introduction / Flavor Text */}
        <div className="border-l-2 border-cyan-500 pl-4 bg-cyan-900/10 p-2">
          <h4 className="text-cyan-400 font-bold text-xs tracking-widest uppercase mb-1">
            {"// TACTICAL_ADVISORY"}
          </h4>
          <p className="text-sm text-gray-300">
            Combat efficiency is determined by elemental alignment.
            <span className="text-red-400"> High values</span> indicate shield
            penetration.
            <span className="text-blue-400"> Low values</span> indicate
            deflection.
          </p>
        </div>

        {/* THE MATRIX GRID */}
        <div className="bg-black/40 border border-gray-800 rounded p-4 overflow-x-auto">
          <table className="w-full text-center font-mono text-xs md:text-sm">
            <thead>
              <tr>
                <th className="p-2 text-gray-600 text-left">ATK \ DEF</th>
                <th className="p-2 text-red-500">FIRE</th>
                <th className="p-2 text-blue-400">WATR</th>
                <th className="p-2 text-green-500">WOOD</th>
                <th className="p-2 text-yellow-600">ERTH</th>
                <th className="p-2 text-gray-400">WIND</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {/* ROW: FIRE */}
              <tr className="hover:bg-gray-800/30 transition-colors">
                <td className="p-2 font-bold text-red-500 text-left">FIRE</td>
                <td className="p-2 text-gray-600">1.0</td>
                <td className="p-2 text-blue-500 font-bold">0.5</td>
                <td className="p-2 text-red-500 font-bold shadow-red-500/20 drop-shadow-md">
                  2.0
                </td>
                <td className="p-2 text-blue-500">0.75</td>
                <td className="p-2 text-orange-400 font-bold">1.5</td>
              </tr>
              {/* ROW: WATER */}
              <tr className="hover:bg-gray-800/30 transition-colors">
                <td className="p-2 font-bold text-blue-400 text-left">WATR</td>
                <td className="p-2 text-red-500 font-bold shadow-red-500/20 drop-shadow-md">
                  2.0
                </td>
                <td className="p-2 text-gray-600">1.0</td>
                <td className="p-2 text-blue-500 font-bold">0.5</td>
                <td className="p-2 text-orange-400 font-bold">1.5</td>
                <td className="p-2 text-blue-400">0.75</td>
              </tr>
              {/* ROW: WOOD */}
              <tr className="hover:bg-gray-800/30 transition-colors">
                <td className="p-2 font-bold text-green-500 text-left">WOOD</td>
                <td className="p-2 text-blue-500 font-bold">0.5</td>
                <td className="p-2 text-red-500 font-bold shadow-red-500/20 drop-shadow-md">
                  2.0
                </td>
                <td className="p-2 text-gray-600">1.0</td>
                <td className="p-2 text-yellow-400">1.25</td>
                <td className="p-2 text-blue-400">0.75</td>
              </tr>
              {/* ROW: EARTH */}
              <tr className="hover:bg-gray-800/30 transition-colors">
                <td className="p-2 font-bold text-yellow-600 text-left">
                  ERTH
                </td>
                <td className="p-2 text-yellow-400">1.25</td>
                <td className="p-2 text-blue-500 font-bold">0.5</td>
                <td className="p-2 text-blue-400">0.75</td>
                <td className="p-2 text-gray-600">1.0</td>
                <td className="p-2 text-orange-400 font-bold">1.75</td>
              </tr>
              {/* ROW: WIND */}
              <tr className="hover:bg-gray-800/30 transition-colors">
                <td className="p-2 font-bold text-gray-400 text-left">WIND</td>
                <td className="p-2 text-orange-400 font-bold">1.5</td>
                <td className="p-2 text-yellow-400">1.25</td>
                <td className="p-2 text-yellow-400">1.25</td>
                <td className="p-2 text-blue-500 font-bold">0.5</td>
                <td className="p-2 text-gray-600">1.0</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Legend / Key */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px] font-mono uppercase tracking-wider text-center mt-4">
          <div className="bg-red-900/20 border border-red-900/50 text-red-400 p-1 rounded">
            {"Crit > 1.75"}
          </div>
          <div className="bg-orange-900/20 border border-orange-900/50 text-orange-400 p-1 rounded">
            {"High > 1.25"}
          </div>
          <div className="bg-gray-900 border border-gray-700 text-gray-400 p-1 rounded">
            Base = 1.0
          </div>
          <div className="bg-blue-900/20 border border-blue-900/50 text-blue-400 p-1 rounded">
            Resist &lt; 1.0
          </div>
        </div>
      </div>
    ),
  }