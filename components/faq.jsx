"use client";
import React, { useState } from "react";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className=" w-full border-b border-gray-300 hover:scale-[1.01] rounded-xl mt-2">
      <button
        className="w-full flex justify-between items-center py-3 px-6 text-left"
        onClick={onClick}
      >
        <h3 className="font-medium text-2sm">{question}</h3>
        <span className="text-lg">{isOpen ? "×" : "+"}</span>
      </button>

      {isOpen && (
        <div className="px-6 pb-3">
          <p className="text-black text-sm leading-tight">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

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
    <div className="w-full py-4 px-6 text-black bg-[#FFFAF4]">
      <h2 className="text-3xl font-semibold mb-3 text-left px-2">
        Wondering How This Works
      </h2>

      <div className="border-t border-gray-200 w-full">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
