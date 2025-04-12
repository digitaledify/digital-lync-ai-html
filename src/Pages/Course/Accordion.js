import React, { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const accordionRefs = useRef({}); // Use a ref object to store refs for each accordion

  const toggleAccordion = (index) => {
    const isOpen = openIndex === index;
    setOpenIndex(isOpen ? null : index);

    // Scroll to the top of the section when opened
    if (!isOpen && accordionRefs.current[index]) {
      const offset = 100; // Adjust for fixed header height
      const rect = accordionRefs.current[index].getBoundingClientRect();
      const elementPosition = rect.top + window.scrollY;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });

      // Adjust again after expansion if necessary
      setTimeout(() => {
        const updatedRect =
          accordionRefs.current[index].getBoundingClientRect();
        const updatedPosition = updatedRect.top + window.scrollY;

        window.scrollTo({
          top: updatedPosition - offset,
          behavior: "smooth",
        });
      }, 300); // Match your accordion animation duration
    }
  };

  return (
    <>
      {data?.accordionData?.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6 md:w-4/5 mx-auto">
          <div className="bg-[#2953B4] rounded-xl text-white font-poppins md:text-xl font-medium text-center py-3">
            {section?.maintitle}
          </div>

          {section?.subdata?.map((item, index) => {
            const array = Object.keys(item)
              .filter((key) => key.startsWith("topics"))
              .map((key, i) => {
                const topicsKey = i === 0 ? "topics" : `topics${i}`;
                const introKey = i === 0 ? "intro" : `intro${i}`;
                if (item[topicsKey]) {
                  return {
                    intro: item[introKey] ? item[introKey] : "",
                    topics: item[topicsKey],
                  };
                }
                return null;
              })
              .filter((item) => item !== null);

            const accordionKey = `${sectionIndex}-${index}`;

            return (
              <div
                key={accordionKey}
                className="rounded-md container mx-auto mt-8 font-poppins relative"
              >
                <div className="absolute bg-[#FAFAFA] border border-[#CCCCCC] rounded-md px-4 py-1.5 text-xs font-light font-poppins left-4 -top-5">
                  {item?.module}
                </div>
                <button
                  ref={(el) => (accordionRefs.current[accordionKey] = el)} // Attach ref
                  className="w-full text-left text-base md:text-lg px-6 py-4 font-semibold text-gray-800 bg-white flex justify-between items-center rounded-lg"
                  onClick={() => toggleAccordion(accordionKey)}
                  style={{ boxShadow: "0 0 13px #cccccc4f" }}
                >
                  {item?.title}
                  <span>
                    {openIndex === accordionKey ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                </button>

                <div
                  className={`mt-3 rounded-lg overflow-hidden transition-[max-height] duration-700 ease-in-out ${
                    openIndex === accordionKey ? "max-h-fit" : "max-h-0"
                  }`}
                  style={{ boxShadow: "0 0 13px #cccccc4f" }}
                >
                  <div className="px-6 py-4 bg-white">
                    <ul className="space-y-4">
                      {array?.map((j) => (
                        <>
                          {j?.intro && (
                            <p className="font-semibold mt-2">{j?.intro}</p>
                          )}
                          <p className="font-semibold mb-3">Topics:</p>
                          {j?.topics?.map((topic, topicIndex) => (
                            <li key={topicIndex}>
                              <p className="font-medium">{topic?.name}</p>
                              {topic?.description &&
                                (typeof topic?.description === "string" ? (
                                  <div className="flex gap-2">
                                    <RiArrowRightDoubleLine
                                      color="#4882C2"
                                      className="mt-1"
                                    />
                                    <p>{topic.description}</p>
                                  </div>
                                ) : (
                                  topic.description?.map((i, iIndex) => (
                                    <div
                                      key={iIndex}
                                      className="flex gap-2 items-center"
                                    >
                                      <RiArrowRightDoubleLine color="#4882C2" />
                                      <p>{i}</p>
                                    </div>
                                  ))
                                ))}
                            </li>
                          ))}
                        </>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default Accordion;
