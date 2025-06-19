import Courses from '@/components/Home/Courses';
import OnlineTaining from '@/components/Home/OnlineTaining';
import Programs from '@/components/Home/Programs';
import React from 'react';

const Blogs = () => {

    const blogData = [
        {
            title: "Freelancing vs. Full-Time Job for DevOps Engineers – Which Path is Right for You?",
            category: "Freelancing vs. Full-Time Job",
            description:
                "The path you take in DevOps can define your future – from the challenges you solve every day to the skills you build, the salary you earn, and the fulfillment you experience. As the need for DevOps experts skyrockets, two exciting directions are calling: which one will shape your journey ahead?",
            date: "Oct 23, 2024",
            readTime: "8 min read",
            bgClass: "bg-gradient-to-r from-[#006FBE] to-[#001BD2]",
        },
        {
            title: "DevOps Engineer vs Cloud Engineer: Key Roles, Differences, and Collaboration",
            category: "DevOps Engineers",
            description:
                "The path you take in DevOps can define your future – from the challenges you solve every day to the skills you build, the salary you earn, and the fulfillment you experience. As the need for DevOps experts skyrockets, two exciting directions are calling: which one will shape your journey ahead?",
            date: "Oct 23, 2024",
            readTime: "8 min read",
            bgClass: "bg-gradient-to-r from-[#006FBE] to-[#A60996]",
        },
        {
            title: "CKS Exam Updates 2024: Your Complete Guide..",
            category: "Certified Kubernetes Security Specialist (CKS)",
            description: "The path you take in DevOps can define your future – from the challenges you solve every day to the skills you build.",
            date: "Oct 23, 2024",
            readTime: "8 min read",
            bgClass: "bg-gradient-to-b from-[#5305C7] to-[#006FBE]",
        },
        {
            title: "Top 10 Cloud Computing Skills You Need in 2024",
            category: "Cloud Computing",
            description:
                "The path you take in DevOps can define your future – from the challenges you solve every day to the skills you build, the salary you earn, and the fulfillment you experience. As the need for DevOps experts skyrockets, two exciting directions are calling: which one will shape your journey ahead?",
            date: "Oct 23, 2024",
            readTime: "8 min read",
            bgClass: "bg-gradient-to-b from-[#5F01C4] to-[#A90798]",
        },
        {
            title: "Top 10 Cloud Computing Skills You Need in 2024",
            category: "Cloud Computing",
            description:
                "The path you take in DevOps can define your future – from the challenges you solve every day to the skills you build, the salary you earn, and the fulfillment you experience. As the need for DevOps experts skyrockets, two exciting directions are calling: which one will shape your journey ahead?",
            date: "Oct 23, 2024",
            readTime: "8 min read",
            bgClass: "bg-gradient-to-b from-[#4D00C9] to-[#0100D6]",
        },
    ];

    const myData = ["Java(2)", "UI/UX(6)", "Python(10)", "ReactJS(20)", "FullStack(11)", "ServiceNow(22)", "Business Analyst(12)",]

    return (
        <>
            <div className="container text-center tag-list font-poppins">
                <h1 className="text-3xl md:text-[42px] font-semibold text-black mb-5 mt-10">Blogs</h1>
                <div className='flex justify-center'>
                    <div className="w-5 h-5 rounded-full text-white font-bold mb-[-10px] bg-gradient-to-r from-[#ca0063] to-[#042bd0]">
                        <p className='mt-2 text-center'>
                        </p>
                    </div>
                </div>
                <div className="w-[1px] h-14 md:h-[60px] self-center pr-[1px] mx-auto bg-gradient-to-t from-white to-[#9a1fb8]"></div>
                <p className="mb-10 text-sm site-description md:text-base">
                    Explore our latest insights on DevOps. Get practical tips on <br />
                    tools like Azure, Docker, and Kubernetes. Straightforward advice for
                    your DevOps. <br /> Join us and make your DevOps journey better.
                </p>
                <ul className="flex flex-wrap justify-center gap-2">
                    {myData?.map((item) => (
                        <li key={item} className="bg-gradient-to-r from-[#0D70BB] to-[#F97DBD] rounded-full px-4 py-2 text-white cursor-pointer">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="container pt-8 font-poppins">
                <div className="flex flex-wrap">
                    {/* Left Column */}
                    <div className="w-full p-4 md:w-2/3 ">
                        <div className="blogbanner bg-gradient-to-r from-[#012BD3] to-[#C30161] text-white py-24 text-center rounded-lg">
                            <h2 className="text-3xl lg:text-[45px] leading-[30px] md:leading-[60px] py-4">
                                DevOps vs. DevSecOps: <br /> A Beginner-Friendly Guide
                            </h2>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full p-4 md:w-1/3">
                        <h6 className="">DevOps</h6>
                        <h3 className="mb-4 text-xl lg:text-3xl">
                            DevOps vs. DevSecOps: A Beginner-Friendly Guide
                        </h3>
                        <p className="mb-4 text-sm text-gray-700 md:text-base">
                            Imagine a company where everything is running smoothly. The DevOps process is in place, and teams are
                            pushing software updates regularly without delays. It’s the release week for a major feature—developers
                            are excited, operations are ready, and everything seems to be on track. But just days before...
                        </p>
                        <p className="">
                            Oct 30, 2024 — 6 min read
                        </p>
                    </div>
                </div>
            </div>

            <div className="container px-5 py-8 font-poppins">
                <div className="grid grid-cols-1 gap-6 mb-5 md:grid-cols-2">
                    {blogData.slice(0, 2).map((card, index: number) => (
                        <div key={index} className="bg-white rounded-lg">
                            <div className={`p-6 text-white ${card.bgClass} rounded-t-lg`}>
                                <h4 className="text-2xl">{card.title}</h4>
                            </div>
                            <div className="p-4 text-gray-800">
                                <h6 className="">{card.category}</h6>
                                <h4 className="mt-2 text-xl font-medium">{card.title}</h4>
                                <p className="mt-2 text-sm">{card.description}</p>
                                <p className="mt-4 text-sm">
                                    {card.date} — {card.readTime}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 gap-6 mt-16 lg:grid-cols-3">
                    {blogData.slice(2).map((card, index: number) => (
                        <div key={index} className="bg-white rounded-lg">
                            <div className={`p-6 text-white ${card.bgClass} rounded-t-lg`}>
                                <h4 className="text-2xl">{card.title}</h4>
                            </div>
                            <div className="p-4 text-gray-800">
                                <h6 className="">{card.category}</h6>
                                <h4 className="mt-2 text-xl font-medium">{card.title}</h4>
                                <p className="mt-2 text-sm">{card.description}</p>
                                <p className="mt-4 text-sm">
                                    {card.date} — {card.readTime}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Courses title="Our Trending Courses" />
            <Programs title="Our Trending Programs" />

            <div className='mt-32'>
                <OnlineTaining />
            </div>
        </>
    );
};

export default Blogs;
