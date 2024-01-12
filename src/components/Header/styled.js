"use client";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const HeaderBack = styled("div")(({ isHidden, isBack }) => ({
  background: isBack ? "#fff" : isHidden ? "#fff" : "transparent",
  transition: "0.4s",
  top: "0",
  left: "0",
  right: "0",
  zIndex: "100",
  position: "fixed",
}));
export const GTSHeader = styled("header")(({}) => ({
  display: "flex",
  alignItems: "center",
  gap: "40px",
  padding: "15px 15px 15px 0",
  borderBottomRightRadius: "20px",
  "@media all and (max-width: 700px)": {
    justifyContent: "space-between",
  },
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
  "@media all and (max-width: 700px)": {
    display: "none",
  },
}));

export const HeaderLink = styled("p")(({ theme, c, w, isHidden, isBack }) => ({
  // color: c || "#071B2C",
  color: isBack ? "#9aa1a8" : isHidden ? "#071B2C" : "white",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: w || "500",
  lineHeight: "24px",
  letterSpacing: "0.08px",
  fontFamily: "'DM Sans', sans-serif",
  cursor: "pointer",
  transition: ".2s",
  "&:hover": {
    color: "#0F6DBA",
  },
}));
