import Image from "next/image";
import React from "react";
import people1 from "../../../images/people1.png";
import people2 from "../../../images/people2.jpeg";
import people4 from "../../../images/people4.jpeg";
import checkmark from "../../../images/svg/checkmark.svg";
import {
  ThirdSec,
  ThirdSecPeople,
  ThirdSecPeopleDesc,
  ThirdSecPeopleDescInner,
  ThirdSecPeopleDescInnerText,
  ThirdSecPeopleGroup,
  ThirdSecPeopleIcon,
  ThirdSecPeopleImg,
  ThirdSecPeopleImgBox,
  ThirdSecPeopleName,
  ThirdSecTitle,
} from "./styled";

export default function C_ThirdSection() {
  return (
    <ThirdSec>
      <ThirdSecTitle>Key employees</ThirdSecTitle>
      <ThirdSecPeopleGroup>
        <ThirdSecPeople>
          <ThirdSecPeopleImgBox>
            <ThirdSecPeopleImg alt="people human employees gts" src={people1} />
          </ThirdSecPeopleImgBox>
          <ThirdSecPeopleName>Jerome Bell</ThirdSecPeopleName>
          <ThirdSecPeopleDesc>
            <ThirdSecPeopleDescInner>
              <ThirdSecPeopleIcon alt="checkmark icon" src={checkmark} />
              <ThirdSecPeopleDescInnerText>
                Co-creator of GTS
              </ThirdSecPeopleDescInnerText>
            </ThirdSecPeopleDescInner>
            <ThirdSecPeopleDescInner>
              <ThirdSecPeopleIcon alt="checkmark icon" src={checkmark} />
              <ThirdSecPeopleDescInnerText>
                Investor at Sebo Digital <br /> Ventures
              </ThirdSecPeopleDescInnerText>
            </ThirdSecPeopleDescInner>
          </ThirdSecPeopleDesc>
        </ThirdSecPeople>
        <ThirdSecPeople alignSelf="end">
          <ThirdSecPeopleImgBox>
            <ThirdSecPeopleImg alt="people human employees gts" src={people2} />
          </ThirdSecPeopleImgBox>
          <ThirdSecPeopleName>Annette Black</ThirdSecPeopleName>
          <ThirdSecPeopleDesc>
            <ThirdSecPeopleDescInner>
              <ThirdSecPeopleIcon alt="checkmark icon" src={checkmark} />
              <ThirdSecPeopleDescInnerText>VP GTS</ThirdSecPeopleDescInnerText>
            </ThirdSecPeopleDescInner>
            <ThirdSecPeopleDescInner>
              <ThirdSecPeopleIcon alt="checkmark icon" src={checkmark} />
              <ThirdSecPeopleDescInnerText>
                Co-founder at GTS
              </ThirdSecPeopleDescInnerText>
            </ThirdSecPeopleDescInner>
          </ThirdSecPeopleDesc>
        </ThirdSecPeople>
        <ThirdSecPeople>
          <ThirdSecPeopleImgBox>
            <ThirdSecPeopleImg
              alt="people human employees ceo gts"
              src={people4}
            />
          </ThirdSecPeopleImgBox>
          <ThirdSecPeopleName>Jacob Jones</ThirdSecPeopleName>
          <ThirdSecPeopleDesc>
            <ThirdSecPeopleDescInner>
              <ThirdSecPeopleIcon alt="checkmark icon" src={checkmark} />
              <ThirdSecPeopleDescInnerText>
                CEO at GTS
              </ThirdSecPeopleDescInnerText>
            </ThirdSecPeopleDescInner>
            <ThirdSecPeopleDescInner>
              <ThirdSecPeopleIcon alt="checkmark icon" src={checkmark} />
              <ThirdSecPeopleDescInnerText>
                Investor at GTS Digital Ventures
              </ThirdSecPeopleDescInnerText>
            </ThirdSecPeopleDescInner>
          </ThirdSecPeopleDesc>
        </ThirdSecPeople>
        <ThirdSecPeople alignSelf="end">
          <ThirdSecPeopleImgBox>
            <ThirdSecPeopleImg alt="people human employees gts" src={people4} />
          </ThirdSecPeopleImgBox>

          <ThirdSecPeopleName>Eleanor Pena</ThirdSecPeopleName>
          <ThirdSecPeopleDesc>
            <ThirdSecPeopleDescInner>
              <ThirdSecPeopleIcon alt="checkmark icon" src={checkmark} />
              <ThirdSecPeopleDescInnerText>
                Founder of GTS
              </ThirdSecPeopleDescInnerText>
            </ThirdSecPeopleDescInner>
            <ThirdSecPeopleDescInner>
              <ThirdSecPeopleIcon alt="checkmark icon" src={checkmark} />
              <ThirdSecPeopleDescInnerText>
                Investor at GTS
              </ThirdSecPeopleDescInnerText>
            </ThirdSecPeopleDescInner>
          </ThirdSecPeopleDesc>
        </ThirdSecPeople>
      </ThirdSecPeopleGroup>
    </ThirdSec>
  );
}
