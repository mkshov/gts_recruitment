"use client";
import styled from "@emotion/styled";
import letterG1 from "../../../images/svg/letterG1.svg";
import letterG2 from "../../../images/svg/letterG2.svg";

export const AboutMain = styled("div")(({}) => ({}));
export const AboutSec1 = styled("div")(({}) => ({
  color: "white",
  height: "260px",
  position: "relative",
  background: `url(${letterG1.src}) left -100px no-repeat, #0977c1 url(${letterG2.src}) right 0 no-repeat`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "24px",
  "& > p:first-of-type": {
    fontSize: "56px",
    lineHeight: "68px",
    fontFamily: "DM Sans, sans-serif",
  },
  "& > p:nth-of-type(2)": {
    fontSize: "20px",
    lineHeight: "36px",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "400",
  },
}));
