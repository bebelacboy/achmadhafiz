import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer/Footer";
import { exo2 } from "./fonts";
import { rootMetadata } from "@/constants/metadata";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exo2.className} antialiased`}
      >
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
