export default {
  code: "NVMe: 0x02",
  category: "SCOPE",
  title: "SCOPE_LOGISTICS",
  icon: "📁",
  summary: "Operational parameters and monetization.",
  isLocked: false, // Triggers the lock UI
  content: (
    <div className="space-y-5 text-sm font-mono text-gray-300">
      {/* Team & Tech */}
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-cyan-400 font-bold">{"// PERSONNEL"}</h4>
          <p>
            Solo Architect <span className="text-gray-500">(Dan Koyuki)</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Full-Stack Implementation
          </p>
        </div>
        <div className="text-right">
          <h4 className="text-cyan-400 font-bold">{"// ARCHITECTURE"}</h4>
          <p>
            XRohrJS <span className="text-gray-500">(Dual-Server)</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">Zero-Cost Infrastructure</p>
        </div>
      </div>

      {/* Platforms */}
      <div>
        <h4 className="text-gray-400 font-bold border-b border-gray-800 mb-2">
          {"// DEPLOYMENT_TARGETS"}
        </h4>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="text-green-400 mr-2">●</span>
            <span>
              <strong className="text-white">Primary:</strong> Discord Bot (MVP)
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-gray-600 mr-2">○</span>
            <span className="text-gray-500">
              Future: Web Dashboard / PvP Interface
            </span>
          </li>
        </ul>
      </div>

      {/* Monetization */}
      <div className="bg-gray-900/80 p-3 border-l-4 border-yellow-500">
        <h4 className="text-yellow-400 font-bold text-xs tracking-widest mb-1">
          REVENUE_MODEL :: ETHICAL
        </h4>
        <p className="text-xs leading-relaxed">
          "Pay to Look Good, Not to Win."
          <br />
          Focus on sustainability via low-cost architecture. Premium currency is
          strictly for cosmetics and convenience (VIP Areas), with no direct
          competitive advantage.
        </p>
      </div>
    </div>
  ),
};
