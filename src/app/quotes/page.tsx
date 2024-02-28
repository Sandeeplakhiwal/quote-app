"use client";
import QuoteTemplate from "@/components/quoteTemplate";
import FilterBtn from "@/components/filter/filterBtn";
import FilterModal from "@/components/filterModal";
import AuthorSkeleton from "@/components/skeleton/authorSkeleton";
import QuoteSkeleton from "@/components/skeleton/quoteSkeleton";
import React, { Suspense, useEffect, useState } from "react";
import QuotesRendrer, { Quote } from "./quotesRendrer";
import { getQuotesApi } from "@/config/apis";
import { useQuery } from "@tanstack/react-query";
import AuthorTemplate from "@/components/authorTemplate";

export interface Author {
  name: string;
  id: number;
  closeFilterModal: () => void;
  setQueriedAuthor: React.Dispatch<React.SetStateAction<string>>;
}

function QuotesPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [queriedAuthor, setQueriedAuthor] = useState("");
  const [quotesData, setQuotesData] = useState<Quote[]>([]);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const { data: QuotesData, isLoading: QuotesLoading } = useQuery({
    queryKey: ["get-quotes"],
    queryFn: getQuotesApi,
  });

  useEffect(() => {
    if (QuotesData) {
      setQuotesData(QuotesData.data?.quotes);
    }

    return () => {
      setQuotesData([]);
    };
  }, [QuotesData]);

  useEffect(() => {
    if (QuotesData && queriedAuthor) {
      {
        const filteredQuotes = QuotesData.data?.quotes?.filter(
          (quote: Quote) => quote.author === queriedAuthor
        );
        setQuotesData(filteredQuotes);
      }
    } else if (QuotesData && !queriedAuthor) {
      setQuotesData(QuotesData.data?.quotes);
    }
  }, [queriedAuthor]);

  useEffect(() => {
    document.title = "Quotes • Quote App";

    return () => {
      setQuotesData([]);
    };
  }, []);

  return (
    <>
      <div className=" mt-2">
        <div className=" flex w-full justify-center mb-4">
          <FilterBtn openModal={openModal} />
        </div>
        <QuotesRendrer quotesData={quotesData} isLoading={QuotesLoading} />
      </div>
      {
        <FilterModal isOpen={isOpen} setIsOpen={setIsOpen} onClose={closeModal}>
          <div className=" max-h-[300px] sm:max-h-[400px] overflow-y-auto">
            <div className=" flex p-4 pt-1 pb-1">
              <p className=" text-center flex-grow text-sm ">
                Filter by authors
              </p>
              <button onClick={closeModal} className=" cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                </svg>
              </button>
            </div>
            <hr className=" text-gray-300" />
            <div className=" flex justify-center w-full flex-col h-full overflow-y-auto overflow-x-hidden">
              {QuotesLoading ? (
                <AuthorSkeleton />
              ) : (
                <>
                  <AuthorTemplate
                    name="All"
                    id={-1}
                    closeFilterModal={closeModal}
                    setQueriedAuthor={setQueriedAuthor}
                  />
                  {QuotesData &&
                    QuotesData.data?.authors?.map(
                      (i: string, index: number) => (
                        <AuthorTemplate
                          key={index}
                          name={i}
                          id={index}
                          closeFilterModal={closeModal}
                          setQueriedAuthor={setQueriedAuthor}
                        />
                      )
                    )}
                </>
              )}
            </div>
          </div>
        </FilterModal>
      }
    </>
  );
}

export default QuotesPage;
