import wave from "../../images/Wave.png";
import likeIcon from "../../images/svg/likeIcon.svg";

import Image from "next/image";
import { PagesBackgroundSec, PagesTextBlock } from "../what-we-do/style";
import { Container } from "@mui/material";
import { JoinUs, JoinUsSec1, JoinUsSec2 } from "./style";

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
          <div>
            <p>Our numbers</p>
            <p>
              As the fastest-growing online Job board, our mission is to help
              great individuals connect with great companies.
            </p>
          </div>
          <div>
            <div>
              <Image src={likeIcon} alt="like icon" />
              <p>20,583+</p>
              <p>Specialists found</p>
            </div>
          </div>
        </JoinUsSec2>
      </Container>
    </JoinUs>
  );
}
