"use client";
import DialogueTemplate from "@/components/dialogueTemplate";
import QuoteSkeleton from "@/components/skeleton/quoteSkeleton";
import { getDialoguesApi } from "@/config/apis";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export interface Dialogue {
  id: string;
  text: string;
  series: string;
  character: string;
}

function DialoguesRendrer() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-dialogues"],
    queryFn: getDialoguesApi,
  });
  console.log(data?.data);
  return (
    <div className=" h-full sm:ml-14 ml-12  px-2 sm:px-4">
      {isLoading ? (
        <>
          <QuoteSkeleton />
          <QuoteSkeleton />
          <QuoteSkeleton />
          <QuoteSkeleton />
        </>
      ) : (
        data?.data?.map((i: Dialogue) => (
          <DialogueTemplate
            key={i.id}
            id={i.id}
            text={i.text}
            series={i.series}
            character={i.character}
          />
        ))
      )}
    </div>
  );
}

export default DialoguesRendrer;
