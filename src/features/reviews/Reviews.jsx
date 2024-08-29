import { Opinion } from "./Opinion";
import opinions from "../../data/opinions.json";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export const Reviews = () => {
  const [count, setCount] = useState(0);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCount((prev) => (prev < opinions.length - 1 ? prev + 1 : prev)),
    onSwipedRight: () => setCount((prev) => (prev > 0 ? prev - 1 : prev)),
    preventScrollOnSwipe: true,
    trackMouse: true, // enables swiping with mouse as well
  });

  const handlersTablet = useSwipeable({
    onSwipedLeft: () =>
      setCount((prev) => (prev + 2 < opinions.length ? prev + 2 : prev)),
    onSwipedRight: () => setCount((prev) => (prev > 1 ? prev - 2 : 0)),
    preventScrollOnSwipe: true,
    trackMouse: true, // enables swiping with mouse as well
  });

  return (
    <section className="bg-[#EEE5DA] pb-24 pt-20" id="opinions">
      <h2 className="px-[5vw] font-cinzel text-3xl lg:pl-[9.4vw] lg:text-5xl">
        OPINIE NASZYCH KLIENTÓW
      </h2>
      <img
        loading="lazy"
        src="quotes.svg"
        className="py-7 pl-[5vw] lg:pl-[9.4vw]"
        alt="quotes"
      />

      <div className="block md:hidden">
        {/* Mobile version with pagination, visible 1 item at most */}
        <div {...handlers} className="flex min-h-[500px] justify-center">
          <Opinion opinion={opinions[count]} />
        </div>

        <div className="flex justify-center px-[9vw]">
          {opinions.map((opinion, index) => (
            <div
              key={opinion.text}
              onClick={() => setCount(index)}
              className={`h-[2px] w-[70px] cursor-pointer ${count === index ? "bg-black" : "bg-[#D1B9A1]"}`}
            ></div>
          ))}
        </div>
      </div>

      <div className="hidden md:block lg:hidden">
        {/* Tablet version with pagination, visible 2 items at most */}
        <div
          {...handlersTablet}
          className="hidden min-h-[500px] md:flex md:justify-center md:px-[2vw]"
        >
          <div className="flex pb-20">
            {opinions.slice(count, count + 2).map((opinion, index) => (
              <div key={opinion.text}>
                <div className="flex">
                  <Opinion opinion={opinion} client:load />
                  <div
                    className={`${index % 2 === 0 ? "mx-5 h-auto w-[2px] border-r-2 border-[#B58C67]" : ""}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden justify-center px-[9vw] md:flex">
          {[...Array(Math.ceil(opinions.length / 2))].map((_, index) => (
            <div
              key={index}
              onClick={() => setCount(index * 2)}
              className={`h-[2px] w-[70px] ${count / 2 === index ? "bg-black" : "bg-[#D1B9A1]"}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Desktop version without pagination */}
      <div className="hidden px-[9.3vw] lg:flex 2xl:justify-center">
        {opinions.slice(0, 3).map((opinion, index) => (
          <div className="flex" key={opinion.text}>
            <div>
              <Opinion key={opinion.text} opinion={opinion} />
            </div>

            {index < 2 && (
              <div className="mx-5 h-auto w-[2px] bg-[#B58C67] 2xl:mx-16" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
