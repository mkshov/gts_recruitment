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
} from "./styled";
import ContainedButton from "@/components/Buttons/ContainedButton";
import googleLogo from "../../../images/svg/google.svg";
import microsoftLogo from "../../../images/svg/microsoft.svg";
import airbnbLogo from "../../../images/svg/airbnb.svg";
import background from "../../../images/menandback.png";
import briefcase from "../../../images/svg/briefcase.svg";

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
        <ContainedButton>Contacts Us</ContainedButton>
      </FirstSecInner1>
      <Trusted>
        <TrustedTitle>Trusted by:</TrustedTitle>
        <TrustedInner>
          <Image alt="google logo svg" src={googleLogo} />
          <Image alt="microsoft logo svg" src={microsoftLogo} />
          <Image alt="airbnb logo svg" src={airbnbLogo} />
        </TrustedInner>
      </Trusted>
      <FirstSecImageBox data-aos="fade-down">
        <FirstSecImage
          priority
          quality={100}
          alt="GTS gts recruitment man with a laptop"
          src={background}
        />

        <FirstSecFound
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <Image alt="briefcase icon" src={briefcase} />
          <FirstSecFoundTitle1>20,554+</FirstSecFoundTitle1>
          <FirstSecFoundTitle2>Specialists found</FirstSecFoundTitle2>
        </FirstSecFound>
      </FirstSecImageBox>
    </FirstSec>
  );
}
