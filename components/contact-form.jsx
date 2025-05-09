import { useState, useRef, useEffect } from "react";
import { Facebook, Instagram, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactForm() {
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
    <section
      ref={sectionRef}
      className={`py-12 px-4 md:px-8 max-w-7xl mx-auto text-black transform transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div
        className={`mb-8 transform transition-all duration-1000 ease-out delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <span className="text-black font-medium">Get Started</span>
      </div>

      <div
        className={`flex flex-col md:flex-row justify-between items-start mb-10 transform transition-all duration-1000 ease-out delay-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-0 max-w-xl text-black">
          Get in touch with us. We're here to assist you.
        </h2>

        <div className="flex space-x-3">
          <Link
            href="https://facebook.com"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-accent hover:border-accent transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </Link>
          <Link
            href="https://instagram.com"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-accent hover:border-accent transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <form
        className={`space-y-8 transform transition-all duration-1000 ease-out delay-400 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transform transition-all duration-1000 ease-out delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="space-y-2">
            <label htmlFor="name" className="block text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-0 border-b border-gray-300 pb-2 focus:border-accent focus:ring-0 focus:outline-none bg-transparent"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-0 border-b border-gray-300 pb-2 focus:border-accent focus:ring-0 focus:outline-none bg-transparent"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-gray-700">
              Phone Number (optional)
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full border-0 border-b border-gray-300 pb-2 focus:border-accent focus:ring-0 focus:outline-none bg-transparent"
            />
          </div>
        </div>

        <div
          className={`space-y-2 transform transition-all duration-1000 ease-out delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <label htmlFor="message" className="block text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full border-0 border-b border-gray-300 pb-2 focus:border-accent focus:ring-0 focus:outline-none bg-transparent resize-none"
            required
          ></textarea>
        </div>

        <div
          className={`transform transition-all duration-1000 ease-out delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <button
            type="submit"
            className="bg-[#BB9632] text-white px-6 py-3 rounded-full font-medium flex items-center"
          >
            Leave us a Message
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </form>
    </section>
  );
}
