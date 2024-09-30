import { PaginationPost } from "../pagination/PaginationPost";
import posts from "../../../data/posts.json";

export const Pagination = ({ currentTabIndex, setCurrentTabIndex }) => {
  // Create a new array without the first element (main article)
  const postsWithoutMain = posts.slice(1); // Skipping the main article
  const postsPerPage = 4; // Number of posts displayed for tab index 0 (below main article)
  const totalPosts = postsWithoutMain.length; // Total posts without main post
  const totalPages = Math.ceil(totalPosts / postsPerPage); // Calculate total pages

  // Calculate the range of posts to display for the current tab index
  const startIndex = currentTabIndex * postsPerPage; // Start index based on current tab
  const endIndex = startIndex + postsPerPage; // End index based on current tab

  return (
    <div className="pt-7">
      <div className="flex min-h-[500px] justify-center">
        {startIndex < totalPosts ? ( // Check if start index is within range
          <div className="flex flex-col gap-5">
            {postsWithoutMain.slice(startIndex, endIndex).map((post, index) => (
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
