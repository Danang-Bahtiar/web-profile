// components/CodeDisplay.js
'use client';

import React, { useState } from "react";
// Import necessary modules for syntax highlighting
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

/**
 * A styled component to display a code block with a Copy to Clipboard button,
 * using Tailwind CSS for styling.
 */
const CodeDisplay = ({ code, fileName = "File", language = "javascript" }) => {
    // State to manage the button text (Copy / Copied!)
    const [isCopied, setIsCopied] = useState(false);

    // Function to handle the copy action
    const handleCopy = () => {
        // Use the modern Clipboard API
        navigator.clipboard.writeText(code).then(() => {
            // Set state to show "Copied!"
            setIsCopied(true);
            // Revert back to "Copy" after a short delay
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    // --- Custom Theme Logic for Syntax Highlighter ---
    // Merge the custom background color into the theme since SyntaxHighlighter
    // only accepts a style object.
    const customTheme = {
        ...vscDarkPlus,
        // Override the background color for both code and pre tags to match
        // our desired dark background (e.g., a dark gray like '#181818')
        'code[class*="language-"]': {
            ...vscDarkPlus['code[class*="language-"]'],
            backgroundColor: '#181818',
        },
        'pre[class*="language-"]': {
            ...vscDarkPlus['pre[class*="language-"]'],
            backgroundColor: '#181818',
        },
    };

    return (
        // Container: rounded corners, hide overflow, margin-bottom
        <div className="rounded-md overflow-hidden mb-5">
            {/* Header: dark background, flex layout */}
            <div className="flex justify-between items-center bg-[#222222] p-2 sm:p-3 text-neutral-300 text-sm font-mono">
                {/* File Name: bold */}
                <span className="font-bold">{fileName}</span>
                
                {/* Right Group: language tag and copy button */}
                <div className="flex items-center space-x-4">
                    
                    {/* Language Tag: smaller, lighter color */}
                    <span className="text-neutral-400 text-xs">
                        {language.toLowerCase()}
                    </span>

                    {/* Copy Button */}
                    <button 
                        onClick={handleCopy}
                        className={`
                            px-2 py-1 rounded text-xs transition-colors
                            ${isCopied 
                                ? 'bg-emerald-500 text-white' // Tailwind class for Copied state (e.g., a nice green)
                                : 'bg-neutral-700 hover:bg-neutral-600 text-neutral-300' // Tailwind classes for Copy state
                            }
                        `}
                    >
                        {isCopied ? 'Copied! ✅' : 'Copy'}
                    </button>
                </div>
            </div>

            {/* Code Area */}
            <SyntaxHighlighter
                language={language.toLowerCase()}
                style={customTheme}
                showLineNumbers={false}
                // Tailwind utility classes are applied via the customStyle prop
                customStyle={{
                    margin: 0,
                    padding: '1rem', // Equivalent to p-4 or p-5 in Tailwind
                    lineHeight: '1.5',
                    borderRadius: '0',
                    // The background color is already set in customTheme, but we can
                    // reinforce it or use it as a fallback here if needed.
                    backgroundColor: '#181818',
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeDisplay;