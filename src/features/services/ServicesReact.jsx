import { useState, useEffect, useRef } from "react";
import { Category } from "./Category.jsx";
import { Description } from "./Description.jsx";
import descriptions from "../../data/descriptions.json";
import { useStore } from "@nanostores/react";
import { serviceOpen } from "../../store/store.js";

export const ServicesReact = () => {
  const activeTab = useStore(serviceOpen);
  const descriptionRefs = useRef([]);

  useEffect(() => {
    window.innerWidth >= 1024 ? serviceOpen.set(0) : serviceOpen.set(-1);
  }, []);

  const handleActiveTab = (index) => {
    serviceOpen.set(index);

    if (window.innerWidth < 1024) {
      setTimeout(() => {
        const targetRef = descriptionRefs.current[index];
        const navbar = document.querySelector("#navbar");
        const navbarHeight = navbar.getBoundingClientRect().height;

        if (targetRef) {
          const elementPosition =
            targetRef.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 50);
    }
  };

  return (
    <>
      <h2
        id="tgt"
        className="pl-5 pt-10 font-cinzel text-3xl sm:pl-10 sm:text-4xl md:pl-[9.3vw] lg:pb-14 lg:pt-20 lg:text-5xl 2xl:mx-auto 2xl:max-w-[2000px]"
      >
        ZAKRES USŁUG PRAWNYCH
      </h2>
      <div className="flex flex-col sm:items-center lg:max-w-[1440px] lg:flex-row lg:items-start 2xl:mx-auto">
        <div className="flex w-full flex-col px-5 pl-7 pt-4 sm:max-w-[90vw] sm:px-0 sm:pt-10 lg:max-w-[565px] lg:border-r-2 lg:border-[#B58C67] lg:pt-0 xl:max-w-[650px]">
          <div className="w-full sm:flex sm:w-[90vw] sm:flex-col sm:items-center md:mx-auto md:max-w-[500px] lg:ml-[9.3vw] lg:mr-[4.5vw] lg:w-[365px] lg:items-start lg:gap-6">
            {descriptions.map((disc, index) => (
              <div
                ref={(el) => (descriptionRefs.current[index] = el)}
                key={disc.name}
                id={disc.id}
              >
                <Category
                  text={disc.name}
                  source={disc.source}
                  index={index}
                  active={activeTab}
                  changeTab={handleActiveTab}
                />
                <div
                  className={`border-l-2 border-[#B58C67] pl-7 pr-[9.3vw] sm:mx-5 sm:my-4 sm:max-w-[630px] sm:pl-0 sm:pr-0 lg:hidden`}
                >
                  <Description
                    introduction={descriptions[index].introduction}
                    services={descriptions[index].services}
                    summary={descriptions[index].summary}
                    index={index}
                    active={activeTab}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block lg:w-[710px]">
          {descriptions.map((desc, index) => (
            <div
              key={desc.summary}
              className={`border-l-2 border-[#B58C67] pl-7 lg:border-none`}
            >
              <Description
                introduction={descriptions[index].introduction}
                services={descriptions[index].services}
                summary={descriptions[index].summary}
                index={index}
                active={activeTab}
                key={descriptions[index].summary}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
