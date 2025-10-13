import ProgressBar from "@/component/cards/barChart";
import ProjectCard from "@/component/cards/projectCard";
import Layout from "@/component/layout/layout";

export default function Certificate() {
  const header = {
    home: {
      slug: "/",
      label: "Home/",
    },
    project: {
      slug: "/certificate",
      label: "Certificate/",
    },
  };
  return (
    <Layout
      headers={header}
      content={
        <div className="flex flex-row">
          <div className=" p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-4 overflow-y-auto max-h-[calc(100vh-10rem)] pr-6">
            <p> TO BE ADDED </p>
          </div>
        </div>
      }
      currentPageLabel={"Certificate"}
    />
  );
}
