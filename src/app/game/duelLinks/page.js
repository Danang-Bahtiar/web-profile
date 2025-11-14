'use client'
import { useState } from "react";
import DeckCarousel, { DeckCard2 } from "@/component/layout/deckCarousel";
import Layout from "@/component/layout/layout";
import Image from "next/image";

const kogDecks = [
  { month: "NOV", year: "2024", deckName: "Lyrilusc", deckImage: "/game/duelLinks/LyriluscKCKOG.png" },
  { month: "NOV", year: "2024", deckName: "Voidvelg", deckImage: "/game/duelLinks/VoidvelgKOG.png" },
  { month: "DEC", year: "2024", deckName: "Lyrilusc", deckImage: "/game/duelLinks/LyriluscKOG.png" },
  { month: "DEC", year: "2024", deckName: "Cyber Dragon", deckImage: "/game/duelLinks/CydraGR.png" },
  { month: "JAN", year: "2025", deckName: "Predaplant", deckImage: "/game/duelLinks/PredaplantKOG.png" },
  { month: "JAN", year: "2025", deckName: "Cyber Dragon", deckImage: "/game/duelLinks/CydraKOG.png" },
  { month: "FEB", year: "2025", deckName: "Predaplant", deckImage: "/game/duelLinks/PredaplantKCKOG.png" },
  { month: "FEB", year: "2025", deckName: "Metarion Gaia", deckImage: "/game/duelLinks/MetaGaiaKOG.png" },
  { month: "MAR", year: "2025", deckName: "Predaplant", deckImage: "/game/duelLinks/PredaplantKOG.png" },
  { month: "MAR", year: "2025", deckName: "Metarion Gaia", deckImage: "/game/duelLinks/MetaGaiaGRKOG.png" },
  { month: "APR", year: "2025", deckName: "Subterror", deckImage: "/game/duelLinks/SubterrorKCKOG.png" },
  { month: "APR", year: "2025", deckName: "Cyber Dragon", deckImage: "/game/duelLinks/CydraKOG.png" },
  { month: "MAY", year: "2025", deckName: "Subterror", deckImage: "/game/duelLinks/SubterrorKOG.png" },
  { month: "MAY", year: "2025", deckName: "Cyber Dragon", deckImage: "/game/duelLinks/CydraKOG.png" },
  { month: "JUN", year: "2025", deckName: "Sevens Road", deckImage: "/game/duelLinks/SevenRoadsKOG.png" },
  { month: "AUG", year: "2025", deckName: "Despia", deckImage: "/game/duelLinks/BrandedKOG.png" },
  { month: "SEP", year: "2025", deckName: "Lyrilusc", deckImage: "/game/duelLinks/LyriluscKCKOG.png" },
  { month: "OCT", year: "2025", deckName: "Shinobird", deckImage: "/game/duelLinks/ShinobirdKOG.png" },
  { month: "OCT", year: "2025", deckName: "Full Metariactor", deckImage: "/game/duelLinks/ActorKOG.png" },
  { month: "NOV", year: "2025", deckName: "Floowandereeze", deckImage: "/game/duelLinks/FlooKC.png" },
  { month: "NOV", year: "2025", deckName: "Shinobird", deckImage: "/game/duelLinks/ShinobirdKOG.png" },
];

