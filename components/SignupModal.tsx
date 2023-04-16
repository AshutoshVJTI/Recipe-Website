import React, { useState } from "react";
import { auth } from "../lib/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

interface SignupModalProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
}

const SignupModal = (props: SignupModalProps) => {
  const { setShowModal, showModal } = props;
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });

  const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setShowModal(false);
  };

  const handleSignup = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(
      auth,
      userDetails.email,
      userDetails.password
    )
      .then(() => handleClose(e))
      .catch((error) => console.log(error));
  };

  const handleGoogleSignup = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className={`fixed inset-0 z-50 ${showModal ? "block" : "hidden"}`}>
        <div className="relative mx-auto my-4 max-w-sm">
          <div className="bg-white rounded-lg p-4">
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="bg-gray-200 p-2 rounded-lg w-full"
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, email: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="bg-gray-200 p-2 rounded-lg w-full"
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, password: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="bg-gray-200 p-2 rounded-lg w-full"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={(e) => handleSignup(e)}
                  className="bg-orange-500 text-white p-2 rounded-lg"
                >
                  Signup
                </button>
                <div className="max-w-sm">
                  <button
                    type="button"
                    className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2"
                    onClick={(e) => handleGoogleSignup(e)}
                  >
                    <svg
                      className="mr-2 -ml-1 w-4 h-4"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                    >
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      ></path>
                    </svg>
                    Sign up with Google<div></div>
                  </button>
                </div>
                <button
                  className="text-orange-500 p-2"
                  onClick={(e) => handleClose(e)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupModal;
