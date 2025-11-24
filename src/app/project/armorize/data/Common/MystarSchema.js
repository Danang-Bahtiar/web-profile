export default {
    code: "NVMe: 0xDM0",
    category: "DATA_MODEL",
    title: "MYSTAR_SCHEMA",
    icon: "🧬",
    summary: "Defines entity structure and attribute mapping.",
    isLocked: true,
    password: process.env.NEXT_PUBLIC_MYSTAR_SCHEMA, // Password is required here
    hint: "Hint: What is the online handle of the sole developer?",
    content: (
      <div className="space-y-6 font-mono text-sm text-gray-300">
        {/* HEADER */}
        <h3 className="text-lg font-bold text-cyan-400 border-b border-gray-800 pb-2">
          // BASE_ENTITY_STRUCTURE
        </h3>

        {/* STAT MAPPING */}
        <div className="bg-gray-900/50 p-4 rounded border border-cyan-900/50">
          <h4 className="text-yellow-400 mb-2 font-bold text-xs uppercase tracking-widest">
            FRAGMENTS : ATTRIBUTE_LINKAGE
          </h4>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs">
            <li>
              <span className="text-white">Power</span> → Physical Attack (
              <span className="text-red-400">PATK</span>)
            </li>
            <li>
              <span className="text-white">Matter</span> → Health/Defense (
              <span className="text-green-400">HP / PDEF</span>)
            </li>
            <li>
              <span className="text-white">Knowledge</span> → Skill
              Attack/Utility (<span className="text-blue-400">SATK</span>)
            </li>
            <li>
              <span className="text-white">Velocity</span> → Speed/Initiative (
              <span className="text-purple-400">SPD</span>)
            </li>
            <li>
              <span className="text-white">Void</span> → Trait/Passive Capacity
              (<span className="text-gray-500">TRT_CAP</span>)
            </li>
            <li>
              <span className="text-white">Ego</span> → Resistance/Control (
              <span className="text-yellow-500">RES</span>)
            </li>
          </ul>
        </div>

        {/* MongoDB Schema Concept */}
        <div>
          <h4 className="font-bold text-cyan-400 mb-2">
            // MONGODB_DATA_MODEL
          </h4>
          <pre className="bg-black p-3 text-xs overflow-auto border border-gray-700">
            <code className="text-green-400">
              // Simplified Schema for MongoDB Atlas
              <br />
              const MystarSchema = new Schema(
              <br />
              &nbsp;&nbsp;id: {"{"} type: String, unique: true {"}"},
              <br />
              &nbsp;&nbsp;ownerId: {"{"} type: String, required: true {"}"},
              <br />
              &nbsp;&nbsp;baseStats: {"{"} type: Object, required: true {"}"},
              <br />
              &nbsp;&nbsp;activeTraits: {"{"} type: [String] {"}"},
              <br />
              &nbsp;&nbsp;equipment: {"{"} type: Object /* Head, Body, Claws */{" "}
              {"}"},
              <br />
              &nbsp;&nbsp;fragmentAlignment: {"{"} type: String, enum: ['Power',
              'Matter', ...] {"}"},
              <br />
              );
            </code>
          </pre>
        </div>

        {/* TRAIT SYSTEM */}
        <div className="pt-2">
          <h4 className="font-bold text-cyan-400 mb-1">
            // TRAIT_SYSTEM (Customization)
          </h4>
          <p className="text-xs text-gray-500">
            Traits are randomly assigned upon encounter. The system supports
            passive, conditional, and environmental traits.
            <br />
            Ex: <span className="text-white">Undead Trait</span> prevents
            self-healing but grants immunity to Status Effects.
          </p>
        </div>
      </div>
    ),
  }