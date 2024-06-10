import Footer from "@/components/organisms/Footer";
import GNB from "@/components/organisms/GNB";
import Toasters from "@/components/organisms/Toasters";
import ReactQueryProvider from "@/libs/ReactQueryProvider";
import { type Metadata } from "next";
import { DM_Serif_Display, Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

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
      className="
      scroll-smooth
      text-xs/[1.357] tracking-[0.03125rem]
      text-sky-700
      sm:text-sm/[1.4]
      lg:text-[0.9375rem]/[1.5]
      xl:text-[1.0625rem]/[1.75]"
    >
      <body className={`${figtree.className} relative`}>
        <ReactQueryProvider>
          <Toasters />
          <GNB />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
