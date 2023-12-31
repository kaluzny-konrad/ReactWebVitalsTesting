"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import SoftNavigation from "@/components/nav/SoftNavigation";
import HardNavigation from "@/components/nav/HardNavigation";

const inter = Inter({ subsets: ["latin"] });

import reportWebVitals from "./reportWebVitals";
import { sendToAnalytics } from "./vitals";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <SoftNavigation />
          <HardNavigation />
        </nav>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

if (typeof window !== "undefined") reportWebVitals(sendToAnalytics);
