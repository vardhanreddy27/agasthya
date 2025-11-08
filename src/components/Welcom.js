"use client";
import Link from 'next/link';

import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ThreeDMarqueeDemo } from "./ThreeDMarqueeDemo";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { PiHandHeartDuotone } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";

function Welcome() {
  useEffect(() => {
    const titleSplit = new SplitType("#welcome-title", { types: "words" });
    const subtitleSplit = new SplitType("#welcome-subtitle", { types: "words" });

    gsap.set(["#welcome-title", "#welcome-subtitle"], { opacity: 1 });
    gsap.set(".word", { y: 100, opacity: 0, visibility: "hidden" });

    gsap.set("#logo-wrapper", { opacity: 0, visibility: "hidden" });
    gsap.set("#logo-img", { y: 100, opacity: 0, visibility: "hidden" });
    gsap.set("#shop-button", { y: 100, opacity: 0, visibility: "hidden" });
    gsap.set(["#icon-1", "#icon-2", "#icon-3"], { y: 100, opacity: 0, visibility: "hidden" });

    const tl = gsap.timeline({ delay: 0.3 });

    tl.set("#logo-wrapper", { visibility: "visible" })
      .to("#logo-wrapper", { opacity: 1, duration: 0.1 })
      .set("#logo-img", { visibility: "visible" })
      .to("#logo-img", {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      })
      .to(".word", {
        y: 0,
        opacity: 1,
        visibility: "visible",
        stagger: 0.02,
        duration: 0.6,
        ease: "power2.out",
      }, "-=0.4")
      .set("#shop-button", { visibility: "visible" })
      .to("#shop-button", {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      }, "-=0.3")
      .set(["#icon-1", "#icon-2", "#icon-3"], { visibility: "visible" })
      .to(["#icon-1", "#icon-2", "#icon-3"], {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      }, "-=0.4");
  }, []);

  return (
    <section className="bg-[#FFF0F1]">
<div className="w-full lg:pl-6 pl-0 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Column - Text + CTA */}
        <div className="lg:w-1/3 w-full flex flex-col px-4 text-center lg:text-left pb-5">
          
          {/* Logo with animation wrapper */}
          <div id="logo-wrapper" className="overflow-hidden flex justify-center lg:justify-start opacity-0 invisible">
            <Image
              id="logo-img"
              src="/agasthyalogo.svg"
              alt="Agasthya Logo"
              width={140}
              height={70}
              className="w-auto h-auto max-w-[180px] opacity-0 invisible"
            />
          </div>

          {/* Animated Title */}
          <h1
            id="welcome-title"
            className="text-2xl sm:text-4xl lg:text-4xl font-bold leading-tight overflow-hidden opacity-0 invisible"
            style={{ lineHeight: "3.5rem" }}
          >
            Agasthya Superfoods
          </h1>

          {/* Animated Subtitle */}
          <p
            id="welcome-subtitle"
            className="text-base sm:text-lg lg:text-xl pt-3 text-gray-800 overflow-hidden opacity-0 invisible"
          >
            Where Superfoods Begin and Wellness Follows
          </p>

          {/* CTA + Animated Icons */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 pt-4">
           <Link href="/Contact"><button
              id="shop-button"
              className="bg-[rgb(157,37,45)] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition opacity-0 invisible"
            >
             Become a Partner
            </button></Link> 
            <VscWorkspaceTrusted id="icon-1" className="text-2xl opacity-0 invisible" />
            <PiHandHeartDuotone id="icon-2" className="text-3xl opacity-0 invisible" />
            <LiaCertificateSolid id="icon-3" className="text-3xl opacity-0 invisible" />
          </div>
        </div>

        {/* Right Column - Marquee Animation */}
        <div className="lg:w-2/3 w-full">
          <ThreeDMarqueeDemo />
        </div>
      </div>
    </section>
  );
}

export default Welcome;
