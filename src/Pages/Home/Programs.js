import React, { useState } from 'react'
import CoursesCard from '../../Components/HomePage/CoursesCard';
import WhiteButton from '../../Components/WhiteButton';
import { VscGraph } from 'react-icons/vsc';

const Programs = ({ title }) => {

    const ProgramData = [
        {
            courseName: "Multi-Cloud DevOps ",
            duration: "3 Months",
            liveProjects: "6 Live Projects",
            rating: "4.7/5",
            description:
                "Cloud DevOps Masters Training combines cloud computing and DevOps principles to empower professionals with the knowledge and skills needed to efficiently manage and automate software delivery pipelines in cloud environments.",
        },
        {
            courseName: "FullStack Java",
            duration: "3 Months",
            liveProjects: "6 Live Projects",
            rating: "4.8/5",
            description:
                "Full Stack Masters Training equips individuals with advanced expertise in both front- end and back - end development, enabling them to architect and build complex, full - fledged web applications with proficiency and versatility.",
        },
        {
            courseName: "AI & Data Science ",
            duration: "3 Months",
            liveProjects: "6 Live Projects",
            rating: "4.9/5",
            description:
                "Salesforce Masters Training provides comprehensive knowledge and skills for mastering the Salesforce platform, enabling professionals to design, implement, and optimise Salesforce solutions with expertise, driving business success.",
        },
        {
            courseName: "AI Data Analyst",
            duration: "3 Months",
            liveProjects: "6 Live Projects",
            rating: "4.8/5",
            description:
                " Business Data Analyst Masters Training offers a comprehensive way to develop advanced data analysis and interpretation skills, equipping professionals to make informed,data- driven decisions and drive business growth with precision.",
        },
        {
            courseName: "FullStack Java",
            duration: "3 Months",
            liveProjects: "6 Live Projects",
            rating: "4.8/5",
            description: "Full Stack Masters Training equips individuals with advanced expertise in both front-end and back-end development, enabling them to architect and build complex, full-fledged web applications with proficiency and versatility."
        },
        {
            courseName: "Master Full-Stack Python",
            duration: "3 Months",
            liveProjects: "6 Live Projects",
            rating: "4.9/5",
            description: "Master Full-Stack Python Training provides comprehensive knowledge and skills for mastering the Full-Stack Python platform, enabling professionals to design, implement, and optimise Salesforce solutions with expertise."
        },
        {
            courseName: "Full-Stack MERN",
            duration: "3 Months",
            liveProjects: "6 Live Projects",
            rating: "4.8/5",
            description: "Full-Stack MERN Training offers a comprehensive way to develop advanced data analysis and interpretation skills, equipping professionals to make informed, data-driven decisions and drive business growth with precision."
        },

    ];
    const [visibleItems, setVisibleItems] = useState(4);

    const handleViewMore = () => {
        setVisibleItems(ProgramData.length); // Show all items
    };

    return (
        <div className="container mx-auto px-2 relative">
            <div className="absolute left-0 top-0 sm:-left-80 sm:-top-52 w-72 sm:w-[600px] h-[500px] rounded-full z-[-1] bg-[rgba(255,41,41,.059)] shadow-[0_0_200px_rgba(255,41,41,.141)] opacity-80" />
            <div className="absolute top-28 sm:-left-36 sm:top-48 w-72 sm:w-[600px] h-[500px] rounded-full z-[-1] bg-[rgba(255,41,41,.059)] shadow-[0_0_200px_rgba(255,41,41,.141)] opacity-80" />
            <p class="text-2xl md:text-3xl font-bold text-center my-16 font-poppins text-[#343433]">
                {title}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {ProgramData.slice(0, visibleItems).map((item, index) => (
                    <CoursesCard key={index} data={item} />
                ))}
            </div>
            {visibleItems < ProgramData.length && (
                <div className="mt-16 mb-36 flex justify-center">
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