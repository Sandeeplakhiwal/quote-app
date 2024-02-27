"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode, createContext } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const ParentContext = createContext({ user: {} });

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const user = {};
  return (
    <ParentContext.Provider value={{ user }}>
      <QueryClientProvider client={queryClient}>
        <>
          {children}
          <ReactQueryDevtools buttonPosition="bottom-right" />
        </>
      </QueryClientProvider>
    </ParentContext.Provider>
  );
};
