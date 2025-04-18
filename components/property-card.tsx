"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image"
import { Heart, Share2, MapPin, Bed, Bath, Square } from "lucide-react"

interface PropertyCardProps {
    property: {
        id: number
        title: string
        location: string
        price: string
        priceType: string
        type: string
        featured: boolean
        hot: boolean
        image: string
        sqft: string
        beds: number | null
        baths: number | null
        addedDate: string
        buildYear: string | null
    }
    animationDelay?: number;
}

export default function PropertyCard({ property, animationDelay = 0 }: PropertyCardProps) {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div 
            ref={cardRef}
            className={`bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-1000 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
            <div className="flex flex-col md:flex-row">
                {/* Property Image */}
                <div className={`relative md:w-1/3 h-64 md:h-auto overflow-hidden transition-all duration-1000 ease-out delay-${animationDelay + 100} ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}>
                    <div className="w-full h-full transform transition-transform duration-300 hover:scale-105 hover:rounded-none">
                        <Image 
                            src={property.image || "/placeholder.svg"} 
                            alt={property.title} 
                            fill 
                            className="object-cover" 
                        />
                    </div>
                    <div className="absolute bottom-3 left-3 flex space-x-2">
                        <div className="bg-black bg-opacity-60 text-white text-xs px-1.5 py-1 rounded-md flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 13a3 3 0 11-6 0 3 3 0z"
                                />
                            </svg>
                            5
                        </div>
                        <div className="bg-black bg-opacity-60 text-white text-xs px-1.5 py-1 rounded-md flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                                />
                            </svg>
                            1
                        </div>
                    </div>
                </div>

                {/* Property Details */}
                <div className={`p-5 flex-1 flex flex-col transition-all duration-1000 ease-out delay-${animationDelay + 200} ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}>
                    <div className="flex-1">
                        {/* Tags */}
                        <div className={`flex flex-wrap gap-2 mb-3 transition-all duration-1000 ease-out delay-${animationDelay + 300} ${
                            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}>
                            <span
                                className={`text-xs font-medium px-2 py-1 rounded-full ${property.type === "For Rent" ? "bg-[#BB9627] text-white" : "bg-[#BB9627] text-purple-700"}`}
                            >
                                {property.type}
                            </span>

                            {property.featured && (
                                <span className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-100 text-indigo-700">
                                    Featured
                                </span>
                            )}

                            {property.hot && (
                                <span className="text-xs font-medium px-2 py-1 rounded-full bg-red-100 text-red-700">Hot</span>
                            )}
                        </div>

                        {/* Title */}
                        <h3 className={`text-xl font-semibold mb-2 transition-all duration-1000 ease-out delay-${animationDelay + 400} ${
                            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}>{property.title}</h3>

                        {/* Location */}
                        <div className={`flex items-start mb-4 transition-all duration-1000 ease-out delay-${animationDelay + 500} ${
                            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}>
                            <MapPin className="w-4 h-4 text-gray-500 mt-0.5 mr-1 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{property.location}</span>
                        </div>

                        {/* Features */}
                        <div className={`flex flex-wrap gap-4 mb-4 transition-all duration-1000 ease-out delay-${animationDelay + 600} ${
                            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}>
                            {property.beds && (
                                <div className="flex items-center">
                                    <Bed className="w-4 h-4 text-gray-500 mr-1" />
                                    <span className="text-sm text-gray-700">{property.beds}</span>
                                </div>
                            )}

                            {property.baths && (
                                <div className="flex items-center">
                                    <Bath className="w-4 h-4 text-gray-500 mr-1" />
                                    <span className="text-sm text-gray-700">{property.baths}</span>
                                </div>
                            )}

                            <div className="flex items-center">
                                <Square className="w-4 h-4 text-gray-500 mr-1" />
                                <span className="text-sm text-gray-700">{property.sqft}</span>
                            </div>
                        </div>

                        {/* Added date */}
                        <div className={`text-xs text-gray-500 mb-4 transition-all duration-1000 ease-out delay-${animationDelay + 700} ${
                            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}>Added: {property.addedDate}</div>
                    </div>

                    {/* Price and Action Buttons Container */}
                    <div className={`mt-auto transition-all duration-1000 ease-out delay-${animationDelay + 800} ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}>
                        {/* Price */}
                        <div className="mb-4">
                            <div className="flex items-baseline">
                                <span className="text-xl font-bold text-gray-900">{property.price}</span>
                                {property.priceType && <span className="ml-1 text-sm text-gray-600">{property.priceType}</span>}
                            </div>
                            {property.buildYear && <div className="text-xs text-gray-500">Build {property.buildYear}</div>}
                        </div>

                        {/* Action buttons */}
                        <div className="flex justify-end space-x-2">
                            <button className="bg-[#183E70] text-white text-lg font-semibold py-2 px-6 rounded-full shadow-md hover:bg-[#1EBB60] transition-all">
                                Whatsapp Us
                            </button>
                            <button className="bg-[#BB9632] text-white text-lg font-semibold py-2 px-6 rounded-full shadow-md hover:opacity-90 transition-all">
                                Get a Call
                            </button>
                        </div>
                    </div>

                    {/* Favorite and Share */}
                    <div className={`absolute top-5 right-5 flex space-x-2 transition-all duration-1000 ease-out delay-${animationDelay + 900} ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}>
                        <button className="text-gray-400 hover:text-red-500">
                            <Heart className="w-5 h-5" />
                        </button>
                        <button className="text-gray-400 hover:text-blue-500">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
