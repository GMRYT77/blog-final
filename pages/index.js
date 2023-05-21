import Authors from "@/components/Authors";
import Hero from "@/components/Hero";
import LatestPost from "@/components/LatestPost";
import PostSec from "@/components/PostSec";
import Quote from "@/components/Quote";
import SEO from "@/components/SEO";
import dynamic from "next/dynamic";
const PopularPosts = dynamic(() => import("@/components/PopularPosts"), {
  suspense: true,
});

import { getPosts } from "@/backend/index.js";

export default function Home({ posts }) {
  return (
    <section className="w-[100vw] h-full flex flex-col gap-14">
      <SEO title="Home Page" />
      <Hero />
      <PopularPosts posts={posts} />
      <Quote />
      <LatestPost posts={posts} />
      <PostSec />
      <Authors />
    </section>
  );
}

// export async function getStaticProps() {
//   const response = await fetch("http://localhost:3000/api/data");
//   const data = await response.json();
//   return {
//     props: { posts: data },
//   };
// }
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
