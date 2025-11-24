import TechPill from "@/component/cards/tech";
import SectionHeader from "@/component/header/sectionHeader";
import { BiLogoTypescript } from "react-icons/bi";
import { FaDiscord, FaGitAlt, FaNodeJs, FaNpm, FaTools } from "react-icons/fa";
import { FaBrain, FaCheck, FaLink } from "react-icons/fa6";
import { MdDescription, MdReportProblem } from "react-icons/md";
import { SiMongodb } from "react-icons/si";
import ArmorizeDatabase from "./data";

export default function Details() {
  return (
    <div className="font-mono text-lg text-gray-300 tracking-wide">
      <ArmorizeDatabase />
    </div>
  );
}
