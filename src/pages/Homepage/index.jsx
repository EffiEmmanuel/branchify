import "./Homepage.css";
import { useEffect, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Fade from "react-reveal/Fade";
// Components
import NavigationBar from "../../components/ui/NavigationBar";
import HomeBranchNameForm from "../../forms/HomeBranchNameForm";

// Images
import effi from "../../assets/images/effi.jpg";
import linkPreview from "../../assets/images/link-preview.webp";

function Homepage() {
  // Locomotive scroll
  let locomotiveScrollRef = useRef(null);

  const options = {
    smooth: true,
    // multiplier: 3,
    smartphone: {
      smooth: true
    }
  };

  return (
    <LocomotiveScrollProvider
      options={options}
      containerRef={locomotiveScrollRef}
    >
      <div data-scroll-container ref={locomotiveScrollRef}>
        <div
          id="hero"
          className="doodleBgBlack relative min-h-screen py-14 lg:px-20 px-7"
        >
          {/* NAVIGATION BAR */}
          <NavigationBar />

          {/* HERO SECTION */}
          <section className="text-white mt-32 flex justify-between align-middle">
            <div className="my-auto">
              {/* HEADLINE AND TAG */}
              <Fade duration={1000} delay={200}>
                <div data-scroll>
                  <h1
                    data-scroll
                    data-scroll-speed="5"
                    data-scroll-position="top"
                    className="text-4xl lg:text-6xl lg:leading-[4rem] leading-[4rem] font-extrabold max-w-2xl"
                  >
                    Link in bio has never looked prettier and easier.
                  </h1>
                  <p
                    data-scroll
                    data-scroll-speed="5"
                    data-scroll-position="top"
                    className="mt-2 max-w-2xl leading-7"
                  >
                    One link that links to everything you create and sell from
                    your Instagram, TikTok, Twitter, YouTube and other social
                    media profiles.
                  </p>
                </div>
              </Fade>

              {/* SIGN UP FORM */}
              <Fade up duration={1000} delay={300}>
                <div
                  data-scroll
                  data-scroll-speed="5"
                  data-scroll-position="top"
                  className="lg:max-w-lg"
                >
                  <HomeBranchNameForm blackButton={false} tintInput={false} />
                </div>
              </Fade>
            </div>

            <Fade duration={1000}>
              <div
                data-scroll
                className="hidden lg:flex lg:my-auto justify-start md:mx-0 mx-auto w-2/4 h-1/2 mt-20 md:w-1/4 md:h-[400px] md:my-auto"
              >
                <img
                  data-scroll
                  data-scroll-speed="2"
                  data-scroll-position="top"
                  alt="Your unique link with branchify"
                  src={linkPreview}
                  className="w-full h-full"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </Fade>
          </section>
        </div>

        {/* CREATE AND CUSTOMIZE YOUR BRANCH */}

        {/*  BRANCHIFY */}
        <section
          id="branchify-text"
          className="relative justify-center lg:px-20 px-7 doodleBgBlack -mt-2"
        >
          <span
            data-scroll
            data-scroll-speed="1"
            // data-scroll-sticky
            data-scroll-target="#branchify-text"
            data-scroll-direction="horizontal"
            data-scroll-position="top"
            id="branchify-h1"
            className="my-auto pt-20 absolute top-0 flex justify-center w-full"
          >
            <span
              data-scroll
              data-scroll-speed="1"
              data-scroll-direction="vertical"
              data-scroll-target="#branchify-h1"
              className="text-[9rem] lg:text-[15rem] md:text-4xl text-white opacity-5 font-extrabold"
            >
              B
            </span>
            <span
              data-scroll
              data-scroll-speed="1"
              data-scroll-direction="vertical"
              data-scroll-target="#branchify-h1"
              className="text-[9rem] lg:text-[15rem] md:text-4xl text-white opacity-5 font-extrabold"
            >
              r
            </span>
            <span
              data-scroll
              data-scroll-speed="1"
              data-scroll-direction="vertical"
              data-scroll-target="#branchify-h1"
              className="text-[9rem] lg:text-[15rem] md:text-4xl text-white opacity-5 font-extrabold"
            >
              a
            </span>
            <span
              data-scroll
              data-scroll-speed="1"
              data-scroll-direction="vertical"
              data-scroll-target="#branchify-h1"
              className="text-[9rem] lg:text-[15rem] md:text-4xl text-white opacity-5 font-extrabold"
            >
              n
            </span>
            <span
              data-scroll
              data-scroll-speed="1"
              data-scroll-direction="vertical"
              data-scroll-target="#branchify-h1"
              className="text-[9rem] lg:text-[15rem] md:text-4xl text-white opacity-5 font-extrabold"
            >
              c
            </span>
            <span
              data-scroll
              data-scroll-speed="1"
              data-scroll-direction="vertical"
              data-scroll-target="#branchify-h1"
              className="text-[9rem] lg:text-[15rem] md:text-4xl text-white opacity-5 font-extrabold"
            >
              h
            </span>
            <span
              data-scroll
              data-scroll-speed="1"
              data-scroll-direction="vertical"
              data-scroll-target="#branchify-h1"
              className="text-[9rem] lg:text-[15rem] md:text-4xl text-white opacity-5 font-extrabold"
            >
              i
            </span>
            <span
              data-scroll
              data-scroll-speed="1"
              data-scroll-direction="vertical"
              data-scroll-target="#branchify-h1"
              className="text-[9rem] lg:text-[15rem] md:text-4xl text-white opacity-5 font-extrabold"
            >
              f
            </span>
            <span
              data-scroll
              data-scroll-speed="1"
              data-scroll-direction="vertical"
              data-scroll-target="#branchify-h1"
              className="text-[9rem] lg:text-[15rem] md:text-4xl text-white opacity-5 font-extrabold"
            >
              y
            </span>
          </span>

          <section className="-mt-2 min-h-screen flex flex-col-reverse lg:flex-row md:justify-between">
            <div
              data-scroll
              data-scroll-speed="1"
              data-scroll-direction="vertical"
              className="lg:my-auto flex justify-start md:mx-0 mx-auto w-2/4 h-1/2 mt-20 md:w-1/4 md:h-[600px] md:my-auto"
            >
              <img
                alt="Your unique link with branchify"
                src={linkPreview}
                className="w-full h-full"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <div className="lg:block lg:text-left flex flex-col justify-center text-center md:w-2/4 md:my-auto">
              <h2
                data-scroll
                data-scroll-speed="1"
                data-scroll-direction="vertical"
                className="text-branchifyPink text-3xl lg:text-6xl font-extrabold"
              >
                Create and customize your branch in minutes
              </h2>
              <p
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="0.6"
                className="text-branchifyPink mt-5"
              >
                Branch out to your TikTok, Instagram, Twitter, service packages,
                events and more with just one fully customizable link in bio.
              </p>
              {/* CTA: Get started for free */}
              <div
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="0.8"
                className="mt-10"
              >
                <a
                  style={{
                    zIndex: 3,
                  }}
                  href="/"
                  className="rounded-lg px-9 py-5 text-branchifyBlack font-semibold bg-branchifyPink"
                >
                  Get started for free
                </a>
              </div>
            </div>
          </section>
        </section>

        {/* CREATE PACKAGES FOR THE SERVICES YOU OFFER */}
        <section
          data-scroll
          data-persistent
          data-scroll-section-inview
          className="min-h-screen doodleBgPink py-14 lg:px-20 px-7 flex flex-col-reverse lg:justify-between lg:flex-row-reverse"
        >
          <div
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="1"
            className="lg:my-auto flex justify-start lg:mx-0 mx-auto w-2/4 h-1/2 mt-20 md:w-1/4 md:h-[600px] md:my-auto"
          >
            <img
              alt="Your unique link with branchify"
              src={linkPreview}
              className="w-full h-full"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="lg:block lg:text-left flex flex-col justify-center text-center md:w-2/4 md:my-auto">
            <h2
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="1"
              className="text-branchifyBlack lg:leading-[4rem] leading-[4rem] text-3xl lg:text-6xl font-bold"
            >
              Create packages for the services you offer
            </h2>
            <p
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="0.6"
              className="text-branchifyBranch mt-5 leading-7"
            >
              Creates packages for the different services you offer as a
              freelancer, creator and business and receive payments directly to
              your PayPal, Stripe or Bank Account.
            </p>
            {/* CTA: Get started for free */}
            <div
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="0.8"
              className="mt-10"
            >
              <a
                style={{
                  zIndex: 3,
                }}
                href="/"
                className="rounded-lg px-9 py-5 text-white font-semibold bg-branchifyBlack"
              >
                Get started for free
              </a>
            </div>
          </div>
        </section>

        {/* ANALYTICS THAT GIVE YOU INSIGHTS */}
        <section
          className="min-h-screen doodleBgWhite py-14 lg:px-20 px-7"
          // data-scroll-section
        >
          {/* FIRST PART OF THIS SECTION - ANALYTICS THAT GIVE YOU INSIGHTS */}
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
            <div
              data-scroll
              data-scroll-direction="vertical"
              data-scroll-speed="1"
              className="lg:my-auto flex justify-start md:mx-0 mx-auto w-2/4 h-1/2 mt-20 md:w-1/4 md:h-[600px] md:my-auto"
            >
              <img
                alt="Your unique link with branchify"
                src={linkPreview}
                className="w-full h-full"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>

            <div className="lg:block lg:text-left flex flex-col justify-fend text-center md:w-2/4 md:my-auto">
              <h2
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="1"
                className="text-branchifyBlack lg:leading-[4rem] leading-[4rem] text-3xl lg:text-6xl font-extrabold"
              >
                Analytics that give you insight
              </h2>
              <p
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="0.6"
                className="text-branchifyBranch mt-5 leading-7"
              >
                Branch out to your TikTok, Instagram, Twitter, service packages,
                events and more with just one fully customizable link in bio.
              </p>
              {/* CTA: Get started for free */}
              <div
                data-scroll
                data-scroll-direction="vertical"
                data-scroll-speed="0.8"
                className="mt-10"
              >
                <a
                  style={{
                    zIndex: 3,
                  }}
                  href="/"
                  className="rounded-lg px-9 py-5 text-white font-semibold bg-branchifyBlack"
                >
                  Get started for free
                </a>
              </div>
            </div>
          </div>

          {/* TESTIMONIALS */}
          <section className="mt-52 text-center">
            {/* TESTIMONIAL PICTURE */}
            <div className="flex justify-center my-10">
              <img
                src={effi}
                alt="Mr Effi Emmanuel"
                className="rounded-full h-40 w-40"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* TESTIMONIAL */}
            <h1 className="lg:max-w-5xl lg:leading-[3.5rem] leading-[3.5rem] mx-auto text-center font-extrabold text-branchifyBlack text-2xl lg:text-4xl">
              “Branchify has helped me organize my social media for better
              presentation to my clients worldwide. From just one dashboard, I
              can easily add links to all my social media pages, receive
              payments for my works right from this one link and so much more.”
            </h1>

            {/* CLIENT AND COMPANY NAME */}
            <div className="mt-4">
              {/* CLIENT NAME */}
              <p className="text-gray-500 font-[500]">Effi Emmanuel</p>
              {/* CLIENT POSITION AND COMPANY NAME */}
              <p className="text-gray-500 font-[500] mt-2">
                CEO, Co-Founder, Gethsemane Tech
              </p>
            </div>

            {/* SLIDER INDICATOR */}
            <div className="flex justify-center gap-x-3 mt-10">
              <div className="h-3 w-3 bg-branchifyBlack rounded-full"></div>
              <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
              <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
              <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
            </div>
          </section>
        </section>

        {/* START BRANCHING AND FOOTER */}
        <section
          className="min-h-screen bg-branchifyBlack py-14 lg:px-20 px-7 flex flex-col justify-center align-middle"
          // data-scroll-section
        >
          {/* BLUE BOX */}
          <div className="doodleBgBlueBlack h-[700px] w-full my-auto rounded-lg p-12 flex flex-col justify-center align-middle text-white">
            {/* HEADLINE */}
            <Fade up duration={800}>
              <div className="text-center">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Start branching out now
                </h2>
                <p className="mt-2">
                  Start creating and customizing your unique link now
                </p>
              </div>
            </Fade>

            {/* FORM / CTA */}
            <Fade duration={800} delay={200}>
              <div className="lg:max-w-xl mx-auto">
                <HomeBranchNameForm blackButton={true} tintInput={false} />
              </div>
            </Fade>
          </div>

          {/* FOOTER */}
          <div className="doodleBgPlainWhite h-auto w-full px-7 py-14 lg:px-20 mt-20 rounded-lg">
            {/* FOOTER LINKS */}
            <div className="lg:flex lg:gap-x-20">
              {/* FOOTER LINK GROUP */}
              <div>
                {/* LINK TITLE */}
                <h4 className="font-semibold text-lg">Company</h4>
                {/* LINKS */}
                <ul className="mt-2">
                  <li>
                    <a
                      style={{
                        zIndex: 3,
                      }}
                      href="/"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        zIndex: 3,
                      }}
                      href="/"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        zIndex: 3,
                      }}
                      href="/"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        zIndex: 3,
                      }}
                      href="/"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        zIndex: 3,
                      }}
                      href="/"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>

              {/* FOOTER LINKS (RIGHT HAND PART) */}
              <div className="">
                {/* TWO LINKS HERE */}
                <div className="flex flex-col md:flex-row gap-x-10 lg:gap-x-20">
                  <div className="mt-10 lg:mt-0">
                    {/* LINK TITLE */}
                    <h4 className="font-semibold text-lg">Support</h4>
                    {/* LINKS */}
                    <ul className="mt-2">
                      <li>
                        <a
                          style={{
                            zIndex: 3,
                          }}
                          href="/"
                        >
                          FAQs
                        </a>
                      </li>
                      <li>
                        <a
                          style={{
                            zIndex: 3,
                          }}
                          href="/"
                        >
                          Report a problem
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-10 lg:mt-0">
                    {/* LINK TITLE */}
                    <h4 className="font-semibold text-lg">Legal</h4>
                    {/* LINKS */}
                    <ul className="mt-2">
                      <li>
                        <a
                          style={{
                            zIndex: 3,
                          }}
                          href="/"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          style={{
                            zIndex: 3,
                          }}
                          href="/"
                        >
                          Terms of Service
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* FORM HERE */}
                <div className="lg:max-w-lg">
                  <HomeBranchNameForm blackButton={true} tintInput={true} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LocomotiveScrollProvider>
  );
}

export default Homepage;
