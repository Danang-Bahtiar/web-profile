import Layout from "@/component/layout/layout";
import ProjectLayout from "@/component/layout/projectLayout";
import Details from "./DetailPage";
import Logs from "./Logs";
import Docs from "./Docs";
import FAQ from "./FAQ";

export default function Armorize() {
  const header = {
    home: {
      slug: "/",
      label: "Home/",
    },
    project: {
      slug: "/project",
      label: "Projects/",
    },
    armorize: {
      slug: "/project/armorize",
      label: "Armorize",
    },
  };
  return (
    <Layout
      headers={header}
      content={
        <ProjectLayout
          tabs={[
            { key: "details", label: "Details", content: <Details /> }
          ]}
        />
      }
      currentPageLabel={"Project"}
    />
  );
}
