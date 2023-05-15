import Authors from "@/components/Authors";
import Hero from "@/components/Hero";
import LatestPost from "@/components/LatestPost";
import PopularPosts from "@/components/PopularPosts";
import PostSec from "@/components/PostSec";
import Quote from "@/components/Quote";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <section className="w-[100vw] h-full flex flex-col gap-14">
      <SEO title="Home Page" />
      <Hero />
      <PopularPosts />
      {/*    <Quote />
      <LatestPost />
      <PostSec />
      <Authors /> */}
    </section>
  );
}
