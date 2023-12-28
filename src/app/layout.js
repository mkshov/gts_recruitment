import { Inter } from "next/font/google";
import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/utils/ThemeRegistry";
import Header from "@/components/Header/Header";
import AOSWrapper from "@/utils/aosInit";
import Footer from "@/components/Footer/Footer";
import GTSSpeedDial from "@/components/SpeedDial";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GTS Recruitment",
  description:
    "GTS - is a leading business recruitment company. We offer highly qualified specialists to meet unique business needs. A specialized method of personnel selection aimed at identifying and attracting top specialists for specific positions in the organization.",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html>
        <head>
          <meta name="title" content="GTS Recruitment" />
        </head>
        <AOSWrapper>
          <body className={inter.className}>
            <Header />
            {children}
            <Footer />
            <GTSSpeedDial />
          </body>
        </AOSWrapper>
      </html>
    </ThemeProvider>
  );
}
