import React from "react";
import ProverbsRendrer from "./proverbsRendrer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proverbs • Quote App",
  description: "get top proverbs",
};

function ProverbsPage() {
  return (
    <div className=" mt-2">
      <ProverbsRendrer />
    </div>
  );
}

export default ProverbsPage;
