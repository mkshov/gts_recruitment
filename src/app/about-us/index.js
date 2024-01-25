import { Container } from "@mui/material";

import Image from "next/image";
import logo from "@/images/svg/logoWhite.svg";
import image1 from "@/images/image1.png";
import image2 from "@/images/image2-2.jpeg";
import image3 from "@/images/image3.png";

import { AboutMain, AboutSec1 } from "./styled";
import C_ThirdSection from "../home-page/C_ThirdSection";
import F_SixthSection from "../home-page/F_SixthSection";
import B_SecondSection from "../home-page/B_SecondSection";
import { PagesBackgroundSec } from "../what-we-do/style";
import {
  SecSectionInner1FirstTitle,
  SecSectionInner1,
  SecSectionInner1SecondTitle,
  SecSectionInner2,
  SecSectionCards,
  SecSection,
  SecSectionCard,
  SecSectionCardImage,
  SecSectionBigCard,
  SecSectionBigCardImg,
} from "../home-page/style";

import bgrnd from "@/images/bgrnd.jpeg";
import wave from "@/images/Wave.png";

export default function AboutPage() {
  return (
    <AboutMain>
      <PagesBackgroundSec background={bgrnd}>
        <p>Who we are</p>
        <p>
          Our unique way of finding talent is carefully designed to be all about
          you with our GTS Method.
        </p>
        <Image alt="picture of a wave backdrop background" src={wave} />
      </PagesBackgroundSec>
      <Container maxWidth="lg">
        <SecSection>
          <SecSectionInner1>
            <Image src={logo} alt="GTS Recruitment logo white" />
            <SecSectionInner1FirstTitle>
              About "GTS Recruitment
            </SecSectionInner1FirstTitle>
            <SecSectionInner1SecondTitle>
              Our unique way of finding talent is carefully designed to be all
              about you with our GTS Method. GTS Method is a dynamic and
              adaptive process, continuously refined to meet the unique demands
              of each recruitment project. We invite you to experience a
              tailored, innovative, and human-centric approach to talent
              acquisition.
            </SecSectionInner1SecondTitle>
          </SecSectionInner1>
          <SecSectionInner2>
            <SecSectionCards>
              <SecSectionCard height="274px">
                <SecSectionCardImage
                  alt="a man explaining something to someone"
                  src={image2}
                />
              </SecSectionCard>
              <SecSectionCard height="274px">
                <SecSectionCardImage
                  alt="a guy and a girl shake hands"
                  src={image3}
                />
              </SecSectionCard>
            </SecSectionCards>
            <SecSectionBigCard>
              <SecSectionBigCardImg
                alt="a man draws a graph on the blackboard with a marker"
                src={image1}
              />
            </SecSectionBigCard>
          </SecSectionInner2>
        </SecSection>{" "}
        {/* <C_ThirdSection /> */}
      </Container>
      <F_SixthSection />
    </AboutMain>
  );
}
