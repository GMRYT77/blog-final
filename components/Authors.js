import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbNorthStar } from "react-icons/tb";
import { BsArrowUpRight } from "react-icons/bs";

const Authors = () => {
  return (
    <section>
      <div className="cont flex gap-12 mt-6 flex-col mb-12">
        <div className="flex justify-between">
          <h2 className="mukta text-3xl font-semibold tracking-wide text-[#333] gap-4 flex items-center">
            <TbNorthStar className="text-yellow-600" />
            Authors
          </h2>
          <Link
            href="/"
            className="sora font-medium text-lg text-[#333]/60 hover:underline hover:underline-offset-4 flex gap-3 hover:text-[#333] items-center group"
          >
            View All{" "}
            <BsArrowUpRight className="text-[1.2rem] group-hover:rotate-45 transition-[250ms]" />
          </Link>
        </div>
        <div className="grid grid-cols-4 w-full  justify-between">
          <div className="flex flex-col  items-center">
            <Link
              href="/"
              className="w-[200px] h-[200px] rounded-full overflow-hidden bg-blue-300 relative mb-5"
            >
              <Image src="/p1.png" objectFit="cover" layout="fill" alt="" />
            </Link>
            <Link
              href="/"
              className="sora text-[1.35rem] font-semibold text-[#333] text-center mb-1 hover:underline"
            >
              Steve Jobs
            </Link>
            <span className="outfit text-lg text-[#333]/70 text-center">
              28 Articles
            </span>
          </div>
          <div className="flex flex-col  items-center">
            <Link
              href="/"
              className="w-[200px] h-[200px] rounded-full overflow-hidden bg-blue-300 relative mb-5"
            >
              <Image src="/p1.png" objectFit="cover" layout="fill" alt="" />
            </Link>
            <Link
              href="/"
              className="sora text-[1.35rem] font-semibold text-[#333] text-center mb-1 hover:underline"
            >
              Steve Jobs
            </Link>
            <span className="outfit text-lg text-[#333]/70 text-center">
              28 Articles
            </span>
          </div>
          <div className="flex flex-col  items-center">
            <Link
              href="/"
              className="w-[200px] h-[200px] rounded-full overflow-hidden bg-blue-300 relative mb-5"
            >
              <Image src="/p1.png" objectFit="cover" layout="fill" alt="" />
            </Link>
            <Link
              href="/"
              className="sora text-[1.35rem] font-semibold text-[#333] text-center mb-1 hover:underline"
            >
              Steve Jobs
            </Link>
            <span className="outfit text-lg text-[#333]/70 text-center">
              28 Articles
            </span>
          </div>
          <div className="flex flex-col  items-center">
            <Link
              href="/"
              className="w-[200px] h-[200px] rounded-full overflow-hidden bg-blue-300 relative mb-5"
            >
              <Image src="/p1.png" objectFit="cover" layout="fill" alt="" />
            </Link>
            <Link
              href="/"
              className="sora text-[1.35rem] font-semibold text-[#333] text-center mb-1 hover:underline"
            >
              Steve Jobs
            </Link>
            <span className="outfit text-lg text-[#333]/70 text-center">
              28 Articles
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authors;
