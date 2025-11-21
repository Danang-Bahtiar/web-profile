"use client";

import React, { useState } from "react";

/**
 * Reusable component for a single expandable item.
 * @param {string} title - The question text.
 * @param {React.ReactNode} children - The answer content.
 */
const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the open/closed state
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Main container with dark background and group utility for scrollbar styling
    <div className="bg-[#1E1E1E] group">
      {/* Divider Line: A thin, bright reddish-orange line */}
      <div className="h-px w-full bg-cyan-800" />

      <div className="px-2 sm:px-4">
        {/* Header / Button */}
        <button
          onClick={toggleOpen}
          className="
                        flex justify-between items-center w-full text-left
                        py-4 text-base text-white font-sans font-normal 
                        bg-transparent border-none cursor-pointer
                    "
        >
          {title}
          {/* Expansion Icon */}
          <span
            className={`
                            text-xl font-light transition-transform duration-300 ease-out 
                            ${isOpen ? "rotate-45" : "rotate-0"}
                        `}
          >
            +
          </span>
        </button>

        {/* Content Area: Uses max-height, opacity, and padding for smooth transition */}
        <div
          className={`
                        overflow-hidden transition-[max-height,opacity,padding] duration-300 ease-out 
                        ${
                          isOpen
                            ? "max-h-screen opacity-100 pb-4" // Use a large value for transition
                            : "max-h-0 opacity-0 pb-0" // When Closed
                        }
                    `}
        >
          {/* Inner Content Wrapper: This is where we apply the max height and scroll.
                      - max-h-72: Sets a fixed maximum height (adjust as needed, e.g., max-h-48, max-h-96)
                      - overflow-y-auto: Enables vertical scrolling if content exceeds max-h-72
                      - custom scrollbar classes for dark theme styling (requires a custom plugin/utility in a real app)
                    */}
          <div
            className="
                        text-sm text-neutral-400 
                        max-h-72 overflow-y-auto pr-4 
                        
                        /* Scrollbar Styling (Requires Tailwind Scrollbar Plugin or Custom Utility) 
                           Below is a generic Tailwind-friendly structure: */
                        
                        /* Example for a custom thin scrollbar */
                        scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-neutral-900
                        
                        /* If you don't have a plugin, the only native Tailwind way is to hide it: */
                        /* hidden-scrollbar */
                    "
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
