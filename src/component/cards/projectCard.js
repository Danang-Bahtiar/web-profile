import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ slug, title, imageUrl, tech, tag }) {
  return (
    // 1. The entire card is a link to the project's detail page
    <Link
      href={`${slug}`}
      className="
        block w-full max-w-sm rounded-lg bg-cyan-900/50 p-4 font-mono 
        transform transition-transform duration-300 hover:scale-105 hover:bg-cyan-900
      "
    >
      {/* 2. A container for the image with a fixed aspect ratio */}
      <div className="relative w-full h-32 overflow-hidden rounded-md bg-black/20">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      {/* 3. The project title below the image */}
      <div className="pt-4">
        <h3 className="text-lg font-bold text-white tracking-widest truncate">
          {title}
        </h3>
        {tech ? (
          <p className="text-xs font-bold text-gray-400 tracking-widest">
            {tech}
          </p>
        ) : null}
        {tag ? (
          <p className="text-xs font-bold text-amber-300 tracking-widest">
            {tag}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
