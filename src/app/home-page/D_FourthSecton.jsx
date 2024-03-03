import Image from "next/image";
import logo from "@/images/svg/logoWhite.svg";
import image4 from "@/images/image4.jpeg";
import image3 from "@/images/image3.png";
import {
  SecSectionInner1FirstTitle,
  FourthSection,
  FourthSectionInner1,
  SecSectionInner1SecondTitle,
  FourthSectionInner2,
  FourthSectionCards,
  FourthSectionCard,
  FourthSectionCardImage,
  FourthSectionBigCard,
  FourthSectionBigCardImg,
} from "./style";

import blur from "@/images/blur.png";

export default function D_FourthSection() {
  return (
    <FourthSection>
      <FourthSectionInner1>
        <Image src={logo} alt="GTS Recruitment logo white" />
        <SecSectionInner1FirstTitle>
          Services & <br /> Case Studies
        </SecSectionInner1FirstTitle>
        <SecSectionInner1SecondTitle>
          Our strength lies in tailoring our processes to your specific
          requirements, ensuring that every placement is as exceptional as the
          individuals we source.
        </SecSectionInner1SecondTitle>
      </FourthSectionInner1>
      <FourthSectionInner2>
        <FourthSectionBigCard bgrnd={true}></FourthSectionBigCard>
        <div className="fourth-section__cards-parent" data-aos="fade-up">
          <FourthSectionCards>
            <FourthSectionCard bgrnd={true} idx={0} />
            <FourthSectionCard bgrnd={true} idx={1} />
          </FourthSectionCards>
        </div>
      </FourthSectionInner2>
    </FourthSection>
  );
}
