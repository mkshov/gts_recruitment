import Image from "next/image";
import { Box } from "@mui/material";

import { GTSHeader, HeaderLink, HeaderNav } from "./styled";
import logo from "../../images/svg/logo.svg";

export default function Header() {
  return (
    <GTSHeader>
      <Box>
        <Image src={logo} />
      </Box>
      <HeaderNav>
        <HeaderLink href="">Who we are</HeaderLink>
        <HeaderLink href="">What we do</HeaderLink>
        <HeaderLink href="">Join our tribe</HeaderLink>
        <HeaderLink href="">Contact us</HeaderLink>
        <HeaderLink href="">Reviews</HeaderLink>
      </HeaderNav>
    </GTSHeader>
  );
}
