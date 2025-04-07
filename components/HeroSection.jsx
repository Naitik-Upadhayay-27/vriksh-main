"use client";
import Image from "next/image";
import Link from "next/link";
import Lenis from "lenis";
import { useState, useEffect } from "react";
import { FeaturedProperties } from "./feature-propertise";
import { Contact } from "lucide-react";
import { ContactForm } from "./contact-form";

const PropertyCard = ({ property }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded shadow">
      <div className="relative h-48 w-full">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-base font-medium">{property.title}</h3>
          <span className="font-bold">${property.price.toLocaleString()}</span>
        </div>
        <p className="text-xs text-gray-600 mt-1">{property.location}</p>
        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-green-500 text-white py-2 px-4 rounded text-sm">
            Whatsapp Us
          </button>
          <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded text-sm">
            Get a Call
          </button>
        </div>
      </div>
    </div>
  );
};

export default function HeroSection() {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });
  // Listen for the scroll event and log the event data
  lenis.on("scroll", (e) => {
    console.log(e);
  });

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
  const [currentSlide, setCurrentSlide] = useState(0); // Add this line

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
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? filteredProperties.length - 2 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === filteredProperties.length - 2 ? 0 : prevSlide + 1
    );
  };

  return (
    <section className="relative">
      {/* Hero Section */}
      <div className="relative h-[650px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent flex flex-col justify-center items-center text-white text-center px-4">
          <Image
            src="/home1.png"
            alt="Modern interior with wooden slats"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-extrabold mb-6 leading-tight max-w-4xl">
            Find. Invest. Thrive.
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl font-light font-serif">
            Find Your Perfect Home in Ahmedabad – Effortless, Reliable, and Made
            for You!
          </p>
        </div>
      </div>

      {/* Search Panel Section */}
      <div className="relative -mt-14 px-4 z-10">
        <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between">
            {/* Location Field */}
            <div className="w-full sm:flex-1 px-4 py-3 border-b sm:border-b-0 sm:border-r border-gray-100 flex items-center">
              <div className="text-blue-500 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <label className="block text-gray-400 text-[10px] sm:text-xs font-medium">
                  Location
                </label>
                <select className="w-full bg-transparent border-none focus:outline-none text-gray-800 font-medium text-xs sm:text-sm py-1 appearance-none">
                  <option>Select Area</option>
                  <option>Bodakdev</option>
                  <option>Satellite</option>
                  <option>Prahlad Nagar</option>
                </select>
              </div>
            </div>

            {/* Property Type Field */}
            <div className="w-full sm:flex-1 px-4 py-3 border-b sm:border-b-0 sm:border-r border-gray-100 flex items-center">
              <div className="text-blue-500 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <label className="block text-gray-400 text-[10px] sm:text-xs font-medium">
                  Property Type
                </label>
                <select className="w-full bg-transparent border-none focus:outline-none text-gray-800 font-medium text-xs sm:text-sm py-1 appearance-none">
                  <option>Choose Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Penthouse</option>
                </select>
              </div>
            </div>

            {/* Price Range Field */}
            <div className="w-full sm:flex-1 px-4 py-3 border-b sm:border-b-0 sm:border-r border-gray-100 flex items-center">
              <div className="text-blue-500 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <label className="block text-gray-400 text-[10px] sm:text-xs font-medium">
                  Price Range
                </label>
                <select className="w-full bg-transparent border-none focus:outline-none text-gray-800 font-medium text-xs sm:text-sm py-1 appearance-none">
                  <option>Price</option>
                  <option>₹50L - ₹1Cr</option>
                  <option>₹1Cr - ₹2Cr</option>
                  <option>₹2Cr+</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div className="w-full sm:w-auto py-3 px-4 flex justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg md:rounded-full w-full sm:w-10 md:w-12 h-10 sm:h-12 flex items-center justify-center transition-colors duration-300 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
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
                <span className="sm:hidden ml-2 text-sm">Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <FeaturedProperties />

      {/* Featured Properties Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto py-8 px-4 sm:px-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Our Featured <span className="text-blue-600">Exclusives</span>
            </h1>

            <div className="hidden md:block">
              <button
                className="text-sm hover:bg-blue-50 px-3 py-1.5 rounded-full transition-colors"
                onClick={() => setActiveTab("all")}
              >
                <span
                  className={`${
                    activeTab === "all"
                      ? "text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
                      : "text-gray-600"
                  }`}
                >
                  All
                </span>
              </button>
              <button
                className="text-sm hover:bg-blue-50 px-3 py-1.5 rounded-full transition-colors"
                onClick={() => setActiveTab("rent")}
              >
                <span
                  className={`${
                    activeTab === "rent"
                      ? "text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
                      : "text-gray-600"
                  }`}
                >
                  For Rent
                </span>
              </button>
              <button
                className="text-sm hover:bg-blue-50 px-3 py-1.5 rounded-full transition-colors"
                onClick={() => setActiveTab("sale")}
              >
                <span
                  className={`${
                    activeTab === "sale"
                      ? "text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
                      : "text-gray-600"
                  }`}
                >
                  For Sale
                </span>
              </button>
            </div>
          </div>

          {/* Mobile tabs */}
          <div className="flex md:hidden items-center space-x-6 mb-6 overflow-x-auto pb-2">
            <button
              className={`text-sm whitespace-nowrap px-3 py-1.5 rounded-full ${
                activeTab === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
            <button
              className={`text-sm whitespace-nowrap px-3 py-1.5 rounded-full ${
                activeTab === "rent"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
              onClick={() => setActiveTab("rent")}
            >
              For Rent
            </button>
            <button
              className={`text-sm whitespace-nowrap px-3 py-1.5 rounded-full ${
                activeTab === "sale"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
              onClick={() => setActiveTab("sale")}
            >
              For Sale
            </button>
          </div>

          {isClient && (
            <div className="relative">
              {/* Navigation buttons - desktop */}
              <button
                className="hidden md:flex absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-blue-50 transition-colors items-center justify-center"
                aria-label="Previous properties"
                onClick={handlePrevSlide}
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
                  className="text-blue-600"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* Desktop view: Grid layout */}
              <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>

              {/* Mobile view: Carousel with first card visible */}
              <div className="md:hidden">
                {/* First card always visible */}
                {filteredProperties.length > 0 && (
                  <div className="mb-6">
                    <PropertyCard property={filteredProperties[0]} />
                  </div>
                )}

                {/* Carousel for remaining cards */}
                <div className="relative">
                  <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 pb-4">
                    {filteredProperties.slice(1).map((property) => (
                      <div
                        key={property.id}
                        className="flex-shrink-0 w-full snap-center"
                      >
                        <PropertyCard property={property} />
                      </div>
                    ))}
                  </div>

                  {/* Mobile carousel indicators */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {filteredProperties.slice(1).map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                        }`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation buttons - desktop */}
              <button
                className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-blue-50 transition-colors items-center justify-center"
                aria-label="Next properties"
                onClick={handleNextSlide}
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
                  className="text-blue-600"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

              {/* Mobile swipe indicators */}
              <div className="flex md:hidden justify-center mt-4">
                <div className="text-xs text-gray-500">Swipe for more</div>
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
      `}</style>

      {/* Testimonial and Following Sections */}
      <section
        className="py-16 px-4"
        style={{ backgroundColor: "rgb(246, 249, 255)" }}
      >
        <div className="container mx-auto">
          <div className="mb-16 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Finding My Dream Home Was Seamless With Mindestate. Their
                Expertise And Guidance Made The Process Stress-Free. Thank You!
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto my-6"></div>
              <div className="flex justify-center mt-8">
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

          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              What's in Trending
            </h2>
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center transition-colors"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {trendingArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-800 text-lg mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <Link
                    href={article.link}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
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
        </div>
      </section>
    </section>
  );
}
