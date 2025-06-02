import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
   title: 'Shivaji University',
  description: 'Official website of Shivaji University',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Topbar />
         <Header />
         <Navbar />
        <main>{children}</main>
          <Footer/>
      </body>
    </html>
  );
}
