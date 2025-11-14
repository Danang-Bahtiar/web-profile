import Image from "next/image";

export default function ImageModal({ imageUrl, onClose }) {
  // If no imageUrl is provided, don't render anything
  if (!imageUrl) return null;

  return (
    // Modal backdrop: covers the entire screen
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose} // Close modal when clicking the backdrop
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-white text-3xl font-bold z-10"
        onClick={onClose}
      >
        &times;
      </button>

      {/* Image container: now has sizing classes */}
      <div 
        className="relative w-full h-full max-w-5xl max-h-[90vh]" 
        onClick={(e) => e.stopPropagation()}
      >
        <Image 
          src={imageUrl} 
          alt="Full-size view" 
          fill 
          className="object-contain" priority
        />
      </div>
    </div>
  );
}