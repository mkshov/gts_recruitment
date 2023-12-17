"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Box, Container } from "@mui/material";

import {
  GTSHeader,
  HeaderBack,
  HeaderImageBox,
  HeaderLink,
  HeaderNav,
} from "./styled";
import logo from "../../images/svg/logo.svg";
import { FirstSecSquare } from "@/app/pagesComponent/HomePage/styled";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const [isHidden, setIsHidden] = useState(false);
  const [isBack, setIsBack] = useState(false);
  console.log("isHidden: ", isHidden);
  const scrollThreshold = 150;

  const handleScroll = () => {
    if (window.scrollY > scrollThreshold) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      setIsBack(false);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setIsBack(true);
    }
  }, []);

  const handleNavigate = (path) => (e) => {
    router.push(path);
  };
  return (
    <HeaderBack isHidden={isHidden} isBack={isBack}>
      <Container maxWidth="lg">
        <GTSHeader>
          <HeaderImageBox onClick={handleNavigate("/")}>
            <Image src={logo} alt="GTS Logo logo recruitment" />
          </HeaderImageBox>
          <HeaderNav>
            <HeaderLink onClick={handleNavigate("/about")}>
              Who we are
            </HeaderLink>
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
    </HeaderBack>
  );
}
