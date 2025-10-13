import Layout from "@/component/layout/layout";
import ProjectLayout from "@/component/layout/projectLayout";
import Logs from "./Logs";
import Details from "./DetailPage";
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
      slug: "/project/mongooseConnection",
      label: "Mongoose-Connection-Manager",
    },
  };
  return <Layout headers={header} content={<ProjectLayout detailPage={<Details />} logs={<Logs />} docs={<Docs />} />} currentPageLabel={"Project"}/>;
}
