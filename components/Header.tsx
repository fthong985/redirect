"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";

type NavsTypes = {
  name: string;
  path: string;
};

const navs: NavsTypes[] = [
  { name: "Browse genre", path: "/genres" },
  { name: "Actress Ranking", path: "/actresses/ranking" },
  { name: "Actress List", path: "/actresses" },
  { name: "Uncensored leak", path: "/uncensored_leak?q=uncensored-leak" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`flex justify-between px-2 py-3 border-[#4e4d4d] sticky top-0 z-[99999] ${
        isScrolled && "bg-[#171717ad] backdrop-blur-sm"
      }`}
    >
      <Link href={"/"}>
        <div className="relative w-24 h-5 sm:w-28 sm:h-6 lg:w-36 lg:h-8">
          <Image
            src={"/jav4you_logo_v2.png"}
            alt="Jav4you Logo"
            fill
            className="absolute"
            sizes="(max-width: 300px) 100vw, (max-width: 450px) 50vw, 800px"
            priority
            unoptimized
          />
        </div>
      </Link>

      <NavsMobile />
      <NavsHeaderDesktop />
    </header>
  );
}

function NavsMobile() {
  const router = useRouter();
  return (
    <Popover>
      <PopoverTrigger className="lg:hidden">
        <Menu color="#EB720D" size={28} role="button" className="sm:size-8" />
      </PopoverTrigger>
      <PopoverContent
        className="w-40 p-1 bg-[#e5e9f0] px-0 border-0 min-w-[225px] lg:hidden"
        align="end"
      >
        {navs.map((nav: NavsTypes, index) => (
          <button
            key={index}
            className="px-4 py-2 text-[#2e3440] font-semibold tracking-wider w-fit block"
            onClick={() =>
              router.push(`${process.env.NEXT_PUBLIC_URL}${nav.path}`)
            }
          >
            {nav.name}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
}

function NavsHeaderDesktop() {
  const router = useRouter();

  return (
    <nav className="hidden lg:flex gap-5">
      {navs.map((nav: NavsTypes, index) => (
        <button
          key={index}
          className="text-[#e5e9f0] tracking-wider flex justify-between gap-8 hover:text-main"
          onClick={() =>
            router.push(`${process.env.NEXT_PUBLIC_URL}${nav.path}`)
          }
        >
          {nav.name}
        </button>
      ))}
    </nav>
  );
}

export default Header;
