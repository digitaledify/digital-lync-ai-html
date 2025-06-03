import React, { useEffect, useMemo, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";

const StartNowModal = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    countryCode: "91",
    leadSource: "WebSite",
    leadStage: "lead",
    leadSourceURL: window.location.href,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);


  // Handle body scroll lock when modal is open
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

  const closeModal = () => setIsOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors({ ...errors, [name]: "" });
  };

  const handlePhoneChange = (value) => {
    setFormData((prevData) => ({ ...prevData, countryCode: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData?.phone?.trim() || formData?.phone?.length < 10) {
      newErrors.phone = "A valid phone number is required.";
    }
    if (
      !formData?.email?.trim() ||
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData?.email)
    ) {
      newErrors.email = "A valid email is required.";
    }
    if (!formData?.countryCode?.trim()) {
      newErrors.countryCode = "Phone country code is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      try {
        const response = await fetch(
          // "https://api.qa.crm.digitaledify.ai/api/v1/leads",
          `${
            process.env.REACT_APP_API ||
            "https://api.dev.crm.digital-lync.com/api/v1/leads"
          }`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Something went wrong.");
        }

        const data = await response.json();
        toast.success("Form submitted successfully!");
        closeModal();
      } catch (error) {
        toast.error(`Error submitting form: ${error.message}`);
      }
    } else {
      console.error("Form validation failed: ");
    }
  };
  const handleKeyDown = (e) => {
    // Allow only numeric digits
    if (!/^\d$/.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 w-full h-full bg-black bg-opacity-80">
          <div className="bg-white shadow-lg max-w-sm w-full relative justify-self-center top-20 min-w-[398px]">
            {/* Modal header */}
            <div className="flex justify-between items-center p-4 h-[68px] bg-[#f5f5f5]">
              <h2 className="text-2xl font-medium text-inherit">Get Skilled</h2>
              <button onClick={closeModal} className="text-2xl font-normal">
                X
              </button>
            </div>

            {/* Modal form */}
            <form className="p-8 space-y-4">
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
                  required
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <label
                htmlFor="phone"
                className="block text-base font-medium text-[#33475b]"
              >
                Phone <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center">
                <div className="w-[135px]">
                  <PhoneInput
                    country="in"
                    value={formData.code}
                    onChange={handlePhoneChange}
                    inputStyle={{
                      width: "100%",
                      height: "46px",
                      borderRadius: "3px",
                      borderColor: "#D1D5DB",
                      backgroundColor: "#f5f8fa",
                    }}
                    enableSearch
                  />
                </div>
                <input
                  type="text"
                  className="flex-grow border-r border-b border-t border-gray-300 bg-[#f5f8fa] w-full rounded-[3px] p-2.5 focus:outline-none"
                  // placeholder="Mobile Number"
                  name="phone"
                  value={formData.phone}
                  onKeyDown={handleKeyDown}
                  onChange={handleChange}
                />
              </div>
              {errors.phone && (
                <p className="!m-0 text-sm text-red-500">{errors.phone}</p>
              )}

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
                  required
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                onClick={(e) => handleSubmit(e)}
                disabled={loading}
                className="font-bold text-base px-6 py-[14px] uppercase bg-[#1554BB] text-white p-2 rounded-[3px]"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default StartNowModal;
