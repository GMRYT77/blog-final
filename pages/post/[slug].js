import { getPostDetails, getPosts, getRelatedPosts } from "@/backend";
import SEO from "@/components/SEO";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const PostSlug = ({ post, relPost }) => {
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

  const [tableOfContents, setTableOfContents] = useState([]);
  const [h, setH] = useState(0);

  useEffect(() => {
    let CopySVG = `<svg width="24" height="24" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.724854 4.20859C0.724854 3.30936 1.08207 2.44696 1.71792 1.81111C2.35378 1.17525 3.21618 0.818035 4.11541 0.818035H21.0682C21.9674 0.818035 22.8298 1.17525 23.4657 1.81111C24.1015 2.44696 24.4587 3.30936 24.4587 4.20859V10.9897H31.2398C32.1391 10.9897 33.0015 11.3469 33.6373 11.9828C34.2732 12.6186 34.6304 13.481 34.6304 14.3802V31.333C34.6304 32.2322 34.2732 33.0946 33.6373 33.7305C33.0015 34.3663 32.1391 34.7236 31.2398 34.7236H14.2871C13.3878 34.7236 12.5254 34.3663 11.8896 33.7305C11.2537 33.0946 10.8965 32.2322 10.8965 31.333V24.5519H4.11541C3.21618 24.5519 2.35378 24.1947 1.71792 23.5588C1.08207 22.923 0.724854 22.0606 0.724854 21.1614V4.20859ZM14.2871 24.5519V31.333H31.2398V14.3802H24.4587V21.1614C24.4587 22.0606 24.1015 22.923 23.4657 23.5588C22.8298 24.1947 21.9674 24.5519 21.0682 24.5519H14.2871ZM21.0682 21.1614V4.20859H4.11541V21.1614H21.0682Z" fill="white"/>
</svg>`;
    let QouteSVG = `<svg width="44" height="44" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M67 12.5625V4.1875C49.4627 4.1875 37.6875 15.9627 37.6875 33.5V62.8125H67V33.5H46.0625C46.0625 20.5857 54.0857 12.5625 67 12.5625ZM0 33.5V62.8125H29.3125V33.5H8.375C8.375 20.5857 16.3982 12.5625 29.3125 12.5625V4.1875C11.7752 4.1875 0 15.9627 0 33.5Z" fill="#9C9C9C"/>
</svg>
`;

    const l = document.getElementById("POST_DIV");
    l.innerHTML = post.content.html;
    const con = post.content.html;
    l.childNodes.forEach((e, i) => {
      if (e.nodeName === "P") {
        e.classList.add("text-[120%]", "outfit", "font-light");
        if (e.hasChildNodes) {
          e.childNodes.forEach((f) => {
            if (f.nodeName === "A") {
              f.classList.add("text-blue-600", "hover:underline");
            }
          });
        }
      } else if (e.nodeName === "PRE") {
        e.classList.add(
          "relative",
          "font-mono",
          "text-[90%]",
          "bg-neutral-700",
          "px-5",
          "pt-4",
          "pb-4",
          "text-[#f4f4f4]",
          "overflow-x-auto"
        );
        const div = document.createElement("div");
        div.classList.add(
          "absolute",
          "top-0",
          "left-0",
          "right-0",
          "px-4",
          "py-3",
          "w-full",
          "flex",
          "justify-start",
          "hidden"
        );
        div.innerHTML = CopySVG;
        e.appendChild(div);
      } else if (e.nodeName === "UL" || e.nodeName === "OL") {
        e.classList.add(
          "flex",
          "flex-col",
          "pl-6",
          "text-[120%]",
          "mukta",
          "tracking-wide",

          "my-4",
          "gap-2"
        );
        if (e.nodeName === "UL") {
          e.classList.add("list-disc");
        } else {
          e.classList.add("list-decimal");
        }
      } else if (e.nodeName.toLowerCase() === "blockquote") {
        e.classList.add(
          "py-6",
          "flex",
          "flex-row-reverse",
          "gap-5",
          "text-[140%]",
          "zilla-i",
          "font-semibold",
          "tracking-wide",
          "leading-[44px]",
          "text-neutral-700/80",
          "dark:text-[#f8f8f8]/80"
        );
        const div = document.createElement("div");
        div.innerHTML = QouteSVG;
        e.appendChild(div);
      } else if (e.nodeName === "A") {
        e.classList.add("text-blue-600", "hover:underline");
      } else if (e.nodeName === "H1") {
        e.classList.add(
          "outfit",
          "font-semibold",
          "tracking-wide",
          "text-[180%]",
          "pt-[90px]",
          "pb-4",
          `${i}`
        );
        setTableOfContents((a) => [
          ...a,
          { heading: e.innerText, link: `#h-${i}` },
        ]);
        e.setAttribute("id", `h-${i}`);
      }
    });
  }, [post.content.html]);

  return (
    <section className="my-6">
      <SEO title={post.title} />
      <div className="cont flex  sm:text-[.875rem] md:text-[1rem] ">
        <div className="md:w-[70%] flex flex-col gap-6 w-full px-2">
          <div className="flex flex-col gap-3 pb-3">
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
            <div className="flex w-full  justify-between border-b-[1px] border-b-[#a1a1a1]/50 pb-4 mb-4">
              <span className="outfit text-[105%] opacity-90">
                {months[parseInt(post.date.slice(5, 7)) - 1]}{" "}
                {post.date.slice(8, 10)}
                {", "}
                {post.date.slice(0, 4)}
              </span>
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
            <div className="relative w-full aspect-video">
              <Image
                src={post.coverImage.url}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col  gap-4" id="POST_DIV"></div>
          <div className="w-full py-4 mt-4 flex flex-col gap-3">
            <h4 className="outfit text-[150%] ">Tags:</h4>
            <div className="flex flex-wrap gap-4">
              {post.tags.map((e, i) => {
                return (
                  <div
                    key={i}
                    className="px-3 rounded py-1 text-[120%] sarabun opacity-75 border-[1px] border-neutral-400/80"
                  >
                    {e}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full py-4 mt-4 items-center flex flex-col gap-3">
            <div className="w-[70px] h-[70px] relative rounded-full overflow-hidden">
              <Image
                src={post.authors[0].picture.url}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
            <Link
              href={`/author/${post.authors[0].slug}`}
              className="outfit text-[140%] hover:underline"
            >
              {post.authors[0].name}
            </Link>
            <p className="text-[108%] opacity-70 text-center max-w-[80%] outfit">
              {post.authors[0].bio.length > 200
                ? post.authors[0].bio.slice(0, 200) + " ..."
                : post.authors[0].bio}
            </p>
          </div>
          <div className="w-full py-4 mt-4 flex flex-col gap-3">
            <h4 className="outfit text-[150%] ">Comments</h4>
          </div>
        </div>
        <div className="md:flex hidden w-[30%] relative px-3 ">
          <div className="flex flex-col gap-6 sticky top-[90px] w-full  h-fit">
            <div className="flex flex-col gap-3">
              <h5 className="sarabun text-[130%] font-semibold tracking-wider">
                Table of Contents
              </h5>
              <ol className="flex flex-col gap-1 pl-6 list-disc">
                {tableOfContents.map((e, i) => {
                  if (i < post.content.html.match(/<h1>/g).length) {
                    return (
                      // scroll={false}
                      <Link key={i} href={e.link}>
                        <li className="outfit text-blue-700 text-[110%] hover:underline hover:underline-offset-2">
                          {" "}
                          {e.heading}
                        </li>
                      </Link>
                    );
                  }
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PostSlug;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  const relPosts = await getRelatedPosts(data.tags);
  return {
    props: { post: data, relPost: relPosts },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}
