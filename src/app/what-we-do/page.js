import Image from "next/image";
import wave from "@/images/Wave.png";
import bgrnd from "@/images/lugano.jpg";
import {
  PagesBackgroundSec,
  PagesTextBlock,
  WhatWeDo,
  WhatWeDoSec2,
} from "./style";
import { Container } from "@mui/material";
import WhatWeDoAccordion from "./Accordion";

export default function page() {
  return (
    <WhatWeDo>
      <PagesBackgroundSec background={bgrnd}>
        <p>What we do</p>
        <p>A CUSTOMIZED SUIT FOR COMPANIES</p>
        <Image alt="picture of a wave backdrop background" src={wave} />
      </PagesBackgroundSec>
      <Container maxWidth="lg">
        <WhatWeDoSec2>
          <PagesTextBlock>
            <p>PERSONALIZED RECRUITMENT SOLUTIONS</p>
            <p>
              At our core, we excel in connecting the right candidate with the
              right client, ensuring successful and enduring placements. By
              prioritizing genuine human connections, we aim to refine our
              recruitment approach across diverse markets by 2030.
              <br /> <br />
            </p>
          </PagesTextBlock>
          <WhatWeDoAccordion />
        </WhatWeDoSec2>
      </Container>{" "}
    </WhatWeDo>
  );
}
