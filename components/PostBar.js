import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostBar = () => {
  return (
    <div className="w-full p-3 pb-5 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 sm:text-[.875rem] md:text-[1rem] border-b-[.4px] border-neutral-400/50">
      <div className="relative md:col-span-1 w-full aspect-square rounded-md  overflow-hidden">
        <Image
          src="/img3.jpg"
          layout="fill"
          objectFit="cover"
          alt=""
          className=""
        />
      </div>
      <div className="relative col-span-2 sm:col-span-3 md:col-span-4 flex flex-col gap-1 pr-2">
        <div className="flex justify-between">
          <Link
            href="/category/ll"
            className="text-[90%] opacity-90 outfit tracking-wide"
          >
            #Music
          </Link>
          <span className="text-[85%] opacity-75 outfit text-neutral-500">
            December 30,2022
          </span>
        </div>
        <Link
          href="/"
          className="text-[125%] outfit font-[600] tracking-wide text-neutral-900/90 mb-2"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
        <p className=" hidden sm:block text-[90%] outfit tracking-wide opacity-80 mb-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus rem
          cupiditate earum accusantium aut aspernatur velit numquam. Laborum, at
          illum.
        </p>
        <Link
          href="/"
          className="outfit tracking-wider font-medium uppercase text-[75%] text-blue-500/80 underline underline-offset-4 hover:text-blue-700"
        >
          Continue Reading
        </Link>
      </div>
    </div>
  );
};

export default PostBar;
