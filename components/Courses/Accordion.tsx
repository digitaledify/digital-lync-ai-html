import React, { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { RiArrowRightDoubleLine } from "react-icons/ri";

type AccordionProps = {
    data: {
        accordionData: Section[];
    };
};

type Section = {
    maintitle: string;
    subdata: SubItem[];
};

type SubItem = {
    module: string;
    title: string;
    // dynamic keys like topics, topics1, intro, intro1
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
};

const Accordion = ({ data }: AccordionProps) => {
    const [openIndex, setOpenIndex] = useState<null | number | string>(null);
    const accordionRefs = useRef<Record<string, HTMLButtonElement | null>>({});

    const toggleAccordion = (index: (number | string)) => {
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
                const updatedRect = accordionRefs.current[index] &&
                    accordionRefs.current[index].getBoundingClientRect();
                const updatedPosition = updatedRect && updatedRect.top + window.scrollY;

                window.scrollTo({
                    top: updatedPosition ? updatedPosition - offset : 0,
                    behavior: "smooth",
                });
            }, 300); // Match your accordion animation duration
        }
    };

    return (
        <>
            {data?.accordionData?.map((section, sectionIndex: number) => (
                <div key={sectionIndex} className="mx-auto mb-6 md:w-4/5">
                    <div className="bg-[#2953B4] rounded-xl text-white font-poppins md:text-xl font-medium text-center py-3">
                        {section?.maintitle}
                    </div>

                    {section?.subdata?.map((item, index: number) => {
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
                                className="container relative mx-auto mt-8 rounded-md font-poppins"
                            >
                                <div className="absolute bg-[#FAFAFA] border border-[#CCCCCC] rounded-md px-4 py-1.5 text-xs font-light font-poppins left-4 -top-5">
                                    {item?.module}
                                </div>
                                <button
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    ref={(el: any) => (accordionRefs.current[accordionKey] = el)} // Attach ref
                                    className="flex items-center justify-between w-full px-6 py-4 text-base font-semibold text-left text-gray-800 bg-white rounded-lg md:text-lg"
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
                                    className={`mt-3 rounded-lg overflow-hidden transition-[max-height] duration-700 ease-in-out ${openIndex === accordionKey ? "max-h-fit" : "max-h-0"
                                        }`}
                                    style={{ boxShadow: "0 0 13px #cccccc4f" }}
                                >
                                    <div className="px-6 py-4 bg-white">
                                        <ul className="space-y-4">
                                            {array?.map((j, index: number) => (
                                                <div key={index}>
                                                    {j?.intro && (
                                                        <p className="mt-2 font-semibold">{j?.intro}</p>
                                                    )}
                                                    <p className="mb-3 font-semibold">Topics:</p>
                                                    {j?.topics?.map((topic: { name: string; description?: string | string[] }, topicIndex: number) => (
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
                                                                    topic.description?.map((i: string, iIndex: number) => (
                                                                        <div
                                                                            key={iIndex}
                                                                            className="flex items-center gap-2"
                                                                        >
                                                                            <RiArrowRightDoubleLine color="#4882C2" />
                                                                            <p>{i}</p>
                                                                        </div>
                                                                    ))
                                                                ))}
                                                        </li>
                                                    ))}
                                                </div>
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
