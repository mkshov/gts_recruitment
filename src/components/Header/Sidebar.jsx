"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Slant as Hamburger } from "hamburger-react";

import burger from "@/images/svg/burger.svg";
import burgerWhite from "@/images/svg/burgerWhite.svg";
import Image from "next/image";

export default function HeaderMenu({ isHidden }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  function show() {
    toggleDrawer("top", true);
  }

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        background: "#000623",
        color: "white",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        {isHidden ? (
          <Image
            onClick={toggleDrawer("top", true)}
            src={burger}
            alt="GTS Logo logo recruitment"
          />
        ) : (
          <Image
            onClick={toggleDrawer("top", true)}
            src={burgerWhite}
            alt="GTS Logo logo recruitment"
          />
        )}{" "}
        <Drawer
          anchor="top"
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
        >
          {list("top")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
