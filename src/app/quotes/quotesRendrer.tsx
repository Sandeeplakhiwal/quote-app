"use client";
import FilterModal from "@/components/filterModal";
import QuoteTemplate from "@/components/quoteTemplate";
import AuthorSkeleton from "@/components/skeleton/authorSkeleton";
import QuoteSkeleton from "@/components/skeleton/quoteSkeleton";
import { getQuotesApi } from "@/config/apis";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export interface Quote {
  id: string;
  text: string;
  author: string;
}

interface QuotesRendrerProps {
  quotesData: Quote[];
  isLoading: boolean;
}

function QuotesRendrer({ quotesData, isLoading }: QuotesRendrerProps) {
  return (
    <>
      <div className=" h-full sm:ml-14 ml-12  px-2 sm:px-4">
        {isLoading ? (
          <>
            <QuoteSkeleton />
            <QuoteSkeleton />
            <QuoteSkeleton />
            <QuoteSkeleton />
          </>
        ) : (
          quotesData &&
          quotesData.map((i: Quote) => (
            <QuoteTemplate
              key={i.id}
              id={i.id}
              text={i.text}
              author={i.author}
            />
          ))
        )}
      </div>
    </>
  );
}

export default QuotesRendrer;
