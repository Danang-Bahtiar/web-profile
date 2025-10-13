'use client'

// your pages/art.js file
import { useState } from "react";
import ImageCard from "@/component/cards/imageCard"; // Import the new card
import ImageModal from "@/component/modal/imageModal"; // Import the new modal
import Layout from "@/component/layout/layout";

export default function Art() {
  // State to keep track of the currently selected image URL
  const [selectedImage, setSelectedImage] = useState(null);

  const header = {
    home: { slug: "/", label: "Home/" },
    project: { slug: "/art", label: "Art/" },
  };

  // An array of art pieces to make the code cleaner
  const artPieces = [
    { title: "Rider Inspired Logo", imageUrl: "/art/logo2.png" },
    { title: "Dan Koyuki Fursona v1", imageUrl: "/art/DK1.png" },
    { title: "July 2024", imageUrl: "/art/JulyArt.png" },
    { title: "Headshot Art Dan v2", imageUrl: "/art/headshot1.avif" },
    { title: "Headshot Art Dan vCurrent", imageUrl: "/art/headshot2.png" },
    { title: "DiscrafterJS Logo", imageUrl: "/art/discrafter.png" },
  ];

  return (
    <>
      <Layout
        headers={header}
        content={
          <div className="flex flex-row">
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-4 overflow-y-auto max-h-[calc(100vh-12rem)] pr-6">
              {/* Map over the art pieces to render ImageCard components */}
              {artPieces.map((art, index) => (
                <ImageCard
                  key={index}
                  title={art.title}
                  imageUrl={art.imageUrl}
                  // When a card is clicked, update the state with its image URL
                  onClick={() => setSelectedImage(art.imageUrl)}
                />
              ))}
            </div>
          </div>
        }
        currentPageLabel={"Arts"}
      />

      {/* The Modal component: It will only show when selectedImage has a value */}
      <ImageModal
        imageUrl={selectedImage}
        onClose={() => setSelectedImage(null)} // Set state to null to hide it
      />
    </>
  );
}
