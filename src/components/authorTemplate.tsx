import { Author } from "@/app/quotes/page";
import React from "react";

function AuthorTemplate({
  name,
  id,
  closeFilterModal,
  setQueriedAuthor,
}: Author) {
  const handleAuthorClick = () => {
    setQueriedAuthor(name === "All" ? "" : name);
    closeFilterModal();
  };
  return (
    <div
      className="w-full  px-2 rounded-md mx-auto flex flex-row items-center cursor-pointer border-b border-gray-200 py-2 hover:bg-[#efefef]"
      onClick={handleAuthorClick}
    >
      <span className=" text-xs sm:text-sm font-bold mr-2">{id + 1}.</span>
      <p className=" text-xs sm:text-sm ">{name}</p>
    </div>
  );
}

export default AuthorTemplate;
