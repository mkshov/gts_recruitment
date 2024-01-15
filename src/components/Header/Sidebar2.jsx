import { Box, Container } from "@mui/material";
import { HeaderLinkSidebar } from "./styled";
import Link from "next/link";

export default function Sidebar2({ sidebar, closeSidebar }) {
  return (
    <Box
      sx={{
        width: "100%",
        maxHeight: "100vh",
        minHeight: "100vh",
        overflowY: "auto",
        position: "fixed",
        left: "0",
        background: "#000623",
        transition: "0.5s",
        top: sidebar ? "-200vh" : 0,
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            marginTop: "110px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            alignItems: "start",
          }}
        >
          <Link href="/about-us">
            <HeaderLinkSidebar onClick={closeSidebar}>
              Who we are
            </HeaderLinkSidebar>
          </Link>
          <Link href="/what-we-do">
            <HeaderLinkSidebar onClick={closeSidebar}>
              What we do
            </HeaderLinkSidebar>
          </Link>
          <Link href="/join-us">
            <HeaderLinkSidebar onClick={closeSidebar}>
              Join us
            </HeaderLinkSidebar>
          </Link>
          <Link href="/contact-us">
            <HeaderLinkSidebar onClick={closeSidebar}>
              Contact us
            </HeaderLinkSidebar>
          </Link>
          <Link href="/reviews">
            <HeaderLinkSidebar onClick={closeSidebar}>
              Reviews
            </HeaderLinkSidebar>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
