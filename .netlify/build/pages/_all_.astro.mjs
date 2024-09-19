/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_cRt1WtEO.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Index } from '../chunks/index_Cj1jhjJY.mjs';
export { renderers } from '../renderers.mjs';

const getStaticPaths = () => [
  { params: { all: "about" } },
  { params: { all: "dashboard" } }
];
const $$all = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "App", $$Index, {})}`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/[all].astro", void 0);

const $$file = "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/[all].astro";
const $$url = "/[all]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$all,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
