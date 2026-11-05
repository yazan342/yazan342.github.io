"use client";

import type { ReactNode } from "react";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import PageLoader from "@/components/layout/PageLoader";
import BackgroundFX from "@/components/layout/BackgroundFX";
import CursorGlow from "@/components/layout/CursorGlow";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ClientShell({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <PageLoader />
      <BackgroundFX />
      <CursorGlow />
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </SmoothScrollProvider>
  );
}
