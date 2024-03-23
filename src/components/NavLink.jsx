import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${
        pathname === link.url && "bg-[#5c253d] text-white rounded p-1 px-2"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
