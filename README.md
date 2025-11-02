<div className="text-center flex flex-col gap-6 px-4 w-full">
          {/* Rank Badge and Username (Stays at the top) */}
          <div className="flex flex-row items-center">
            <Image
              src={hokLegendBadge}
              alt="Legend Badge"
              width={150}
              height={150}
              className="drop-shadow-lg"
              priority
            />
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold mt-4 text-white">
                {currentStats.username}
                </h1>
                <p className="text-gray-300">{currentStats.rank}</p>
            </div>
          </div>

          {/* --- NEW: Multi-column Grid Wrapper --- */}
          {/* This creates 1 column on mobile (grid-cols-1) */}
          {/* and 2 columns on medium screens and up (md:grid-cols-2) */}
          {/* max-w-5xl prevents it from stretching too wide on large monitors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            
            {/* --- COLUMN 1: Current Stats --- */}
            {/* Added h-full to make both columns match height */}
            <div className="bg-neutral-900/60 border border-neutral-700 p-5 rounded-2xl shadow-md text-left h-full">
              <h2 className="text-lg font-semibold mb-4 text-white">
                Current Stats ({currentStats.season})
              </h2>

              {/* Ranked Stats */}
              <h3 className="font-semibold text-white">Ranked</h3>
              <div className="space-y-1 text-gray-300 mb-4 pl-4 text-sm">
                <p>
                  <span className="font-semibold text-white">Stars:</span>{" "}
                  {currentStats.star}
                </p>
                <p>
                  <span className="font-semibold text-white">
                    Overall Winrate:
                  </span>{" "}
                  {currentStats.overallWinrate}
                </p>
                <p>
                  <span className="font-semibold text-white">Peak Rating:</span>{" "}
                  {currentStats.peakRating}
                </p>
              </div>
            </div>

            {/* --- COLUMN 2: Past Seasons --- */}
            {/* Added h-full to make both columns match height */}
            <div className="bg-neutral-900/60 border border-neutral-700 p-5 rounded-2xl shadow-md text-left h-full">
              <h2 className="text-lg font-semibold mb-2 text-white">
                Past Seasons
              </h2>
              <ul className="space-y-1 text-gray-300">
                {Object.entries(pastRank)
                  .reverse() // Show most recent first
                  .map(([season, rank]) => (
                    <li key={season}>
                      <span className="font-semibold text-white">{season}:</span>{" "}
                      {rank}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          {/* --- End of Grid Wrapper --- */}

        </div>