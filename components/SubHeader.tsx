/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { BsSearch, BsXLg } from "react-icons/bs";
import Link from "next/link";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth";
import { useAvatar } from "@/lib/contentful";

const SubHeader = () => {
  const { avatar } = useAvatar();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setShowDropdown(false);
      } else {
        setIsLoggedIn(false);
        setShowDropdown(false);
      }
    });
  }, []);

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  const handleLogout = async () => {
    await signOut(auth).then(() => {
      setShowLoginModal(false);
      setShowSignupModal(false);
    });
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

          {isLoggedIn ? (
            <div className="user-avatar relative z-10">
              <img
                src={auth.currentUser?.photoURL || avatar}
                alt={auth.currentUser?.displayName || "Default avatar"}
                className="rounded-full cursor-pointer w-8 ml-4"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              <div
                className={`dropdown-menu absolute bg-white shadow  ${
                  showDropdown ? "block" : "hidden"
                }`}
              >
                <ul className="p-2">
                  <li>
                    <Link
                      href="/profile"
                      className="py-2 hover:text-orange-500"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="py-2 hover:text-orange-500"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <>
              <button
                onClick={() => setShowLoginModal(true)}
                className="text-black hover:text-orange-600 mx-4"
              >
                Login
              </button>
              <button
                onClick={() => setShowSignupModal(true)}
                className="text-black hover:text-orange-600 mx-4"
              >
                Signup
              </button>
              {showLoginModal && (
                <LoginModal
                  setShowModal={setShowLoginModal}
                  showModal={showLoginModal}
                />
              )}
              {showSignupModal && (
                <SignupModal
                  setShowModal={setShowSignupModal}
                  showModal={showSignupModal}
                />
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default SubHeader;
