'use client'

import { useState, useMemo } from "react"; // Removed 'useRef'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import Image from "next/image";

// --- HeroCard Component (Unchanged) ---
export function HeroCard({ name, heroPower, winrate, image }) {
  return (
    <div
      className="
        flex w-full max-w-xl rounded-lg bg-cyan-900/50 font-mono h-30
        transform transition-transform duration-300 hover:scale-105 hover:bg-cyan-900
      "
    >
      <div className="relative w-1/3 h-full overflow-hidden rounded-l-lg flex items-center justify-center bg-black/20">
        <Image
          src={image}
          alt={name}
          width={2048}
          height={2048}
          className="h-full w-auto object-contain" priority
        />
      </div>

      <div className="flex flex-col justify-center p-4 w-2/3">
        <h3 className="text-lg font-bold text-white tracking-widest truncate">
          {name}
        </h3>
        {/* Added labels for clarity, matching your other pages */}
        <p className="font-bold text-white tracking-widest truncate">
          Power: {heroPower}
        </p>
        <p className="font-bold text-white tracking-widest truncate">
          Winrate: {winrate}
        </p>
      </div>
    </div>
  );
}

// --- Modified Carousel Component ---
const HeroCarousel = ({ data, title }) => {
  // Start at the first item
  const [currentIndex, setCurrentIndex] = useState(0);

  // Simple, looping slide logic
  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === data.length - 1 ? 0 : prev + 1));
  };

  // Handle empty data
  if (!data || data.length === 0) {
    return (
      <div className="w-full max-w-6xl mx-auto font-mono h-full flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400">No items to display.</p>
      </div>
    );
  }

  // --- Get the 3 visible cards ---
  // This uses modulo (%) to loop back to the start if we reach the end
  const visibleCards = [
    data[currentIndex],
    data[(currentIndex + 1) % data.length],
    data[(currentIndex + 2) % data.length]
  ];

  // In case there are fewer than 3 items, we'll slice to avoid duplicates.
  // e.g., if data.length is 2, we show 2. If 1, we show 1.
  const cardsToShow = visibleCards.slice(0, Math.min(3, data.length));


  return (
    <div className="w-full max-w-6xl mx-auto font-mono h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      {/* Carousel Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={handlePrev}
          className="text-3xl text-cyan-400 hover:text-white transition-colors"
        >
          <BsArrowLeftSquareFill />
        </button>

        {/* --- Cards --- */}
        {/* Changed to display 3 cards using the logic above */}
        {/* 'gap-4' will space them out. 'justify-center' will center them if fewer than 3 */}
        <div className="flex-1 flex justify-center gap-4 overflow-hidden">
          {cardsToShow.map((hero) => (
            // Use HeroCard and a unique key
            <HeroCard
              key={hero.name} 
              name={hero.name}
              heroPower={hero.heroPower}
              winrate={hero.winrate}
              image={hero.image} // Assuming your data has an 'image' prop
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="text-3xl text-cyan-400 hover:text-white transition-colors"
        >
          <BsArrowRightSquareFill />
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;