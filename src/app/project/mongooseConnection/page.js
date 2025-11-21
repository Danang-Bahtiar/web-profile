import Layout from "@/component/layout/layout";
import ProjectLayout from "@/component/layout/projectLayout";
import Logs from "./Logs";
import Details from "./DetailPage";
import Docs from "./Docs";
import FAQ from "./FAQ";

export default function Discrafter() {
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
      slug: "/project/mongooseConnection",
      label: "Mongoose-Connection-Manager",
    },
  };
  return (
    <Layout
      headers={header}
      content={
        <ProjectLayout
          tabs={[
            { key: "details", label: "Details", content: <Details /> },
            { key: "docs", label: "Docs", content: <Docs /> },
            { key: "faq", label: "FAQ", content: <FAQ /> },
            { key: "logs", label: "Logs", content: <Logs /> },
          ]}
        />
      }
      currentPageLabel={"Project"}
    />
  );
}
