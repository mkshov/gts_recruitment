"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Header from "./Header";

export default function useHeaderFunctions() {
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
    router.push(`${path}`);
  };

  return (
    <Header
      isHidden={isHidden}
      isBack={isBack}
      url={url}
      handleNavigate={handleNavigate}
    />
  );
}
