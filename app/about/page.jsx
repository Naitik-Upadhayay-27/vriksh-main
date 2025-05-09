"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Lenis from "lenis";
import { motion, useAnimation } from "framer-motion";
import RealEstateHero from "@/components/about-hero";
import { FeaturedPropertiesAbout } from "@/components/feature-propertise-about";

export default function AboutPage() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeroVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContentVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      heroObserver.observe(heroRef.current);
    }

    if (contentRef.current) {
      contentObserver.observe(contentRef.current);
    }

    return () => {
      if (heroRef.current) {
        heroObserver.unobserve(heroRef.current);
      }
      if (contentRef.current) {
        contentObserver.unobserve(contentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis = new Lenis({
        autoRaf: true,
        lerp: 0.05,
        duration: 0.5,
        smoothWheel: true,
        wheelMultiplier: 1.2,
        smoothTouch: true,
        touchMultiplier: 1.2,
      });

      lenis.on("scroll", (e) => {
        console.log(e);
      });

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [isTeamVisible, setIsTeamVisible] = useState(false);
  const topRowControls = useAnimation();
  const bottomRowControls = useAnimation();
  const teamRef = useRef(null);

  useEffect(() => {
    const teamObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTeamVisible(true);
        }
      },
      {
        threshold: 0.05,
      }
    );

    if (teamRef.current) {
      teamObserver.observe(teamRef.current);
    }

    return () => {
      if (teamRef.current) {
        teamObserver.unobserve(teamRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const animateRows = async () => {
      topRowControls.start({
        x: ["-50%", "0%"],
        transition: {
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        },
      });

      bottomRowControls.start({
        x: ["0%", "-50%"],
        transition: {
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        },
      });
    };

    animateRows();

    return () => {
      topRowControls.stop();
      bottomRowControls.stop();
    };
  }, [topRowControls, bottomRowControls]);

  useEffect(() => {
    if (isHovered) {
      topRowControls.stop();
      bottomRowControls.stop();
    } else {
      topRowControls.start({
        x: ["-50%", "0%"],
        transition: {
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        },
      });
      bottomRowControls.start({
        x: ["0%", "-50%"],
        transition: {
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  }, [isHovered, topRowControls, bottomRowControls]);

  const images = {
    topRow: [
      { src: "/about3.png", alt: "Team photo" },
      { src: "/about4.png", alt: "Award ceremony" },
      { src: "/about5.png", alt: "Team at event" },
      { src: "/about6.png", alt: "Team members" },
      { src: "/about3.png", alt: "Team photo" },
      { src: "/about4.png", alt: "Award ceremony" },
      { src: "/about5.png", alt: "Team at event" },
      { src: "/about6.png", alt: "Team members" },
    ],
    bottomRow: [
      { src: "/about7.png", alt: "Team photo" },
      { src: "/about8.png", alt: "Company car" },
      { src: "/about9.png", alt: "Agent with camera" },
      { src: "/about10.png", alt: "Business meeting" },
      { src: "/about7.png", alt: "Team photo" },
      { src: "/about8.png", alt: "Company car" },
      { src: "/about9.png", alt: "Agent with camera" },
      { src: "/about10.png", alt: "Business meeting" },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div
        ref={heroRef}
        className={`flex justify-center mt-10 pl-0 pr-0 transform transition-all duration-1000 ease-out ${
          isHeroVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
      >
        <div className="relative w-[95%] h-64 rounded-xl overflow-hidden">
          <div className="w-full h-full transform transition-transform duration-300 hover:scale-[1.05]">
            <Image
              src="/about.png"
              alt="Ahmedabad Cityscape"
              layout="fill"
              className="w-full h-full object-cover brightness-[1.3] blur-0"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <h1 className="text-white text-4xl font-bold">About Us</h1>
          </div>
        </div>
      </div>

      <main className="w-full px-0 py-4">
        <section
          ref={contentRef}
          className={`max-w-6xl mx-auto mb-16 text-[#080a0f] mt-12 px-4 sm:px-4 md:px-6 transform transition-all duration-1000 ease-out ${
            isContentVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center transform transition-all duration-1000 ease-out delay-200 ${
              isContentVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            Your Trusted Gateway to Ahmedabad's Finest Homes
          </h2>
          <p
            className={`text-sm sm:text-base text-center mb-4 sm:mb-6 text-[#080a0f] transform transition-all duration-1000 ease-out delay-400 ${
              isContentVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            Mindestate is more than just a real estate provider—it's your
            trusted partner in discovering Ahmedabad's most promising
            under-construction residential projects. We bring you exclusive
            access to handpicked developments from top builders, ensuring you
            invest in a future-ready home. With deep market expertise,
            personalized guidance, and a data-driven approach.
          </p>
          <p
            className={`text-sm sm:text-base text-center text-[#1e2532] transform transition-all duration-1000 ease-out delay-600 ${
              isContentVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            We transform the complex world of real estate into a seamless,
            transparent experience. From selecting the perfect property to
            understanding the city's evolving infrastructure, we empower you
            with insights that go beyond just square footage—helping you invest
            smartly and confidently.
          </p>
        </section>

        {/* Wrap the components from RealEstateHero to FeaturedProperties in a div with the background color */}
        <div>
          <RealEstateHero />

          <section
            ref={teamRef}
            className={`mb-16 overflow-hidden mt-12 transform transition-all duration-1000 ease-out ${
              isTeamVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div
              className={`overflow-hidden transform transition-all duration-1000 ease-out delay-200 ${
                isTeamVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="flex gap-4 mb-4 whitespace-nowrap"
                animate={topRowControls}
              >
                {images.topRow.map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[140px] h-[100px] sm:w-[280px] sm:h-[200px] overflow-hidden inline-block"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={280}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            <div
              className={`overflow-hidden transform transition-all duration-1000 ease-out delay-400 ${
                isTeamVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="flex gap-4 whitespace-nowrap"
                animate={bottomRowControls}
              >
                {images.bottomRow.map((image, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[140px] h-[100px] sm:w-[280px] sm:h-[200px] overflow-hidden inline-block"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={280}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </section>
          <FeaturedPropertiesAbout />
        </div>
      </main>
    </div>
  );
}
