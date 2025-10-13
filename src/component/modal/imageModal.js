// src/component/modal/imageModal.js
import Image from "next/image";

export default function ImageModal({ imageUrl, onClose }) {
  // If no imageUrl is provided, don't render anything
  if (!imageUrl) return null;

  return (
    // Modal backdrop: covers the entire screen
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose} // Close modal when clicking the backdrop
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-white text-3xl font-bold"
        onClick={onClose}
      >
        &times;
      </button>

      {/* Image container: prevents clicks from closing the modal */}
      <div className="relative p-4" onClick={(e) => e.stopPropagation()}>
        <img
          src={imageUrl}
          alt="Full-size view"
          className="max-w-[90vw] max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );
}