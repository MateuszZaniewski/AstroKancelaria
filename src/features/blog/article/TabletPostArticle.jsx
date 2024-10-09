import { PaginationPost } from "../pagination/PaginationPost";
import posts from "../../../data/posts.json";

export const TabletPostArticle = ({
  currentTabIndex,
  setCurrentTabIndex,
  blog,
  slugC,
}) => {
  return (
    <div className={`pt-7 lg:pt-0`}>
      {blog && (
        <div className="flex w-full justify-center text-center">
          <span className="pb-8 pt-14 text-center font-cinzel text-3xl">
            INNE ARTYKUŁY
          </span>
        </div>
      )}
      <div
        className={`flex justify-center lg:justify-start ${blog ? "w-screen max-w-[1440px] lg:justify-center" : ""}`}
      >
        {posts.length > 0 ? ( // +1 to account for the main post
          <div className={`grid grid-cols-2 gap-5`}>
            {posts
              .filter((post) => post.slug !== slugC)
              .map((post, index) => (
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
