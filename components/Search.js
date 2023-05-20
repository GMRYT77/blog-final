import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const Search = () => {
  const hideSearchBar = () => {
    const search = document.getElementById("SEARCH_BAR");
    const body = document.getElementById("BODY");
    const l = document.getElementById("loge");
    search.classList.toggle("hidden");
    l.classList.toggle("hidden");
    body.classList.toggle("overflow-y-hidden");
  };
  return (
    <>
      <div
        id="loge"
        onClick={hideSearchBar}
        className="w-full h-full fixed top-0 left-0 bg-[#404040]/40 backdrop-blur-[4px] z-[9998] hidden"
      ></div>
      <section
        id="SEARCH_BAR"
        className="fixed flex flex-col top-[80px] w-[90%] max-w-[780px] max-h-[70vh] sm:text-[.875rem] md:text-[1rem] hidden  min-h-[400px] bg-neutral-100 dark:bg-neutral-700 drop-shadow-lg rounded-md z-[99999]  left-1/2 -translate-x-1/2"
      >
        <div className="sticky top-0 flex gap-2 items-center z-[100] bg-[#f5f5f5] dark:bg-[#404040] text-[#333]/80 dark:text-[#f2f2f2]/80 border-b-[.6px] border-b-neutral-400/40">
          <label htmlFor="SEARCH" className="text-[110%] pl-5 pr-2">
            <BsSearch />
          </label>
          <input
            type="text"
            name="search"
            id="SEARCH"
            placeholder="Search"
            className="px-2 py-3 w-full outline-none bg-transparent text-[110%] outfit"
          />
          <div className="pr-5 pl-2 text-[125%] cursor-pointer">
            <RxCross2 onClick={hideSearchBar} />
          </div>
        </div>
        <div className="flex flex-col h-full overflow-y-auto thin-scrolly">
          <div className="text-[90%] outfit font-light tracking-wide px-5 pt-3 pb-1 ">
            Showing Popular Results
          </div>
          <div className="flex flex-col ">
            <div className="w-full px-5 py-4 hidden"> No result</div>
            <div className="w-full px-5 py-4 grid grid-cols-4 md:grid-cols-5 gap-4 border-b-[.6px] border-b-neutral-400/40">
              <div className="flex col-span-3 md:col-span-4 flex-col gap-1 sarabun">
                <div className="flex justify-between">
                  <Link href="/" className="w-fit text-[90%] outfit opacity-80">
                    #Catg
                  </Link>
                  <span className="w-fit text-[90%] outfit opacity-80">
                    Dec 30,2002
                  </span>
                </div>
                <Link
                  href="/"
                  className="roboto font-medium text-[120%] leading-[26px]"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing
                </Link>
                <p className="text-[80%] sarbun opacity-70">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quas, facilis optio necessitatibus repellat
                  repudiandae explicabo id fugit eum officia.
                </p>
              </div>
              <div className="relative col-span-1 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] aspect-square overflow-hidden rounded-md ">
                <Image src="/img4.jpg" layout="fill" objectFit="cover" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="w-full px-5 py-4 hidden"> No result</div>
            <div className="w-full px-5 py-4 grid grid-cols-4 md:grid-cols-5 gap-4 border-b-[.6px] border-b-neutral-400/40">
              <div className="flex col-span-3 md:col-span-4 flex-col gap-1 sarabun">
                <div className="flex justify-between">
                  <Link href="/" className="w-fit text-[90%] outfit opacity-80">
                    #Catg
                  </Link>
                  <span className="w-fit text-[90%] outfit opacity-80">
                    Dec 30,2002
                  </span>
                </div>
                <Link
                  href="/"
                  className="roboto font-medium text-[120%] leading-[26px]"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing
                </Link>
                <p className="text-[80%] sarbun opacity-70">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quas, facilis optio necessitatibus repellat
                  repudiandae explicabo id fugit eum officia.
                </p>
              </div>
              <div className="relative col-span-1 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] aspect-square overflow-hidden rounded-md ">
                <Image src="/img4.jpg" layout="fill" objectFit="cover" alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="w-full px-5 py-4 hidden"> No result</div>
            <div className="w-full px-5 py-4 grid grid-cols-4 md:grid-cols-5 gap-4 border-b-[.6px] border-b-neutral-400/40">
              <div className="flex col-span-3 md:col-span-4 flex-col gap-1 sarabun">
                <div className="flex justify-between">
                  <Link href="/" className="w-fit text-[90%] outfit opacity-80">
                    #Catg
                  </Link>
                  <span className="w-fit text-[90%] outfit opacity-80">
                    Dec 30,2002
                  </span>
                </div>
                <Link
                  href="/"
                  className="roboto font-medium text-[120%] leading-[26px]"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing
                </Link>
                <p className="text-[80%] sarbun opacity-70">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quas, facilis optio necessitatibus repellat
                  repudiandae explicabo id fugit eum officia.
                </p>
              </div>
              <div className="relative col-span-1 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] aspect-square overflow-hidden rounded-md ">
                <Image src="/img4.jpg" layout="fill" objectFit="cover" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
