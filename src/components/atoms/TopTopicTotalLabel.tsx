function TopTopicTotalLabel({ label }: { label: string }) {
  return (
    <label
      className={`p flex h-7 w-7 items-center justify-center rounded-full bg-sky-700 text-white sm:h-8 sm:w-8`}
    >
      {label}
    </label>
  );
}

export default TopTopicTotalLabel;
