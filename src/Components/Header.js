import React, { useEffect, useState } from "react";
import digitaledify from "../assets/logo-digital-lync.webp";
import { FaAngleDown, FaBars } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import StartNowModal from "./HomePage/StartNowModal";
import { LuChevronDown } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = (data) => {
    setIsDropdownOpen(data);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 right-0 z-50 bg-white border-b lg:-left-2">
      <div className="container mx-auto relative">
        <div className="flex items-center justify-between px-8 py-3 pb-2 lg:p-0 lg:px-0">
          {/* Logo */}
          <div>
            <img
              onClick={() => navigate("/")}
              src={digitaledify}
              alt="Digital Lync - Best AWS"
              title="Digital Lync - Best AWS"
              loading="lazy"
              className="cursor-pointer h-16"
            />
          </div>
          {/* Mobile Menu Icon */}
          <div className="z-20 lg:hidden">
            <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <div
            className={` ${isMobileMenuOpen ? "block px-6 pt-10" : "hidden"
              } fixed  top-0 left-0 w-full lg:w-auto h-screen lg:h-auto flex flex-col lg:flex-row transition-all bg-white lg:bg-transparent lg:flex gap-3 md:gap-6 lg:items-center relative`}
          >
            <div className="content-center ">
              <ul className="flex flex-col lg:flex-row lg:gap-5 ">
                <li
                  className=""
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    className={`font-normal py-7 relative text-sm font-poppins anim-boder uppercase flex gap-2 items-center cursor-pointer ${isDropdownOpen === 1
                        ? "border-0 border-b-[#F06292]"
                        : "border-0"
                      } `}
                  >
                    Courses <LuChevronDown size={15} />
                  </a>
                  {isDropdownOpen === 1 && (
                    <div className="absolute top-[77px] -left-2 r0  px-5 bg-[#fafafa] z-10 shadow-lg rounded-lg p-4 ">
                      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
                        {/* Application Stack */}
                        <div className="w-60">
                          <h5 className="mb-3 font-normal text-sky-600">
                            Application Stack
                          </h5>
                          <ul className="space-y-2">
                            <li>
                              <p
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                                onClick={() => {
                                  navigate(
                                    "/courses/java-training-certification"
                                  );
                                  closeMobileMenu();
                                }
                                }
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Java
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => {
                                  navigate(
                                    "/courses/python-training-certification"
                                  );
                                  closeMobileMenu();
                                }
                                }
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Python
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => {
                                  navigate(
                                    "/courses/react-js-training-certification"
                                  );
                                  closeMobileMenu();
                                }
                                }
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                React JS
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => {
                                  navigate("/courses/ui-ux-design-training");
                                  closeMobileMenu();
                                }
                                }
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                UI/UX Design
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => {
                                  navigate("/courses/fullstack-java-training-certification");
                                  closeMobileMenu();
                                }
                                }
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                FullStack Java
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => {
                                  navigate("/courses/fullstack-mern-training-certification");
                                  closeMobileMenu();
                                }
                                }
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                FullStack MERN
                              </p>
                            </li>

                            <li>
                              <p
                                onClick={() => {
                                  navigate("/courses/fullstack-python-training-certification");
                                  closeMobileMenu();
                                }
                                }
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                FullStack Python
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => {
                                  navigate("/courses/fullstack-ui-ux-design-training");
                                  closeMobileMenu();
                                }
                                }
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                FullStack UI/UX
                              </p>
                            </li>
                            
                          </ul>
                        </div>
                        {/* Platform Stack */}
                        <div className="w-60">
                          <h5 className="mb-3 font-normal text-sky-600">
                            Platform Stack
                          </h5>
                          <ul className="space-y-2">
                            
                            <li>
                              <p
                                onClick={() => {
                                  navigate(
                                    "/courses/devops-training-certification"
                                  );
                                  closeMobileMenu();
                                }
                                }
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                DevOps
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => {
                                  navigate(
                                    "/courses/azure-devops-training-certification"
                                  );
                                  closeMobileMenu();
                                }
                                }
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Azure DevOps
                              </p>
                            </li>

                            <li>
                              <p
                                onClick={() => {
                                  navigate(
                                    "/courses/devops-aws-training-certification"
                                  );
                                  closeMobileMenu();
                                }
                                }
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                DevOps With AWS
                              </p>
                            </li>

