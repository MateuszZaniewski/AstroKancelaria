import posts from "../../../data/posts.json";

export const MainArticle = () => {
  return (
    <section className="pb-5 lg:w-[50vw] lg:max-w-[500px]">
      <div className="mx-auto max-w-[688px]">
        <div className="h-full max-h-[344px] w-full max-w-[688px]">
          <img
            src={`/${posts[0].source}`}
            alt="Blog"
            className="h-[344px] w-[87wv] object-cover"
          />
        </div>
        <div className="w-[87wv] max-w-[688px] py-3">
          <h2 className="text-lg font-semibold">{posts[0].name}</h2>
          <div className="pt-1 text-sm">
            <span>{posts[0].date}</span> | <span>{posts[0].category}</span>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[688px]">
        <p>{posts[0].textShort}</p>
      </div>
      <div className="mx-auto flex max-w-[688px] justify-end pt-4">
        <a
          href={`/blog/${posts[0].slug}`}
          className="text-normal relative block w-fit border-b-2 border-black after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-[#B58C67] after:transition after:duration-300 after:content-[''] after:hover:scale-x-100 lg:text-xl"
        >
          CZYTAJ DALEJ
        </a>
      </div>
    </section>
  );
};
