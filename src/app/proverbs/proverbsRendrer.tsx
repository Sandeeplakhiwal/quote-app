"use client";
import ProverbTemplate from "@/components/proverbTemplate";
import QuoteSkeleton from "@/components/skeleton/quoteSkeleton";
import { getProverbsApi } from "@/config/apis";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export interface Proverb {
  id: string;
  text: string;
  origin: string;
}

function ProverbsRendrer() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-proverbs"],
    queryFn: getProverbsApi,
  });
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
        data?.data?.map((i: Proverb) => (
          <ProverbTemplate
            key={i.id}
            id={i.id}
            text={i.text}
            origin={i.origin}
          />
        ))
      )}
    </div>
  );
}

export default ProverbsRendrer;
