import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

/**
 * FeaturedProperties component displays a section with company description and property images
 *
 * @returns A React component showcasing featured properties with descriptive text
 */
export function FeaturedProperties() {
    return (
        <section className="pt-8 sm:pt-12 pb-12 sm:pb-24 px-4 mt-8 bg-transparent">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
                    <div className="w-full lg:w-2/5  px-5 py-15 rounded-xl">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
                            Your Trusted Gateway to Ahmedabad's Finest Homes
                        </h2>
                        <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                            Mindsestate is a dedicated real estate consultancy focused on bringing Ahmedabad's most promising under-construction residential projects to discerning homebuyers. We simplify the home-buying process with expert market insights, personalized assistance, and a commitment to transparency.
                        </p>
                        <button className="border-2 border-blue-600 text-blue-600 font-medium rounded-full px-6 sm:px-8 py-2 sm:py-3 inline-flex items-center text-xs sm:text-sm hover:bg-blue-50 transition-all duration-300 shadow-sm">
                            Read More <span className="ml-2">→</span>
                        </button>
                    </div>

                    {/* Image Grid - Hidden on small screens */}
                    <div className="hidden lg:block lg:w-1/2">
                        <div className="relative w-full h-[500px] lg:h-[600px]">
                            {/* Top left image - Large */}
                            <div className="absolute top-0 left-0 w-[49%] h-[58%] overflow-hidden rounded-md">
                                <img
                                    src="/building1.png"
                                    alt="Residential building"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Top right image - Small */}
                            <div className="absolute top-0 right-0 w-[49%] h-[45%] overflow-hidden rounded-md">
                                <img
                                    src="/building1.png"
                                    alt="Modern apartment complex"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Bottom left image - Small */}
                            <div className="absolute bottom-0 left-0 w-[49%] h-[40%] overflow-hidden rounded-md">
                                <img
                                    src="/building1.png"
                                    alt="Luxury residential complex"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Bottom right image - Large */}
                            <div className="absolute bottom-0 right-0 w-[49%] h-[53%] overflow-hidden rounded-md">
                                <img
                                    src="/building1.png"
                                    alt="High-rise apartment building"
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