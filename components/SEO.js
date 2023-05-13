import Head from "next/head";
import React from "react";

const SEO = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
    </Head>
  );
};

export default SEO;

SEO.defaultProps = {
  title: "Deafult",
};
