import About from "@/components/About";
import PvC from "@/components/PvC";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
  const [path, setPath] = useState("/c/[index]");
  const router = useRouter();
  useEffect(() => {
    while (router.asPath === "/c/[index]") {
      return;
    }
    setPath(() => router.query.index);
    console.log(router.query.index);
  }, [router.query]);
  return (
    <>
      {path === "about" ? <About /> : ""}
      {path === "privacy-policy" ? <PvC /> : ""}
    </>
  );
};

export default index;
