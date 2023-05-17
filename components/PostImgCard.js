import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PostImgCard = (props) => {
  const [d, setD] = useState(props.date);
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
    let day = d.slice(8, 10);
    let m = d.slice(5, 7);
    let month = months[parseInt(m)];
    let year = d.slice(0, 4);

    let newDate = month + " " + day + ", " + year;

    setD(newDate);
  }, []);
  return (
    <div className="w-full relative aspect-[10/9] xs:aspect-[10/7] md:aspect-square lg:aspect-[10/9] rounded-xl overflow-hidden group mb-2">
      <Image
        src={`${props.coverImage}`}
        layout="fill"
        objectFit="cover"
        alt=""
        className=" z-10"
      />
      <div className="absolute top-0 w-full h-full z-20 bg-[#3a3a3a]/30 group-hover:bg-[#3a3a3a]/70 transition-[200ms]"></div>
      <div className="absolute bottom-0 w-full z-30 text-white px-7 pb-4  flex flex-col">
        <Link
          href={`/category/${props.catgSlug}`}
          className="outfit px-2 py-1 bg-blue-400/70 w-fit rounded-md mb-3 text-[75%]"
        >
          {props.category}
        </Link>
        <Link href={`/post/${props.slug}`} className="mb-4">
          <h1 className="sora font-semibold text-[160%] xs:text-[180%] sm:text-[200%] md:text-[160%] lg:text-[220%] lg:leading-[52px]">
            {props.title}
          </h1>
        </Link>
        <div className="flex gap-4 items-center text-white/70  text-[85%]">
          <div className="relative w-[18px] h-[18px] sm:w-[26px] sm:h-[26px] md:w-[32px] md:h-[32px] rounded-full overflow-hidden">
            <Image
              src={`${props.autImg}`}
              layout="fill"
              objectFit="cover"
              alt=""
            />
          </div>
          <Link
            href={`/author/${props.autSlug}`}
            className="hover:text-white e"
          >
            {props.author}
          </Link>
          <span className="w-[6px] h-[6px] rounded-full  bg-white/70"></span>
          <span>{d}</span>
        </div>
      </div>
    </div>
  );
};

export default PostImgCard;
