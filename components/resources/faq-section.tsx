"use client"
import { IEventDetail } from "@/utils/events";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FaqSection = ({ event }: { event: IEventDetail | undefined }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="container px-4 py-16 md:mx-auto">
      <h2 className="mb-10 text-2xl font-bold text-start md:text-3xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#c90163] to-[#1b1bc3]">
        Frequently Asked Questions (FAQs)
      </h2>

      <div className="space-y-4">
        {event?.faqs?.map((faq, index) => (
          <div key={index} className="overflow-hidden border rounded-xl">
            <button
              onClick={() => toggleFAQ(index)}
              className={`flex items-center justify-between w-full px-6 py-4 transition-all duration-300 ease-in-out ${openIndex === index ? "bg-[#704fe6] text-white" : "bg-white"} `}
            >
              <span className="text-lg font-semibold text-left">{faq.question}</span>
              <span>
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            {openIndex === index && (
              <div className="flex justify-between w-full gap-6 px-6 py-6 bg-white md:grid-cols-2">
                <p className="py-4 pr-8 text-base text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
