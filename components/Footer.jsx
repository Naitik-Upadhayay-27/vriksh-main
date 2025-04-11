"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#FFFAF4] py-8 px-4 md:py-12 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <Link href="/">
                <div className="relative w-40 h-14 -mt-3 scale-[1.65] overflow-hidden ml-15 bg-white">
                  <Image
                    src="/logo.png"
                    alt="Mindsestate Logo"
                    fill
                    className="object-contain p-1 bg-[#FFFAF4]"
                  />
                </div>
              </Link>

              <div className="mt-15 space-y-3 text-[#1d1d1f] text-sm md:text-base">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2 mt-0.5 flex-shrink-0 text-gray-400" />
                  <span className="text-sm md:text-base">
                    1889 NW 73rd St, Asheville, NC 28726
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2 flex-shrink-0 text-gray-400" />
                  <span className="text-sm md:text-base">(800) 543 5432</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 md:h-5 md:w-5 mr-2 flex-shrink-0 text-gray-400" />
                  <span className="text-sm md:text-base">
                    inquiry@realhomes.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-2 sm:mt-0">
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-[#000000]">
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-4 text-[#1d1d1f] text-sm md:text-base">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#0196ff] transition-colors"
                >
                  Properties Listing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#0196ff] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#0196ff] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Pages */}
          <div className="mt-2 sm:mt-0">
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-[#000000]">
              Other Pages
            </h3>
            <ul className="space-y-2 md:space-y-4 text-[#1d1d1f] text-sm md:text-base">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#0196ff] transition-colors"
                >
                  Agents
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#0196ff] transition-colors"
                >
                  Agencies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#0196ff] transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Talk To An Expert */}
          <div className="mt-4 sm:mt-0">
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-[#000000]">
              Talk To An Expert
            </h3>
            <p className="mb-4 md:mb-6 text-[#1d1d1f] text-sm md:text-base">
              Get expert consultation regarding you Real Estate needs.
            </p>
            <Button
              variant="outline"
              className="rounded-full border-[#BB9632] text-[#BB9632] hover:bg-[#BB9632] hover:text-white transition-colors text-sm"
            >
              Make an Inquiry
            </Button>

            <div className="mt-8 md:mt-12">
              <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-[#000000]">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-[#1d1d1f] hover:text-[#0196ff] transition-colors"
                >
                  <Facebook className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-[#1d1d1f] hover:text-[#0196ff] transition-colors"
                >
                  <Twitter className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-[#1d1d1f] hover:text-[#0196ff] transition-colors"
                >
                  <Youtube className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-[#1d1d1f] hover:text-[#0196ff] transition-colors"
                >
                  <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 md:mt-12 md:pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-500">
            <p>© 2024 RealHomes. All Rights Reserved</p>
            <p className="mt-2 md:mt-0">Designed by Manas Agrawal</p>
          </div>
        </div>
      </div>

      {/* WhatsApp and Scroll to top buttons */}
      {showScrollButton && (
        <>
          <button
            onClick={() => window.open("https://wa.me/your-number", "_blank")}
            className="fixed bottom-20 right-4 md:bottom-22 md:right-6 bg-[#BB9627] text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-[#A68529] transition-colors"
            aria-label="Contact on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 md:h-5 md:w-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </button>
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-[#BB9632] text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-[#183E70] transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        </>
      )}
    </footer>
  );
}
