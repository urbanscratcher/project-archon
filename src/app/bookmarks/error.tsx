"use client";

import { redirect } from "next/navigation";

function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  if (error) {
    console.error(error.message);
    redirect("/error");
  }

  return <></>;
}

export default ErrorPage;
