"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import NavLink from "@/components/NavLink";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/project", title: "Projects" },
    { url: "/expertise", title: "Expertise" },
  ];
  return (
    <header
      className={`fixed z-50 top-0 left-0 right-0 min-h-12 flex flex-row flex-1 items-center justify-between p-1 px-5 text-[#5c253d] font-bold  ${
        scrolled && "bg-white shadow-black shadow-md transition-shadow"
      }`}
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

      <div className="hidden md:flex flex-row gap-4 items-center">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {isOpen && (
        <div className="flex flex-col  items-center justify-center gap-6 bg-black bg-opacity-90 absolute top-0 left-0 right-0 bottom-0  h-screen text-white md:hidden">
          {links.map((link) => (
            <Link
              href={link.url}
              key={link.title}
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            >
              {link.title}
            </Link>
          ))}
          <div></div>
        </div>
      )}
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className="flex flex-col justify-between items-center h-8 z-10 md:hidden relative  "
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
