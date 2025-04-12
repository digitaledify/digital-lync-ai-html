import React from "react";
import HeroSection from "./HeroSection";
import WhyDigitalEdify from "../Home/WhyDigitalEdify";
import OnlineTaining from "../Home/OnlineTaining";
import OurLocations from "../Home/OurLocations";
import ChooseCard from "./ChooseCard";
import { servicesData } from "../../utils/CourseData";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Services = () => {
  const { name } = useParams();
  const serviceData = servicesData?.filter((i) => i?.course === name)?.[0];

  return (
    <div>
       <Helmet>
      <title> {`${serviceData?.pageTitle}`} </title>
      <meta name="description" content={serviceData?.pageDescription}/>
      </Helmet>
      <HeroSection serviceData={serviceData} />
      <ChooseCard serviceData={serviceData} />
      <WhyDigitalEdify />
      <OnlineTaining />
      <OurLocations />
    </div>
  );
};

export default Services;
