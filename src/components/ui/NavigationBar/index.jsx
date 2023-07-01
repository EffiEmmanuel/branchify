import React, { useState, useRef, useEffect } from "react";
import { Fade } from "react-reveal";
import { MdClose, MdOutlineMenu } from "react-icons/md";

// Images
import BranchifyLogo from "../../../../src/assets/logos/logobranchify.svg";

function NavigationBar({}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleScroll(event) {
    console.log("SCROLL EVENT:", event);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // return window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      {/* MOBILE NAVBAR */}
      {isMenuOpen && (
        <Fade right duration={500} opposite={true}>
          <nav className="bg-branchifyPink p-4 lg:hidden fixed min-h-screen top-0 left-0 w-full z-10">
            <div className="flex-col w-full mt-40">
              <ul className="align-middle flex-col text-gray-500 font-semibold">
                <Fade right duration={700} delay={100}>
                  <li className="mobile-nav-item mx-10 my-10 border-b-gray-500 border-b-[.5px] py-3">
                    <a href="/" className="text-2xl">
                      Discover
                    </a>
                  </li>
                </Fade>
                <Fade right duration={700} delay={200}>
                  <li className="mobile-nav-item mx-10 my-10 border-b-gray-500 border-b-[.5px] py-3">
                    <a href="/" className="text-2xl">
                      Templates
                    </a>
                  </li>
                </Fade>
                <Fade right duration={700} delay={400}>
                  <li className="mobile-nav-item mx-10 my-10 border-b-gray-500 border-b-[.5px] py-3">
                    <a href="/" className="text-2xl">
                      Pricing
                    </a>
                  </li>
                </Fade>

                <Fade right duration={700} delay={600}>
                  <li className="mobile-nav-item mx-10 my-10 border-b-gray-500 border-b-[.5px] py-3">
                    <a href="/" className="text-2xl">
                      Learn
                    </a>
                  </li>
                </Fade>
              </ul>
            </div>
          </nav>
        </Fade>
      )}

      {/* DESKTOP NAVBAR */}
      <Fade up duration={1000}>
        <nav
          // data-scroll
          // data-scroll-position="top"
          // data-scroll-target="#hero"
          // data-scroll-speed="10"
          className="flex justify-between bg-white p-4 lg:p-5 lg:px-7 rounded-full"
          // style={{ position: "sticky", top: 0 }}
        >
          <div className="flex gap-x-10">
            <a href="/" className="w-28 lg:w-36">
              <img
                src={BranchifyLogo}
                alt="Branchify"
                className="w-full h-full"
              />
            </a>

            <div className="lg:flex w-full hidden my-auto">
              <ul className="align-middle flex gap-x-9 text-gray-500 font-semibold">
                <li className="">
                  <a href="/" className="">
                    Discover
                  </a>
                </li>
                <li className="">
                  <a href="/" className="">
                    Templates
                  </a>
                </li>
                <li className="">
                  <a href="/" className="">
                    Pricing
                  </a>
                </li>

                <li className="">
                  <a href="/" className="">
                    Learn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* AUTH LINKS + MENUBAR */}
          <div className="my-auto flex gap-x-5">
            <a
              className="my-auto bg-blueBlack p-3 lg:px-10 text-white text-sm rounded-xl"
              href="/"
            >
              Sign up for free
            </a>
            <a className="my-auto text-sm" href="/">
              Log in
            </a>

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
      </Fade>
    </div>
  );
}

export default NavigationBar;
