"use client";
import styled from "@emotion/styled";
import letterG1 from "@/images/svg/letterG1.svg";
import letterG2 from "@/images/svg/letterG2.svg";
import bgrnd from "@/images/bgrnd.jpeg";

const linearGradient =
  "linear-gradient(0deg, rgba(20, 106, 164, 0.30) 0%, rgba(20, 106, 164, 0.30) 100%)";

const combinedBackground = `
  ${linearGradient}, lightgray 50% / cover no-repeat,
  url(${letterG1.src}) left -100px no-repeat,
  url(${letterG2.src}) right 0 no-repeat,
  url(${bgrnd.src}) center center no-repeat
`;

export const AboutMain = styled("div")(({}) => ({
  background: "white",
}));
export const AboutSec1 = styled("div")(({}) => ({
  color: "white",
  height: "40vh",
  position: "relative",
  // background: `url(${letterG1.src}) left -100px no-repeat, url(${letterG2.src}) right 0 no-repeat, url(${bgrnd.src}) center center no-repeat`,
  // background: combinedBackground,
  backgroundImage: `linear-gradient(rgba(20, 106, 164, 0.3), rgba(20, 106, 164, 0.3)), url(${letterG1.src}),url(${letterG2.src}),url(${bgrnd.src}) `,
  backgroundPosition: "center center, left -100px, right 0, center center",
  backgroundRepeat: "no-repeat, no-repeat, no-repeat",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "24px",
  textTransform: "uppercase",
  "& > p:first-of-type": {
    fontSize: "56px",
    lineHeight: "68px",
    fontFamily: "DM Sans, sans-serif",
  },
  "& > p:nth-of-type(2)": {
    fontSize: "20px",
    lineHeight: "36px",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "600",
  },
}));
