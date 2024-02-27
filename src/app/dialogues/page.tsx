import React from "react";
import DialoguesRendrer from "./dialoguesRendrer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dialogues • Quote App",
  description: "saved quates, dialogues and proverbs",
};

function DialoguesPage() {
  return (
    <div className=" mt-2">
      <DialoguesRendrer />
    </div>
  );
}

export default DialoguesPage;
