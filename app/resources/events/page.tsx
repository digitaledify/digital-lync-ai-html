"use client";
import StartNowModal from "@/components/StartNowModal";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaCalendarAlt } from 'react-icons/fa';

const events = [
    {
        id: 1,
        title: "FullStack with AI",
        subtitle: "FullStack with AI Master Class to Build Modern Applications",
        start: "May 03, 2025, 5:00 PM IST",
        end: "8:00 PM IST",
        tag: "FullStack with AI Master Class",
        topics: ["Java", "Python", "MERN", "MEAN", "UX", "GenAI"],
        image: "/assets/Event/c1.jpg",
        link: "fullstack-ai-masterclass",
    },
    {
        id: 2,
        title: "Platform Engineer",
        subtitle: "Roadmap to Platform Engineer With AI",
        start: "April 19, 2025, 5:00 PM IST",
        end: "8:00 PM IST",
        tag: "Platform Engineering with AI Master",
        topics: ["Java", "Python", "MERN", "MEAN", "UX", "GenAI"],
        image: "/assets/Event/c2.jpg",
        link: "platform-engineer-with-ai",
    },
    {
        id: 3,
        title: "Business Analytics",
        subtitle: "Roadmap to Business Analytics With AI",
        start: "May 03, 2025, 5:00 PM IST",
        end: "8:00 PM IST",
        tag: "Business Analytics with GenAI",
        topics: ["PowerBI", "SQL", "Python", "Statistics", "ML", "MLOps"],
        image: "/assets/Event/c3.jpg",
        link: "business-analytics-with-ai",
    },
    {
        id: 4,
        title: "ServiceNOW",
        subtitle: "Roadmap to ServiceNOW",
        start: "April 19, 2025, 5:00 PM IST",
        end: "8:00 PM IST",
        tag: "ServiceNow Ecosystem",
        topics: ["Admin", "Developer", "Business Analyst", "ITSM..."],
        image: "/assets/Event/c4.jpg",
        link: "servicenow",
    },
    {
        id: 5,
        title: "Salesforce",
        subtitle: "Roadmap to Fullstack Python",
        start: "April 19, 2025, 5:00 PM IST",
        end: "8:00 PM IST",
        tag: "Salesforce Ecosystem",
        topics: ["Admin", "Apex Dev", "LWC", "Business Analyst", "..."],
        image: "/assets/Event/c5.jpg",
        link: "salesforce",
    },
    {
        id: 6,
        title: "Full AI Stack",
        subtitle: "Roadmap to Full AI Stack",
        start: "April 19, 2025, 5:00 PM IST",
        end: "8:00 PM IST",
        tag: "Full AI Stack Master Class",
        topics: ["Python", "Statistics", "Machine Learning", "Deep..."],
        image: "/assets/Event/c6.jpg",
        link: "full-ai-stack",
    },
]


const Event = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleButtonClick = (link: string) => {
        router.push(`/resources/${link}`);
    };
    return (
        <>
            <div className="relative">
                <div className="container px-4 mx-auto">
                    <div className="relative mt-6 bg-[#3DCBB1] px-6 py-10 sm:px-[70px] sm:py-[77px] rounded-[20px] overflow-hidden">
                        <div className="relative z-10 w-full sm:w-[355px]">
                            <h3 className="text-white text-[28px] sm:text-[40px] font-bold mb-5 leading-tight">
                                Learn something new everyday.
                            </h3>
                            <p className="text-white mb-[20px] sm:mb-[30px] text-[16px]">
                                Become professionals and ready to join the world.
                            </p>
                            <a
                                href="#"
                                onClick={() => setIsOpen(true)}
                                className="inline-block bg-white text-[#3DCBB1] font-semibold rounded-[10px] px-6 py-3 sm:px-[30px] sm:py-[15px]"
                            >
                                Enroll Now
                            </a>
                        </div>

                        {/* Background image like :after */}
                        <div
                            className="absolute top-0 right-0 bottom-0 w-1/2 sm:w-[64%] bg-cover bg-center rounded-r-[20px]"
                            style={{ backgroundImage: "url('/assets/Event/eventbg1.jpg')" }}
                        ></div>
                    </div>
                </div>

                {/* Background circles */}
                <div className="absolute"></div>
                <div className="absolute "></div>
                <div className="absolute "></div>
            </div>


            <div className="container p-4 mx-auto mb-16 ">
                <div className="flex flex-wrap items-center justify-between w-full mt-6 mb-6 md:mt-12 md:mb-10">
                    <div className="w-full mb-4 sm:w-auto sm:mb-0">
                        <h2 className="text-[30px] font-bold text-gray-800">Upcoming Events</h2>
                    </div>
                    <div className="flex flex-row w-full gap-4 sm:w-auto">
                        <div className="w-full mb-4 sm:w-auto sm:mb-0">
                            <select
                                name="lookingFor"
                                id="lookingFor"
                                className="w-full px-4 py-2 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Looking for</option>
                            </select>
                        </div>
                        <div className="w-full sm:w-auto">
                            <select
                                name="date"
                                id="date"
                                className="w-full px-4 py-2 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Date</option>
                            </select>
                        </div>
                    </div>
                </div>




                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {events?.map((event) => (
                        <div key={event.id} className="overflow-hidden bg-white rounded-lg shadow-md">
                            <div className="relative flex flex-col h-32 px-8 pt-4 bg-center bg-cover"
                                style={{ backgroundImage: `url(${event?.image})` }}
                            >
                                <span className="text-[12px] text-white">Digital Edify</span>
                                <h3 className="text-[23px] font-bold text-white">{event?.title}</h3>
                                <div className="absolute bottom-4 left-8 bg-white text-gray-800 text-[12px] rounded px-2 ">
                                    {event.tag}
                                </div>
                            </div>

                            <div className="p-4">
                                <h4 className="text-[20px] font-bold text-gray-800 leading-6 min-h-[48px] overflow-hidden">
                                    {event?.subtitle}
                                </h4>

                                <div className="flex flex-wrap mt-4 text-sm font-medium gap-x-1 gap-y-1">
                                    {event.topics.map((topic, index) => (
                                        <span
                                            key={index}
                                            className="bg-gradient-to-r from-[#cb0061] to-[#001fd1] bg-clip-text text-transparent"
                                        >
                                            {topic}
                                            {index !== event.topics.length - 1 && (
                                                <span className="text-black"> | </span>
                                            )}
                                        </span>
                                    ))}
                                </div>

                                <div className="w-full mt-2 sm:w-auto">
                                    <div className="flex items-start text-[13px] text-gray-600">
                                        <FaCalendarAlt className="mt-1 mr-1" />
                                        Start time: {event?.start} | Ends: {event?.end}
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center justify-center gap-5 mt-3">
                                    <div className="w-full xl:w-auto">
                                        <button
                                            onClick={() => handleButtonClick(event?.link)}
                                            className="w-full px-4 py-2.5 text-xs font-semibold text-white bg-[#2953b4] rounded-full xl:w-auto"
                                        >
                                            FREE DEMO
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div>
            {isOpen && <StartNowModal isOpen={isOpen} setIsOpen={setIsOpen} />}
        </>
    );
};

export default Event;