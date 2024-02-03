"use client";
import Image from "next/image";

import { Button, Container } from "@mui/material";
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

export default function Footer() {
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
              <FooterForm>
                <input placeholder="Your email here" type="text" />
                <ContainedButton styles={{ padding: "16px 32px" }}>
                  Send
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
