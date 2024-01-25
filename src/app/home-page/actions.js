"use client";
import React, { useRef, useState } from "react";
import G_ContactForm from "./G_ContactForm";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export default function ContactForm() {
  const form = useRef();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
  const handlePhoneChange = (e) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
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
  const sendEmail = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsLoading(true);
    if (!email.trim() || !name.trim() || !message.trim()) {
      setIsLoading(false);
      errorAlert("Fill in all fields!");
      return;
    }

    emailjs
      .sendForm(
        "service_hg10u3m",
        "template_0115ysi",
        form.current,
        "oJtvOAu4Zzy4cB-RM"
      )
      .then(
        (result) => {
          successAlert();
          setEmail("");
          setName("");
          setMessage("");
          setPhone("");
        },
        (error) => {
          console.log(error);
          errorAlert(`Error! Status ${error.status}`);
          setEmail("");
          setName("");
          setMessage("");
          setPhone("");
        }
      )
      .finally(() => {
        setIsLoading(false);
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
      sendEmail={sendEmail}
      handleEmailChange={handleEmailChange}
      handleNameChange={handleNameChange}
      handleMessageChange={handleMessageChange}
      handlePhoneChange={handlePhoneChange}
      handleLastNameChange={handleLastNameChange}
    />
  );
}