export default function DuelLinks() {
  const [mode, setMode] = useState("Speed"); // "Speed" | "Rush"

  const header = {
    home: { slug: "/", label: "Home/" },
    project: { slug: "/game", label: "Games/" },
    game: { slug: "/game/duelLinks", label: "Yu-Gi-Oh! Duel Links/" },
  };

  const stats = {
    Speed: {
      rank: "King of Games",
      kog: 11,
      duels: 1847,
      wins: 1128,
      most: "Predaplant, Lyrilusc",
    },
    Rush: {
      rank: "Gold Rank 1",
      kog: 8,
      duels: 736,
      wins: 446,
      most: "Cyber Dragon",
    },
  };

  return (
    <Layout
      headers={header}
      content={
        <div className="h-full text-cyan-400 font-mono tracking-widest">
          {/* Top Section */}
          <div className="flex flex-row gap-4 p-4 items-center border-b-2 border-white flex-wrap md:gap-4">
            <div className="relative w-14 h-14 md:w-20 md:h-20 overflow-hidden">
              <Image
                src="/game/duelLinks/kogicon.png"
                alt="Duelist Icon"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <p className="text-lg md:text-2xl font-bold text-white">Dan Koyuki</p>
              <p className="text-sm md:text-lg text-gray-300">King of Games</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="p-2 md:p-4">
            {/* Toggle only on small screens */}
            <div className="flex md:hidden justify-center gap-4 mb-3">
              {["Speed", "Rush"].map((t) => (
                <button
                  key={t}
                  onClick={() => setMode(t)}
                  className={`px-4 py-1 rounded-md border-2 ${
                    mode === t
                      ? "border-cyan-400 text-white bg-cyan-800/50"
                      : "border-gray-500 text-gray-400"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Dual-column for desktop */}
            <div className="hidden md:flex flex-row">
              {/* Speed Duel */}
              <div className="w-1/2 p-4 border-r-2 border-white">
                <p className="text-2xl font-bold text-white mb-2">Speed Duel</p>
                <p><span className="text-gray-300">Rank: </span>{stats.Speed.rank}</p>
                <p><span className="text-gray-300">K.o.G. Count: </span>{stats.Speed.kog}</p>
                <p><span className="text-gray-300">PvP Duels: </span>{stats.Speed.duels}</p>
                <p><span className="text-gray-300">PvP Victories: </span>{stats.Speed.wins}</p>
                <p><span className="text-gray-300">Most Used: </span>{stats.Speed.most}</p>
              </div>

              {/* Rush Duel */}
              <div className="w-1/2 p-4 border-l-2 border-white">
                <p className="text-2xl font-bold text-white mb-2">Rush Duel</p>
                <p><span className="text-gray-300">Rank: </span>{stats.Rush.rank}</p>
                <p><span className="text-gray-300">K.o.G. Count: </span>{stats.Rush.kog}</p>
                <p><span className="text-gray-300">PvP Duels: </span>{stats.Rush.duels}</p>
                <p><span className="text-gray-300">PvP Victories: </span>{stats.Rush.wins}</p>
                <p><span className="text-gray-300">Most Used: </span>{stats.Rush.most}</p>
              </div>
            </div>

            {/* Single column (mobile view) */}
            <div className="md:hidden p-2">
              <p className="text-xl font-bold text-white mb-2">{mode} Duel</p>
              <p><span className="text-gray-300">Rank: </span>{stats[mode].rank}</p>
              <p><span className="text-gray-300">K.o.G. Count: </span>{stats[mode].kog}</p>
              <p><span className="text-gray-300">PvP Duels: </span>{stats[mode].duels}</p>
              <p><span className="text-gray-300">PvP Victories: </span>{stats[mode].wins}</p>
              <p><span className="text-gray-300">Most Used: </span>{stats[mode].most}</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t-2 border-white p-2 min-h-0">
            {/* Desktop: carousel, Mobile: simple list */}
            <div className="hidden md:block">
              <DeckCarousel title="King of Games Decks Archive" data={kogDecks} />
            </div>

            <div className="md:hidden flex flex-col gap-2 mt-2">
              <p className="text-lg font-bold text-white mb-1">K.o.G Decks Archive</p>
              {kogDecks.map((deck, idx) => (
                <DeckCard2 key={idx} deckImage={deck.deckImage} deckName={deck.deckName} month={deck.month} year={deck.year}/>
                
              ))}
            </div>
          </div>
        </div>
      }
      currentPageLabel="None"
    />
  );
}
