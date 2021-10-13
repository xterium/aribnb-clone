import React from "react";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm lg:text-lg font-bold">
          Not sure where to go? Perfect.
        </p>
        <button className="text-purple-500 font-bold rounded-full px-10 py-4 my-4 bg-white shadow-md hover:shadow-xl active:scale-90 transition duration-200">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
