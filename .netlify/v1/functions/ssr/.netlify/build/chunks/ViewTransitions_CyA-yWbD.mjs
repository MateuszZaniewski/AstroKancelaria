import { f as createAstro, c as createComponent, r as renderTemplate, g as addAttribute } from './astro/server_Dkz4iR9-.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                        */

const $$Astro = createAstro("https://www.adwokatkomenda.pl/");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/node_modules/astro/components/ViewTransitions.astro", void 0);

export { $$ViewTransitions as $ };
