import Image from "next/image";
import logo from "../../../images/svg/logoWhite.svg";
import image1 from "../../../images/image1.png";
import image2 from "../../../images/image2.jpeg";
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

export default function SecondSection() {
  return (
    <SecSection>
      <SecSectionInner1>
        <Image src={logo} alt="GTS Recruitment logo white" />
        <SecSectionInner1FirstTitle>
          About "GTS Recruitment
        </SecSectionInner1FirstTitle>
        <SecSectionInner1SecondTitle>
          - is a leading business recruitment company. We offer highly qualified
          specialists to meet unique business needs. A specialized method of
          personnel selection aimed at identifying and attracting top
          specialists for specific positions in the organization. We use
          advanced technologies, databases, and in-depth interviews to ensure
          the candidate’s professionalism.
        </SecSectionInner1SecondTitle>
      </SecSectionInner1>
      <SecSectionInner2>
        <SecSectionCards>
          <SecSectionCard>
            <SecSectionCardImage src={image2} />
          </SecSectionCard>
          <SecSectionCard>
            <SecSectionCardImage src={image3} />
          </SecSectionCard>
        </SecSectionCards>
        <SecSectionBigCard>
          <SecSectionBigCardImg src={image1} />
        </SecSectionBigCard>
      </SecSectionInner2>
    </SecSection>
  );
}
