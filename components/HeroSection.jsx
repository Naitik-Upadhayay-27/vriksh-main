"use client";
import Image from "next/image";
import Link from "next/link";
import Lenis from "lenis";
import { useState, useEffect, useRef } from "react";
import { FeaturedProperties } from "./feature-propertise";

const PropertyCard = ({ property }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded shadow max-w-5xl mx-auto bg-white w-full">
      <div className="relative h-52 sm:h-64 w-full">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-base sm:text-lg font-medium truncate mr-2">
            {property.title}
          </h3>
          <span className="font-bold whitespace-nowrap text-base sm:text-lg">
            ${property.price.toLocaleString()}
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-2 truncate">
          {property.location}
        </p>
        <div className="flex gap-3 mt-5 sm:mt-6">
          <button className="flex-1 bg-[#183E70] text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded text-xs sm:text-sm whitespace-nowrap">
            Whatsapp Us
          </button>
          <button className="flex-1 bg-[#BB9632] text-white py-2 sm:py-2.5 px-4 sm:px-6 rounded text-sm">
            Get a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default function HeroSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPropertiesVisible, setIsPropertiesVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isTestimonialVisible, setIsTestimonialVisible] = useState(false);
  const propertiesRef = useRef(null);
  const contactRef = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.07,
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

  useEffect(() => {
    const propertiesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPropertiesVisible(true);
        }
      },
      {
        threshold: 0.08,
      }
    );

    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContactVisible(true);
        }
      },
      {
        threshold: 0.06,
      }
    );

    if (propertiesRef.current) {
      propertiesObserver.observe(propertiesRef.current);
    }

    if (contactRef.current) {
      contactObserver.observe(contactRef.current);
    }

    return () => {
      if (propertiesRef.current) {
        propertiesObserver.unobserve(propertiesRef.current);
      }
      if (contactRef.current) {
        contactObserver.unobserve(contactRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const testimonialObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTestimonialVisible(true);
        }
      },
      {
        threshold: 0.07,
      }
    );

    if (testimonialRef.current) {
      testimonialObserver.observe(testimonialRef.current);
    }

    return () => {
      if (testimonialRef.current) {
        testimonialObserver.unobserve(testimonialRef.current);
      }
    };
  }, []);

  const trendingArticles = [
    {
      id: 1,
      image: "/t1.png",
      title:
        "As The Real Estate Market Heats Up, Here's How First-time Buyers Can Keep Their Cool",
      link: "/blog/first-time-buyers-guide",
    },
    {
      id: 2,
      image: "/t2.png",
      title:
        "Real Estate Market Heats Up, Here's How First-time Buyers Can Keep Their Cool",
      link: "/blog/market-insights",
    },
    {
      id: 3,
      image: "/t3.png",
      title:
        "Here's How First-time Buyers Can Keep Their Cool As The Real Estate Market Heats Up",
      link: "/blog/buyer-strategies",
    },
  ];

  const properties = [
    {
      id: 1,
      title: "Home in Merrick Way",
      price: 540000,
      location: "Merrick Way, Miami, FL 33134, USA",
      image: "/image.png",
      type: "sale",
    },
    {
      id: 2,
      title: "Home in Merrick Way",
      price: 540000,
      location: "Merrick Way, Miami, FL 33134, USA",
      image: "/image.png",
      type: "rent",
    },
    {
      id: 3,
      title: "Home in Merrick Way",
      price: 540000,
      location: "Merrick Way, Miami, FL 33134, USA",
      image: "/image.png",
      type: "sale",
    },
  ];

  const faqItems = [
    {
      id: "where",
      question: "Where can I watch?",
      answer:
        "Nam venenatis aenean fermentum massa fusce faucibus nulla. Orci, dictumst nec aliquam id ullamcorper venenatis. Fermentum sulla cras pharetra fringilla. Iaculis ullamcorper lorem purus quis consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentium natoque amet amet, tincidunt ultricies et. Et nam mornuis sit nullam diam tincidunt condimentum nullam.",
    },
    {
      id: "tempus",
      question: "Tempus magna risus interdum ultricies sed urna?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce commodo, magna nec ultricies sollicitudin, velit nunc mollis dui, vel mattis dui dolor sit amet magna.",
    },
    {
      id: "augue",
      question: "Augue in nibh urna volutpat mattis?",
      answer:
        "Nullam sodales, magna at elementum ultricies, sem magna suscipit eros, eu commodo lorem libero nec purus. Proin sagittis magna non lectus tempus.",
    },
    {
      id: "egestas",
      question: "Eu egestas sed sed posuere ultrices?",
      answer:
        "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla.",
    },
    {
      id: "elementum",
      question: "Elementum facilisi aliquam, nisi, orci vulputate?",
      answer:
        "Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [activeTab, setActiveTab] = useState("all");
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [isClient, setIsClient] = useState(false);
  const [openQuestion, setOpenQuestion] = useState("where");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentArticleSlide, setCurrentArticleSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeOffset, setSwipeOffset] = useState(0);

  useEffect(() => {
    setIsClient(true);
    const filtered =
      activeTab === "all"
        ? properties
        : properties.filter(
            (property) => property.type === activeTab.toLowerCase()
          );
    setFilteredProperties(filtered);
  }, [activeTab]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const toggleQuestion = (id) => {
    if (openQuestion === id) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(id);
    }
  };

  const handlePrevSlide = () => {
    const container = document.querySelector(".overflow-x-auto");
    if (container) {
      const newIndex =
        currentSlide === 0 ? filteredProperties.length - 1 : currentSlide - 1;
      container.scrollTo({
        left: newIndex * container.clientWidth,
        behavior: "smooth",
      });
      setCurrentSlide(newIndex);
    }
  };

  const handleNextSlide = () => {
    const container = document.querySelector(".overflow-x-auto");
    if (container) {
      const newIndex =
        currentSlide === filteredProperties.length - 1 ? 0 : currentSlide + 1;
      container.scrollTo({
        left: newIndex * container.clientWidth,
        behavior: "smooth",
      });
      setCurrentSlide(newIndex);
    }
  };

  const handlePrevArticleSlide = () => {
    setCurrentArticleSlide((prevSlide) =>
      prevSlide === 0 ? trendingArticles.length - 1 : prevSlide - 1
    );
  };

  const handleNextArticleSlide = () => {
    setCurrentArticleSlide((prevSlide) =>
      prevSlide === trendingArticles.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(true);
  };

  const handleTouchMove = (e) => {
    if (!isSwiping) return;
    setTouchEnd(e.targetTouches[0].clientX);
    const diff = touchStart - e.targetTouches[0].clientX;
    setSwipeOffset(diff);
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNextSlide();
      } else {
        handlePrevSlide();
      }
    }
    setSwipeOffset(0);
  };

  return (
    <div ref={sectionRef}>
      <div className="relative h-[400px] sm:h-[500px] md:h-[650px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex flex-col justify-center items-center text-white text-center px-4">
          <Image
            src="/home1.png"
            alt="Modern interior with wooden slats"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div
          className={`absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 flex flex-col justify-center items-center text-white text-center px-4 transform transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h1
            className={`text-5xl md:text-6xl font-serif font-extrabold mb-6 leading-tight max-w-4xl transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            Find. Invest. Thrive.
          </h1>
          <p
            className={`text-xl md:text-2xl mb-8 max-w-2xl font-light font-serif transform transition-all duration-1000 ease-out delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            Find Your Perfect Home in Ahmedabad – Effortless, Reliable, and Made
            for You!
          </p>
        </div>
      </div>

      {/* Search Panel Section */}
      <div
        className={`relative -mt-14 px-4 z-10 transform transition-all duration-1000 ease-out delay-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <div className="w-full max-w-5xl mx-auto bg-white md:bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 backdrop-blur-sm bg-black/30 md:backdrop-blur-none md:bg-transparent">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between">
            {/* Location Field */}
            <div
              className={`w-full sm:flex-1 px-6 py-4 flex items-center transform transition-all duration-1000 ease-out delay-400 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="flex-1 relative">
                <label className="block text-zinc-900 text-[10px] sm:text-lg font-medium">
                  Location
                </label>
                <div className="relative">
                  <select className="w-full bg-transparent border-none focus:outline-none text-gray-800 font-medium text-xs sm:text-sm py-1 appearance-none">
                    <option className="text-gray-900">Select Area</option>
                    <option>Bodakdev</option>
                    <option>Satellite</option>
                    <option>Prahlad Nagar</option>
                  </select>
                  <div className="absolute right-0 top-[0%] -translate-y-1/2">
                    <Image
                      src="/Down 2.png"
                      alt="Dropdown"
                      width={20}
                      height={20}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div
              className={`hidden sm:block w-px h-12 bg-gray-400 my-auto transform transition-all duration-1000 ease-out delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            ></div>

            {/* Property Type Field */}
            <div
              className={`w-full sm:flex-1 px-6 py-4 flex items-center transform transition-all duration-1000 ease-out delay-600 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="flex-1 relative">
                <label className="block text-zinc-900 text-[10px] sm:text-lg font-medium">
                  Property Type
                </label>
                <div className="relative">
                  <select className="w-full bg-transparent border-none focus:outline-none text-gray-800 font-medium text-xs sm:text-sm py-1 appearance-none">
                    <option className="text-gray-900">
                      Choose Property Type
                    </option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>Penthouse</option>
                  </select>
                  <div className="absolute right-0 top-[0%] -translate-y-1/2">
                    <Image
                      src="/Down 2.png"
                      alt="Dropdown"
                      width={20}
                      height={20}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div
              className={`hidden sm:block w-px h-12 bg-gray-400 my-auto transform transition-all duration-1000 ease-out delay-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            ></div>

            {/* Price Range Field */}
            <div
              className={`w-full sm:flex-1 px-6 py-4 flex items-center transform transition-all duration-1000 ease-out delay-800 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="flex-1 relative">
                <label className="block text-zinc-900 text-[10px] sm:text-lg font-medium">
                  Price Range
                </label>
                <div className="relative">
                  <select className="w-full bg-transparent border-none focus:outline-none text-gray-800 font-medium text-xs sm:text-sm py-1 appearance-none">
                    <option className="text-gray-200">
                      Choose Price Range
                    </option>
                    <option>₹50L - ₹1Cr</option>
                    <option>₹1Cr - ₹2Cr</option>
                    <option>₹2Cr+</option>
                  </select>
                  <div className="absolute right-0 top-[0%] -translate-y-1/2">
                    <Image
                      src="/Down 2.png"
                      alt="Dropdown"
                      width={20}
                      height={20}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div
              className={`w-full sm:w-auto py-3 px-4 flex justify-center transform transition-all duration-1000 ease-out delay-900 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <button className="w-full sm:w-12 h-12 bg-[#BB9632] text-white rounded-lg flex items-center justify-center transition-colors duration-300 shadow-md hover:bg-[#A68529]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <FeaturedProperties />

      {/* Featured Properties Section */}
      <section
        ref={propertiesRef}
        className={`py-8 md:py-16 px-4 transform transition-all duration-1000 ease-out ${
          isPropertiesVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
      >
        <div className="container mx-auto py-4 md:py-8 px-4 sm:px-6">
          <div
            className={`flex flex-col justify-between items-left mb-8 transform transition-all duration-1000 ease-out delay-200 ${
              isPropertiesVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h1 className="text-2xl md:text-5xl mb-5 font-bold text-gray-900">
              Our featured exclusives
            </h1>
            <div
              className={`hidden mt-8 md:flex md:flex-row md:items-center md:space-x-6 border-b border-gray-200 relative transform transition-all duration-1000 ease-out delay-400 ${
                isPropertiesVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <button
                className="text-sm relative px-3 pb-4 rounded-full transition-colors group flex items-center gap-2"
                onClick={() => setActiveTab("all")}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    activeTab === "all"
                      ? "bg-[#BB9632]"
                      : "bg-transparent border border-gray-300"
                  }`}
                ></div>
                <span className="relative">
                  <span
                    className={`${
                      activeTab === "all"
                        ? "text-[#BB9632] font-bold text-base"
                        : "text-gray-600 text-base"
                    }`}
                  >
                    All
                  </span>
                  <span
                    className={`absolute -bottom-4 left-0 w-full h-0.5 bg-[#BB9632] transform origin-left transition-transform duration-300 ease-out
                      ${activeTab === "all" ? "scale-x-100" : "scale-x-0"}`}
                  ></span>
                </span>
              </button>
              <button
                className="text-sm relative px-3 pb-4 rounded-full transition-colors group flex items-center gap-2"
                onClick={() => setActiveTab("rent")}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    activeTab === "rent"
                      ? "bg-[#BB9632]"
                      : "bg-transparent border border-gray-300"
                  }`}
                ></div>
                <span className="relative">
                  <span
                    className={`${
                      activeTab === "rent"
                        ? "text-[#BB9632] font-bold text-base"
                        : "text-gray-600 text-base"
                    }`}
                  >
                    For Rent
                  </span>
                  <span
                    className={`absolute -bottom-4 left-0 w-full h-0.5 bg-[#BB9632] transform origin-left transition-transform duration-300 ease-out
                      ${activeTab === "rent" ? "scale-x-100" : "scale-x-0"}`}
                  ></span>
                </span>
              </button>
              <button
                className="text-sm relative px-3 pb-4 rounded-full transition-colors group flex items-center gap-2"
                onClick={() => setActiveTab("sale")}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    activeTab === "sale"
                      ? "bg-[#BB9632]"
                      : "bg-transparent border border-gray-300"
                  }`}
                ></div>
                <span className="relative">
                  <span
                    className={`${
                      activeTab === "sale"
                        ? "text-[#BB9632] font-bold text-base"
                        : "text-gray-600 text-base"
                    }`}
                  >
                    For Sale
                  </span>
                  <span
                    className={`absolute -bottom-4 left-0 w-full h-0.5 bg-[#BB9632] transform origin-left transition-transform duration-300 ease-out
                      ${activeTab === "sale" ? "scale-x-100" : "scale-x-0"}`}
                  ></span>
                </span>
              </button>
            </div>
          </div>

          {/* Mobile tabs */}
          <div
            className={`flex md:hidden items-center space-x-6 mb-6 overflow-x-auto pb-2 transform transition-all duration-1000 ease-out delay-600 ${
              isPropertiesVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <button
              className={`text-sm relative px-3 pb-4 rounded-full transition-colors group flex items-center gap-2`}
              onClick={() => setActiveTab("all")}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  activeTab === "all"
                    ? "bg-[#BB9632]"
                    : "bg-transparent border border-gray-300"
                }`}
              ></div>
              <span className="relative">
                <span
                  className={`text-base ${
                    activeTab === "all"
                      ? "text-[#BB9632] font-bold"
                      : "text-gray-600"
                  }`}
                >
                  All
                </span>
                <span
                  className={`absolute -bottom-4 left-0 w-full h-0.5 bg-[#BB9632] transform origin-left transition-transform duration-300 ease-out
                  ${activeTab === "all" ? "scale-x-100" : "scale-x-0"}`}
                ></span>
              </span>
            </button>
            <button
              className={`text-sm relative px-3 pb-4 rounded-full transition-colors group flex items-center gap-2`}
              onClick={() => setActiveTab("rent")}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  activeTab === "rent"
                    ? "bg-[#BB9632]"
                    : "bg-transparent border border-gray-300"
                }`}
              ></div>
              <span className="relative">
                <span
                  className={`text-base ${
                    activeTab === "rent"
                      ? "text-[#BB9632] font-bold"
                      : "text-gray-600"
                  }`}
                >
                  For Rent
                </span>
                <span
                  className={`absolute -bottom-4 left-0 w-full h-0.5 bg-[#BB9632] transform origin-left transition-transform duration-300 ease-out
                  ${activeTab === "rent" ? "scale-x-100" : "scale-x-0"}`}
                ></span>
              </span>
            </button>
            <button
              className={`text-sm relative px-3 pb-4 rounded-full transition-colors group flex items-center gap-2`}
              onClick={() => setActiveTab("sale")}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  activeTab === "sale"
                    ? "bg-[#BB9632]"
                    : "bg-transparent border border-gray-300"
                }`}
              ></div>
              <span className="relative">
                <span
                  className={`text-base ${
                    activeTab === "sale"
                      ? "text-[#BB9632] font-bold"
                      : "text-gray-600"
                  }`}
                >
                  For Sale
                </span>
                <span
                  className={`absolute -bottom-4 left-0 w-full h-0.5 bg-[#BB9632] transform origin-left transition-transform duration-300 ease-out
                  ${activeTab === "sale" ? "scale-x-100" : "scale-x-0"}`}
                ></span>
              </span>
            </button>
          </div>

          {isClient && (
            <div
              className={`relative transform transition-all duration-1000 ease-out delay-800 ${
                isPropertiesVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              {/* Mobile view: Carousel */}
              <div className="md:hidden">
                <div className="relative px-0 overflow-hidden">
                  <div
                    className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{
                      touchAction: "pan-x",
                      WebkitOverflowScrolling: "touch",
                      overscrollBehavior: "contain",
                      willChange: "transform",
                      transform: `translateX(${swipeOffset}px)`,
                      transition: isSwiping
                        ? "none"
                        : "transform 0.3s ease-out",
                    }}
                  >
                    {filteredProperties.map((property) => (
                      <div
                        key={property.id}
                        className="flex-shrink-0 w-[84.5vw] snap-center"
                        style={{
                          transform: `translateX(${
                            isSwiping ? swipeOffset : 0
                          }px)`,
                          transition: isSwiping
                            ? "none"
                            : "transform 0.3s ease-out",
                        }}
                      >
                        <div className="w-full h-full">
                          <PropertyCard property={property} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile Navigation Buttons */}
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-2 z-10">
                    <button
                      onClick={handlePrevSlide}
                      className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                      disabled={currentSlide === 0}
                    >
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
                        className="text-[#BB9632]"
                      >
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    <button
                      onClick={handleNextSlide}
                      className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                      disabled={currentSlide === filteredProperties.length - 1}
                    >
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
                        className="text-[#BB9632]"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </div>

                  {/* Mobile carousel indicators */}
                  <div className="flex justify-center mt-4 space-x-1.5">
                    {filteredProperties.map((_, index) => (
                      <button
                        key={index}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                          currentSlide === index
                            ? "bg-[#BB9632] scale-125"
                            : "bg-gray-300"
                        }`}
                        onClick={() => {
                          const container =
                            document.querySelector(".overflow-x-auto");
                          container.scrollTo({
                            left: index * container.clientWidth,
                            behavior: "smooth",
                          });
                          setCurrentSlide(index);
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop view: Grid layout */}
              <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Add this CSS to your global styles or component */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .touch-none {
          touch-action: none;
        }
        .will-change-transform {
          will-change: transform;
        }
      `}</style>

      {/* Testimonial and Following Sections */}
      <section
        ref={testimonialRef}
        className={`py-16 px-4 bg-[#FFFAF4] transform transition-all duration-1000 ease-out ${
          isTestimonialVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
      >
        <div className="container mx-auto">
          <div
            className={`mb-16 relative transform transition-all duration-1000 ease-out delay-200 ${
              isTestimonialVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Finding My Dream Home Was Seamless With Mindestate. Their
                Expertise And Guidance Made The Process Stress-Free. Thank You!
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto my-6"></div>
              <div
                className={`flex justify-center mt-8 transform transition-all duration-1000 ease-out delay-400 ${
                  isTestimonialVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
              >
                <div className="flex items-center bg-white rounded-lg shadow-sm px-4 py-2 border border-gray-100">
                  <Image
                    src="/google.png"
                    alt="Google Rating"
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <div className="flex flex-col items-start">
                    <div className="flex items-center">
                      <span className="font-bold text-lg text-gray-800 mr-2">
                        4.8
                      </span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">
                      Total of 142 reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`flex justify-between items-center mb-8 transform transition-all duration-1000 ease-out delay-600 ${
              isTestimonialVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              What's in Trending
            </h2>
            <Link
              href="/blog"
              className="text-[#BB9632] hover:text-blue-700 font-medium flex items-center transition-colors"
            >
              View All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          <div
            className={`relative transform transition-all duration-1000 ease-out delay-800 ${
              isTestimonialVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            {/* Mobile Carousel */}
            <div className="md:hidden overflow-hidden touch-none">
              <div
                className="flex transition-transform duration-300 ease-in-out will-change-transform"
                style={{
                  transform: `translateX(-${currentArticleSlide * 100}%)`,
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {trendingArticles.map((article) => (
                  <div key={article.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-[#FFFAF4] rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg">
                      <div className="relative h-64 w-full overflow-hidden">
                        <div className="w-full h-full transform transition-transform duration-300 hover:scale-95">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-gray-800 text-lg mb-3 line-clamp-2">
                          {article.title}
                        </h3>
                        <Link
                          href={article.link}
                          className="inline-flex items-center text-[#BB9632] font-medium hover:text-[#183E70] transition-colors"
                        >
                          Read More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-3 gap-6">
              {trendingArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-[#FFFAF4] rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <div className="w-full h-full transform transition-transform duration-300 hover:scale-95">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-800 text-lg mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <Link
                      href={article.link}
                      className="inline-flex items-center text-[#BB9632] font-medium hover:text-[#183E70] transition-colors"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="md:hidden flex justify-between items-center absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4">
              <button
                onClick={handlePrevArticleSlide}
                className="bg-white/80 text-[#BB9632] p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                aria-label="Previous article"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={handleNextArticleSlide}
                className="bg-white/80 text-[#BB9632] p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                aria-label="Next article"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile carousel indicators */}
            <div className="md:hidden flex justify-center mt-4 space-x-1.5">
              {trendingArticles.map((_, index) => (
                <button
                  key={index}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                    currentArticleSlide === index
                      ? "bg-[#BB9632] scale-125"
                      : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentArticleSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section
        ref={contactRef}
        className={`py-4 md:py-16 pb-8 md:pb-28 px-0 relative mb-2 md:mb-8 transform transition-all duration-1000 ease-out ${
          isContactVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
      >
        <div className="container flex flex-col mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            {/* Social Media Buttons - Mobile Only */}
            <div
              className={`md:hidden flex gap-3 self-end -mb-8 w-full justify-end transform transition-all duration-1000 ease-out delay-200 ${
                isContactVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <a
                href="#"
                className="w-12 sm:w-14 md:w-16 h-10 sm:h-12 md:h-14 rounded-full  bg-white flex items-center justify-center text-[#BB9632] hover:bg-gray-100 transition-colors border border-[#BB9632] shadow-md hover:shadow-lg"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5  sm:w-6 sm:h-6 md:w-7 md:h-7"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="w-12 sm:w-14 md:w-16 h-10 sm:h-12 md:h-14 rounded-full bg-white flex items-center justify-center text-[#BB9632] hover:bg-gray-100 transition-colors border border-[#BB9632] shadow-md hover:shadow-lg"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
            <div
              className={`w-full md:w-auto transform transition-all duration-1000 ease-out delay-400 ${
                isContactVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <h2 className="text-xl md:text-2xl">Get started</h2>
              <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 md:mt-8 font-semibold">
                Get in touch with us. We're here to assist you.
              </h1>
            </div>
          </div>
          {/* Social Media Buttons - Desktop Only */}
          <div
            className={`hidden md:flex absolute right-8 top-1/3 flex-col gap-3 transform transition-all duration-1000 ease-out delay-600 ${
              isContactVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#BB9632] hover:bg-gray-100 transition-colors border border-[#BB9632] shadow-md hover:shadow-lg"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#BB9632] hover:bg-gray-100 transition-colors border border-[#BB9632] shadow-md hover:shadow-lg"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
          {/* structure of form  */}
          <div
            className={`flex flex-col md:flex-row justify-between gap-3 mt-5 transform transition-all duration-1000 ease-out delay-800 ${
              isContactVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="w-full md:w-1/3 py-3 md:py-5 px-4 border-b border-gray-400">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full text-zinc-900 font-medium border-none focus:outline-none bg-transparent"
              />
            </div>
            <div className="w-full md:w-1/3 py-3 md:py-5 px-4 border-b border-gray-400">
              <input
                type="text"
                placeholder="Email Address"
                className="w-full text-zinc-900 font-medium border-none focus:outline-none bg-transparent"
              />
            </div>
            <div className="w-full md:w-1/3 py-3 md:py-5 px-4 border-b border-gray-400">
              <input
                type="text"
                placeholder="Phone Number(Optional)"
                className="w-full text-zinc-900 font-medium border-none focus:outline-none bg-transparent"
              />
            </div>
          </div>
          <div
            className={`mt-5 transform transition-all duration-1000 ease-out delay-1000 ${
              isContactVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <textarea
              placeholder="Message"
              className="w-full min-h-[120px] px-4 py-3 border-b border-gray-400 resize-none focus:outline-none focus:border-[#BB9632] transition-colors placeholder-gray-500 bg-transparent text-base"
              rows={4}
            />
          </div>
          <div
            className={`mt-6 md:mt-8 transform transition-all duration-1000 ease-out delay-1200 ${
              isContactVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <button
              type="submit"
              className="w-[90%] md:w-auto whitespace-nowrap bg-[#BB9632] text-white px-6 py-3 rounded-3xl hover:bg-[#A68529] transition-colors font-medium mx-auto md:mx-0 block"
            >
              Leave us a Message <span className="ml-3">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
