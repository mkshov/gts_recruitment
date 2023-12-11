"use client";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const GTSHeader = styled("header")(({}) => ({
  display: "flex",
  alignItems: "center",
  gap: "80px",
  margin: "30px 0",
}));

export const HeaderNav = styled("nav")(({}) => ({
  display: "flex",
  gap: "40px",
}));

export const HeaderLink = styled("a")(({}) => ({
  color: "#071B2C",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "24px",
  letterSpacing: "0.08px",
  fontFamily: "'DM Sans', sans-serif",
}));
