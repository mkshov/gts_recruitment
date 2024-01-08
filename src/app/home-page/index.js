import React from "react";
import B_SecondSection from "./B_SecondSection";
import E_FifthSection from "./E_FifthSection";
import C_ThirdSection from "./C_ThirdSection";
import D_FourthSection from "./D_FourthSecton";
import { Container } from "@mui/material";
import F_SixthSection from "./F_SixthSection";
import G_ContactForm from "./G_ContactForm";
import A_FirstSection1 from "./A_FirstSection1";

export default function HomePage() {
  return (
    <>
      <A_FirstSection1 />
      <Container maxWidth="lg">
        <B_SecondSection />
        <E_FifthSection />
      </Container>
      <F_SixthSection />
      <Container maxWidth="lg">
        <D_FourthSection />
        {/* <C_ThirdSection /> */}
        <G_ContactForm />
      </Container>
    </>
  );
}
