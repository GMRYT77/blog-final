import Link from "next/link";
import React, { useState } from "react";
import {
  BsArrowUpRight,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsTelegram,
} from "react-icons/bs";

const Footer = () => {
  let x =
    "absolute top-[20%] left-3 outfit text-[#a1a1a1] transition-[200ms] bg-t px-1 text-lg peer-focus:top-0 peer-focus:-translate-y-[50%] peer-focus:text-sm peer";

  const [nlName, setNlName] = useState(0);
  const [nlEmail, setNlEmail] = useState(0);

  const nlNameChange = () => {
    const name = document.getElementById("nl_name");
    console.log(name.value.length);
    setNlName(name.value.length);
  };
  const nlEmailChange = () => {
    const email = document.getElementById("nl_email");
    console.log(email.value.length);
    setNlEmail(email.value.length);
  };

  return (
    <footer className="w-full text-white px-2   bg-t mt-6">
      <div className="cont flex flex-col">
        <div className="w-full max-w-[800px] gap-8 md:gap-12 mx-auto flex sm:px-5 px-2 py-14 md:py-20 justify-between md:flex-row flex-col items-center">
          <div className="w-full max-w-[540px] md:max-w-[360px] flex flex-col outfit justify-center ">
            <h4 className="text-3xl md:text-4xl  tracking-wide font-semibold mb-2 md:mb-4 leading-[44px] md:leading-[54px]">
              Subscribe to Our Monthly Newsletter
            </h4>
            <p className="md:text-lg text-md text-white/70 tracking-wide leading-[28px]">
              Stay up-to-date about latest tech and new world. Unsubscribe at
              anytime!
            </p>
          </div>
          <form className="w-full max-w-[540px] md:max-w-[360px] flex flex-col gap-4">
            <div className="flex relative flex-col">
              <input
                type="text"
                name="Name"
                id="nl_name"
                required
                onChange={nlNameChange}
                className="outline-none border-[1px] border-[#a1a1a1]/70 rounded-sm px-3 py-3 bg-transparent peer focus:border-[#cfcfcf]"
              />
              <span
                className={
                  nlName != 0
                    ? "absolute left-3 outfit text-[#a1a1a1] bg-t px-1 top-0 -translate-y-[50%] text-sm"
                    : "absolute top-[20%] left-3 outfit text-[#a1a1a1] transition-[200ms] bg-t px-1 text-lg peer-focus:top-0 peer-focus:-translate-y-[50%] peer-focus:text-sm peer"
                }
              >
                Name
              </span>
            </div>
            <div className="flex relative flex-col">
              <input
                type="email"
                name="Name"
                id="nl_email"
                required
                onChange={nlEmailChange}
                className="outline-none border-[1px] border-[#a1a1a1]/70 rounded-sm px-3 py-3 bg-transparent peer focus:border-[#cfcfcf]"
              />
              <span
                className={
                  nlEmail != 0
                    ? "absolute left-3 outfit text-[#a1a1a1] bg-t px-1 top-0 -translate-y-[50%] text-sm"
                    : "absolute top-[20%] left-3 outfit text-[#a1a1a1] transition-[200ms] bg-t px-1 text-lg peer-focus:top-0 peer-focus:-translate-y-[50%] peer-focus:text-sm peer"
                }
              >
                Email
              </span>
            </div>
            <div className="relative w-full group">
              <input
                type="submit"
                name="submit"
                id="nl_submit"
                className="outline-none border-[1px] w-full border-[#a1a1a1]/70 rounded-sm px-3 py-3 hover:bg-neutral-800 cursor-pointer text-left outfit tracking-wider focus:border-[#cfcfcf]"
              />
              <BsArrowUpRight className="absolute right-3 top-1/2 -translate-y-1/2 text-xl group-hover:rotate-45 transition-[250ms]" />
            </div>
          </form>
        </div>
        <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row border-t-[1px] border-t-[#a1a1a1]/60 py-6 justify-between items-center outfit">
          <div className="text-sm tex-white/80">The DOS Company © 2023</div>
          <div className="flex flex-1 flex-wrap justify-center gap-2 md:gap-4 text-sm text-white/70">
            <Link href="/" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-white">
              Terms & Conditions
            </Link>
            <Link href="/" className="hover:text-white">
              Cookies
            </Link>
            <Link href="/" className="hover:text-white">
              About
            </Link>
          </div>
          <div className="flex justify-end gap-7 md:gap-5 max-w-[60%] text-2xl md:text-xl mb-2 ">
            <Link href="/">
              <BsFacebook className="hover:text-blue-800 transition-colors" />
            </Link>
            <Link href="/">
              <BsTwitter className="hover:text-blue-500 transition-colors" />
            </Link>
            <Link href="/">
              <BsInstagram className="hover:text-pink-600 transition-colors" />
            </Link>
            <Link href="/">
              <BsTelegram className="hover:text-blue-600 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
