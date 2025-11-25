"use client";
import { useState } from "react";
import {
  FaTimes,
  FaFolder,
  FaDatabase,
  FaLock,
  FaUnlock,
  FaKey,
} from "react-icons/fa";
import commonData from "./data/commonData";
import loreData from "./data/loreData";
import gameDesignData from "./data/gameDesignData";

const DATABASE_FILESA = [
  {
    code: "BIOS: 0x?F",
    category: "ROOT_ACCESS",
    title: "The Professor's Identity",
    icon: "🔒",
    summary: "CLASSIFIED. Security Clearance Required.",
    isLocked: true, // Triggers the lock UI
    password: process.env.NEXT_PUBLIC_LOR_PASSWORD, // The answer (Hidden in another file?)
    hint: "Hint: What shattered the world?", // Optional help
    content: (
      <div className="border-l-4 border-red-500 pl-4">
        <h3 className="text-red-500 font-bold">⚠ TOP SECRET</h3>
        <p>
          The Professor is actually a manifestation of the Knowledge Fragment...
        </p>
      </div>
    ),
  },
];

export default function ArmorizeMainframe() {
  const DATABASE_FILES = [...commonData, ...loreData, ...gameDesignData];
  const [activeFile, setActiveFile] = useState(null);
  const [unlockedFiles, setUnlockedFiles] = useState([]);
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [inputPassword, setInputPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleUnlock = (e) => {
    e.preventDefault();
    if (isDecrypting) return;

    setIsDecrypting(true);
    setErrorMsg("");
    setProgress(0);

    const isCorrect =
      inputPassword.toUpperCase() === activeFile.password.toUpperCase();
    const failPoint = Math.floor(Math.random() * 15) + 30;
    let current = 0;

    const timer = setInterval(() => {
      const jump = Math.floor(Math.random() * 10) + 2;
      current += jump;

      if (!isCorrect && current >= failPoint) {
        clearInterval(timer);
        setProgress(failPoint);
        setTimeout(() => {
          setIsDecrypting(false);
          setErrorMsg("⚠️ DECRYPTION FAILED: HASH MISMATCH");
          setProgress(0);
        }, 800);
      } else if (current >= 100) {
        clearInterval(timer);
        setProgress(100);
        setTimeout(() => {
          setUnlockedFiles([...unlockedFiles, activeFile.code]);
          setIsDecrypting(false);
          setInputPassword("");
          setProgress(0);
        }, 500);
      } else {
        setProgress(current);
      }
    }, 100);
  };

  const isAccessible = (file) =>
    !file.isLocked || unlockedFiles.includes(file.code);

  const closeFile = () => {
    setActiveFile(null);
    setErrorMsg("");
    setInputPassword("");
  };

  // Filter files based on search query
  const filteredFiles = DATABASE_FILES.filter((file) => {
    const q = searchQuery.toLowerCase();
    return (
      file.code.toLowerCase().includes(q) ||
      file.title.toLowerCase().includes(q) ||
      file.category.toLowerCase().includes(q)
    );
  });

  return (
    <div>
      {/* Sticky Header */}
      <div className="z-20 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800 flex items-center justify-between gap-4 p-2  md:flex-row flex-col">
        {/* Left: Database Icon + Path */}
        <div className="flex items-center gap-2 text-gray-300 font-mono text-sm">
          <FaDatabase />
          <span>{"// ROOT_DIRECTORY / ARMORIZE_GDD"}</span>
        </div>

        {/* Right: Search Bar */}
        <div className="shrink-0">
          <input
            type="text"
            placeholder="Search code, title, category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-900 border border-gray-700 text-gray-200 placeholder-gray-300 text-sm px-3 py-2 rounded focus:outline-none focus:border-cyan-500 w-64"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredFiles.map((file) => {
          const isLocked = file.isLocked && !unlockedFiles.includes(file.code);
          const isDecrypted =
            file.isLocked && unlockedFiles.includes(file.code);

          return (
            <div
              key={file.code}
              onClick={() => setActiveFile(file)}
              className={`
                group relative border p-4 h-40 flex flex-col justify-between cursor-pointer transition-all duration-300 overflow-hidden
                ${
                  isLocked
                    ? "bg-red-950/10 border-red-900/60 hover:border-red-500 hover:bg-red-900/20"
                    : isDecrypted
                    ? "bg-green-950/10 border-green-900/60 hover:border-green-500 hover:bg-green-900/20"
                    : "bg-gray-900 border-gray-700 hover:border-cyan-500 hover:bg-gray-800"
                }
              `}
            >
              <div
                className={`absolute top-0 right-0 p-2 text-6xl transition-opacity duration-500 ${
                  isLocked
                    ? "opacity-10 group-hover:opacity-20 text-red-500"
                    : "opacity-5 group-hover:opacity-10 text-white"
                }`}
              >
                {isLocked ? <FaLock /> : file.icon}
              </div>

              <div
                className={`font-mono text-xs tracking-wider mb-2 ${
                  isLocked
                    ? "text-red-500 group-hover:text-red-400"
                    : "text-cyan-600 group-hover:text-cyan-400"
                }`}
              >
                [{file.code}] :: {file.category}
              </div>

              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-3 group-hover:translate-x-1 transition-transform">
                  {isLocked ? (
                    <FaLock className="text-red-500 text-sm shrink-0" />
                  ) : isDecrypted ? (
                    <FaKey className="text-green-500 text-sm shrink-0" />
                  ) : (
                    <FaFolder className="text-yellow-600 text-sm shrink-0" />
                  )}
                  <span className="truncate">{file.title}</span>
                </h3>

                <p
                  className={`text-xs mt-2 line-clamp-2 ${
                    isLocked ? "text-red-400/60" : "text-gray-300"
                  }`}
                >
                  {isLocked
                    ? "ENCRYPTED CONTENT. AUTHENTICATION REQUIRED."
                    : file.summary}
                </p>
              </div>

              <div className="w-full h-0.5 bg-gray-800 mt-2 overflow-hidden rounded-full">
                <div
                  className={`h-full w-0 group-hover:w-full transition-all duration-700 ease-out ${
                    isLocked
                      ? "bg-red-500"
                      : isDecrypted
                      ? "bg-green-500"
                      : "bg-cyan-500"
                  }`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* THE MODAL */}
      {activeFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="absolute inset-0" onClick={closeFile}></div>

          <div className="relative w-full max-w-3xl bg-gray-950 border border-gray-800 shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-sm flex flex-col h-[85vh] overflow-hidden">
            {/* DECORATION: Top "Scanner" Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

            {/* Header */}
            <div className="bg-gray-900/80 p-4 border-b border-gray-800 flex justify-between items-center shrink-0 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                {/* Icon Box */}
                <div
                  className={`
            w-10 h-10 flex items-center justify-center rounded 
            ${
              isAccessible(activeFile)
                ? "bg-cyan-900/20 text-cyan-400 border border-cyan-500/30"
                : "bg-red-900/20 text-red-500 border border-red-500/30"
            }
          `}
                >
                  {isAccessible(activeFile) ? <FaUnlock /> : <FaLock />}
                </div>

                {/* Title Info */}
                <div>
                  <h2 className="text-xl font-bold text-white tracking-wide uppercase">
                    {activeFile.title}
                  </h2>
                  <div className="flex gap-3 text-[10px] font-mono text-gray-500">
                    <span>ID: {activeFile.code}</span>
                    <span className="text-gray-700">|</span>
                    <span
                      className={
                        isAccessible(activeFile)
                          ? "text-cyan-600"
                          : "text-red-600"
                      }
                    >
                      STATUS:{" "}
                      {isAccessible(activeFile) ? "DECRYPTED" : "ENCRYPTED"}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={closeFile}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <FaTimes size={24} />
              </button>
            </div>

            {/* CONTENT AREA with Grid Background */}
            <div className="relative flex-1 bg-gray-950 min-h-0">
              {/* Background Grid Effect (Kept separate) */}
              <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_2px,3px_100%] opacity-20"></div>

              {/* 2. SCROLLABLE CONTAINER: Absolute inset-0 forces it to fill the wrapper exactly */}
              <div className="absolute inset-0 z-10 overflow-y-auto p-8 flex-1">
                {isAccessible(activeFile) ? (
                  // SCENARIO A: UNLOCKED - Show Content
                  <div className="text-gray-300 leading-relaxed font-sans text-lg animate-in fade-in slide-in-from-bottom-2 duration-500">
                    {activeFile.content}

                    {/* End of File Marker */}
                    <div className="mt-12 mb-4 flex items-center gap-4 opacity-30">
                      <div className="h-px bg-gray-500 flex-1"></div>
                      <span className="font-mono text-xs">END_OF_FILE</span>
                      <div className="h-px bg-gray-500 flex-1"></div>
                    </div>
                  </div>
                ) : (
                  // SCENARIO B: LOCKED - Show Password Input OR Loading Bar
                  <div className="flex flex-col items-center justify-center h-full space-y-6">
                    <div className="text-red-500 text-6xl mb-4">
                      <FaLock />
                    </div>

                    {/* Show Title & Hint only when NOT decrypting */}
                    {!isDecrypting && (
                      <div className="text-center space-y-2">
                        <h3 className="text-2xl font-bold text-white tracking-widest">
                          SECURITY CLEARANCE REQUIRED
                        </h3>
                        <p className="text-gray-500 font-mono text-sm">
                          Enter passcode to decrypt file contents.
                        </p>
                        {activeFile.hint && (
                          <p className="text-xs text-gray-600 italic">
                            ({activeFile.hint})
                          </p>
                        )}
                      </div>
                    )}

                    {/* CONDITIONAL RENDERING: Form vs Loading Bar */}
                    {isDecrypting ? (
                      // --- LOADING BAR SECTION ---
                      <div className="w-full max-w-xs space-y-2 animate-pulse">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-green-500">
                            {progress < 100
                              ? "DECRYPTING..."
                              : "ACCESS GRANTED"}
                          </span>
                          <span className="text-green-500">
                            {Math.min(progress, 100)}%
                          </span>
                        </div>

                        <div className="h-4 w-full bg-black border border-green-900 rounded-sm p-0.5 relative overflow-hidden">
                          <div
                            className="h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] transition-all duration-100 ease-linear"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                          ></div>
                          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] w-full h-full animate-scan"></div>
                        </div>

                        <p className="text-[10px] text-gray-500 font-mono text-center">
                          VERIFYING SECURITY TOKEN...
                        </p>
                      </div>
                    ) : (
                      // --- PASSWORD FORM SECTION ---
                      <form
                        onSubmit={handleUnlock}
                        className="w-full max-w-xs flex flex-col gap-4"
                      >
                        <input
                          autoFocus
                          type="text"
                          value={inputPassword}
                          onChange={(e) => setInputPassword(e.target.value)}
                          placeholder="ENTER PASSCODE"
                          className="bg-black border-2 border-red-900 text-red-500 text-center font-mono text-xl py-2 focus:outline-none focus:border-red-500 placeholder-red-900"
                        />
                        <button
                          type="submit"
                          className="bg-red-900/30 border border-red-500 text-red-500 py-2 hover:bg-red-500 hover:text-black transition-colors font-bold tracking-widest"
                        >
                          AUTHENTICATE
                        </button>
                      </form>
                    )}

                    {/* Error Message */}
                    {!isDecrypting && errorMsg && (
                      <div className="text-red-500 font-mono font-bold animate-pulse">
                        ⚠ {errorMsg}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* DECORATION: Tech Footer */}
            <div className="bg-gray-900 border-t border-gray-800 p-2 px-4 flex justify-between items-center text-[10px] font-mono text-gray-600 shrink-0">
              <div>MEM: 4029KB // SECURE_CONNECTION</div>
              <div className="animate-pulse text-cyan-900">_CURSOR_ACTIVE</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
