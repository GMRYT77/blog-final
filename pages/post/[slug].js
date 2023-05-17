import { getPostDetails, getPosts } from "@/backend";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const PostSlug = ({ post }) => {
  const [d, setD] = useState(post.date);
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
    const l = document.getElementById("POST_DIV");
    l.innerHTML = post.content.html;
  }, [d, post.slug]);
  console.log(post);

  return (
    <section className="my-6">
      <div className="cont flex  sm:text-[.875rem] md:text-[1rem]">
        <div className="w-[70%] flex flex-col gap-6">
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
              <span className="outfit text-[105%] opacity-90">{d}</span>
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
        <div className="w-[30%]">ddd</div>
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
