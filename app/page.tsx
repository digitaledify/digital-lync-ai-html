import Build from "@/components/Home/Build";
import Certificate from "@/components/Home/Certificate";
import Compaines from "@/components/Home/Compaines";
import Courses from "@/components/Home/Courses";
import GetJob from "@/components/Home/GetJob";
import GitHubProfile from "@/components/Home/GitHubProfile";
import IndiaInstitute from "@/components/Home/IndiaInstitute";
import ItEngineers from "@/components/Home/ItEngineers";
import LmsProject from "@/components/Home/LmsProject";
import OneLearnCircle from "@/components/Home/OneLearnCircle";
import OnlineTaining from "@/components/Home/OnlineTaining";
import OurLocations from "@/components/Home/OurLocations";
import Programs from "@/components/Home/Programs";
import UpcomingBatch from "@/components/Home/UpcomingBatch";
import WhyDigitalEdify from "@/components/Home/WhyDigitalEdify";


const Home = () => {

  return (
    <>
      <IndiaInstitute />
      <Compaines />
      <OneLearnCircle title="Learn" number="1" mainTitle="Explore the Digital Edify way" discription="Experience the New way of Learning with AI Digital Edify offers best technologies in the work, Curated for your Career Growth" />
      <div className="relative hcp">
        <Courses title="Our Trending Courses" />

        <Programs title="Our Trending Programs" />
        <div className="circlebgvoilet"></div>
        <div className="circlebgvoilet1"></div>
        <div className="circlebg"></div>
      </div>

      <Build />
      <LmsProject />

      <Certificate />

      <GetJob />

      <GitHubProfile />

      <ItEngineers />

      <UpcomingBatch />

      <WhyDigitalEdify />

      <OnlineTaining />

      <OurLocations />

    </>
  );
};

export default Home;
