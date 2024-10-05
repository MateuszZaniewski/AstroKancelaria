export const PaginationPost = ({ post }) => {
  return (
    <div className="lg:flex-grow-1 lg:max-w-auto flex h-auto max-w-[365px] cursor-pointer md:w-[40vw] lg:max-w-[270px]">
      <a href={`/blog/${post.slug}`} aria-label="link to blog post">
        <div className="flex h-fit flex-col px-2 py-2 lg:max-w-[250px]">
          <div className="w-fit pb-3 lg:w-auto">
            <img
              loading="lazy"
              src={`/${post.source}`}
              alt={post.source}
              className="h-full w-full object-cover"
              aria-label="blog post image"
            />
          </div>
          <div className="flex h-full flex-col lg:max-w-[250px]">
            <h2 className="text-lg font-bold">{post.name}</h2>
            <div className="flex gap-1 text-sm lg:pt-1">
              <span>{post.date}</span>|<span>{post.category}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
