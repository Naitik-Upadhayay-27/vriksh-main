import { useState, useRef, useEffect } from "react";

export default function ContactInfo() {
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
      className={`py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 w-full bg-gray-50 h-auto min-h-[370px] overflow-auto transform transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div
        className={`mb-3 text-left ml-4 sm:ml-8 md:ml-18 transform transition-all duration-1000 ease-out delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <span className="text-gray-800 font-medium tracking-wide">
          CONTACT INFO
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-7xl mx-auto">
        <div
          className={`sm:col-span-2 md:col-span-1 transform transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-900">
            We are always happy to assist you
          </h2>
        </div>

        <div
          className={`transform transition-all duration-1000 ease-out delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900">
            Email Address
          </h3>
          <div className="h-0.5 w-8 bg-gray-300 mb-4 sm:mb-5"></div>
          <a
            href="mailto:help@info.com"
            className="text-[#BB9632] hover:text-blue-800 transition-colors block mb-4 sm:mb-6 font-medium text-sm sm:text-base"
          >
            help@info.com
          </a>
          <div className="text-gray-600 text-sm sm:text-base">
            <p className="font-medium mb-1">Assistance hours:</p>
            <p className="leading-relaxed">Monday - Friday 6 am to</p>
            <p>8 pm EST</p>
          </div>
        </div>

        <div
          className={`transform transition-all duration-1000 ease-out delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900">
            Number
          </h3>
          <div className="h-0.5 w-8 bg-gray-300 mb-4 sm:mb-5"></div>
          <a
            href="tel:8089983425"
            className="text-[#BB9632] hover:text-blue-800 transition-colors block mb-4 sm:mb-6 font-medium text-sm sm:text-base"
          >
            (808) 998-34256
          </a>
          <div className="text-gray-600 text-sm sm:text-base">
            <p className="font-medium mb-1">Assistance hours:</p>
            <p className="leading-relaxed">Monday - Friday 6 am to</p>
            <p>8 pm EST</p>
          </div>
        </div>
      </div>
    </section>
  );
}
