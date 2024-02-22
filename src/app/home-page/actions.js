"use client";
import React, { useRef, useState } from "react";
import G_ContactForm from "./G_ContactForm";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { postRequest } from "../api";

export default function ContactForm() {
  const form = useRef();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [validPhone, setValidPhone] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    const newIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
    setEmail(newEmail);
    setIsValid(newIsValid);
  };
  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    console.log(name);
  };
  const handleLastNameChange = (e) => {
    const newLastName = e.target.value;
    setLastName(newLastName);
  };
  const handleMessageChange = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
  };
  const handlePhoneChange = (value) => {
    // const newPhone = e.target.value;
    setPhone(value);
    setValidPhone(validatePhoneNumber(value));
  };
  const sendEmail = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsLoading(true);
    if (!email.trim() || !name.trim() || !message.trim()) {
      setIsLoading(false);
      errorAlert("Fill in all fields!");
      return;
    }
    let data = {
      email: email,
      message: `
        Message from Home Page (contact-form):
        Name: ${name}
        Email: ${email}
        Phone: +${phone}
        Message:
                ${message}
      `,
    };
    try {
      await postRequest(data);
      successAlert();
    } catch (err) {
      console.log("AXIOS ERROR: ", err);
      errorAlert(`Error! Status ${err.status}`);
    } finally {
      setEmail("");
      setName("");
      setMessage("");
      setPhone("");
      setIsLoading(false);
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10,}$/; // Validates a 10-digit phone number

    return phoneNumberPattern.test(phoneNumber);
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
    <G_ContactForm
      form={form}
      name={name}
      email={email}
      phone={phone}
      message={message}
      lastName={lastName}
      isLoading={isLoading}
      validPhone={validPhone}
      sendEmail={sendEmail}
      handleEmailChange={handleEmailChange}
      handleNameChange={handleNameChange}
      handleMessageChange={handleMessageChange}
      handlePhoneChange={handlePhoneChange}
      handleLastNameChange={handleLastNameChange}
    />
  );
}
