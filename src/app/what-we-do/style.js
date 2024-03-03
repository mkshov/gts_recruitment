"use client";

import { styled } from "@mui/material";
import Accordion from "@mui/material/Accordion";

import letterG from "@/images/svg/mainLetterG.svg";

export const WhatWeDo = styled("section")(({}) => ({
  background: "#fff",
}));
export const PagesBackgroundSec = styled("div")(({ theme, background }) => ({
  color: "white",
  height: "770px",
  position: "relative",
  paddingTop: "70px",
  // background: `url(${letterG.src}) -430px -350px no-repeat, #0977c1 url(${letterG.src}) 65vw -170px no-repeat`,
  backgroundImage: `linear-gradient(rgb(20 106 164 / 75%), rgba(20, 106, 164, 0.3)), url(${letterG.src}),url(${letterG.src}), url(${background.src})`,
  backgroundPosition: "center center, -450px -250px, 70vw 100px, center center",
  backgroundRepeat: "no-repeat, no-repeat, no-repeat",
  backgroundSize: "auto, auto, auto, cover",
  backgroundAttachment: "fixed",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
  textAlign: "center",
  "& > p:first-of-type": {
    fontSize: "56px",
    lineHeight: "68px",
    fontFamily: "DM Sans, sans-serif",
    marginTop: "120px",
    fontWeight: "700",
  },
  "& > p:nth-of-type(2)": {
    fontSize: "21px",
    lineHeight: "36px",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "600",
    maxWidth: "690px",
  },
  "& > img": {
    position: "absolute",
    bottom: "0",
  },
  "@media only screen and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2)":
    {
      backgroundAttachment: "local",
    },
  "@media all and (max-width: 650px)": {
    padding: "70px 50px 0 50px",
    "& > p:first-of-type": {
      fontSize: "42px",
      lineHeight: "52px",
      marginTop: "180px",
    },
    "& > p:nth-of-type(2)": {
      fontSize: "16px",
      lineHeight: "25px",
    },
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
    fontSize: "21px",
    lineHeight: "31px",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "700",
    marginBottom: "16px",
  },
  "& > p:nth-of-type(2)": {
    fontSize: "16px",
    lineHeight: "26px",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "400",
    color: "#636366",
  },
  "@media all and (max-width: 600px)": {
    position: "static",
  },
}));

export const MainAccordion = styled("div")(({}) => ({
  marginBottom: "100px",

  "@media all and (max-width: 850px)": {
    marginTop: "100px",
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
  fontSize: "21px",
  lineHeight: "28px",
  fontFamily: "DM Sans, sans-serif",
  fontWeight: "600",
}));
export const MyAccordionSubtitle = styled("p")(({}) => ({
  padding: "10px",
  boxShadow: "none",
}));
