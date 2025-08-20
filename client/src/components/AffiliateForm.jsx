import React, { useState } from "react";

const AffiliateForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState({ type: "", message: "" });
  const [affiliateLink, setAffiliateLink] = useState(""); // store affiliate link
  const [copied, setCopied] = useState(false); // track copy action

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
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(
          `https://pickleball-store-backend.onrender.com/addUser`,
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
          setAffiliateLink(data.affiliateLink || ""); // store affiliate link
          setFormData({ firstName: "", lastName: "", email: "" });
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

  const handleCopy = () => {
    navigator.clipboard.writeText(affiliateLink);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000); // hide "Copied!" after 2s
  };

  return (
    <div className="w-full overflow-x-hidden flex flex-col items-center justify-center sm:py-12 mt-10">
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
            className="bg-transparent border-2 border-[#9AE600] rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus:shadow-[0_0_10px_#B7D92D]"
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
            className="bg-transparent border-2 border-[#9AE600] rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus:shadow-[0_0_10px_#B7D92D]"
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
            className="bg-transparent border-2 border-[#9AE600] rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus:shadow-[0_0_10px_#B7D92D]"
          />
          {errors.email && (
            <div className="text-red-500 text-sm">{errors.email}</div>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-black border-2 cursor-pointer border-white text-white font-semibold px-8 py-4 mb-18 rounded-xl w-full hover:bg-white hover:text-black transition"
          >
            Send
          </button>
        </div>
      </form>

      {/* Show affiliate link if available */}
      {affiliateLink && (
        <div className="mt-6 flex flex-col items-center gap-2">
          <p className="text-white">Your Affiliate Link:</p>
          <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
            <span className="text-green-400">{affiliateLink}</span>
            <button
              onClick={handleCopy}
              className="ml-2 px-3 py-1 bg-[#9AE600] text-black rounded-md hover:bg-green-400"
            >
              Copy
            </button>
          </div>
          {copied && (
            <p className="text-sm text-green-400 font-semibold">
              Affiliate link copied!
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AffiliateForm;
