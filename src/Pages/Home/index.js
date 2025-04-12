import Compaines from "./Compaines";
import OneLearnCircle from "../../Components/HomePage/OneLearnCircle";
import LmsProject from "./LmsProject";
import Certificate from "./Certificate";
import GitHubProfile from "./GitHubProfile";
import ItEngineers from "./ItEngineers";
import UpcomingBatch from "./UpcomingBatch";
import WhyDigitalEdify from "./WhyDigitalEdify";
import OnlineTaining from "./OnlineTaining";
import OurLocations from "./OurLocations";
import IndiaInstitute from "./IndiaInstitute";
import Courses from "./Courses";
import Programs from "./Programs";
import GetJob from "./GetJob";
import Build from "./Build";

const Home = () => {

  return (
    <>
      <IndiaInstitute />

      <Compaines />

      <OneLearnCircle title="Learn" number="1" mainTitle="Explore the Digital Lync way" discription="Experience the New way of Learning with AI Digital Lync offers best technologies in the work, Curated for your Career Growth" />

      <div className="relative hcp">
        <Courses title="Our Trending Courses" />

        <Programs title="Our Trending Programs" />
        <div class="circlebgvoilet"></div>
      <div class="circlebgvoilet1"></div>
      <div class="circlebg"></div>
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
