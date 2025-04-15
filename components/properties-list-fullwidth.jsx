"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Camera, Video, MapPin, Bed, Bath, Square } from "lucide-react";
import { properties } from "../data/properties";

export default function PropertiesListFullwidth() {
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
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
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
    <div
      ref={sectionRef}
      className={`container mx-auto px-2 sm:px-4 md:px-6 py-4 sm:py-6 transition-all duration-500 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div
        className={`flex items-center text-sm mb-2 transition-all duration-500 ease-out delay-50 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <Link href="/" className="text-[#333333] hover:underline">
          Home
        </Link>
        <span className="mx-2 text-[#808080]">›</span>
        <span className="text-[#BB9627]">Properties List Fullwidth</span>
      </div>
      <div
        className={`px-4 sm:px-0 transition-all duration-500 ease-out delay-100 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h1
          className={`text-xl sm:text-2xl font-bold text-[#1d1d1f] mb-4 sm:mb-6 transition-all duration-500 ease-out delay-150 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          Properties List Fullwidth
        </h1>
        <div
          className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 sm:mb-6 transition-all duration-500 ease-out delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-sm text-[#666666]">
            1 to 6 out of 10 properties
          </div>
        </div>
        <div
          className={`grid grid-cols-1 gap-4 sm:gap-6 transition-all duration-500 ease-out delay-250 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {properties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              animationDelay={index === 0 ? 300 : 50 * (index + 1)}
            />
          ))}
        </div>
      </div>
      <div
        className={`flex justify-center mt-6 sm:mt-8 transition-all duration-500 ease-out delay-350 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="flex gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#BB9627] text-white text-sm">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-[#666666] text-sm hover:bg-gray-100">
            2
          </button>
        </div>
      </div>
    </div>
  );
}

function PropertyCard({ property, animationDelay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const slug = property.title.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
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
    <Link href={`/properties/${slug}`} className="block w-full">
      <div
        ref={cardRef}
        className={`flex flex-col md:flex-row border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all duration-500 ease-out h-full ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div
          className={`relative md:w-72 h-60 transition-all duration-500 ease-out delay-${
            animationDelay + 50
          } ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Image
            src={property.image || "/placeholder.svg"}
            alt={property.title}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-3 right-3 flex gap-1">
            <button className="w-15 h-8 bg-black bg-opacity-60 rounded-[20px] flex items-center justify-center gap-1">
              <Camera className="h-4 w-4 text-white" />
              <span className="text-white text-xs">12</span>
            </button>
            <button className="w-15 h-8 bg-black bg-opacity-60 rounded-[20px] flex items-center justify-center gap-1">
              <Video className="h-4 w-4 text-white" />
              <span className="text-white text-xs">3</span>
            </button>
          </div>
        </div>

        <div
          className={`flex-1 p-4 transition-all duration-500 ease-out delay-${
            animationDelay + 100
          } ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex justify-between items-start">
            <div>
              <div
                className={`flex gap-2 mb-2 flex-wrap transition-all duration-500 ease-out delay-${
                  animationDelay + 150
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {[
                  property.type,
                  ...(property.featured ? ["Featured"] : []),
                  ...(property.hot ? ["Hot"] : []),
                ].map((tag, index) => (
                  <span
                    key={index}
                    className={`text-xs px-2 py-1 rounded-full ${
                      tag === "For Rent"
                        ? "bg-[#BB9627] text-white"
                        : tag === "For Sale"
                        ? "bg-[#0196ff] text-white"
                        : tag === "Featured"
                        ? "bg-[#5a01ff] text-white"
                        : tag === "Hot"
                        ? "bg-[#dd3333] text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2
                className={`text-xl font-semibold text-[#1d1d1f] mt-2 transition-all duration-500 ease-out delay-${
                  animationDelay + 200
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                {property.title}
              </h2>
              <div
                className={`flex items-center text-sm text-[#666666] mt-3 transition-all duration-500 ease-out delay-${
                  animationDelay + 250
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <MapPin className="h-4 w-4 text-[#BB9627] mr-1 flex-shrink-0" />
                <span className="line-clamp-1">{property.location}</span>
              </div>
            </div>
            <div
              className={`text-right ml-4 flex-shrink-0 transition-all duration-500 ease-out delay-${
                animationDelay + 300
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {property.buildYear && (
                <div className="text-xs text-[#666666] mb-1">
                  Build {property.buildYear}
                </div>
              )}
              <div className="font-bold text-lg text-[#1d1d1f]">
                {property.price}
              </div>
              {property.priceType && (
                <div className="text-xs text-[#666666]">
                  {property.priceType}
                </div>
              )}
            </div>
          </div>
          <div
            className={`flex items-center gap-4 mt-3 flex-wrap transition-all duration-500 ease-out delay-${
              animationDelay + 350
            } ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {property.beds && (
              <div className="flex items-center text-sm text-[#666666]">
                <Bed className="h-4 w-4 text-[#BB9627] mr-1" />
                <span>{property.beds}</span>
              </div>
            )}
            {property.baths && (
              <div className="flex items-center text-sm text-[#666666]">
                <Bath className="h-4 w-4 text-[#BB9627] mr-1" />
                <span>{property.baths}</span>
              </div>
            )}
            <div className="flex items-center text-sm text-[#666666]">
              <Square className="h-4 w-4 text-[#BB9627] mr-1" />
              <span>{property.sqft}</span>
            </div>
          </div>
          <div
            className={`flex flex-col sm:flex-row justify-end gap-2 mt-4 transition-all duration-500 ease-out delay-${
              animationDelay + 400
            } ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <button className="px-4 sm:px-6 py-2 bg-[#183E70] text-white rounded-md text-sm font-medium w-full sm:w-auto">
              WhatsApp Us
            </button>
            <button className="px-4 sm:px-6 py-2 bg-[#BB9627] text-white rounded-md text-sm font-medium w-full sm:w-auto">
              Get a Call
            </button>
          </div>
          <div
            className={`text-xs text-[#666666] mt-4 sm:mt-5 transition-all duration-500 ease-out delay-${
              animationDelay + 450
            } ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Added: {property.addedDate}
          </div>
        </div>
      </div>
    </Link>
  );
}
