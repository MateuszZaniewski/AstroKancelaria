import { MobilePosts } from "../pagination/MobilePosts";
import { TabletPosts } from "../pagination/TabletPosts";
import { TabletPostArticle } from "./TabletPostArticle";

export const ArticlesPagination = ({
  currentTabIndex,
  setCurrentTabIndex,
  blog,
  slugC = "",
  blogHead = false,
}) => {
  return (
    <div className="pb-20 lg:w-[60vw] lg:pb-0">
      <div className="sm:hidden">
        <MobilePosts
          currentTabIndex={currentTabIndex}
          setCurrentTabIndex={setCurrentTabIndex}
          client="load"
          blog={blog}
          slugC={slugC}
        />
      </div>
      <div className="hidden sm:block">
        {blogHead ? (
          <TabletPosts
            client="load"
            currentTabIndex={currentTabIndex}
            setCurrentTabIndex={setCurrentTabIndex}
            blog={blog}
            slugC={slugC}
          />
        ) : (
          <TabletPostArticle
            client="load"
            currentTabIndex={currentTabIndex}
            setCurrentTabIndex={setCurrentTabIndex}
            blog={blog}
            slugC={slugC}
          />
        )}
      </div>
    </div>
  );
};
