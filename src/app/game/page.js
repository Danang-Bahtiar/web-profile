import ProjectCard from "@/component/cards/projectCard";
import Layout from "@/component/layout/layout";

export default function Game() {
  const header = {
    home: {
      slug: "/",
      label: "Home/",
    },
    project: {
      slug: "/game",
      label: "Games/",
    },
  };
  return (
    <Layout
      headers={header}
      content={
        <div className="flex flex-row">
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-4 overflow-y-auto max-h-[calc(100vh-10rem)] pr-6">
            <ProjectCard
              slug="/game/duelLinks"
              title="Yu-Gi-Oh! Duel Links"
              imageUrl="/game/DL.png"
              tech={"TCG"}
              tag="Active"
            />
            <ProjectCard
              slug="/game/hok"
              title="Honor of Kings"
              imageUrl="/game/HOK.png"
              tech={"MOBA"}
              tag="Active"
            />
            <ProjectCard
              slug="/game/shadowverse"
              title="Shadowverse Worlds Beyond"
              imageUrl="/game/SVWB.webp"
              tech={"TCG"}
              tag="Active"
            />
            <ProjectCard
              slug="/game/mahjong"
              title="Mahjong Soul"
              imageUrl="/game/MahjongSoul.webp"
              tech={"Table-Top"}
              tag="Active"
            />
            <ProjectCard
              slug="/game/arcade"
              title="Google Arcade"
              imageUrl="/game/arcade.png"
              tech={"Education"}
              tag="Inactive"
            />
            <ProjectCard
              slug="/game"
              title="Sudoku"
              imageUrl="/game/sudoku.png"
              tech={"Puzzle"}
              tag="Semi-Active"
            />
            <ProjectCard
              slug="/game/master-duel"
              title="Yu-Gi-Oh! Master Duel"
              imageUrl="/game/md.png"
              tech={"TCG"}
              tag="Inactive"
            />
            <ProjectCard
              slug="/game/ptcgp"
              title="Pokemon TCG Pocket"
              imageUrl="/game/ptcgp.png"
              tech={"TCG"}
              tag="Inactive"
            />
          </div>
        </div>
      }
      currentPageLabel={"Games"}
    />
  );
}
