import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostBanner = (props) => {
  return (
    <div
      className={`relative w-full bg-white dark:bg-[#1a1a1a] aspect-[10/4] flex mb-2 rounded-[20px] drop-shadow text-[.7rem] sm:text-[.85rem] md:text-[1rem] ${
        props.reverse === true
          ? "sm:flex-row-reverse flex-col-reverse"
          : "sm:flex-row flex-col-reverse"
      }`}
    >
      <div
        className={`sm:w-[65%] w-full  flex flex-col gap-4 font-semibold text-[#333]/90 dark:text-white  p-5  ${
          props.reverse === true ? " sm:pr-3 sm:pl-8" : "sm:pr-7 sm:pl-3"
        }`}
      >
        <Link href="/">
          <h1 className="text-[170%] sora tracking-wide leading-8">
            China flight attendants advised to wear diapers for Covid protection
          </h1>
        </Link>
        <p className="outfit font-light text-[90%] text-[#333]/60 dark:text-white/70">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas magni
          odio, illo repellat perferendis quis consequatur blanditiis temporibus
          ab excepturi corrupti
        </p>
        <div
          className={`w-full flex justify-start ${
            props.reverse === true ? "sm:justify-end" : ""
          }`}
        >
          <button className="relative px-6 py-2 w-fit rounded-md bg-neutral-700 text-white text-[110%] sm:text-[1rem] sora mr-2 mt-2">
            Read More
          </button>
        </div>
      </div>
      <div className="w-full sm:w-[35%] relative h-[140px] sm:h-full group bg-[#333] scale-105 sm:scale-[1.2] rounded-xl sm:rounded-[20px] overflow-hidden">
        <div className="absolute top-0 w-full px-3 pt-5 z-30">
          <Link
            href="/"
            className="sora font-semibold text-white text-xl bg-clip-text drop-shadow-xl "
          >
            Music
          </Link>
        </div>

        <Image
          src="/img4.jpg"
          layout="fill"
          objectFit="cover"
          alt=""
          className="z-20 group-hover:opacity-60 transition "
        />
      </div>
    </div>
  );
};

export default PostBanner;

PostBanner.defaultProps = {
  reverse: false,
};
