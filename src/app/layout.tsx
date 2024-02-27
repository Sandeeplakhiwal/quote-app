import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { ContextProvider } from "@/config/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quote App",
  description: "Get quates, dialogues and proverbs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <Header />
          <Sidebar />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
