export default {
  code: "NVMe: 0xDM2",
  category: "DATA_MODEL",
  title: "PLAYER_SCHEMA",
  icon: "🧬",
  summary: "Defines entity structure and attribute mapping.",
  isLocked: true,
  password: process.env.NEXT_PUBLIC_MYSTAR_SCHEMA,
  hint: "Hint: What is the online handle of the sole developer?",
  content: (
    <div className="space-y-6 font-mono text-sm text-gray-300">
      {/* HEADER */}
      <h3 className="text-lg font-bold text-cyan-400 border-b border-gray-800 pb-2">
        {"// BASE_ENTITY_STRUCTURE"}
      </h3>

      {/* NEW SECTION: EXPLANATION OF MECHANICS */}
      <div>
        <h4 className="font-bold text-yellow-500 mb-2">
          {"// LOGIC_PROTOCOLS (Guild Mechanics)"}
        </h4>
        <div className="bg-gray-900/50 p-3 border-l-2 border-yellow-500 text-xs text-gray-400 space-y-2">
          <p>
            <span className="text-cyan-400">TRIGGER:</span> Bot_Join_Server &gt;
            10 Members &rarr; Prompt Owner to Initialize.
          </p>
          <p>
            <span className="text-cyan-400">BINDING:</span> New users in server{" "}
            <span className="text-red-400">AUTO-JOIN</span>. Guild association
            is <span className="text-red-400">PERMANENT</span> (Exit: Denied).
          </p>
          <p>
            <span className="text-cyan-400">FUNCTION:</span> Acts as Town Hall
            (Quest Hub, Banking, Merchant Spawns).
          </p>
          <p>
            <span className="text-cyan-400">FALLBACK:</span> Solitary
            registration &rarr; Prompt "Public Guild" Selection.
          </p>
          <p>
            <span className="text-cyan-400">PROGRESSION:</span> Guild Battle
            Pass active. Upgrade to Premium via Vault.VoltixGems.
          </p>
          <p className="opacity-50 italic border-t border-gray-700 pt-1 mt-1">
            {
              "// TODO: Implement 'Orders' or 'Parties' later for smaller, flexible groups."
            }
          </p>
        </div>
      </div>

      {/* MongoDB Schema Concept */}
      <div>
        <h4 className="font-bold text-cyan-400 mb-2">
          {"// MONGODB_DATA_MODEL (Guild)"}
        </h4>
        <pre className="bg-black p-3 text-xs overflow-auto border border-gray-700">
          <code className="text-green-400">
            {`const GuildSchema = new mongoose.Schema({
  discordId: {type: String, required: true},
  username: {type: String, required: true, unique: true},
  guildId: {type: String, required: true},
  wallet: {
    starChips: {type: Number, default: 3000},
    voltixGems: {type: Number, default: 0}
  },
  level: { type: Number, default: 1 },
  exp: {type: Number, default: 0, max: 2000},
  claimedGuildPassLevel: {type: Number, default: 0},
  
}, {timestamps: true});`}
          </code>
        </pre>
      </div>
    </div>
  ),
};
