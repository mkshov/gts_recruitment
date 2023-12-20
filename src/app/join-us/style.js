"use client";

import { styled } from "@mui/material";

export const JoinUs = styled("section")(({}) => ({}));
export const JoinUsSec1 = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const JoinUsSec2 = styled("div")(({}) => ({
  padding: "120px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "55px",
}));
export const JoinUsSec2Inner1 = styled("div")(({}) => ({
  maxWidth: "450px",

  "& > p:first-of-type": {
    fontSize: "48px",
    lineHeight: "56px",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "500",
  },
  "& > p:nth-of-type(2)": {
    fontSize: "16px",
    lineHeight: "24px",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "400",
    color: "#071B2C",
    marginTop: "16px",
  },
}));
export const JoinUsSec2Inner2 = styled("div")(({}) => ({
  display: "flex",
  gap: "32px",
  flexWrap: "wrap",
  justifyContent: "center",
}));
export const JoinUsSec2Inner2Card = styled("div")(({}) => ({
  backgroundColor: "white",
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "16px",
  width: "185px",
  height: "175px",
  "& > p:first-of-type": {
    fontSize: "32px",
    lineHeight: "40px",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "500",
    marginTop: "12px",
  },
  "& > p:first-of-type::after": {
    position: "relative",
    content: "'+'",
    color: "#0F6DBA",
  },
  "& > p:nth-of-type(2)": {
    fontSize: "14px",
    lineHeight: "22px",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "400",
    color: "rgba(7, 27, 44, 0.72)",
    marginTop: "8px",
  },
}));

export const JoinUsSec2Inner3 = styled("div")(({}) => ({
  background: "white",
  padding: "70px",
  textAlign: "center",
  minHeight: "440px",
}));
