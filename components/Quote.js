import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Quote = () => {
  return (
    <section className="relative w-full bg-t sec flex items-center">
      <div className="relative w-full max-w-[900px] px-2 xs:px-6 sm:px-8 md:px-14 py-28 text-white ">
        <ImQuotesLeft className="absolute text-[3rem] md:text-[4rem] top-7 left-8" />
        <p className=" line-clamp-3 text-xl xs:text-2xl sm:text-3xl md:text-4xl zilla-i text-center  max-w-[800px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          autem in saepe laboriosam. Doloribus in sequi rerum id tenetur porro!
        </p>
        <ImQuotesRight className="absolute text-[3rem] md:text-[4rem] bottom-7 right-8" />
      </div>
    </section>
  );
};

export default Quote;
