"use client";

import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/NavLink";
import { pathItems } from "@/lib/pathitems";
import { useState } from "react";
import Hamburger from "@/components/Hamburger";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY >= 150) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <header
      className={`min-h-12 flex flex-row flex-1 items-center justify-between p-1 px-5 text-[#5c253d] font-bold `}
    >
      <Link href={"/"} className="w-52 h-14 relative">
        <Image
          src={"/mgc.svg"}
          alt="logo"
          fill
          className="object-contain"
          priority
        />
      </Link>

      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="hidden md:flex flex-row gap-4 items-center">
        {pathItems.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="flex flex-col justify-between items-center h-8 z-50 md:hidden relative  "
      >
        <div
          className={`w-8 h-1 ${isOpen ? "bg-white" : "bg-black"} rounded`}
        />
        <div
          className={`w-8 h-1 ${isOpen ? "bg-white" : "bg-black"} rounded`}
        />
        <div
          className={`w-8 h-1 ${isOpen ? "bg-white" : "bg-black"} rounded`}
        />
      </button>
    </header>
  );
};

export default NavBar;
