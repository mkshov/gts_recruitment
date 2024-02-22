import React from "react";
import Image from "next/image";

import wave from "@/images/Wave.png";
import phone from "@/images/svg/phoneIcon.svg";
import email from "@/images/svg/emailIcon.svg";
import bgrnd from "@/images/milan.jpg";

import { PagesBackgroundSec } from "../what-we-do/style";

import { CircularProgress, Container } from "@mui/material";
import ContainedButton from "@/components/Buttons/ContainedButton";
import {
  ContactUs,
  ContactUsForm,
  ContactUsFormInner,
  ContactUsInner1,
  ContactUsInner2,
  ContactUsInner2Card,
  ContactUsMain,
} from "./styles";
import { ContactSectionFormInner } from "../home-page/style";
import PhoneInput from "react-phone-input-2";

export default function Contact({
  form,
  lastName,
  firstName,
  handleChange,
  phone,
  formData,
  message,
  validPhone,
  sendEmail,
  isLoading,
}) {
  console.log("formData: ", formData.firstName);
  return (
    <ContactUs>
      <PagesBackgroundSec background={bgrnd}>
        <p>Contact our sales team</p>
        <p>
          If you need our help, have questions about how to use the GTS or are
          experiencing technical difficulties, please do not hesitate to contact
          us.
        </p>
        <Image alt="picture of a wave backdrop background" src={wave} />
      </PagesBackgroundSec>
      <Container maxWidth="lg">
        <ContactUsMain>
          <ContactUsInner1>
            <p>Get in touch</p>
            <ContactUsForm ref={form} onSubmit={sendEmail}>
              <ContactUsFormInner>
                <ContactSectionFormInner>
                  <p>First name</p>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </ContactSectionFormInner>
                <ContactSectionFormInner>
                  <p>Last name</p>
                  <input
                    value={formData.lastName}
                    onChange={handleChange}
                    name="lastName"
                    type="text"
                    placeholder="Last name"
                  />
                </ContactSectionFormInner>
              </ContactUsFormInner>
              <ContactUsFormInner>
                <ContactSectionFormInner>
                  <p>Email address</p>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </ContactSectionFormInner>
                <ContactSectionFormInner>
                  <p>Phone</p>
                  <input
                    name="phone"
                    required
                    type="number"
                    placeholder="+ () ___ ___ ___"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {!validPhone && (
                    <p>Please enter a valid 10-digit phone number.</p>
                  )}
                </ContactSectionFormInner>
              </ContactUsFormInner>
              <ContactSectionFormInner height="130px">
                <p>How can we help?</p>
                <textarea
                  name="message"
                  type="text"
                  height="160px"
                  placeholder="Type here..."
                  onChange={handleChange}
                  value={formData.message}
                />
              </ContactSectionFormInner>
              <ContainedButton br="8px" styles={{ width: "100%" }}>
                {isLoading ? (
                  <CircularProgress sx={{ color: "#fff" }} size={30} />
                ) : (
                  "Send Message"
                )}
              </ContainedButton>
            </ContactUsForm>
          </ContactUsInner1>
          <ContactUsInner2>
            <ContactUsInner2Card>
              <Image src={email} alt="email icon" />
              <p>Email us</p>
              <p>
                Email us for general queries, including marketing and
                partnership opportunities.
              </p>
              <a href="mailto:contact@gtsrecruitment.ch">
                contact@gtsrecruitment.ch
              </a>
            </ContactUsInner2Card>
            <ContactUsInner2Card>
              <Image src={phone} alt="phone icon" />
              <p>Call us</p>
              <p>
                Call us to speak to a member of our team. We are always happy to
                help.
              </p>
              <a href="tel: +41799276133">+41 799 276 133</a>
            </ContactUsInner2Card>
          </ContactUsInner2>
        </ContactUsMain>
      </Container>
    </ContactUs>
  );
}
