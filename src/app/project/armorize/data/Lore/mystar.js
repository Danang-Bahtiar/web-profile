export default {
  code: "VRAM: 0xA2",
  category: "ENTITY",
  title: "MYSTAR",
  icon: "🐉",
  summary: "The Beginning.",
  isLocked: true,
  password: process.env.NEXT_PUBLIC_MYSTAR,
  hint: "Hint: What's the code of Lore category?", // Optional help
  content: (
    <div className="relative bg-gray-900/50 border border-cyan-900/30 rounded-md overflow-hidden p-6 font-sans text-gray-300">
      {/* DECORATION: Corner Accents */}
      <div className="absolute top-0 right-0 p-3 opacity-20">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* HEADER: Classification */}
      <div className="flex items-baseline gap-4 border-b border-cyan-900/50 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-white tracking-wide">MYSTAR</h2>
        <span className="font-mono text-xs text-cyan-500 uppercase tracking-widest">
          [ TAXONOMY_ID: M-001 // ORIGIN: CORE_RESIDUE ]
        </span>
      </div>

      {/* SECTION 1: The Definition */}
      <div className="mb-8">
        <h4 className="font-mono text-xs text-gray-500 uppercase mb-2">
          Definition
        </h4>
        <p className="leading-relaxed text-lg">
          The dominant biological lifeform of the current era. Following the
          Core Fracture, all previous flora and fauna were overwritten by{" "}
          <strong>Mystar</strong>—creatures born from the residue of the six
          Fragments. They are not merely animals; they are living manifestations
          of data and matter.
        </p>
      </div>

      {/* SECTION 2: The Human Paradox (The Cool Part) */}
      <div className="relative pl-6 border-l-2 border-yellow-600/50 bg-yellow-900/5 rounded-r-md py-2 pr-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow-500 text-xl">⚠</span>
          <h4 className="font-bold text-white text-sm uppercase tracking-wide">
            BIOLOGICAL ANOMALY: HUMANITY
          </h4>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed mb-3">
          Genetically,{" "}
          <strong>Humans are classified as a subspecies of Mystar</strong>. They
          share the same Fragment-based cellular structure as the creatures they
          hunt.
        </p>

        {/* The "System Exclusion" Logic */}
        <div className="bg-black/40 p-3 rounded border border-yellow-900/30 font-mono text-xs text-yellow-200/80">
          &gt; SYSTEM_ALERT: Taming Protocols Disabled for Target [HUMAN].
          <br />
          &gt; REASON: Sentience Lock / Moral Safety Override.
          <br />
          &gt; STATUS: Uncaptureable.
        </div>
      </div>

      {/* SECTION 3: Fragment Influence */}
      <div className="mt-8 pt-6 border-t border-cyan-900/30 grid grid-cols-2 gap-4">
        <div>
          <h4 className="font-mono text-xs text-gray-500 uppercase mb-1">
            Growth Source
          </h4>
          <p className="text-sm text-white">Environmental Mana</p>
        </div>
        <div>
          <h4 className="font-mono text-xs text-gray-500 uppercase mb-1">
            Behavior Logic
          </h4>
          <p className="text-sm text-white">Fragment Alignment</p>
        </div>
      </div>
    </div>
  ),
};
