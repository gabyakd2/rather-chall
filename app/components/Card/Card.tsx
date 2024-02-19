import Image from "next/image";
import React from "react";
import MediaCard from "./MediaCard";
import InformationCard from "./InformationCard";

function Card() {
  return (
    <div className="flex flex-col md:flex-row justify-center md:space-x-16 space-y-10">
      <MediaCard />
      <InformationCard />
    </div>
  );
}

export default Card;
