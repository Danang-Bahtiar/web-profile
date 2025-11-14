import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { HiPaintBrush } from "react-icons/hi2";
import { ImProfile } from "react-icons/im";
import { IoGameController, IoLogoWhatsapp } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import { PiCertificateFill, PiReadCvLogoFill } from "react-icons/pi";
import { VscGithubProject } from "react-icons/vsc";

// --- Data for Links ---

const internalLinks = [
  {
    href: "/profile",
    label: "Profile",
    icon: <ImProfile size={25} />,
  },
  {
    href: "/project",
    label: "Projects",
    icon: <VscGithubProject size={25} />,
  },
  {
    href: "/resume",
    label: "Resume",
    icon: <PiReadCvLogoFill size={25} />,
  },
  {
    href: "/certificate",
    label: "Certificate",
    icon: <PiCertificateFill size={25} />,
  },
  { href: "/game", label: "Games", icon: <IoGameController size={25} /> },
  { href: "/art", label: "Arts", icon: <HiPaintBrush size={25} /> },
];

const externalLinks = [
  {
    href: "https://linkedin.com/in/dan-koyuki",
    label: "LinkedIn",
    icon: <FaLinkedin size={25} />,
  },
  {
    href: "https://github.com/Danang-Bahtiar",
    label: "Github",
    icon: <FaGithub size={25} />,
  },
  {
    href: "mailto:dankoyuki398@gmail.com",
    label: "Email",
    icon: <MdContactMail size={25} />,
  },
  {
    href: "https://wa.me/6282116424576",
    label: "Whatsapp",
    icon: <IoLogoWhatsapp size={25} />,
  },
  {
    href: "https://www.youtube.com/@DanKoyuki",
    label: "Youtube",
    icon: <FaYoutube size={25} />,
  },
];

// --- Styles Object ---

const styles = {
  main: "relative grid min-h-dvh w-full overflow-hidden bg-black grid-rows-1 md:grid-cols-1 lg:p-6 lg:gap-4 lg:grid-cols-[15%_1fr]",
  sidebar:
    "hidden lg:flex border-4 border-white flex-col items-center justify-center gap-2",
  sidebarImage: "object-contain invert",
  contentWrapper: "flex flex-col gap-2",
  header: "hidden md:block border-4 border-white p-4 h-18",
  headerText:
    "lg:text-xl md:text-sm font-mono font-medium text-cyan-400 tracking-widest",
  body: "border-4 border-white flex md:flex-row grow flex-col",
  profileSection:
    "md:w-4/5 w-full p-4 flex flex-col justify-center items-center gap-8",
  profileImageWrapper:
    "relative w-64 h-64 rounded-full border-4 border-white overflow-hidden",
  profileImage: "object-contain",
  profileTextContainer: "flex flex-col items-center justify-center gap-4",
  profileName:
    "text-center text-2xl font-mono font-medium text-cyan-400 tracking-widest",
  profileSubtitle:
    "text-center text-xl font-mono font-medium text-cyan-400 tracking-widest",
  menuSection:
    "md:w-1/5 w-full md:border-l-4 border-t-2 border-white p-4 lg:text-lg md:text-sm font-mono font-medium text-blue-400 tracking-widest flex md:flex-col flex-row justify-between gap-2",
  menuList: "flex flex-col md:h-1/2 gap-2",
  contactList:
    "flex flex-col md:justify-end md:items-start md:text-left items-end md:h-1/2 gap-2",
  linkItem: "flex flex-row items-center gap-2",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.sidebar}>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={2048}
          height={2048}
          className={styles.sidebarImage}
          priority
        />
      </div>

      <div className={styles.contentWrapper}>
        {/* Top Section / Header */}
        <div className={styles.header}>
          <p className={styles.headerText}>
            {"Active Projects > XRohrJS > A mini-framework to built an Express RESTApi"}
          </p>
        </div>

        {/* Middle Section / Body */}
        <div className={styles.body}>
          <div className={styles.profileSection}>
            {/* 1. Styled Image Wrapper */}
            <div className={styles.profileImageWrapper}>
              <Image
                src={"/testpp.png"}
                alt="photo profile"
                fill
                className={styles.profileImage}
                priority
              />
            </div>

            {/* 2. Text Content Container */}
            <div className={styles.profileTextContainer}>
              <p className={styles.profileName}>
                Irwanto Danang Bahtiar | Dan Koyuki
              </p>
              <p className={styles.profileSubtitle}>
                Informatics Student | Islamic University of Sunan Gunung Djati
                Bandung
              </p>
              <p className={styles.profileSubtitle}>
                Backend Developer | Game Designer
              </p>
            </div>
          </div>
          
          <div className={styles.menuSection}>
            <div className={styles.menuList}>
              <p>More About Me:</p>
              {internalLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.linkItem}>
                  {link.icon} {link.label}
                </Link>
              ))}
            </div>
            
            <div className={styles.contactList}>
              <p>Contact Me at:</p>
              {externalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={styles.linkItem}
                  target="_blank" // Added for external links
                  rel="noopener noreferrer" // Added for security
                >
                  {link.icon} {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}