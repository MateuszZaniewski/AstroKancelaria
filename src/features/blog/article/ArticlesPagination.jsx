import { Pagination } from "../pagination/Pagination";
import { TabletPagination } from "../pagination/TabletPagination";

export const ArticlesPagination = ({ currentTabIndex, setCurrentTabIndex }) => {
  return (
    <div className="pb-20 lg:w-[60vw]">
      <div className="sm:hidden">
        <Pagination
          currentTabIndex={currentTabIndex}
          setCurrentTabIndex={setCurrentTabIndex}
          client="load"
        />
      </div>
      <div className="hidden sm:block">
        <TabletPagination
          client="load"
          currentTabIndex={currentTabIndex}
          setCurrentTabIndex={setCurrentTabIndex}
        />
      </div>
    </div>
  );
};
