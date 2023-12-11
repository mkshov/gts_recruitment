import Image from "next/image";
import logo from "../../../images/svg/logoWhite.svg";
import image4 from "../../../images/image4.jpeg";
import image3 from "../../../images/image3.png";
import {
  SecSectionInner1FirstTitle,
  SecSection,
  SecSectionInner1,
  SecSectionInner1SecondTitle,
  SecSectionInner2,
  SecSectionCards,
  SecSectionCard,
  SecSectionCardImage,
  SecSectionBigCard,
  SecSectionBigCardImg,
} from "./styled";

export default function FourthSection() {
  return (
    <SecSection>
      <SecSectionInner1>
        <Image src={logo} alt="GTS Recruitment logo white" />
        <SecSectionInner1FirstTitle>
          Services & <br /> Case Studies
        </SecSectionInner1FirstTitle>
        <SecSectionInner1SecondTitle>
          - is a leading business recruitment company. We offer highly qualified
          specialists to meet unique business needs.
        </SecSectionInner1SecondTitle>
      </SecSectionInner1>
      <SecSectionInner2>
        <SecSectionBigCard bgrnd={true}></SecSectionBigCard>
        <SecSectionCards>
          <SecSectionCard bgrnd={true} height="202px"></SecSectionCard>
          <SecSectionCard height="202px">
            <SecSectionCardImage src={image3} />
          </SecSectionCard>
        </SecSectionCards>
      </SecSectionInner2>
    </SecSection>
  );
}
