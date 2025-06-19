import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HelpBox from "@/components/HelpBox";
import ChatwootWidget from "@/components/ChatwootWidget";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
 
const poppins = Poppins({
  variable: "--font-poppins", // <- setting a CSS variable
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // you can add weights you need
  display: "swap",
});
export const metadata: Metadata = {
  title: "Digital Edify : India's #1 Premium Training Institute ",
  description: "Digital Edify offers state-of-the-art classroom and online training in Hyderabad, Bangalore. Enroll now for courses with Training & Internship. ",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <ToastContainer />
        <HelpBox />
        <Header />
        {children}
        <ChatwootWidget />
        <Footer />
      </body>
    </html>
  );
}
