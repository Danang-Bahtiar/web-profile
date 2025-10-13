import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { HiPaintBrush } from "react-icons/hi2";
import { ImProfile } from "react-icons/im";
import { IoGameController, IoLogoWhatsapp } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import { PiCertificateFill, PiReadCvLogoFill } from "react-icons/pi";
import { VscGithubProject } from "react-icons/vsc";

export default function Home() {
  return (
    <main
      className="
        relative grid min-h-dvh w-full 
        overflow-hidden
        p-6
        gap-4
        grid-cols-[15%_1fr]
        grid-rows-1 
        bg-black
      "
    >
      <div className="border-4 border-white flex flex-col items-center justify-center gap-2">
        {/* Image with explicit dimensions (no more `fill`) */}
        <Image
          src={"/logo.png"}
          alt="logo"
          width={2048} // Set the desired width of your logo
          height={2048} // Set the desired height of your logo
          className="object-contain invert"
        />

        {/* Name, now a direct sibling of the image */}
        {/* <p className="text-center text-lg font-mono font-medium text-cyan-400 tracking-widest">
          Dan Koyuki
        </p> */}
      </div>

      {/* Right Column (is a flex container for its inner rows) */}
      <div className="flex flex-col gap-2">
        {/* Top Section / Header */}
        {/* FIX: Added a fixed height to prevent it from shrinking */}
        <div className="border-4 border-white p-4 h-18">
          <p className="text-xl font-mono font-medium text-cyan-400 tracking-widest">
            {
              "Active Projects > XRohrJS > A mini-framework to built an Express RESTApi"
            }
          </p>
        </div>

        {/* Middle Section / Body */}
        {/* `grow` now fills the space BETWEEN the header and footer */}
        <div className="border-4 border-white flex flex-row grow">
          <div className="w-4/5 p-4 flex flex-col justify-center items-center gap-8">
            {/* 1. Styled Image Wrapper */}
            <div className="relative w-64 h-64 rounded-full border-4 border-white overflow-hidden">
              <Image
                src={"/testpp.png"}
                alt="photo profile"
                fill // The image now fills its parent
                className="object-contain"
              />
            </div>

            {/* 2. Text Content Container */}
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="text-center text-2xl font-mono font-medium text-cyan-400 tracking-widest">
                Irwanto Danang Bahtiar | Dan Koyuki
              </p>
              <p className="text-center text-xl font-mono font-medium text-cyan-400 tracking-widest">
                Informatics Student | Islamic University of Sunan Gunung Djati
                Bandung
              </p>
              <p className="text-center text-xl font-mono font-medium text-cyan-400 tracking-widest">
                Backend Developer | Game Designer
              </p>
            </div>
          </div>
          <div className="w-1/5 border-l-4 border-white p-4 text-lg font-mono font-medium text-blue-400 tracking-widest flex flex-col gap-2">
            <div className="flex flex-col h-1/2 gap-2">
              <p>More About Me:</p>
              <Link
                href={"/profile"}
                className="flex flex-row items-center gap-2"
              >
                {" "}
                <ImProfile size={25} /> Profile
              </Link>
              <Link
                href={"/project"}
                className="flex flex-row items-center gap-2"
              >
                {" "}
                <VscGithubProject size={25} /> Projects
              </Link>
              <Link
                href={"/resume"}
                className="flex flex-row items-center gap-2"
              >
                {" "}
                <PiReadCvLogoFill size={25} /> Resume
              </Link>
              <Link
                href={"/certificate"}
                className="flex flex-row items-center gap-2"
              >
                {" "}
                <PiCertificateFill size={25} /> Certificate
              </Link>
              <Link href={"/game"} className="flex flex-row items-center gap-2">
                {" "}
                <IoGameController size={25} /> Games
              </Link>
              <Link href={"/art"} className="flex flex-row items-center gap-2">
                {" "}
                <HiPaintBrush size={25} /> Arts
              </Link>
            </div>
            <div className="flex flex-col justify-end h-1/2 gap-2">
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
}
