import { MainArticle } from "./article/MainArticle.jsx";
import { ArticlesPagination } from "./article/ArticlesPagination.jsx";
import { useState } from "react";

export const BlogPreview = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <section className="flex flex-col bg-[#EEE5DA] px-5 pb-5 lg:flex-row lg:gap-[4vw] lg:px-[5vw]">
      {currentTabIndex === 0 && <MainArticle client:load />}
      <div className="hidden h-auto w-1 bg-[#B58C67] lg:block"></div>
      <ArticlesPagination
        currentTabIndex={currentTabIndex}
        setCurrentTabIndex={setCurrentTabIndex}
        client:load
        blog={false}
      />
    </section>
  );
};
