import React from "react";
import { AboutMain, AboutSec1 } from "./styled";
import Image from "next/image";
import { Container } from "@mui/material";
import C_ThirdSection from "../home-page/C_ThirdSection";
import F_SixthSection from "../home-page/F_SixthSection";
import B_SecondSection from "../home-page/B_SecondSection";

export default function AboutPage() {
  return (
    <AboutMain>
      <AboutSec1>
        <p>Who we are</p>
        <p>gts - is a leading recruitment company</p>
      </AboutSec1>
      <Container maxWidth="lg">
        <B_SecondSection />
        {/* <C_ThirdSection /> */}
      </Container>
      <F_SixthSection />
    </AboutMain>
  );
}
