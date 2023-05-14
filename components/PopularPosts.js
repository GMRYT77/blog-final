import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TbNorthStar } from "react-icons/tb";

const PopularPosts = () => {
  return (
    <section className="w-full bg-[#f2f2f2]">
      <div className="cont flex flex-col gap-12 mt-16 mb-8 ">
        <div className="flex flex-col gap-8 w-[60%] mx-auto text-center ">
          <h2 className="text-2xl outfit font-bold">Most Popular Topics</h2>
          <div className="flex justify-evenly">
            <span className="w-[60px] h-[60px] rounded-full bg-blue-300"></span>
            <span className="w-[60px] h-[60px] rounded-full bg-blue-300"></span>
            <span className="w-[60px] h-[60px] rounded-full bg-blue-300"></span>
            <span className="w-[60px] h-[60px] rounded-full bg-blue-300"></span>
            <span className="w-[60px] h-[60px] rounded-full bg-blue-300"></span>
            <span className="w-[60px] h-[60px] rounded-full bg-blue-300"></span>
            <span className="w-[60px] h-[60px] rounded-full bg-blue-300"></span>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-16">
          <h2 className="mukta text-3xl font-semibold tracking-wide text-[#333] gap-4 flex items-center">
            <TbNorthStar className="text-yellow-600" />
            Popular Posts
          </h2>
          <div className="w-full flex gap-8  ">
            <div className="flex-1 bg-white drop-shadow-md rounded flex flex-col">
              <div className="w-full relative aspect-[10/8]">
                <Image src="/img3.jpg" layout="fill" objectFit="cover" alt="" />
              </div>
              <div className="flex flex-col p-3 gap-1 outfit">
                <div className="text-[#333]/60 text-sm  font-bold">
                  December 30, 2022
                </div>
                <Link href="/">
                  <h1 className="text-lg font-semibold tracking-wide mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h1>
                </Link>
                <p className="text-sm text-[#333]/70 mb-1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit ducimus, praesentium dolorem quidem, iste voluptatem
                  ipsum consequatur in tenetur repellendus officia ipsam nihil
                  perspiciatis!
                </p>
                <div className="flex gap-4 items-center text-sm justify-end">
                  <Link
                    href="/"
                    className="text-[#111111]/80 hover:text-[#111]"
                  >
                    Steve Jobs
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-white drop-shadow-md rounded flex flex-col">
              <div className="w-full relative aspect-[10/8]">
                <Image src="/img3.jpg" layout="fill" objectFit="cover" alt="" />
              </div>
              <div className="flex flex-col p-3 gap-1 outfit">
                <div className="text-[#333]/60 text-sm  font-bold">
                  December 30, 2022
                </div>
                <Link href="/">
                  <h1 className="text-lg font-semibold tracking-wide mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h1>
                </Link>
                <p className="text-sm text-[#333]/70 mb-1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit ducimus, praesentium dolorem quidem, iste voluptatem
                  ipsum consequatur in tenetur repellendus officia ipsam nihil
                  perspiciatis!
                </p>
                <div className="flex gap-4 items-center text-sm justify-end">
                  <Link
                    href="/"
                    className="text-[#111111]/80 hover:text-[#111]"
                  >
                    Steve Jobs
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-white drop-shadow-md rounded flex flex-col">
              <div className="w-full relative aspect-[10/8]">
                <Image src="/img3.jpg" layout="fill" objectFit="cover" alt="" />
              </div>
              <div className="flex flex-col p-3 gap-1 outfit">
                <div className="text-[#333]/60 text-sm  font-bold">
                  December 30, 2022
                </div>
                <Link href="/">
                  <h1 className="text-lg font-semibold tracking-wide mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h1>
                </Link>
                <p className="text-sm text-[#333]/70 mb-1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit ducimus, praesentium dolorem quidem, iste voluptatem
                  ipsum consequatur in tenetur repellendus officia ipsam nihil
                  perspiciatis!
                </p>
                <div className="flex gap-4 items-center text-sm justify-end">
                  <Link
                    href="/"
                    className="text-[#111111]/80 hover:text-[#111]"
                  >
                    Steve Jobs
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1 bg-white drop-shadow-md rounded flex flex-col">
              <div className="w-full relative aspect-[10/8]">
                <Image src="/img3.jpg" layout="fill" objectFit="cover" alt="" />
              </div>
              <div className="flex flex-col p-3 gap-1 outfit">
                <div className="text-[#333]/60 text-sm  font-bold">
                  December 30, 2022
                </div>
                <Link href="/">
                  <h1 className="text-lg font-semibold tracking-wide mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h1>
                </Link>
                <p className="text-sm text-[#333]/70 mb-1">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit ducimus, praesentium dolorem quidem, iste voluptatem
                  ipsum consequatur in tenetur repellendus officia ipsam nihil
                  perspiciatis!
                </p>
                <div className="flex gap-4 items-center text-sm justify-end">
                  <Link
                    href="/"
                    className="text-[#111111]/80 hover:text-[#111]"
                  >
                    Steve Jobs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPosts;
