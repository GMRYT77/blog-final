import Hero from "@/components/Hero";
import PopularPosts from "@/components/PopularPosts";
import Quote from "@/components/Quote";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <section className="w-[100vw] h-full flex flex-col ">
      <SEO title="Home Page" />
      <Hero />
      <PopularPosts />
      <Quote />
    </section>
  );
}
