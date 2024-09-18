import { serviceOpen } from "../../store/store";
export const Description = ({
  introduction,
  services,
  summary,
  active,
  index,
}) => {
  return (
    <div
      className={`${serviceOpen.get() === index ? "text-normal my-4 flex flex-col gap-4 font-normal sm:px-4 md:pr-[5.3vw] lg:my-0 lg:pt-2 2xl:w-[800px] 2xl:pl-[2vw]" : "hidden"}`}
    >
      <p>{introduction}</p>
      <div className="flex flex-col gap-2">
        {services.map((service, serviceIndex) => {
          const [title, ...rest] = service.description.split(" - ");
          return (
            <div key={serviceIndex} className="flex flex-col gap-1">
              <span>
                &#8226; <strong>{title}</strong>
              </span>
            </div>
          );
        })}
      </div>
      <p>{summary}</p>
    </div>
  );
};
