import HeroSection from "@/components/AboutUs/HeroSection";
import WhyChooseCard from "@/components/AboutUs/WhyChooseCard";
import Courses from "@/components/Home/Courses";
import OnlineTaining from "@/components/Home/OnlineTaining";
import OurLocations from "@/components/Home/OurLocations";
import Programs from "@/components/Home/Programs";
import WhyDigitalEdify from "@/components/Home/WhyDigitalEdify";
import React from "react";


const AboutUs = () => {
    const mydata = [
        {
            title: "Experienced Instructors",
            description:
                "Learn from industry experts with real-world experience and a passion for teaching.",
            number: "1",
        },
        {
            title: "Comprehensive Curriculum",
            description:
                "Stay ahead with courses covering the latest trends and technologies in the IT industry.",
            number: "2",
        },
        {
            title: "Personalized Support",
            description:
                "Receive individual guidance and mentorship throughout your learning journey.",
            number: "3",
        },
        {
            title: "State-of-the-Art Facilities",
            description:
                "Our modern campuses are equipped with advanced technology and resources to enhance your learning.",
            number: "4",
        },
        {
            title: "Industry Partnerships",
            description:
                "Benefit from our collaborations with over 100 industry leaders for internships and job placements.",
            number: "5",
        },
        {
            title: "Proven Success Record",
            description:
                "Join a community of over 100,000 learners who have successfully advanced their careers with us.",
            number: "6",
        },
    ];

    return (
        <>
            <HeroSection
                name="About Us"
                disc="where education meets innovation. Since our establishment in 2017, we've been committed to empowering individuals with the skills and knowledge to excel in the ever-evolving world of technology."
                boldDisc="Welcome to Digital Edify - "
            />
            <h3 className="text-center text-2xl md:text-4xl p-1 bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#8D65E9] via-[#aa0091] to-[#bf1e64] mt-24 mb-2.5 font-poppins">
                Who We Are
            </h3>
            <div className="flex justify-center mb-16 font-poppins">
                <p className="text-center md:w-2/5">
                    {`Digital Edify is India's premier training institute specializing in
                    cutting-edge IT education. With campuses in`}{" "}
                    <strong>{` Hyderabad, Bangalore,`} </strong>and <strong>{`Kakinada,`}</strong>{" "}
                    we offer top-notch classroom and online training programs designed to
                    transform your career prospects.
                </p>
            </div>

            <div className="container">
                <hr />
            </div>

            <h3 className="text-center text-2xl md:text-4xl p-1 font-poppins font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8D65E9] via-[#aa0091] to-[#bf1e64] mt-16 mb-2.5">
                Why Choose Digital Edify?
            </h3>
            <div className="flex justify-center mb-16 font-poppins">
                <p className="text-center md:w-2/3">
                    {`Choosing the right educational partner is crucial for your success.
                    Here's why Digital Edify stands out`}
                </p>
            </div>

            <div className="container grid grid-cols-1 mb-5 md:grid-cols-2">
                {mydata?.map((item, index: number) => {
                    return <WhyChooseCard data={item} key={index} />;
                })}
            </div>

            <Courses title="Our Trending Courses" />
            <Programs title="Our Trending Programs" />
            <div className="container">
                <hr />
            </div>

            <div className="container grid items-center grid-cols-1 my-16 md:grid-cols-2 font-poppins gap-7">
                <p className="text-center md:text-right w-[95%] mx-auto">
                    {` At Digital Edify, we're dedicated to providing an educational
                    experience that goes beyond traditional learning. We focus on
                    practical skills, real-world projects, and personal development to
                    ensure you are fully prepared for the challenges of the tech industry.`}
                </p>
                <h3 className="text-center md:text-left text-2xl md:text-4xl p-1 font-poppins font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8D65E9] via-[#aa0091] to-[#bf1e64]">
                    Empower Your Future. <br /> Choose Digital Edify.
                </h3>
            </div>

            <WhyDigitalEdify />


            <OnlineTaining />

            <OurLocations />
        </>
    );
};

export default AboutUs;
