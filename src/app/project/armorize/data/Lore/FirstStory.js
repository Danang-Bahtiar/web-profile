export default {
  code: "VRAM: 0xx1",
  category: "LORE",
  title: "AGE_OF_???",
  icon: "📁",
  summary: "The Beginning.",
  isLocked: false,
  content: (
    <div className="relative font-mono text-sm bg-black/40 p-6 border-l-2 border-red-900/50 rounded-r-md overflow-hidden group">
      {/* DECORATION: Faint Scanline Background */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%] opacity-10"></div>

      {/* HEADER: Log Metadata */}
      <div className="flex items-center gap-3 text-[10px] text-gray-600 mb-6 border-b border-gray-800 pb-2">
        <span className="text-red-900">⚠ ERR_DATA_CORRUPTION</span>
        <span>{"//"}</span>
        <span>RECOVERED_FRAGMENT_0XA1_Alpha</span>
      </div>

      {/* CONTENT BLOCK 1: The Era */}
      <div className="mb-6 leading-relaxed text-gray-400">
        <span className="opacity-50">The initial era was known as the </span>
        <span className="text-red-500 font-bold animate-pulse bg-red-950/30 px-1">
          [ AG_ OF_ASCEN__ION ]
        </span>
        <span className="opacity-50">
          . Humanity rose to its zenith, culminating in the creation of the{" "}
        </span>
        <strong className="text-cyan-400 drop-shadow-[0_0_3px_rgba(34,211,238,0.5)]">
          WORLD_CORE
        </strong>
        <span className="opacity-50">
          —a high-tech AI entity possessing its own will.
        </span>
      </div>

      {/* CONTENT BLOCK 2: The Violation */}
      <div className="mb-6 p-3 bg-red-950/10 border border-red-900/30 rounded relative">
        <div className="absolute -top-2 left-2 text-[8px] bg-black px-1 text-red-700">
          WARNING_LOG
        </div>
        <p className="italic text-red-400/80">
          "The Core’s goal was classified... target marked by a{" "}
          <span className="inline-block border-b border-red-500 animate-pulse">
            :: PROTOCOL_VIOLATION ::
          </span>
          "
        </p>
      </div>

      {/* CONTENT BLOCK 3: The Fragments */}
      <div className="space-y-1">
        <p className="text-gray-500 mb-3">
          &gt;&gt; SYSTEM_FAILURE: CORE SHATTERED. DETECTING FRAGMENTS:
        </p>

        <div className="pl-4 border-l border-gray-800 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-gray-700 text-xs">[01]</span>
            <span className="text-red-500 font-bold tracking-widest">
              KNOWL_DGE...
            </span>
            <span className="text-[10px] text-red-900 animate-pulse">
              ERROR
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-700 text-xs">[02]</span>
            <span className="text-yellow-500 font-bold tracking-widest">
              POW__...
            </span>
            <span className="text-[10px] text-yellow-900 animate-pulse">
              UNSTABLE
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-700 text-xs">[03]</span>
            <span className="text-gray-400 font-bold tracking-widest">
              MATT_R...
            </span>
            <span className="text-[10px] text-gray-800">SYNCING</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-700 text-xs">[04]</span>
            <span className="text-red-500 font-bold tracking-widest">
              .....
            </span>
            <span className="text-[10px] text-red-900 animate-pulse">
              ERROR
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-700 text-xs">[05]</span>
            <span className="text-red-500 font-bold tracking-widest">
              LI_...
            </span>
            <span className="text-[10px] text-red-900 animate-pulse">
              ERROR
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-700 text-xs">[06]</span>
            <span className="text-red-500 font-bold tracking-widest">
              D_.._
            </span>
            <span className="text-[10px] text-red-900 animate-pulse">
              ERROR
            </span>
          </div>
        </div>

        <p className="text-xs text-gray-600 mt-4 pt-2 border-t border-gray-900">
          ...data stream used for Mystar taming protocols.
        </p>
      </div>
    </div>
  ),
};
