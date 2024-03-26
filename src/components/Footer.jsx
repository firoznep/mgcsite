import { FaCircleChevronUp } from "react-icons/fa6";
import Link from "next/link";

import {
  FaRegCopyright,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import BtnPrimary from "./BtnPrimary";
const Footer = () => {
  return (
    <footer className="   bg-gray-700 text-white font-mono">
      <Link
        href={"#logo"}
        className="hidden lg:block sm:fixed right-4 bottom-24 rounded-full bg-yellow-700 opacity-30 hover:opacity-100 hover:animate-bounce"
      >
        <FaCircleChevronUp className="w-12 h-12 hover:cursor-pointer" />
      </Link>
      <div className=" md:flex-row md:justify-around p-4 flex flex-col gap-4 md:items-center justify-center">
        {/* SERVICES*/}
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">SERVICES</h1>

          <div className="flex flex-col">
            <span>Preconstruction</span>
            <span>Lean Construction</span>
            <span>Design-Build</span>
            <span>Design Assist/Design-Build</span>
            <span>Building Information Modeling</span>
            <span>Self-Perform Work</span>
          </div>
        </div>
        {/* CONNECT */}
        <div>
          <h2 className="font-bold text-xl">CONNECT</h2>

          <div className="flex gap-3">
            <div>
              <FaTwitter />
            </div>
            <div>
              <FaFacebookF />
            </div>
            <div>
              <Link href={"/social"}>
                <FaInstagram />
              </Link>
            </div>
            <div>
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className=" p-4 bg-black text-white bottom-0 flex flex-col items-center justify-center gap-3 ">
        <h2>
          <Link href={"/about"}>Contact Us</Link> | Privacy Policy
        </h2>
        <div className="flex items-center justify-center gap-1 text-gray-400 text-xs font-sans">
          <FaRegCopyright />{" "}
          <span> 2011 - 2024 MGC Construction. All Rights Reserved Qatar</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
