export const Pagination = ({
  currentTabIndex,
  setCurrentTabIndex,
  totalPages,
}) => {
  return (
    <div className="flex items-center justify-center gap-2 pt-12">
      <div className="h-[2px] w-full bg-[#B58C67]"></div>
      <div
        onClick={() => {
          setCurrentTabIndex((prev) => (prev > 0 ? prev - 1 : prev));
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="cursor-pointer font-bold text-[#B58C67]"
      >
        &lt;
      </div>

      {/* Numeric pagination */}
      {Array.from({ length: totalPages }, (_, index) => (
        <div
          key={index}
          onClick={() => {
            setCurrentTabIndex(index);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`cursor-pointer px-2 ${
            currentTabIndex === index
              ? "rounded-3xl bg-[#B58C67] px-3 py-1 text-[#EEE5DA]"
              : "rounded-3xl px-3 py-1 text-[#B58C67]"
          }`}
        >
          {index + 1}
        </div>
      ))}

      <div
        onClick={() => {
          setCurrentTabIndex((prev) =>
            prev < totalPages - 1 ? prev + 1 : prev,
          );
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="cursor-pointer font-bold text-[#B58C67]"
      >
        &gt;
      </div>
      <div className="h-[2px] w-full bg-[#B58C67]"></div>
    </div>
  );
};
