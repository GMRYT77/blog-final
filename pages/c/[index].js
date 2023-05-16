import About from "@/components/About";
import PvC from "@/components/PvC";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
  const router = useRouter();
  const [path, setPath] = useState("/c/[index]");
  useEffect(() => {
    while (router.asPath === "/c/[index]") {
      return;
    }
    setPath(() => router.asPath);
  });
  return (
    <>
      {path === "/c/about" ? <About /> : ""}
      {path === "/c/privacy-policy" ? <PvC /> : ""}
    </>
  );
};

export default index;
