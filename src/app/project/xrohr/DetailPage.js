import TechPill from "@/component/cards/tech";
import SectionHeader from "@/component/header/sectionHeader";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGitAlt, FaNodeJs, FaNpm, FaTools } from "react-icons/fa";
import { FaBrain, FaCheck, FaLink, FaServer } from "react-icons/fa6";
import { MdDescription, MdReportProblem } from "react-icons/md";

export default function Details() {
  return (
    <div className="font-mono text-lg text-gray-300 tracking-wide">
      <SectionHeader>
        <MdDescription />
        Description
      </SectionHeader>
      <p className="leading-relaxed">
        A lightweight, opinionated, and highly flexible Node.js backend
        framework built on top of Express.js. XRohrJS is designed to streamline
        the development of resilient, live-service APIs by enforcing a
        centralized configuration structure and providing a modular,
        event-driven architecture.
      </p>

      <SectionHeader>
        <MdReportProblem />
        Problems
      </SectionHeader>
      <ul className="list-disc pl-8 space-y-4 font-mono text-lg text-gray-300 tracking-wide leading-relaxed">
        <li>
          Struggled with <strong>repetitive boilerplate</strong> (like cors,
          body-parser) for every new Express project, leading to inconsistent
          setups and wasted development time.
        </li>
        <li>
          Lacked a <strong>standardized project structure</strong> in vanilla
          Express, resulting in disorganized, hard-to-maintain codebases as
          applications scaled.
        </li>
        <li>
          Faced the <strong>"all-or-nothing" dilemma</strong> between vanilla
          Express (often too minimal) and heavy, complex frameworks (often
          overkill for medium-sized projects).
        </li>
      </ul>

      <SectionHeader>
        <FaCheck /> Solutions
      </SectionHeader>
      <ul className="list-disc pl-8 space-y-4 font-mono text-lg text-gray-300 tracking-wide leading-relaxed">
        <li>
          Automated all common boilerplate via a{" "}
          <strong>config-driven architecture</strong>, making a single{" "}
          <code>xrohr.config.js</code> file the "single source of truth" for
          server setup.
        </li>
        <li>
          Enforced a <strong>clean, opinionated project structure</strong> by
          automatically loading routes, middleware, and events from their
          designated directories.
        </li>
        <li>
          Provided "batteries-included" <strong>optional modules</strong>
          (like <code>SparkLite</code>, <code>Rheos</code>, <code>Memoria</code>
          ) that can be enabled or disabled, creating the perfect middle-ground
          framework.
        </li>
      </ul>

      <SectionHeader>
        <FaTools />
        Tech Stack
      </SectionHeader>
      <div className="flex flex-row flex-wrap gap-3">
        <TechPill>
          <BiLogoTypescript size={25} />
          TypeScript
        </TechPill>
        <TechPill>
          <FaServer size={25} />
          Express
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
        {/* Add the specific tech for each project */}
      </div>

      <SectionHeader>
        <FaBrain />
        Key Learnings
      </SectionHeader>
      {/* Use a list for semantic HTML. Tailwind classes for styling. */}
      <ul className="list-disc pl-8 space-y-4 font-mono text-lg text-gray-300 tracking-wide leading-relaxed">
        <li>
          Mastered <strong>advanced design patterns</strong> (like Factory,
          Singleton) to solve complex asynchronous initialization problems and
          manage application state.
        </li>
        <li>
          Learned to prioritize <strong>Developer Experience (DX)</strong> by
          designing a clean, intuitive public API and abstracting complex
          internal logic via encapsulation.
        </li>
        <li>
          Gained deep experience in{" "}
          <strong>framework-level architecture</strong>, understanding the
          trade-offs between flexibility (like vanilla Express) and opinionated
          design (like NestJS).
        </li>
      </ul>

      <SectionHeader>
        <FaLink />
        Related Links
      </SectionHeader>
      <div className="flex flex-col gap-2">
        <a
          href="https://github.com/Danang-Bahtiar/XrohrJS.git"
          className="text-cyan-400 hover:underline hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository: XRohrJS
        </a>
        <a
          href="https://www.npmjs.com/package/@dan_koyuki/xrohrjs"
          className="text-cyan-400 hover:underline hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          NPM Publish: XRohrJS
        </a>
      </div>
    </div>
  );
}
