"use client";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import image4 from "@/images/image4.jpeg";
import image5 from "@/images/image5.jpeg";
import image6 from "@/images/image6.jpeg";
import letterG from "@/images/svg/letterG.svg";
import banner from "@/images/Banner.png";

export const FirstSec = styled("section")(({}) => ({
  position: "relative",
  backgroundImage: `url(${banner.src})`,
  backgroundSize: "cover",
  backgroundPositionX: "-1px",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingTop: "140px",
  paddingBottom: "110px",
}));

export const FirstSecInner1 = styled("div")(({}) => ({
  maxWidth: "570px",
  textAlign: "center",
  margin: "0 auto",
  color: "white",
  padding: "0 24px",
  "@media all and (max-width: 600px)": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const MainText = styled("p")(({}) => ({
  fontFamily: "Poppins, sans-serif",
  fontSize: "72px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "90px",
  letterSpacing: "0.36px",
  "@media all and (max-width: 600px)": {
    fontSize: "42px",
    lineHeight: "52px",
    letterSpacing: "0.21px",
    maxWidth: "345px",
  },
}));

export const Description = styled("p")(({}) => ({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "24px",
  letterSpacing: "0.08px",
  maxWidth: "520px",
  margin: "12px 0 32px",
  "@media all and (max-width: 600px)": {
    maxWidth: "305px",
  },
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
  gap: "24px",
  marginTop: "100px",
}));

export const TrustedTitle = styled("p")(({}) => ({
  color: "white",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "24px",
  letterSpacing: "0.09px",
  fontFamily: "'DM Sans', sans-serif",
}));
export const TrustedInner = styled("div")(({}) => ({
  display: "flex",
  gap: "24px",
}));
export const FirstSecImageBox = styled("div")(({}) => ({
  position: "absolute",
  top: "-225px",
  right: "0",
  zIndex: "-1",
}));
export const FirstSecImage = styled(Image)(({}) => ({
  maxWidth: "560px",
}));

export const FirstSecFound = styled("div")(({}) => ({
  padding: "16px",
  borderRadius: "16px",
  backdropFilter: "blur(10px)",
  background:
    "linear-gradient(130deg, #FFF -2.18%, rgba(255, 255, 255, 0.56) 118.15%)",
  boxShadow: "56px 56px 80px 0px rgba(2, 14, 35, 0.24)",
  maxWidth: "130px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
  position: "absolute",
  top: "275px",
  right: "305px",
}));
export const FirstSecSquare = styled("div")(({}) => ({
  width: "319.5px",
  height: "80px",
  background: "#0494E7",
  position: "absolute",
  right: "52px",
  top: "0",
  "@media (max-height: 600px)": {
    display: "none",
  },
}));
export const FirstSecFoundTitle1 = styled("p")(({}) => ({
  color: "#071B2C",
  fontFamily: "DM Sans",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "28px",
  letterSpacing: "0.1px",
}));
export const FirstSecFoundTitle2 = styled("p")(({}) => ({
  color: "#8E8D93",
  fontFamily: "DM Sans",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "22px",
  letterSpacing: "0.06px",
}));

// section 2
export const SecSection = styled("section")(({}) => ({
  display: "flex",
  gap: "32px",
  marginTop: "150px",
  justifyContent: "center",
  "@media all and (max-width: 1141px)": {
    flexDirection: "column",
    alignItems: "center",
  },
}));
export const SecSectionInner1 = styled("div")(({}) => ({
  borderRadius: "24px",
  background: "#3598DB",
  maxWidth: "500px",
  padding: "40px",
  position: "relative",
  "@media all and (max-width: 1141px)": {
    maxWidth: "800px",
  },
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
  "@media all and (max-width: 660px)": {
    flexDirection: "column",
  },
}));

export const SecSectionCards = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
}));

export const SecSectionCard = styled("div")(({ theme, height, bgrnd, idx }) => {
  let images = [image5, image6];

  return {
    borderRadius: "16px",
    width: "308px",
    height: height ? height : "202px",
    background: bgrnd
      ? ` linear-gradient(0deg, rgba(38, 56, 84, 0.56) 0%, rgba(38, 56, 84, 0.56) 100%), url(${images[idx].src}), lightgray 50% / cover no-repeat`
      : "none",
    backgroundPosition: "center",
    "@media all and (max-width: 660px)": {
      width: "345px",
      height: "180px",
    },
  };
});

