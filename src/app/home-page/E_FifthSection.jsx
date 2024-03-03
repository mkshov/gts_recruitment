import React from "react";
import star from "@/images/svg/starIcon.svg";
import supportIcon from "@/images/svg/supportIcon.svg";
import coinIcon from "@/images/svg/coinIcon.svg";
import Image from "next/image";
import {
  FifthSec,
  FifthSecBlock1,
  FifthSecBlock2,
  FifthSecBlock2Card,
  FifthSecBlock2InnerText,
  FifthSecInner,
} from "./style";

export default function E_FifthSection() {
  return (
    <FifthSec data-aos="zoom-out-right">
      <FifthSecInner>
        <FifthSecBlock1
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <p>For Dear Clients</p>
          <h2>
            Why <br /> businesses turn <br /> to GTS
          </h2>
        </FifthSecBlock1>
        <FifthSecBlock2>
          <FifthSecBlock2Card
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Image src={star} alt="star icon gts" />
            <FifthSecBlock2InnerText>
              <h3>Proof of quality</h3>
              <p>
                Check any pro’s work samples, client reviews, and identity
                verification.
              </p>
            </FifthSecBlock2InnerText>
          </FifthSecBlock2Card>
          <FifthSecBlock2Card
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Image src={supportIcon} alt="support icon gts" />
            <FifthSecBlock2InnerText>
              <h3>Safe and secure</h3>
              <p>
                Focus on your work knowing we help protect your data and
                privacy. We’re here with 24/7 support if you need it.
              </p>
            </FifthSecBlock2InnerText>
          </FifthSecBlock2Card>
          <FifthSecBlock2Card
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Image src={coinIcon} alt="coin icon gts" />
            <FifthSecBlock2InnerText>
              <h3>No cost until you hire</h3>
              <p>
                Interview potential fits for your job, negotiate rates, and only
                pay for work you approve.
              </p>
            </FifthSecBlock2InnerText>
          </FifthSecBlock2Card>
        </FifthSecBlock2>
      </FifthSecInner>
    </FifthSec>
  );
}
