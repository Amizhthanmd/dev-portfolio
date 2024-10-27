"use client";

import { ReactNode } from "react";
import SmoothScroll from "./smooth-scroll";
import { ContextProvider } from "@/lib/context";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SmoothScroll>
        <ContextProvider>{children}</ContextProvider>
      </SmoothScroll>
    </>
  );
};
