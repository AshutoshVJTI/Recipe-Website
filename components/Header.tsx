/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import SubHeader from "./SubHeader";
import { useRecipes } from "../lib/contentful";

const Header = () => {
  const { logo } = useRecipes();
  return (
    <div className="pb-10">
      <SubHeader />
      <header className="flex flex-col items-center p-4">
        <Link href="/">
          <img src={logo} alt="Logo" className="w-44 m-6" />
        </Link>
        <nav className="flex flex-row items-center justify-center">
          <Link href="/category">
            <div className="mx-4 font-medium text-black hover:text-orange-600 cursor-pointer">
              Category
            </div>
          </Link>
          <Link href="/archive">
            <div className="mx-4 font-medium text-black hover:text-orange-600 cursor-pointer">
              Archive
            </div>
          </Link>
          <Link href="/favorites">
            <div className="mx-4 font-medium text-black hover:text-orange-600 cursor-pointer">
              Favorites
            </div>
          </Link>
          <Link href="/profile">
            <div className="mx-4 font-medium text-black hover:text-orange-600 cursor-pointer">
              Profile
            </div>
          </Link>
          <Link href="/about">
            <div className="mx-4 font-medium text-black hover:text-orange-600 cursor-pointer">
              About
            </div>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
