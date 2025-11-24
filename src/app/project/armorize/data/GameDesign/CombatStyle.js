export default {
  code: "DDR5: 0xA1",
  category: "SYSTEM",
  title: "COMBAT_PROTOCOL",
  icon: "⚙️",
  summary: "Turn logic, action economy, and state resolution.",
  isLocked: false,
  content: (
    <div className="space-y-6 text-sm font-mono text-gray-300">
      {/* HEADER */}
      <div className="border-b border-cyan-900/50 pb-2 mb-4">
        <h4 className="text-cyan-400 font-bold text-xs tracking-widest uppercase">
          {"// EXECUTION_MODE: SIMULTANEOUS_BLIND_PICK"}
        </h4>
        <p className="text-xs text-gray-500 mt-1">
          Both Tamers submit commands privately. Actions resolve based on Speed
          Priority.
        </p>
      </div>

      {/* ACTION SET */}
      <div className="bg-gray-900/50 p-3 rounded border border-gray-800">
        <h5 className="text-white font-bold text-xs mb-2">
          AVAILABLE COMMANDS
        </h5>
        <ul className="space-y-2 text-xs">
          <li className="flex justify-between">
            <span className="text-gray-400">BASIC ATTACK</span>
            <span className="text-green-400">CD: 0 (Always Ready)</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-400">GUARD (Evasive Stance)</span>
            <span className="text-yellow-400">Boosts Dodge Chance</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-400">SKILLS (2 Native + Equip)</span>
            <span className="text-red-400">Variable Cooldowns</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-400">ITEM (Wild Only)</span>
            <span className="text-blue-400">Consumable</span>
          </li>
        </ul>
      </div>

      {/* THE TURN LOOP */}
      <div className="space-y-3 mt-4">
        <h5 className="text-cyan-400 font-bold text-xs uppercase border-l-2 border-cyan-500 pl-2">
          {"// TURN_RESOLUTION_SEQUENCE"}
        </h5>

        {/* PHASE 1 */}
        <div className="relative pl-4 border-l border-gray-700 pb-4">
          <span className="absolute -left-1.5 top-0 w-3 h-3 bg-gray-800 border border-gray-600 rounded-full"></span>
          <strong className="text-white block mb-1">
            PHASE 1: COMMAND INPUT
          </strong>
          <p className="text-xs text-gray-500">
            System waits for input from Tamer A and Tamer B.
            <br />
            State: <span className="text-yellow-500">AWAITING_PACKETS...</span>
          </p>
        </div>

        {/* PHASE 2 */}
        <div className="relative pl-4 border-l border-gray-700 pb-4">
          <span className="absolute -left-1.5 top-0 w-3 h-3 bg-gray-800 border border-gray-600 rounded-full"></span>
          <strong className="text-white block mb-1">
            PHASE 2: PRIORITY CALC
          </strong>
          <p className="text-xs text-gray-500">
            Compare <span className="text-purple-400">SPD</span> stats.
            <br />
            {"IF (Guard Selected) -> Priority Override (Act First)."}
            <br />
            {"ELSE -> Higher Speed acts first."}
          </p>
        </div>

        {/* PHASE 3 */}
        <div className="relative pl-4 border-l border-gray-700 pb-4">
          <span className="absolute -left-1.5 top-0 w-3 h-3 bg-gray-800 border border-gray-600 rounded-full"></span>
          <strong className="text-white block mb-1">PHASE 3: EXECUTION</strong>
          <p className="text-xs text-gray-500">
            1. <strong>High_Priority Entity</strong> executes move.
            <br />
            &nbsp;&nbsp;{"-> Check Hit/Dodge."}
            <br />
            &nbsp;&nbsp;{"-> Deal Damage."}
            <br />
            2. <strong>Low_Priority Entity</strong> executes move (if alive/not
            stunned).
          </p>
        </div>

        {/* PHASE 4 */}
        <div className="relative pl-4 border-l border-gray-700">
          <span className="absolute -left-1.5 top-0 w-3 h-3 bg-gray-800 border border-gray-600 rounded-full"></span>
          <strong className="text-white block mb-1">PHASE 4: END STATE</strong>
          <ul className="list-disc list-inside text-xs text-gray-500">
            <li>Apply DoT (Burn/Poison).</li>
            <li>
              Decrement Cooldowns (<span className="text-red-400">CD - 1</span>
              ).
            </li>
            <li>Check Win Condition.</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};
