import TechPill from "@/component/cards/tech";
import SectionHeader from "@/component/header/sectionHeader";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
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
        Mongoose Connection Manager is a lightweight and modular class for managing multiple MongoDB connections using Mongoose. Supports easy creation, retrieval, monitoring, and cleanup of named connections.
      </p>

      <SectionHeader>
        <MdReportProblem />
        Problems
      </SectionHeader>
      <ul className="list-disc pl-8 space-y-4 font-mono text-lg text-gray-300 tracking-wide leading-relaxed">
        <li>
          Managing multiple MongoDB clusters or databases within a single project was difficult using Mongoose’s default singleton connection model.
        </li>
        <li>
          Switching or reusing connections between different environments caused confusion and potential memory leaks.
        </li>
        <li>
          Debugging connection issues was time-consuming due to lack of visibility and structure.
        </li>
        <li>
          As a free developer using MongoDB Atlas, maintaining multiple clusters without proper connection management quickly became messy.
        </li>
      </ul>

      <SectionHeader>
        <FaCheck /> Solutions
      </SectionHeader>
      <ul className="list-disc pl-8 space-y-4 font-mono text-lg text-gray-300 tracking-wide leading-relaxed">
        <li>
          Implemented a dedicated connection manager using a Map to handle multiple named connections safely and dynamically.
        </li>
        <li>
          Introduced event-based logging (connected, error, disconnected) to improve observability and debugging.
        </li>
        <li>
          Added auto-cleanup on process exit (SIGINT) to prevent lingering open connections.
        </li>
        <li>
          Provided a consistent API for adding, retrieving, checking, and closing connections (addConnection, getConnection, getState, closeConnection, etc.).
        </li>
        <li>
          Supported graceful shutdown and detailed connection tracking with getAllConnections() for monitoring active databases.
        </li>
      </ul>

      <SectionHeader>
        <FaTools />
        Tech Stack
      </SectionHeader>
      <div className="flex flex-row flex-wrap gap-3">
        <TechPill><BiLogoTypescript size={25}/>TypeScript</TechPill>
        <TechPill><FaNodeJs size={25}/>Node.js</TechPill>
        <TechPill><FaGitAlt size={25}/> Git</TechPill>
        <TechPill><FaNpm size={25}/> NPM</TechPill>
        <TechPill><BiLogoMongodb size={25}/>Mongoose</TechPill>
        <TechPill><BiLogoMongodb size={25}/>MongoDB</TechPill>
        {/* Add the specific tech for each project */}
      </div>

      <SectionHeader>
        <FaBrain />
        Key Learnings
      </SectionHeader>
      {/* Use a list for semantic HTML. Tailwind classes for styling. */}
      <ul className="list-disc pl-8 space-y-4 font-mono text-lg text-gray-300 tracking-wide leading-relaxed">
        <li>
          Learned how to bypass Mongoose’s default singleton limitation by using mongoose.createConnection() for independent database contexts.
        </li>
        <li>
          Designed a connection lifecycle manager that scales across multiple clusters with minimal boilerplate.
        </li>
        <li>
          Improved understanding of resource management and graceful process termination in Node.js applications.
        </li>
        <li>
          Enhanced debugging and maintainability through structured connection tracking and color-coded console feedback.
        </li>
      </ul>

      <SectionHeader>
        <FaLink />
        Related Links
      </SectionHeader>
      <div className="flex flex-col gap-2">
        <a
          href="https://github.com/Danang-Bahtiar/mongoose-connection-manager.git"
          className="text-cyan-400 hover:underline hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository: Mongoose-Connection-Manager
        </a>
        <a
          href="https://www.npmjs.com/package/@dan_koyuki/mongoose-connection-manager"
          className="text-cyan-400 hover:underline hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          NPM Publish: @dan_koyuki/mongoose-connection-manager
        </a>
      </div>
    </div>
  );
}
