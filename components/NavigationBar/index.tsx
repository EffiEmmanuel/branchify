import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
const Fade = require("react-reveal/Fade");

// Images
import BranchifyLogo from "../../public/assets/logos/logobranchify.svg";
import { MdClose, MdOutlineMenu } from "react-icons/md";

type Props = {};

function NavigationBar({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // CURSOR REF SETUP
  const cursorRef = useRef(null);
  const [cursorTopValue, setCursorTopValue] = useState("0px");
  const [cursorLeftValue, setCursorLeftValue] = useState("0px");

  // FUNCTION: This function handles mouse move event
  const handleMouseMoveEvent = (event: any) => {
    // Check if cursor top and left values have changed
    if (
      cursorTopValue !== `${event.pageY}px` ||
      cursorLeftValue !== `${event.pageX}px`
    ) {
      // Set the top value of the cursor element
      setCursorTopValue(`${event.pageY}px`);
      // Set the left value of the cursor element
      setCursorLeftValue(`${event.pageX}px`);
      window.removeEventListener("mousemove", handleMouseMoveEvent);
    }
  };

  // CURSOR USE EFFECT
  useEffect(() => {
    // Check if cursorRef has been set
    if (cursorRef.current) {
      // Add a mousemove event listener to the window
      window.addEventListener("mousemove", handleMouseMoveEvent);
    }
  }, [cursorTopValue, cursorLeftValue]);

  return (
    <div>
      <div
        className="h-10 w-10 border-[1px] rounded-full absolute cursor translate-x-[-50%] translate-y-[-50%]"
        ref={cursorRef}
        style={{
          top: cursorTopValue,
          left: cursorLeftValue,
          zIndex: 1,
        }}
      ></div>
      {/* MOBILE NAVBAR */}
      {isMenuOpen && (
        <Fade right duration={500} opposite={true}>
          <nav className="bg-branchifyPink p-4 lg:hidden fixed min-h-screen top-0 left-0 w-full z-10">
            <div className="flex-col w-full mt-40">
              <ul className="align-middle flex-col text-gray-500 font-semibold">
                <Fade right duration={700} delay={100}>
                  <li className="mobile-nav-item mx-10 my-10 border-b-gray-500 border-b-[.5px] py-3">
                    <Link href="/" className="text-2xl">
                      Discover
                    </Link>
                  </li>
                </Fade>
                <Fade right duration={700} delay={200}>
                  <li className="mobile-nav-item mx-10 my-10 border-b-gray-500 border-b-[.5px] py-3">
                    <Link href="/" className="text-2xl">
                      Templates
                    </Link>
                  </li>
                </Fade>
                <Fade right duration={700} delay={400}>
                  <li className="mobile-nav-item mx-10 my-10 border-b-gray-500 border-b-[.5px] py-3">
                    <Link href="/" className="text-2xl">
                      Pricing
                    </Link>
                  </li>
                </Fade>

                <Fade right duration={700} delay={600}>
                  <li className="mobile-nav-item mx-10 my-10 border-b-gray-500 border-b-[.5px] py-3">
                    <Link href="/" className="text-2xl">
                      Learn
                    </Link>
                  </li>
                </Fade>
              </ul>
            </div>
          </nav>
        </Fade>
      )}

      {/* DESKTOP NAVBAR */}
      <nav className="flex justify-between relative z-20 bg-white p-4 lg:p-5 lg:px-7 rounded-full">
        <div className="flex gap-x-10">
          <Image src={BranchifyLogo} alt="Branchify" className="w-28 lg:w-36" />

          <div className="lg:flex w-full hidden my-auto">
            <ul className="align-middle flex gap-x-9 text-gray-500 font-semibold">
              <li className="">
                <Link href="/" className="">
                  Discover
                </Link>
              </li>
              <li className="">
                <Link href="/" className="">
                  Templates
                </Link>
              </li>
              <li className="">
                <Link href="/" className="">
                  Pricing
                </Link>
              </li>

              <li className="">
                <Link href="/" className="">
                  Learn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* AUTH LINKS + MENUBAR */}
        <div className="my-auto flex gap-x-5">
          <Link
            className="my-auto bg-blueBlack p-3 lg:px-10 text-white text-sm rounded-xl"
            href="/"
          >
            Sign up for free
          </Link>
          <Link className="my-auto text-sm" href="/">
            Log in
          </Link>

          {/* MENUBAR (OPEN) */}
          <div
            className={`my-auto cursor-pointer lg:hidden ${
              isMenuOpen && "bg-branchifyPinkDarker"
            } p-2 rounded-full`}
          >
            {!isMenuOpen && (
              <Fade duration={300}>
                <MdOutlineMenu
                  size={32}
                  className={`${isMenuOpen && "hidden"}`}
                  onClick={() => setIsMenuOpen(true)}
                />
              </Fade>
            )}

            {isMenuOpen && (
              <Fade duration={300}>
                <MdClose
                  size={32}
                  className="text-white"
                  onClick={() => setIsMenuOpen(false)}
                />
              </Fade>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
