import React from "react";
import { AboutMain, AboutSec1 } from "./styled";
import Image from "next/image";
import letterG from "../../../images/letterG.png";
import { Container } from "@mui/material";
import B_SecondSection from "../HomePage/B_SecondSection";
import C_ThirdSection from "../HomePage/C_ThirdSection";
import F_SixthSection from "../HomePage/F_SixthSection";

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
