import React from 'react';
import { useState } from 'react';
import CoursesCard from '../../Components/HomePage/CoursesCard';
import OnlineTaining from '../Home/OnlineTaining';
import { Helmet } from 'react-helmet';
 

const DemoPage = () => {
    const [pageTitle, setPageTitle] = useState("Digital Lync: India's #1 Premium Training Institute");
    const [pageDescription, setPageDescription] = useState("Digital Lync Online Traninig Course- Choose your course today, experience great success tomorrow. Enrol Today");
    

    const Data = [ 

        {
            courseName: "Comprehensive Guide To DevOps",
            description:
                "In today's fast-paced technological landscape, the need for efficient software development and IT operations...",
        },
        {
            courseName: "Comprehensive Guide To AWS",
            description:
                "In today's cloud-first world, businesses increasingly rely on scalable and flexible infrastructure...",
        },
        {
            courseName: "Comprehensive Guide To Azure",
            description:
                "In today’s cloud-driven landscape, businesses are progressively turning to scalable and flexible...",
        },
        {
            courseName: "Comprehensive Guide To Java",
            description:
                "Java is one of the most popular programming languages globally, known for its ...",
        },
        {
            courseName: "Salesforce Demo",
            description:
                "The Salesforce Course Curriculum covers extensive topics, including...",
        },
        {
            courseName: "React Js Demo Demo",
            description:
                "The Fundamentals of IT course offers a comprehensive understanding of applications ...",
        },
        {
            courseName: "Application Demo",
            description:
                "The Fundamentals of IT course covers a wide range of topics, from applications ...",
        },
        {
            courseName: "Comprehensive Guide To AWS Data Engineering",
            description:
                "In today's data-centric world, organizations generate vast amounts of data every second. The ability to...",
        },
        {
            courseName: "Comprehensive Guide To Azure Data Engineering",
            description:
                "In today's data-driven world, the ability to store, process, and analyze large...",
        },
        {
            courseName: "Comprehensive Guide to GCP Data Engineering",
            description:
                "In today's data-centric world, organizations generate vast amounts of data every second. The ability to...",
        },

    ];

    return (
        <>
          <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Helmet>
            <div className='bg-[#FAFAFA]'>
                <div className="tag-list text-center font-poppins container">
                    <h1 className="text-3xl md:text-[42px] font-semibold text-black mb-5 pt-10">Demos</h1>
                    <div className='flex justify-center'>
                        <div className="w-5 h-5 rounded-full text-white font-bold mb-[-10px] bg-gradient-to-r from-[#ca0063] to-[#042bd0]">
                            <p className='text-center mt-2'>
                            </p>
                        </div>
                    </div>
                    <div className="w-[1px] h-14 md:h-[60px] self-center pr-[1px] mx-auto bg-gradient-to-t from-white to-[#9a1fb8]"></div>
                    <p className="site-description mb-10 text-sm md:text-base">
                        Explore our latest insights on DevOps. Get practical tips on <br />
                        tools like Azure, Docker, and Kubernetes. Straightforward advice for
                        your DevOps. <br /> Join us and make your DevOps journey better.
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 container">
                    {Data?.map((item, index) => {
                        return <CoursesCard data={item} />;
                    })}
                </div>

                <div className='mt-20'>
                    <OnlineTaining />
                </div>
            </div>
        </>
    )
}

export default DemoPage
