"use client";

import React from "react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="mb-6 w-full flex justify-center">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 w-full font-work_sans outline-none bg-white 
             focus:ring-2 focus:ring-inset-2 focus:ring-transparent focus:outline-none focus:bg-gradient-to-r 
             focus:from-peach focus:to-purple focus:text-white focus-within:placeholder:text-white"
      />
    </div>
  );
};

export default SearchBar;
