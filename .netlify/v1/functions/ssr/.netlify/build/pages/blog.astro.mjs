/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as createAstro, g as addAttribute, a as renderComponent, h as renderHead, i as renderSlot } from '../chunks/astro/server_Dkz4iR9-.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$ViewTransitions } from '../chunks/ViewTransitions_CyA-yWbD.mjs';
import { $ as $$Header } from '../chunks/Header_fteIv24r.mjs';
/* empty css                                */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const $$BlogHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="pt-[15vh] px-5 pb-5 lg:gap-[4vw] lg:px-[5vw] sm:mx-auto sm:max-w-[688px] sm:px-5 md:max-w-[688px] md:px-0 lg:mx-0"> <h2 class="text-3xl font-cinzel">BLOG</h2> <!-- Will be added later when more blog post will be available --> <!-- <div class="text-sm flex gap-5 items-center">
    <span>Prawo rodzinne</span>
    <span class="bg-[#B58C67] px-2 py-1">Prawo cywilne</span>
    <span>Prawo karne</span>
  </div> --> </section>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/blog/BlogHeader.astro", void 0);

const $$Astro = createAstro("https://www.adwokatkomenda.pl/");
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml"><link rel="canonical" href="https://www.adwokatkomenda.pl/blog"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<!-- Google Tag Manager --><!-- End Google Tag Manager -->${renderHead()}</head> <body> <section class="relative z-10 bg-[#EEE5DA]"> ${renderComponent($$result, "Header", $$Header, { "animate": false })} ${renderSlot($$result, $$slots["default"])} </section> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MJV6G6WP" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> </body></html>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/layouts/BlogLayout.astro", void 0);

const posts = [
	{
		slug: "post1",
		source: "blog1.webp",
		bigsource: "blog1big.svg",
		name: "Zasady i procedury w sprawach o zasiedzenie nieruchomości 1",
		date: "10/09/2024",
		category: "Prawo cywilne",
		textShort: "Nieruchomość to świetna inwestycja - zwłaszcza w niepewnych gospodarczo czasach. Najczęściej do nabycia nieruchomości dochodzi w drodze jej kupna, jednak nie jest to jedyny sposób. Niekiedy, aby stać się jej właścicielem wystarczy posiadać określoną nieruchomość, przez sprecyzowany przez prawo czas (zasiedzenie). Jakie więc warunki należy spełnić, aby zasiedzieć nieruchomość?",
		textLong: "Zasiedzenie nieruchomości - będące jednym z najczęściej występujących w praktyce przejawów instytucji „dawności” - polega na tym, że posiadacz nieruchomości niebędący jej właścicielem, może nabyć jej prawa własności o ile posiada nieruchomość nieprzerwanie przez określony prawem czas."
	},
	{
		slug: "post2",
		source: "blog2.webp",
		bigsource: "blog2big.svg",
		name: "Rozwód: kluczowe kroki i wskazówki 2",
		date: "28/09/2024",
		category: "Prawo rodzinne"
	},
	{
		slug: "post3",
		source: "blog3.webp",
		bigsource: "blog3big.svg",
		name: "Ograniczenie i pozbawienie władzy rodzicielskiej: Co warto wiedzieć? 3",
		date: "15/10/2024",
		category: "Prawo rodzinne"
	},
	{
		slug: "post4",
		source: "blog4.svg",
		bigsource: "blog4.svg",
		name: "Zasady i procedury w sprawach o zasiedzenie nieruchomości 4",
		date: "10/09/2024",
		category: "Prawo cywilne"
	}
];

