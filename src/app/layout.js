import { Suspense } from "react";
import { Inter } from "next/font/google";

import "./globals.css";
import Loading from "./loading";
import AOSWrapper from "@/utils/aosInit";
import theme from "@/utils/ThemeRegistry";
import GTSSpeedDial from "@/components/SpeedDial";
import Header from "@/components/Header/HeaderFunctions";

import { ToastContainer } from "react-toastify";
import { CssBaseline, ThemeProvider } from "@mui/material";
import MainFooter from "@/components/Footer/FooterFunctions";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GTS Recruitment",
  description:
    "GTS - is a leading business recruitment company. We offer highly qualified specialists to meet unique business needs. A specialized method of personnel selection aimed at identifying and attracting top specialists for specific positions in the organization.",
};

export default function RootLayout({ children, params }) {
  return (
    <AOSWrapper>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <html lang="en">
          <head>
            <meta name="title" content="GTS Recruitment" />
          </head>
          <body className={inter.className}>
            <Header />
            <Suspense fallback={<Loading />}>{children}</Suspense>
            <MainFooter />
            <GTSSpeedDial />
            <ToastContainer />
          </body>
        </html>
      </ThemeProvider>
    </AOSWrapper>
  );
}
