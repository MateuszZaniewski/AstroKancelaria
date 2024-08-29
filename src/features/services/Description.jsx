export const Description = ({
  introduction,
  services,
  summary,
  active,
  index,
}) => {
  return (
    <div
      className={`${active === index ? "text-normal my-4 flex flex-col gap-4 font-normal sm:px-4 md:pr-[5.3vw] 2xl:w-[800px] 2xl:pl-[2vw]" : "hidden"}`}
    >
      <p>{introduction}</p>
      <div className="flex flex-col gap-2 pl-4">
        {services.map((service, serviceIndex) => {
          const [title, ...rest] = service.description.split(" - ");
          const description = rest.join(" - ");
          return (
            <div key={serviceIndex} className="flex flex-col gap-1">
              <span>
                &#8226; <strong>{title}</strong> - {description}
              </span>
              {service.subservices && service.subservices.length > 0 && (
                <div className="pl-6">
                  {service.subservices.map((subservice, subIndex) => (
                    <div key={subIndex} className="flex flex-row gap-1">
                      <span>&#8226; {subservice.description}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <p>{summary}</p>
    </div>
  );
};
