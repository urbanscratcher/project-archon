"use client";

import ErrorDisplay from "../../components/organisms/ErrorDisplay";

function ErrorPage() {
  return (
    <main className="flex h-screen w-screen min-w-[1440px] items-center justify-center">
      <ErrorDisplay
        mainMessage="Something went wrong"
        subMessage="Sorry, we couldn't process this page."
        actionMessage="Please return to the previous page or try again."
      />
    </main>
  );
}

export default ErrorPage;
