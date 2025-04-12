import React from 'react'
import EngineerCard from '../../Components/HomePage/EngineerCard';
import Infosys from "../../assets/Compaines/p5.webp";
import oracle from "../../assets/oracle.webp";
import c360soft from "../../assets/c360soft.webp";
import jpmore from "../../assets/jpmorgan.webp";
import person from "../../assets/satish.webp";
import person2 from "../../assets/vijay.webp";
import person3 from "../../assets/akhil.webp";
import person4 from "../../assets/raveena.png";

const ItEngineers = () => {

    const engineersData = [
        {
            id: 1,
            name: "Satish Korlapati",
            role: "Senior Associate Consultant",
            company: "Infosys",
            companyLogo: Infosys,
            profilePic: person,
            linkedIn: "#",
        },
        {
            id: 2,
            name: "Raveena Reddy",
            role: "SRE/DevOps Engineer",
            company: "JPMorgan",
            companyLogo: jpmore,
            profilePic: person4,
            linkedIn: "#",
        },
        {
            id: 3,
            name: "Akhil Nagothu",
            role: "Cloud DevOps Engineer-2",
            company: "Oracle",
            companyLogo: oracle,
            profilePic: person3,
            linkedIn: "#",
        },
        {
            id: 4,
            name: "Vijay Kumar Putturu",
            role: "Cloud DevOps Engineer",
            company: "C360 Soft",
            companyLogo: c360soft,
            profilePic: person2,
            linkedIn: "#",
        },
    ];


    return (
        <div className="max-w-full mx-auto mt-20 py-20 bg-[#fafafa] ">
            <p className="text-center text-2xl md:text-3xl font-bold mb-24 font-poppins">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                    IT Engineers
                </span>{" "}
                who got Trained from Digital Lync
            </p>

            <div className="flex flex-wrap justify-center gap-16 md:gap-6 container mx-auto">
                {engineersData.map((engineer) => (
                    <EngineerCard data={engineer} />
                ))}
            </div>
        </div>
    )
}

export default ItEngineers