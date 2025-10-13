import Layout from "@/component/layout/layout";
import Image from "next/image";

export default function Profile() {
  const header = {
    home: {
      slug: "/",
      label: "Home/",
    },
    project: {
      slug: "/project",
      label: "Profile/",
    },
  };
  return (
    <Layout
      headers={header}
      content={
        <div className="p-4">
          {/* 1. Styled Image Wrapper */}
          <div className="flex flex-row p-4 gap-4 items-center">
            {/* Profile Picture Column (centered) */}
            <div className="w-1/4 flex justify-center items-center">
              <div className="relative w-64 h-64 rounded-full border-4 border-white overflow-hidden">
                <Image
                  src={"/testpp.png"}
                  alt="photo profile"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Text Content Column */}
            {/* FIX: Added flex, flex-col, and gap to space out the paragraphs */}
            <div className="w-3/4 text-xl font-mono font-medium text-cyan-400 tracking-widest flex flex-col gap-6">
              <p>
                Hello, I am Irwanto Danang Bahtiar. Student of computer science
                focusing on backend development and game design. I enjoy
                developing organized systems, modular APIs, and imaginative
                projects that blend reasoning with narratives.
              </p>
              <p>
                As a independent game designer and backend developer, I create
                the resources needed to develop the games I wish to experience.
                From developing a modular backend framework (XRohrJS,
                DiscrafterJS) to crafting a player-centric RPG concept
                (Armorize), I concentrate on building robust and intricate
                systems from the foundation.
              </p>
            </div>
          </div>

          {/* 2. Text Content Container */}
          <div className="m-4 font-mono tracking-widest">
            {/* 1. A clear, styled heading for the whole section */}
            <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-cyan-500 pb-2">
              Education
            </h2>

            {/* 2. A container for this specific education entry */}
            <div className="text-xl">
              {/* Top line using flexbox to separate the school and date */}
              <div className="flex justify-between items-baseline">
                <h3 className="font-semibold text-cyan-400">
                  State Islamic University of Sunan Gunung Djati Bandung
                </h3>
                <p className="text-base text-gray-300 font-sans flex-shrink-0 ml-4">
                  Sept 2021 - Present
                </p>
              </div>

              {/* Details like GPA can go below */}
              <p className="text-base text-gray-300 mt-1">
                Informatics - Science and Technology Faculty
              </p>
              <p className="text-base text-gray-300 mt-1">GPA: 3.72</p>
            </div>

            {/* You could easily add another education entry here by copying the div above */}
          </div>
        </div>
      }
      currentPageLabel={"Profile"}
    />
  );
}
