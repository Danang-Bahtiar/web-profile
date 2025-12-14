export default function Backend (){
  return (
  <div className="w-full h-full bg-white text-black p-8 font-serif leading-relaxed text-sm">
    {/* --- HEADER --- */}
    <div className="flex justify-between items-start mb-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Irwanto Danang Bahtiar</h1>
        <h2 className="text-xl text-gray-800 mt-1">Backend Developer</h2>
      </div>
      <div className="text-right text-sm text-gray-700 space-y-1 py-3">
        <p>Bandung, Jawa Barat, 40614, Indonesia</p>
        <div>
          <p className="font-semibold">+62 821-1642-4576</p>
          <a href="mailto:dankoyuki398@gmail.com" className="text-blue-700 hover:underline">dankoyuki398@gmail.com</a>
          <span className="mx-1">•</span>
          <a href="www.linkedin.com/in/dan-koyuki" className="text-blue-700 hover:underline">LinkedIn</a>
        </div>
      </div>
    </div>

    {/* --- PROFILE --- */}
    <div className="mb-6">
      <h3 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-3">
        Profile
      </h3>
      <p className="text-justify text-gray-800">
        Systems Architect and Backend Developer specializing in the engineering of custom, resilient distributed systems for live-service environments. My core achievement is the development of the XRohrJS framework, a Dual-Server architecture utilizing an in-memory Memoria Cluster to master concurrency and ensure Atomic State Transitions under high load. I am motivated by complex performance challenges and am committed to delivering scalable, near-zero downtime solutions using TypeScript, Node.js, and MongoDB.
      </p>
    </div>

    {/* --- PROFESSIONAL EXPERIENCE --- */}
    <div className="mb-6">
      <h3 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-4">
        Personal Projects
      </h3>

      {/* JOB 1 */}
      <div className="mb-4">
        <div className="flex justify-between font-bold text-gray-900">
          <span>Systems Architect & Core Contributor (XRohrJS)</span>
          <span className="text-gray-700 font-normal">Bandung, Jawa Barat, Oct 2025 — Present</span>
        </div>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-800 pr-10">
          <li>
            Engineered a custom Node.js framework supporting a <span className="font-bold">Dual-Server Architecture (Control/Data Plane)</span> to ensure service continuity and resilience in live-service applications.
          </li>
          <li>
            Designed and implemented the <span className="font-bold">Memoria Cluster (In-Memory Database)</span> with a per-key Mutex lock to manage concurrency and ensure <span className="font-bold">Atomic State Transitions</span> under high load.
          </li>
        </ul>
      </div>

      {/* JOB 2 */}
      <div>
        <div className="flex justify-between font-bold text-gray-900">
          <span>Game Systems Modeler & Developer (Armorize)</span>
          <span className="text-gray-700 font-normal">Bandung, Jawa Barat, Apr 2025 — Present</span>
        </div>
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-800 pr-10">
          <li>
            Modeled a high-risk, player-driven economy featuring Guild Liquidity Pools to validate the concurrency and transaction capabilities of the custom backend.
          </li>
          <li>
            Designed a flexible data schema for complex entities (Mystar Attributes, Traits, Equipment) demonstrating expertise in non-relational database structure.
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
        </div>
        <div className="text-gray-800">
          Bachelor of Science (S.Kom.) in Computer Science, Bandung, Sept 2021 — Present
        </div>
        <div className="mt-1 text-gray-800">
          <span className="font-semibold">GPA: 3.72</span>
        </div>
        <div className="mt-2 text-justify text-gray-800">
          Final Project Research: Ongoing research focuses on the application of distributed system methodologies for Live-Service System Resilience, specifically designing and validating a custom Dual-Server (Control/Data Plane) architecture to eliminate downtime during runtime configuration updates.
        </div>
      </div>
    </div>

    {/* --- TECHNICAL PROFICIENCIES --- */}
    <div>
      <h3 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-4">
        Technical Proficiencies
      </h3>
      <div className="grid grid-cols-[150px_1fr] gap-y-1 text-gray-800">
        <span className="font-bold">Backend & API</span>
        <span>Node.js, RESTful API Design, Express.js</span>
        
        <span className="font-bold">Architecture</span>
        <span>Custom Framework Development, Microservices (Design)</span>
        
        <span className="font-bold">Database</span>
        <span>MongoDB</span>
      </div>
    </div>
  </div>
);
}