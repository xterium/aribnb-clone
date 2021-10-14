import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

import { DateRangePicker } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Header = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState(router.query.location || "");
  const [startDate, setStartDate] = useState(
    router.query.startDate ? new Date(router.query.startDate) : new Date()
  );
  const [endDate, setEndDate] = useState(
    router.query.endDate ? new Date(router.query.endDate) : new Date()
  );
  const [noOfGuests, setNoOfGuests] = useState(1);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

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
    if (!searchInput) {
      alert("Please type in a location");
      return;
    }

    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: noOfGuests,
      },
    });

    handleBtnCancel();
  };

  const handleBtnCancel = () => {
    setShowAdvancedSearch(false);
  };

  return (
    <div className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 md:px-10">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-8 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-300"
          type="text"
          onFocus={() => setShowAdvancedSearch(true)}
          value={searchInput}
          onChange={(event) => setSearchInput(event.target.value)}
          placeholder={router.query.location || "Search location"}
        />
        <SearchIcon
          onClick={handleBtnSearch}
          className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>

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

      {showAdvancedSearch && (
        <div className="fex flex-col col-span-3 mx-auto mt-2">
          <DateRangePicker
            className="flex-wrap"
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
