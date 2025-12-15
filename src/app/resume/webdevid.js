export default function WebDevIndo() {
  return (
    <div className="w-full h-full bg-white text-black p-8 font-serif leading-relaxed text-sm">
      {/* --- HEADER --- */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Irwanto Danang Bahtiar
          </h1>
          <h2 className="text-xl text-gray-800 mt-1">
            Pengembang Backend & Arsitek Sistem
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
            {/* <span className="mx-1">•</span>
            <a href="www.linkedin.com/in/dan-koyuki" className="text-blue-700 hover:underline">
              LinkedIn
            </a> */}
          </p>
        </div>
      </div>

      {/* --- PROFILE --- */}
      <div className="mb-6">
        <h3 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-3">
          Profil
        </h3>
        <p className="text-justify text-gray-800">
          Pengembang Backend berpengalaman dalam merancang dan
          mengimplementasikan arsitektur sistem terdistribusi skala tinggi.
          Memiliki keahlian dalam Node.js/TypeScript, fokus pada ketersediaan
          tinggi (high availability) dan kinerja melalui teknik in-memory
          clustering dan kontrol konkurensi (Mutex). Berorientasi pada pembuatan
          solusi backend yang scalable dan tangguh.
        </p>
      </div>

      {/* --- ENGINEERING PROJECTS --- */}
      <div className="mb-6">
        <h3 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-4">
          Proyek Rekayasa Perangkat Lunak
        </h3>

        {/* PROJECT 1: XRohrJS */}
        <div className="mb-4">
          <div className="flex justify-between font-bold text-gray-900">
            <span>XRohrJS Framework (Arsitek Utama)</span>
            <span className="text-gray-700 font-normal">
              Okt 2025 — Sekarang
            </span>
          </div>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-800 pr-10">
            <li>
              Merancang <strong>framework Node.js/TypeScript kustom</strong>{" "}
              menggunakan <strong>Model Server-Ganda</strong> (Control & Data
              Plane) untuk mengeliminasi <i>downtime</i> saat pembaruan runtime.
            </li>
            <li>
              Mengembangkan <strong>Memoria Cluster</strong>, sebuah mesin basis
              data <i>in-memory</i> dengan mekanisme penguncian{" "}
              <strong>Mutex</strong> untuk menangani transisi state atomik dan
              mencegah <i>race conditions</i> dalam skenario lalu lintas tinggi.
            </li>
          </ul>
        </div>

        {/* PROJECT 2: Armorize/DiscrafterJS */}
        <div className="mb-4">
          <div className="flex justify-between font-bold text-gray-900">
            <span>DiscrafterJS Framework (Pencipta & Maintainer Utama)</span>
            <span className="text-gray-700 font-normal">
              Sep 2025 — Des 2025
            </span>
          </div>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-800 pr-10">
            <li>
              Menciptakan framework TypeScript yang <i>opinionated</i> berbasis
              Discord.js untuk memastikan konsistensi arsitektur, mengatasi
              kompleksitas logika <i>boot-up</i> melalui pemisahan ketat antara
              konfigurasi dan logika bisnis.
            </li>
            <li>
              Mengembangkan Pola <i>Asynchronous Factory</i> untuk memastikan
              inisialisasi objek asinkron yang andal dan menetapkan Arsitektur
              Berbasis Konfigurasi (<i>Config-Driven</i>) sebagai sumber
              otoritatif untuk manajemen lingkungan sistem.
            </li>
          </ul>
        </div>
      </div>

      {/* --- EDUCATION --- */}
      <div className="mb-6">
        <h3 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-4">
          Pendidikan
        </h3>
        <div>
          <div className="flex justify-between font-bold text-gray-900">
            <span>Universitas Islam Negeri Sunan Gunung Djati Bandung</span>
            <span className="font-normal text-gray-700">
              Sep 2021 — Sekarang
            </span>
          </div>
          <div className="text-gray-800">
            Sarjana Komputer (S.Kom.) - Teknik Informatika
          </div>
          <div className="mt-1 text-gray-800">
            <span className="font-semibold">IPK: 3.72 / 4.00</span>
          </div>
        </div>
      </div>

      {/* --- TECHNICAL PROFICIENCIES --- */}
      <div>
        <h3 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-4">
          Keahlian Teknis
        </h3>
        <div className="grid grid-cols-[160px_1fr] gap-y-2 text-gray-800">
          <span className="font-bold">Bahasa</span>
          <span>TypeScript, JavaScript (ES6+), Java (OOP)</span>

          <span className="font-bold">Backend & Web</span>
          <span>Node.js, Express.js, REST API Architecture, WebSockets</span>

          <span className="font-bold">Basis Data & Alat</span>
          <span>MongoDB (NoSQL), Git/GitHub, JSON</span>

          <span className="font-bold">Konsep Inti</span>
          <span>
            Arsitektur Sistem, Kontrol Konkurensi (Concurrency), Struktur Data
          </span>
        </div>
      </div>
    </div>
  );
}
