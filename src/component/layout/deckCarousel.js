// pages/duelLinks.js
import DeckCarousel from "@/component/layout/deckCarousel";
import Layout from "@/component/layout/layout";
import Image from "next/image"; // Import Image for the icon

const kogDecks = [
  { month: 'NOV', year: '2024', deckName: 'Lyrilusc', deckImage: '/game/duelLinks/lyrilusc.png' },
  { month: 'NOV', year: '2024', deckName: 'Voidvelgr', deckImage: '/game/duelLinks/voidvelg.png' },
  { month: 'DEC', year: '2024', deckName: 'Lyrilusc', deckImage: '/game/duelLinks/lyrilusc.png' },
  { month: 'JAN', year: '2025', deckName: 'Predaplant', deckImage: '/game/duelLinks/predap.png' },
  { month: 'JAN', year: '2025', deckName: 'Cyber Dragon', deckImage: '/game/duelLinks/cyber dragon.png' },
  { month: 'FEB', year: '2025', deckName: 'Predaplant', deckImage: '/game/duelLinks/predap.png' },
  { month: 'FEB', year: '2025', deckName: 'Gaia', deckImage: '/game/duelLinks/gaia.png' },
  { month: 'MAR', year: '2025', deckName: 'Predaplant', deckImage: '/game/duelLinks/predap.png' },
  { month: 'MAR', year: '2025', deckName: 'Gaia', deckImage: '/game/duelLinks/gaia.png' },
  { month: 'APR', year: '2025', deckName: 'Subterror', deckImage: '/game/duelLinks/subterror.png' },
  { month: 'APR', year: '2025', deckName: 'Cyber Dragon', deckImage: '/game/duelLinks/cyber dragon.png' },
  { month: 'MAY', year: '2025', deckName: 'Subterror', deckImage: '/game/duelLinks/subterror.png' },
  { month: 'MAY', year: '2025', deckName: 'Cyber Dragon', deckImage: '/game/duelLinks/cyber dragon.png' },
  { month: 'JUN', year: '2025', deckName: 'Sevens Road', deckImage: '/game/duelLinks/sevenroad.png' },
  { month: 'AUG', year: '2025', deckName: 'Despia', deckImage: '/game/duelLinks/despia.png' },
  { month: 'SEP', year: '2025', deckName: 'Lyrilusc', deckImage: '/game/duelLinks/lyrilusc.png' },
  { month: 'OCT', 'year': '2025', deckName: 'Shinobird', deckImage: '/game/duelLinks/shinobird.png' },
  { month: 'OCT', year: '2025', deckName: 'Abyss Actor', deckImage: '/game/duelLinks/actor.png' },
];

// --- Styles Object ---
const styles = {
  // Main container: Switched to GRID
  container: "h-full text-cyan-400 font-mono tracking-widest grid grid-rows-[auto_2fr_1fr]",
  
  // Top: Profile header
  profileHeader: "flex flex-row gap-4 p-4 items-center border-b-2 border-white", // Removed flex-shrink
  profileIcon: "relative w-24 h-24 overflow-hidden",
  profileText: "flex flex-col",
  profileName: "text-2xl font-bold text-white",
  profileTitle: "text-lg text-gray-300",
  
  // Middle: Stats container
  statsContainer: "flex flex-row p-2 min-h-0", // Removed flex-grow, added min-h-0 for safety
  
  // Stats Columns (Speed & Rush)
  statsColumn: "w-1/2 p-4 flex flex-col gap-2 text-lg",
  statsColumnLeft: "border-r-2 border-white",
  statsColumnRight: "border-l-2 border-white pl-6",
  statsTitle: "text-2xl font-bold text-white mb-2",
  statsLabel: "text-gray-300",
  statsValue: "text-cyan-400",
  
  // Bottom: Placeholder
  bottomSection: "border-t-2 border-white p-4 min-h-0", // Removed h-1/3 and flex-shrink
};


export default function DuelLinks() {
  const header = {
    home: { slug: "/", label: "Home/" },
    project: { slug: "/game", label: "Games/" },
    game: { slug: "/duelLinks", label: "Yu-Gi-Oh! Duel Links/" },
  };

  return (
    <Layout
      headers={header}
      content={
        <div className={styles.container}>
          {/* Top Section (Profile) - ROW 1 (auto) */}
          <div className={styles.profileHeader}>
            <div className={styles.profileIcon}>
              <Image
                src={"/game/duelLinks/kogicon.png"}
                alt="Duelist Icon"
                fill
                className="object-contain"
              />
            </div>
            <div className={styles.profileText}>
              <p className={styles.profileName}>Dan Koyuki</p>
              <p className={styles.profileTitle}>King of Games</p>
            </div>
          </div>

          {/* Middle Section (Stats) - ROW 2 (2fr) */}
          <div className={styles.statsContainer}>
            {/* Speed Duel Column */}
            <div className={`${styles.statsColumn} ${styles.statsColumnLeft}`}>
              <p className={styles.statsTitle}>Speed Duel</p>
              <p><span className={styles.statsLabel}>Rank: </span>Platinum Rank 6</p>
              <p><span className={styles.statsLabel}>K.o.G. Count: </span>10</p>
              <p><span className={styles.statsLabel}>PvP Duels: </span>1847</p>
              <p><span className={styles.statsLabel}>PvP Victories: </span>1128</p>
              <p><span className={styles.statsLabel}>Most Used: </span>Predaplant, Lyrilusc</p>
            </div>
            
            {/* Rush Duel Column */}
            <div className={`${styles.statsColumn} ${styles.statsColumnRight}`}>
              <p className={styles.statsTitle}>Rush Duel</p>
              <p><span className={styles.statsLabel}>Rank: </span>Silver Rank 5</p>
              <p><span className={styles.statsLabel}>K.o.G. Count: </span>8</p>
              <p><span className={styles.statsLabel}>PvP Duels: </span>736</p>
              <p><span className={styles.statsLabel}>PvP Victories: </span>446</p>
              <p><span className={styles.statsLabel}>Most Used: </span>Cyber Dragon</p>
            </div>
          </div>

          {/* Bottom Section (Carousel) - ROW 3 (1fr) */}
          <div className={styles.bottomSection}>
            <DeckCarousel title="King of Games Decks - Monthly Archive" data={kogDecks} />
          </div>
        </div>
      }
      currentPageLabel={"None"}
    />
  );
}