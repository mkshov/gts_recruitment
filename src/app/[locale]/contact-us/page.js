import React from "react";
import Image from "next/image";

import wave from "@/images/Wave.png";
import phone from "@/images/svg/phoneIcon.svg";
import email from "@/images/svg/emailIcon.svg";
import { PagesBackgroundSec } from "../what-we-do/style";

import { Container } from "@mui/material";
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
import { ContactSectionFormInner } from "../home-page/styled";

export default function page() {
  return (
    <ContactUs>
      <PagesBackgroundSec>
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
            <ContactUsForm>
              <ContactUsFormInner>
                <ContactSectionFormInner>
                  <p>First name</p>
                  <input type="text" placeholder="First name" />
                </ContactSectionFormInner>
                <ContactSectionFormInner>
                  <p>Last name</p>
                  <input type="text" placeholder="Last name" />
                </ContactSectionFormInner>
              </ContactUsFormInner>
              <ContactUsFormInner>
                <ContactSectionFormInner>
                  <p>Email address</p>
                  <input type="text" placeholder="Email" />
                </ContactSectionFormInner>
                <ContactSectionFormInner>
                  <p>Phone number</p>
                  <input type="text" placeholder="Phone number" />
                </ContactSectionFormInner>
              </ContactUsFormInner>
              <ContactSectionFormInner height="130px">
                <p>How can we help?</p>
                <textarea
                  type="text"
                  height="160px"
                  placeholder="Type here..."
                />
              </ContactSectionFormInner>
              <ContainedButton br="8px" styles={{ width: "100%" }}>
                Send message
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
