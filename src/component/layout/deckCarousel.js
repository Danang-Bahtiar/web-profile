'use client'

import { useState, useEffect, useRef, useMemo } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import Image from "next/image";

// --- Deck Card ---
export function DeckCard2({ month, year, deckImage, deckName }) {
  return (
    <div
      className="
        flex w-full max-w-xl rounded-lg bg-cyan-900/50 font-mono h-30
        transform transition-transform duration-300 hover:scale-105 hover:bg-cyan-900
      "
    >
      <div className="relative w-1/3 h-full overflow-hidden rounded-l-lg flex items-center justify-center bg-black/20">
        <Image
          src={deckImage}
          alt={deckName}
          width={2250}
          height={1500}
          className="h-full w-auto object-contain"
        />
      </div>

      <div className="flex flex-col justify-center p-4 w-2/3">
        <h3 className="text-lg font-bold text-white tracking-widest truncate">
          {month} {year}
        </h3>
        <p className="font-bold text-white tracking-widest truncate">{deckName}</p>
      </div>
    </div>
  );
}

// --- Carousel Component ---
const DeckCarousel = ({ data, title }) => {
  // ✅ Group decks by Month + Year
  const groupedData = useMemo(() => {
    const groups = {};
    for (const item of data) {
      const key = `${item.month}-${item.year}`;
      if (!groups[key]) groups[key] = [];
      groups[key].push(item);
    }

    // Sort months by year, then by month order (JAN..DEC)
    const monthOrder = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    const sortedKeys = Object.keys(groups).sort((a, b) => {
      const [ma, ya] = a.split("-");
      const [mb, yb] = b.split("-");
      if (ya !== yb) return Number(ya) - Number(yb);
      return monthOrder.indexOf(ma) - monthOrder.indexOf(mb);
    });

    // Return sorted arrays of decks
    return sortedKeys.map(k => groups[k]);
  }, [data]);

  // ✅ Start at the *latest group* (last index)
  const [currentIndex, setCurrentIndex] = useState(groupedData.length - 1);

  const carouselRef = useRef(null);

  // --- Looping logic ---
  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? groupedData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === groupedData.length - 1 ? 0 : prev + 1));
  };

  // --- Current group ---
  const currentGroup = groupedData[currentIndex] || [];

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

        {/* Cards */}
        <div className="flex-1 flex justify-center gap-4 overflow-hidden" ref={carouselRef}>
          {currentGroup.slice(0, 2).map((deck, i) => (
            <DeckCard2 key={i} {...deck} />
          ))}
          {currentGroup.length < 2 && (
            <div className="w-full text-center text-gray-500 italic p-4">
              Only 1 deck this month
            </div>
          )}
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

export default DeckCarousel;