"use client";
import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { postRequest } from "../api";
import Contact from ".";

export const metadata = {
  title: "GTS Recruitment - contact us",
  description:
    "If you're enthusiastic about aiding others in reaching their career aspirations and possess a background in Recruitment or Business Development, we eagerly await your contact.",
};

export default function ContactPage() {
  const form = useRef();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [validPhone, setValidPhone] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("value: ", value);
    let newValue = value;
    let isValid = true;

    if (name === "email") {
      newValue = value;
      console.log("newValue: ", newValue);
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValue);
      setIsValid(isValid);
    }

    const validatePhoneNumber = (phoneNumber) => {
      const phoneNumberPattern = /^\d{10,}$/; // Validates a 10-digit phone number

      return phoneNumberPattern.test(phoneNumber);
    };

    if (name === "phone") {
      newValue = value;
      isValid = validatePhoneNumber(newValue);
      setValidPhone(isValid);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsLoading(true);
    if (
      !formData.email.trim() ||
      !formData.firstName.trim() ||
      !formData.message.trim()
    ) {
      setIsLoading(false);
      errorAlert("Fill in all fields!");
      return;
    }
    let data = {
      email: formData.email,
      message: `
        Message from Contact Page:
        Name: ${formData.firstName} ${formData.lastName}
        Email: ${formData.email}
        Phone: +${formData.phone}
        Message:
                ${formData.message}
      `,
    };
    try {
      await postRequest(data);
      successAlert();
      setIsLoading(false);
    } catch (err) {
      console.log("AXIOS ERROR: ", err);
      errorAlert(`Error! Status ${err.status}`);
      setIsLoading(false);
    } finally {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  const errorAlert = (text) => {
    toast.error(text ? text : "Please enter your email address.", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const successAlert = () => {
    toast.success("Data Successfully Sent!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <Contact
      form={form}
      formData={formData}
      isLoading={isLoading}
      validPhone={validPhone}
      sendEmail={sendEmail}
      handleChange={handleChange}
    />
  );
}
