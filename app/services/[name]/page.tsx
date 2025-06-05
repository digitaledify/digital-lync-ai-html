"use client"
import OnlineTaining from "@/components/Home/OnlineTaining";
import OurLocations from "@/components/Home/OurLocations";
import WhyDigitalEdify from "@/components/Home/WhyDigitalEdify";
import ChooseCard from "@/components/Services/ChooseCard";
import HeroSection from "@/components/Services/HeroSection";
import { servicesData } from "@/utils/CourseData";
import { useParams } from "next/navigation";
import React from "react";


const Services = () => {
    const params = useParams();
    const name = params?.name as string;
    const serviceData = servicesData?.filter((i) => i?.course === name)?.[0];

    return (
        <div>
            <HeroSection serviceData={serviceData} />
            <ChooseCard serviceData={serviceData} />
            <WhyDigitalEdify />
            <OnlineTaining />
            <OurLocations />
        </div>
    );
};

export default Services;
