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

function LikedRendrer() {
  const [likedQuotes, setLikedQuotes] = useState<Quote[]>([]);
  const [likedProverbs, setLikedProverbs] = useState<Proverb[]>([]);
  const [likedDialogues, setLikedDialogues] = useState<Dialogue[]>([]);

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
    const storedLikedQuotes = localStorage.getItem("likedQuotes");
    let likedQuotesArr: string[] = JSON.parse(storedLikedQuotes || "[]");
    if (QuotesData?.data) {
      let filteredLikedQuotes = likedQuotesArr.map((likedQuoteId: string) =>
        QuotesData.data.quotes.find((i: Quote) => String(i.id) === likedQuoteId)
      );
      setLikedQuotes(filteredLikedQuotes);
    }
  }, [QuotesData]);

  useEffect(() => {
    const storedLikedProverbs = localStorage.getItem("likedProverbs");
    let likedProverbsArr: string[] = JSON.parse(storedLikedProverbs || "[]");
    if (ProverbsData?.data) {
      let filteredLikedProverbs = likedProverbsArr.map(
        (likedProverbId: string) =>
          ProverbsData.data.find(
            (i: Proverb) => String(i.id) === likedProverbId
          )
      );
      setLikedProverbs(filteredLikedProverbs);
    }
  }, [ProverbsData]);

  useEffect(() => {
    const storedLikedDialogues = localStorage.getItem("likedDialogues");
    let likedDialoguesArr: string[] = JSON.parse(storedLikedDialogues || "[]");
    if (DialoguesData?.data) {
      let filteredLikedDialogues = likedDialoguesArr.map(
        (likedDialogueId: string) =>
          DialoguesData.data.find(
            (i: Dialogue) => String(i.id) === likedDialogueId
          )
      );
      setLikedDialogues(filteredLikedDialogues);
    }
  }, [DialoguesData]);

  return (
    <div className=" h-full sm:ml-14 ml-12  px-2 sm:px-4">
      <h1 className=" font-bold text-md sm:ml-4 md:ml-6 font-serif my-2">
        • Liked Quotes
      </h1>

      {QuotesLoading ? (
        <>
          <QuoteSkeleton />
          <QuoteSkeleton />
        </>
      ) : likedQuotes.length > 0 ? (
        likedQuotes.map((i: Quote) => (
          <QuoteTemplate key={i.id} id={i.id} text={i.text} author={i.author} />
        ))
      ) : (
        <h2 className=" font-bold text-sm sm:ml-4 md:ml-6 text-center my-6">
          No quote liked yet
        </h2>
      )}

      <h1 className=" font-bold text-md sm:ml-4 md:ml-6 font-serif my-2">
        • Liked Proverbs
      </h1>

      {ProverbsLoading ? (
        <>
          <QuoteSkeleton />
          <QuoteSkeleton />
        </>
      ) : likedProverbs.length > 0 ? (
        likedProverbs.map((i: Proverb) => (
          <ProverbTemplate
            key={i.id}
            id={i.id}
            text={i.text}
            origin={i.origin}
          />
        ))
      ) : (
        <h2 className=" font-bold text-sm sm:ml-4 md:ml-6 my-6 text-center">
          No proverb liked yet
        </h2>
      )}
      <h1 className=" font-bold text-md sm:ml-4 md:ml-6 font-serif my-2">
        • Liked Dialogues
      </h1>

      {DialoguesLoading ? (
        <>
          <QuoteSkeleton />
          <QuoteSkeleton />
        </>
      ) : likedDialogues.length > 0 ? (
        likedDialogues.map((i: Dialogue) => (
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
          No dialogue liked yet
        </h2>
      )}
    </div>
  );
}

export default LikedRendrer;
