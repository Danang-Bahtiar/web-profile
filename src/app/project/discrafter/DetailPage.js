import TechPill from "@/component/cards/tech";
import SectionHeader from "@/component/header/sectionHeader";
import { BiLogoTypescript } from "react-icons/bi";
import { FaDiscord, FaGitAlt, FaNodeJs, FaNpm, FaTools } from "react-icons/fa";
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
        DiscrafterJS is a mini-framework built on top of Discord.js. This
        framework was created with the goal of making Discord bot development
        easier and more structured. Adapting an opinionated coding style and
        convention system, DiscrafterJS enforces consistency in how commands,
        events, and configurations are written.
      </p>

      <SectionHeader>
        <MdReportProblem />
        Problems
      </SectionHeader>
      <p className="pl-4">
        - Debugging and code navigation were difficult due to boot-up logic being mixed with the main codebase.
      </p>

      <SectionHeader>
        <FaCheck /> Solutions
      </SectionHeader>
      <p className="pl-4">
        - Developed a dedicated package to manage boot-up logic, configuration, slash command registration, and event loading.
      </p>

      <SectionHeader>
        <FaTools />
        Tech Stack
      </SectionHeader>
      <div className="flex flex-row flex-wrap gap-3">
        <TechPill><BiLogoTypescript size={25}/>TypeScript</TechPill>
        <TechPill><FaDiscord size={25}/>DiscordJS</TechPill>
        <TechPill><FaNodeJs size={25}/>Node.js</TechPill>
        <TechPill><FaGitAlt size={25}/> Git</TechPill>
        <TechPill><FaNpm size={25}/> NPM</TechPill>
        {/* Add the specific tech for each project */}
      </div>

      <SectionHeader>
        <FaBrain />
        Key Learnings
      </SectionHeader>
      {/* Use a list for semantic HTML. Tailwind classes for styling. */}
      <ul className="list-disc pl-8 space-y-4 font-mono text-lg text-gray-300 tracking-wide leading-relaxed">
        <li>
          Designed a <strong>config-driven architecture</strong> to create a
          single source of truth for all server settings, improving
          maintainability and simplifying environment management.
        </li>
        <li>
          Implemented a clean public API by <strong>encapsulating</strong>{" "}
          internal logic in private methods, creating a clear and intuitive
          developer experience (DX).
        </li>
        <li>
          Utilized the <strong>async factory pattern</strong> to solve
          challenges with asynchronous object initialization, resulting in a
          cleaner and more robust application bootstrap process.
        </li>
      </ul>

      <SectionHeader>
        <FaLink />
        Related Links
      </SectionHeader>
      <div className="flex flex-col gap-2">
        <a
          href="https://github.com/Danang-Bahtiar/DiscrafterJS.git"
          className="text-cyan-400 hover:underline hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository: DiscrafterJS
        </a>
        <a
          href="https://www.npmjs.com/package/@dan_koyuki/discrafterjs"
          className="text-cyan-400 hover:underline hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          NPM Publish: DiscrafterJS
        </a>
      </div>
    </div>
  );
}
