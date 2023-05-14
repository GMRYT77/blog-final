import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostImgCard = () => {
  return (
    <div className="w-full relative aspect-[10/9] rounded-xl overflow-hidden group mb-2">
      <Image
        src="/img1.jpg"
        layout="fill"
        objectFit="cover"
        alt=""
        className="group-hover:opacity-70 transition-[200ms] z-20"
      />
      <div className="absolute top-0 w-full h-full z-10 bg-black"></div>
      <div className="absolute bottom-0 w-full z-30 text-white px-7 pb-4  flex flex-col">
        <Link
          href="/"
          className="outfit px-2 py-1 bg-blue-400/70 w-fit rounded-md mb-3 text-sm"
        >
          catgegory
        </Link>
        <Link href="/" className="mb-4">
          <h1 className="sora font-semibold text-[2rem] leading-[52px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            nesciunt nam
          </h1>
        </Link>
        <div className="flex gap-4 items-center text-white/70  text-sm">
          <div className="relative w-[32px] h-[32px] rounded-full overflow-hidden mb-2 ">
            <Image src="/p1.png" layout="fill" objectFit="cover" alt="" />
          </div>
          <Link href="/" className="hover:text-white e">
            Steve Jobs
          </Link>
          <span className="w-[6px] h-[6px] rounded-full mt-1 bg-white/70"></span>
          <span>November 17, 2022</span>
        </div>
      </div>
    </div>
  );
};

export default PostImgCard;
