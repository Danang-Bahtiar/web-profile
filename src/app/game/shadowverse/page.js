import HeroCarousel from "@/component/layout/heroCarousel";
import Layout from "@/component/layout/layout";
import SVCarousel from "@/component/layout/shadowverseCarousel";
import Image from "next/image";

export default function Shadowverse() {
  const header = {
    home: { slug: "/", label: "Home/" },
    project: { slug: "/game", label: "Games/" },
    game: { slug: "/game/shadowverse", label: "Shadowverse: Worlds Beyond/" },
  };

  // ... (currentStats and pastRank data objects remain the same) ...
  const currentStats = {
    username: "Dan Koyuki",
    title: "Promising Rookie | Casual Player",
    rank: "B1",
    RP: 26544,
    group: "Sapphire",
    favoriteDeck: "Abysscraft Mode",
  };

  const deck = [
    {
      name: "Swordcraft Aggro",
      set: "Legends Rise",
      image: "/game/shadowverse/AlbertSV.png",
    },
    {
      name: "Abysscraft Aggro",
      set: "Infinity Evolved",
      image: "/game/shadowverse/ExellaSV.png",
    },
    {
      name: "Abysscraft Mode",
      set: "Heirs of the Omen",
      image: "/game/shadowverse/ShamNachaSV.png",
    },
    {
      name: "Swordcraft",
      set: "Skybound Dragons",
      image: "/game/shadowverse/SeofonSV.png",
    },
  ];

  const pastRank = {
    Abysscraft: 82,
    Swordcraft: 33,
    Forestcraft: 5,
    Runecraft: 2,
    Portalcraft: 2,
    // "Dragoncraft": 0,
    // "Heavencraft": 0,
  };

  const hokLegendBadge = "/game/shadowverse/Diawl_em.webp";

  return (
    <Layout
      headers={header}
      content={
        <div className="h-full text-cyan-400 font-mono tracking-widest">
          {/* Top Section */}
          <div className="flex flex-row gap-4 p-4 items-center border-b-2 border-white md:flex-row flex-wrap md:gap-4">
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
            <div className="flex flex-col">
              <p className="text-lg md:text-2xl font-bold text-white">
                {currentStats.username}
              </p>
              <p className="text-sm md:text-lg text-gray-300">
                {currentStats.title}
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="p-2 md:p-4">
            {/* Dual-column for desktop */}
            <div className="flex flex-col lg:flex-row">
              <div className="w-full md:w-1/2 p-4 md:border-r-2 border-white">
                <p className="text-2xl font-bold text-white mb-2">Stats</p>
                <p>
                  <span className="text-gray-300">Group: </span>
                  {currentStats.group}
                </p>
                <p>
                  <span className="text-gray-300">Rank: </span>
                  {currentStats.rank}
                </p>
                <p>
                  <span className="text-gray-300">Rank Point: </span>
                  {currentStats.RP}
                </p>
                <p>
                  <span className="text-gray-300">Favorite Deck: </span>
                  {currentStats.favoriteDeck}
                </p>
              </div>

              <div className="w-full md:w-1/2 p-4 md:border-l-2 border-white">
                <p className="text-2xl font-bold text-white mb-2">
                  Class Wins in Ranked
                </p>
                <ul className="space-y-1 text-gray-300">
                  {Object.entries(pastRank).map(([season, rank]) => (
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
                <SVCarousel
                  title="Deck used in each Set Release"
                  data={deck}
                />
              </div>
            </div>
          </div>
        </div>
      }
      currentPageLabel="None"
    />
  );
}
