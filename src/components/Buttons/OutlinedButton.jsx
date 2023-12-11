import React from "react";

import { Button, styled } from "@mui/material";
const CustomButton = styled(Button)(({ theme }) => ({
  "@media all and (max-width: 366px)": {
    marginRight: "20px",
    marginTop: "10px",
  },
}));
const OutlinedButton = ({ onClick, text, width, height, styles }) => {
  const buttonStyles = {
    width: width || "112px",
    height: height || "36px",
    cursor: "pointer",
    color: "#99EFD0",
    fontFamily: "Gilroy, sans-serif",
    border: "2px solid #99EFD0",
    background: "transparent",
    flexShrink: 0,
    borderRadius: "20px",
    transition: "0.5s",
    ...styles,
  };

  return (
    <CustomButton onClick={onClick} sx={buttonStyles}>
      {text}
    </CustomButton>
  );
};

export default OutlinedButton;
