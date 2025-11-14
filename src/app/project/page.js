import ProgressBar from "@/component/cards/barChart";
import ProjectCard from "@/component/cards/projectCard";
import Layout from "@/component/layout/layout";

export default function Project() {
  const header = {
    home: {
      slug: "/",
      label: "Home/",
    },
    project: {
      slug: "/project",
      label: "Projects/",
    },
  };
  return (
    <Layout
      headers={header}
      content={
        <div className="flex flex-row">
          <div className="hidden w-1/6 border-r-4 border-white p-4 text-xl font-mono font-medium text-blue-400 tracking-widest lg:flex flex-col gap-2">
            <ProgressBar label={"MongoDB"} count={3} />
            <ProgressBar label={"NodeJS"} count={4} />
            <ProgressBar label={"Discordjs"} count={1} />
            <ProgressBar label={"Express"} count={1} />
            <ProgressBar label={"NextJS"} count={1} />
            <ProgressBar label={"Android"} count={1} />
          </div>
          <div className="w-full lg:w-5/6 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-4 overflow-y-auto max-h-[calc(100vh-10rem)] pr-6">
            <ProjectCard
              slug="/project/armorize"
              title="Armorize Discord Edition"
              imageUrl="/projects/armorizeDiscord.png"
              tech="DiscrafterJS"
              tag="Game"
            />
            <ProjectCard
              slug="/project/xrohr"
              title="XRohrJS"
              imageUrl="/projects/xrohrJS.png"
              tech={"TypeScript, Express"}
              tag="Mini-Framework"
            />
            <ProjectCard
              slug="/project/discrafter"
              title="DiscrafterJS"
              imageUrl="/projects/discrafter.png"
              tech={"TypeScript, DiscordJS"}
              tag="Mini-Framework"
            />
            <ProjectCard
              slug="/project/mongooseConnection"
              title="MyriadJS"
              imageUrl="/projects/MyriadJS.png"
              tech="MongoDB, Mongoose"
              tag="Mini-Framework"
            />
            <ProjectCard
              slug="/"
              title="Web-Profile"
              imageUrl="/projects/logo2.png"
              tech="NextJS"
              tag="Web-Profile"
            />
            <ProjectCard
              slug="/project/atlas"
              title="Atlas Mobilizer"
              imageUrl="/projects/icon_atlasmobilizer.png"
              tech="Kotlin, Android"
              tag="APK"
            />
            {/* Add more ProjectCard components to see the scrolling effect */}
          </div>
        </div>
      }
      currentPageLabel={"Projects"}
    />
  );
}
