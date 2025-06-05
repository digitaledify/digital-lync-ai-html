const About = () => {
    const steps = [
        {
            number: "1",
            title: "Learn",
            description:
                "Experience the New way of Learning with AI Digital Edify offers best technologies in the work, Curated for your Carrier Growth",
            color: "text-sky-500",
            lineBg: "to-sky-500",
            circleBg: "from-sky-500",
        },
        {
            number: "2",
            title: "Build",
            description:
                "Experience the New way of Learning with AI Digital Edify offers best technologies in the work, Curated for your Carrier Growth",
            color: "text-pink-600",
            lineBg: "to-pink-600",
            circleBg: "from-pink-600",
        },
        {
            number: "3",
            title: "Get Job",
            description:
                "Experience the New way of Learning with AI Digital Edify offers best technologies in the work, Curated for your Carrier Growth",
            color: "text-purple-600",
            lineBg: "to-purple-600",
            circleBg: "from-purple-600",
        },
    ];

    return (
        <div className="container px-6 py-12 mx-auto">
            {/* Header */}
            <h2 className="mb-2 text-2xl font-semibold">About Edify?</h2>
            <h1 className="mb-6 text-4xl font-bold">
                Learn. <span className="text-black">Build.</span> <span className="text-black">Get Job.</span>
            </h1>

            {/* Description */}
            <p className="mb-6 text-gray-600">
                At Digital Edify, we believe in the transformative power of education and technology.
                Established with a clear vision to empower individuals through knowledge, innovation,
                and skill-building, we have become a trusted name in the world of technology education.
            </p>

            {/* Mission and Vision */}
            <div className="mb-8">
                <p className="mb-2 font-semibold">
                    Our Mission: <span className="font-normal">Bridging the Gap Between Aspiration and Achievement</span>
                </p>
                <p className="font-semibold">
                    Our Vision: <span className="font-normal">Unlock Your Digital Potential</span>
                </p>
            </div>

            {/* Timeline */}
            <div className="relative ">
                {steps.map((step, index) => (
                    <div key={index} className="relative flex items-start">
                        {/* Circle with number */}
                        <div className="flex flex-col items-center mr-6">
                            <div className={`w-[1px] h-20 md:h-[60px] self-center pr-[1px] mx-auto bg-gradient-to-b from-white ${step.lineBg}`}></div>
                            <div className={`w-10 h-10 bg-gradient-to-r ${step.circleBg} to-slate-400  text-white rounded-full flex items-center justify-center text-base font-bold shadow-md`}>
                                {step.number}
                            </div>
                        </div>

                        {/* Step content */}
                        <div className="flex-1 mt-14">
                            <h3 className={`text-xl font-bold ${step.color} mb-2`}>{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
