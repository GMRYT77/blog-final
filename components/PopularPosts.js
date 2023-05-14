import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { TbNorthStar } from "react-icons/tb";
import PostCard from "./PostCard";
import PostImgCard from "./PostImgCard";

const Loading = () => {
  return <div className="">loading ... </div>;
};

const PopularPosts = () => {
  const a = [1, 2, 3, 4];
  return (
    <section className="w-full bg-[#f2f2f2]">
      <div className="cont flex flex-col gap-12 mt-16 mb-8 ">
        <div className="flex flex-col gap-8 w-full text-center ">
          <h2 className="mukta text-3xl font-semibold tracking-wide text-[#333] gap-4 flex items-center w-fit ">
            <TbNorthStar className="text-yellow-600" />
            Most Popular Topics
          </h2>
          <div className="flex gap-10 flex-wrap justify-between">
            <span className="w-[80px] h-[80px] rounded-full bg-blue-300"></span>
            <span className="w-[80px] h-[80px] rounded-full bg-blue-300"></span>
            <span className="w-[80px] h-[80px] rounded-full bg-blue-300"></span>
            <span className="w-[80px] h-[80px] rounded-full bg-blue-300"></span>
            <span className="w-[80px] h-[80px] rounded-full bg-blue-300"></span>
            <span className="w-[80px] h-[80px] rounded-full bg-blue-300"></span>
            <span className="w-[80px] h-[80px] rounded-full bg-blue-300"></span>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-14 mb-14">
          <h2 className="mukta text-3xl font-semibold tracking-wide text-[#333] gap-4 flex items-center">
            <TbNorthStar className="text-yellow-600" />
            Popular Posts
          </h2>
          <div className="w-full grid grid-cols-2  gap-14 relative ">
            {a.map((e, i) => {
              return (
                <Suspense key={i} fallback={<Loading />}>
                  <PostImgCard />
                </Suspense>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPosts;
