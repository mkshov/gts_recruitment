import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const GTSFooter = styled("footer")(({}) => ({
  background: "#021638",
  color: "#C5C5C5",
  padding: "120px 0 25px 0",
}));

export const FooterInner = styled("div")(({}) => ({
  background: "#021638",
  color: "#C5C5C5",
}));

export const FtrInrBlock1 = styled("div")(({}) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",

  img: {
    width: "61px",
    transition: ".5s",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  "@media all and (max-width: 930px)": {
    flexDirection: "column",
    alignItems: "center",
    gap: "50px",
  },
}));

export const FooterNav = styled("nav")(({}) => ({
  background: "#021638",
  color: "#C5C5C5",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "40px",
  maxWidth: "363px",

  a: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "0.08px",
  },
  "@media all and (max-width: 930px)": {
    maxWidth: "630px",
  },
}));

export const FtrParentForm = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  p: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "1px",
  },
  "@media all and (max-width: 560px)": {
    marginTop: "100px",
    alignItems: "center",
  },
}));
export const FooterForm = styled("form")(({}) => ({
  background: "#021638",
  color: "#C5C5C5",
  display: "flex",
  gap: "16px",
  input: {
    padding: "16px 32px",
    borderRadius: "32px",
    border: "2px solid #021638",
    outline: "none",
    background: "rgba(255, 255, 255, 0.12)",
    "&:focus": {
      border: "2px solid #3598dbab",
    },
  },
  "@media all and (max-width: 560px)": {
    flexDirection: "column",
  },
}));

export const DottedLine = styled("div")(({ theme, margin }) => ({
  position: "relative",
  height: "1px",
  border: "none",
  backgroundColor: "rgba(255, 255, 255, 0.25)",
  margin: margin ? margin : 0,
}));

export const Dot = styled("div")({
  position: "absolute",
  top: "-3px",
  width: "4px",
  height: "4px",
  backgroundColor: "#8c8c8c",
  borderRadius: "100%",
});

export const LeftDot = styled(Dot)({
  left: "-2px",
  top: "-1.5px",
});

export const RightDot = styled(Dot)({
  right: "-2px",
  top: "-1.5px",
});

export const FtrInrBlock2 = styled("div")(({}) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  "@media all and (max-width: 560px)": {
    flexDirection: "column-reverse",
    gap: "30px",
  },
}));

export const FtrSocials = styled("div")(({}) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "20px",
}));
export const FtrIcon = styled(Button)(({}) => ({
  border: "1px solid rgba(255, 255, 255, 0.12)",
  borderRadius: "100%",
  padding: "20px",
  color: "white",
}));
