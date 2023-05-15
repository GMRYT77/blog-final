import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = (props) => {
  return (
    <div className="flex-1 bg-white drop-shadow-md rounded flex flex-col min-w-[263px] max-w-[380px] mx-auto hover:drop-shadow-xl text-[1rem]">
      <Link
        href={`/${props.postUrl}`}
        className="w-full relative aspect-[10/5] lg:aspect-[10/8] overflow-hidden"
      >
        <Image
          src={`/${props.imgUrl}`}
          layout="fill"
          objectFit="cover"
          alt=""
          className="hover:scale-110 transition-[200ms] ease-in-out  "
        />
      </Link>
      <div className="flex flex-col p-3 gap-1 outfit">
        <div className="text-[#333]/60 text-[80%]  font-bold">{props.date}</div>
        <Link href={`/${props.postUrl}`}>
          <h1 className="text-[110%] text-[#111] font-semibold tracking-wide mb-2 zilla">
            {props.title}
          </h1>
        </Link>
        <p className="text-sm text-[#333]/70 mb-1">
          {props.excerpt.length < 140
            ? props.excerpt
            : props.excerpt.slice(0, 140) + " ..."}
        </p>
        <div className="flex gap-4 items-center text-sm mt-1">
          <Link
            href={`/${props.authorUrl}`}
            className="text-[#111111]/80 hover:text-[#111] flex gap-2 items-center mukta text-[110%]"
          >
            <div className="relative w-[24px] h-[24px] rounded-full overflow-hidden ">
              <Image src="/p1.png" layout="fill" objectFit="cover" alt="" />
            </div>
            {props.author}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
PostCard.defaultProps = {
  imgUrl: "img3.jpg",
  date: " December 30, 2022",
  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  excerpt:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ducimus, praesentium dolorem quidem, iste ...",
  author: "Steve Jobs",
  postUrl: "defaultPostUrl",
  authorUrl: "defaultAuthorUrl",
};
