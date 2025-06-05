"use client"
import React, { useState } from 'react'
import { VscGraph } from 'react-icons/vsc';
import WhiteButton from '../WhiteButton';
import CoursesCard from './CoursesCard';

type Course = {
    courseName: string;
    navigate?: string;  // Make navigate optional
    duration: string;
    liveProjects: string;
    rating: string;
    description: string;
};
const Courses = ({ title }: { title?: string }) => {

    const CourseData: Course[] = [
        {
            courseName: "DevOps Training",
            navigate: "/courses/devops-training-certification",
            duration: "2 Months",
            liveProjects: "5 Live Projects",
            rating: "4.7/5",
            description:
                "DevOps training emphasizes on integrating development, operations, automation, and continuous delivery collaboration.",
        },
        {
            courseName: "Java Training",
            duration: "2 Months",
            liveProjects: "5 Live Projects",
            rating: "4.9/5",
            description:
                "Java training focuses on programming basics, OOP, data structures, APIs, and app development.",
        },
        {
            courseName: "AWS Cloud Training",
            duration: "2 Months",
            liveProjects: "5 Live Projects",
            rating: "4.8/5",
            description:
                "AWS training focuses on cloud computing with core services, architecture, security, and best practices.",
        },
        {
            courseName: "React Training",
            duration: "2 Months",
            liveProjects: "5 Live Projects",
            rating: "4.8/5",
            description:
                "React JS training covers UI building, component architecture, state management, hooks, and modern practices.",
        },
        
        {
            courseName: "Power BI Training",
            duration: "2 Months",
            liveProjects: "5 Live Projects",
            rating: "4.9/5",
            description: "Power BI training emphasises on data analysis and visualisation, creating interactive reports and dashboards."
        },
        {
            courseName: "Full Stack Training",
            duration: "2 Months",
            liveProjects: "5 Live Projects",
            rating: "4.8/5",
            description: "Full Stack Training focuses on both front-end and back-end development, enabling them to create complete web applications."
        },
        {
            courseName: "Business Analyst Training",
            duration: "2 Months",
            liveProjects: "5 Live Projects",
            rating: "4.7/5",
            description: "BA training focuses on business process analysis, requirement gathering, stakeholder management for effective business."
        },
        {
            courseName: "Azure Cloud Training",
            duration: "2 Months",
            liveProjects: "5 Live Projects",
            rating: "4.8/5",
            description: "Azure training focuses on cloud computing with Azure core services, security and best practices."
        },
        {
            courseName: "Azure DevOps Training",
            duration: "2 Months",
            liveProjects: "5 Live Projects",
            rating: "4.9/5",
            description: "Azure DevOps Training focuses on expertise in Microsoft's DevOps platform, for implementing efficient workflows and tools."
        },
        {
            courseName: "Azure Data Engineering",
            duration: "2 Months",
            liveProjects: "5 Live Projects",
            rating: "4.8/5",
            description: "Azure Data Engineering Training focuses on both front-end and back-end development, enabling them to create complete web applications."
        },
        {
            courseName: "AWS Cloud",
            duration: "2 Months",
            liveProjects: "5 Live Projects",
            rating: "4.8/5",
            description: "AWS Cloud training focuses on both front-end and back-end development, enabling them to create complete web applications."
        },
        {
            courseName: "AI Training",
            duration: "2 Months",
            liveProjects: "5 Live Projects",
            rating: "4.8/5",
            description: "AI Training focuses on both front-end and back-end development, enabling them to create complete web applications."
        },
        {
            courseName: "AWS Data Engineer",
            duration: "2 Months",
            liveProjects: "5 Live Projects",
            rating: "4.8/5",
            description: "AWS Data Engineer focuses on both front-end and back-end development, enabling them to create complete web applications."
        },
        {
            courseName: "Data Science Training",
            duration: "2 Months",
            liveProjects: "5 Live Projects",
            rating: "4.8/5",
            description: "Data Science Training focuses on both front-end and back-end development, enabling them to create complete web applications."
        },
        {
            courseName: "UI/UX Design Training",
            duration: "2 Months",
            liveProjects: "5 Live Projects",
            rating: "4.8/5",
            description: "Understanding Fundamentals: Learn the basics of UI (User Interface) and UX (User Experience) design."
        },
        


    ];

    const [visibleItems, setVisibleItems] = useState(4);

    const handleViewMore = () => {
        setVisibleItems(CourseData.length); // Show all items
    };
    return (
        <div className="container relative px-2 mx-auto">
            <div className="absolute -left-40 top-64 w-72 sm:w-[600px] h-[500px] rounded-full z-[-1] bg-[rgba(255,41,41,.059)] shadow-[0_0_200px_rgba(255,41,41,.141)] opacity-80" />
            <p className="text-2xl md:text-3xl font-bold text-center my-16 font-poppins text-[#343433]">
                {title}
            </p>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 ">
                {CourseData.map((item, index) => {
                    return <CoursesCard data={item} />;
                })}
            </div>
            <div className="flex justify-center mt-16 mb-36">
                <WhiteButton
                    name="View All Courses"
                    theme="blue"
                    icon={<VscGraph size={20} />}
                />
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                {CourseData.slice(0, visibleItems).map((item, index) => (
                    <CoursesCard key={index} data={item} />
                ))}
            </div>
            {visibleItems < CourseData.length && (
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

export default Courses