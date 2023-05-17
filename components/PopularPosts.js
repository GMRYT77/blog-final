import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { TbNorthStar } from "react-icons/tb";
import PostCard from "./PostCard";
import PostImgCard from "./PostImgCard";
import posts from "@/backend/posts";

const Loading = () => {
  return <div className="">loading ... </div>;
};

const PopularPosts = (props) => {
  const a = [1, 2, 3, 4];
  const posts = props.posts;
  console.log(posts[0]);
  return (
    <section className="w-full ">
      <div className="cont flex flex-col gap-12 text-[.65rem] xxs:text-[.775rem] sm:text-[.875rem] md:text-[1rem]">
        <div className="relative flex flex-col gap-3 sm:gap-5 md:gap-8 w-full ">
          <h2 className="mukta text-[190%] font-semibold tracking-wide text-[#333] dark:text-[#f1f1f1] gap-4 flex items-center w-fit ">
            <TbNorthStar className="text-yellow-600" />
            Most Popular Topics
          </h2>
          <div className="flex gap-4 xs:gap-6 sm:gap-8 relative md:gap-10 scrollbar-hide px-2 md:px-4 w-full overflow-x-scroll">
            <span className="md:min-w-[80px] min-w-[64px] md:min-h-[80px] min-h-[64px] rounded-full bg-blue-300"></span>
            <span className="md:min-w-[80px] min-w-[64px] md:min-h-[80px] min-h-[64px] rounded-full bg-blue-300"></span>
            <span className="md:min-w-[80px] min-w-[64px] md:min-h-[80px] min-h-[64px] rounded-full bg-blue-300"></span>
            <span className="md:min-w-[80px] min-w-[64px] md:min-h-[80px] min-h-[64px] rounded-full bg-blue-300"></span>
            <span className="md:min-w-[80px] min-w-[64px] md:min-h-[80px] min-h-[64px] rounded-full bg-blue-300"></span>
            <span className="md:min-w-[80px] min-w-[64px] md:min-h-[80px] min-h-[64px] rounded-full bg-blue-300"></span>
            <span className="md:min-w-[80px] min-w-[64px] md:min-h-[80px] min-h-[64px] rounded-full bg-blue-300"></span>
          </div>
        </div>

        <div className="flex flex-col gap-6 px-2 sm:px-4 md:px-0">
          <h2 className="mukta text-[190%] font-semibold tracking-wide dark:text-[#f1f1f1] text-[#333] gap-4 flex items-center">
            <TbNorthStar className="text-yellow-600" />
            Popular Posts
          </h2>
          <div className="w-full grid md:grid-cols-2  gap-6 sm:gap-8 md:gap-14 relative ">
            {posts.map((e, i) => {
              if (i < 8) {
                return (
                  <Suspense key={i} fallback={<Loading />}>
                    <PostImgCard
                      coverImage={e.coverImage.url}
                      category={e.category.category}
                      catgSlug={e.category.slug}
                      author={e.authors[0].name}
                      autSlug={e.authors[0].slug}
                      autImg={e.authors[0].picture.url}
                      slug={e.slug}
                      title={e.title}
                      date={e.date}
                    />
                  </Suspense>
                );
              } else {
                return;
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPosts;
