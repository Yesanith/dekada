import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer"; 
import NavbarRenderer, { FooterRenderer } from "./components/Path";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Burritos De Kadas",
  description:
    "Burritos de kadas Meksika’nın geleneksel tatlarının uyarlanması ile ortaya çıkmış bir mutfaktır.",
  creator: "https://twitter.com/Akileus7",
  keywords: [
    "Burritos de kadas",
    "yemek",
    "tarif",
    "mutfak",
    "kültür",
    "Meksika",
    "Meksika Yemekleri İzmir",
    "izmir meksika",
    "izmir taco",
    "izmir burrito",
    "izmir amerika yemekleri",
    "izmir taco restoran",
    "izmir burrito restoran",
  ],
  authors: [{ name: "Akileus", url: "https://twitter.com/Akileus7" }],
  generator: "Next.js",
  openGraph: {
    title: "Burritos De Kadas",
    description:
      "Burritos de kadas Meksika’nın geleneksel tatlarının uyarlanması ile ortaya çıkmış bir mutfaktır.",
    images: "https://burritosdekadas.vercel.app/images/burrito.jpg",
    type: "article",
    url: "https://burritosdekadas.vercel.app/burrito-de-kadas",
    siteName: "Burritos De Kadas",
  },
  twitter: {
    card: "summary_large_image",
    site: "@burritodekadas",
    creator: "@Akileus7",
  },
};

 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href={`${process.env.NEXT_PUBLIC_BASE_URL_DEV}/public/icon/logo.png`}
        />
      </Head>
      <body className={inter.className}>
        <main className="flex flex-col min-h-screen lg:px-12 selection:bg-selectColor overflow-x-hidden">
          <div className="flex flex-col max-w-screen lg:max-w-screen-2xl mx-auto "> 
            <NavbarRenderer />
            {children}
            <FooterRenderer />
          </div>
        </main>
      </body>
    </html>
  );
}
