import Image from "next/image";
import people1 from "@/images/svg/people1.svg";
import people2 from "@/images/svg/people2.svg";
import people3 from "@/images/people3.png";
import people4 from "@/images/svg/people4.svg";
import quote from "@/images/svg/quote.svg";
import wave from "@/images/Wave.png";
import bgrnd from "@/images/bgrnd5.png";
import avatar from "@/images/avatar.png";

import { Container } from "@mui/material";
import { PagesBackgroundSec } from "../what-we-do/style";
import {
  Reviews,
  ReviewsAvatar,
  ReviewsAvatarText,
  ReviewsCard,
  ReviewsDescription,
  ReviewsInner,
  ReviewsMain,
} from "./styled";
export default function page() {
  return (
    <Reviews>
      <PagesBackgroundSec background={bgrnd}>
        <p>Reviews</p>
        <p>
          If you need our help, have questions about how to use the GTS or are
          experiencing technical difficulties, please do not hesitate to contact
          us.
        </p>
        <Image alt="picture of a wave backdrop background" src={wave} />
      </PagesBackgroundSec>
      <ReviewsMain>
        <Container maxWidth="lg">
          <ReviewsInner>
            <ReviewsCard>
              <Image src={quote} alt="quote up" />
              <ReviewsAvatar>
                <Image src={people1} alt="review people avatar" />
                <ReviewsAvatarText>
                  <p>Sarah Conor</p>
                  <p>Business woman</p>
                </ReviewsAvatarText>
              </ReviewsAvatar>
              <ReviewsDescription>
                Cooperation with GTS Recruitment has become a key point in our
                search for highly qualified specialists. Their professionalism,
                efficiency and unique recruitment method allowed us to form a
                strong team of experts. We recommend GTS Recruitment as a
                reliable partner in personnel solutions.
              </ReviewsDescription>
            </ReviewsCard>
            <ReviewsCard>
              <Image src={quote} alt="quote up" />
              <ReviewsAvatar>
                <Image src={people2} alt="review people avatar" />
                <ReviewsAvatarText>
                  <p>Marta Freedman</p>
                  <p>Business woman</p>
                </ReviewsAvatarText>
              </ReviewsAvatar>
              <ReviewsDescription>
                We have been working with GTS Recruitment for several years now
                and they continue to exceed our expectations. Their team is
                always ready for a personalized approach, providing us with
                outstanding candidates. Thank you for your reliability and
                professionalism!
              </ReviewsDescription>
            </ReviewsCard>
            <ReviewsCard>
              <Image src={quote} alt="quote up" />
              <ReviewsAvatar>
                <Image src={people3} alt="review people avatar" />
                <ReviewsAvatarText>
                  <p>Tom Mish</p>
                  <p>Project Manager</p>
                </ReviewsAvatarText>
              </ReviewsAvatar>
              <ReviewsDescription>
                GTS Recruitment is not just a recruitment company, it is our
                reliable strategic partner. They have a deep understanding of
                our needs and their specialized recruitment method provides us
                with the best talent in the industry. Without a doubt, GTS
                Recruitment makes our business even stronger.
              </ReviewsDescription>
            </ReviewsCard>
            <ReviewsCard>
              <Image src={quote} alt="quote up" />
              <ReviewsAvatar>
                <Image src={people4} alt="review people avatar" />
                <ReviewsAvatarText>
                  <p>Carla Uclary</p>
                  <p>Model</p>
                </ReviewsAvatarText>
              </ReviewsAvatar>
              <ReviewsDescription>
                GTS Recruitment is a real pleasure to work with. They provided
                us with not just candidates, but true leaders who contributed
                enormously to our success. Efficiency, professionalism and
                excellent understanding of the labor market are the key features
                that make GTS Recruitment leading in their field.
              </ReviewsDescription>
            </ReviewsCard>
            <ReviewsCard>
              <Image src={quote} alt="quote up" />
              <ReviewsAvatar>
                <Image src={avatar} alt="review people avatar" />
                <ReviewsAvatarText>
                  <p>Lucas Mitchell</p>
                  <p>Software Developer</p>
                </ReviewsAvatarText>
              </ReviewsAvatar>
              <ReviewsDescription>
                My interaction with GTS was fantastic. They were highly
                professional, communicative and took a genuine interest in both
                the candidates and the company culture. The process was smooth
                and their commitment to individual growth and diversity was
                evident. I highly recommend their services.
              </ReviewsDescription>
            </ReviewsCard>
            <ReviewsCard>
              <Image src={quote} alt="quote up" />
              <ReviewsAvatar>
                <Image src={avatar} alt="review people avatar" />
                <ReviewsAvatarText>
                  <p>Emma Thompson</p>
                  <p>Financial Analyst</p>
                </ReviewsAvatarText>
              </ReviewsAvatar>
              <ReviewsDescription>
                Throughout the recruitment process, GTS exhibited a level of
                professionalism and efficiency that exceeded my expectations.
                Their commitment to thoroughly understanding both the technical
                requirements of the roles and the unique aspects of our company
                culture was evident in the quality of candidates presented.
              </ReviewsDescription>
            </ReviewsCard>
          </ReviewsInner>
        </Container>
      </ReviewsMain>
    </Reviews>
  );
}
