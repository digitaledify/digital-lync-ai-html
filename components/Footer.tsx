"use client"
import React from 'react'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import { MdOutlineWhatsapp } from 'react-icons/md'
import { RiFacebookFill } from 'react-icons/ri'
import digitaledify from "../public/assets/digitaledify.png";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Footer = () => {
    const route = useRouter()
    return (
        <div>
            <div className=" px-1  bg-white text-black py-12 border-t border-b border-[#DDDDDD] w-full gap-10 md:gap-10 lg:gap-20 xl:gap-48 font-poppins">
                <div className="container md:flex md:justify-center">

                    <div className="mx-auto w-fit">
                        <Image src={digitaledify} priority alt="digitaledify" className="mx-auto" />
                        <p className="mt-4 text-center font-poppins">Follow us on</p>
                        <div className="flex mt-2 space-x-4">
                            <p className='hover:text-blue-500' aria-label="Facebook">
                                <RiFacebookFill size={27} />
                            </p>
                            <p className='hover:text-blue-500' aria-label="Twitter">
                                <FaTwitter size={27} />
                            </p>
                            <p className='hover:text-blue-500' aria-label="LinkedIn">
                                <FaLinkedinIn size={27} />
                            </p>
                            <p className='hover:text-blue-500' aria-label="Instagram">
                                <FaInstagram size={27} />
                            </p>
                            <p className='hover:text-blue-500' aria-label="WhatsApp">
                                <MdOutlineWhatsapp size={27} />
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto mt-8 w-fit md:mt-0">
                        <h2 className="mb-4 text-xl font-semibold text-center md:text-start">Digital Edify</h2>
                        <ul className="space-y-4">
                            <li className="bg-white hover:bg-gray-700 hover:text-white text-gray-600 border border-[#c9c9c9] rounded text-center w-fit px-2 py-[1px]  mx-auto md:mx-0">
                                <p className="cursor-pointer"
                                    onClick={() => route.push("/online-pay")}
                                >
                                    Online Pay
                                </p>
                            </li>
                            <li className="bg-white hover:bg-gray-700 hover:text-white mx-auto md:mx-0 text-gray-600 border border-[#c9c9c9] rounded text-center w-fit px-2 py-[1px] ">
                                <p className="cursor-pointer"
                                    onClick={() =>
                                        window.open(
                                            "https://rzp.io/l/1y1q7vcEF?state=hKFo2SBFWFN5eGxGcEFlRG1TcmNNVmZiVWZNRDNWdzNpZEpwR6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDd6cjdTcWVUYlFXbTRnM080X0llVG9ranNJQUNkZ09Bo2NpZNkgZzQxSlFXRGtURTRmS0FsN0wwZEZ5Q21TaW5YWExHcWg",
                                            "_blank"
                                        )
                                    }
                                >
                                    Razor Pay
                                </p>
                            </li>
                            <li className="bg-white hover:bg-gray-700 hover:text-white mx-auto md:mx-0 text-gray-600 border border-[#c9c9c9] rounded text-center w-fit px-2 py-[1px] ">
                                <p className="cursor-pointer"
                                    onClick={() => route.push("/privacy-policy")}
                                >
                                    Privacy Policy
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="mx-auto mt-8 w-fit md:mt-0">
                        <h2 className="font-semibold text-xl mb-2.5 font-poppins text-center md:text-start">Company</h2>
                        <ul>
                            <li className="pb-4 mb-4 text-center border-b md:text-start">
                                <p
                                    className="cursor-pointer hover:text-orange-500"
                                    onClick={() => route.push("/about_us")}
                                >
                                    About Us
                                </p>
                            </li>
                            <li className="mb-3 text-center md:text-start">Email: hello@digitaledify.ai</li>
                            <li className="text-center md:text-start">WhatsApp: +91 6304982304</li>
                        </ul>
                    </div>

                    <div className="mx-auto mt-8 w-fit md:mt-0">
                        <h2 className="font-semibold text-xl mb-2.5 text-center md:text-start">Reach Us</h2>
                        <ul className="space-y-2">
                            <li className="text-center md:text-start"><h1 className='font-semibold'>Corporate Office</h1></li>
                            <li className="max-w-[280px] text-center md:text-start">{`3rd Floor, Hitech City Rd, Above Domino's, opp. Cyber Towers, Jai hind Enclave, Hyderabad, Telangana,`}</li>
                            <li className="text-center md:text-start">Phone: +91 6304982304</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-3 mb-4 text-center font-poppins">
                <div className="flex items-center justify-center gap-1 text-xs">
                    © Copyright Digital Edify | 2024{" | "}
                    <p className="text-[#281af0] hover:underline cursor-pointer"
                        onClick={() => route.push("/privacy-policy")}
                    >
                        Privacy Policy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer