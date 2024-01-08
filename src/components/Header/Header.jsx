import Image from "next/image";

import { Box, Container } from "@mui/material";

import {
  GTSHeader,
  HeaderBack,
  HeaderImageBox,
  HeaderLink,
  HeaderNav,
} from "./styled";
import logo from "@/images/svg/logo.svg";
import Link from "next/link";

export default function Header({ isHidden, isBack, url, handleNavigate }) {
  return (
    <HeaderBack isHidden={isHidden} isBack={isBack}>
      <Container maxWidth="lg">
        <GTSHeader>
          <Link href="/">
            <HeaderImageBox>
              <Image src={logo} alt="GTS Logo logo recruitment" />
            </HeaderImageBox>
          </Link>
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
