import Image from "next/image";

export default function ResumeCard({ href, title, imageUrl, tag }) {
  return (
    // 1. Replaced <Link> with an <a> tag for external URLs.
    <a
      href={href}
      target="_blank" // Opens the link in a new tab.
      rel="noopener noreferrer" // Security best practice for external links.
      className="
        block w-full max-w-sm rounded-lg bg-cyan-900/50 p-4 font-mono 
        transform transition-transform duration-300 hover:scale-105 hover:bg-cyan-900
      "
    >
      {/* 2. Image container remains the same. */}
      <div className="relative w-full h-32 overflow-hidden rounded-md bg-black/20">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      {/* 3. The project title and tag below the image. */}
      <div className="pt-4">
        <h3 className="text-lg font-bold text-white tracking-widest truncate">
          {title}
        </h3>
        
        {/* The 'tech' prop has been removed. */}
        
        {/* The 'tag' prop is kept as requested. */}
        {tag ? (
          <p className="text-xs font-bold text-amber-300 tracking-widest mt-1">
            {tag}
          </p>
        ) : null}
      </div>
    </a>
  );
}