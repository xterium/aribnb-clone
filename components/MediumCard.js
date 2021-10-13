import React from "react";
import Image from "next/image";
const MediumCard = ({ img, title }) => {
  return (
    <div className="flex-col items-center mt-5 space-x-4 rounded-xl cursor-pointer hover:scale-105 transform duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image className="rounded-xl" src={img} layout="fill" />
      </div>
      <div>
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
    </div>
  );
};

export default MediumCard;
