import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function BlogHero() {
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
    <div className="pt-6 px-4 md:px-6 lg:px-8">
      <section
        ref={sectionRef}
        className={`relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg mx-auto transform transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        {/* Image Background with Glossy Effect */}
        <div className="absolute inset-0">
          <Image
            src="/contact.png" // path relative to the public folder
            alt="Blog background"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            className="filter brightness-85 contrast-105 saturate-110"
          />
          {/* Glossy overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></div>
        </div>

        {/* Content */}
        <div
          className={`relative h-full flex flex-col justify-center items-center text-white px-4 transform transition-all duration-1000 ease-out delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md">
            Blog
          </h1>
        </div>

        {/* Light reflection for glossy effect */}
        <div
          className={`absolute top-0 left-1/4 w-1/2 h-1/6 bg-white/10 blur-md rounded-full transform -translate-y-1/2 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </section>
    </div>
  );
}
