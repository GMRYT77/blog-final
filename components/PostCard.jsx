import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = (props) => {
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
  return (
    <div className="flex-1 bg-white dark:bg-[#1a1a1a]  drop-shadow-md rounded flex flex-col min-w-[280px] max-w-[450px] mx-auto hover:drop-shadow-xl text-[1rem]">
      <Link
        href={`/${props.postUrl}`}
        className="w-full relative aspect-[10/5] lg:aspect-[10/8] overflow-hidden"
      >
        <Image
          src={`${props.coverImage}`}
          layout="fill"
          objectFit="cover"
          alt=""
          className="hover:scale-110 transition-[200ms] ease-in-out  "
        />
      </Link>
      <div className="flex flex-col p-3 gap-1 outfit">
        <div className="text-[#333]/60 text-[90%] dark:text-[#f1f1f1]/70 font-medium">
          {months[parseInt(props.date.slice(5, 7)) - 1]}{" "}
          {props.date.slice(8, 10)}
          {", "}
          {props.date.slice(0, 4)}
        </div>
        <Link href={`/${props.slug}`}>
          <h1 className="text-[125%] text-[#111] dark:text-[#f3f3f3]  font-semibold tracking-wider mb-2 zilla">
            {props.title}
          </h1>
        </Link>
        <p className="text-[95%]  leading-[24px] text-[#333]/80 dark:text-[#f1f1f1]/70 mb-1 font-light">
          {props.excerpt.length < 140
            ? props.excerpt
            : props.excerpt.slice(0, 140) + " ..."}
        </p>
        <div className="flex gap-4 items-center text-sm mt-1">
          <Link
            href={`/${props.autSlug}`}
            className="text-[#111111]/80 dark:text-[#f1f1f1]/80 hover:text-[#111] flex gap-2 items-center mukta text-[120%]"
          >
            <div className="relative w-[24px] h-[24px] rounded-full overflow-hidden ">
              <Image
                src={`${props.autImg}`}
                layout="fill"
                objectFit="cover"
                alt=""
              />
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
  coverImage: "img3.jpg",
  date: " December 30, 2022",
  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  excerpt:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ducimus, praesentium dolorem quidem, iste ...",
  author: "Steve Jobs",
  slug: "defaultPostUrl",
  autSlug: "defaultAuthorUrl",
  category: "catg",
};
