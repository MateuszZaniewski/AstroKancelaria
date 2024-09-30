import { PaginationPost } from "./PaginationPost";
import posts from "../../../data/posts.json"; // Importing posts data

export const MobilePosts = ({ currentTabIndex, setCurrentTabIndex }) => {
  return (
    <div className="pt-7">
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
