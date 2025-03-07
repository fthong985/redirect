import type { Metadata } from "next";
import "./globals.css";

import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});

export const metadata: Metadata = {
  title: {
    default: "Jav4You",
    template: "%s | Jav4You",
  },
  description:
    "Jav4You is a free online platform that allows users to watch and download JAV videos directly from the internet. The website acts as a search engine for video, Once you find the JAV code you want, Jav4You will provides the video and option to download in different quality.",
  openGraph: {
    title: "Jav4You",
    description:
      "Jav4You is a free online platform that allows users to watch and download JAV videos directly from the internet. The website acts as a search engine for video, Once you find the JAV code you want, Jav4You will provides the video and option to download in different quality.",
    url: "https://jav4you.fun",
    siteName: "Jav4Fun",
    images: [
      {
        url: "https://i.ibb.co/kVpHqsy2/icon.png",
        width: 1200,
        height: 630,
        alt: "Jav4You Logo",
      },
    ],
    type: "website",
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
        className={`${roboto.className} antialiased bg-[#161618] sm:max-w-screen-md md:mx-auto lg:max-w-screen-lg lg:px-4 xl:max-w-screen-xl 2xl:max-w-screen-2xl`}
      >
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
