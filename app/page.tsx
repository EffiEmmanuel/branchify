"use client";
//
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import LocomotiveScroll, { ScrollElement } from "locomotive-scroll";
const Fade = require("react-reveal/Fade");

// Components
import HomeBranchNameForm from "@/form/HomeBranchNameForm";
import NavigationBar from "@/components/NavigationBar";

// Images
import effi from "../public/assets/images/effi.jpg";

export default function Home() {
  // Locomotive scroll
  let locomotiveScrollRef = useRef(null);
  useEffect(() => {
    if (locomotiveScrollRef.current) {
      const scroll: any = new LocomotiveScroll({
        el: locomotiveScrollRef.current,
        smooth: true,
      });
    }
  }, [locomotiveScrollRef]);

  return (
    <div className="">
      <div
        data-scroll-container
        ref={locomotiveScrollRef}
        className="doodleBgBlack min-h-screen py-14 lg:px-20 px-7"
      >
        {/* NAVIGATION BAR */}
        <NavigationBar />

        {/* HERO SECTION */}
        <section data-scroll-section className="text-white mt-32">
          {/* HEADLINE AND TAG */}
          <div data-scroll>
            <h1 className="text-4xl lg:text-5xl font-extrabold max-w-2xl leading-[55px]">
              Link in bio has never looked prettier and easier.
            </h1>
            <p className="mt-2 max-w-2xl leading-7">
              One link that links to everything you create and sell from your
              Instagram, TikTok, Twitter, YouTube and other social media
              profiles.
            </p>
          </div>

          {/* SIGN UP FORM */}
          <div data-scroll>
            <HomeBranchNameForm blackButton={false} tintInput={false} />
          </div>
        </section>

        {/* CREATE AND CUSTOMIZE YOUR BRANCH */}
        <section data-scroll-section className="mt-32 min-h-screen">
          <div></div>
          <div className="lg:block lg:text-left flex flex-col justify-center text-center">
            <h2 className="text-branchifyPink text-3xl lg:text-4xl font-bold">
              Create and customize your branch in minutes
            </h2>
            <p className="text-branchifyPink mt-5">
              Branch out to your TikTok, Instagram, Twitter, service packages,
              events and more with just one fully customizable link in bio.
            </p>
            {/* CTA: Get started for free */}
            <div className="mt-10">
              <Link
                href="/"
                className="rounded-lg px-9 py-5 text-branchifyBlack font-semibold bg-branchifyPink"
              >
                Get started for free
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* CREATE PACKAGES FOR THE SERVICES YOU OFFER */}
      <section
        data-scroll
        data-scroll-speed="2"
        className="min-h-screen doodleBgPink py-14 lg:px-20 px-7"
      >
        <div></div>
        <div className="lg:block lg:text-left flex flex-col justify-center text-center">
          <h2 className="text-branchifyBlack text-3xl lg:text-4xl font-bold">
            Create and customize your branch in minutes
          </h2>
          <p className="text-branchifyBranch mt-5">
            Branch out to your TikTok, Instagram, Twitter, service packages,
            events and more with just one fully customizable link in bio.
          </p>
          {/* CTA: Get started for free */}
          <div className="mt-10">
            <Link
              href="/"
              className="rounded-lg px-9 py-5 text-white font-semibold bg-branchifyBlack"
            >
              Get started for free
            </Link>
          </div>
        </div>
      </section>

      {/* ANALYTICS THAT GIVE YOU INSIGHTS */}
      <section
        data-scroll-section
        className="min-h-screen doodleBgWhite py-14 lg:px-20 px-7"
      >
        {/* FIRST PART OF THIS SECTION */}
        <div></div>
        <div className="lg:block lg:text-left flex flex-col justify-center text-center">
          <h2 className="text-branchifyBlack text-3xl lg:text-4xl font-bold">
            Analytics that give you insight
          </h2>
          <p className="text-branchifyBranch mt-5">
            Branch out to your TikTok, Instagram, Twitter, service packages,
            events and more with just one fully customizable link in bio.
          </p>
          {/* CTA: Get started for free */}
          <div className="mt-10">
            <Link
              href="/"
              className="rounded-lg px-9 py-5 text-white font-semibold bg-branchifyBlack"
            >
              Get started for free
            </Link>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <section className="mt-52 text-center">
          {/* TESTIMONIAL PICTURE */}
          <div className="flex justify-center my-10">
            <Image
              src={effi}
              alt="Mr Effi Emmanuel"
              className="rounded-full h-40 w-40"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* TESTIMONIAL */}
          <h1 className="font-extrabold text-branchifyBlack text-2xl lg:text-4xl">
            “Branchify has helped me organize my social media for better
            presentation to my clients worldwide. From just one dashboard, I can
            easily add links to all my social media pages, receive payments for
            my works right from this one link and so much more.”
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
        data-scroll-section
        className="min-h-screen bg-branchifyBlack py-14 lg:px-20 px-7 flex flex-col justify-center align-middle"
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
                  <Link href="/">Blog</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
                <li>
                  <Link href="/">Careers</Link>
                </li>
                <li>
                  <Link href="/">Contact</Link>
                </li>
                <li>
                  <Link href="/">Pricing</Link>
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
                      <Link href="/">FAQs</Link>
                    </li>
                    <li>
                      <Link href="/">Report a problem</Link>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 lg:mt-0">
                  {/* LINK TITLE */}
                  <h4 className="font-semibold text-lg">Legal</h4>
                  {/* LINKS */}
                  <ul className="mt-2">
                    <li>
                      <Link href="/">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/">Terms of Service</Link>
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
  );
}
