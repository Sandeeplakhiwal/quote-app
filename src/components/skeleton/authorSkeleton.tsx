import React from "react";

function AuthorSkeleton() {
  return (
    <div className=" mb-1 quote-skeleton my-1 w-full  px-2 py-2 rounded-md    mx-auto">
      <div className=" skeleton-line w-5/6 mx-auto h-3 border border-gray-200 rounded-lg bg-gray-400"></div>
    </div>
  );
}

export default AuthorSkeleton;
