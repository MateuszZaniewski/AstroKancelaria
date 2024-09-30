import { PaginationPost } from "./PaginationPost";
import posts from "../../../data/posts.json";

export const TabletPosts = ({ currentTabIndex, setCurrentTabIndex }) => {
  return (
    <div className="pt-7 lg:pt-0">
      <div className="flex justify-center lg:justify-start">
        {posts.length > 0 ? ( // +1 to account for the main post
          <div className={`grid grid-cols-2 gap-5`}>
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
