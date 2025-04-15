"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

/**
 * FeaturedProperties component displays a section with company description and property images
 *
 * @returns A React component showcasing featured properties with descriptive text
 */
export const FeaturedProperties = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section 
            ref={sectionRef}
            className="pt-4 sm:pt-12 pb-6 sm:pb-24 px-4 -mt-7 bg-[#FFFAF4]"
        >
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
                    <div 
                        className={`w-full lg:w-2/5 px-5 py-15 rounded-xl transform transition-all duration-1000 ease-out ${
                            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                        }`}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
                            Your Trusted Gateway to Ahmedabad's Finest Homes
                        </h2>
                        <p className="text-zinc-900 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                            Mindsestate is a dedicated real estate consultancy focused on bringing Ahmedabad's most promising under-construction residential projects to discerning homebuyers. We simplify the home-buying process with expert market insights, personalized assistance, and a commitment to transparency.
                        </p>
                        <button className="border-2 border-[#BB9632] text-[#BB9632] font-semibold rounded-md px-4 sm:px-6 py-1.5 sm:py-2 md:py-3 inline-flex items-center text-base sm:text-xl bg-white hover:bg-[#BB9632] hover:text-white transition-all duration-300 shadow-sm">
                            Read More <span className="ml-2 sm:ml-3">→</span>
                        </button>
                    </div>

                    {/* Image Grid - Hidden on small screens */}
                    <div 
                        className={`hidden lg:block lg:w-1/2 transform transition-all duration-1000 ease-out delay-300 ${
                            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                        }`}
                    >
                        <div className="relative w-full h-[500px] lg:h-[600px]">
                            {/* Top left image - Large */}
                            <div className="absolute top-0 left-0 w-[49%] h-[58%] overflow-hidden rounded-md group">
                                <img
                                    src="/building1.png"
                                    alt="Residential building"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>

                            {/* Top right image - Small */}
                            <div className="absolute top-0 right-0 w-[49%] h-[45%] overflow-hidden rounded-md group">
                                <img
                                    src="/building2.png"
                                    alt="Modern apartment complex"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>

                            {/* Bottom left image - Small */}
                            <div className="absolute bottom-0 left-0 w-[49%] h-[40%] overflow-hidden rounded-md group">
                                <img
                                    src="/building3.png"
                                    alt="Luxury residential complex"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>

                            {/* Bottom right image - Large */}
                            <div className="absolute bottom-0 right-0 w-[49%] h-[53%] overflow-hidden rounded-md group">
                                <img
                                    src="/building4.png"
                                    alt="High-rise apartment building"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}