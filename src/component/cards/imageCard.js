// src/component/cards/imageCard.js
import Image from "next/image";

export default function ImageCard({ title, imageUrl, onClick }) {
  return (
    // Use a div or button with an onClick handler instead of a Link
    <div
      onClick={onClick}
      className="
        block w-full max-w-sm rounded-lg bg-cyan-900/50 p-4 font-mono
        transform transition-transform duration-300 hover:scale-105 hover:bg-cyan-900
        cursor-pointer
      "
    >
      {/* Image container remains the same */}
      <div className="relative w-full h-36 overflow-hidden rounded-md bg-black/20">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      {/* Title display remains the same */}
      <div className="pt-4">
        <h3 className="text-lg font-bold text-white tracking-widest truncate">
          {title}
        </h3>
      </div>
    </div>
  );
}