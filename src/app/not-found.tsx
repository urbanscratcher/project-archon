"use client";

import { redirect } from "next/navigation";

function NotFoundPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  redirect("/not-found");
}

export default NotFoundPage;
