import Link from "next/link";
import { pathItems } from "@/lib/pathitems";
import NavLink from "./NavLink";

const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    isOpen && (
      <div className="flex flex-col  items-center justify-center gap-6 bg-black bg-opacity-90 absolute top-0 left-0 right-0 bottom-0  h-screen text-white md:hidden z-40">
        {pathItems.map((link) => (
          <NavLink
            onClick={() => setIsOpen((prev) => !prev)}
            link={link}
            key={link.title}
          />
        ))}
      </div>
    )
  );
};

export default Hamburger;
