"use client";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const HeaderBack = styled("div")(({ isHidden, isBack }) => ({
  background: isBack ? "#F9F9FB" : isHidden ? "#F9F9FB" : "transparent",
  transition: "0.4s",
  position: "sticky",
  top: "0",
  zIndex: "100",
}));
export const GTSHeader = styled("header")(({}) => ({
  display: "flex",
  alignItems: "center",
  gap: "40px",
  padding: "15px 15px 15px 0",
  borderBottomRightRadius: "20px",

  // background: "red",
}));
export const HeaderImageBox = styled("div")(({}) => ({
  // marginLeft: "25px",
  cursor: "pointer",
  transition: ".3s",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

export const HeaderNav = styled("nav")(({}) => ({
  display: "flex",
  gap: "40px",
}));

export const HeaderLink = styled("a")(({ theme, c, w }) => ({
  color: c || "#071B2C",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: w || "500",
  lineHeight: "24px",
  letterSpacing: "0.08px",
  fontFamily: "'DM Sans', sans-serif",
  cursor: "pointer",
}));
