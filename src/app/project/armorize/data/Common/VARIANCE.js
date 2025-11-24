export default {
  code: "NVMe: 0x03",
  category: "SYS",
  title: "SYS_VARIANCE",
  icon: "🛠️",
  summary: "Competitive advantages and unique mechanics.",
  isLocked: false, // Triggers the lock UI
  content: (
    <div className="space-y-4 text-sm font-mono text-gray-300">
      <p className="italic text-gray-500 border-b border-gray-800 pb-2">
        {"> Analysis of divergence from standard Discord RPGs."}
      </p>

      <ul className="space-y-3">
        <li>
          <h5 className="text-cyan-400 font-bold">01 // GUILD_BIOMES</h5>
          <p className="text-xs">
            Discord servers aren't just chat rooms; they are procedural biomes.
            Spawn rates and events are influenced by server activity and member
            count.
          </p>
        </li>
        <li>
          <h5 className="text-cyan-400 font-bold">02 // DISCOVERY_BOUNTY</h5>
          <p className="text-xs">
            A collaborative "Global Dex." The first player to discover a Mystar
            variant logs it for the entire world, earning unique recognition.
          </p>
        </li>
        <li>
          <h5 className="text-cyan-400 font-bold">03 // LIQUIDITY_BANKING</h5>
          <p className="text-xs">
            A player-driven banking system where Premium/Free exchange rates are
            dictated by actual vault supply, not arbitrary developer values.
          </p>
        </li>
      </ul>
    </div>
  ),
};
