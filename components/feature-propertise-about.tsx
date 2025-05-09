"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

export function FeaturedPropertiesAbout() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.05, // 5% visibility trigger
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
            className={`pt-6 sm:pt-8 md:pt-12 pb-8 sm:pb-12 md:pb-24 px-2 sm:px-4 md:px-6 -mt-7 bg-white transform transition-all duration-1000 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
        >
            <div className="w-full max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12">
                    <div className={`w-full lg:w-2/5 px-2 sm:px-4 py-8 sm:py-12 md:py-15 rounded-xl transform transition-all duration-1000 ease-out delay-200 ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                    }`}>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
                            Your Gateway to Ahmedabad's Best Upcoming Homes
                        </h2>
                        <p className="text-zinc-900 mb-4 sm:mb-6 md:mb-8 leading-relaxed text-base sm:text-lg">
                        Mindestate brings you the finest under-construction homes from Ahmedabad's most reputed builders. With deep local market knowledge, expert insights, and personalized guidance, we make your property search effortless and rewarding. Invest in Ahmedabad's growing future with confidence.
                        </p>
                    </div>

                    {/* Image Grid - Responsive for all screens */}
                    <div className={`w-full lg:w-1/2 transform transition-all duration-1000 ease-out delay-400 ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                    }`}>
                        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                            {/* Top left image - Large */}
                            <div className="absolute top-0 left-0 w-[49%] h-[58%] overflow-hidden rounded-md">
                                <Image
                                    src="/building1.png"
                                    alt="Residential building"
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </div>

                            {/* Top right image - Small */}
                            <div className="absolute top-0 right-0 w-[49%] h-[45%] overflow-hidden rounded-md">
                                <Image
                                    src="/building2.png"
                                    alt="Modern apartment complex"
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </div>

                            {/* Bottom left image - Small */}
                            <div className="absolute bottom-0 left-0 w-[49%] h-[40%] overflow-hidden rounded-md">
                                <Image
                                    src="/building3.png"
                                    alt="Luxury residential complex"
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </div>

                            {/* Bottom right image - Large */}
                            <div className="absolute bottom-0 right-0 w-[49%] h-[53%] overflow-hidden rounded-md">
                                <Image
                                    src="/building4.png"
                                    alt="High-rise apartment building"
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}