// components/property-detail-complete.jsx
import Image from "next/image";
import Link from "next/link";
import { Check, Download, MapPin, Heart, Share2, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function PropertyDetailComplete({ property }) {
    return (
        <div className="flex flex-col text-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Image Gallery Section */}
            <div className="w-full mx-auto mb-8 mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 md:gap-4">
                    {/* Main Image - Takes even more width (10/12 columns) */}
                    <div className="lg:col-span-10 relative group">
                        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[550px] overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
                            <Image
                                src={property.image}
                                alt={property.title}
                                fill
                                className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                                priority
                            />

                            {/* Navigation controls - only visible on hover */}
                            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
                                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                                </button>
                                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
                                    <ChevronRight className="h-5 w-5 text-gray-700" />
                                </button>
                            </div>

                            {/* Elegant action buttons at bottom */}
                            <div className="absolute bottom-4 left-4 flex gap-2">
                                <button className="w-10 h-10 bg-white bg-opacity-90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-opacity-100 transition-all duration-300">
                                    <Heart className="h-5 w-5 text-gray-700 hover:text-red-500 transition-colors" />
                                </button>
                                <button className="w-10 h-10 bg-white bg-opacity-90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-opacity-100 transition-all duration-300">
                                    <Share2 className="h-5 w-5 text-gray-700 hover:text-blue-500 transition-colors" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnail Gallery - Takes only 2/12 columns */}
                    <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-2 md:gap-4">
                        <div className="relative w-full h-40 lg:h-[270px] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                            <Image
                                src="/about1.png"
                                alt="Living room"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="relative w-full h-40 lg:h-[270px] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                            <Image
                                src="/about2.png"
                                alt="Interior design"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all duration-300">
                                <div className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                    <span className="text-gray-800 text-base font-medium">+10</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-8">
                    {/* Title and Basic Info */}
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <Badge className="bg-[#0196ff]/10 text-[#0196ff] hover:bg-[#0196ff]/20 rounded-sm">
                            {property.type.split(' ')[1].toUpperCase()}
                        </Badge>
                        <div className="flex flex-wrap justify-between items-start mt-2">
                            <div>
                                <h1 className="text-2xl font-bold text-black">{property.title}</h1>
                                <div className="flex items-center text-black mt-1">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    <span>{property.location}</span>
                                </div>
                                <div className="text-sm text-black mt-1">(100 People Recommended)</div>
                            </div>
                            <div className="text-right">
                                <div className="text-xl font-bold text-[#0196ff]">{property.price}</div>
                                <div className="text-sm text-black">
                                    {property.priceType ? `(${property.priceType})` : '(Price Only)'}
                                </div>
                                <Button size="sm" className="mt-2 gradient-bg">
                                    <span className="text-xs">Contact</span>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Offers */}
                    <div className="bg-white p-6 rounded-lg shadow-sm space-y-2">
                        <h3 className="font-semibold text-lg mb-3">Special Offers</h3>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#0196ff]"></div>
                            <span className="font-medium text-black">Special Price</span>
                            <span className="text-black">Get extra 15% off (price inclusive of discount)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#0196ff]"></div>
                            <span className="font-medium text-black">Bank Offer</span>
                            <span className="text-black">10% instant discount on VISA Cards</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#0196ff]"></div>
                            <span className="font-medium text-black">No cost EMI $149/month.</span>
                            <span className="text-black">Standard EMI also available</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                        <Button variant="outline" className="rounded-full shadow-sm hover:shadow">
                            <Download className="h-4 w-4 mr-2" />
                            Download Brochure
                        </Button>
                        <Button variant="outline" className="rounded-full shadow-sm hover:shadow">
                            Schedule a Visit
                        </Button>
                    </div>

                    {/* Property Specs */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y py-6 my-6">
                        <div>
                            <div className="text-sm text-black">Rooms:</div>
                            <div className="font-medium text-black">{property.beds ? property.beds + 2 : 'N/A'}</div>
                        </div>
                        <div>
                            <div className="text-sm text-black">Beds:</div>
                            <div className="font-medium text-black">{property.beds || 'N/A'}</div>
                        </div>
                        <div>
                            <div className="text-sm text-black">Area:</div>
                            <div className="font-medium text-black">{property.sqft}</div>
                        </div>
                        <div>
                            <div className="text-sm text-black">Swimming:</div>
                            <div className="font-medium text-black">Yes (1 Large)</div>
                        </div>
                        <div>
                            <div className="text-sm text-black">Baths:</div>
                            <div className="font-medium text-black">{property.baths || 'N/A'}</div>
                        </div>
                        <div>
                            <div className="text-sm text-black">Car Garage:</div>
                            <div className="font-medium text-black">Yes (5 Capacity)</div>
                        </div>
                        <div>
                            <div className="text-sm text-black">Build Year:</div>
                            <div className="font-medium text-black">{property.buildYear || 'N/A'}</div>
                        </div>
                        <div>
                            <div className="text-sm text-black">Status:</div>
                            <div className="font-medium text-black">{property.type}</div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                        <h2 className="text-xl font-bold text-black">Description</h2>
                        <p className="text-black text-sm leading-relaxed">
                            Maecenas egestas quam et volutpat bibendum metus vulputate platea eleifend sed integer dictum ultricies
                            consectetur nunc vivamus a. Eu nulla justo magna lacinia purus sodales scelerisque.
                        </p>
                        <p className="text-black text-sm leading-relaxed">
                            Praesent lectus facilisi tempor ridiculus arcu pharetra non tellus. Torquent nisl tempor. Magnis mollis
                            lobortis nam, montes ut consequat sed amet nullam.
                        </p>
                    </div>

                    {/* Highlights */}
                    <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                        <h3 className="font-medium text-black text-lg">Highlights:</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-[#0196ff]" />
                                <span className="text-black">Regular Fit</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-[#0196ff]" />
                                <span className="text-black">Full sleeves</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-[#0196ff]" />
                                <span className="text-black">Machine wash</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-[#0196ff]" />
                                <span className="text-black">Premium security</span>
                            </div>
                        </div>
                    </div>

                    {/* More Information */}
                    <section className="bg-white p-6 rounded-lg shadow-sm mb-8">
                        <h2 className="text-xl font-semibold mb-6">More Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
                            <div className="flex">
                                <span className="w-32 text-[#6d7175]">Age :</span>
                                <span>{property.buildYear ? `${new Date().getFullYear() - parseInt(property.buildYear)} Years` : 'N/A'}</span>
                            </div>
                            <div className="flex">
                                <span className="w-32 text-[#6d7175]">Type :</span>
                                <span>{property.type.split(' ')[1]}</span>
                            </div>
                            <div className="flex">
                                <span className="w-32 text-[#6d7175]">Installment Facility :</span>
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
                                <p>{property.type.split(' ')[1]}</p>
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
                                <p>{property.buildYear || 'N/A'}</p>
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
                                <button className="px-6 py-3 text-[#0196ff] border-b-2 border-[#0196ff] font-medium">Hospital</button>
                                <button className="px-6 py-3 hover:text-[#0196ff]">Shopping</button>
                                <button className="px-6 py-3 hover:text-[#0196ff]">School</button>
                                <button className="px-6 py-3 hover:text-[#0196ff]">Restaurant</button>
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
                                    <Image src="/placeholder.svg" alt="Agent" fill className="object-cover" />
                                </div>
                                <div>
                                    <div className="font-medium text-black">Luann McLawhorn</div>
                                    <div className="text-sm text-black">+1(811) 634 5121 info@website.com</div>
                                </div>
                            </div>
                        </div>

                        {/* Contact form */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm text-black" htmlFor="name">Your Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-black" htmlFor="phone">Phone Number</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-black" htmlFor="email">Your Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-black" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Type your message here..."
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                ></textarea>
                            </div>

                            <Button className="w-full gradient-bg">Send Message</Button>
                        </div>
                    </div>

                    {/* Search Property Box */}
                    <div className="border rounded-lg p-6 space-y-6 bg-white shadow-sm">
                        <h3 className="text-lg font-medium text-black">Search Property</h3>
                        <div className="space-y-4">

                            {/* Keyword Search */}
                            <div className="space-y-2">
                                <label className="text-sm text-black" htmlFor="keyword">Enter Keyword</label>
                                <input
                                    id="keyword"
                                    type="text"
                                    placeholder="Enter keyword..."
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                />
                            </div>

                            {/* Existing Filters: Location, Property Types, Property Status */}
                            <div className="space-y-2">
                                <label className="text-sm text-black" htmlFor="location">Location</label>
                                <input
                                    id="location"
                                    type="text"
                                    placeholder="Enter location"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
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
                                <div className="w-full px-3 py-2 border rounded-md text-black">Select</div>
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
                                <div className="w-full px-3 py-2 border rounded-md text-black">Select</div>
                            </div>

                            {/* New Filters: Price, Bedrooms, Bathrooms, Garage */}
                            <div className="space-y-2">
                                <label className="text-sm text-black" htmlFor="price">Price</label>
                                <input
                                    id="price"
                                    type="text"
                                    placeholder="Enter price range"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-black" htmlFor="bedrooms">Bedrooms</label>
                                <input
                                    id="bedrooms"
                                    type="number"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-black" htmlFor="bathrooms">Bathrooms</label>
                                <input
                                    id="bathrooms"
                                    type="number"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm text-black" htmlFor="garage">Garage</label>
                                <input
                                    id="garage"
                                    type="number"
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                />
                            </div>

                            {/* Min & Max Area (Side by Side) */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm text-black" htmlFor="min-area">Min Area (sqft)</label>
                                    <input
                                        id="min-area"
                                        type="number"
                                        placeholder="Min Area"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-black" htmlFor="max-area">Max Area (sqft)</label>
                                    <input
                                        id="max-area"
                                        type="number"
                                        placeholder="Max Area"
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                    />
                                </div>
                            </div>

                            {/* Advanced Options */}
                            <div className="flex items-center gap-2">
                                <input
                                    id="advanced"
                                    type="checkbox"
                                    className="w-4 h-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#0196ff]"
                                />
                            </div>

                            <Button className="w-full gradient-bg">Search</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}