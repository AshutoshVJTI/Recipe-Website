import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";

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
            } fixed inset-0 z-50 bg-white`}
          >
            <div className="relative p-4">
              <input
                className="w-full rounded-lg p-2"
                type="text"
                placeholder="Search"
              />
              <button
                onClick={handleSearchClose}
                className="absolute top-0 right-0 p-2"
              >
                <BsSearch />
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
