import React from "react";

function QuoteSkeleton() {
  return (
    <div className=" mb-4 quote-skeleton my-1  px-2 py-2 rounded-md max-w-[320px]  sm:max-w-screen-lg mx-auto">
      <div className=" skeleton-line w-full h-6 border border-gray-200 mb-1 bg-gray-400 rounded-lg"></div>
      <div className=" skeleton-line w-1/2 h-3 border border-gray-200 rounded-lg bg-gray-400"></div>
    </div>
  );
}

export default QuoteSkeleton;
