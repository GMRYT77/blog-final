import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  return (
    <section className="sticky top-0 md:top-[-60px] bg-t w-full text-white pt-2 pb-2 md:pb-3 flex flex-col gap-3 z-[99999]  shadow-lg">
      <div className="cont flex">
        <div className="relative justify-between flex items-start w-[60px]">
          <div className="sticky top-[22px]  pt-2 pb-1  text-2xl text-white/70 pl-3 ">
            <HiMenuAlt1 className="cursor-pointer hover:text-white" />
          </div>
        </div>
        <div className=" flex justify-center gap-6 flex-col py-2 w-full">
          <div className=" mt-1 joseph text-2xl md:text-3xl font-bold tracking-wide mx-auto ">
            <span>Site Name</span>
          </div>
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
              <BsSearch className="text-lg cursor-pointer " />
            </div>

            <MdDarkMode className="text-2xl hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
