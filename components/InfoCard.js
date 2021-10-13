import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

function InfoCard({
  img = "https://links.papareact.com/xqj",
  location = "Private room in center of London",
  title = "Stay at this spacious Edwardian House",
  description = "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
  star = 4.73,
  price = "£30 / night",
  total = "£117 total",
  long = -0.0022275,
  lat = 51.5421655,
}) {
  return (
    <div className="flex py-7 pw-2 border-b pr-4 cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          className="rounded-xl"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl font-semibold">{title}</h4>

        <div className="border-b w-12 pt-2"></div>

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <div>
            <p className="flex items-center">
              <StarIcon className="h-5 text-red-400" />
              {star}
            </p>
          </div>

          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
