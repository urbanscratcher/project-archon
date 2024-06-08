import Box from "@/components/atoms/Box";
import Button from "@/components/atoms/Button";

function NotFoundPage() {
  return (
    <main className="h-screen w-screen content-center text-center align-middle">
      <Box vertical>
        <h1>Page Not Found</h1>
        <h4>Sorry, we couldn't find this page.</h4>
        <p>Please try again or go back to the previous page.</p>
        <Button>Go Back</Button>
      </Box>
    </main>
  );
}

export default NotFoundPage;
