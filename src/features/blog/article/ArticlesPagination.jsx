import { MobilePosts } from "../pagination/MobilePosts";
import { TabletPosts } from "../pagination/TabletPosts";

export const ArticlesPagination = ({ currentTabIndex, setCurrentTabIndex }) => {
  return (
    <div className="pb-20 lg:w-[60vw] lg:pb-0">
      <div className="sm:hidden">
        <MobilePosts
          currentTabIndex={currentTabIndex}
          setCurrentTabIndex={setCurrentTabIndex}
          client="load"
        />
      </div>
      <div className="hidden sm:block">
        <TabletPosts
          client="load"
          currentTabIndex={currentTabIndex}
          setCurrentTabIndex={setCurrentTabIndex}
        />
      </div>
    </div>
  );
};
