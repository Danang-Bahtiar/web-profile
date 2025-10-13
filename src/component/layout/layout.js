import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { HiPaintBrush } from "react-icons/hi2";
import { ImProfile } from "react-icons/im";
import { IoGameController, IoHome, IoLogoWhatsapp } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import { PiCertificateFill, PiReadCvLogoFill } from "react-icons/pi";
import { VscGithubProject } from "react-icons/vsc";

const Layout = ({ headers, content, currentPageLabel }) => {
  const Menus = {
    Home: {
      slug: "/",
      icon: <IoHome size={25} />,
      label: "Home",
    },
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
    Art: {
      slug: "/art",
      icon: <HiPaintBrush size={25} />,
      label: "Arts",
    },
  };

  const CurrentMenu = Object.fromEntries(
    Object.entries(Menus).filter(([_, m]) => m.label !== currentPageLabel)
  );

  return (
    <main
      className="
        relative grid min-h-dvh w-full 
        overflow-hidden
        p-6
        gap-4
        grid-cols-1
        grid-rows-1 
        bg-black
      "
    >
      <div className="flex flex-col gap-2">
        {/* HEADER */}
        <div className="border-4 border-white p-4 h-18 flex flex-row">
          {Object.values(headers).map((header) => (
            <Link
              key={header.slug}
              href={header.slug}
              className="text-xl font-mono font-medium text-cyan-400 tracking-widest"
            >
              {header.label}
            </Link>
          ))}
        </div>

        {/* CONTENT */}
        <div className="border-4 border-white grid grid-cols-[1fr_15%] h-full">
          {content}

          {/* SIDE MENU */}
          <div className="border-l-4 border-white p-4 text-lg font-mono font-medium text-blue-400 tracking-widest flex flex-col gap-2">
            <div className="flex flex-col h-1/2 gap-2">
              {/* Navigation */}
              {Object.values(CurrentMenu).map((m) => (
                <Link
                  key={m.slug}
                  href={m.slug}
                  className="flex flex-row items-center gap-2"
                >
                  {m.icon} {m.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col h-1/2 gap-2 justify-end">
              {/* Contact */}
              <p>Contact Me at:</p>
              <a
                href="https://linkedin.com/in/dan-koyuki"
                className="flex flex-row items-center gap-2"
              >
                <FaLinkedin size={25} />
                LinkedIn
              </a>
              <a
                href="https://github.com/Danang-Bahtiar"
                className="flex flex-row items-center gap-2"
              >
                <FaGithub size={25} />
                Github
              </a>
              <a
                href="mailto:dankoyuki398@gmail.com"
                className="flex flex-row items-center gap-2"
              >
                <MdContactMail size={25} />
                Email
              </a>
              <a
                href="https://wa.me/6282116424576"
                className="flex flex-row items-center gap-2"
              >
                <IoLogoWhatsapp size={25} />
                Whatsapp
              </a>
              <a
                href="https://www.youtube.com/@DanKoyuki"
                className="flex flex-row items-center gap-2"
              >
                <FaYoutube size={25} />
                Youtube
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
