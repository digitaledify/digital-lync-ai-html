"use client"
import axios from "axios";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";

interface StartNowModalProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

interface FormData {
    name: string;
    phone: string;
    email: string;
}

const StartNowModal: React.FC<StartNowModalProps> = ({ isOpen, setIsOpen }) => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        phone: "",
        email: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    console.log("🚀 ~ errors:", errors)
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    const closeModal = () => {
        setFormData({
            name: "",
            phone: "",
            email: "",
        })
        setErrors({})
        setIsOpen(false)
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handlePhoneChange = (value: string) => {
        setFormData({ ...formData, phone: value });
        setErrors({ ...errors, phone: "" });
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData?.name?.trim()) {
            newErrors.name = "Name is required.";
        }
        if (!formData?.phone?.trim() || (formData?.phone?.length < 10)) {
            newErrors.phone = "A valid phone number is required.";
        }
        if (
            !formData?.email?.trim() ||
            !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData?.email)
        ) {
            newErrors.email = "A valid email is required.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            setLoading(true);
            try {

                // const data = {
                //     ...formData,
                //     countryCode: "91",
                //     leadSource: "WebSite",
                //     leadStage: "lead",
                //     leadSourceURL: window.location.href,
                // }

                // const response = await fetch(
                //     `${process.env.REACT_APP_API ||
                //     // "https://dev.crm.digitaledify.ai/api/v1/leads"
                //     "http://localhost:3001/api/v1/leads"
                //     // "https://dev.crm.skillcapital.ai/api/v1/leads"
                //     }`,
                //     {
                //         method: "POST",
                //         headers: {
                //             "Content-Type": "application/json",
                //         },
                //         body: JSON.stringify(data),
                //     }
                // );

                // debugger
                // if (!response.ok) {
                //     const errorData = await response.json();
                //     throw new Error(errorData.message || "Something went wrong.");
                // }

                // // const data = await response.json();
                // // console.log("🚀 ~ handleSubmit ~ data:", data)
                // setLoading(false);
                // toast.success("Form submitted successfully!");
                // closeModal();

                const data = {
                    ...formData,
                    countryCode: "91",
                    leadSource: "WebSite",
                    leadStage: "lead",
                    leadSourceURL: window.location.href,
                };

                const response = await axios.post(
                    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api/leads",
                    data,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        // timeout: 10000, // (optional) 10 sec timeout
                    }
                );

                console.log("🚀 ~ handleSubmit ~ response:", response.data);

                setLoading(false);
                toast.success("Form submitted successfully!");
                closeModal();
            } catch (error: unknown) {
                if (error instanceof Error) {
                    toast.error(`Error submitting form: ${error.message}`);
                } else {
                    toast.error("An unknown error occurred while submitting the form.");
                }
                setLoading(false);
            }
        } else {
            console.error("Form validation failed: ");
        }
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 w-full h-full bg-black bg-opacity-80 getpopup">
                    <div className="bg-white shadow-lg max-w-sm w-full relative justify-self-center top-20 min-w-[398px]">
                        {/* Modal header */}
                        <div className="flex justify-between items-center p-4 h-[68px] bg-[#f5f5f5]">
                            <h2 className="text-2xl font-medium text-inherit">Get Skilled</h2>
                            <button onClick={closeModal} className="text-2xl font-normal">
                                X
                            </button>
                        </div>

                        {/* Modal form */}
                        <form onSubmit={handleSubmit} className="p-8 space-y-4">
                            {/* Name Field */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-base font-medium text-[#33475b]"
                                >
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="block w-full p-2 mt-1 border border-gray-300 rounded-[3px] outline-0 bg-[#f5f8fa]"
                                />
                                {errors.name && (
                                    <p className="text-sm text-red-500">{errors.name}</p>
                                )}
                            </div>

                            {/* Phone Field */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-base font-medium text-[#33475b]"
                                >
                                    Phone <span className="text-red-500">*</span>
                                </label>
                                <PhoneInput
                                    country={"in"}
                                    value={formData.phone}
                                    onChange={handlePhoneChange}
                                    inputProps={{
                                        name: "phone",
                                        required: true,
                                    }}
                                    enableSearch
                                />
                                {errors.phone && (
                                    <p className="!m-0 text-sm text-red-500">{errors.phone}</p>
                                )}
                            </div>

                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-base font-medium text-[#33475b]"
                                >
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full p-2 mt-1 border border-gray-300 rounded-[3px] outline-0 bg-[#f5f8fa]"
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-500">{errors.email}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="font-bold text-base px-6 py-[14px] uppercase bg-[#1554BB] text-white p-2 rounded-[3px] w-full"
                            >
                                {loading ? "Submit..." : "Submit"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default StartNowModal;
