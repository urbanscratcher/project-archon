import ErrorDisplay from "@/components/organisms/ErrorDisplay";

function NotFoundErrorPage() {
  return (
    <main className="flex h-screen w-screen items-center justify-center xl:min-w-[1440px]">
      <ErrorDisplay
        mainMessage="Page Not Found"
        subMessage="Sorry, we couldn't find this page."
        actionMessage="Please try again or go back to the previous page."
      />
    </main>
  );
}

export default NotFoundErrorPage;
