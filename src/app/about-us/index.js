import Image from "next/image";
import { Container } from "@mui/material";

import { AboutMain, AboutSec1 } from "./styled";
import C_ThirdSection from "../home-page/C_ThirdSection";
import F_SixthSection from "../home-page/F_SixthSection";
import B_SecondSection from "../home-page/B_SecondSection";
import { PagesBackgroundSec } from "../what-we-do/style";

import bgrnd from "@/images/bgrnd.jpeg";
import wave from "@/images/Wave.png";

export default function AboutPage() {
  return (
    <AboutMain>
      <PagesBackgroundSec background={bgrnd}>
        <p>Who we are</p>
        <p>gts - is a leading recruitment company</p>
        <Image alt="picture of a wave backdrop background" src={wave} />
      </PagesBackgroundSec>
      <Container maxWidth="lg">
        <B_SecondSection />
        {/* <C_ThirdSection /> */}
      </Container>
      <F_SixthSection />
    </AboutMain>
  );
}
