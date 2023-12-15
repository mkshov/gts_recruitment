"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Box, Container } from "@mui/material";

import { GTSHeader, HeaderImageBox, HeaderLink, HeaderNav } from "./styled";
import logo from "../../images/svg/logo.svg";
import { FirstSecSquare } from "@/app/pagesComponent/HomePage/styled";

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);
  console.log("isHidden: ", isHidden);
  const scrollThreshold = 50;

  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container maxWidth="my">
      <GTSHeader isHidden={isHidden}>
        <HeaderImageBox>
          <Image src={logo} alt="GTS Logo logo recruitment" />
        </HeaderImageBox>
        <HeaderNav>
          <HeaderLink>Who we are</HeaderLink>
          <HeaderLink>What we do</HeaderLink>
          <HeaderLink>Join our tribe</HeaderLink>
          <HeaderLink>Contact us</HeaderLink>
          <HeaderLink>Reviews</HeaderLink>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <p>|</p>
            <HeaderLink c="#0094E8" w={700}>
              EN
            </HeaderLink>
          </div>
        </HeaderNav>
        {/* <FirstSecSquare /> */}
      </GTSHeader>
    </Container>
  );
}
