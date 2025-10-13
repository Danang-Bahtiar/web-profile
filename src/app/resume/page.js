import ProjectCard from "@/component/cards/projectCard";
import ResumeCard from "@/component/cards/resumeCard";
import Layout from "@/component/layout/layout";

export default function Resume() {
  const header = {
    home: {
      slug: "/",
      label: "Home/",
    },
    project: {
      slug: "/resume",
      label: "Curriculum Vitae/",
    },
  };
  return (
    <Layout
      headers={header}
      content={
        <div className="flex flex-row">
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-4 overflow-y-auto max-h-[calc(100vh-12rem)] pr-6">
            <ResumeCard
              href={
                "https://docs.google.com/document/d/1uwvLdtqa6XOHsHVqQ5vOYI7wgiSIPFmlBE8sVX-NI30/edit?usp=sharing"
              }
              imageUrl={"/example.png"}
              title={"Backend Architecture & Game Designer"}

            />
            {/* Add more ProjectCard components to see the scrolling effect */}
          </div>
        </div>
      }
      currentPageLabel={"Resume/CV"}
    />
  );
}
