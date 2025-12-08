"use client";
import { useState } from "react";
import ResumeModal from "../modal/resumeModal";

export default function ResumeCard({ title, ResumeContent }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="
          group block w-full max-w-sm rounded-lg bg-cyan-900/50 p-4 font-mono 
          hover:bg-cyan-900 hover:scale-105 transition-all duration-300 cursor-pointer
          overflow-hidden border border-cyan-800/50
        "
      >
        {/* --- LIVE PREVIEW CONTAINER --- */}
        {/* Kept the original 'h-32' (128px) height. This creates the "Crop" effect. */}
        <div className="relative w-full h-32 rounded-md overflow-hidden bg-white shadow-inner select-none">
          
          {/* --- SCALED CONTENT --- */}
          {/* scale-[0.46]: This roughly fits an A4 width (210mm) into a max-w-sm card.
             origin-top-left: Anchors it to the top so we see the Header.
             pointer-events-none: Prevents clicking links inside the preview.
          */}
          <div 
            className="
              absolute top-0 left-0 
              w-[210mm] min-h-[297mm] bg-white text-black
              origin-top-left 
              scale-[0.46] 
              pointer-events-none p-8
            "
          >
            {ResumeContent}
          </div>

          {/* Optional: Fade out at the bottom to show it's cut off */}
          <div className="absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-black/10 to-transparent" />
        </div>

        {/* --- TITLE --- */}
        <h3 className="pt-4 text-white font-bold text-lg truncate tracking-widest text-center group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
      </div>

      <ResumeModal open={open} onClose={() => setOpen(false)}>
        {ResumeContent}
      </ResumeModal>
    </>
  );
}