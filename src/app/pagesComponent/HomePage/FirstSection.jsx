import Image from "next/image";
import React from "react";

import {
  FirstSecInner1,
  FirstSec,
  MainText,
  Description,
  Trusted,
  TrustedTitle,
  TrustedInner,
} from "./styled";
import ContainedButton from "@/components/Buttons/ContainedButton";
import googleLogo from "../../../images/svg/google.svg";
import microsoftLogo from "../../../images/svg/microsoft.svg";
import airbnbLogo from "../../../images/svg/airbnb.svg";
import background from "../../../images/menandback.png";
import briefcase from "../../../images/svg/briefcase.svg";

export default function FirstSection() {
  return (
    <FirstSec>
      <FirstSecInner1>
        <MainText>Your business is our talents</MainText>
        <Description>
          A specialized method of personnel selection aimed at identifying and
          attracting top specialists for specific positions in the organization
        </Description>
        <ContainedButton>Contacts Us</ContainedButton>
      </FirstSecInner1>
      <Trusted>
        <TrustedTitle>Trusted by:</TrustedTitle>
        <TrustedInner>
          <Image src={googleLogo} />
          <Image src={microsoftLogo} />
          <Image src={airbnbLogo} />
        </TrustedInner>
      </Trusted>
      <div
        data-aos="fade-down"
        style={{ position: "absolute", top: "-210px", right: "0" }}
      >
        <Image style={{ maxWidth: "600px" }} src={background} />
      </div>
      <div
        style={{
          padding: "16px",
          borderRadius: "16px",
          backdropFilter: "blur(10px)",
          background:
            "linear-gradient(130deg, #FFF -2.18%, rgba(255, 255, 255, 0.56) 118.15%)",
          maxWidth: "128px",
          textAlign: "center",
        }}
      >
        <Image src={briefcase} />
        <p
          style={{
            color: "#071B2C",
            fontFamily: "DM Sans",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "28px", // Вместо "40px", так как "125%" относится к размеру шрифта
            letterSpacing: "0.1px",
          }}
        >
          20,554+
        </p>
        <p>Specialists found</p>
      </div>
    </FirstSec>
  );
}
