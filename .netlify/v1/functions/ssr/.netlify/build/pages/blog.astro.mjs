/* empty css                                 */
import { c as createComponent, r as renderTemplate, b as addAttribute, a as renderComponent, d as renderHead, e as renderSlot, f as createAstro, m as maybeRenderHead } from '../chunks/astro/server_Bn44Kbwo.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ViewTransitions } from '../chunks/ViewTransitions_YwIEhN31.mjs';
import { $ as $$Header } from '../chunks/Header_BzWLeoHs.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<!-- Google Tag Manager --><!-- End Google Tag Manager -->${renderHead()}</head> <body> <section class="relative z-10 bg-[#EEE5DA]"> ${renderComponent($$result, "Header", $$Header, { "animate": false })} ${renderSlot($$result, $$slots["default"])} </section> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MJV6G6WP" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> </body></html>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/layouts/BlogLayout.astro", void 0);

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "BlogLayout", $$BlogLayout, { "title": "Artyku\u0142y prawne - Paulina Komenda" })} </div>`;
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
