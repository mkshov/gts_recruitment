"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Header from "./Header";

export default function useHeaderFunctions() {
  const router = useRouter();
  const url = usePathname();

  const [isHidden, setIsHidden] = useState(false);
  const [isBack, setIsBack] = useState(false);
  const [sidebar, setSidebar] = useState(true);
  const [windowWidth, setWindowWidth] = useState(undefined);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, []);

  function toggleSidebar() {
    setSidebar((prev) => !prev);
  }
  function closeSidebar() {
    setSidebar(true);
  }
  function openSidebar() {
    setSidebar(false);
  }

  useEffect(() => {
    if (window.location.pathname === "/") {
      setIsBack(false);
      setIsHidden(false);

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setIsBack(true);
      setIsHidden(true);
    }
  }, [url]);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);

    updateWindowWidth();

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const handleNavigate = (path) => (e) => {
    router.push(`${path}`);
  };

  return (
    <Header
      isHidden={isHidden}
      isBack={isBack}
      url={url}
      handleNavigate={handleNavigate}
      closeSidebar={closeSidebar}
      openSidebar={openSidebar}
      toggleSidebar={toggleSidebar}
      sidebar={sidebar}
    />
  );
}
