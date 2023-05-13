import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  return (
    <section className="sticky top-[-60px] bg-t w-full text-white pt-2 pb-3 flex flex-col gap-3 z-[99999] ">
      <div className="cont flex">
        <div className="relative flex-1 flex items-start">
          <div className="sticky top-[22px]  pt-2 pb-1  text-2xl text-white/70 pl-3 ">
            <HiMenuAlt1 className="cursor-pointer hover:text-white" />
          </div>
        </div>
        <div className="flex-1 flex justify-center gap-6 flex-col py-2">
          <div className=" mt-1 joseph text-3xl font-bold tracking-wide mx-auto ">
            <span>Site Name</span>
          </div>
          <div className="flex mx-auto gap-10 text-sm text-white/70 mt-1 outfit">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/" className="hover:text-white">
              Latest
            </Link>
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
        <div className="relative flex-1 justify-end flex">
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
