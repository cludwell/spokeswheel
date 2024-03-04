import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "@/context/Providers";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "SpokesWheel Conference",
  description: "A spiritual conference for dissidents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} data-theme="dark">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
