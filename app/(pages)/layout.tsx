import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/_sytles/globals.css";
import Template from "@/app/(pages)/template";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Library Insights App | Your Trusted Insights Provider",
  description:
    "Library Insights App | Your Trusted Insights Provider – Gain deep, actionable insights into library usage, trends, and statistics with our intuitive and powerful analytics tool designed to help you make informed decisions and enhance user engagement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Template>{children}</Template>
      </body>
    </html>
  );
}
