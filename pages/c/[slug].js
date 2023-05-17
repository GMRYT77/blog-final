import About from "@/components/About";
import PvC from "@/components/PvC";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Slug = () => {
  const router = useRouter();

  return (
    <>
      {router.query.slug === "about" ? <About /> : ""}
      {router.query.slug === "privacy-policy" ? <PvC /> : ""}
    </>
  );
};

export default Slug;
