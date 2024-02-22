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
import { CircularProgress } from "@mui/material";
import PhoneInput from "react-phone-input-2";

export default function G_ContactForm({
  form,
  name,
  email,
  phone,
  message,
  lastName,
  sendEmail,
  isLoading,
  validPhone,
  handleEmailChange,
  handleNameChange,
  handleMessageChange,
  handlePhoneChange,
  handleLastNameChange,
  sendEmailValidationRequest,
}) {
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
      <ContactSectionForm ref={form} onSubmit={sendEmail}>
        <ContactSectionFormInner>
          <p>Name</p>
          <input
            type="text"
            value={name}
            name="from_name"
            onChange={handleNameChange}
            placeholder="Lincoln Baptista"
          />
        </ContactSectionFormInner>
        <ContactSectionFormInner>
          <p>Email</p>
          <input
            name="user_email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="youremail@gmail.com"
          />
        </ContactSectionFormInner>
        <ContactSectionFormInner>
          <p>Phone</p>
          <PhoneInput
            className="contact_input_phone phone_input"
            country={"de"}
            value={phone}
            ref={form}
            onChange={handlePhoneChange}
            inputProps={{
              required: true,
              name: "user_phone",
            }}
          />
          {!validPhone && <p>Please enter a valid 10-digit phone number.</p>}
        </ContactSectionFormInner>
        <ContactSectionFormInner height="132px">
          <p>How can we help?</p>
          <textarea
            name="message"
            type="text"
            value={message}
            onChange={handleMessageChange}
            placeholder="Type here..."
          />
        </ContactSectionFormInner>
        <ContainedButton width="213.35px" height="52px">
          {isLoading ? (
            <CircularProgress sx={{ color: "#fff" }} size={30} />
          ) : (
            "Send Message"
          )}
        </ContainedButton>
      </ContactSectionForm>
    </ContactSection>
  );
}
