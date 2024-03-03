import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
export const metadata = {
  title: "SpokesWheel Conference",
  description: "A spiritual conference for dissidents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/images/wheel.png"
          type="image/png"
          sizes="any"
        />
      </Head>
      <body className={inter.className} data-theme="dark">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
