import React from "react";
import SavedRendrer from "./savedRendrer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saved • Quote App",
  description: "saved quates, dialogues and proverbs",
};

function SavedPage() {
  return (
    <div className=" mt-2">
      <SavedRendrer />
    </div>
  );
}

export default SavedPage;
