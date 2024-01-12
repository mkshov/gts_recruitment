import Image from "next/image";

import { Box, Container } from "@mui/material";

import {
  BurgerMenu,
  GTSHeader,
  HeaderBack,
  HeaderImageBox,
  HeaderLink,
  HeaderNav,
} from "./styled";

import logo from "@/images/svg/logo.svg";
import logoWhite from "@/images/svg/logoWhite.svg";

import Link from "next/link";
import HeaderMenu from "./Sidebar";

export default function Header({ isHidden, isBack, url, handleNavigate }) {
  return (
    <HeaderBack isHidden={isHidden} isBack={isBack}>
      <Container maxWidth="lg">
        <GTSHeader>
          <Link href="/">
            <HeaderImageBox>
              {isHidden ? (
                <Image src={logo} alt="GTS Logo logo recruitment" />
              ) : (
                <Image src={logoWhite} alt="GTS Logo logo recruitment" />
              )}
            </HeaderImageBox>
          </Link>
          <HeaderMenu isHidden={isHidden} />
          <HeaderNav>
            <Link href="/about-us">
              <HeaderLink
                isBack={isBack}
                isHidden={isHidden}
                className={url === "/about-us" ? "link_active" : null}
              >
                Who we are
              </HeaderLink>
            </Link>
            <Link href="/what-we-do">
              <HeaderLink
                isBack={isBack}
                isHidden={isHidden}
                className={url === "/what-we-do" ? "link_active" : null}
              >
                What we do
              </HeaderLink>
            </Link>
            <Link href="/join-us">
              <HeaderLink
                isBack={isBack}
                isHidden={isHidden}
                className={url === "/join-us" ? "link_active" : null}
              >
                Join us
              </HeaderLink>
            </Link>
            <Link href="/contact-us">
              <HeaderLink
                isBack={isBack}
                isHidden={isHidden}
                className={url === "/contact-us" ? "link_active" : null}
              >
                Contact us
              </HeaderLink>
            </Link>
            <Link href="/reviews">
              <HeaderLink
                isBack={isBack}
                isHidden={isHidden}
                className={url === "/reviews" ? "link_active" : null}
              >
                Reviews
              </HeaderLink>
            </Link>
          </HeaderNav>
        </GTSHeader>
      </Container>
    </HeaderBack>
  );
}
