import { Inter } from "next/font/google";
import "./globals.css";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/utils/ThemeRegistry";
import Head from "next/head";
import Header from "@/components/Header/Header";
import AOSWrapper from "@/utils/aosInit";

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
      <html lang="en">
        <head>
          <meta name="title" content="GTS Recruitment" />
        </head>
        <AOSWrapper>
          <body className={inter.className}>
            <Container maxWidth="lg">
              <Header />
              {children}
            </Container>
          </body>
        </AOSWrapper>
      </html>
    </ThemeProvider>
  );
}
