"use client";
import { Proverb } from "@/app/proverbs/proverbsRendrer";
import React, { useEffect, useState } from "react";

function ProverbTemplate({ id, text, origin }: Proverb) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    let storedLikedArr = localStorage.getItem("likedProverbs");
    let likedArr: string[] = JSON.parse(storedLikedArr || "[]");
    let proverbIndexInLikedArr = likedArr.findIndex((i) => i === String(id));
    if (proverbIndexInLikedArr !== -1) {
      setIsLiked(true);
    }
  }, [id]);

  const likeHandler = () => {
    if (window !== undefined) {
      let storedLikedArr = localStorage.getItem("likedProverbs");
      let likedArr: string[] = JSON.parse(storedLikedArr || "[]");
      let proverbIndexInLikedArr = likedArr.findIndex((i) => i === String(id));
      if (proverbIndexInLikedArr !== -1) {
        likedArr.splice(proverbIndexInLikedArr, 1);
        setIsLiked(false);
      } else {
        likedArr.push(String(id));
        setIsLiked(true);
      }
      localStorage.setItem("likedProverbs", JSON.stringify(likedArr));
    }
  };

  const saveHandler = () => {
    if (window !== undefined) {
      let storedSavedArr = localStorage.getItem("savedProverbs");
      let savedArr: string[] = JSON.parse(storedSavedArr || "[]");
      let proverbIndexInSavedArr = savedArr.findIndex((i) => i === String(id));
      if (proverbIndexInSavedArr !== -1) {
        savedArr.splice(proverbIndexInSavedArr, 1);
        setIsSaved(false);
      } else {
        savedArr.push(String(id));
        setIsSaved(true);
      }
      localStorage.setItem("savedProverbs", JSON.stringify(savedArr));
    }
  };

  useEffect(() => {
    let storedSavedArr = localStorage.getItem("savedProverbs");
    let savedArr: string[] = JSON.parse(storedSavedArr || "[]");
    let proverbIndexInSavedArr = savedArr.findIndex((i) => i === String(id));
    if (proverbIndexInSavedArr !== -1) {
      setIsSaved(true);
    }
  }, [id]);

  return (
    <div className="w-auto border border-gray-200 mb-8 my-1 px-2 py-2 rounded-md max-w-[320px] sm:max-w-screen-lg mx-auto">
      <div className="w-full mb-1 rounded-lg flex flex-row">
        <p className="relative flex flex-row justify-start items-center">
          <span className="font-bold text-[2rem] text-red-400 absolute -top-4 sm:top-0 ">
            “
          </span>
          <p className="pl-4 pr-4 sm:pr-0">
            {text}
            <span className="font-bold text-[2rem] text-red-400 absolute -top-4 right-0 sm:static">
              ”
            </span>
          </p>
        </p>
      </div>
      <div className="w-auto rounded-lg">
        <p className=" font-normal text-xs pl-2">
          <span className=" font-bold text-xs">Origin:-</span> {origin}
        </p>

        <p className=" flex flex-row gap-4 justify-between items-center px-2 py-1">
          <button onClick={likeHandler}>
            {isLiked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="red"
                className="w-5 h-5"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            )}
          </button>
          <button onClick={saveHandler}>
            {isSaved ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM20.25 5.507v11.561L5.853 2.671c.15-.043.306-.075.467-.094a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93ZM3.75 21V6.932l14.063 14.063L12 18.088l-7.165 3.583A.75.75 0 0 1 3.75 21Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            )}
          </button>
        </p>
      </div>
    </div>
  );
}

export default ProverbTemplate;
