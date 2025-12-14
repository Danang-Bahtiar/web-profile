export default function WebDev() {
  return (
    <div className="w-full h-full bg-white text-black p-8 font-serif leading-relaxed text-sm">
      {/* --- HEADER --- */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Irwanto Danang Bahtiar
          </h1>
          <h2 className="text-xl text-gray-800 mt-1">
            Backend Developer & Systems Architect
          </h2>
        </div>
        <div className="text-right text-sm text-gray-700 space-y-1 py-3">
          <p>Bandung, Jawa Barat, 40614, Indonesia</p>
          <p>
            <p className="font-semibold">+62 821-1642-4576</p>
            <a
              href="mailto:dankoyuki398@gmail.com"
              className="text-blue-700 hover:underline"
            >
              dankoyuki398@gmail.com
            </a>
            <span className="mx-1">•</span>
            <a href="www.linkedin.com/in/dan-koyuki" className="text-blue-700 hover:underline">
              LinkedIn
            </a>
          </p>
        </div>
      </div>

      {/* --- PROFILE --- */}
      <div className="mb-6">
        <h3 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-3">
          Profile
        </h3>
        <p className="text-justify text-gray-800">
          A backend developer with a strong focus on software architecture and distributed systems. Developed XRohrJS, a proprietary Node.js framework for high-concurrency situations. Our expertise lies on developing durable, self-healing backend infrastructures and handling complicated states via in-memory clustering. Seeking to use extensive technical understanding of TypeScript and Database Design to create scalable web applications.
        </p>
      </div>

      {/* --- ENGINEERING PROJECTS --- */}
      <div className="mb-6">
        <h3 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-4">
          Software Engineering Projects
        </h3>

        {/* PROJECT 1: XRohrJS */}
        <div className="mb-4">
          <div className="flex justify-between font-bold text-gray-900">
            <span>XRohrJS Framework (Core Architect)</span>
            <span className="text-gray-700 font-normal">
              Oct 2025 — Present
            </span>
          </div>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-800 pr-10">
            <li>
              Architected a <strong>custom Node.js/TypeScript framework</strong>{" "}
              utilizing a <strong>Dual-Server Model</strong>
              (Control & Data Plane) to eliminate downtime during runtime
              updates.
            </li>
            <li>
              Developed <strong>Memoria Cluster</strong>, an in-memory database
              engine with <strong>Mutex locking</strong> mechanisms to handle
              atomic state transitions and prevent race conditions in
              high-traffic scenarios.
            </li>
          </ul>
        </div>

        {/* PROJECT 2: Armorize */}
        <div className="mb-4">
          <div className="flex justify-between font-bold text-gray-900">
            <span>DiscrafterJS Framework (Creator & Lead Maintainer)</span>
            <span className="text-gray-700 font-normal">Sep 2025 — Dec 2025</span>
          </div>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-800 pr-10">
            <li>
              Created an opinionated TypeScript framework based on Discord.js to ensure architectural consistency, addressing boot-up logic complexity through the strict separation of configuration and business logic.
            </li>
            <li>
              Developed an Asynchronous Factory Pattern to ensure reliable asynchronous object initialization and established a Config-Driven Architecture to function as the authoritative source for environment management.
            </li>
          </ul>
        </div>
      </div>

      {/* --- EDUCATION --- */}
      <div className="mb-6">
        <h3 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-4">
          Education
        </h3>
        <div>
          <div className="flex justify-between font-bold text-gray-900">
            <span>Universitas Islam Negeri Sunan Gunung Djati Bandung</span>
            <span className="font-normal text-gray-700">
              Sept 2021 — Present
            </span>
          </div>
          <div className="text-gray-800">
            Bachelor of Science (S.Kom.) in Informatics / Computer Science
          </div>
          <div className="mt-1 text-gray-800">
            <span className="font-semibold">GPA: 3.72 / 4.00</span>
          </div>
        </div>
      </div>

      {/* --- TECHNICAL PROFICIENCIES --- */}
      <div>
        <h3 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-4">
          Technical Proficiencies
        </h3>
        <div className="grid grid-cols-[160px_1fr] gap-y-2 text-gray-800">
          <span className="font-bold">Languages</span>
          <span>TypeScript, JavaScript (ES6+), Java (OOP)</span>

          <span className="font-bold">Backend & Web</span>
          <span>Node.js, Express.js, REST API Architecture, WebSockets</span>

          <span className="font-bold">Database & Tools</span>
          <span>MongoDB (NoSQL), Git/GitHub, JSON</span>

          <span className="font-bold">Core Concepts</span>
          <span>System Architecture, Concurrency Control, Data Structures</span>
        </div>
      </div>
    </div>
  );
}
