import { PaginationPost } from "./PaginationPost";
import posts from "../../../data/posts.json"; // Importing posts data

export const MobilePosts = ({ currentTabIndex, setCurrentTabIndex, blog }) => {
  return (
    <div className="pt-7">
      {blog && (
        <div className="px-[5vw] pb-6 pt-14 font-cinzel text-3xl md:max-w-[700px]">
          <span>INNE ARTYKUŁY</span>
        </div>
      )}
      <div className="flex justify-center lg:justify-start">
        {posts.length > 0 ? (
          <div className="flex flex-col gap-[5vw]">
            {posts.slice(1).map((post, index) => (
              <PaginationPost key={index} post={post} />
            ))}
          </div>
        ) : (
          <div>No Post Available</div>
        )}
      </div>
    </div>
  );
};
