"use client";

import Box from "@/components/atoms/Box";
import Button from "@/components/atoms/Button";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

function ErrorMessage({
  mainMessage,
  subMessage,
  actionMessage,
}: {
  mainMessage: string;
  subMessage: string;
  actionMessage: string;
}) {
  const router = useRouter();
  return (
    <Box vertical className="max-w-[720px]">
      <h1 className="border-b border-b-g-200 px-4 py-8">{mainMessage}</h1>
      <Box vertical className="gap-4 p-4">
        <h4 className="font-sans text-g-800">{subMessage}</h4>
        <p className="p-lg font-sans text-g-700">{actionMessage}</p>
        <Box horizontal className="max-w-[140px]">
          <Button onClick={() => router.back()}>
            <IoArrowBack />
            &nbsp;Go Back
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ErrorMessage;
