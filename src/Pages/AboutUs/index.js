import React from "react";
import { useState } from 'react';
import WhyChooseCard from "./WhyChooseCard";
import WhyDigitalEdify from "../Home/WhyDigitalEdify";
import OnlineTaining from "../Home/OnlineTaining";
import OurLocations from "../Home/OurLocations";
import HeroSection from "./HeroSection";
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  const [pageTitle, setPageTitle] = useState("Digital Lync: India's #1 Premium Training Institute");
  const [pageDescription, setPageDescription] = useState("Digital Lync Online Traninig Course- Choose your course today, experience great success tomorrow. Enrol Today");
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
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <HeroSection
        name="About Us"
        disc="where education meets innovation. Since our establishment in 2017, we've been committed to empowering individuals with the skills and knowledge to excel in the ever-evolving world of technology."
        boldDisc="Welcome to Digital Lync - "
      />
      <h3 class="text-center text-2xl md:text-4xl p-1 bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#8D65E9] via-[#aa0091] to-[#bf1e64] mt-24 mb-2.5 font-poppins">
        Who We Are
      </h3>
      <div class="font-poppins flex justify-center mb-16">
        <p className="md:w-2/5 text-center">
          Digital Lync is India's premier training institute specializing in
          cutting-edge IT education. With campuses in{" "}
          <strong> Hyderabad, Bangalore, </strong>and <strong>Kakinada,</strong>{" "}
          we offer top-notch classroom and online training programs designed to
          transform your career prospects.
        </p>
      </div>

      <div className="container">
        <hr />
      </div>

      <h3 class="text-center text-2xl md:text-4xl p-1 font-poppins font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8D65E9] via-[#aa0091] to-[#bf1e64] mt-16 mb-2.5">
        Why Choose Digital Lync?
      </h3>
      <div class="font-poppins flex justify-center mb-16">
        <p className="md:w-2/3 text-center">
          Choosing the right educational partner is crucial for your success.
          Here's why Digital Lync stands out
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 container mb-5">
        {mydata?.map((item, index) => {
          return <WhyChooseCard data={item} />;
        })}
      </div>

      <div className="container">
        <hr />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center container font-poppins  gap-7 my-16">
        <p className="text-center md:text-right w-[95%] mx-auto">
          At Digital Lync, we're dedicated to providing an educational
          experience that goes beyond traditional learning. We focus on
          practical skills, real-world projects, and personal development to
          ensure you are fully prepared for the challenges of the tech industry.
        </p>
        <h3 class="text-center md:text-left text-2xl md:text-4xl p-1 font-poppins font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#8D65E9] via-[#aa0091] to-[#bf1e64]">
          Empower Your Future. <br /> Choose Digital Lync.
        </h3>
      </div>

      <WhyDigitalEdify />

      <OnlineTaining />

      <OurLocations />
    </>
  );
};

export default AboutUs;
