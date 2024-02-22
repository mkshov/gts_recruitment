"use client";
import { useRef, useState } from "react";
import Footer from "./Footer";
import { postRequest } from "@/app/api";
import { toast } from "react-toastify";

export default function MainFooter() {
  const form = useRef();

  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    const newIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
    setEmail(newEmail);
    setIsValid(newIsValid);
  };

  const sendEmail = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsLoading(true);
    if (!email.trim()) {
      setIsLoading(false);
      errorAlert("Fill in  field!");
      return;
    }
    let data = {
      email: email,
      message: `
        Message from Home Page (footer-form):
        Email: ${email}
      `,
    };
    if (isValid) {
      try {
        await postRequest(data);
        successAlert();
      } catch (err) {
        console.log("AXIOS ERROR: ", err);
        errorAlert(`Error! Status ${err.status}`);
      } finally {
        setEmail("");
        setIsLoading(false);
      }
    } else {
      errorAlert();
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
    <Footer
      sendEmail={sendEmail}
      handleEmailChange={handleEmailChange}
      email={email}
      form={form}
      isLoading={isLoading}
    />
  );
}
