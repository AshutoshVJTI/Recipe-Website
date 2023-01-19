import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsSearch, BsXLg } from "react-icons/bs";

const SubHeader = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  return (
    <header className="bg-gray-100">
      <div className="container flex justify-between items-center p-4">
        <div className="flex">
          <a href="#" className="text-black hover:text-orange-600 mx-4 text-xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-black hover:text-orange-600 mx-4 text-xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-black hover:text-orange-600 mx-4 text-xl">
            <FaInstagram />
          </a>
        </div>
        <div className="flex">
          <div
            className={`${
              isSearchOpen ? "block" : "hidden"
            } inset-0 z-50 mx-auto w-80`}
          >
            <div className="relative">
              <input
                className="w-full rounded-lg p-2 h-auto"
                type="text"
                placeholder="Search"
              />
              <button
                onClick={handleSearchClose}
                className="absolute right-1 top-1 p-2"
              >
                <BsXLg />
              </button>
            </div>
          </div>
          <button
            onClick={handleSearchOpen}
            className="text-black hover:text-orange-600 mx-4"
          >
            <BsSearch />
          </button>
          <a href="#" className="text-black hover:text-orange-600 mx-4">
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default SubHeader;