<li>
                              <p
                                onClick={() => {
                                  navigate(
                                    "/courses/multi-cloud-devops-certification"
                                  );
                                  closeMobileMenu();
                                }
                                }
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                              Multi Cloud DevOps
                              </p>
                            </li>

                            <li>
                              <p
                                onClick={() => {
                                  navigate(
                                    "/courses/servicenow-training-certification"
                                  );
                                  closeMobileMenu();
                                }
                                }
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                               ServiceNOW
                              </p>
                            </li>
                           
                            <li>
                              <p
                                onClick={() => {
                                  navigate(
                                    "/courses/sales-force-training-certification"
                                  );
                                  closeMobileMenu();
                                }
                                }
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Salesforce
                              </p>
                            </li>
                          </ul>
                        </div>
                        {/* AI Data Stack */}
                        <div className="w-60">
                          <h5 className="mb-3 font-normal text-sky-600">
                            AI Data Stack
                          </h5>
                          <ul className="space-y-2">
                             <li>
                              <p
                                onClick={() => {
                                  navigate(
                                    "/courses/power-bi-training-certification"
                                  );
                                  closeMobileMenu();
                                }
                                }
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                                Power BI
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => {
                                  navigate(
                                    "/courses/data-science-training-certification"
                                  );
                                  closeMobileMenu();
                                }
                                }
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                               Data Science
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => {
                                  navigate(
                                    "/courses/data-analyst-certification"
                                  );
                                  closeMobileMenu();
                                }
                                }
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                              Data Analyst
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => {
                                  navigate(
                                    "/courses/data-analysis-training-certification"
                                  );
                                  closeMobileMenu();
                                }
                                }
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                              Data Analytics
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => {
                                  navigate("/courses/business-analyst-training-certification");
                                  closeMobileMenu();
                                }
                                }
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                              Business Analyst
                              </p>
                            </li>

                            <li>
                              <p
                                onClick={() => {
                                  navigate(
                                    "/courses/business-analytics-training-certification"
                                  );
                                  closeMobileMenu();
                                }
                                }
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                               Business Analytics
                              </p>
                            </li>
                            <li>
                              <p
                                onClick={() => {
                                  navigate(
                                    "/courses/azure-data-engineering-training-certification"
                                  );
                                  closeMobileMenu();
                                }
                                }
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                             Azure Data Engineering
                              </p>
                            </li>
                             <li>
                              <p
                                onClick={() => {
                                  navigate(
                                    "/courses/ai-training-certification"
                                  );
                                  closeMobileMenu();
                                }
                                }
                                className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                              >
                                <MdKeyboardDoubleArrowRight
                                  color="#ca0067"
                                  className="font-normal"
                                  size={18}
                                />
                           Artificial Intelligence (AI)

                              </p>
                            </li>
                           
                          </ul>
                        </div>

                      </div>
                    </div>
                  )}
                </li>
                <li
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    className={`font-normal text-sm font-poppins uppercase anim-boder flex gap-2 items-center cursor-pointer py-7 ${isDropdownOpen === 2
                        ? "border-0 border-b-[#F06292]"
                        : "border-0"
                      }`}
                  >
                    Programs <LuChevronDown size={15} />
                  </a>
                  {isDropdownOpen === 2 && (
                    <div className="absolute top-[77px] -left-2  bg-[#fafafa] z-10 shadow-lg rounded-lg p-4 w-max">
                      {/* Application Stack */}
                      <div className="w-60">
                        <ul className="space-y-2">
                          <li>
                            <p
                              onClick={() => {
                                navigate("/programs/full-ai-stack-training");
                                closeMobileMenu();
                              }
                              }
                              className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                            Full AI Stack
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() => {
                                navigate("/programs/full-stack-with-ai-training");
                                closeMobileMenu();
                              }
                              }
                              className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                            Full Stack With AI
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() => {
                                navigate("/programs/data-analyst-with-ai-training");
                                closeMobileMenu();
                              }
                              }
                              className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                             Data Analyst With AI
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() => {
                                navigate(
                                  "/programs/platform-stack-with-ai-training"
                                );
                                closeMobileMenu();
                              }
                              }
                              className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Platform Stack With AI
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() => {
                                navigate(
                                  "/programs/multi-cloud-devops-training"
                                );
                                closeMobileMenu();
                              }
                              }
                              className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                             Multi-Cloud DevOps
                            </p>
                          </li>
                           
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
                <li
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    className={`font-normal text-sm font-poppins uppercase anim-boder flex gap-2 items-center cursor-pointer py-7 ${isDropdownOpen === 3
                        ? "border-0 border-b-[#F06292]"
                        : "border-0"
                      }`}
                  >
                    Services <LuChevronDown size={15} />
                  </a>
                  {isDropdownOpen === 3 && (
                    <div className="absolute top-[77px] -left-2  bg-[#fafafa] z-10 shadow-lg rounded-lg p-4 w-max">
                      {/* Application Stack */}
                      <div className="w-60">
                        <ul className="space-y-2">
                          <li>
                            <p
                              onClick={() => {
                                navigate("/services/class-training");
                                closeMobileMenu();
                              }
                              }
                              className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Class Training
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() => {
                                navigate("/services/online-training");
                                closeMobileMenu();
                              }
                              }
                              className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Online Training
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() => {
                                navigate("/services/weekend-training");
                                closeMobileMenu();
                              }
                              }
                              className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Weekend Training
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() => {
                                navigate("/services/corporate-training");
                                closeMobileMenu();
                              }
                              }
                              className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Corporate Training
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() => {
                                navigate("/services/one-to-one-training");
                                closeMobileMenu();
                              }
                              }
                              className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              One-To-One Training
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
                <li
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(4)}
                  onMouseLeave={handleMouseLeave}
                >
                  <p
                    className={`font-normal text-sm font-poppins text-sm anim-boder uppercase flex gap-2 items-center cursor-pointer py-7 ${isDropdownOpen === 4
                        ? "border-0 border-b-[#F06292]"
                        : "border-0"
                      }`}
                  >
                    Resources <LuChevronDown size={15} />
                  </p>
                  {isDropdownOpen === 4 && (
                    <div className="absolute top-[77px] -left-2  bg-[#fafafa] z-10 shadow-lg rounded-lg p-4 w-max">
                      {/* Application Stack */}
                      <div className="w-60">
                        <ul className="space-y-2">
                          <li>
                            <p
                              onClick={() => { navigate("/blogs/edify-blogs"); closeMobileMenu(); }}
                              className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Blogs
                            </p>
                          </li>
                          <li>
                            <p
                              onClick={() => { navigate("/demos/edify-demos"); closeMobileMenu(); }}
                              className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              Demos
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
                <li
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(5)}
                  onMouseLeave={handleMouseLeave}
                >
                  <p
                    className={`font-normal text-sm font-poppins anim-boder uppercase flex gap-2 items-center cursor-pointer py-7 ${isDropdownOpen === 5
                        ? "border-0 border-b-[#F06292]"
                        : "border-0"
                      }`}
                  >
                    Company <LuChevronDown size={15} />
                  </p>
                  {isDropdownOpen === 5 && (
                    <div className="absolute top-[77px] -left-2  bg-[#fafafa] z-10 shadow-lg rounded-lg p-4 w-max">
                      {/* Application Stack */}
                      <div className="w-60">
                        <ul className="space-y-2">
                          <li>
                            <p
                              onClick={() => { navigate("/company/about-us"); closeMobileMenu(); }}
                              className="flex items-center text-sm text-gray-600 cursor-pointer hover:text-blue-500 hover:gap-2"
                            >
                              <MdKeyboardDoubleArrowRight
                                color="#ca0067"
                                className="font-normal"
                                size={18}
                              />
                              About Us
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </div>
            <div className="flex gap-5 h-fit">
              <button
                onClick={() =>
                  window.open(
                    "https://digitallync.us.auth0.com/u/login?state=hKFo2SBFWFN5eGxGcEFlRG1TcmNNVmZiVWZNRDNWdzNpZEpwR6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDd6cjdTcWVUYlFXbTRnM080X0llVG9ranNJQUNkZ09Bo2NpZNkgZzQxSlFXRGtURTRmS0FsN0wwZEZ5Q21TaW5YWExHcWg",
                    "_blank"
                  )
                }
                className="bg-white font-poppins text-[15px] xl:text-base border border-black py-2 px-6 rounded-3xl hover:text-blue-800 hover:border-blue-800"
              >
                Login
              </button>
              <button
                className="text-white font-poppins text-[15px] xl:text-base bg-[#015DBE] py-2 px-6 rounded-3xl  hover:bg-pink-700"
                onClick={() => setIsOpen(!isOpen)}
              >
                Start Now
              </button>
            </div>
          </div>
        </div>
        {isOpen && <StartNowModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </header>
  );
};

export default Header;
