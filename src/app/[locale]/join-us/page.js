import wave from "@/images/Wave.png";
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
      <PagesBackgroundSec>
        <p>Join our tribe</p>
        <p>THANK YOU FOR YOUR INTEREST IN GTS</p>
        <Image alt="picture of a wave backdrop background" src={wave} />
      </PagesBackgroundSec>
      <Container maxWidth="lg">
        <JoinUsSec1>
          <PagesTextBlock>
            <p>WELCOME TO OUR CAREER PAGE</p>
            <p>
              At GTS, we specialize in Executive Search and tailored Head
              Hunting. We work with a range of clients across various
              industries, helping them find the best candidates for leadership
              positions within their organization. We are constantly looking for
              new "Candidate consultants" and "Business Developers" to join our
              team. If you are passionate about helping others achieve their
              career goals and you have a background in Recruitment or Business
              Development, we would love to hear from you.
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
