import { Post } from "./Post";
import posts from "../../data/posts.json";
import { useSwipeable } from "react-swipeable";
import { useState } from "react";

export const Blog = () => {
  const [count, setCount] = useState(0);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCount((prev) => (prev < posts.length - 1 ? prev + 1 : prev)),
    onSwipedRight: () => setCount((prev) => (prev > 0 ? prev - 1 : prev)),
    preventScrollOnSwipe: true,
    trackMouse: true, // enables swiping with mouse as well
  });

  const handlersTablet = useSwipeable({
    onSwipedLeft: () =>
      setCount((prev) => (prev + 2 < posts.length ? prev + 2 : prev)),
    onSwipedRight: () => setCount((prev) => (prev > 1 ? prev - 2 : 0)),
    preventScrollOnSwipe: true,
    trackMouse: true, // enables swiping with mouse as well
  });

  return (
    <section className="bg-[#EEE5DA] pb-24 pt-20" id="blog">
      <div className="flex items-center justify-between px-[5vw] lg:px-[9.4vw]">
        <h2 className="font-cinzel text-3xl lg:text-5xl">BLOG</h2>
        <span className="text-normal relative block w-fit cursor-pointer border-b-[2px] border-black after:absolute after:block after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#B58C67] after:transition after:duration-300 after:content-[''] after:hover:scale-x-100">
          WSZYSTKIE WPISY
        </span>
      </div>
      <div className="block pt-7 md:hidden">
        {/* Mobile version with pagination, visible 1 item at most */}
        <div {...handlers} className="flex min-h-[500px] justify-center">
          <Post post={posts[count]} />
        </div>

        <div className="flex justify-center px-[9vw] pt-12">
          {posts.map((_, index) => (
            <div
              key={index}
              onClick={() => setCount(index)}
              className={`h-[2px] w-[70px] cursor-pointer ${count === index ? "bg-black" : "bg-[#D1B9A1]"}`}
            ></div>
          ))}
        </div>
      </div>

      <div className="hidden pt-10 md:block lg:hidden">
        {/* Tablet version with pagination, visible 2 items at most */}
        <div
          {...handlersTablet}
          className="hidden min-h-[500px] md:flex md:justify-center md:px-[2vw]"
        >
          <div className="flex pb-20">
            {posts.slice(count, count + 2).map((post, index) => (
              <div key={index}>
                <div className="flex">
                  <Post post={post} client:load />
                  <div
                    className={`${index % 2 === 0 ? "mx-5 h-auto w-[2px] border-r-2 border-[#B58C67]" : ""}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden justify-center px-[9vw] md:flex">
          {[...Array(Math.ceil(posts.length / 2))].map((_, index) => (
            <div
              key={index}
              onClick={() => setCount(index * 2)}
              className={`h-[2px] w-[70px] ${count / 2 === index ? "bg-black" : "bg-[#D1B9A1]"}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Desktop version without pagination */}
      <div className="hidden h-full flex-1 px-[9.3vw] pt-16 lg:flex 2xl:justify-center">
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
    </section>
  );
};
