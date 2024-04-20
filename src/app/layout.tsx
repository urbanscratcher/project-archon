import Footer from "@/components/sections/Footer";
import GNB from "@/components/sections/GNB";
import ReactQueryProvider from "@/libs/ReactQueryProvider";
import { type Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ArchOn",
  description:
    "A personal project about a web magazine on architectures to practice nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <ReactQueryProvider>
          <GNB />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
