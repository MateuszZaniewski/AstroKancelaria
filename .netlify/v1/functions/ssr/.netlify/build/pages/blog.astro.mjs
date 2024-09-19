/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, d as addAttribute, a as renderComponent, e as renderHead, f as renderSlot } from '../chunks/astro/server_cRt1WtEO.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { $ as $$ViewTransitions } from '../chunks/ViewTransitions_R7RLEQkM.mjs';
import { $ as $$Header, a as $$CtaButton } from '../chunks/Header_DpRXkbWc.mjs';
export { renderers } from '../renderers.mjs';

const $$BlogHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="pt-[15vh] flex flex-wrap justify-between pb-10 px-5"> <h2 class="text-3xl font-cinzel">BLOG</h2> <div class="text-sm flex gap-5 items-center"> <span>Prawo rodzinne</span> <span class="bg-[#B58C67] px-2 py-1">Prawo cywilne</span> <span>Prawo karne</span> </div> </section>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/blog/BlogHeader.astro", void 0);

const $$Astro$1 = createAstro("https://kancelaria-paulinakomenda.netlify.app/");
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Preconnect to Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Preload Fonts --><link rel="preload" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"><link rel="preload" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"><!-- Fallback if JS is disabled -->${maybeRenderHead()}<noscript><link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" rel="stylesheet"></noscript><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<!-- Google Tag Manager --><!-- End Google Tag Manager -->${renderHead()}</head> <body class="overflow-hidden animate-animateNoScroll"> <section class="relative z-10 bg-[#EEE5DA]"> ${renderComponent($$result, "Header", $$Header, { "animate": false })} ${renderSlot($$result, $$slots["default"])} </section> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MJV6G6WP" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> </body></html>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/layouts/BlogLayout.astro", void 0);

const posts = [
	{
		source: "blog1.png",
		name: "Zasady i procedury w sprawach o zasiedzenie nieruchomości",
		date: "10/09/2024",
		category: "Prawo cywilne",
		textShort: "Nieruchomość to świetna inwestycja - zwłaszcza w niepewnych gospodarczo czasach. Najczęściej do nabycia nieruchomości dochodzi w drodze jej kupna, jednak nie jest to jedyny sposób. Niekiedy, aby stać się jej właścicielem wystarczy posiadać określoną nieruchomość, przez sprecyzowany przez prawo czas (zasiedzenie). Jakie więc warunki należy spełnić, aby zasiedzieć nieruchomość?",
		textLong: "Zasiedzenie nieruchomości - będące jednym z najczęściej występujących w praktyce przejawów instytucji „dawności” - polega na tym, że posiadacz nieruchomości niebędący jej właścicielem, może nabyć jej prawa własności o ile posiada nieruchomość nieprzerwanie przez określony prawem czas."
	},
	{
		source: "blog2.png",
		name: "Rozwód: kluczowe kroki i wskazówki",
		date: "28/09/2024",
		category: "Prawo rodzinne"
	},
	{
		source: "blog3.png",
		name: "Ograniczenie i pozbawienie władzy rodzicielskiej: Co warto wiedzieć?",
		date: "15/10/2024",
		category: "Prawo rodzinne"
	},
	{
		source: "blog2.png",
		name: "Zasady i procedury w sprawach o zasiedzenie nieruchomości",
		date: "10/09/2024",
		category: "Prawo cywilne"
	}
];

const $$BlogPreview = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="px-5 pb-5"> <div class="w-full h-full max-w-[688px] max-h-[344px]"> <img src="/blog1HighRes.png" class="w-full h-full"> </div> <div class="py-3"> <h2 class="text-lg font-semibold">${posts[0].name}</h2> <div class="text-sm pt-1"> <span>${posts[0].date}</span> |
<span>${posts[0].category}</span> </div> </div> <div> <p>${posts[0].textShort}</p> </div> <div class="flex justify-end"> ${renderComponent($$result, "CtaButton", $$CtaButton, { "text": "CZYTAJ DALEJ", "variant": "outlined" })} </div> </section>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/blog/BlogPreview.astro", void 0);

const $$Astro = createAstro("https://kancelaria-paulinakomenda.netlify.app/");
const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "BlogLayout", $$BlogLayout, { "title": "Artyku\u0142y prawne - Paulina Komenda" }, { "default": ($$result2) => renderTemplate` <main class="min-h-screen w-full"> ${renderComponent($$result2, "BlogHeader", $$BlogHeader, {})} ${renderComponent($$result2, "BlogPreview", $$BlogPreview, {})} </main> ` })} </div>`;
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
