import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../globals.css";

import { cn } from "@/lib/utils";
import { descriptionDashboard, titleDashboard } from "@/lib/content";
import Sideber from "./_component/layouts/Sideber";
import Navber from "./_component/layouts/Navber";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: titleDashboard,
  description: descriptionDashboard,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
