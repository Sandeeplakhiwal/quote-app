import QuoteSkeleton from "@/components/skeleton/quoteSkeleton";
import React from "react";
import LikedRendrer from "./likedRendrer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liked • Quote App",
  description: "liked quates, dialogues and proverbs",
};

function LikedPage() {
  return (
    <div className=" mt-2">
      <LikedRendrer />
    </div>
  );
}

export default LikedPage;
