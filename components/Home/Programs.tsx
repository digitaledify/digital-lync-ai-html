"use client"
import React, { useState } from 'react'
import { VscGraph } from 'react-icons/vsc';
import CoursesCard from './CoursesCard';
import WhiteButton from '../WhiteButton';

const Programs = ({ title }: { title: string }) => {

    const ProgramData = [
        {
            courseName: "Full AI Stack ",
            duration: "3 Months",
            liveProjects: "6 Live Projects",
            rating: "4.7/5",
            description:
                "The Full AI Stack refers to the complete set of tools, frameworks, platforms, and infrastructure needed to develop, train, deploy, and monitor AI models and applications. It is similar in concept to the full web stack (frontend, backend, database),...",
        },
        {
            courseName: "Full Stack with AI",
            duration: "3 Months",
            liveProjects: "6 Live Projects",
            rating: "4.8/5",
            description:
                "A Full Stack with AI refers to the integration of traditional full-stack development (frontend, backend, database, devops) with AI/ML capabilities like predictions, natural language processing, chatbots, recommendation systems, etc.",
        },
        {
            courseName: "Data Analyst with AI ",
            duration: "3 Months",
            liveProjects: "6 Live Projects",
            rating: "4.9/5",
            description:
                "A Data Analyst with AI is a professional who combines traditional data analysis skills (like querying, visualization, reporting) with AI/ML tools to gain deeper insights, automate...",
        },
        {
            courseName: "Platform Stack with AI",
            duration: "3 Months",
            liveProjects: "6 Live Projects",
            rating: "4.8/5",
            description:
                "A Platform Stack with AI refers to the complete ecosystem of tools, frameworks, services, and infrastructure used to build, deploy, and scale AI-powered platforms or products.",
        },
        {
            courseName: "Multi-Cloud DevOps",
            duration: "3 Months",
            liveProjects: "6 Live Projects",
            rating: "4.8/5",
            description: "Multi-Cloud DevOps is the practice of implementing DevOps (Development + Operations) processes across multiple cloud service providers (e.g., AWS, Azure, Google Cloud, IBM Cloud). It enables organizations to deploy, monitor, and manage applications using a mix of cloud platforms to avoid vendor lock-in, improve availability, and optimize costs."
        },
         

    ];
    const [visibleItems, setVisibleItems] = useState(4);

    const handleViewMore = () => {
        setVisibleItems(ProgramData.length); // Show all items
    };

    return (
        <div className="container relative px-2 mx-auto">
            <div className="absolute left-0 top-0 sm:-left-80 sm:-top-52 w-72 sm:w-[600px] h-[500px] rounded-full z-[-1] bg-[rgba(255,41,41,.059)] shadow-[0_0_200px_rgba(255,41,41,.141)] opacity-80" />
            <div className="absolute top-28 sm:-left-36 sm:top-48 w-72 sm:w-[600px] h-[500px] rounded-full z-[-1] bg-[rgba(255,41,41,.059)] shadow-[0_0_200px_rgba(255,41,41,.141)] opacity-80" />
            <p className="text-2xl md:text-3xl font-bold text-center my-16 font-poppins text-[#343433]">
                {title}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {ProgramData.slice(0, visibleItems).map((item, index) => (
                    <CoursesCard key={index} data={item} />
                ))}
            </div>
            {visibleItems < ProgramData.length && (
                <div className="flex justify-center mt-16 mb-36">
                    <WhiteButton
                        name="View All Courses"
                        theme="blue"
                        icon={<VscGraph size={20} />}
                        onClick={handleViewMore} // Attach the click handler
                    />
                </div>
            )}
        </div>
    )
}

export default Programs