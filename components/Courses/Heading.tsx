"use client"
import React from "react";
import { FaClock, FaCode, FaStar } from "react-icons/fa";

const Heading = ({ title, duration, liveProjects, rating }: { title: string; duration?: string; liveProjects?: string; rating?: string; }) => {
    const items = [
        {
            icon: <FaClock className="w-5 h-5 text-gray-700" />,
            text: duration,
        },
        {
            icon: <FaCode className="w-5 h-5 text-gray-700" />,
            text: liveProjects + " " + "Live Projects",
        },
        {
            icon: <FaStar className="w-5 h-5 text-gray-700" />,
            text: rating,
        },
    ];
    return (
        <>
            <div className="px-5 mt-8 mb-16 md:mt-12 lg:mt-16 md:mb-32 justify-items-center font-poppins">
                <h4 className="text-2xl md:text-4xl lg:text-4xl font-medium text-center text-[#343433] leading-9">
                    {`India's #1 Training Institute`}
                </h4>
                <div className="flex flex-wrap font-bold justify-center gap-3 lg:gap-5 mb-2.5 leading-[45px] md:leading-[130px] mt-7 md:mt-5">
                    <h1 className={` text-4xl md:text-6xl font-extrabold text-[#6C61D0] `}>
                        {title} <span className="text-black"> Training</span>
                    </h1>
                </div>
                <p className="max-w-xl mb-12 text-base leading-8 text-center mt-7 md:mt-6 md:text-lg">
                    100000+ uplifted through our hybrid classroom & online training,
                    enriched by real-time projects and job support.
                </p>
                <div className="flex items-center gap-6">
                    {items?.map((item, idx) => {
                        return (
                            <div
                                key={idx}
                                className="flex items-center gap-2 px-2 py-1"
                            >
                                <div className="p-1 rounded-md bg-slate-200">
                                    {item.icon}
                                </div>
                                <span className="text-base font-medium text-gray-800">
                                    {item.text}
                                </span>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </>
    );
};

export default Heading;
