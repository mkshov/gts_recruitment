"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = ({ children, aos }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;
