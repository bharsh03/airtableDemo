import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import Header from "./layouts/common/Header";
import Announcementbar from "./layouts/common/Announcementbar";
import Footer from "./layouts/common/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto-family"
})


export const metadata: Metadata = {
  title: "Air Table",
  description: "AirTable CRM for manage business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-roboto antialiased w-full`}
      >
        <Announcementbar/>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
