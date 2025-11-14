import Layout from "@/component/layout/layout";
import Image from "next/image";

// --- Styles Object ---
const styles = {
  contentContainer: "p-4",
  profileContainer:
    "flex flex-col md:flex-row p-4 gap-8 items-center", // Stacks on small, row on medium+
  imageWrapper: "w-full md:w-1/4 flex justify-center items-center", // Full width on small
  imageCircle:
    "relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white overflow-hidden", // Smaller on mobile
  image: "object-contain",
  textWrapper:
    "w-full md:w-3/4 text-lg md:text-xl font-mono font-medium text-cyan-400 tracking-widest flex flex-col gap-6", // Full width on small, larger text on medium+
  educationContainer: "m-4 font-mono tracking-widest",
  educationHeading:
    "text-xl md:text-2xl font-bold text-white mb-4 border-b-2 border-cyan-500 pb-2", // Responsive text
  educationEntry: "text-lg md:text-xl", // Responsive text
  educationEntryHeader:
    "flex flex-col md:flex-row md:justify-between md:items-baseline", // Stacks on small
  educationSchool: "font-semibold text-cyan-400",
  educationDate:
    "text-base text-gray-300 font-sans md:flex-shrink-0 md:ml-4", // No margin on small
  educationDetails: "text-base text-gray-300 mt-1",
};

export default function Profile() {
  const header = {
    home: {
      slug: "/",
      label: "Home/",
    },
    profile: {
      slug: "/profile",
      label: "Profile/",
    },
  };

  return (
    <Layout
      headers={header}
      content={
        <div className={styles.contentContainer}>
          {/* 1. Profile Section */}
          <div className={styles.profileContainer}>
            {/* Profile Picture Column */}
            <div className={styles.imageWrapper}>
              <div className={styles.imageCircle}>
                <Image
                  src={"/testpp.png"}
                  alt="photo profile"
                  fill
                  className={styles.image}
                  priority
                />
              </div>
            </div>

            {/* Text Content Column */}
            <div className={styles.textWrapper}>
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

          {/* 2. Education Section */}
          <div className={styles.educationContainer}>
            <h2 className={styles.educationHeading}>Education</h2>
            
            <div className={styles.educationEntry}>
              {/* Top line (School & Date) */}
              <div className={styles.educationEntryHeader}>
                <h3 className={styles.educationSchool}>
                  State Islamic University of Sunan Gunung Djati Bandung
                </h3>
                <p className={styles.educationDate}>Sept 2021 - Present</p>
              </div>

              {/* Details */}
              <p className={styles.educationDetails}>
                Informatics - Science and Technology Faculty
              </p>
              <p className={styles.educationDetails}>GPA: 3.72</p>
            </div>
            
            {/* You could easily add another education entry here */}
          </div>
        </div>
      }
      currentPageLabel={"Profile"}
    />
  );
}