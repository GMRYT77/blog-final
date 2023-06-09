import { Html, Head, Main, NextScript } from "next/document";
import { useEffect, useState } from "react";

export default function Document() {
  return (
    <Html lang="en" id="html" className="scroll-smooth">
      <Head />
      <body
        id="BODY"
        className="overflow-x-hidden bg-[#f2f2f2] dark:bg-[#2b2b2b] dark:text-white box-border scrolly-d "
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
