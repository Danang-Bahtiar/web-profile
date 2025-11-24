export default {
  code: "NVMe: 0x01",
  category: "CONCEPTS",
  title: "CORE_CONCEPTS",
  icon: "🧩",
  summary: "Theme, Genre, and Creative Influences.",
  isLocked: false, // Triggers the lock UI
  content: (
    <div className="space-y-4 text-sm font-mono text-gray-300">
      {/* Identity */}
      <div className="border-l-2 border-cyan-500 pl-3">
        <h4 className="text-cyan-400 font-bold">// IDENTITY</h4>
        <ul className="list-none mt-1 space-y-1">
          <li>
            <span className="text-gray-500">GENRE ::</span> Creature-Collection
            RPG / Text-Adventure
          </li>
          <li>
            <span className="text-gray-500">THEME ::</span> Discovery,
            Techno-Organic Transition, Community
          </li>
          <li>
            <span className="text-gray-500">MODE ::</span> Asynchronous MMO-Lite
          </li>
        </ul>
      </div>

      {/* Influences */}
      <div>
        <h4 className="text-yellow-400 font-bold mb-2">
          // REFERENCE_DATA (Inspirations)
        </h4>
        <div className="grid grid-cols-1 gap-2">
          <div className="bg-gray-900 p-2 rounded border border-gray-800">
            <span className="text-white font-bold"> ??? </span>
            <span className="text-xs text-gray-500">
              {"-> Core Collection Loop"}
            </span>
          </div>
          <div className="bg-gray-900 p-2 rounded border border-gray-800">
            <span className="text-white font-bold">Shangri-La Frontier</span>
            <span className="text-xs text-gray-500">
              {"-> Unique Monsters & Lore-based Survival"}
            </span>
          </div>
          <div className="bg-gray-900 p-2 rounded border border-gray-800">
            <span className="text-white font-bold"> ??? </span>
            <span className="text-xs text-gray-500">
              {"-> Player-Driven Scarcity & Economy"}
            </span>
          </div>
        </div>
      </div>
    </div>
  ),
};
