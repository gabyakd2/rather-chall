import React from "react";
import { Newsreader } from "next/font/google";

const newsreader = Newsreader({ subsets: ["latin"] });

function InformationCard() {
  return (
    <div className=" flex flex-col justify-center">
      <p className={`${newsreader.className} text-6xl leading-none font-normal`}>
        Buy luxurious <br /> items coupled with <br /> utility NFTs
      </p>
      <p className="text-xl w-96 mt-4">
        The marketplace that merges physical luxury and digital security.
      </p>
      <button className="mt-12 flex justify-start relative group w-72">
        <p className="mb-4 transition-transform transform-gpu group-hover:translate-x-2">
          Get Started
        </p>
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white transition-all transform origin-left hover:bg-gray-500"></div>
      </button>
    </div>
  );
}

export default InformationCard;
