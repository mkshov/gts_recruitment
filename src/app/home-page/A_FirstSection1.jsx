import Image from "next/image";

import {
  FirstSecInner1,
  FirstSec,
  MainText,
  Description,
  Trusted,
  TrustedTitle,
  TrustedInner,
  FirstSecImageBox,
  FirstSecImage,
  FirstSecFound,
  FirstSecFoundTitle2,
  FirstSecFoundTitle1,
  Blur,
} from "./style";

import googleLogo from "@/images/svg/google.svg";
import microsoftLogo from "@/images/svg/microsoft.svg";
import airbnbLogo from "@/images/svg/airbnb.svg";
import background from "@/images/menandback.png";
import briefcase from "@/images/svg/briefcase.svg";
import blur from "@/images/blur.png";

import ContainedButton from "@/components/Buttons/ContainedButton";
import { Box, Container } from "@mui/material";
import Link from "next/link";

export default function A_FirstSection() {
  return (
    <FirstSec>
      <FirstSecInner1
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <MainText>Your business is our talents</MainText>
        <Description>
          A specialized method of personnel selection aimed at identifying and
          attracting top specialists for specific positions in the organization
        </Description>
        <Link href="contact-us">
          <ContainedButton
            hover={true}
            styles={{ boxShadow: "3px 3px 10px #ffffffb0" }}
          >
            Contacts Us
          </ContainedButton>
        </Link>
        <Blur>
          <Image src={blur} alt="blur blue background sircle" />
        </Blur>
      </FirstSecInner1>
      {/* <Container maxWidth="lg">
          <Trusted>
            <TrustedTitle>Trusted by:</TrustedTitle>
            <TrustedInner>
              <Image alt="google logo svg" src={googleLogo} />
            <Image alt="microsoft logo svg" src={microsoftLogo} />
            <Image alt="airbnb logo svg" src={airbnbLogo} />
          </TrustedInner>
        </Trusted>
      </Container> */}
    </FirstSec>
  );
}
