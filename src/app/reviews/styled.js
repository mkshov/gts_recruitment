"use client";

import { styled } from "@mui/material";

export const Reviews = styled("main")(({}) => ({}));
export const ReviewsMain = styled("section")(({}) => ({
  background: "#fff",
}));
export const ReviewsInner = styled("div")(({}) => ({
  maxWidth: "1230px",
  background: "#fff",
  borderRadius: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "40px",
  padding: "40px",
  boxShadow: "0px 6px 24px 0px rgba(15, 109, 186, 0.07)",
  position: "relative",
  top: "-240px",
}));
export const ReviewsCard = styled("div")(({}) => ({
  maxWidth: "555px",
  padding: "25px",
  background: "#fff",
  border: "1px solid #EDEDED",
  borderRadius: "16px",
}));
export const ReviewsAvatar = styled("div")(({}) => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginTop: "24px",
  img: {
    width: "56px",
    height: "56px",
    objectFit: "cover",
    borderRadius: "80px",
    objectPosition: "top",
    // display: "none",
  },
}));
export const ReviewsAvatarText = styled("div")(({}) => ({
  "& > p:first-of-type": {
    fontSize: "18px",
    lineHeight: "23px",
    fontFamily: "DM Sans, sans-serif",
    color: "#071B2C",
    fontWeight: 700,
  },
  "& > p:nth-of-type(2)": {
    fontSize: "14px",
    lineHeight: "18px",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: 500,
    color: "#0F6DBA",
  },
}));
export const ReviewsDescription = styled("p")(({}) => ({
  fontSize: "14px",
  lineHeight: "22px",
  fontFamily: "DM Sans, sans-serif",
  marginTop: "16px",
  color: "#636366",
}));
