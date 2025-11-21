import Layout from "@/component/layout/layout";
import ProjectLayout from "@/component/layout/projectLayout";
import Details from "./DetailPage";
import Logs from "./Logs";
import Docs from "./Docs";
import FAQ from "./FAQ";
import Module from "./Module";

export default function XRohr() {
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
      slug: "/project/xrohr",
      label: "XRohr",
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
            { key: "module", label: "Module", content: <Module /> },
            { key: "logs", label: "Logs", content: <Logs /> },
          ]}
        />
      }
      currentPageLabel={"Project"}
    />
  );
}
