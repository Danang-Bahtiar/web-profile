'use client'
import Link from "next/link";
import { useState } from "react"; // Import useState
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { HiPaintBrush } from "react-icons/hi2";
import { ImProfile } from "react-icons/im";
import { IoGameController, IoHome, IoLogoWhatsapp } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import { PiCertificateFill, PiReadCvLogoFill } from "react-icons/pi";
import { VscGithubProject } from "react-icons/vsc";

// --- Data for Links ---

const contactLinks = [
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
  main: "relative flex flex-col min-h-dvh w-full overflow-hidden p-6 gap-4 bg-black",
  header:
    "flex justify-between items-center border-4 border-white p-4 h-18 flex-row",
  headerLink: "text-xl font-mono font-medium text-cyan-400 tracking-widest",
  contentWrapper:
    "border-4 border-white flex-grow flex flex-col lg:grid lg:grid-cols-[1fr_15%] lg:grid-rows-[minmax(0,_1fr)]", // <-- ADDED grid-rows
  contentMain: "p-4 h-full",
  sideMenu: // This is now ONLY for the large-screen sidebar
    "hidden lg:flex p-4 text-lg font-mono font-medium text-blue-400 tracking-widest flex-col justify-between gap-4 border-l-4 border-white h-full",
  menuNavSection: "flex flex-col gap-2",
  menuContactSection: "flex flex-col gap-2",
  linkItem: "flex flex-row items-center gap-2",
  burgerButton: "lg:hidden text-cyan-400 z-50",
  burgerMenuOverlay:
    "fixed inset-0 z-40 bg-black bg-opacity-95 flex flex-col p-6 gap-10",
  burgerMenuHeader: "flex justify-end",
  burgerMenuContent:
    "flex flex-col items-center justify-center gap-10 h-full text-xl",
};

const Layout = ({ headers, content, currentPageLabel }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Menus = {
    Home: { slug: "/", icon: <IoHome size={25} />, label: "Home" },
    Profile: {
      slug: "/profile",
      icon: <ImProfile size={25} />,
      label: "Profile",
    },
    Resume: {
      slug: "/resume",
      icon: <PiReadCvLogoFill size={25} />,
      label: "Resume/CV",
    },
    Project: {
      slug: "/project",
      icon: <VscGithubProject size={25} />,
      label: "Projects",
    },
    Certificate: {
      slug: "/certificate",
      icon: <PiCertificateFill size={25} />,
      label: "Certificate",
    },
    Game: {
      slug: "/game",
      icon: <IoGameController size={25} />,
      label: "Games",
    },
    Art: { slug: "/art", icon: <HiPaintBrush size={25} />, label: "Arts" },
  };

  const CurrentMenu = Object.fromEntries(
    Object.entries(Menus).filter(([_, m]) => m.label !== currentPageLabel)
  );

  const headerValues = Object.values(headers);
  const lastHeader = headerValues[headerValues.length - 1];

  return (
    <main className={styles.main}>
      {/* HEADER */}
      <div className={styles.header}>
        {/* Full Breadcrumbs for Medium/Large Screen */}
        <div className="hidden md:flex flex-row">
          {headerValues.map((header) => (
            <Link
              key={header.slug}
              href={header.slug}
              className={styles.headerLink}
            >
              {header.label}
            </Link>
          ))}
        </div>

        {/* Truncated Breadcrumbs for Small Screen */}
        <div className="md:hidden">
          <Link href="/" className={styles.headerLink}>
            .../
          </Link>
          {lastHeader && (
            <Link href={lastHeader.slug} className={styles.headerLink}>
              {lastHeader.label.replace("/", "")}
            </Link>
          )}
        </div>

        {/* Burger Menu Button */}
        <button onClick={toggleMenu} className={styles.burgerButton}>
          {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {/* CONTENT */}
      <div className={styles.contentWrapper}>
        <div className={styles.contentMain}>{content}</div>

        {/* SIDE MENU (Large Screen Only) */}
        <div className={styles.sideMenu}>
          <div className={styles.menuNavSection}>
            {/* Navigation */}
            {Object.values(CurrentMenu).map((m) => (
              <Link key={m.slug} href={m.slug} className={styles.linkItem}>
                {m.icon} {m.label}
              </Link>
            ))}
          </div>
          <div className={styles.menuContactSection}>
            {/* Contact */}
            <p>Contact Me at:</p>
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={styles.linkItem}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon} {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BURGER MENU (Small/Medium Screen Overlay) */}
      {isMenuOpen && (
        <div className={styles.burgerMenuOverlay}>
          <div className
={styles.burgerMenuHeader}>
            {/* The close button is now part of the header's state */}
          </div>
          <div className={styles.burgerMenuContent}>
            {/* Navigation */}
            <div className={styles.menuNavSection + " items-center"}>
              {Object.values(CurrentMenu).map((m) => (
                <Link
                  key={m.slug}
                  href={m.slug}
                  className={styles.linkItem}
                  onClick={toggleMenu} // Close menu on navigation
                >
                  {m.icon} {m.label}
                </Link>
              ))}
            </div>
            {/* Contact */}
            <div className={styles.menuContactSection + " items-center"}>
              <p>Contact Me at:</p>
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={styles.linkItem}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={toggleMenu} // Close menu on navigation
                >
                  {link.icon} {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Layout;