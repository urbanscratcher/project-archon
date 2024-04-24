import Footer from "@/components/templates/Footer";
import GNB from "@/components/templates/GNB";
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
    <html
      lang="en"
      className="text-xs text-sky-700 sm:text-sm lg:text-[0.9375rem]/[1.5] xl:text-[1.0625rem]/[1.75]"
    >
      <body className={`${figtree.className}`}>
        <ReactQueryProvider>
          <GNB />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
