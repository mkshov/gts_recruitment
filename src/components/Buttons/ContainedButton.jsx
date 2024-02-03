"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)(({ theme }) => ({}));
const ContainedButton = ({
  children,
  width,
  height,
  br,
  ml,
  styles,
  onClick,
  bgColor,
  color,
  hover,
}) => {
  const buttonStyles = {
    color: color || "#FCFCFD",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "0.08px",
    padding: "14px 50px",
    borderRadius: br || "32px",
    textTransform: "none",
    width: width || null,
    height: height || null,
    backgroundColor: bgColor ? `${bgColor} !important` : "#3598DB !important",
    border: hover ? "1px solid #ffffffb3" : "none",
    ...styles, // Можете передать дополнительные стили извне
    "&:hover": {
      boxShadow: "none",
      border: hover ? "1px solid #ffffff54" : "none",
    },
  };

  return (
    <CustomButton type="submit" onClick={onClick} sx={buttonStyles}>
      {children}
    </CustomButton>
  );
};

export default ContainedButton;
