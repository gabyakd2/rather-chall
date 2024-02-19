import React from "react";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({ subsets: ["latin"] });

function InformationCard() {
  return (
    <div className=" flex flex-col justify-center md:mx-0 mx-11">
      <p className={`${newsreader.className} md:text-6xl text-4xl leading-tight md:leading-none font-normal`}>
        Buy luxurious <br /> items coupled with <br /> utility NFTs
      </p>
      <p className="md:text-xl text-sm md:w-96 mt-4">
        The marketplace that merges physical luxury and digital security.
      </p>
      <button className="mt-8 md:mt-12 flex justify-start relative group w-72">
        <p className="mb-4 transition-transform transform-gpu group-hover:translate-x-2">
          Get Started
        </p>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all transform origin-left group-hover:bg-gray-500"></div>
      </button>
    </div>
  );
}

export default InformationCard;
