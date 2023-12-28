"use client";
import { styled } from "@mui/material";

export const ContactUs = styled("section")(({}) => ({
  background: "#fff",
}));
export const ContactUsMain = styled("div")(({}) => ({}));
export const ContactUsInner1 = styled("div")(({}) => ({
  padding: "50px",
  borderRadius: "20px",
  boxShadow: "0px 6px 24px 0px rgba(15, 109, 186, 0.07)",
  position: "relative",
  top: "-240px",
  background: "#fff",
  "& > p": {
    fontFamily: " DM Sans, sans-serif",
    fontSize: "42px",
    fontWeight: 700,
    lineHeight: "46px" /* 116.667% */,
    letterSpacing: "-2px",
    color: "#071B2C",
    marginBottom: "40px",
  },
}));

export const ContactUsForm = styled("form")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));
export const ContactUsFormInner = styled("div")(({}) => ({
  display: "flex",
  gap: "25px",
}));

export const ContactUsInner2 = styled("div")(({}) => ({
  display: "flex",
  gap: "70px",
  justifyContent: "center",
  marginTop: "-100px",
  paddingBottom: "100px",
}));
export const ContactUsInner2Card = styled("div")(({}) => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "330px",
  "& > p:first-of-type": {
    fontSize: "24px",
    lineHeight: "32px",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "700",
    color: "#183B56",
    marginTop: "25px",
  },
  "& > p:nth-of-type(2)": {
    fontSize: "16px",
    lineHeight: "28px",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "400",
    marginTop: "12px",
    color: "#5A7184",

    marginBottom: "16px",
  },
  a: {
    fontSize: "16px",
    lineHeight: "28px",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "700",
    marginTop: "12px",
    marginBottom: "16px",
    color: "#0F6DBA",
  },
}));
