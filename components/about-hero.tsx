import Image from "next/image"

export default function RealEstateHero() {
    return (
        <div className="w-full max-w-6xl mx-auto p-6 md:p-8 bg-gradient-to-b from-gray-50 to-white">
            <div className="flex flex-col md:flex-row gap-20 items-center">
                {/* Left side - Image */}
                <div className="w-full md:w-1/2">
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
                        <Image
                            src="/about.png"
                            alt="Modern urban building with skyscrapers in the background"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                </div>
                
                {/* Right side - Content */}
                <div className="w-full md:w-1/2 space-y-4">
                    <div className="inline-block mb-2">
                        <div className="h-1 w-16 bg-green-600 mb-1"></div>
                        <div className="h-1 w-10 bg-green-800"></div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-green-800 leading-tight">
                        Expert Guidance, Curated Homes, Zero Hassle
                    </h2>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        Finding the perfect home shouldn't be overwhelming. At <span className="font-medium text-green-700">MindHabitat</span>, we simplify the process with expert
                        guidance tailored to your needs. Our team specializes in high-potential construction projects ensuring you
                        invest in a home with real value and future growth potential. With seamless assistance throughout the entire
                        buying-selling-renting process, we make your home-buying journey smooth, informed, and rewarding.
                    </p>
                    <button className="mt-2 px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg transition-colors duration-300 flex items-center space-x-2">
                        <span>Discover Homes</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}