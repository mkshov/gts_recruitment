"use client";
import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomButton = styled(Button)(({ theme }) => ({}));
const ContainedButton = ({ children, width, height, ml, styles, onClick }) => {
  const buttonStyles = {
    color: "#FCFCFD",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "24px",
    letterSpacing: "0.08px",
    padding: "14px 50px",
    borderRadius: "32px",
    backgroundColor: "#3598DB !important",
    ...styles, // Можете передать дополнительные стили извне
  };

  return (
    <CustomButton type="submit" onClick={onClick} sx={buttonStyles}>
      {children}
    </CustomButton>
  );
};

export default ContainedButton;
