import React, { JSX } from "react"
import Image from "next/image"


interface FeaturedPropertiesAboutProps {}

export const FeaturedPropertiesAbout: React.FC<FeaturedPropertiesAboutProps> = (): JSX.Element => {
    return (
        <section className="pt-6 sm:pt-8 md:pt-12 pb-8 sm:pb-12 md:pb-24 px-4 sm:px-6 md:px-8 -mt-7 bg-white">
            <div className="w-full max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12">
                    <div className="w-full lg:w-2/5 px-4 sm:px-5 py-8 sm:py-12 md:py-15 rounded-xl">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
                            Your Gateway to Ahmedabad's Best Upcoming Homes
                        </h2>
                        <p className="text-zinc-900 mb-4 sm:mb-6 md:mb-8 leading-relaxed text-base sm:text-lg">
                        Mindestate brings you the finest under-construction homes from Ahmedabad's most reputed builders. With deep local market knowledge, expert insights, and personalized guidance, we make your property search effortless and rewarding. Invest in Ahmedabad's growing future with confidence.
                        </p>
                    </div>

                    {/* Image Grid - Responsive for all screens */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                            {/* Top left image - Large */}
                            <div className="absolute top-0 left-0 w-[49%] h-[58%] overflow-hidden rounded-md">
                                <Image
                                    src="/building1.png"
                                    alt="Residential building"
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Top right image - Small */}
                            <div className="absolute top-0 right-0 w-[49%] h-[45%] overflow-hidden rounded-md">
                                <Image
                                    src="/building2.png"
                                    alt="Modern apartment complex"
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Bottom left image - Small */}
                            <div className="absolute bottom-0 left-0 w-[49%] h-[40%] overflow-hidden rounded-md">
                                <Image
                                    src="/building3.png"
                                    alt="Luxury residential complex"
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Bottom right image - Large */}
                            <div className="absolute bottom-0 right-0 w-[49%] h-[53%] overflow-hidden rounded-md">
                                <Image
                                    src="/building4.png"
                                    alt="High-rise apartment building"
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}