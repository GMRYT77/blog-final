import React, { useEffect, useState } from "react";
import PostBanner from "./PostBanner";
import Image from "next/image";
import Link from "next/link";

const PostSec = () => {
  const [currWindowHeight, setCurrWindowHeight] = useState(0);
  useEffect(() => {
    let h = window.innerHeight;
    const sidebar = document.getElementById("side_id");

    if (sidebar.offsetHeight > h) {
      setCurrWindowHeight(() => sidebar.offsetHeight - h);
      console.log(currWindowHeight.toString());
    } else {
      setCurrWindowHeight(() => 1);
    }
  }, [currWindowHeight]);

  return (
    <section className="relative w-full ">
      <div className="relative cont flex gap-10 ">
        <div className=" relative w-full lg:w-2/3 flex flex-col gap-8 md:gap-12 md:px-8 px-6">
          <PostBanner />
          <PostBanner reverse={true} />
          <PostBanner />
          <PostBanner reverse={true} />
        </div>
        <div className="relative w-1/3 ml-2 hidden lg:block">
          <div
            id="side_id"
            className={` w-full sticky top-[80px] bg-white dark:bg-[#1a1a1a] flex flex-col gap-2 px-3 py-4 rounded-md drop-shadow-md`}
          >
            <h3 className="mukta text-lg tracking-wide font-semibold mb-1">
              Recent Posts
            </h3>
            <div className="relative flex w-full flex-col gap-5">
              <div className="relative w-full flex flex-col">
                <div className="text-[.8rem] text-[#333]/70 outfit flex gap-3">
                  <Link href="/" className="hover:underline ">
                    Catgeory
                  </Link>
                  <span>20 Dec, 2022</span>
                </div>
                <Link href="/" className="text-[.8rem] sora font-medium ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, ipsam.
                </Link>
              </div>
              <div className="relative w-full flex flex-col">
                <div className="text-[.8rem] text-[#333]/70 outfit flex gap-3">
                  <Link href="/" className="hover:underline ">
                    Catgeory
                  </Link>
                  <span>20 Dec, 2022</span>
                </div>
                <span className="text-[.8rem] sora font-medium">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, ipsam.
                </span>
              </div>
              <div className="relative w-full flex flex-col">
                <div className="text-[.8rem] text-[#333]/70 outfit flex gap-3">
                  <Link href="/" className="hover:underline ">
                    Catgeory
                  </Link>
                  <span>20 Dec, 2022</span>
                </div>
                <span className="text-[.8rem] sora font-medium">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, ipsam.
                </span>
              </div>
              <div className="relative w-full flex flex-col">
                <div className="text-[.8rem] text-[#333]/70 outfit flex gap-3">
                  <Link href="/" className="hover:underline ">
                    Catgeory
                  </Link>
                  <span>20 Dec, 2022</span>
                </div>
                <span className="text-[.8rem] sora font-medium">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, ipsam.
                </span>
              </div>
              <div className="relative w-full flex flex-col">
                <div className="text-[.8rem] text-[#333]/70 outfit flex gap-3">
                  <Link href="/" className="hover:underline ">
                    Catgeory
                  </Link>
                  <span>20 Dec, 2022</span>
                </div>
                <span className="text-[.8rem] sora font-medium">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, ipsam.
                </span>
              </div>
            </div>
            <h3 className="mukta text-lg tracking-wide font-semibold mb-1 mt-8">
              Categories
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <Link
                  href="/"
                  className=" relative min-w-[40px] h-[40px] rounded-full overflow-hidden bg-blue-700"
                >
                  <Image
                    src="/img1.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </Link>
                <div className="flex w-full justify-between pr-3">
                  <Link
                    href="/"
                    className="text-lg outfit font-semibold tracking-wide"
                  >
                    Drama
                  </Link>
                  <div className="text-lg sora font-semibold tracking-wide">
                    47
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Link
                  href="/"
                  className=" relative min-w-[40px] h-[40px] rounded-full overflow-hidden bg-blue-700"
                >
                  <Image
                    src="/img1.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </Link>
                <div className="flex w-full justify-between pr-3">
                  <Link
                    href="/"
                    className="text-lg outfit font-semibold tracking-wide"
                  >
                    Drama
                  </Link>
                  <div className="text-lg sora font-semibold tracking-wide">
                    47
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Link
                  href="/"
                  className=" relative min-w-[40px] h-[40px] rounded-full overflow-hidden bg-blue-700"
                >
                  <Image
                    src="/img1.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </Link>
                <div className="flex w-full justify-between pr-3">
                  <Link
                    href="/"
                    className="text-lg outfit font-semibold tracking-wide"
                  >
                    Drama
                  </Link>
                  <div className="text-lg sora font-semibold tracking-wide">
                    47
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Link
                  href="/"
                  className=" relative min-w-[40px] h-[40px] rounded-full overflow-hidden bg-blue-700"
                >
                  <Image
                    src="/img1.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </Link>
                <div className="flex w-full justify-between pr-3">
                  <Link
                    href="/"
                    className="text-lg outfit font-semibold tracking-wide"
                  >
                    Drama
                  </Link>
                  <div className="text-lg sora font-semibold tracking-wide">
                    47
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Link
                  href="/"
                  className=" relative min-w-[40px] h-[40px] rounded-full overflow-hidden bg-blue-700"
                >
                  <Image
                    src="/img1.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </Link>
                <div className="flex w-full justify-between pr-3">
                  <Link
                    href="/"
                    className="text-lg outfit font-semibold tracking-wide"
                  >
                    Drama
                  </Link>
                  <div className="text-lg sora font-semibold tracking-wide">
                    47
                  </div>
                </div>
              </div>
              <Link
                href="/"
                className="w-fit px-6 py-1 outfit border-[.6px] border-neutral-700/70 rounded-full text-[#333]/70 dark:text-[#f2f2f2]/70 hover:text-[#333] font-medium"
              >
                View All
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostSec;
