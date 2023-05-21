import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, Suspense } from "react";
import { TbNorthStar } from "react-icons/tb";
import PostCard from "./PostCard";
import { getRecentPosts } from "@/backend";

const Loading = () => {
  return <div className="">loading ... </div>;
};

const LatestPost = () => {
  const [lp, setLp] = useState([]);

  useEffect(() => {
    getRecentPosts().then((a) => setLp(a));
  }, []);

  return (
    <section className="w-full text-[.65rem] xxs:text-[.775rem] sm:text-[.875rem] md:text-[1rem]">
      <div className="cont flex flex-col gap-12">
        <div className="flex flex-col gap-6 ">
          <h2 className="mukta text-[190%] font-semibold tracking-wide dark:text-[#f1f1f1] text-[#333] gap-4 flex items-center w-fit ">
            <TbNorthStar className="text-yellow-600" />
            Latest Post
          </h2>
          <div className="w-full flex gap-8 relative flex-wrap justify-between pl-2 pr-4">
            {lp.map((e, i) => {
              return (
                <Suspense key={i} fallback={<Loading />}>
                  <PostCard
                    key={i}
                    coverImage={e.node.coverImage.url}
                    category={e.node.category.category}
                    catgSlug={e.node.category.slug}
                    author={e.node.authors[0].name}
                    autSlug={e.node.authors[0].slug}
                    autImg={e.node.authors[0].picture.url}
                    slug={e.node.slug}
                    title={e.node.title}
                    date={e.node.date}
                  />
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
