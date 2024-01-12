"use client";
import React, { useEffect } from "react";

import phoneIcon from "@/images/svg/phone.svg";
import emailIcon from "@/images/svg/email.svg";
import "react-toastify/dist/ReactToastify.css";

import locationIcon from "@/images/svg/location.svg";
import Image from "next/image";
import {
  ConatctSectionTitle,
  ContactSection,
  ContactSectionForm,
  ContactSectionFormArea,
  ContactSectionFormInner,
  ContactSectionInfoGroup,
  ContactSectionInner,
  ContactSectionInnerInfo,
  ContactSectionSubtitle,
  ContactSectionTextGroup,
} from "./style";
import ContainedButton from "@/components/Buttons/ContainedButton";
import { ToastContainer, toast } from "react-toastify";

export default function G_ContactForm() {
  const successAlert = () => {
    console.log("worl");
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
    <ContactSection>
      <ContactSectionInner>
        <ContactSectionTextGroup>
          <ConatctSectionTitle>Support</ConatctSectionTitle>
          <ContactSectionSubtitle>
            Fill up the form and our team will get back to you with in 24 hours.
          </ContactSectionSubtitle>
        </ContactSectionTextGroup>
        <ContactSectionInfoGroup>
          <ContactSectionInnerInfo>
            <Image alt="phone icon" src={phoneIcon} />
            <p>+41 799 276 133</p>
          </ContactSectionInnerInfo>
          <ContactSectionInnerInfo>
            <Image alt="email icon" src={emailIcon} />
            <p>contact@gtsrecruitment.ch</p>
          </ContactSectionInnerInfo>
          <ContactSectionInnerInfo>
            <Image alt="location geo icon" src={locationIcon} />
            <p>105 Street, Switzerland</p>
          </ContactSectionInnerInfo>
        </ContactSectionInfoGroup>
      </ContactSectionInner>
      <ContactSectionForm>
        <ContactSectionFormInner>
          <p>Name</p>
          <input type="text" placeholder="Lincoln Baptista" />
        </ContactSectionFormInner>
        <ContactSectionFormInner>
          <p>Email</p>
          <input type="email" placeholder="youremail@gmail.com" />
        </ContactSectionFormInner>
        <ContactSectionFormInner>
          <p>Phone</p>
          <input type="number" placeholder="+1 862732625134" />
        </ContactSectionFormInner>
        <ContactSectionFormInner height="132px">
          <p>How can we help?</p>
          <textarea type="text" placeholder="Type here..." />
        </ContactSectionFormInner>
        <ContainedButton onClick={successAlert}>Send Message</ContainedButton>
      </ContactSectionForm>
    </ContactSection>
  );
}
