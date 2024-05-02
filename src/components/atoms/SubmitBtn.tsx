// @ts-expect-error
import { useFormStatus } from "react-dom";

function SubmitBtn({
  isValid,
  className,
}: {
  isValid: boolean;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={className || ""}
      disabled={pending || !isValid}
    >
      {pending ? "sending..." : "subscribe"}
    </button>
  );
}

export default SubmitBtn;
