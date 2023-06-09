import { getCoroselPosts } from "@/backend";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [coroselPost, setCoroselPost] = useState([]);

  useEffect(() => {
    getCoroselPosts().then((a) => setCoroselPost(a));
    console.log(coroselPost);
  }, []);

  const [currPost, setCurrPost] = useState(0);
  const [s, ss] = useState(0);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      if (s < coroselPost.length - 1) {
        ss((p) => p + 1);
      } else {
        ss(0);
      }
    }, 5000);

    setCurrPost(s);

    let dots = document.getElementsByClassName("dots");
    for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener("click", (e) => {
        e.preventDefault();
        ss(i);
        console.log("clicked" + i);
      });
    }

    return () => clearInterval(interval);
  }, [s, coroselPost.length]);

  let arr = [];
  for (let i = 0; i < coroselPost.length; i++) {
    arr.push(i);
  }

  return (
    <section className="w-full bg-t text-white">
      <div className="cont flex flex-col md:flex-row lg:gap-12 xl:gap-16 gap-8 py-10">
        <div className="md:w-2/3 w-full flex px-2 sm:px-4 md:px-0 ">
          <div className="relative w-[94%] aspect-[12/9] sm:aspect-[12/8] overflow-hidden group">
            <Image
              src={`${coroselPost[currPost].coverImage.url}`}
              layout="fill"
              objectFit="cover"
              alt=""
              className="group-hover:scale-110 transition-[200ms] ease-in-out group-hover:opacity-70 "
            />
            <div className="absolute z-[30] w-full bottom-0 flex flex-col gap-1 md:gap-3 px-5 py-3">
              <Link
                href={`/category/${coroselPost[currPost].category.slug}`}
                className="outfit tracking-wide text-[.675rem] sm:text-xs md:text-sm px-[.35rem] py-[.1rem] md:px-2 md:pt-1 pb-[.15rem] rounded-md bg-blue-400/70 w-fit md:mb-2"
              >
                {coroselPost[currPost].category.category}
              </Link>
              <Link
                href={`/post/${coroselPost[currPost].slug}`}
                className="lg:text-4xl text-sm xs:text-xl md:text-2xl tracking-wider sora mb-3"
              >
                {coroselPost[currPost].title}
              </Link>
              <div className="flex gap-4 items-center text-white/70 text-[.65rem] xs:text-xs sm:text-xs md:text-sm">
                <div className="relative w-[18px] h-[18px] xs:w-[24px] xs:h-[24px] md:w-[32px] md:h-[32px] rounded-full overflow-hidden ">
                  <Image
                    src={`${coroselPost[currPost].authors[0].picture.url}`}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
                <Link
                  href={`/author/${coroselPost[currPost].authors[0].slug}`}
                  className="hover:text-white "
                >
                  {coroselPost[currPost].authors[0].name}
                </Link>
                <span className="w-[6px] h-[6px] rounded-full  bg-white/70"></span>
                <span>
                  {months[parseInt(coroselPost[currPost].date.slice(5, 7)) - 1]}{" "}
                  {coroselPost[currPost].date.slice(8, 10)}
                  {", "}
                  {coroselPost[currPost].date.slice(0, 4)}
                </span>
              </div>
            </div>
          </div>
          <div className="w-[6%] min-w-[24px] flex flex-col items-center gap-4 md:gap-6 lg:gap-8 justify-center">
            {arr.map((e, i) => {
              return (
                <span
                  key={i}
                  className={`dots w-[8px] h-[8px] rounded-full mt-1 ${
                    currPost === i ? "bg-white/90" : "bg-white/40"
                  } cursor-pointer`}
                ></span>
              );
            })}
          </div>
        </div>
        <div className="md:w-1/3 w-full flex flex-col gap-6 px-2 sm:px-4 md:px-0 text-[.7rem] xs:text-[.9rem] sm:text-[1rem]">
          <div className="relative w-full aspect-[12/6] xxs:aspect-[12/5] md:w-full md:h-1/2 group">
            <div className="absolute w-full h-full bg-[#111111] opacity-[.35] z-10"></div>
            <Image
              src="/img2.jpg"
              layout="fill"
              objectFit="cover"
              alt=""
              className="group-hover:opacity-80 z-20"
            />
            <div className="absolute z-[30] w-full bottom-0 flex flex-col gap-1 md:gap-2 pb-2 px-2 xs:px-4 md:px-5 ">
              <Link
                href="/"
                className="outfit tracking-wide text-[75%] px-2 pt-1 pb-[.15rem] rounded-md bg-blue-400/70 w-fit "
              >
                Music
              </Link>
              <Link href="/" className="text-[105%] tracking-wide sora">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </Link>
              <div className="flex gap-4 items-center text-white/70  text-[80%]">
                <Link href="/" className="hover:text-white e">
                  Steve Jobs
                </Link>
                <span className="w-[6px] h-[6px] rounded-full mt-1 bg-white/70"></span>
                <span>December 19, 2023</span>
              </div>
            </div>
          </div>
          <div className="relative w-full aspect-[12/6] xxs:aspect-[12/5] md:w-full md:h-1/2 group">
            <div className="absolute w-full h-full bg-[#111111] opacity-[.35] z-10"></div>
            <Image
              src="/img2.jpg"
              layout="fill"
              objectFit="cover"
              alt=""
              className="group-hover:opacity-80 z-20"
            />
            <div className="absolute z-[30] w-full bottom-0 flex flex-col gap-1 md:gap-2 pb-2 px-2 xs:px-4 md:px-5 ">
              <Link
                href="/"
                className="outfit tracking-wide text-[75%] px-2 pt-1 pb-[.15rem] rounded-md bg-blue-400/70 w-fit "
              >
                Music
              </Link>
              <Link href="/" className="text-[105%] tracking-wide sora">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </Link>
              <div className="flex gap-4 items-center text-white/70  text-[80%]">
                <Link href="/" className="hover:text-white e">
                  Steve Jobs
                </Link>
                <span className="w-[6px] h-[6px] rounded-full mt-1 bg-white/70"></span>
                <span>December 19, 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
