import { PaginationPost } from "../pagination/PaginationPost";
import posts from "../../../data/posts.json";

export const TabletPagination = ({ currentTabIndex, setCurrentTabIndex }) => {
  // Define how many posts to display per page
  const postsPerPage = currentTabIndex === 0 ? 4 : 8; // 4 for tab index 0, 8 for others
  const totalPosts = posts.length - 1; // Subtracting the main post
  const totalPages = Math.ceil((totalPosts - 4) / 8) + 1; // Calculate total pages (first page has 4 posts)

  // Calculate the range of posts to display for the current tab index
  const startIndex =
    currentTabIndex === 0 ? 1 : 5 + (currentTabIndex - 1) * postsPerPage; // Start at 1 for tab index 0, and 5 for others
  const endIndex = startIndex + postsPerPage; // End index based on current tab index

  return (
    <div className="pt-7 lg:pt-0">
      <div className="flex min-h-[500px] justify-center">
        {startIndex < totalPosts + 1 ? ( // +1 to account for the main post
          <div className={`grid grid-cols-2 gap-5`}>
            {posts.slice(startIndex, endIndex).map((post, index) => (
              <PaginationPost key={index} post={post} />
            ))}
          </div>
        ) : (
          <div>No Post Available</div>
        )}
      </div>

      <div className="flex items-center justify-center gap-2 pt-12">
        <div className="h-[2px] w-full bg-[#B58C67]"></div>
        <div
          onClick={() => {
            setCurrentTabIndex((prev) => (prev > 0 ? prev - 1 : prev));
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="cursor-pointer font-bold text-[#B58C67]"
        >
          &lt;
        </div>

        {/* Numeric pagination */}
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            onClick={() => {
              setCurrentTabIndex(index);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`cursor-pointer px-2 ${
              currentTabIndex === index
                ? "rounded-3xl bg-[#B58C67] px-3 py-1 text-[#EEE5DA]"
                : "rounded-3xl px-3 py-1 text-[#B58C67]"
            }`}
          >
            {index + 1}
          </div>
        ))}

        <div
          onClick={() => {
            setCurrentTabIndex((prev) =>
              prev < totalPages - 1 ? prev + 1 : prev,
            );
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="cursor-pointer font-bold text-[#B58C67]"
        >
          &gt;
        </div>
        <div className="h-[2px] w-full bg-[#B58C67]"></div>
      </div>
    </div>
  );
};