export const SecSectionCardImage = styled(Image)(({}) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "16px",
}));

export const SecSectionBigCard = styled("div")(({ theme, bgrnd }) => ({
  borderRadius: "16px",
  width: "308px",
  height: "560px",
  background: bgrnd
    ? `linear-gradient(0deg, rgba(38, 56, 84, 0.56) 0%, rgba(38, 56, 84, 0.56) 100%), url(${image4.src}), lightgray 50% / cover no-repeat`
    : "none",
  backgroundPosition: "center",
  backgroundSize: "245%",
  "@media all and (max-width: 660px)": {
    width: "345px",
    height: "180px",
  },
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
  boxShadow: "13px 8px 12px 0px rgb(0 0 0 / 8%)",
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

// fifth section

export const FifthSec = styled("section")(({}) => ({
  marginTop: "200px",
  background: "#021638",
  borderRadius: "48px",
}));
export const FifthSecInner = styled("div")(({}) => ({
  background: `url(${letterG.src}) no-repeat right center / 750px`,
  width: "100%",
  color: "#fff",
  padding: "100px",
  "@media all and (max-width: 650px)": {
    padding: "80px 16px",
  },
}));
export const FifthSecBlock1 = styled("div")(({}) => ({
  "& > p:first-of-type": {
    fontSize: "20px",
    lineHeight: "28px",
    fontFamily: "DM Sans",
  },
  "& > p:nth-of-type(2)": {
    fontSize: "48px",
    lineHeight: "56px",
    fontFamily: "DM Sans",
    margin: "16px 0 48px 0",
    "@media all and (max-width: 650px)": {
      fontSize: "38px",
      lineHeight: "53px",
    },
  },
}));

export const FifthSecBlock2 = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
}));
export const FifthSecBlock2Card = styled("div")(({}) => ({
  display: "flex",
  alignItems: "start",
  gap: "16px",
}));
export const FifthSecBlock2InnerText = styled("div")(({}) => ({
  maxWidth: "422px",
  "& > p:first-of-type": {
    fontSize: "24px",
    lineHeight: "32px",
    fontFamily: "DM Sans",
    marginBottom: "12px",
  },
  "& > p:nth-of-type(2)": {
    color: "#A6A6A6",
    fontSize: "16px",
    lineHeight: "24px",
    fontFamily: "DM Sans",
    fontWeight: "400",
  },
}));

// Sixth Section

export const SixthSec = styled("section")(({}) => ({
  background: "#3598DB",
  display: "flex",
  padding: "50px 0",
  marginTop: "100px",
}));

export const SixthSecInner = styled("div")(({}) => ({
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "@media all and (max-width: 660px)": {
    flexDirection: "column",
    alignItems: "center",
    gap: "60px",
  },
}));

export const SixthTextgroup = styled("div")(({}) => ({
  maxWidth: "630px",
  "@media all and (max-width: 890px)": {
    maxWidth: "395px",
  },
}));
export const SixthTitle = styled("p")(({}) => ({
  fontSize: "48px",
  lineHeight: "56px",
  fontFamily: "DM Sans, sans-serif",
  marginBottom: "16px",
  "@media all and (max-width: 650px)": {
    fontSize: "38px",
    lineHeight: "53px",
  },
}));

export const SixthDescription = styled("p")(({}) => ({
  fontFamily: "DM Sans, sans-serif",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
}));

// conatact form

export const ContactSection = styled("section")(({}) => ({
  marginTop: "170px",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "65px",
  "@media all and (max-width: 850px)": {
    flexDirection: "column-reverse",
    alignItems: "center",
  },
}));
export const ContactSectionInner = styled("div")(({}) => ({
  "@media all and (min-width: 850px)": {
    maxWidth: "420px",
  },
  maxHeight: "410px",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  borderRadius: "24px",
  border: "1px solid #E9EBED",
  background: "#fff",
  padding: "32px",
  "@media all and (max-width: 850px)": {
    width: "100%",
    textAlign: "center",
  },
}));
export const ContactSectionTextGroup = styled("div")(({}) => ({}));
export const ConatctSectionTitle = styled("p")(({}) => ({
  fontFamily: " DM Sans, sans-serif",
  fontSize: "48px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "56px" /* 116.667% */,
  letterSpacing: "0.24px",
  color: "#09080D",
}));
export const ContactSectionSubtitle = styled("p")(({}) => ({
  fontFamily: " DM Sans, sans-serif",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "24px" /* 116.667% */,
  letterSpacing: "0.08px",
  color: "#7D7C84",
  marginTop: "16px",
}));
export const ContactSectionInfoGroup = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
}));
export const ContactSectionInnerInfo = styled("div")(({}) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  p: {
    fontFamily: " DM Sans, sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "24px" /* 116.667% */,
    letterSpacing: "0.08px",
    color: "#09080D",
  },
}));

