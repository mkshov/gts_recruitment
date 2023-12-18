"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

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
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const url = usePathname();

  const [isHidden, setIsHidden] = useState(false);
  const [isBack, setIsBack] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, []);

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
  }, [url]);

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
            <HeaderLink
              className={url === "/about-us" ? "link_active" : null}
              onClick={handleNavigate("/about-us")}
            >
              Who we are
            </HeaderLink>
            <HeaderLink
              onClick={handleNavigate("/what-we-do")}
              className={url === "/what-we-do" ? "link_active" : null}
            >
              What we do
            </HeaderLink>
            <HeaderLink
              onClick={handleNavigate("/join-us")}
              className={url === "/join-us" ? "link_active" : null}
            >
              Join us
            </HeaderLink>
            <HeaderLink
              onClick={handleNavigate("/contact-us")}
              className={url === "/contact-us" ? "link_active" : null}
            >
              Contact us
            </HeaderLink>
            <HeaderLink
              onClick={handleNavigate("/reviews")}
              className={url === "/reviews" ? "link_active" : null}
            >
              Reviews
            </HeaderLink>
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
