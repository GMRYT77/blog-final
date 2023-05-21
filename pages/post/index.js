import PostBar from "@/components/PostBar";
import React from "react";

const index = () => {
  return (
    <section className="py-8 w-full h-full bg-white">
      <div className="cont flex">
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <h1 className="text-[180%] zilla tracking-wider font-semibold  ">
            Latest Blog Posts
          </h1>
          <div className="flex flex-col gap-6">
            <PostBar />
            <PostBar />
            <PostBar />
            <PostBar />
            <PostBar />
            <PostBar />
            <PostBar />
            <PostBar />
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

            <button className="relative px-3 pt-2 pb-[.25rem] rounded-bl-md rounded-tr-md bg-neutral-700 text-white sora ml-2">
              Next
            </button>
          </div>
          ;
        </div>
        <div className="hidden md:flex md:w-1/3"></div>
      </div>
    </section>
  );
};

export default index;
