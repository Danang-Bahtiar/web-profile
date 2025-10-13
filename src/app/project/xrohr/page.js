import Layout from "@/component/layout/layout";
import ProjectLayout from "@/component/layout/projectLayout";
import Details from "./DetailPage";
import Logs from "./Logs";
import Docs from "./Docs";

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
      slug: "/project/xrohr",
      label: "XRohr",
    },
  };
  return <Layout headers={header} content={<ProjectLayout detailPage={<Details />} logs={<Logs />} docs={<Docs />} />} currentPageLabel={"Project"}/>;
}
