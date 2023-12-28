import Image from "next/image";
import wave from "@/images/Wave.png";
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
      <PagesBackgroundSec>
        <p>What we do</p>
        <p>A CUSTOMIZED SUIT FOR COMPANIES</p>
        <Image alt="picture of a wave backdrop background" src={wave} />
      </PagesBackgroundSec>
      <Container maxWidth="lg">
        <WhatWeDoSec2>
          <PagesTextBlock>
            <p>HUMAN SOLUTIONS</p>
            <p>
              At GTS, we bring together traditional expertise from each of our
              partners with a data-driven approach to create a unique value
              proposition for our research. In today's rapidly changing world,
              making strategic decisions about People & Organization requires a
              combination of sophisticated data and tools, and that is exactly
              what we offer. Our company's motto is "Tailoring Your Success." As
              Executive Search Tailors, we measure the organizational context
              and project area to create a customized solution.
            </p>
          </PagesTextBlock>
          <WhatWeDoAccordion />
        </WhatWeDoSec2>
      </Container>{" "}
    </WhatWeDo>
  );
}
