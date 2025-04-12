import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Course from "../Pages/Course";
import Programs from "../Pages/Programs";
import Services from "../Pages/Services";
import DemoPage from "../Pages/DemoPage";
import Blogs from "../Pages/Blogs";
import AboutUs from "../Pages/AboutUs";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import OnlinePay from "../Pages/OnlinePay";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/courses/:name" element={<Course />} />
    <Route path="/programs/:name" element={<Programs />} />
    <Route path="/services/:name" element={<Services />} />
    <Route path="/company/about-us" element={<AboutUs />} />
    <Route path="/blogs/edify-blogs" element={<Blogs />} />
    <Route path="/demos/edify-demos" element={<DemoPage />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/online-pay" element={<OnlinePay />} />
    <Route path="*" element={<Home />} />
  </Routes>
);

export default AppRoutes;
