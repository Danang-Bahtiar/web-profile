'use client'
import ImageCard from "@/component/cards/imageCard";
import Layout from "@/component/layout/layout";
import ImageModal from "@/component/modal/imageModal";
import { useState } from "react";

export default function Certificate() {
  const [selectedImage, setSelectedImage] = useState(null);

  const header = {
    home: {
      slug: "/",
      label: "Home/",
    },
    project: {
      slug: "/certificate",
      label: "Certificate/",
    },
  };
  
  // An array of art pieces to make the code cleaner
  const artPieces = [
    { title: "CISDM - Pasas", imageUrl: "/certificate/CISDM_PASAS.png" },
    { title: "Office Specialist - Excel", imageUrl: "/certificate/Office Specialist - Excel.jpeg" },
    { title: "TOEFA", imageUrl: "/certificate/TOEFA.png" },
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
