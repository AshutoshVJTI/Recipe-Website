/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import SubHeader from "./SubHeader";
import { useLogo } from "../lib/contentful";
import { useRouter } from "next/router";
import { NavigationLinks } from "@/utils/navLinks";

const Header = () => {
  const { logo } = useLogo();
  const router = useRouter();

  return (
    <div className="pb-10">
      <SubHeader />
      <header className="flex flex-col items-center p-4">
        <Link href="/">
          <img src={logo} alt="Logo" className="w-44 m-6" />
        </Link>
        <nav className="flex flex-row items-center justify-center">
          {NavigationLinks.map((link) => {
            return (
              <Link key={link.id} href={link.href}>
                <div
                  className={`mx-4 text-black hover:text-orange-600 cursor-pointer ${
                    router.asPath === link.href ? "font-bold" : "font-medium"
                  }`}
                >
                  {link.label}
                </div>
              </Link>
            );
          })}
        </nav>
      </header>
    </div>
  );
};

export default Header;
