import { getPostDetails, getPosts } from "@/backend";
import SEO from "@/components/SEO";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const PostSlug = ({ post }) => {
  useEffect(() => {
    const l = document.getElementById("POST_DIV");
    l.innerHTML = post.content.html;
  }, [post.content.html]);

  return (
    <section className="my-6">
      <SEO title={post.title} />
      <div className="cont flex  sm:text-[.875rem] md:text-[1rem]">
        <div className="md:w-[70%] flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-3 border-b-[1px] border-b-[#a1a1a1]/50 pb-6">
            <div className="flex text-[90%] outfit opacity-75 gap-3 items-end">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/" className="text-[120%]">
                {post.category.category}
              </Link>
            </div>
            <h1 className="text-[240%] font-semibold zilla mb-2">
              {post.title}
            </h1>
            <div className="flex w-full  justify-between">
              <span className="outfit text-[105%] opacity-90">{post.date}</span>
              <div className="flex gap-3">
                <div className="relative w-[30px] h-[30px] rounded-full overflow-hidden">
                  <Image
                    src={`${post.authors[0].picture.url}`}
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
                <Link
                  href={`/author/${post.authors[0].slug}`}
                  className="outfit text-[110%] hover:underline"
                >
                  {post.authors[0].name}
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4" id="POST_DIV"></div>
        </div>
        <div className="md:flex hidden w-[30%]">ddd</div>
      </div>
    </section>
  );
};

export default PostSlug;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}
