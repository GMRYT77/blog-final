import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { TbNorthStar } from "react-icons/tb";
import PostCard from "./PostCard";

const Loading = () => {
  return <div className="">loading ... </div>;
};

const LatestPost = () => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <section className="w-full bg-[#f2f2f2]">
      <div className="cont flex flex-col gap-12 mt-8 mb-8 ">
        <div className="flex flex-col gap-6 mt-16">
          <h2 className="mukta text-3xl font-semibold tracking-wide text-[#333] gap-4 flex items-center">
            <TbNorthStar className="text-yellow-600" />
            Latest Posts
          </h2>
          <div className="w-full flex gap-8 relative flex-wrap justify-between">
            {a.map((e, i) => {
              return (
                <Suspense key={i} fallback={<Loading />}>
                  <PostCard />
                </Suspense>
              );
            })}
          </div>
          <div className="flex w-full justify-center mt-4 py-2 gap-2 items-center text-white">
            <button className="relative px-3 pt-2 pb-[.25rem] rounded-bl-md rounded-tr-md bg-neutral-700 text-white sora mr-2">
              Previous
            </button>

            <button className="sora text-lg h-[32px] aspect-square relative bg-neutral-700 hover:bg-neutral-700 rounded">
              1
            </button>
            <button className="sora text-lg h-[32px] aspect-square relative bg-neutral-700/60 hover:bg-neutral-700 rounded">
              2
            </button>
            <button className="sora text-lg h-[32px] aspect-square relative bg-neutral-700/60 hover:bg-neutral-700 rounded">
              3
            </button>
            <button className="sora text-lg h-[32px] aspect-square relative bg-neutral-700/60 hover:bg-neutral-700 rounded">
              4
            </button>
            <button className="sora text-lg h-[32px] aspect-square relative bg-neutral-700/60 hover:bg-neutral-700 rounded">
              5
            </button>
            <button className="sora text-lg h-[32px] aspect-square relative bg-neutral-700/60 hover:bg-neutral-700 rounded">
              6
            </button>
            <button className="sora text-lg h-[32px] aspect-square relative bg-neutral-700/60 hover:bg-neutral-700 rounded">
              7
            </button>
            <button className="sora text-lg h-[32px] aspect-square relative bg-neutral-700/60 hover:bg-neutral-700 rounded">
              8
            </button>
            <button className="sora text-lg h-[32px] aspect-square relative bg-neutral-700/60 hover:bg-neutral-700 rounded">
              9
            </button>

            <button className="relative px-3 pt-2 pb-[.25rem] rounded-bl-md rounded-tr-md bg-neutral-700 text-white sora ml-2">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestPost;
