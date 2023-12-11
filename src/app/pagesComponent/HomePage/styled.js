"use client";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import image4 from "../../../images/image4.jpeg";
import image5 from "../../../images/image5.jpeg";

export const FirstSec = styled("section")(({}) => ({
  marginTop: "130px",
  position: "relative",
}));

export const FirstSecInner1 = styled("div")(({}) => ({
  maxWidth: "540px",
}));

export const MainText = styled("p")(({}) => ({
  color: "#071B2C",
  fontFamily: "Poppins, sans-serif",
  fontSize: "72px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "90px",
  letterSpacing: "0.36px",
}));

export const Description = styled("p")(({}) => ({
  color: "#071B2C",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "24px",
  letterSpacing: "0.08px",
  maxWidth: "520px",
  margin: "12px 0 32px",
}));

export const Btn = styled("p")(({}) => ({
  color: "#FCFCFD",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "24px",
  letterSpacing: "0.08px",
  padding: "14px 32px",
  borderRadius: "32px",
  backgroundColor: "#3598DB",
}));

export const Trusted = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  marginTop: "100px",
}));

export const TrustedTitle = styled("p")(({}) => ({
  color: "#A2A1A7",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "24px",
  letterSpacing: "0.09px",
  fontFamily: "'DM Sans', sans-serif",
}));
export const TrustedInner = styled("p")(({}) => ({
  display: "flex",
  gap: "24px",
}));

// section 2
export const SecSection = styled("section")(({}) => ({
  display: "flex",
  gap: "32px",
  marginTop: "150px",
  justifyContent: "center",
}));
export const SecSectionInner1 = styled("div")(({}) => ({
  borderRadius: "24px",
  background: "#3598DB",
  maxWidth: "500px",
  padding: "40px",
  position: "relative",
}));

export const SecSectionInner1FirstTitle = styled("p")(({}) => ({
  color: "#FFF",
  fontFamily: "DM Sans",
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "125%", // Вместо "40px", так как "125%" относится к размеру шрифта
  letterSpacing: "0.16px",
  margin: "24px 0 12px",
}));
export const SecSectionInner1SecondTitle = styled("p")(({}) => ({
  color: "#FFF",
  fontFamily: "DM Sans",
  fontSize: "21px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "145.455%", // Вместо "32px", так как "145.455%" относится к размеру шрифта
  letterSpacing: "0.11px",
}));

export const SecSectionInner2 = styled("div")(({}) => ({
  display: "flex",
  gap: "12px",
}));

export const SecSectionCards = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
}));

export const SecSectionCard = styled("div")(({ theme, height, bgrnd }) => ({
  borderRadius: "16px",
  maxWidth: "308px",
  height: height || "274px",
  background: bgrnd
    ? ` linear-gradient(0deg, rgba(38, 56, 84, 0.56) 0%, rgba(38, 56, 84, 0.56) 100%), url(${image5.src}), lightgray 50% / cover no-repeat`
    : "none",
  backgroundPosition: "center",
}));

export const SecSectionCardImage = styled(Image)(({}) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "16px",
}));

export const SecSectionBigCard = styled("div")(({ theme, bgrnd }) => ({
  borderRadius: "16px",
  width: "308px",
  height: "100%",
  background: bgrnd
    ? `linear-gradient(0deg, rgba(38, 56, 84, 0.56) 0%, rgba(38, 56, 84, 0.56) 100%), url(${image4.src}), lightgray 50% / cover no-repeat`
    : "none",
  backgroundPosition: "center",
  backgroundSize: "245%",
}));
export const SecSectionBigCardImg = styled(Image)(({}) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "16px",
}));

// section 3

export const ThirdSec = styled("section")(({}) => ({
  marginTop: "54px",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
}));
export const ThirdSecTitle = styled("p")(({}) => ({
  color: "#071B2C",
  fontFamily: "DM Sans",
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "40px",
  letterSpacing: "0.16px",
}));
export const ThirdSecPeopleGroup = styled("div")(({}) => ({
  display: "flex",
  justifyContent: "space-between",
  minHeight: "490px",
}));
export const ThirdSecPeople = styled("div")(({ theme, alignSelf }) => ({
  width: "21.83%",
  alignSelf: alignSelf || "none",
}));
export const ThirdSecPeopleImgBox = styled("div")(({}) => ({
  height: "280px",
}));
export const ThirdSecPeopleImg = styled(Image)(({}) => ({
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  boxShadow: "0px 10px 10px 0px rgba(15, 24, 44, 0.15)",
  objectFit: "cover",
}));
export const ThirdSecPeopleName = styled("p")(({}) => ({
  color: "#183B56",
  fontFamily: "DM Sans",
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "40px",
  letterSpacing: "0.2px",
  marginTop: "28px",
  marginBottom: "16px",
}));
export const ThirdSecPeopleDesc = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: "9px",
}));
export const ThirdSecPeopleDescInner = styled("div")(({}) => ({
  display: "flex",
  alignItems: "start",
  gap: "12px",
}));
export const ThirdSecPeopleIcon = styled(Image)(({}) => ({
  marginTop: "5px",
}));
export const ThirdSecPeopleDescInnerText = styled("p")(({}) => ({
  color: "#5A7184",
  fontFamily: "DM Sans",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
}));
