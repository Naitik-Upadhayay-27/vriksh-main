"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { motion, useAnimation } from 'framer-motion';
import { FeaturedProperties } from "@/components/feature-propertise";
import RealEstateHero from "@/components/about-hero";

export default function AboutPage() {
    const [isHovered, setIsHovered] = useState(false);
    const topRowControls = useAnimation();
    const bottomRowControls = useAnimation();

    useEffect(() => {
        const animateRows = async () => {
            topRowControls.start({
                x: ['-50%', '0%'],
                transition: {
                    duration: 15,
                    ease: 'linear',
                    repeat: Infinity,
                }
            });

            bottomRowControls.start({
                x: ['0%', '-50%'],
                transition: {
                    duration: 15,
                    ease: 'linear',
                    repeat: Infinity,
                }
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
                x: ['-50%', '0%'],
                transition: {
                    duration: 15,
                    ease: 'linear',
                    repeat: Infinity,
                }
            });
            bottomRowControls.start({
                x: ['0%', '-50%'],
                transition: {
                    duration: 15,
                    ease: 'linear',
                    repeat: Infinity,
                }
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
            { src: "/about6.png", alt: "Team members" }
        ],
        bottomRow: [
            { src: "/about7.png", alt: "Team photo" },
            { src: "/about8.png", alt: "Company car" },
            { src: "/about9.png", alt: "Agent with camera" },
            { src: "/about10.png", alt: "Business meeting" },
            { src: "/about7.png", alt: "Team photo" },
            { src: "/about8.png", alt: "Company car" },
            { src: "/about9.png", alt: "Agent with camera" },
            { src: "/about10.png", alt: "Business meeting" }
        ]
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex justify-center mt-10 px-12">
                <div className="relative w-[1480px] h-[457px] px-8 rounded-3xl overflow-hidden">
                    <Image
                        src="/contact.png"
                        alt="Ahmedabad Cityscape"
                        layout="fill"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-white/30">
                        <h1 className="text-white text-4xl font-bold">About Us</h1>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-4 py-8">
                <section className="max-w-4xl mx-auto mb-16 text-[#080a0f] mt-12">
                    <h2 className="text-3xl font-bold mb-6 text-center">Your Trusted Gateway to Ahmedabad's Finest Homes</h2>
                    <p className="text-center mb-6 text-[#080a0f]">
                        Mindestate is more than just a real estate provider—it's your trusted partner in discovering Ahmedabad's
                        most promising under-construction residential projects. We bring you exclusive access to handpicked
                        developments from top builders, ensuring you invest in a future-ready home. With deep market expertise,
                        personalized guidance, and a data-driven approach.
                    </p>
                    <p className="text-center text-[#1e2532]">
                        We transform the complex world of real estate into a seamless, transparent experience. From selecting the
                        perfect property to understanding the city's evolving infrastructure, we empower you with insights that go
                        beyond just square footage—helping you invest smartly and confidently.
                    </p>
                </section>


                {/* Wrap the components from RealEstateHero to FeaturedProperties in a div with the background color */}
                <div style={{ backgroundColor: 'rgb(250,250,250)' }}>
                    <RealEstateHero />

                    <section className="mb-16 overflow-hidden">
                        {/* <h2 className="text-2xl font-bold mb-6 text-center">Our Team & Achievements</h2> */}

                        <div
                            className="overflow-hidden"
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
                                        className="flex-shrink-0 w-64 h-64 overflow-hidden inline-block"
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={300}
                                            height={300}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <div
                            className="overflow-hidden"
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
                                        className="flex-shrink-0 w-64 h-64 overflow-hidden inline-block"
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={300}
                                            height={300}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </section>

                    <FeaturedProperties />
                </div>
            </main>
        </div>
    );
}