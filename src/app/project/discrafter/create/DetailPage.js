import TechPill from "@/component/cards/tech";
import SectionHeader from "@/component/header/sectionHeader";
import { BiLogoJavascript} from "react-icons/bi";
import { FaGitAlt, FaNodeJs, FaNpm, FaQuestion, FaTools } from "react-icons/fa";
import { FaBrain, FaCheck, FaLink } from "react-icons/fa6";
import { MdDescription, MdReportProblem } from "react-icons/md";

export default function Details() {
  return (
    <div className="font-mono text-lg text-gray-300 tracking-wide">
      <SectionHeader>
        <MdDescription />
        Description
      </SectionHeader>
      <p className="leading-relaxed">
        create-discrafter-bot is a project scaffolding tool designed to quickly
        generate a ready-to-use Discord bot project structure tailored for
        DiscrafterJS. It automates the repetitive setup process, from
        initializing the project to installing dependencies and preparing the
        default file structure.
      </p>

      <SectionHeader>
        <MdReportProblem />
        Problems
      </SectionHeader>
      <ul className="list-disc pl-8 space-y-4 font-mono text-lg text-gray-300 tracking-wide leading-relaxed">
        <li>
          Repeatedly running setup commands like npm init -y, manually
          installing dependencies, and creating folders (e.g., src, commands,
          events) became tedious when starting new projects.
        </li>
        <li>
          Project initialization lacked consistency, often leading to slightly different structures or configurations between projects.
        </li>
        <li>
          Setting up boilerplate code manually slowed down experimentation and development flow.
        </li>
      </ul>

      <SectionHeader>
        <FaCheck /> Solutions
      </SectionHeader>
      <ul className="list-disc pl-8 space-y-4 font-mono text-lg text-gray-300 tracking-wide leading-relaxed">
        <li>
          Built a custom scaffolding CLI tool that automates the entire setup process for new DiscrafterJS projects.
        </li>
        <li>
          Used Inquirer.js to create an interactive command-line interface, guiding users through setup options (e.g., project name, TypeScript or JavaScript, etc.).
        </li>
        <li>
          Leveraged Node's fs and path modules extensively to generate directories, template files, and configurations dynamically.
        </li>
        <li>
          Integrated dependency installation and auto-initialization steps to provide a ready-to-run development environment immediately after project creation.
        </li>
      </ul>

      <SectionHeader>
        <FaTools />
        Tech Stack
      </SectionHeader>
      <div className="flex flex-row flex-wrap gap-3">
        <TechPill>
          <BiLogoJavascript size={25} />
          JavaScript
        </TechPill>
        <TechPill>
          <FaQuestion size={25} />
          Inquirer.js
        </TechPill>
        <TechPill>
          <FaNodeJs size={25} />
          Node.js
        </TechPill>
        <TechPill>
          <FaGitAlt size={25} /> Git
        </TechPill>
        <TechPill>
          <FaNpm size={25} /> NPM
        </TechPill>
        <TechPill>
          <FaNodeJs size={25} /> File System (fs) API
        </TechPill>
        {/* Add the specific tech for each project */}
      </div>

      <SectionHeader>
        <FaBrain />
        Key Learnings
      </SectionHeader>
      {/* Use a list for semantic HTML. Tailwind classes for styling. */}
      <ul className="list-disc pl-8 space-y-4 font-mono text-lg text-gray-300 tracking-wide leading-relaxed">
        <li>
          Built a custom scaffolding CLI tool that automates the entire setup process for new DiscrafterJS projects.
        </li>
        <li>
          Used Inquirer.js to create an interactive command-line interface, guiding users through setup options (e.g., project name, TypeScript or JavaScript, etc.).
        </li>
        <li>
          Leveraged Node’s fs and path modules extensively to generate directories, template files, and configurations dynamically.
        </li>
        <li>
          Integrated dependency installation and auto-initialization steps to provide a ready-to-run development environment immediately after project creation.
        </li>
      </ul>

      <SectionHeader>
        <FaLink />
        Related Links
      </SectionHeader>
      <div className="flex flex-col gap-2">
        <a
          href="https://github.com/Danang-Bahtiar/create-discrafter-bot.git"
          className="text-cyan-400 hover:underline hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository: create-discrafter-bot
        </a>
        <a
          href="https://www.npmjs.com/package/create-discrafter-bot"
          className="text-cyan-400 hover:underline hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          NPM Publish: create-discrafter-bot
        </a>
      </div>
    </div>
  );
}
