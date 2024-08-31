export const Opinion = ({ opinion, index }) => {
  console.log(index);
  return (
    <div className={`max-w-[365px] flex-grow-0 md:w-[40vw] lg:w-[27vw]`}>
      <div className="flex flex-col gap-5 px-2 py-2">
        <div className="flex justify-between">
          <h3 className="text-normal font-semibold">{opinion.name}</h3>
          <img
            loading="lazy"
            src={opinion.provider === "Google" ? "google.svg" : "default.svg"}
            alt="Provider Logo"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex">
            {[...Array(opinion.stars)].map((_, index) => (
              <div key={index} className="h-6 w-6">
                <img loading="lazy" src="fullStar.svg" alt="Star" />
              </div>
            ))}
          </div>
          <span>{opinion.date}</span>
        </div>
        <div>
          <p className="text-lg">{opinion.text}</p>
        </div>
      </div>
    </div>
  );
};
