import DeckCarousel from "@/component/layout/deckCarousel";
import Layout from "@/component/layout/layout";
import Image from "next/image"; // Import Image for the icon

const kogDecks = [
  { month: 'NOV', year: '2024', deckImage: '/game/duelLinks/lyrilusc.png' },
  { month: 'NOV', year: '2024', deckImage: '/game/duelLinks/voidvelg.png' },
  { month: 'DEC', year: '2024',  deckImage: '/game/duelLinks/lyrilusc.png' },
  { month: 'JAN', year: '2025',  deckImage: '/game/duelLinks/predap.png' },
  { month: 'JAN', year: '2025',  deckImage: '/game/duelLinks/cyber dragon.png' },
  { month: 'FEB', year: '2025',  deckImage: '/game/duelLinks/predap.png' },
  { month: 'FEB', year: '2025',  deckImage: '/game/duelLinks/gaia.png' },
  { month: 'MAR', year: '2025',  deckImage: '/game/duelLinks/predap.png' },
  { month: 'MAR', year: '2025',  deckImage: '/game/duelLinks/gaia.png' },
  { month: 'APR', year: '2025',  deckImage: '/game/duelLinks/subterror.png' },
  { month: 'APR', year: '2025',  deckImage: '/game/duelLinks/cyber dragon.png' },
  { month: 'MAY', year: '2025',  deckImage: '/game/duelLinks/subterror.png' },
  { month: 'MAY', year: '2025',  deckImage: '/game/duelLinks/cyber dragon.png' },
  { month: 'JUN', year: '2025',  deckImage: '/game/duelLinks/sevenroad.png' },
  { month: 'AUG', year: '2025',  deckImage: '/game/duelLinks/despia.png' },
  { month: 'SEP', year: '2025',  deckImage: '/game/duelLinks/lyrilusc.png' },
  { month: 'OCT', year: '2025',  deckImage: '/game/duelLinks/shinobird.png' },
  { month: 'OCT', year: '2025',  deckImage: '/game/duelLinks/actor.png' },
];

// --- Styles Object ---
const styles = {
  // Main container: Fills height, flex-col
  container: "flex flex-col h-full text-cyan-400 font-mono tracking-widest",
  
  // Top: Profile header
  profileHeader: "flex flex-row gap-4 p-4 items-center flex-shrink-0 border-b-2 border-white", // Won't shrink
  profileIcon: "relative w-24 h-24 overflow-hidden",
  profileText: "flex flex-col",
  profileName: "text-2xl font-bold text-white",
  profileTitle: "text-lg text-gray-300",
  
  // Middle: Stats container
  statsContainer: "flex flex-row p-2 flex-grow", // Will grow to fill space
  
  // Stats Columns (Speed & Rush)
  statsColumn: "w-1/2 p-4 flex flex-col gap-2 text-lg",
  statsColumnLeft: "border-r-2 border-white",
  statsColumnRight: "border-l-2 border-white pl-6", // Added padding-left
  statsTitle: "text-2xl font-bold text-white mb-2",
  statsLabel: "text-gray-300",
  statsValue: "text-cyan-400",
  
  // Bottom: Placeholder
  bottomSection: "border-t-2 border-white h-1/3 flex-shrink-0 p-4", // Won't shrink
};


export default function DuelLinks() {
  const header = {
    home: {
      slug: "/",
      label: "Home/",
    },
    project: {
      slug: "/game",
      label: "Games/",
    },
    game: {
      slug: "/duelLinks",
      label: "Yu-Gi-Oh! Duel Links/",
    },
  };

  return (
    <Layout
      headers={header}
      content={
        <div className={styles.container}>
          {/* Top Section (Profile) */}
          <div className={styles.profileHeader}>
            <div className={styles.profileIcon}>
              <Image
                src={"/game/duelLinks/kogicon.png"} // Using your test image as a placeholder
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

          {/* Middle Section (Stats) */}
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

          {/* Bottom Section (Placeholder) */}
          <div className={styles.bottomSection}>
            <DeckCarousel title="King of Games Decks - Monthly Archive" data={kogDecks} />
          </div>
        </div>
      }
      currentPageLabel={"None"} 
    />
  );
}