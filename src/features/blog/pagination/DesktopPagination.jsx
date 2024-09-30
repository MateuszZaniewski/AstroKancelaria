import React from "react";
import { Post } from "../Post";
import posts from "../../../data/posts.json";

export const DesktopPagination = () => {
  return (
    <div className="hidden h-full flex-1 px-[9.3vw] pt-16 lg:flex 2xl:mx-auto 2xl:max-w-[2000px] 2xl:justify-center">
      {posts.slice(0, 3).map((post, index) => (
        <div className="flex" key={index}>
          <div>
            <Post post={post} />
          </div>
          {index < 2 && (
            <div className="mx-5 h-auto w-[2px] bg-[#B58C67] 2xl:mx-16" />
          )}
        </div>
      ))}
    </div>
  );
};
