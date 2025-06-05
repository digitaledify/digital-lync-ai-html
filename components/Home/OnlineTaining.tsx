"use client"
import React, { useEffect, useState } from "react";
import { VscGraph } from "react-icons/vsc";
import StartNowModal from "../StartNowModal";
import BlackButton from "../BlackButton";
import WhiteButton from "../WhiteButton";

const OnlineTaining = () => {
    const textItems = [
        {
            text: "Learn.",
            color: "from-[#006dbd] to-[#002cd4] bg-clip-text text-transparent",
        },
        {
            text: "Build.",
            color: "from-[#5e00c8] to-[#ac008e] bg-clip-text text-transparent",
        },
        {
            text: "Get Job.",
            color: "from-[#ac008e] to-[#cd0064] bg-clip-text text-transparent",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % textItems.length);
        }, 1000); // Changes every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [textItems.length]);

    const handelOnClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="container flex flex-wrap items-center justify-between w-full px-3 mx-auto mt-10 font-poppins">
            <div>
                <div className="flex flex-wrap font-bold justify-center sm:justify-start gap-3 lg:gap-7 mb-2.5 leading-[45px] lg:leading-snug">
                    {textItems.map((item, index) => (
                        <h1
                            key={index}
                            className={`bg-gradient-to-r ${index === activeIndex ? item.color : "text-black "
                                } text-3xl sm:text-4xl lg:text-[45px] font-extrabold `}
                        >
                            {item.text}
                        </h1>
                    ))}
                </div>
                <p className="mb-8 text-center sm:text-start sm:max-w-md lg:max-w-lg">
                    100000+ uplifted through our hybrid classroom & online training,
                    enriched by real-time projects and job support.
                </p>
            </div>
            <div className="w-full space-y-2 sm:w-auto justify-items-center sm:justify-items-end">
                <BlackButton name="Free Demo" icon={<VscGraph size={17} />} onClick={() => handelOnClick()} />
                <WhiteButton name="Get In Touch" icon={<VscGraph size={17} />} onClick={() => handelOnClick()} />
            </div>
            {isOpen && <StartNowModal isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
    );
};

export default OnlineTaining;
