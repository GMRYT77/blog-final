import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsSearch, BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import Menubar from "./Menubar";

const Navbar = () => {
  const [isDm, setDm] = useState(false);
  const showMenubar = () => {
    const menu = document.getElementById("MENUBAR");
    const menublur = document.getElementById("MENU_BLUR");
    const ml1 = document.getElementById("menuLine1");
    const ml2 = document.getElementById("menuLine2");
    const ml3 = document.getElementById("menuLine3");
    menu.classList.toggle("translate-x-0");
    menublur.classList.toggle("hidden");
    ml2.classList.toggle("hidden");
    ml1.classList.toggle("rotate-45");
    ml1.classList.toggle("translate-y-[290%]");
    ml3.classList.toggle("-rotate-45");
    ml3.classList.toggle("-translate-y-[290%]");
  };

  const isDarkMode = () => {
    const html = document.getElementById("html");
    html.classList.toggle("dark");
    if (!localStorage.getItem("isDM")) {
      localStorage.setItem("isDM", true);
    }
    if (isDm === true) {
      setDm(false);
      localStorage.setItem("isDM", !isDm);
    } else {
      setDm(true);
      localStorage.setItem("isDM", !isDm);
    }
  };

  const showSearchBar = () => {
    const search = document.getElementById("SEARCH_BAR");
    const body = document.getElementById("BODY");
    const l = document.getElementById("loge");
    search.classList.toggle("hidden");
    l.classList.toggle("hidden");
    body.classList.toggle("overflow-y-hidden");
  };
  return (
    <nav className="sticky top-0 md:top-[-60px] z-[999]">
      <section className="relative bg-t w-full text-white pt-2 pb-2 md:pb-3 flex flex-col gap-3 z-20 border-b-[1px] border-[#a1a1a1]/30 shadow-lg">
        <div className="cont flex">
          <div className="relative justify-between flex items-start w-[60px]">
            <div className="sticky top-[22px]  pt-2 pb-1  text-2xl text-white/70 pl-3 ">
              <div
                onClick={showMenubar}
                className="flex flex-col cursor-pointer h-[16px] relative"
              >
                <span
                  id="menuLine1"
                  className="w-[20px] mb-[5px] h-[2px] bg-white/70 rounded-md transition-[200ms]"
                ></span>
                <span
                  id="menuLine2"
                  className="w-[12px] h-[2px] bg-white/70 rounded-md transition-[200ms]"
                ></span>
                <span
                  id="menuLine3"
                  className="w-[20px] mt-[5px] h-[2px] bg-white/70 rounded-md transition-[200ms]"
                ></span>
              </div>
            </div>
          </div>
          <div className=" flex justify-center gap-6 flex-col py-2 w-full">
            <Link
              href="/"
              className=" mt-1 joseph text-2xl md:text-3xl font-bold tracking-wide mx-auto "
            >
              <span>Site Name</span>
            </Link>
            <div className="hidden md:flex mx-auto gap-10 text-sm text-white/70 mt-1 outfit">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <Link href="/" className="hover:text-white">
                Latest
              </Link>
              <div className=" relative group">
                <span className="hover:text-white flex gap-1 items-center">
                  Categories
                  <FiChevronDown className="group-hover:rotate-180 transition" />
                </span>
                <div className="absolute top-full hidden group-hover:block pt-6  -left-2 min-w-[200%]">
                  <ul className=" p-2  bg-t flex flex-col ">
                    <Link href="/" className="w-fit py-1 px-2 hover:text-white">
                      dkakndkn
                    </Link>
                    <Link href="/" className="w-fit py-1 px-2 hover:text-white">
                      ksduns
                    </Link>
                    <Link href="/" className="w-fit py-1 px-2 hover:text-white">
                      kenjsns
                    </Link>
                    <Link href="/" className="w-fit py-1 px-2 hover:text-white">
                      dkssus
                    </Link>
                  </ul>
                </div>
              </div>
              <Link href="/" className="hover:text-white">
                Blog
              </Link>
              <Link href="/" className="hover:text-white">
                About
              </Link>
              <Link href="/" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>
          <div className="relative  justify-end flex  w-[60px]">
            <div className="sticky top-[22px] pt-2 pb-1  h-fit w-fit flex outfit text-white/70 gap-4">
              <div className="flex items-center gap-3 hover:text-white">
                <BsSearch
                  onClick={showSearchBar}
                  className="text-lg cursor-pointer "
                />
              </div>
              {isDm === false ? (
                <MdDarkMode
                  className="text-2xl hover:text-white cursor-pointer"
                  onClick={isDarkMode}
                />
              ) : (
                <BsFillSunFill
                  className="text-2xl hover:text-white cursor-pointer"
                  onClick={isDarkMode}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <Menubar />
      <div
        id="MENU_BLUR"
        className="w-full absolute top-full h-[100vh] bg-[#646464]/50 z-10 hidden"
        onClick={showMenubar}
      ></div>
    </nav>
  );
};

export default Navbar;
