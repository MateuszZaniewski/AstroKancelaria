import { useEffect, useState } from "react";

export const Post = ({ post }) => {
  const [animationClass, setAnimationClass] = useState("opacity-0");

  useEffect(() => {
    setAnimationClass("opacity-0");
    const timer = setTimeout(() => {
      setAnimationClass("animate-slideInFromRight");
    }, 50);
    return () => clearTimeout(timer);
  }, [post]);

  return (
    <div
      className={`${animationClass} flex h-auto max-w-[365px] flex-grow-0 cursor-pointer transition-opacity duration-500 md:w-[40vw] lg:w-[27vw]`}
    >
      <div className="flex flex-col px-2 py-2">
        <div className="pb-3">
          <img loading="lazy" src={post.source} alt={post.source} />
        </div>
        <div className="flex h-full flex-col justify-between">
          <h4 className="text-lg font-bold">{post.name}</h4>
          <div className="flex gap-1 text-sm lg:pt-1">
            <span>{post.date}</span>|<span>{post.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
