export const Category = ({ text, source, index, active, changeTab }) => {
  return (
    <div
      className={`flex w-full cursor-pointer items-center justify-center gap-5 sm:max-w-[688px] ${active === index && "bg-[#D1B9A1] sm:py-2"}`}
      onClick={() => changeTab(index)}
    >
      <div className="flex w-full items-center justify-between sm:w-[600px] lg:max-w-[400px]">
        <div className="flex items-center gap-4 px-5 py-2 sm:py-0 md:items-center">
          <img
            loading="lazy"
            src={source}
            className="h-10 w-10 lg:h-14 lg:w-14"
            alt="grafika spacjalizacji"
          />
          <h3 className="font-cinzel text-xl lg:text-2xl">{text}</h3>
        </div>
        <div className="pr-4 lg:hidden">
          <img src="/arrowDown.svg" />
        </div>
      </div>
    </div>
  );
};
