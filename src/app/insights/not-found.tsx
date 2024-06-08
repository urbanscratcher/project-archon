"use client";

import { redirect } from "next/navigation";

function NotFoundPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  if (error) {
    console.error(error.message);
    redirect("/not-found");
  }

  return <></>;
}

export default NotFoundPage;
