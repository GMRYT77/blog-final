import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Quote = () => {
  return (
    <section className="w-full bg-t">
      <div className="cont py-16 flex justify-evenly text-white">
        <div className="flex">
          <ImQuotesLeft className="text-[4rem] -top-5 " />
        </div>
        <p className=" leading-[50px] line-clamp-3 text-4xl zilla-i text-center  max-w-[800px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          autem in saepe laboriosam. Doloribus in sequi rerum id tenetur porro!
        </p>
        <div className="flex items-end">
          <ImQuotesRight className="text-[4rem]" />
        </div>
      </div>
    </section>
  );
};

export default Quote;
