/* empty css                                 */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, e as renderHead, f as renderSlot } from '../chunks/astro/server_cRt1WtEO.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$ViewTransitions } from '../chunks/ViewTransitions_R7RLEQkM.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://kancelaria-paulinakomenda.netlify.app/");
const $$RodoLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RodoLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Preconnect to Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Preload Fonts --><link rel="preload" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"><link rel="preload" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"><!-- Fallback if JS is disabled -->${maybeRenderHead()}<noscript><link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" rel="stylesheet"></noscript><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}<!-- Google Tag Manager --><!-- End Google Tag Manager -->${renderHead()}</head> <body class="bg-[#EEE5DA]"> ${renderSlot($$result, $$slots["default"])} <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MJV6G6WP" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> </body></html>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/layouts/RodoLayout.astro", void 0);

const $$Rodo = createComponent(($$result, $$props, $$slots) => {
  const headerStyle = "font-cinzel font-semibold text-left pt-4 pb-3";
  return renderTemplate`${renderComponent($$result, "RodoLayout", $$RodoLayout, { "title": "Rodo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-5 min-h-screen px-4 max-w-[600px] mx-auto text-justify" id="rodo"> <h1 class="pb-5 font-cinzel font-semibold text-center">
INFORMACJA DOTYCZĄCA PRZETWARZANIA DANYCH OSOBOWYCH PRZEZ ADMINISTRATORA
</h1> <div> <header${addAttribute(`${headerStyle}`, "class")}>I. Administrator danych osobowych</header> <p>
Administratorem danych osobowych jest Paulina Komenda prowadząca
        działalność gospodarczą pod nazwą Kancelaria Adwokacka Adwokat Paulina
        Komenda z siedzibą przy ul. Sienkiewicza 55A lok 90, 15-002 Białystok, e
        - mail: adw.komenda@gmail.com
</p> </div> <div> <header${addAttribute(`${headerStyle}`, "class")}>II. Cele i podstawy przetwarzania</header> <p>
Dane osobowe przetwarzane będą w celu udzielenia porady prawnej,
        konsultacji, sporządzenia opinii prawnej lub prowadzenia sprawy i
        zabezpieczenia roszczeń Administratora związanych z jej dokonaniem -
        podstawa przetwarzania z art. 6 ust. 1 lit. f rozporządzenia Parlamentu
        Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
        ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w
        sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy
        95/46/WE [dalej: RODO].
</p> </div> <div> <header${addAttribute(`${headerStyle}`, "class")}>III. Odbiorcy danych osobowych</header> <p>
Dane osobowe mogą być udostępniane podmiotowi przetwarzającemu dane
        osobowe na zlecenie Administratora w związku z wykonywaniem usług
        informatycznych i usług księgowych, przy czym podmiot ten przetwarza
        dane na podstawie umowy z Administratorem i wyłącznie zgodnie z
        poleceniem Administratora.
</p> </div> <div> <header${addAttribute(`${headerStyle}`, "class")}>
IV. Okres przechowywania danych osobowych
</header> <p>
Pani/Pana dane osobowe będą przechowywane przez okres wynikający z
        przepisów będących podstawą przetwarzania danych oraz na czas trwania
        usprawiedliwionego interesu Administratora, o którym mowa powyżej, tj
        przez czas przedawnienia roszczeń.
</p> </div> <div> <header${addAttribute(`${headerStyle}`, "class")}>
V. Prawa osób, których dane dotyczą
</header> <p class="text-left">
Osobie, której dane dotyczą przysługuje:
<br> <span>• prawo żądania od Administratora dostępu do swoich danych osobowych
          oraz otrzymania ich kopii, ich sprostowania (poprawiania) oraz w
          przypadkach określonych przez RODO prawo do usunięcia lub ograniczenia
          przetwarzania danych osobowych,</span> <br> <span>• prawo przenoszenia danych w przypadkach określonych przez RODO,</span> <br> <span>• prawo wniesienia skargi do organu nadzorczego, tj. Prezesa Urzędu
          Ochrony Danych Osobowych,</span> <br> <span>• prawo wniesienia sprzeciwu wobec przetwarzania ze względu na
          szczególną sytuację (o ile przetwarzanie odbywa się na podstawie
          prawnie uzasadnionego interesu),</span> <br> <span>• prawo cofnięcia w dowolnym momencie zgody na przetwarzanie danych
          osobowych (o ile przetwarzanie odbywa się na podstawie zgody).</span> </p> </div> <div> <header${addAttribute(`${headerStyle}`, "class")}>
VI. Informacja o wymogu podania danych
</header> <p>
Podanie danych jest warunkiem niezbędnym do udzielenia porady prawnej,
        sporządzenia opinii lub prowadzenia sprawy.
</p> </div> <div> <header${addAttribute(`${headerStyle}`, "class")}>VII. Inne informacje</header> <p>
Dane osobowe nie będą przekazywane do państwa trzeciego i nie podlegają
        zautomatyzowanemu podejmowaniu decyzji, w tym profilowaniu.
</p> </div> </section> ` })}`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/rodo.astro", void 0);

const $$file = "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/rodo.astro";
const $$url = "/rodo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Rodo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
