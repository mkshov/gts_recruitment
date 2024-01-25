import wave from "@/images/Wave.png";
import bgrnd from "@/images/bgrnd3.png";
import likeIcon from "@/images/svg/likeIcon.svg";
import chartIcon from "@/images/svg/chartIcon.svg";
import briefcase from "@/images/svg/briefcase.svg";
import verifyIcon from "@/images/svg/verifyIcon.svg";

import Image from "next/image";
import { Container } from "@mui/material";
import {
  JoinUs,
  JoinUsSec1,
  JoinUsSec2,
  JoinUsSec2Inner1,
  JoinUsSec2Inner2,
  JoinUsSec2Inner2Card,
  JoinUsSec2Inner3,
} from "./style";
import JoinUsAccardion from "./Accardion";
import { PagesBackgroundSec, PagesTextBlock } from "../what-we-do/style";
import ContainedButton from "@/components/Buttons/ContainedButton";

export default function () {
  return (
    <JoinUs>
      <PagesBackgroundSec background={bgrnd}>
        <p>Join our tribe</p>
        <p>DISCOVER YOUR CAREER JOURNEY WITH GTS</p>
        <Image alt="picture of a wave backdrop background" src={wave} />
      </PagesBackgroundSec>
      <Container maxWidth="lg">
        <JoinUsSec1>
          <PagesTextBlock>
            <p>WELCOME TO OUR CAREER PAGE</p>
            <p>
              At GTS, we excel in Executive Search and personalized Headhunting
              services. Collaborating with diverse clients spanning multiple
              industries, we assist them in discovering top-tier candidates for
              pivotal leadership roles. Our doors are always open for aspiring
              'Candidate Consultants' and 'Business Developers' to join our
              dynamic team. If you're enthusiastic about aiding others in
              reaching their career aspirations and possess a background in
              Recruitment or Business Development, we eagerly await your
              contact.
            </p>
          </PagesTextBlock>
        </JoinUsSec1>
        <JoinUsSec2>
          <JoinUsSec2Inner1>
            <p>Our numbers</p>
            <p>
              As the fastest-growing online Job board, our mission is to help
              great individuals connect with great companies.
            </p>
          </JoinUsSec2Inner1>
          <JoinUsSec2Inner2>
            <JoinUsSec2Inner2Card>
              <Image src={briefcase} alt="briefcase icon" />
              <p>20,583</p>
              <p>Specialists found</p>
            </JoinUsSec2Inner2Card>
            <JoinUsSec2Inner2Card>
              <Image src={likeIcon} alt="like icon" />
              <p>3,896</p>
              <p>Successful hires</p>
            </JoinUsSec2Inner2Card>
            <JoinUsSec2Inner2Card>
              <Image src={verifyIcon} alt="verify icon" />
              <p>581</p>
              <p>Verified companies</p>
            </JoinUsSec2Inner2Card>
            <JoinUsSec2Inner2Card>
              <Image src={chartIcon} alt="chart icon" />
              <p>100K</p>
              <p>Monthly visits</p>
            </JoinUsSec2Inner2Card>
          </JoinUsSec2Inner2>
        </JoinUsSec2>
      </Container>
      <JoinUsSec2Inner3>
        <Container maxWidth="lg">
          <JoinUsAccardion />
          <ContainedButton>Contact us</ContainedButton>
        </Container>
      </JoinUsSec2Inner3>
    </JoinUs>
  );
}
