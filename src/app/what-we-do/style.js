"use client";

import { styled } from "@mui/material";
import Accordion from "@mui/material/Accordion";

import letterG from "../../images/svg/mainLetterG.svg";

export const WhatWeDo = styled("section")(({}) => ({
  background: "#fff",
}));
export const PagesBackgroundSec = styled("div")(({}) => ({
  color: "white",
  height: "560px",
  position: "relative",
  background: `url(${letterG.src}) -430px -350px no-repeat, #0977c1 url(${letterG.src}) 65vw -170px no-repeat`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
  textAlign: "center",
  "& > p:first-of-type": {
    fontSize: "56px",
    lineHeight: "68px",
    fontFamily: "DM Sans, sans-serif",
    marginTop: "80px",
  },
  "& > p:nth-of-type(2)": {
    fontSize: "20px",
    lineHeight: "36px",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "400",
    maxWidth: "810px",
  },
  "& > img": {
    position: "absolute",
    bottom: "0",
  },
}));

export const WhatWeDoSec2 = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const PagesTextBlock = styled("div")(({}) => ({
  maxWidth: "1175px",
  padding: "40px",
  margin: "20px",
  borderRadius: "40px",
  boxShadow: "0px 6px 24px 0px rgba(15, 109, 186, 0.07)",
  background: "#fff",
  position: "absolute",
  zIndex: "2",
  top: "340px",

  "& > p:first-of-type": {
    fontSize: "23px",
    lineHeight: "31px",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "700",
    marginBottom: "16px",
  },
  "& > p:nth-of-type(2)": {
    fontSize: "18px",
    lineHeight: "26px",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "400",
    color: "#636366",
  },
}));

export const MyAccordion = styled(Accordion)(({ width }) => ({
  padding: "10px",
  boxShadow: "none",
  maxWidth: width ? width : "1050px",
  textAlign: "start",
}));
export const MyAccordionTitle = styled("p")(({}) => ({
  color: "#000",
  fontSize: "17px",
  lineHeight: "28px",
  fontFamily: "DM Sans, sans-serif",
  fontWeight: "600",
}));
export const MyAccordionSubtitle = styled("p")(({}) => ({
  padding: "10px",
  boxShadow: "none",
}));
