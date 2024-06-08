import ErrorMessage from "@/components/organisms/ErrorMessage";

function NotFoundErrorPage() {
  return (
    <main className="flex h-screen w-screen min-w-[1440px] items-center justify-center">
      <ErrorMessage
        mainMessage="Page Not Found"
        subMessage="Sorry, we couldn't find this page."
        actionMessage="Please try again or go back to the previous page."
      />
    </main>
  );
}

export default NotFoundErrorPage;
