export const Post = ({ post, blog = false }) => {
  return (
    <a href={`/blog/${post.slug}`} className="blogpost">
      <div
        className={`lg:flex-grow-1 flex h-auto max-w-[365px] cursor-pointer md:w-[40vw] lg:w-[27vw]`}
      >
        <div className="flex flex-col px-2 py-2">
          <div className="w-fit pb-3">
            <img
              loading="lazy"
              src={post.source}
              alt={post.source}
              className={
                blog
                  ? "lg:max-h-[200px] lg:min-w-[250px]"
                  : "h-[383px] w-[345px] object-cover"
              }
            />
          </div>
          <div className="flex h-full flex-col justify-between">
            <h2 className="text-lg font-bold">{post.name}</h2>
            <div className="flex gap-1 text-sm lg:pt-1">
              <span>{post.date}</span>|<span>{post.category}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
