// components/property-detail-complete.jsx
import Image from "next/image";
import Link from "next/link";
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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function PropertyDetailComplete({ property }) {
  return (
    <div className="flex flex-col text-black w-[114%] ml-[-7%] p-0 m-0 overflow-hidden">
      {/* Image Gallery Section */}
      <div className="w-full p-0 mb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-2">
          {/* Main Image - Takes more width (9/12 columns) */}
          <div className="md:col-span-9 relative group">
            <div className="relative w-full h-[400px] md:h-[520px] overflow-hidden rounded-xl">
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

          {/* Thumbnail Gallery - Takes 3/12 columns */}
          <div className="md:col-span-3 grid grid-cols-1 gap-2">
            <div className="relative w-full h-[258px] overflow-hidden rounded-xl">
              <Image
                src="/about1.png"
                alt="Living room"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative w-full h-[258px] overflow-hidden rounded-xl">
              <Image
                src="/about2.png"
                alt="Interior design"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 px-4 py-2 rounded-full">
                  <span className="text-gray-800 text-xl font-medium">10+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid px-8 grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          {/* Title and Basic Info */}
          <div className="bg-white p-6 -ml-6 rounded-lg ">
            <Badge className="bg-[#BB9627]/10 text-[#BB9627] hover:bg-[#183E70]/20 rounded-sm">
              {property.type.split(" ")[1].toUpperCase()}
            </Badge>
            <div className="flex flex-wrap justify-between items-start mt-2">
              <div>
                <h1 className="text-2xl font-bold text-black">
                  {property.title}
                </h1>
                <div className="flex items-center text-black mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{property.location}</span>
                </div>
                <div className="text-sm text-black mt-1">
                  (100 People Recommended)
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-[#BB9627]">
                  {property.price}
                </div>
                <div className="text-sm text-black">
                  {property.priceType
                    ? `(${property.priceType})`
                    : "(Price Only)"}
                </div>
                <Button
                  size="sm"
                  className="mt-2 bg-[#BB9627] hover:bg-[#BB9627]/80"
                >
                  <span className="text-xs">Contact</span>
                </Button>
              </div>
            </div>
          </div>
          {/* Offers */}
          <div className="bg-white p-6 rounded-lg -mt-12 space-y-2">
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-[#BB9627] mr-1" />
              <span className="font-medium text-black">Special Price</span>
              <span className="text-black">
                Get extra 15% off (price inclusive of discount)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-[#BB9627] mr-1" />
              <span className="font-medium text-black">Bank Offer</span>
              <span className="text-black">
                10% instant discount on VISA Cards
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-[#BB9627] mr-1" />
              <span className="font-medium text-black">
                No cost EMI $149/month.
              </span>
              <span className="text-black">Standard EMI also available</span>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <div className="p-2 bg-[#F8F5F0] rounded-lg hover:bg-[#BB9627]/80 group transition-colors duration-300">
              <Download className="h-5 w-5 text-[#BB9627] group-hover:text-white transition-colors duration-300" />
            </div>
            <Button className="rounded-full px-15 shadow-sm hover:shadow bg-[#BB9627] hover:bg-[#BB9627]/80 text-white">
              Download
            </Button>
          </div>
          {/* Property Specs */}
          <div className="grid grid-cols-3 gap-4 border-t border-gray-200 py-6 my-6">
            <div className="flex items-center gap-2">
              <div className="text-sm text-gray-600">Rooms:</div>
              <div className="text-base text-gray-700">
                {property.beds ? property.beds + 2 : "N/A"}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-sm text-gray-600">Beds:</div>
              <div className="text-base text-gray-700">
                {property.beds || "N/A"}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-sm text-gray-600">Area:</div>
              <div className="text-base text-gray-700">{property.sqft}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-sm text-gray-600">Baths:</div>
              <div className="text-base text-gray-700">
                {property.baths || "N/A"}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-sm text-gray-600">Car Garage:</div>
              <div className="text-base text-gray-700">Yes (5 Capacity)</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-sm text-gray-600">Swimming:</div>
              <div className="text-base text-gray-700">Yes (1 Large)</div>
            </div>
          </div>
          {/* Description */}
          <div className="bg-white  px-6 pl-0 rounded-lg space-y-4">
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
          <div className="bg-white mb-15 px-6 pl-0 rounded-lg">
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
          <section className="bg-white -ml-8 px-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-6">More Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
              <div className="flex items-center whitespace-nowrap">
                <span className="text-[#6d7175] inline-block w-40">Age :</span>
                <span className="inline-block ml-4 text-gray-500">
                  {property.buildYear
                    ? `${
                        new Date().getFullYear() - parseInt(property.buildYear)
                      } Years`
                    : "N/A"}
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap">
                <span className="text-[#6d7175] inline-block w-40">Type :</span>
                <span className="inline-block ml-4 text-gray-500">
                  {property.type.split(" ")[1]}
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap">
                <span className="text-[#6d7175] inline-block w-40">
                  Installment Facility :
                </span>
                <span className="inline-block ml-4 text-gray-500">Yes</span>
              </div>
              <div className="flex items-center whitespace-nowrap">
                <span className="text-[#6d7175] inline-block w-40">
                  Insurance :
                </span>
                <span className="inline-block ml-4 text-gray-500">Yes</span>
              </div>
              <div className="flex items-center whitespace-nowrap">
                <span className="text-[#6d7175] inline-block w-40">
                  3rd Party :
                </span>
                <span className="inline-block ml-4 text-gray-500">No</span>
              </div>
              <div className="flex items-center whitespace-nowrap">
                <span className="text-[#6d7175] inline-block w-40">
                  Swimming Pool :
                </span>
                <span className="inline-block ml-4 text-gray-500">Yes</span>
              </div>
              <div className="flex items-center whitespace-nowrap">
                <span className="text-[#6d7175] inline-block w-40">
                  Garden & Trail :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  2400sqft
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap">
                <span className="text-[#6d7175] inline-block w-40">
                  Total Floor :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  17 Floor
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap">
                <span className="text-[#6d7175] inline-block w-40">
                  Security :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  3 Step Security
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap">
                <span className="text-[#6d7175] inline-block w-40">
                  Elevator :
                </span>
                <span className="inline-block ml-4 text-gray-500">2 Large</span>
              </div>
              <div className="flex items-center whitespace-nowrap">
                <span className="text-[#6d7175] inline-block w-40">
                  Driving Capacity :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  20 People
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap">
                <span className="text-[#6d7175] inline-block w-40">Exit :</span>
                <span className="inline-block -ml-1 text-gray-500">
                  3 Exit Gate
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap">
                <span className="text-[#6d7175] inline-block w-40">
                  Fire Place :
                </span>
                <span className="inline-block ml-4 text-gray-500">Yes</span>
              </div>
              <div className="flex items-center whitespace-nowrap">
                <span className="text-[#6d7175] inline-block w-40">
                  Heating System :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  Floor Heating
                </span>
              </div>
            </div>
          </section>
          {/* Property Summary */}
          <section className="bg-white p-6 -ml-8 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-6">Property Summary</h2>
            <div className="grid grid-cols-2 gap-y-0">
              <div className="flex items-center whitespace-nowrap border-t border-b border-gray-200 py-4">
                <span className="text-[#6d7175] inline-block w-32">
                  Property Id :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  LA{property.id}8227
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap border-t border-b border-gray-200 py-4">
                <span className="text-[#6d7175] inline-block w-32">
                  Listing Type :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  For Sale
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap border-b border-gray-200 py-4">
                <span className="text-[#6d7175] inline-block w-32">
                  Property Type :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  Appartment
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap border-b border-gray-200 py-4">
                <span className="text-[#6d7175] inline-block w-32">
                  Current Owner :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  Green Developers LTD
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap border-b border-gray-200 py-4">
                <span className="text-[#6d7175] inline-block w-32">
                  Insurance :
                </span>
                <span className="inline-block ml-4 text-gray-500">Yes</span>
              </div>
              <div className="flex items-center whitespace-nowrap border-b border-gray-200 py-4">
                <span className="text-[#6d7175] inline-block w-32">
                  Architecture :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  Nova Socity
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap border-b border-gray-200 py-4">
                <span className="text-[#6d7175] inline-block w-32">
                  Total Floor :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  10 Story Building
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap border-b border-gray-200 py-4">
                <span className="text-[#6d7175] inline-block w-32">
                  Year of Built :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  2008 - 2012
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap border-b border-gray-200 py-4">
                <span className="text-[#6d7175] inline-block w-32">
                  Furniture Type :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  High Class
                </span>
              </div>
              <div className="flex items-center whitespace-nowrap border-b border-gray-200 py-4">
                <span className="text-[#6d7175] inline-block w-32">
                  Payment Way :
                </span>
                <span className="inline-block ml-4 text-gray-500">
                  Installment / Cash
                </span>
              </div>
            </div>
          </section>
          {/* Features */}
          <section className="bg-white p-6 -ml-8 rounded-lg  mb-8">
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
          <section className="bg-white py-6 -ml-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-6 px-6">Floor Plans</h2>
            <div className="px-6">
              <div className="space-y-2">
                <div className="flex items-center py-3 px-4 bg-[#F8F5F0]  rounded-md transition-colors duration-300">
                  <span className="text-zinc-800">
                    Floor Plans [ 4200 sqft ]
                  </span>
                </div>
                <div className="flex items-center py-3 px-4 bg-[#F8F5F0] rounded-md transition-colors duration-300">
                  <span className="text-zinc-800">
                    Graps Plans [ 5200 sqft ]
                  </span>
                </div>
                <div className="flex items-center py-3 px-4 bg-[#F8F5F0]  rounded-md transition-colors duration-300">
                  <span className="text-zinc-800">
                    Garden Plans [ 4200 sqft ]
                  </span>
                </div>
              </div>
            </div>
          </section>
          {/* Nearby Places */}
          <section className="bg-white py-6 -ml-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-6 px-6">Nearby Places</h2>
            <div className="mb-6">
              <div className="flex px-6">
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
            <div className="px-6">
              <div className="grid grid-cols-12 mb-4">
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
              <div className="grid grid-cols-12 py-3 border-b border-gray-100 hover:bg-gray-50">
                <div className="col-span-5 text-gray-500">
                  Massachusetts General Hospital
                </div>
                <div className="col-span-3 text-gray-500">23.7 km</div>
                <div className="col-span-4 text-gray-500">Medical College</div>
              </div>
              <div className="grid grid-cols-12 py-3 border-b border-gray-100 hover:bg-gray-50">
                <div className="col-span-5 text-gray-500">
                  Langone Medical Center
                </div>
                <div className="col-span-3 text-gray-500">13.2 km</div>
                <div className="col-span-4 text-gray-500">Hart Hospital</div>
              </div>
              <div className="grid grid-cols-12 py-3 border-b border-gray-100 hover:bg-gray-50">
                <div className="col-span-5 text-gray-500">
                  Mount Sinai Hospital
                </div>
                <div className="col-span-3 text-gray-500">58.0 km</div>
                <div className="col-span-4 text-gray-500">Eye Hospital</div>
              </div>
            </div>
          </section>
          {/* Other Properties Carousel */}
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1 space-y-8">
          {/* Agent Info */}
          <div className="border border-gray-200 shadow-sm rounded-lg p-6 space-y-6 bg-white">
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
          <div className="border border-gray-200 shadow-sm rounded-lg p-6 space-y-4 bg-white">
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
    </div>
  );
}
