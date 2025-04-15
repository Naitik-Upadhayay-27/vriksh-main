// components/property-detail-complete.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  Check,
  Download,
  MapPin,
  Heart,
  Share2,
  ChevronDown,
  Camera,
  Video,
  Tag,
  ChevronLeft,
  ChevronRight,
  Bed,
  Bath,
  Square,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function PropertyDetailComplete({ property }) {
  const [activeTab, setActiveTab] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activePlace, setActivePlace] = useState("Hospital");
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [galleryCurrentSlide, setGalleryCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMainContentVisible, setIsMainContentVisible] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isSimilarPropertiesVisible, setIsSimilarPropertiesVisible] =
    useState(false);
  const sectionRef = useRef(null);
  const mainContentRef = useRef(null);
  const sidebarRef = useRef(null);
  const similarPropertiesRef = useRef(null);

  // Minimum distance for a swipe
  const minSwipeDistance = 50;

  // Sample images for the gallery
  const galleryImages = [
    "/about1.png",
    "/about3.png",
    "/about4.png",
    "/about5.png",
    "/about6.png",
    "/about1.png",
    "/about8.png",
    "/about9.png",
    "/about10.png",
  ];

  const similarProperties = [
    {
      id: 1,
      title: "Home in Merrick Way",
      location: "Merrick Way, Miami, FL 33134, USA",
      beds: 3,
      baths: 3,
      sqft: 4300,
      price: "$540,000",
      image: "/link2.png",
      type: "sale",
    },
    {
      id: 2,
      title: "Villa in Coral Gables",
      location: "Deering Bay Drive, Coral Gables, FL 33158, USA",
      beds: 3,
      baths: 3.5,
      sqft: 3500,
      price: "$825,000",
      image: "/link.png",
      type: "rent",
    },
    {
      id: 3,
      title: "Villa on Hollywood Boulevard",
      location: "Hatteras Lane, Hollywood, FL 33019, USA",
      beds: 3,
      baths: 4,
      sqft: 4530,
      price: "$740,000",
      image: "/link3.png",
      type: "sale",
    },
  ];

  const filteredProperties = similarProperties.filter((prop) => {
    if (activeTab === "all") return true;
    if (activeTab === "rent") return prop.type === "rent";
    if (activeTab === "sale") return prop.type === "sale";
    return true;
  });

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? filteredProperties.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === filteredProperties.length - 1 ? 0 : prev + 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setTouchEnd(e.touches[0].clientX);
    setIsDragging(true);
    setDragOffset(0);
    // Prevent default to stop screen scrolling
    e.preventDefault();
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.touches[0].clientX);
    const currentOffset = touchStart - e.touches[0].clientX;
    setDragOffset(currentOffset);
    // Prevent default to stop screen scrolling
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentSlide < filteredProperties.length - 1) {
      handleNextSlide();
    } else if (isRightSwipe && currentSlide > 0) {
      handlePrevSlide();
    } else {
      // Reset to current slide if swipe wasn't long enough
      setDragOffset(0);
    }

    setIsDragging(false);
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleGalleryTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setTouchEnd(e.touches[0].clientX);
    setIsDragging(true);
    setDragOffset(0);
    e.preventDefault();
    e.stopPropagation();
  };

  const handleGalleryTouchMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.touches[0].clientX);
    const currentOffset = touchStart - e.touches[0].clientX;
    setDragOffset(currentOffset);
    e.preventDefault();
    e.stopPropagation();
  };

  const handleGalleryTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && galleryCurrentSlide < galleryImages.length - 1) {
      setGalleryCurrentSlide((prev) => prev + 1);
    } else if (isRightSwipe && galleryCurrentSlide > 0) {
      setGalleryCurrentSlide((prev) => prev - 1);
    } else {
      setDragOffset(0);
    }

    setIsDragging(false);
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleGalleryPrev = () => {
    setGalleryCurrentSlide((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleGalleryNext = () => {
    setGalleryCurrentSlide((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

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

    const mainContentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMainContentVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const sidebarObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSidebarVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const similarPropertiesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSimilarPropertiesVisible(true);
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
    if (mainContentRef.current) {
      mainContentObserver.observe(mainContentRef.current);
    }
    if (sidebarRef.current) {
      sidebarObserver.observe(sidebarRef.current);
    }
    if (similarPropertiesRef.current) {
      similarPropertiesObserver.observe(similarPropertiesRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (mainContentRef.current) {
        mainContentObserver.unobserve(mainContentRef.current);
      }
      if (sidebarRef.current) {
        sidebarObserver.unobserve(sidebarRef.current);
      }
      if (similarPropertiesRef.current) {
        similarPropertiesObserver.unobserve(similarPropertiesRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col text-black w-[114%] ml-[-7%] p-0 m-0 overflow-hidden"
    >
      {/* Image Gallery Overlay */}
      {showGallery && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop with blur and dark overlay */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setShowGallery(false)}
          />

          {/* Gallery Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setShowGallery(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handleGalleryPrev}
              className="absolute left-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={handleGalleryNext}
              className="absolute right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image Carousel */}
            <div
              className="w-full max-w-4xl mx-auto px-4"
              onTouchStart={handleGalleryTouchStart}
              onTouchMove={handleGalleryTouchMove}
              onTouchEnd={handleGalleryTouchEnd}
              onTouchCancel={handleGalleryTouchEnd}
              style={{
                touchAction: "pan-x",
                WebkitOverflowScrolling: "touch",
                overscrollBehavior: "contain",
              }}
            >
              <div
                className={`flex transition-transform ${
                  isDragging ? "duration-0" : "duration-300"
                } ease-out`}
                style={{
                  transform: `translateX(calc(-${
                    galleryCurrentSlide * 100
                  }% - ${isDragging ? dragOffset : 0}px))`,
                }}
              >
                {galleryImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative w-full h-[80vh]">
                      <Image
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                        fill
                        className="object-contain"
                        priority={index === galleryCurrentSlide}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setGalleryCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    galleryCurrentSlide === index
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Image Gallery Section */}
      <div
        className={`w-full p-0 mb-6 md:mb-14 transition-all duration-500 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-2 px-4 md:px-0">
          {/* Main Image */}
          <div
            className={`md:col-span-9 relative group transition-all duration-500 ease-out delay-100 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative w-full h-[240px] sm:h-[400px] md:h-[520px] overflow-hidden rounded-t-xl md:rounded-xl">
              <Image
                src={property.image}
                alt={property.title}
                fill
                priority
                quality={100}
                sizes="(max-width: 768px) 100vw, 75vw"
                className="object-cover object-center"
                style={{
                  imageRendering: "high-quality",
                  backfaceVisibility: "hidden",
                }}
                unoptimized
              />
              <div className="absolute bottom-4 left-4 flex gap-2">
                <button className="w-12 h-8 bg-black bg-opacity-60 rounded-[20px] flex items-center justify-center gap-1">
                  <Camera className="h-4 w-4 text-white" />
                  <span className="text-white text-xs">12</span>
                </button>
                <button className="w-12 h-8 bg-black bg-opacity-60 rounded-[20px] flex items-center justify-center gap-1">
                  <Video className="h-4 w-4 text-white" />
                  <span className="text-white text-xs">3</span>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Thumbnail Gallery */}
          <div
            className={`hidden md:grid md:col-span-3 grid-cols-1 gap-2 transition-all duration-500 ease-out delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative w-full h-[258px] overflow-hidden rounded-xl">
              <Image
                src="/about1.png"
                alt="Living room"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div
              className="relative w-full h-[258px] overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setShowGallery(true)}
            >
              <Image
                src="/about2.png"
                alt="Interior design"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <span className="text-white text-sm font-medium">+10</span>
              </div>
            </div>
          </div>

          {/* Mobile Thumbnail Gallery */}
          <div
            className={`block md:hidden transition-all duration-500 ease-out delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="grid grid-cols-5 gap-1">
              {[1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className="relative w-full h-[80px] overflow-hidden"
                >
                  <Image
                    src={index === 5 ? "/about2.png" : "/about1.png"}
                    alt={`Thumbnail ${index}`}
                    fill
                    className="object-cover"
                  />
                  {index === 5 && (
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black/50 cursor-pointer"
                      onClick={() => setShowGallery(true)}
                    >
                      <span className="text-white text-sm font-medium">
                        +10
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`px-4 md:px-0 transition-all duration-500 ease-out delay-400 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-2">
              {property.title}
            </h1>
            <div className="flex items-center text-sm text-[#666666]">
              <MapPin className="h-4 w-4 text-[#BB9627] mr-1" />
              <span>{property.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <Heart className="h-5 w-5 text-[#666666]" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <Share2 className="h-5 w-5 text-[#666666]" />
            </button>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 transition-all duration-500 ease-out delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center gap-2">
            <Bed className="h-5 w-5 text-[#BB9627]" />
            <span className="text-sm text-[#666666]">{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="h-5 w-5 text-[#BB9627]" />
            <span className="text-sm text-[#666666]">
              {property.baths} Baths
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Square className="h-5 w-5 text-[#BB9627]" />
            <span className="text-sm text-[#666666]">{property.sqft}</span>
          </div>
        </div>

        <div
          className={`flex flex-col md:flex-row justify-between items-start gap-4 mb-6 transition-all duration-500 ease-out delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div>
            <div className="text-2xl font-bold text-[#1d1d1f]">
              {property.price}
            </div>
            {property.priceType && (
              <div className="text-sm text-[#666666]">{property.priceType}</div>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <button className="px-6 py-2 bg-[#183E70] text-white rounded-md text-sm font-medium w-full md:w-auto">
              WhatsApp Us
            </button>
            <button className="px-6 py-2 bg-[#BB9627] text-white rounded-md text-sm font-medium w-full md:w-auto">
              Get a Call
            </button>
          </div>
        </div>
      </div>

      <div className="grid px-4 sm:px-8 grid-cols-1 md:grid-cols-3 gap-4">
        {/* Main Content */}
        <div
          ref={mainContentRef}
          className={`md:col-span-2 space-y-2 sm:space-y-4 transition-all duration-500 ease-out ${
            isMainContentVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {/* Title and Basic Info */}
          <div className="bg-white p-4 rounded-lg">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h1 className="text-xl sm:text-2xl font-bold text-black mb-2">
                  {property.title}
                </h1>
                <div className="flex items-center text-black">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm sm:text-base text-gray-600">
                    {property.location}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">
                  (100 People Recommended)
                </div>
              </div>
              <div className="mt-4 sm:mt-0">
                <div className="text-2xl sm:text-xl font-bold text-[#BB9627]">
                  {property.price}
                </div>
                <div className="text-sm text-gray-500">
                  {property.priceType
                    ? `(${property.priceType})`
                    : "(Price Only)"}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Badge className="bg-[#BB9627]/10 text-[#BB9627] hover:bg-[#183E70]/20 rounded-sm">
                    {property.type.split(" ")[1].toUpperCase()}
                  </Badge>
                  <Button
                    size="sm"
                    className="bg-[#BB9627] hover:bg-[#BB9627]/80"
                  >
                    <span className="text-xs">Available</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Special Price and Offers */}
          <div
            className={`bg-white p-4 rounded-lg space-y-2 order-1 sm:order-none transition-all duration-500 ease-out delay-800 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-[#BB9627]" />
              <span className="text-sm font-medium text-black">
                Special Price
              </span>
              <span className="text-sm text-gray-600">
                Get extra 15% off (price inclusive of discount)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-[#BB9627]" />
              <span className="text-sm font-medium text-black">Bank Offer</span>
              <span className="text-sm text-gray-600">
                10% instant discount on VISA Cards
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-[#BB9627]" />
              <span className="text-sm font-medium text-black">
                No cost EMI $149/month.
              </span>
              <span className="text-sm text-gray-600">
                Standard EMI also available
              </span>
            </div>
          </div>

          {/* Download Button */}
          <div
            className={`flex items-center justify-center ml-4 sm:justify-start gap-2 mt-2 order-2 sm:order-none transition-all duration-500 ease-out delay-900 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <Button className="w-full sm:w-auto rounded-full px-15 shadow-sm hover:shadow bg-[#BB9627] hover:bg-[#BB9627]/80 text-white">
              Download
            </Button>
          </div>

          {/* Property Specs */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 pl-4 gap-2 border-t border-gray-200 py-3 my-2 transition-all duration-500 ease-out delay-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-1">
              <div className="text-xs sm:text-sm text-gray-600">Rooms:</div>
              <div className="text-sm sm:text-base font-medium text-gray-700">
                {property.beds ? property.beds + 2 : "N/A"}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xs sm:text-sm text-gray-600">Beds:</div>
              <div className="text-sm sm:text-base font-medium text-gray-700">
                {property.beds || "N/A"}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xs sm:text-sm text-gray-600">Area:</div>
              <div className="text-sm sm:text-base font-medium text-gray-700">
                {property.sqft}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xs sm:text-sm text-gray-600">Baths:</div>
              <div className="text-sm sm:text-base font-medium text-gray-700">
                {property.baths || "N/A"}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xs sm:text-sm text-gray-600">
                Car Garage:
              </div>
              <div className="text-sm sm:text-base font-medium text-gray-700">
                Yes (5 Capacity)
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xs sm:text-sm text-gray-600">Swimming:</div>
              <div className="text-sm sm:text-base font-medium text-gray-700">
                Yes (1 Large)
              </div>
            </div>
          </div>

          {/* Description */}
          <div
            className={`bg-white p-4 rounded-lg space-y-2 transition-all duration-500 ease-out delay-1100 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-xl font-bold text-black">Description</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Maecenas egestas quam et volutpat bibendum metus vulputate platea
              eleifend sed integer dictum ultricies consectetur nunc vivamus a.
              Eu nulla justo magna lacinia purus sodales scelerisque.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Praesent lectus facilisi tempor ridiculus arcu pharetra non
              tellus. Torquent nisl tempor. Magnis mollis lobortis nam, montes
              ut consequat sed amet nullam.
            </p>
          </div>

          {/* Highlights */}
          <div
            className={`bg-white p-4 mb-8 rounded-lg transition-all duration-500 ease-out delay-1200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex gap-8">
              <h3 className="text-base font-sm text-zinc-600 w-32">
                Highlights:
              </h3>
              <div className="flex-1 grid grid-cols-1 gap-3">
                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-1 rounded-full">
                    <Check className="h-3 w-3 text-[#BB9627]" />
                  </div>
                  <span className="text-gray-600 text-sm">Regular Fit</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-1 rounded-full">
                    <Check className="h-3 w-3 text-[#BB9627]" />
                  </div>
                  <span className="text-gray-600 text-sm">Full sleeves</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-1 rounded-full">
                    <Check className="h-3 w-3 text-[#BB9627]" />
                  </div>
                  <span className="text-gray-600 text-sm">Machine wash</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-1 rounded-full">
                    <Check className="h-3 w-3 text-[#BB9627]" />
                  </div>
                  <span className="text-gray-600 text-sm">
                    Premium security
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* More Information */}
          <section
            className={`bg-white p-4 rounded-lg mb-4 transition-all duration-500 ease-out delay-1300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-xl font-semibold mb-6">More Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex flex-row sm:flex-row items-center sm:items-center">
                <span className="text-base sm:text-sm font-semibold text-[#6d7175] w-1/2 sm:w-40 mb-0 sm:mb-0">
                  Age :
                </span>
                <span className="text-base sm:text-sm text-gray-500 ml-2">
                  {property.buildYear
                    ? `${
                        new Date().getFullYear() - parseInt(property.buildYear)
                      } Years`
                    : "N/A"}
                </span>
              </div>
              <div className="flex flex-row sm:flex-row items-center sm:items-center">
                <span className="text-base sm:text-sm font-semibold text-[#6d7175] w-1/2 sm:w-40 mb-0 sm:mb-0">
                  Type :
                </span>
                <span className="text-base sm:text-sm text-gray-500 ml-2">
                  {property.type.split(" ")[1]}
                </span>
              </div>
              <div className="flex flex-row sm:flex-row items-center sm:items-center">
                <span className="text-base sm:text-sm font-semibold text-[#6d7175] w-1/2 sm:w-40 mb-0 sm:mb-0">
                  Installment Facility :
                </span>
                <span className="text-base sm:text-sm text-gray-500 ml-2">
                  Yes
                </span>
              </div>
              <div className="flex flex-row sm:flex-row items-center sm:items-center">
                <span className="text-base sm:text-sm font-semibold text-[#6d7175] w-1/2 sm:w-40 mb-0 sm:mb-0">
                  Insurance :
                </span>
                <span className="text-base sm:text-sm text-gray-500 ml-2">
                  Yes
                </span>
              </div>
              <div className="flex flex-row sm:flex-row items-center sm:items-center">
                <span className="text-base sm:text-sm font-semibold text-[#6d7175] w-1/2 sm:w-40 mb-0 sm:mb-0">
                  3rd Party :
                </span>
                <span className="text-base sm:text-sm text-gray-500 ml-2">
                  No
                </span>
              </div>
              <div className="flex flex-row sm:flex-row items-center sm:items-center">
                <span className="text-base sm:text-sm font-semibold text-[#6d7175] w-1/2 sm:w-40 mb-0 sm:mb-0">
                  Swimming Pool :
                </span>
                <span className="text-base sm:text-sm text-gray-500 ml-2">
                  Yes
                </span>
              </div>
              <div className="flex flex-row sm:flex-row items-center sm:items-center">
                <span className="text-base sm:text-sm font-semibold text-[#6d7175] w-1/2 sm:w-40 mb-0 sm:mb-0">
                  Garden & Trail :
                </span>
                <span className="text-base sm:text-sm text-gray-500 ml-2">
                  2400sqft
                </span>
              </div>
              <div className="flex flex-row sm:flex-row items-center sm:items-center">
                <span className="text-base sm:text-sm font-semibold text-[#6d7175] w-1/2 sm:w-40 mb-0 sm:mb-0">
                  Total Floor :
                </span>
                <span className="text-base sm:text-sm text-gray-500 ml-2">
                  17 Floor
                </span>
              </div>
              <div className="flex flex-row sm:flex-row items-center sm:items-center">
                <span className="text-base sm:text-sm font-semibold text-[#6d7175] w-1/2 sm:w-40 mb-0 sm:mb-0">
                  Security :
                </span>
                <span className="text-base sm:text-sm text-gray-500 ml-2">
                  3 Step Security
                </span>
              </div>
              <div className="flex flex-row sm:flex-row items-center sm:items-center">
                <span className="text-base sm:text-sm font-semibold text-[#6d7175] w-1/2 sm:w-40 mb-0 sm:mb-0">
                  Elevator :
                </span>
                <span className="text-base sm:text-sm text-gray-500 ml-2">
                  2 Large
                </span>
              </div>
              <div className="flex flex-row sm:flex-row items-center sm:items-center">
                <span className="text-base sm:text-sm font-semibold text-[#6d7175] w-1/2 sm:w-40 mb-0 sm:mb-0">
                  Driving Capacity :
                </span>
                <span className="text-base sm:text-sm text-gray-500 ml-2">
                  20 People
                </span>
              </div>
              <div className="flex flex-row sm:flex-row items-center sm:items-center">
                <span className="text-base sm:text-sm font-semibold text-[#6d7175] w-1/2 sm:w-40 mb-0 sm:mb-0">
                  Exit :
                </span>
                <span className="text-base sm:text-sm text-gray-500 ml-2">
                  3 Exit Gate
                </span>
              </div>
              <div className="flex flex-row sm:flex-row items-center sm:items-center">
                <span className="text-base sm:text-sm font-semibold text-[#6d7175] w-1/2 sm:w-40 mb-0 sm:mb-0">
                  Fire Place :
                </span>
                <span className="text-base sm:text-sm text-gray-500 ml-2">
                  Yes
                </span>
              </div>
              <div className="flex flex-row sm:flex-row items-center sm:items-center">
                <span className="text-base sm:text-sm font-semibold text-[#6d7175] w-1/2 sm:w-40 mb-0 sm:mb-0">
                  Heating System :
                </span>
                <span className="text-base sm:text-sm text-gray-500 ml-2">
                  Floor Heating
                </span>
              </div>
            </div>
          </section>

          {/* Property Summary */}
          <section
            className={`bg-white p-4 rounded-lg mb-4 transition-all duration-500 ease-out delay-1400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-xl font-semibold mb-6">Property Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-0">
              <div className="flex items-center whitespace-nowrap border-t sm:border-t border-b sm:border-b border-gray-200 py-4">
                <span className="text-[#6d7175] font-semibold inline-block w-32">
                  Property Id :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  LA{property.id}8227
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap sm:border-t border-b sm:border-b border-gray-200 py-4">
                <span className="text-[#6d7175] font-semibold inline-block w-32">
                  Listing Type :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  For Sale
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap border-b border-gray-200 py-4">
                <span className="text-[#6d7175] font-semibold inline-block w-32">
                  Property Type :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  Appartment
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap border-b border-gray-200 py-4">
                <span className="text-[#6d7175] font-semibold inline-block w-32">
                  Current Owner :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  Green Developers LTD
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap border-b border-gray-200 py-4">
                <span className="text-[#6d7175] font-semibold inline-block w-32">
                  Insurance :
                </span>
                <span className="inline-block ml-4 text-gray-500">Yes</span>
              </div>
              <div className="flex items-center whitespace-nowrap border-b border-gray-200 py-4">
                <span className="text-[#6d7175] font-semibold inline-block w-32">
                  Architecture :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  Nova Socity
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap border-b border-gray-200 py-4">
                <span className="text-[#6d7175] font-semibold inline-block w-32">
                  Total Floor :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  10 Story Building
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap border-b border-gray-200 py-4">
                <span className="text-[#6d7175] font-semibold inline-block w-32">
                  Year of Built :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  2008 - 2012
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap border-b border-gray-200 py-4">
                <span className="text-[#6d7175] font-semibold inline-block w-32">
                  Furniture Type :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  High Class
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap border-b border-gray-200 py-4">
                <span className="text-[#6d7175] font-semibold inline-block w-32">
                  Payment Way :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  Installment / Cash
                </span>
              </div>
            </div>
          </section>

          {/* Features */}
          <section
            className={`bg-white p-4 rounded-lg mb-4 transition-all duration-500 ease-out delay-1500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-xl font-semibold mb-6">Property Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4">
              {[
                "Fitness Lab and Room",
                "Swimming Pools",
                "Parking Facility",
                "Green Park View",
                "Playground Include",
                "Garden",
                "Kitchen Furniture",
                "Fire Security",
                "High Class Door",
                "Store Room",
                "Marble Floor",
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <svg
                    className="w-4 h-4 text-[#BB9627] mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-gray-500">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Floor Plans */}
          <section
            className={`bg-white py-3 px-4 rounded-lg transition-all duration-500 ease-out delay-1600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-xl font-semibold mb-6">Floor Plans</h2>
            <div className="space-y-2">
              <div className="flex items-center py-3 px-4 bg-[#F8F5F0]  rounded-md transition-colors duration-300">
                <span className="text-zinc-800">Floor Plans [ 4200 sqft ]</span>
              </div>
              <div className="flex items-center py-3 px-4 bg-[#F8F5F0] rounded-md transition-colors duration-300">
                <span className="text-zinc-800">Graps Plans [ 5200 sqft ]</span>
              </div>
              <div className="flex items-center py-3 px-4 bg-[#F8F5F0]  rounded-md transition-colors duration-300">
                <span className="text-zinc-800">
                  Garden Plans [ 4200 sqft ]
                </span>
              </div>
            </div>
          </section>

          {/* Nearby Places */}
          <section
            className={`bg-white py-3 px-4 rounded-lg transition-all duration-500 ease-out delay-1700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-xl font-semibold mb-6">Nearby Places</h2>
            <div className="mb-6">
              <div className="grid grid-cols-4 gap-2 sm:hidden">
                <button
                  onClick={() => setActivePlace("Hospital")}
                  className={`w-full px-2 py-2 font-medium text-xs whitespace-nowrap rounded-full ${
                    activePlace === "Hospital"
                      ? "text-[#BB9627] bg-[#BB9627]/10"
                      : "text-gray-500 bg-gray-100"
                  }`}
                >
                  Hospital
                </button>
                <button
                  onClick={() => setActivePlace("Shopping")}
                  className={`w-full px-2 py-2 font-medium text-xs whitespace-nowrap rounded-full ${
                    activePlace === "Shopping"
                      ? "text-[#BB9627] bg-[#BB9627]/10"
                      : "text-gray-500 bg-gray-100"
                  }`}
                >
                  Shopping
                </button>
                <button
                  onClick={() => setActivePlace("School")}
                  className={`w-full px-2 py-2 font-medium text-xs whitespace-nowrap rounded-full ${
                    activePlace === "School"
                      ? "text-[#BB9627] bg-[#BB9627]/10"
                      : "text-gray-500 bg-gray-100"
                  }`}
                >
                  School
                </button>
                <button
                  onClick={() => setActivePlace("Restaurant")}
                  className={`w-full px-2 py-2 font-medium text-xs whitespace-nowrap rounded-full ${
                    activePlace === "Restaurant"
                      ? "text-[#BB9627] bg-[#BB9627]/10"
                      : "text-gray-500 bg-gray-100"
                  }`}
                >
                  Restaurant
                </button>
              </div>
              <div className="hidden sm:flex px-6">
                <button className="px-6 py-2 text-[#BB9627] border-b-2 border-[#BB9627] font-medium transition-colors duration-300">
                  Hospital
                </button>
                <button className="px-6 py-2 text-gray-500 hover:text-[#BB9627] border-b-2 border-transparent hover:border-[#BB9627] transition-colors duration-300">
                  Shopping
                </button>
                <button className="px-6 py-2 text-gray-500 hover:text-[#BB9627] border-b-2 border-transparent hover:border-[#BB9627] transition-colors duration-300">
                  School
                </button>
                <button className="px-6 py-2 text-gray-500 hover:text-[#BB9627] border-b-2 border-transparent hover:border-[#BB9627] transition-colors duration-300">
                  Restaurant
                </button>
              </div>
            </div>
            <div className="px-0 sm:px-6">
              <div className="hidden sm:grid grid-cols-12 mb-4">
                <div className="col-span-5 text-sm font-medium text-[#6d7175]">
                  Name
                </div>
                <div className="col-span-3 text-sm font-medium text-[#6d7175]">
                  Distance
                </div>
                <div className="col-span-4 text-sm font-medium text-[#6d7175]">
                  Type
                </div>
              </div>
              <div className="flex flex-col sm:grid sm:grid-cols-12 py-3 border-b border-gray-100">
                <div className="text-gray-900 sm:text-gray-500 font-medium sm:font-normal mb-1 sm:mb-0 sm:col-span-5">
                  Massachusetts General Hospital
                </div>
                <div className="text-gray-500 text-sm sm:text-base mb-1 sm:mb-0 sm:col-span-3">
                  23.7 km
                </div>
                <div className="text-gray-500 text-sm sm:text-base sm:col-span-4">
                  Medical College
                </div>
              </div>
              <div className="flex flex-col sm:grid sm:grid-cols-12 py-3 border-b border-gray-100">
                <div className="text-gray-900 sm:text-gray-500 font-medium sm:font-normal mb-1 sm:mb-0 sm:col-span-5">
                  Langone Medical Center
                </div>
                <div className="text-gray-500 text-sm sm:text-base mb-1 sm:mb-0 sm:col-span-3">
                  13.2 km
                </div>
                <div className="text-gray-500 text-sm sm:text-base sm:col-span-4">
                  Hart Hospital
                </div>
              </div>
              <div className="flex flex-col sm:grid sm:grid-cols-12 py-3 border-b border-gray-100">
                <div className="text-gray-900 sm:text-gray-500 font-medium sm:font-normal mb-1 sm:mb-0 sm:col-span-5">
                  Mount Sinai Hospital
                </div>
                <div className="text-gray-500 text-sm sm:text-base mb-1 sm:mb-0 sm:col-span-3">
                  58.0 km
                </div>
                <div className="text-gray-500 text-sm sm:text-base sm:col-span-4">
                  Eye Hospital
                </div>
              </div>
            </div>
            <style jsx>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .hide-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
          </section>
        </div>

        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`md:col-span-1 space-y-4 transition-all duration-500 ease-out ${
            isSidebarVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          {/* Agent Info */}
          <div className="border border-gray-200 shadow-sm rounded-lg p-4 space-y-4 bg-white">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-800">Listed By</h3>
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="/person.png"
                    alt="Luann McLawhorn"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-base font-bold text-gray-800">
                    Luann McLawhorn
                  </div>
                  <div className="text-sm text-gray-500">
                    +1(811) 634 5121 info@website.com
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 text-gray-600 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-1 focus:ring-[#BB9627]/50 placeholder-gray-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 text-gray-600 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-1 focus:ring-[#BB9627]/50 placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 text-gray-600 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-1 focus:ring-[#BB9627]/50 placeholder-gray-400"
              />
              <textarea
                rows="6"
                className="w-full px-4 py-3 text-gray-600 bg-gray-50 border-0 rounded-md focus:outline-none focus:ring-1 focus:ring-[#BB9627]/50 resize-none"
              ></textarea>

              <button className="w-full py-2.5 bg-[#BB9632] text-white font-medium rounded-md hover:bg-[#BB9632]/90 transition-colors duration-300">
                Send Message
              </button>
            </div>
          </div>

          {/* Search Property Box */}
          <div className="border border-gray-200 shadow-sm rounded-lg p-4 space-y-2 bg-white">
            <input
              type="text"
              placeholder="Enter Keyword..."
              className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#BB9627]"
            />

            <div className="relative">
              <select className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-[#BB9627] text-gray-500">
                <option value="">Property Types</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600 pointer-events-none" />
            </div>

            <div className="relative">
              <select className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-[#BB9627] text-gray-500">
                <option value="">Property Status</option>
                <option value="for-sale">For Sale</option>
                <option value="for-rent">For Rent</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>

            <input
              type="text"
              placeholder="Location"
              className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#BB9627]"
            />

            <div className="relative">
              <select className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-[#BB9627] text-gray-500">
                <option value="">Price</option>
                <option value="0-100000">$0 - $100,000</option>
                <option value="100000-200000">$100,000 - $200,000</option>
                <option value="200000-300000">$200,000 - $300,000</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-[#BB9627] text-gray-500">
                <option value="">Bedrooms</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-[#BB9627] text-gray-500">
                <option value="">Bathrooms</option>
                <option value="1">1 Bathroom</option>
                <option value="2">2 Bathrooms</option>
                <option value="3">3 Bathrooms</option>
                <option value="4">4+ Bathrooms</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>

            <div className="relative">
              <select className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-[#BB9627] text-gray-500">
                <option value="">Garage</option>
                <option value="1">1 Car</option>
                <option value="2">2 Cars</option>
                <option value="3">3+ Cars</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Min Area"
                className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#BB9627]"
              />
              <input
                type="text"
                placeholder="Max Area"
                className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#BB9627]"
              />
            </div>

            <div className="relative">
              <button className="w-full px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-500 bg-white flex items-center justify-between hover:border-[#BB9627] transition-colors">
                <span>Advanced</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-600"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>
            </div>

            <button className="w-full py-2.5 bg-[#BB9632] text-white font-medium rounded-md hover:bg-[#BB9632]/90 transition-colors duration-300">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Similar Properties */}
      <section
        ref={similarPropertiesRef}
        className={`bg-white py-12 w-full relative transition-all duration-500 ease-out ${
          isSimilarPropertiesVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
        style={{
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
          width: "100vw",
        }}
      >
        <div className="max-w-[2000px] mx-auto px-4 sm:px-8 relative">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 ml-2 sm:ml-10">
            Similar Properties
          </h2>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-8 justify-start ml-2 sm:ml-10">
            <button
              onClick={() => setActiveTab("all")}
              className={`text-sm px-1 pb-4 border-b-2 ${
                activeTab === "all"
                  ? "border-[#BB9632] text-[#BB9632]"
                  : "border-transparent text-gray-600"
              } font-medium flex items-center gap-2`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  activeTab === "all"
                    ? "bg-[#BB9632]"
                    : "border border-gray-300"
                }`}
              ></div>
              All
            </button>
            <button
              onClick={() => setActiveTab("rent")}
              className={`text-sm px-1 pb-4 border-b-2 ${
                activeTab === "rent"
                  ? "border-[#BB9632] text-[#BB9632]"
                  : "border-transparent text-gray-600"
              } font-medium ml-8 flex items-center gap-2`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  activeTab === "rent"
                    ? "bg-[#BB9632]"
                    : "border border-gray-300"
                }`}
              ></div>
              For Rent
            </button>
            <button
              onClick={() => setActiveTab("sale")}
              className={`text-sm px-1 pb-4 border-b-2 ${
                activeTab === "sale"
                  ? "border-[#BB9632] text-[#BB9632]"
                  : "border-transparent text-gray-600"
              } font-medium ml-8 flex items-center gap-2`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  activeTab === "sale"
                    ? "bg-[#BB9632]"
                    : "border border-gray-300"
                }`}
              ></div>
              For Sale
            </button>
          </div>

          {/* Navigation Arrows - Desktop */}
          <button
            onClick={handlePrevSlide}
            className="hidden sm:block absolute left-16 top-1/2 p-4 rounded-md border border-gray-200 bg-white shadow-lg hover:bg-gray-50 transition-colors transform -translate-y-1/2 z-10"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={handleNextSlide}
            className="hidden sm:block absolute right-16 top-1/2 p-4 rounded-md border border-gray-200 bg-white shadow-lg hover:bg-gray-50 transition-colors transform -translate-y-1/2 z-10"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Mobile Carousel */}
          <div className="relative block sm:hidden">
            <div
              className="overflow-hidden touch-pan-x"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
              style={{
                touchAction: "pan-x",
                WebkitOverflowScrolling: "touch",
                overscrollBehavior: "contain",
              }}
            >
              {/* Navigation Buttons - Centered */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-2 z-10 pointer-events-none">
                <button
                  onClick={handlePrevSlide}
                  className="p-2 rounded-full bg-white border border-gray-200 shadow-md pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentSlide === 0}
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="p-2 rounded-full bg-white border border-gray-200 shadow-md pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentSlide === filteredProperties.length - 1}
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              <div
                className={`flex transition-transform ${
                  isDragging ? "duration-0" : "duration-300"
                } ease-out will-change-transform`}
                style={{
                  transform: `translateX(calc(-${currentSlide * 100}% - ${
                    isDragging ? dragOffset : 0
                  }px))`,
                  touchAction: "pan-x",
                  WebkitOverflowScrolling: "touch",
                  overscrollBehavior: "contain",
                }}
              >
                {filteredProperties.map((prop) => (
                  <div key={prop.id} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white rounded-lg overflow-hidden border border-gray-100 transform transition-transform duration-300 hover:scale-[1.02]">
                      <div className="relative h-64">
                        <Image
                          src={prop.image}
                          alt={prop.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {prop.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-2">
                          {prop.location}
                        </p>
                        <div className="flex items-center gap-6 mt-4">
                          <div className="flex items-center gap-1">
                            <span className="text-sm text-gray-600">
                              {prop.beds}
                            </span>
                            <span className="text-sm text-gray-500">bed</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-sm text-gray-600">
                              {prop.baths}
                            </span>
                            <span className="text-sm text-gray-500">bath</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-sm text-gray-600">
                              {prop.sqft}
                            </span>
                            <span className="text-sm text-gray-500">sq ft</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-6">
                          <span className="text-[#BB9632] font-semibold text-lg">
                            {prop.price}
                          </span>
                          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {filteredProperties.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 transform ${
                    currentSlide === index
                      ? "bg-[#BB9632] scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-1 justify-items-center">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 w-full max-w-[400px]"
              >
                <div className="relative h-64">
                  <Image
                    src={prop.image}
                    alt={prop.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{prop.location}</p>
                  <div className="flex items-center gap-6 mt-4">
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-gray-600">{prop.beds}</span>
                      <span className="text-sm text-gray-500">bed</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-gray-600">
                        {prop.baths}
                      </span>
                      <span className="text-sm text-gray-500">bath</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm text-gray-600">{prop.sqft}</span>
                      <span className="text-sm text-gray-500">sq ft</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-[#BB9632] font-semibold text-lg">
                      {prop.price}
                    </span>
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
