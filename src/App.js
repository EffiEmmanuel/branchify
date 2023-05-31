import "./App.css";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

// Components
import NavigationBar from "./components/ui/NavigationBar";
import HomeBranchNameForm from "./forms/HomeBranchNameForm";

// Images
import effi from "../src/assets/images/effi.jpg";
import linkPreview from "../src/assets/images/link-preview.webp";

function App() {
  // Locomotive scroll
  let locomotiveScrollRef = useRef(null);

  const options = {
    smooth: true,
    // multiplier: 3,
    smartphone: {
      smooth: true,
    },
  };

  return (
    <LocomotiveScrollProvider
      options={options}
      containerRef={locomotiveScrollRef}
    >
      <div data-scroll-container ref={locomotiveScrollRef}>
        <div
          data-scroll-section
          className="doodleBgBlack   py-14 lg:px-20 px-7"
        >
          {/* NAVIGATION BAR */}
          <NavigationBar />

          {/* HERO SECTION */}
          <section className="text-white mt-32 flex justify-between align-middle">
            <div className="my-auto">
              {/* HEADLINE AND TAG */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-extrabold max-w-2xl leading-[55px]">
                  Link in bio has never looked prettier and easier.
                </h1>
                <p className="mt-2 max-w-2xl leading-7">
                  One link that links to everything you create and sell from
                  your Instagram, TikTok, Twitter, YouTube and other social
                  media profiles.
                </p>
              </div>

              {/* SIGN UP FORM */}
              <div className="lg:max-w-md">
                <HomeBranchNameForm blackButton={false} tintInput={false} />
              </div>
            </div>

            <div
              data-scroll
              data-scroll-speed="1"
              data-scroll-direction="vertical"
              className="hidden lg:flex lg:my-auto justify-start md:mx-0 mx-auto w-2/4 h-1/2 mt-20 md:w-1/4 md:h-[400px] md:my-auto"
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
          </section>

          {/* CREATE AND CUSTOMIZE YOUR BRANCH */}
          <section className="mt-32 min-h-screen flex flex-col-reverse lg:flex-row md:justify-between">
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
              <h2 className="text-branchifyPink text-3xl lg:text-6xl font-extrabold">
                Create and customize your branch in minutes
              </h2>
              <p className="text-branchifyPink mt-5">
                Branch out to your TikTok, Instagram, Twitter, service packages,
                events and more with just one fully customizable link in bio.
              </p>
              {/* CTA: Get started for free */}
              <div className="mt-10">
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
        </div>

        {/* CREATE PACKAGES FOR THE SERVICES YOU OFFER */}
        <section
          // data-scroll-section
          // data-scroll
          // data-scroll-speed="9"
          className="min-h-screen doodleBgPink py-14 lg:px-20 px-7 flex flex-col-reverse lg:justify-between lg:flex-row-reverse"
        >
          <div className="lg:my-auto flex justify-start lg:mx-0 mx-auto w-2/4 h-1/2 mt-20 md:w-1/4 md:h-[600px] md:my-auto">
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
            <h2 className="text-branchifyBlack text-3xl lg:text-6xl font-bold">
              Create packages for the services you offer
            </h2>
            <p className="text-branchifyBranch mt-5">
              Creates packages for the different services you offer as a
              freelancer, creator and business and receive payments directly to
              your PayPal, Stripe or Bank Account.
            </p>
            {/* CTA: Get started for free */}
            <div className="mt-10">
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
          data-scroll-section
        >
          {/* FIRST PART OF THIS SECTION */}
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
            <div className="lg:my-auto flex justify-start md:mx-0 mx-auto w-2/4 h-1/2 mt-20 md:w-1/4 md:h-[600px] md:my-auto">
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
              <h2 className="text-branchifyBlack text-3xl lg:text-6xl font-extrabold">
                Analytics that give you insight
              </h2>
              <p className="text-branchifyBranch mt-5">
                Branch out to your TikTok, Instagram, Twitter, service packages,
                events and more with just one fully customizable link in bio.
              </p>
              {/* CTA: Get started for free */}
              <div className="mt-10">
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
            <h1 className="font-extrabold text-branchifyBlack text-2xl lg:text-4xl">
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
          data-scroll-section
        >
          {/* BLUE BOX */}
          <div className="doodleBgBlueBlack h-[700px] w-full my-auto rounded-lg p-12 flex flex-col justify-center align-middle text-white">
            {/* HEADLINE */}
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Start branching out now
              </h2>
              <p className="mt-2">
                Start creating and customizing your unique link now
              </p>
            </div>

            {/* FORM / CTA */}
            <HomeBranchNameForm blackButton={true} tintInput={false} />
          </div>

          {/* FOOTER */}
          <footer className="doodleBgPlainWhite h-auto w-full px-7 py-14 lg:px-20 mt-20 rounded-lg">
            {/* FOOTER LINKS */}
            <div>
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
                <div className="flex flex-col md:flex-row gap-x-10">
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
                <div>
                  <HomeBranchNameForm blackButton={true} tintInput={true} />
                </div>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;
