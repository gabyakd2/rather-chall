import Image from "next/image";
import React from "react";
import MediaCard from "./MediaCard";
import InformationCard from "./InformationCard";

function Card() {
  return (
    <div className="flex justify-center space-x-16 ">
      <MediaCard />
      <InformationCard />
    </div>
  );
}

export default Card;
