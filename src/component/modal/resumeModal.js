"use client";
import { useEffect } from "react";

export default function ResumeModal({ open, onClose, children }) {
  // Disable background scroll on the main body when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  if (!open) return null;

  return (
    // 1. Outer Container: Handles the scrollbar and positioning
    // Removed 'items-center' so the top isn't cut off
    // Added 'overflow-y-auto' so you can scroll the A4 paper
    // Added 'py-10' so the paper doesn't touch the top edge immediately
    <div 
      className="
        fixed inset-0 z-9999 flex justify-center overflow-y-auto 
        bg-black/70 py-2
        print:p-0 print:bg-white print:block print:overflow-visible
      "
      onClick={(e) => {
        // Optional: Close if clicking the black background
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* 2. Inner A4 Paper */}
      <div
        className="
          relative bg-white shadow-xl shrink-0
          w-[210mm] min-h-[297mm] p-8
          print:w-full print:min-h-full print:shadow-none print:p-0 print:m-0
        "
      >
        <button
          onClick={onClose}
          className="print:hidden absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 z-50"
        >
          Close
        </button>

        {children}
      </div>
    </div>
  );
}