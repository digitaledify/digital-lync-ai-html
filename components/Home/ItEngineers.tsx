import React from 'react'
import Infosys from "../../public/assets/Compaines/p5.webp";
import oracle from "../../public/assets/oracle.webp";
import c360soft from "../../public/assets/c360soft.webp";
import jpmore from "../../public/assets/jpmorgan.webp";
import person from "../../public/assets/satish.webp";
import person2 from "../../public/assets/vijay.webp";
import person3 from "../../public/assets/akhil.webp";
import person4 from "../../public/assets/raveena.png";
import EngineerCard from '../EngineerCard';
import { StaticImageData } from 'next/image';

interface EngineerData {
    id: number;
    name: string;
    role: string;
    company: string;
    companyLogo: string | StaticImageData; // Assuming companyLogo is a string (path to image)
    profilePic: string | StaticImageData; // Assuming profilePic is a string (path to image)
    linkedIn: string;
}
const ItEngineers = () => {

    const engineersData: EngineerData[] = [
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
            <p className="mb-24 text-2xl font-bold text-center md:text-3xl font-poppins">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                    IT Engineers
                </span>{" "}
                who got Trained from Digital Edify
            </p>

            <div className="container flex flex-wrap justify-center gap-16 mx-auto md:gap-6">
                {engineersData.map((engineer) => (
                    <EngineerCard data={engineer} key={engineer?.id} />
                ))}
            </div>
        </div>
    )
}

export default ItEngineers