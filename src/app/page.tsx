import type { Metadata } from "next";
import QuotesPage from "./quotes/page";

export const metadata: Metadata = {
  title: " Quotes • Quote App",
  description: "Get quates, dialogues and proverbs",
};

export default function Home() {
  return <QuotesPage />;
}
