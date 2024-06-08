"use client";

import Box from "@/components/atoms/Box";
import Button from "@/components/atoms/Button";
import type Error from "next/error";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { IoArrowBack, IoRefresh } from "react-icons/io5";

function GlobalErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.log("global error");
  }, [error]);

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
      <body>
        <main className="flex h-screen w-screen min-w-[1440px] items-center justify-center">
          <Box vertical className="w-fit">
            <h1>Something went wrong</h1>
            <h4>Sorry, we couldn&apos;t process this page.</h4>
            <p>Please go back to the previous page or try again.</p>
            <Box horizontal className="w-1/2 gap-2">
              <Button onClick={() => router.back()}>
                <IoArrowBack />
                &nbsp;Go Back
              </Button>
              <Button onClick={() => reset()}>
                Retry&nbsp;
                <IoRefresh />
              </Button>
            </Box>
          </Box>
        </main>
      </body>
    </html>
  );
}

export default GlobalErrorPage;
