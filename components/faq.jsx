"use client";
import React, { useState, useRef, useEffect } from "react";

const FAQItem = ({ question, answer, isOpen, onClick, delay, isVisible }) => {
  return (
    <div
      className={`border-b border-gray-200 transform transition-all duration-1000 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <button
        className="flex justify-between items-center w-full py-4 px-2 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg font-medium">{question}</span>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`px-2 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isFAQVisible, setIsFAQVisible] = useState(false);
  const faqRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFAQVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => {
      if (faqRef.current) {
        observer.unobserve(faqRef.current);
      }
    };
  }, []);

  const faqs = [
    {
      question: "Where can I watch?",
      answer:
        "Nibh quisque suscipit fermentum metus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentianibn natoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tincidunt condimentum nullam.",
    },
    {
      question: "Tempus magna risus interdum ultricies sed urna?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    },
    {
      question: "Augue in nibh urna volutpat mattis?",
      answer:
        "Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Viverra adipiscing at in tellus integer. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.",
    },
    {
      question: "Eu egestas sed sed posuere ultrices?",
      answer:
        "Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Adipiscing at in tellus integer feugiat. Lacus vestibulum sed arcu non odio euismod lacinia at.",
    },
    {
      question: "Elementum facilisi aliquam, nisi, orci volutpate?",
      answer:
        "Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Purus in mollis nunc sed id semper risus in hendrerit. Cursus turpis massa tincidunt dui ut ornare lectus.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      ref={faqRef}
      className={`w-full py-4 px-6 text-black bg-[#FFFAF4] mb-12 transform transition-all duration-1000 ease-out ${
        isFAQVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <h2
        className={`text-3xl font-semibold mb-3 text-left px-2 transform transition-all duration-1000 ease-out delay-200 ${
          isFAQVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
      >
        Wondering How This Works
      </h2>

      <div
        className={`border-t border-gray-200 w-full transform transition-all duration-1000 ease-out delay-400 ${
          isFAQVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
      >
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
            delay={600 + index * 200}
            isVisible={isFAQVisible}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
