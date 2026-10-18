import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto-family",
});

export const metadata: Metadata = {
  title: "Air Table",
  description: "AirTable CRM for manage business",
  icons: {
    icon: "/icons/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${roboto.className} antialiased w-full`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
