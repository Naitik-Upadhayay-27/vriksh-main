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
          <div className="bg-white p-6 rounded-lg ">
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
          <div className="bg-white px-6 pl-0 rounded-lg space-y-4">
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
          <div className="bg-white px-6 pl-0 rounded-lg">
            <div className="flex gap-8">
              <h3 className="text-base font-sm text-zinc-300 w-32">
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
          <section className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-xl font-semibold mb-6">More Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
              <div className="flex">
                <span className="w-32 text-[#6d7175]">Age :</span>
                <span>
                  {property.buildYear
                    ? `${
                        new Date().getFullYear() - parseInt(property.buildYear)
                      } Years`
                    : "N/A"}
                </span>
              </div>
              <div className="flex">
                <span className="w-32 text-[#6d7175]">Type :</span>
                <span>{property.type.split(" ")[1]}</span>
              </div>
              <div className="flex">
                <span className="w-32 text-[#6d7175]">
                  Installment Facility :
                </span>
                <span>Yes</span>
              </div>
              <div className="flex">
                <span className="w-32 text-[#6d7175]">Insurance :</span>
                <span>Yes</span>
              </div>
              <div className="flex">
                <span className="w-32 text-[#6d7175]">3rd Party :</span>
                <span>No</span>
              </div>
              <div className="flex">
                <span className="w-32 text-[#6d7175]">Swimming Pool :</span>
                <span>Yes</span>
              </div>
              <div className="flex">
                <span className="w-32 text-[#6d7175]">Garden & Trail :</span>
                <span>2400sqft</span>
              </div>
              <div className="flex">
                <span className="w-32 text-[#6d7175]">Total Floor :</span>
                <span>17 Floor</span>
              </div>
              <div className="flex">
                <span className="w-32 text-[#6d7175]">Security :</span>
                <span>3 Step Security</span>
              </div>
              <div className="flex">
                <span className="w-32 text-[#6d7175]">Elevator :</span>
                <span>2 Large</span>
              </div>
              <div className="flex">
                <span className="w-32 text-[#6d7175]">Driving Capacity :</span>
                <span>20 People</span>
              </div>
              <div className="flex">
                <span className="w-32 text-[#6d7175]">Exit :</span>
                <span>3 Exit Gate</span>
              </div>
              <div className="flex">
                <span className="w-32 text-[#6d7175]">Fire Place :</span>
                <span>Yes</span>
              </div>
              <div className="flex">
                <span className="w-32 text-[#6d7175]">Heating System :</span>
                <span>Floor Heating</span>
              </div>
            </div>
          </section>

          {/* Property Summary */}
          <section className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-xl font-semibold mb-6">Property Summary</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6">
              <div>
                <p className="text-[#6d7175] mb-1">Property ID :</p>
                <p>LA{property.id}8227</p>
              </div>
              <div>
                <p className="text-[#6d7175] mb-1">Listing Type :</p>
                <p>{property.type}</p>
              </div>
              <div>
                <p className="text-[#6d7175] mb-1">Property Type :</p>
                <p>{property.type.split(" ")[1]}</p>
              </div>
              <div>
                <p className="text-[#6d7175] mb-1">Current Owner :</p>
                <p>Green Developers LTD</p>
              </div>
              <div>
                <p className="text-[#6d7175] mb-1">Insurance :</p>
                <p>Yes</p>
              </div>
              <div>
                <p className="text-[#6d7175] mb-1">Architecture :</p>
                <p>Nova Society</p>
              </div>
              <div>
                <p className="text-[#6d7175] mb-1">Total Floor :</p>
                <p>10 Story Building</p>
              </div>
              <div>
                <p className="text-[#6d7175] mb-1">Year of Built :</p>
                <p>{property.buildYear || "N/A"}</p>
              </div>
              <div>
                <p className="text-[#6d7175] mb-1">Furniture Type :</p>
                <p>High Class</p>
              </div>
              <div>
                <p className="text-[#6d7175] mb-1">Payment Way :</p>
                <p>Installment / Cash</p>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="bg-white p-6 rounded-lg shadow-sm mb-8">
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
                    className="w-4 h-4 text-[#0196ff] mr-2"
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
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Nearby Places */}
          <section className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Nearby Places</h2>
            <div className="mb-6 border-b">
              <div className="flex">
                <button className="px-6 py-3 text-[#0196ff] border-b-2 border-[#0196ff] font-medium">
                  Hospital
                </button>
                <button className="px-6 py-3 hover:text-[#0196ff]">
                  Shopping
                </button>
                <button className="px-6 py-3 hover:text-[#0196ff]">
                  School
                </button>
                <button className="px-6 py-3 hover:text-[#0196ff]">
                  Restaurant
                </button>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-3 mb-4 font-medium text-[#6d7175]">
                <div>Name</div>
                <div>Distance</div>
                <div>Type</div>
              </div>
              <div className="grid grid-cols-3 py-4 border-b hover:bg-gray-50">
                <div>Massachusetts General Hospital</div>
                <div>23.7 km</div>
                <div>Medical College</div>
              </div>
              <div className="grid grid-cols-3 py-4 border-b hover:bg-gray-50">
                <div>Langone Medical Center</div>
                <div>13.2 km</div>
                <div>Hart Hospital</div>
              </div>
              <div className="grid grid-cols-3 py-4 border-b hover:bg-gray-50">
                <div>Mount Sinai Hospital</div>
                <div>58.0 km</div>
                <div>Eye Hospital</div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1 space-y-8">
          {/* Agent Info */}
          <div className="border rounded-lg p-6 space-y-6 bg-white shadow-sm">
            <div>
              <h3 className="text-lg font-medium text-black">Listed By</h3>
              <div className="flex items-center gap-4 mt-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-sm">
                  <Image
                    src="/placeholder.svg"
                    alt="Agent"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-black">Luann McLawhorn</div>
                  <div className="text-sm text-black">
                    +1(811) 634 5121 info@website.com
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-black" htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#BB9627]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-black" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#BB9627]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-black" htmlFor="email">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#BB9627]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-black" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Type your message here..."
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#BB9627]"
                ></textarea>
              </div>

              <Button className="w-full bg-[#BB9627] hover:bg-[#BB9627]/80">
                Send Message
              </Button>
            </div>
          </div>

          {/* Search Property Box */}
          <div className="border rounded-lg p-6 space-y-6 bg-white shadow-sm">
            <h3 className="text-lg font-medium text-black">Search Property</h3>
            <div className="space-y-4">
              {/* Keyword Search */}
              <div className="space-y-2">
                <label className="text-sm text-black" htmlFor="keyword">
                  Enter Keyword
                </label>
                <input
                  id="keyword"
                  type="text"
                  placeholder="Enter keyword..."
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#BB9627]"
                />
              </div>

              {/* Existing Filters: Location, Property Types, Property Status */}
              <div className="space-y-2">
                <label className="text-sm text-black" htmlFor="location">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="Enter location"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#BB9627]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-black">Property Types</span>
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
                    className="text-black"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
                <div className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-1 focus:ring-[#BB9627]">
                  Select
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-black">Property Status</span>
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
                    className="text-black"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
                <div className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-1 focus:ring-[#BB9627]">
                  Select
                </div>
              </div>

              {/* New Filters: Price, Bedrooms, Bathrooms, Garage */}
              <div className="space-y-2">
                <label className="text-sm text-black" htmlFor="price">
                  Price
                </label>
                <input
                  id="price"
                  type="text"
                  placeholder="Enter price range"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#BB9627]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-black" htmlFor="bedrooms">
                  Bedrooms
                </label>
                <input
                  id="bedrooms"
                  type="number"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#BB9627]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-black" htmlFor="bathrooms">
                  Bathrooms
                </label>
                <input
                  id="bathrooms"
                  type="number"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#BB9627]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-black" htmlFor="garage">
                  Garage
                </label>
                <input
                  id="garage"
                  type="number"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#BB9627]"
                />
              </div>

              {/* Min & Max Area (Side by Side) */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-black" htmlFor="min-area">
                    Min Area (sqft)
                  </label>
                  <input
                    id="min-area"
                    type="number"
                    placeholder="Min Area"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#BB9627]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-black" htmlFor="max-area">
                    Max Area (sqft)
                  </label>
                  <input
                    id="max-area"
                    type="number"
                    placeholder="Max Area"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#BB9627]"
                  />
                </div>
              </div>

              {/* Advanced Options */}
              <div className="flex items-center gap-2">
                <input
                  id="advanced"
                  type="checkbox"
                  className="w-4 h-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#BB9627]"
                />
              </div>

              <Button className="w-full bg-[#BB9627] hover:bg-[#BB9627]/80">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
