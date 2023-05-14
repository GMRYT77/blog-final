import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostBanner = (props) => {
  return (
    <div
      className={`relative w-full bg-white aspect-[10/4] flex mb-12 rounded-[20px] drop-shadow ${
        props.reverse === true ? "flex-row-reverse" : ""
      }`}
    >
      <div
        className={`w-[65%] flex flex-col  font-semibold text-[#333]/90 py-2 ${
          props.reverse === true ? "pr-3 pl-8" : "pr-7 pl-3"
        }`}
      >
        <Link href="">
          <h1 className="text-2xl sora tracking-wide mb-2">
            China flight attendants advised to wear diapers for Covid protection
          </h1>
        </Link>
        <p className="outfit text-[.95rem] text-[#333]/60">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas magni
          odio, illo repellat perferendis quis consequatur blanditiis temporibus
          ab excepturi corrupti
        </p>
      </div>
      <div className="w-[35%] relative h-full group bg-[#333] scale-[1.2] rounded-[20px] overflow-hidden">
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
