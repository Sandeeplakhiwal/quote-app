"use client";
import React from "react";
import FilterModal from "../filterModal";

interface FilterBtnTypes {
  openModal: () => void;
}

function FilterBtn({ openModal }: FilterBtnTypes) {
  return (
    <button
      className=" border border-gray-300 py-2 px-6 rounded-md flex flex-row items-center justify-center "
      onClick={openModal}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="skyblue"
        className="w-4 sm:w-5 h-4 sm:h-5"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
        />
      </svg>
      <p className=" text-xs sm:text-sm">Filters</p>
    </button>
  );
}

export default FilterBtn;
