'use client'

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

const Searchbar = () => {
  const [search, setsearch] = useState("");
  const router = useRouter();

  const handelSearch = (e: FormEvent) => {
    e.preventDefault();
    console.log(search)
  };

  // Trigger the search when the Enter key is pressed
  const handleKeyDown = (e: any) => {
    if (e.code === "Enter" || e.keyCode === 13) {
      handelSearch(e);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="w-full">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative flex items-center">
          <input
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            onKeyDown={handleKeyDown}
            name="search"
            className="block w-full pl-4 pr-10 py-3 border border-gray-300 rounded-full leading-5 dark:bg-black placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            placeholder="Search People.."
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
            {search && (
              <XMarkIcon
                onClick={() => setsearch("")}
                className="w-6 h-6" />
            )}
            <MagnifyingGlassIcon
              onClick={handelSearch}
              className="h-5 w-5"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;