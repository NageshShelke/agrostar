import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import NavHeader from "@/components/NavHeader"
import {Footer} from "@/components/footer";
import { store } from "@/Store/store";
import { ReduxProvider } from "./Provider";
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agrostar",
  description: "An Farmers App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= {`${geistSans.variable} ${geistMono.variable} antialiased`} 
      >
        <ReduxProvider>
        <Header />
        <NavHeader />
        <main className="mx-20 mb-10">{children}</main>   
        <Toaster position="top-center" richColors/>
        <Footer/> 
        </ReduxProvider>      
      </body>
    </html>
  );
}
