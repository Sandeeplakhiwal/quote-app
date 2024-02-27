import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { name: "Quotes", href: "/quotes" },
  { name: "Proverbs", href: "/proverbs" },
  { name: "Dialogues", href: "/dialogues" },
];

function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex flex-row items-center sm:w-1/2 w-full justify-evenly gap-2 sm:gap-0 ">
      {navLinks.map((nav) => {
        let isActive = pathname.startsWith(nav.href);
        return (
          <Link
            href={nav.href}
            key={nav.name}
            className={isActive ? " underline" : " "}
          >
            <h2 className={` font-semibold text-md`}>{nav.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default NavLinks;
