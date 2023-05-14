import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [currPost, setCurrPost] = useState(0);
  const [s, ss] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (s < posts.length - 1) {
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
  });

  const posts = [
    {
      category: "Music0",
      heading:
        "0 Lorem, ipsum dolor sit amet consectetur adipisicing elit.Excepturi commodi ipsum",
      author_name: "Steve Jobs",
      pub_date: "December 19, 2023",
      img_url: "img1.jpg",
    },
    {
      category: "Music1",
      heading:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit.Excepturi commodi ipsum",
      author_name: "Steve Jobs",
      pub_date: "December 19, 2023",
      img_url: "img2.jpg",
    },
    {
      category: "Music2",
      heading:
        "2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.Excepturi commodi ipsum",
      author_name: "Steve Jobs",
      pub_date: "December 19, 2023",
      img_url: "img3.jpg",
    },
    {
      category: "Music3",
      heading:
        "3 Lorem, ipsum dolor sit amet consectetur adipisicing elit.Excepturi commodi ipsum",
      author_name: "Steve Jobs",
      pub_date: "December 19, 2023",
      img_url: "img4.jpg",
    },
    {
      category: "Music0",
      heading:
        "0 Lorem, ipsum dolor sit amet consectetur adipisicing elit.Excepturi commodi ipsum",
      author_name: "Steve Jobs",
      pub_date: "December 19, 2023",
      img_url: "img1.jpg",
    },
    {
      category: "Music1",
      heading:
        "1 Lorem, ipsum dolor sit amet consectetur adipisicing elit.Excepturi commodi ipsum",
      author_name: "Steve Jobs",
      pub_date: "December 19, 2023",
      img_url: "img2.jpg",
    },
    {
      category: "Music2",
      heading:
        "2 Lorem, ipsum dolor sit amet consectetur adipisicing elit.Excepturi commodi ipsum",
      author_name: "Steve Jobs",
      pub_date: "December 19, 2023",
      img_url: "img3.jpg",
    },
    {
      category: "Music3",
      heading:
        "3 Lorem, ipsum dolor sit amet consectetur adipisicing elit.Excepturi commodi ipsum",
      author_name: "Steve Jobs",
      pub_date: "December 19, 2023",
      img_url: "img4.jpg",
    },
  ];

  let arr = [];
  for (let i = 0; i < posts.length; i++) {
    arr.push(i);
  }

  return (
    <section className="w-full bg-t text-white">
      <div className="cont flex gap-16 py-10">
        <div className="w-2/3 flex  ">
          <div className="relative w-[94%] aspect-[12/8] overflow-hidden group">
            <Image
              src={`/${posts[currPost].img_url}`}
              layout="fill"
              objectFit="cover"
              alt=""
              className="group-hover:scale-110 transition-[200ms] ease-in-out group-hover:opacity-70 "
            />
            <div className="absolute z-[30] w-full bottom-0 flex flex-col gap-3 px-5 py-3">
              <Link
                href="/"
                className="outfit tracking-wide text-sm px-2 pt-1 pb-[.15rem] rounded-md bg-blue-400/70 w-fit mb-2"
              >
                {posts[currPost].category}
              </Link>
              <Link href="/" className="text-4xl tracking-wider zilla mb-3">
                {posts[currPost].heading}
              </Link>
              <div className="flex gap-4 items-center text-white/70  text-sm">
                <div className="relative w-[32px] h-[32px] rounded-full overflow-hidden mb-2 ">
                  <Image src="/p1.png" layout="fill" objectFit="cover" alt="" />
                </div>
                <Link href="/" className="hover:text-white e">
                  {posts[currPost].author_name}
                </Link>
                <span className="w-[6px] h-[6px] rounded-full mt-1 bg-white/70"></span>
                <span>{posts[currPost].pub_date}</span>
              </div>
            </div>
          </div>
          <div className="w-[6%] flex flex-col items-center gap-8 justify-center">
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
        <div className="w-1/3 flex flex-col gap-6">
          <div className="relative w-full h-1/2">
            <Image src="/img2.jpg" layout="fill" objectFit="cover" alt="" />
            <div className="absolute z-[30] w-full bottom-0 flex flex-col gap-2 pb-2 px-5 ">
              <Link
                href="/"
                className="outfit tracking-wide text-sm px-2 pt-1 pb-[.15rem] rounded-md bg-blue-400/70 w-fit "
              >
                Music
              </Link>
              <Link href="/" className="text-xl tracking-wide outfit">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </Link>
              <div className="flex gap-4 items-center text-white/70  text-sm">
                <Link href="/" className="hover:text-white e">
                  Steve Jobs
                </Link>
                <span className="w-[6px] h-[6px] rounded-full mt-1 bg-white/70"></span>
                <span>December 19, 2023</span>
              </div>
            </div>
            <div className="absolute w-full h-full bg-[#111111] opacity-[.35] z-20"></div>
          </div>
          <div className="relative w-full h-1/2">
            <Image src="/img3.jpg" layout="fill" objectFit="cover" alt="" />
            <div className="absolute z-[30] w-full bottom-0 flex flex-col gap-2 pb-2 px-5 ">
              <Link
                href="/"
                className="outfit tracking-wide text-sm px-2 pt-1 pb-[.15rem] rounded-md bg-blue-400/70 w-fit "
              >
                Music
              </Link>
              <Link href="/" className="text-xl tracking-wide outfit">
                Lorem, ipsum dolor sit amet consectetur adipisicing
              </Link>
              <div className="flex gap-4 items-center text-white/70  text-sm">
                <Link href="/" className="hover:text-white e">
                  Steve Jobs
                </Link>
                <span className="w-[6px] h-[6px] rounded-full mt-1 bg-white/70"></span>
                <span>December 19, 2023</span>
              </div>
            </div>
            <div className="absolute w-full h-full bg-[#111111] opacity-[.35] z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
