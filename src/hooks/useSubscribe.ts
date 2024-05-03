import { sendEmail } from "@/actions/sendEmail";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type SubmitSuccess = {
  status: "success";
  message: string;
};

type SubmitError = {
  status: "fail";
  message: string;
  error?: string;
};

export type SubmitState = SubmitSuccess | SubmitError | null;

export default function useSubscribe() {
  const queryClient = useQueryClient();

  const { isPending, mutate, mutateAsync, isError } = useMutation({
    mutationFn: sendEmail,
    onSuccess: (data) => {
      console.log("success");
    },
    onError: (error) => {
      console.error("error: ", error.message);
    },
    onSettled: () => {
      console.log("execute without regard for the result");
    },
  });

  return { mutateAsync, mutate, isPending, isError };
}
