"use client";

import ErrorMessage from "../../components/organisms/ErrorMessage";

function ErrorPage() {
  return (
    <main className="flex h-screen w-screen min-w-[1440px] items-center justify-center">
      <ErrorMessage
        mainMessage="Something went wrong"
        subMessage="Sorry, we couldn't process this page."
        actionMessage="Please return to the previous page or try again."
      />
    </main>
  );
}

export default ErrorPage;
