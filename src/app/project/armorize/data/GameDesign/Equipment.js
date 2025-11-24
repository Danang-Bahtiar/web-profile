export default {
    code: "DDR3: 0xERR",
    category: "EQUIPMENT",
    title: "EARLY_GEN_FABRICATION",
    icon: "⚠", // or a broken shield icon
    summary: "Critical failure report on Era-1 equipment production.",
    isLocked: false,
    content: (
      <div className="space-y-6 font-mono text-sm">
        {/* Header Alert */}
        <div className="bg-red-950/30 border border-red-500/50 p-4 rounded relative overflow-hidden">
          {/* Glitch Text Effect */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ff0000_10px,#ff0000_20px)]"></div>

          <h4 className="text-red-500 font-bold text-lg flex items-center gap-2 mb-2">
            <span className="animate-pulse">⚠</span> FABRICATION_FAILURE
          </h4>
          <p className="text-red-300/80 leading-relaxed">
            Initial attempts to fuse Core Residue with physical matter resulted
            in
            <span className="font-bold text-white"> 87% failure rate</span>.
            Equipment from this batch exhibits volatile anomalies.
          </p>
          <div className="mt-3 text-xs text-red-600 bg-black/50 inline-block px-2 py-1 rounded">
            STATUS: RECALLED // DO_NOT_USE
          </div>
        </div>

        {/* The "Bug Report" List */}
        <div className="space-y-3">
          <h5 className="text-gray-500 text-xs uppercase tracking-widest border-b border-gray-800 pb-1">
            // KNOWN_ANOMALIES
          </h5>

          {/* Bug 1: Stat Reduction */}
          <div className="flex gap-3 p-2 border-l-2 border-red-500 bg-gray-900/50">
            <div className="text-red-500 font-bold">[ERR_INV_STAT]</div>
            <div className="text-gray-400">
              <span className="text-white font-bold">Inverted Polarity:</span>{" "}
              Certain armor sets drain the wearer's durability instead of
              protecting it.
              <br />
              <span className="text-xs text-red-400 mt-1 block">
                &gt; DEF: -20 (Value Overflow)
              </span>
            </div>
          </div>

          {/* Bug 2: Disobedience (Command Override) */}
          <div className="flex gap-3 p-2 border-l-2 border-orange-500 bg-gray-900/50">
            <div className="text-orange-500 font-bold">[ERR_CMD_OVR]</div>
            <div className="text-gray-400">
              <span className="text-white font-bold">Signal Interference:</span>{" "}
              Helmets causing "noise" in the resonance link. Mystar may refuse
              commands or attack randomly.
              <br />
              <span className="text-xs text-orange-400 mt-1 block">
                &gt; OBEDIENCE_RATE: 0% (Critical)
              </span>
            </div>
          </div>

          {/* Bug 3: Happiness Drain */}
          <div className="flex gap-3 p-2 border-l-2 border-purple-500 bg-gray-900/50">
            <div className="text-purple-500 font-bold">[ERR_BIO_REJ]</div>
            <div className="text-gray-400">
              <span className="text-white font-bold">Bio-Rejection:</span> Items
              cause physical pain to the entity. Rapid decrease in
              mood/happiness metrics.
              <br />
              <span className="text-xs text-purple-400 mt-1 block">
                &gt; EFFECT: [DEPRESSION] Status Applied
              </span>
            </div>
          </div>

          {/* Bug 4: The Null Item */}
          <div className="flex gap-3 p-2 border-l-2 border-gray-500 bg-gray-900/50 opacity-60">
            <div className="text-gray-500 font-bold">[NULL_PTR]</div>
            <div className="text-gray-400">
              <span className="text-white font-bold">Phantom Weight:</span>
              Item exists visually but has no collision or mass. Does nothing.
              <br />
              <span className="text-xs text-gray-500 mt-1 block">
                &gt; STATS: undefined / NaN
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  }