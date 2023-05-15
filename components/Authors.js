import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbNorthStar } from "react-icons/tb";
import { BsArrowUpRight } from "react-icons/bs";

const Authors = () => {
  return (
    <section>
      <div className="cont flex gap-12 mt-6 flex-col mb-12 text-[.65rem] xxs:text-[.775rem] sm:text-[.875rem] md:text-[1rem]">
        <div className="flex justify-between px-2">
          <h2 className="mukta text-[190%] font-semibold tracking-wide text-[#333] gap-4 flex items-center w-fit ">
            <TbNorthStar className="text-yellow-600" />
            Authors
          </h2>
          <Link
            href="/"
            className="sora font-medium text-[125%] text-[#333]/60 hover:underline hover:underline-offset-4 flex gap-3 hover:text-[#333] items-center group"
          >
            View All
            <BsArrowUpRight className="text-[125%] group-hover:rotate-45 transition-[250ms]" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full  justify-between">
          <div className="flex flex-col  items-center">
            <Link
              href="/"
              className=" w-[100px] sm:w-[130px] md:w-[150px] h-[100px] sm:h-[130px] md:h-[150px]  rounded-full overflow-hidden bg-blue-300 relative mb-5"
            >
              <Image src="/p1.png" objectFit="cover" layout="fill" alt="" />
            </Link>
            <Link
              href="/"
              className="sora text-[140%] font-semibold text-[#333] text-center mb-1 hover:underline"
            >
              Steve Jobs
            </Link>
            <span className="outfit text-[110%] text-[#333]/70 text-center">
              28 Articles
            </span>
          </div>
          <div className="flex flex-col  items-center">
            <Link
              href="/"
              className=" w-[100px] sm:w-[130px] md:w-[150px] h-[100px] sm:h-[130px] md:h-[150px]  rounded-full overflow-hidden bg-blue-300 relative mb-5"
            >
              <Image src="/p1.png" objectFit="cover" layout="fill" alt="" />
            </Link>
            <Link
              href="/"
              className="sora text-[140%] font-semibold text-[#333] text-center mb-1 hover:underline"
            >
              Steve Jobs
            </Link>
            <span className="outfit text-[110%] text-[#333]/70 text-center">
              28 Articles
            </span>
          </div>
          <div className="flex flex-col  items-center">
            <Link
              href="/"
              className=" w-[100px] sm:w-[130px] md:w-[150px] h-[100px] sm:h-[130px] md:h-[150px]  rounded-full overflow-hidden bg-blue-300 relative mb-5"
            >
              <Image src="/p1.png" objectFit="cover" layout="fill" alt="" />
            </Link>
            <Link
              href="/"
              className="sora text-[140%] font-semibold text-[#333] text-center mb-1 hover:underline"
            >
              Steve Jobs
            </Link>
            <span className="outfit text-[110%] text-[#333]/70 text-center">
              28 Articles
            </span>
          </div>
          <div className="flex flex-col  items-center">
            <Link
              href="/"
              className=" w-[100px] sm:w-[130px] md:w-[150px] h-[100px] sm:h-[130px] md:h-[150px]  rounded-full overflow-hidden bg-blue-300 relative mb-5"
            >
              <Image src="/p1.png" objectFit="cover" layout="fill" alt="" />
            </Link>
            <Link
              href="/"
              className="sora text-[140%] font-semibold text-[#333] text-center mb-1 hover:underline"
            >
              Steve Jobs
            </Link>
            <span className="outfit text-[110%] text-[#333]/70 text-center">
              28 Articles
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authors;
