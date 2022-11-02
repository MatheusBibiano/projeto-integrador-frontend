export function RatingTag({ type, children, className }) {
  const types = {
    veryBad:   "text-[#F82C47] border-[#F82C47] bg-[#F6DBDB]",
    bad:       "text-[#F48C06] border-[#F48C06] bg-[#F5E8DC]",
    median:    "text-[#FFC300] border-[#FFC300] bg-[#F5F1DC]",
    good:      "text-[#2DC653] border-[#2DC653] bg-[#DCF5E3]",
    excellent: "text-[#25A244] border-[#25A244] bg-[#C6ECCC]",
  };

  return (
    <div
      className={`
        border-2
        px-6
        py-1
        rounded-lg
        text-sm
        font-semibold
        max-w-fit
        ${types[type]}
        group-hover:scale-100
        ${className}
    `}
    >
      {children}
    </div>
  );
}