const MainArticle = () => {
  return /* @__PURE__ */ jsxs("section", { className: "pb-5 lg:w-[50vw] lg:max-w-[500px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-[688px]", children: [
      /* @__PURE__ */ jsx("div", { className: "h-full max-h-[344px] w-full max-w-[688px]", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: posts[0].bigsource,
          alt: "Blog",
          className: "h-[344px] w-[87wv] object-cover"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "w-[87wv] max-w-[688px] py-3", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: posts[0].name }),
        /* @__PURE__ */ jsxs("div", { className: "pt-1 text-sm", children: [
          /* @__PURE__ */ jsx("span", { children: posts[0].date }),
          " | ",
          /* @__PURE__ */ jsx("span", { children: posts[0].category })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-[688px]", children: /* @__PURE__ */ jsx("p", { children: posts[0].textShort }) }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto flex max-w-[688px] justify-end pt-4", children: /* @__PURE__ */ jsx("button", { className: "text-normal relative block w-fit border-b-2 border-black after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-[#B58C67] after:transition after:duration-300 after:content-[''] after:hover:scale-x-100 lg:text-xl", children: "CZYTAJ DALEJ" }) })
  ] });
};

const PaginationPost = ({ post }) => {
  return /* @__PURE__ */ jsx("div", { className: "lg:flex-grow-1 lg:max-w-auto flex h-auto max-w-[365px] cursor-pointer md:w-[40vw] lg:max-w-[270px]", children: /* @__PURE__ */ jsxs("div", { className: "flex h-fit flex-col px-2 py-2 lg:max-w-[250px]", children: [
    /* @__PURE__ */ jsx("div", { className: "w-fit pb-3 lg:w-auto", children: /* @__PURE__ */ jsx(
      "img",
      {
        loading: "lazy",
        src: post.source,
        alt: post.source,
        className: "h-full w-full object-cover"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col lg:max-w-[250px]", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold", children: post.name }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-1 text-sm lg:pt-1", children: [
        /* @__PURE__ */ jsx("span", { children: post.date }),
        "|",
        /* @__PURE__ */ jsx("span", { children: post.category })
      ] })
    ] })
  ] }) });
};

const MobilePosts = ({ currentTabIndex, setCurrentTabIndex }) => {
  return /* @__PURE__ */ jsx("div", { className: "pt-7", children: /* @__PURE__ */ jsx("div", { className: "flex justify-center lg:justify-start", children: posts.length > 0 ? /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-[5vw]", children: posts.slice(1).map((post, index) => /* @__PURE__ */ jsx(PaginationPost, { post }, index)) }) : /* @__PURE__ */ jsx("div", { children: "No Post Available" }) }) });
};

const TabletPosts = ({ currentTabIndex, setCurrentTabIndex }) => {
  return /* @__PURE__ */ jsx("div", { className: "pt-7 lg:pt-0", children: /* @__PURE__ */ jsx("div", { className: "flex justify-center lg:justify-start", children: posts.length > 0 ? (
    // +1 to account for the main post
    /* @__PURE__ */ jsx("div", { className: `grid grid-cols-2 gap-5`, children: posts.slice(1).map((post, index) => /* @__PURE__ */ jsx(PaginationPost, { post }, index)) })
  ) : /* @__PURE__ */ jsx("div", { children: "No Post Available" }) }) });
};

const ArticlesPagination = ({ currentTabIndex, setCurrentTabIndex }) => {
  return /* @__PURE__ */ jsxs("div", { className: "pb-20 lg:w-[60vw] lg:pb-0", children: [
    /* @__PURE__ */ jsx("div", { className: "sm:hidden", children: /* @__PURE__ */ jsx(
      MobilePosts,
      {
        currentTabIndex,
        setCurrentTabIndex,
        client: "load"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "hidden sm:block", children: /* @__PURE__ */ jsx(
      TabletPosts,
      {
        client: "load",
        currentTabIndex,
        setCurrentTabIndex
      }
    ) })
  ] });
};

const BlogPreview = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return /* @__PURE__ */ jsxs("section", { className: "flex flex-col px-5 pb-5 lg:flex-row lg:gap-[4vw] lg:px-[5vw]", children: [
    currentTabIndex === 0 && /* @__PURE__ */ jsx(MainArticle, { "client:load": true }),
    /* @__PURE__ */ jsx("div", { className: "hidden h-auto w-1 bg-[#B58C67] lg:block" }),
    /* @__PURE__ */ jsx(
      ArticlesPagination,
      {
        currentTabIndex,
        setCurrentTabIndex,
        "client:load": true
      }
    )
  ] });
};

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "BlogLayout", $$BlogLayout, { "title": "Artyku\u0142y prawne - Paulina Komenda" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogHeader", $$BlogHeader, {})} <div class="flex flex-col gap-10 mt-10"> ${renderComponent($$result2, "BlogPreview", BlogPreview, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/blog/BlogPreview", "client:component-export": "BlogPreview" })} </div> ` })} </div>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/blog.astro", void 0);

const $$file = "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
