"use client";
import Image from "next/image";

import { Button, Container } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import logo from "../../images/svg/logo.svg";
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

export default function Footer() {
  return (
    <GTSFooter>
      <Container maxWidth="lg">
        <FooterInner>
          <FtrInrBlock1>
            <Image src={logo} alt="logo gts" />
            <FooterNav>
              <a href="">Who we are</a>
              <a href="">What we do</a>
              <a href="">Join our tribe</a>
              <a href="">Contact us</a>
              <a href="">Reviews</a>
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
              <FtrIcon>
                <LinkedInIcon />
              </FtrIcon>
              <FtrIcon>
                <TwitterIcon />
              </FtrIcon>
            </FtrSocials>
          </FtrInrBlock2>
        </FooterInner>
      </Container>
    </GTSFooter>
  );
}
