"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import styled from "@emotion/styled";

const actions = [
  { icon: <EmailIcon sx={{ color: "#fff" }} />, name: "Email" },
  { icon: <WhatsAppIcon sx={{ color: "#fff" }} />, name: "WhatsApp" },
  { icon: <LinkedInIcon sx={{ color: "#fff" }} />, name: "LinkedIn" },
  { icon: <TwitterIcon sx={{ color: "#fff" }} />, name: "Twitter" },
];

export const MySpeedDial = styled(SpeedDial)(({}) => ({
  button: {
    background: "#3598DB",
  },
  "@media all and (max-width: 520px)": {
    bottom: "20px",
    right: "20px",
  },
}));

export default function GTSSpeedDial() {
  return (
    // <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
    <MySpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: "fixed", bottom: 80, right: 30 }}
      icon={<WhatsAppIcon fontSize="large" />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </MySpeedDial>
    // </Box>
  );
}
