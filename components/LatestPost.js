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
          <Link
            href="/post"
            className="text-[120%] px-16 my-8 py-2 rounded-md bg-blue-500 border-[.6px] border-[#a1a1a1]/80 w-fit mx-auto sarabun tracking-wider font-semibold text-white"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestPost;
