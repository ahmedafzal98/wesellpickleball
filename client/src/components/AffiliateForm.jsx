import React, { useState } from "react";

const AffiliateForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "First name is required.";
    if (!formData.lastName) errors.lastName = "Last name is required.";
    if (!formData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid.";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    const apiUrl = import.meta.env.VITE_API_URL;

    console.log(apiUrl);

    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(
          `https://wesellpickleball.onrender.com/api/affiliate`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        const data = await response.json();

        if (response.ok) {
          setServerMessage({ type: "success", message: data.message });
          setFormData({ firstName: "", lastName: "", email: "" }); // Reset form
        } else {
          setServerMessage({
            type: "error",
            message: data.message || "Something went wrong.",
          });
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
        setServerMessage({
          type: "error",
          message: "Server error. Please try again later.",
        });
      }
    }
  };

  return (
    <div className="overflow-x-hidden flex flex-col items-center justify-center bg-black sm:py-12 px-6 mt-7">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl space-y-6 sm:space-y-8"
      >
        {/* Show success or error messages */}
        {serverMessage.message && (
          <div
            className={`text-center p-4 rounded-md font-semibold ${
              serverMessage.type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {serverMessage.message}
          </div>
        )}

        {/* First Name */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="bg-transparent border-2 border-lime-400 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus:shadow-[0_0_10px_#B7D92D]"
          />
          {errors.firstName && (
            <div className="text-red-500 text-sm">{errors.firstName}</div>
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="bg-transparent border-2 border-lime-400 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus:shadow-[0_0_10px_#B7D92D]"
          />
          {errors.lastName && (
            <div className="text-red-500 text-sm">{errors.lastName}</div>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="bg-transparent border-2 border-lime-400 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus:shadow-[0_0_10px_#B7D92D]"
          />
          {errors.email && (
            <div className="text-red-500 text-sm">{errors.email}</div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-black border-2 cursor-pointer border-white text-white font-semibold px-8 py-4 rounded-xl w-full hover:bg-white hover:text-black transition"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default AffiliateForm;
