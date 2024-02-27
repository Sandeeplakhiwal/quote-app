"use client";
import QuoteSkeleton from "@/components/skeleton/quoteSkeleton";
import { getDialoguesApi, getProverbsApi, getQuotesApi } from "@/config/apis";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Quote } from "../quotes/quotesRendrer";
import QuoteTemplate from "@/components/quoteTemplate";
import { Proverb } from "../proverbs/proverbsRendrer";
import ProverbTemplate from "@/components/proverbTemplate";
import { Dialogue } from "../dialogues/dialoguesRendrer";
import DialogueTemplate from "@/components/dialogueTemplate";

function SavedRendrer() {
  const [savedQuotes, setSavedQuotes] = useState<Quote[]>([]);
  const [savedProverbs, setSavedProverbs] = useState<Proverb[]>([]);
  const [savedDialogues, setSavedDialogues] = useState<Dialogue[]>([]);

  const { data: QuotesData, isLoading: QuotesLoading } = useQuery({
    queryKey: ["get-quotes"],
    queryFn: getQuotesApi,
  });

  const { data: ProverbsData, isLoading: ProverbsLoading } = useQuery({
    queryKey: ["get-proverbs"],
    queryFn: getProverbsApi,
  });

  const { data: DialoguesData, isLoading: DialoguesLoading } = useQuery({
    queryKey: ["get-dialogues"],
    queryFn: getDialoguesApi,
  });

  useEffect(() => {
    const storedSavedQuotes = localStorage.getItem("savedQuotes");
    let savedQuotesArr: string[] = JSON.parse(storedSavedQuotes || "[]");
    if (QuotesData?.data) {
      let filteredSavedQuotes = savedQuotesArr.map((savedQuoteId: string) =>
        QuotesData.data.quotes.find((i: Quote) => String(i.id) === savedQuoteId)
      );
      setSavedQuotes(filteredSavedQuotes);
    }
  }, [QuotesData]);

  useEffect(() => {
    const storedSavedProverbs = localStorage.getItem("savedProverbs");
    let savedProverbsArr: string[] = JSON.parse(storedSavedProverbs || "[]");
    if (ProverbsData?.data) {
      let filteredSavedProverbs = savedProverbsArr.map(
        (savedProverbId: string) =>
          ProverbsData.data.find(
            (i: Proverb) => String(i.id) === savedProverbId
          )
      );
      setSavedProverbs(filteredSavedProverbs);
    }
  }, [ProverbsData]);

  useEffect(() => {
    const storedSavedDialogues = localStorage.getItem("savedDialogues");
    let savedDialoguesArr: string[] = JSON.parse(storedSavedDialogues || "[]");
    if (DialoguesData?.data) {
      let filteredSavedDialogues = savedDialoguesArr.map(
        (savedDialogueId: string) =>
          DialoguesData.data.find(
            (i: Dialogue) => String(i.id) === savedDialogueId
          )
      );
      setSavedDialogues(filteredSavedDialogues);
    }
  }, [DialoguesData]);

  return (
    <div className=" h-full sm:ml-14 ml-12  px-2 sm:px-4">
      <h1 className=" font-bold text-md sm:ml-4 md:ml-6 font-serif my-2">
        • Saved Quotes
      </h1>

      {QuotesLoading ? (
        <>
          <QuoteSkeleton />
          <QuoteSkeleton />
        </>
      ) : savedQuotes.length > 0 ? (
        savedQuotes.map((i: Quote) => (
          <QuoteTemplate key={i.id} id={i.id} text={i.text} author={i.author} />
        ))
      ) : (
        <h2 className=" font-bold text-sm sm:ml-4 md:ml-6 my-6 text-center">
          No quote saved yet
        </h2>
      )}

      <h1 className=" font-bold text-md sm:ml-4 md:ml-6 font-serif my-2">
        • Saved Proverbs
      </h1>

      {ProverbsLoading ? (
        <>
          <QuoteSkeleton />
          <QuoteSkeleton />
        </>
      ) : savedProverbs.length > 0 ? (
        savedProverbs.map((i: Proverb) => (
          <ProverbTemplate
            key={i.id}
            id={i.id}
            text={i.text}
            origin={i.origin}
          />
        ))
      ) : (
        <h2 className=" font-bold text-sm sm:ml-4 md:ml-6 my-6 text-center">
          No proverb saved yet
        </h2>
      )}
      <h1 className=" font-bold text-md sm:ml-4 md:ml-6 font-serif my-2">
        • Saved Dialogues
      </h1>

      {DialoguesLoading ? (
        <>
          <QuoteSkeleton />
          <QuoteSkeleton />
        </>
      ) : savedDialogues.length > 0 ? (
        savedDialogues.map((i: Dialogue) => (
          <DialogueTemplate
            key={i.id}
            id={i.id}
            text={i.text}
            series={i.series}
            character={i.character}
          />
        ))
      ) : (
        <h2 className=" font-bold text-sm sm:ml-4 md:ml-6 my-6 text-center">
          No dialogue saved yet
        </h2>
      )}
    </div>
  );
}

export default SavedRendrer;
