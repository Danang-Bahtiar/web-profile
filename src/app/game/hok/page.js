import HeroCarousel, { HeroCard } from "@/component/layout/heroCarousel";
import Layout from "@/component/layout/layout";
import Image from "next/image";

export default function HOK() {
  const header = {
    home: { slug: "/", label: "Home/" },
    project: { slug: "/game", label: "Games/" },
    game: { slug: "/game/hok", label: "Honor of Kings/" },
  };

  // ... (currentStats and pastRank data objects remain the same) ...
  const currentStats = {
    username: "dan_koyuki",
    rank: "Grandmaster - Legend Undying Phoenix",
    season: "2025 S4 (S12)",
    star: 102,
    favoriteHero: [
      {
        name: "Kongming",
        heroPower: 7201,
        winrate: "56.9%",
        image: "/game/hok/kongming.png",
      },
      {
        name: "Liang",
        heroPower: 6532,
        winrate: "59.4%",
        image: "/game/hok/liang.png",
      },
      {
        name: "Milady",
        heroPower: 5622,
        winrate: "53.8%",
        image: "/game/hok/milady.png",
      },
      {
        name: "Prince of Lanling",
        heroPower: 4986,
        winrate: "58.4%",
        image: "/game/hok/lanling.png",
      },
      {
        name: "Musashi",
        heroPower: 4830,
        winrate: "58.1%",
        image: "/game/hok/musashi.png",
      },
    ],
    role: "Mage / Assassin (Midlane, Jungler)",
    peakRating: 1600,
    overallWinrate: "54%",
  };

  const pastRank = {
    "2025 S3": "Grandmaster - Legend Light of Salvation",
    "2025 S2": "Grandmaster - Mythic Lone Wolf",
    "2025 S1": "Grandmaster",
    "2024 S5": "Inactive",
    "2024 S4": "Inactive",
  };

  const hokLegendBadge = "/game/hok/hoklegend.png";

  return (
    <Layout
      headers={header}
      content={
        <div className="h-full text-cyan-400 font-mono tracking-widest">
          {/* Top Section */}
          <div className="flex flex-col gap-4 p-4 items-center border-b-2 border-white md:flex-row flex-wrap md:gap-4">
            <div className="relative w-20 h-20 md:w-20 md:h-20 overflow-hidden">
              <Image
                src={hokLegendBadge}
                alt="Legend Badge"
                width={2048}
                height={2048}
                className="drop-shadow-lg"
                priority
              />
            </div>
            <div className="text-center md:text-start flex flex-col">
              <p className="text-lg md:text-2xl font-bold text-white">
                {currentStats.username}
              </p>
              <p className="text-sm md:text-lg text-gray-300">
                {currentStats.rank}
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="p-2 md:p-4">
            {/* Dual-column for desktop */}
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-4 md:border-r-2 border-white">
                <p className="text-2xl font-bold text-white mb-2">
                  Current Stats ({currentStats.season})
                </p>
                <p>
                  <span className="text-gray-300">Ranked Stars: </span>
                  {currentStats.star}
                </p>
                <p>
                  <span className="text-gray-300">Peak Rating: </span>
                  {currentStats.peakRating}
                </p>
                <p>
                  <span className="text-gray-300">Overall Winrate: </span>
                  {currentStats.overallWinrate}
                </p>
                <p>
                  <span className="text-gray-300">Main Role: </span>
                  {currentStats.role}
                </p>
              </div>

              <div className="w-full md:w-1/2 p-4 md:border-l-2 border-white">
                <p className="text-2xl font-bold text-white mb-2">
                  Past Season
                </p>
                <ul className="space-y-1 text-gray-300">
                  {Object.entries(pastRank)
                    .reverse() // Show most recent first
                    .map(([season, rank]) => (
                      <li key={season}>
                        <span className="font-semibold text-white">
                          {season}:
                        </span>{" "}
                        {rank}
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t-2 border-white p-2 min-h-0">
              <div className="hidden md:block">
                <HeroCarousel
                  title="Most Played Heroes"
                  data={currentStats.favoriteHero}
                />
              </div>

              <div className="md:hidden flex flex-col gap-2 mt-2">
                <p className="text-lg font-bold text-white mb-1">
                  Most Played Heroes
                </p>
                {currentStats.favoriteHero.map((hero, idx) => (
                  <HeroCard
                    key={idx}
                    name={hero.name}
                    image={hero.image}
                    heroPower={hero.heroPower}
                    winrate={hero.winrate}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      }
      currentPageLabel="None"
    />
  );
}
