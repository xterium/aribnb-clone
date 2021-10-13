import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UsersIcon,
  UserIcon,
} from "@heroicons/react/outline";

import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleCalendarSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleBtnSearch = () => {
    console.log("handleBtnSearch");
  };

  const handleBtnCancel = () => {
    setSearchInput("");
  };

  useEffect(() => {
    if (searchInput !== "") {
      console.log(searchInput);
    }
  }, [searchInput]);

  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Center - Search*/}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-300"
          type="text"
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          placeholder="Start your search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer p-2 hover:rounded-full hover:bg-gray-50">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer rounded-full" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div className="fex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleCalendarSelect}
          />
          <div className="flex items-center mb-4 border-b">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <UserIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(event) => setNoOfGuests(event.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>

          <div className="grid grid-cols-2">
            <button
              className="text-gray-500 hover:rounded-full hover:bg-gray-100"
              onClick={handleBtnCancel}
            >
              Cancel
            </button>
            <button
              className="text-red-400 hover:rounded-full hover:bg-gray-100"
              onClick={handleBtnSearch}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