export const ContactSectionForm = styled("form")(({}) => ({
  width: "695px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  marginLeft: "50px",
  button: {
    alignSelf: "end",
    marginTop: "48px",
  },
  "@media all and (max-width: 850px)": {
    marginLeft: "0",
    button: {
      alignSelf: "center",
      marginBottom: "80px",
    },
  },
  "@media all and (max-width: 730px)": {
    width: "100%",
  },
}));

export const ContactSectionFormInner = styled("div")(({ theme, height }) => ({
  width: "100%",
  p: {
    fontFamily: " DM Sans, sans-serif",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "22px" /* 116.667% */,
    letterSpacing: "0.08px",
    color: "#09080D",
    marginBottom: "8px",
  },
  input: {
    width: "100%",
    height: "52px",
    padding: "16px",
    paddingLeft: "16px",
    borderRadius: "8px",
    border: "1px solid #E9EBED",
    outline: "none",
    textAlign: "start",
    "&:focus": {
      border: "2px solid #3598dbab",
    },
  },
  textarea: {
    width: "100%",
    height: "130px",
    paddingLeft: "16px",
    paddingTop: "16px",
    borderRadius: "8px",
    border: "1px solid #E9EBED",
    // transition: "border 0.3s ease-in-out",
    outline: "none",
    height: height || "auto",

    "&:focus": {
      border: "2px solid #3598db",
    },

    resize: "none",
  },
}));
export const ContactSectionFormArea = styled("div")(({}) => ({}));

// fourth section

export const FourthSection = styled("section")(({}) => ({
  display: "flex",
  gap: "32px",
  marginTop: "150px",
  justifyContent: "center",
  "@media all and (max-width: 700px)": {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const FourthSectionInner1 = styled("div")(({}) => ({
  borderRadius: "24px",
  background: "#3598DB",
  maxWidth: "500px",
  padding: "40px",
  position: "relative",
}));

export const FourthSectionInner2 = styled("div")(({}) => ({
  display: "flex",
  gap: "12px",
  "@media all and (max-width: 700px)": {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const FourthSectionCards = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
}));

export const FourthSectionCard = styled("div")(
  ({ theme, height, bgrnd, idx }) => {
    let images = [image5, image6];

    return {
      borderRadius: "16px",
      width: "308px",
      height: height ? height : "202px",
      background: bgrnd
        ? ` linear-gradient(0deg, rgba(38, 56, 84, 0.56) 0%, rgba(38, 56, 84, 0.56) 100%), url(${images[idx].src}), lightgray 50% / cover no-repeat`
        : "none",
      backgroundPosition: "center",
      "@media all and (max-width: 700px)": {
        width: "345px",
        height: "180px",
      },
    };
  }
);

export const FourthSectionCardImage = styled(Image)(({}) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "16px",
}));

export const FourthSectionBigCard = styled("div")(({ theme, bgrnd }) => ({
  borderRadius: "16px",
  width: "308px",
  height: "100%",
  background: bgrnd
    ? `linear-gradient(0deg, rgba(38, 56, 84, 0.56) 0%, rgba(38, 56, 84, 0.56) 100%), url(${image4.src}), lightgray 50% / cover no-repeat`
    : "none",
  backgroundPosition: "center",
  backgroundSize: "245%",
  "@media all and (max-width: 1040px)": {
    display: "none",
  },
  "@media all and (max-width: 700px)": {
    width: "345px",
    height: "180px",
    display: "inline-block",
  },
}));
export const FourthSectionBigCardImg = styled(Image)(({}) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "16px",
}));
