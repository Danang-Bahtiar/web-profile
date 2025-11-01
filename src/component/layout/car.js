// component/layout/deckCarousel.js
import Image from "next/image";

/**
 * A single card for the carousel.
 * It's designed to fill the height of the carousel track.
 */
function DeckCard({ item }) {
  return (
    // Card Container:
    // - h-full: Makes the card as tall as the carousel track.
    // - w-48: A fixed width for the card. Adjust as you like.
    // - flex flex-col: Stacks the image above the text.
    // - flex-shrink-0: Prevents the card from being squished horizontally.
    <div className="h-full w-48 flex flex-col flex-shrink-0 rounded-lg overflow-hidden bg-gray-900 border border-gray-700">
      {/* 1. Image Container */}
      {/* - flex-1: CRITICAL. Takes up all available vertical space, pushing text down.
          - relative: Required for Next/Image fill.
          - min-h-0: Prevents flexbox overflow bugs.
      */}
      <div className="flex-1 relative min-h-0">
        <Image
          src={item.deckImage}
          alt={item.deckName}
          fill
          // object-contain: As requested, shows the full image, resized to fit.
          className="object-contain"
          // Good practice to provide sizes for 'fill' images
          sizes="(max-width: 768px) 33vw, 250px"
        />
      </div>

      {/* 2. Text Container */}
      {/* - flex-shrink-0: Prevents this text block from being squished.
          - p-2 text-center: Just for styling.
      */}
      <div className="flex-shrink-0 p-2 text-center">
        <p className="font-bold text-white truncate">{item.deckName}</p>
        <p className="text-sm text-gray-400">
          {item.month} {item.year}
        </p>
      </div>
    </div>
  );
}

/**
 * The Carousel container.
 * This component will fill the height of its parent.
 */
export default function DeckCarousel({ title, data }) {
  return (
    // Main Component Container:
    // - h-full: Takes full height from its parent (the bottomSection).
    // - flex flex-col: Stacks the title above the carousel track.
    <div className="h-full flex flex-col">
      {/* 1. Title */}
      <h3 className="text-xl font-bold text-white mb-2 flex-shrink-0">
        {title}
      </h3>

      {/* 2. Carousel Track / Viewport */}
      {/* - flex-1: CRITICAL. This track will take all remaining vertical space.
          - overflow-x-auto: Enables horizontal scrolling.
          - overflow-y-hidden: Prevents any vertical overflow.
          - flex flex-row gap-4: Lays out the cards horizontally.
      */}
      <div className="flex-1 flex flex-row gap-4 overflow-x-auto overflow-y-hidden pb-2">
        {data.map((item, index) => (
          <DeckCard key={`${item.deckName}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}