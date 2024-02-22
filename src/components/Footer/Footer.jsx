"use client";
import Image from "next/image";

import { Button, CircularProgress, Container } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import logo from "@/images/svg/logo.svg";
import ContainedButton from "../Buttons/ContainedButton";
import {
  DottedLine,
  FooterForm,
  FooterInner,
  FooterNav,
  FtrIcon,
  FtrInrBlock1,
  FtrInrBlock2,
  FtrParentForm,
  FtrSocials,
  GTSFooter,
  LeftDot,
  Linkedin,
  RightDot,
  Twitter,
} from "./styled";
import Link from "next/link";

export default function Footer({
  form,
  sendEmail,
  handleEmailChange,
  email,
  isLoading,
}) {
  return (
    <GTSFooter>
      <Container maxWidth="lg">
        <FooterInner>
          <FtrInrBlock1>
            <Link href="/">
              <Image src={logo} alt="logo gts" />
            </Link>
            <FooterNav>
              <Link href="/about-us">Who we are</Link>
              <Link href="/what-we-do">What we do</Link>
              <Link href="/join-us">Join our tribe</Link>
              <Link href="/contact-us">Contact us</Link>
              <Link href="/reviews">Reviews</Link>
            </FooterNav>
            <FtrParentForm>
              <p>Newsletter</p>
              <FooterForm ref={form} onSubmit={sendEmail}>
                <input
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Your email here"
                  name="user_email"
                  type="email"
                />
                <ContainedButton
                  width="103.94px"
                  height="60px"
                  styles={{ padding: "16px 32px" }}
                >
                  {isLoading ? (
                    <CircularProgress sx={{ color: "#fff" }} size={30} />
                  ) : (
                    "Send"
                  )}
                </ContainedButton>
              </FooterForm>
            </FtrParentForm>
          </FtrInrBlock1>

          <DottedLine margin="100px 0 25px 0" className="dotted-line">
            <LeftDot className="dot left"></LeftDot>
            <RightDot className="dot right"></RightDot>
          </DottedLine>

          <FtrInrBlock2>
            <p>© 2023 GTS Recruitment®</p>
            <FtrSocials>
              <Link
                target="_blank"
                href="https://www.instagram.com/adacourses/"
              >
                <FtrIcon>
                  <LinkedInIcon />
                </FtrIcon>
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/adacourses/"
              >
                <FtrIcon>
                  <TelegramIcon />
                </FtrIcon>
              </Link>
            </FtrSocials>
          </FtrInrBlock2>
        </FooterInner>
      </Container>
    </GTSFooter>
  );
}
