import type { ButtonHTMLAttributes } from "react";

function Button({
  children,
  ...restProps
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...restProps}
      className={
        "text-button hover flex w-full flex-nowrap content-center items-center justify-center whitespace-nowrap rounded-full bg-sky-700 py-3 uppercase text-white hover:bg-sky-800 active:bg-sky-900 active:brightness-100 disabled:cursor-not-allowed disabled:bg-g-700"
      }
    >
      {children}
    </button>
  );
}

export default Button;
