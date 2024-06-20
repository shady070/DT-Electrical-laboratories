import type { Metadata } from "next";
import { Playfair_Display_SC, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '300'], // Customize weights as needed
  styles: 'ital,wght@0,400;0,700;1,400;1,700',
});

const playfairDisplaySC = Playfair_Display_SC({
  subsets: ['latin'],
  weight: ['400', '700'], // Customize weights as needed
});

export const metadata: Metadata = {
  title: "DT Electrical Laboratories",
  description: "THE ELECTRICIAN YOU NEED",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}