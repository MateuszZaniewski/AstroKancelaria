/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, b as createAstro, f as renderSlot, e as renderHead } from './astro/server_cRt1WtEO.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$CtaButton, $ as $$Header } from './Header_DpRXkbWc.mjs';
import 'clsx';
import { $ as $$ViewTransitions } from './ViewTransitions_R7RLEQkM.mjs';
import { jsx } from 'react/jsx-runtime';
import { atom } from 'nanostores';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`bg-[url('/t\u0142oMobile.svg')] md:bg-[url('/t\u0142oLg.svg')] lg:bg-[url('/t\u0142oLg.svg')] xl:bg-[url('/t\u0142o.svg')] min-h-[100vh] min-h-screen w-auto bg-cover bg-center md:bg-right-top lg:bg-right-top xl:bg-top xl:max-w-[2600px] xl:mx-auto`, "class")}> <div class="flex flex-col items-center justify-between min-h-screen xl:mr-[16vw]"> <div class="w-full px-12 md:px-0 lg:px-12 pt-[13.062vh] md:pl-[2vw] lg:w-[1100px] lg:mr-0 2xl:max-w-[2000px] 2xl:pt-60 2xl:pr-80 h-full"> <div class="flex justify-center pb-[4.7vh] max-w-[400px] mx-auto lg:mx-0 lg:max-w-[770px] md:mx-0"> <img src="adwokatura.svg" class="lg:w-32 lg:h-32 md:w-24 md:h-24 w-[36.923vw] h-[17.062vh] max-w-[144px] md:max-w-full" alt="logo-adwokatura"> </div> <div class="flex flex-col gap-[4.7vh] text-center pb-[6.4vh] max-w-[400px] md:max-w-[400px] mx-auto lg:justify-start lg:mx-0 lg:max-w-[770px] md:mx-0"> <h1 class="font-cinzel leading-[1.2] 2xl:text-6xl lg:text-5xl md:text-[40px] text-[30px]" aria-label="Kancelaria adwokacka">
Kancelaria adwokacka
</h1> <h1 class="font-cinzel leading-[1.2] 2xl:text-6xl lg:text-5xl md:text-[40px] text-[30px] xl:hidden" aria-label="Adwokat Paulina komenda">
Adwokat <br> Paulina komenda
</h1> <h1 class="hidden xl:block font-cinzel leading-[1.2] 2xl:text-6xl lg:text-5xl md:text-[40px] text-[30px]" aria-label="Adwokat Paulina komenda">
Adwokat Paulina komenda
</h1> </div> <div class="flex flex-col items-center gap-[3.5vh] justify-center md:max-w-[400px] lg:max-w-[770px] lg:flex-row lg:gap-12"> <a href="#contact" class="nav-link" aria-label="Kontakt"> ${renderComponent($$result, "CtaButton", $$CtaButton, { "text": "SKONTAKTUJ SI\u0118", "variant": "contain" })} </a> <a href="#services" class="nav-link" aria-label="Usługi prawne"> ${renderComponent($$result, "CtaButton", $$CtaButton, { "text": "US\u0141UGI PRAWNE", "variant": "outlined" })} </a> </div> </div> <!-- Animate to this point --> <div class="flex items-end h-full sm:h-24 mt-8 md:h-16 w-4 md:hidden"> <div class="bg-[#B58C67] w-[2px] h-16 relative overflow-hidden"> <div class="bg-[#0E1F2A] w-[2px] rounded-full h-4 absolute -top-4 left-0 animate-animateLine"></div> </div> </div> </div> </div> `;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/hero/hero.astro", void 0);

const $$Astro$3 = createAstro("https://kancelaria-paulinakomenda.netlify.app/");
const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Heading;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2${addAttribute(`text-3xl font-cinzel pb-7 pl-[9.4vw] lg:pl-0 sm:pl-10 lg:text-5xl 2xl:max-w-[1600px] 2xl:mx-auto`, "class")}> ${text} </h2>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/ui/Heading.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#0E1F2A] text-[#B58C67] pt-20 pb-10 lg:pb-32 md:px-[9.3vw]" id="about"> ${renderComponent($$result, "Heading", $$Heading, { "text": "O MNIE" })} <div class="flex flex-col-reverse lg:flex-row lg:gap-12 gap-7 sm:gap-10 2xl:max-w-[1600px] 2xl:mx-auto"> <div class="max-w-[596px] sm:max-w-[760px] sm:mx-auto sm:px-[10vw] px-[5vw] lg:px-0 lg:pt-14"> <h3 class="text-normal sm:text-xl pb-5 lg:pb-10">
Nazywam się Paulina Komenda, jestem adwokatem w Izbie Adwokackiej w
        Białymstoku.
</h3> <div class="flex flex-col gap-5 text-normal sm:text-lg"> <p>
W 2018 roku ukończyłam studia na Wydziale Prawa na Uniwersytecie w
          Białymstoku. W latach 2019 - 2021 odbyłam aplikację adwokacką w
          Białostockiej Izbie Adwokackiej, w 2022 roku zdałam egzamin zawodowy i
          zostałam wpisana na listę adwokatów Izby Adwokackiej w Białymstoku.
</p> <p>
Specjalizuję się w prowadzeniu spraw z zakresu prawa rodzinnego,
          cywilnego, spadkowego i karnego. Posiadam doświadczenie w prowadzeniu
          spraw w trybie konwencji haskiej dotyczących cywilnych aspektów
          uprowadzenia dziecka za granicę.
</p> <p>
Do każdej sprawy podchodzę indywidualnie. Celem kancelarii jest
          zapewnienie kompleksowej pomocy prawnej wszystkim, którzy jej
          potrzebują, w formie i zakresie dostosowanym do sytuacji Klienta.
</p> <a href="#contact" class="nav-link max-w-fit pt-5"> ${renderComponent($$result, "CtaButton", $$CtaButton, { "text": "SKONTAKTUJ SI\u0118", "variant": "contain" })} </a> </div> </div> <div class="pl-[9.4vw] sm:flex sm:justify-center sm:pl-0"> <div class="border-l-2 border-[#B58C67] pl-3 md:pl-5 lg:pl-[3.3vw] lg:h-fit"> <img src="/PaulinaKomendaUpScaling.jpg" alt="Paulina Komenda" class="w-[77vw] lg:w-[35vw] lg:h-fit max-w-[313px] sm:max-w-[350px] min-w-[250px] md:w-[50vw] md:max-w-[500px] md:max-h-[640px]"> </div> </div> </div> </section>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/about/about.astro", void 0);

const serviceOpen = atom(-1);

const FooterLink = ({ linkTo, children, tabNum }) => {
  const handleClick = (e) => {
    e.preventDefault();
    serviceOpen.set(tabNum);
  };
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: linkTo,
      className: "text-normal nav-link cursor-pointer hover:font-semibold focus:border-[#533630] active:text-[#D9C6AF]",
      onClick: handleClick,
      children
    }
  );
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const containerStyle = "flex flex-col pl-[5vw] max-w-[440px] sm:max-w-full xl:min-w-[260px] min-w-fit";
  const headingStyle = "pb-4 font-cinzel text-2xl";
  const elementsStyle = "grid grid-cols-2 grid-rows-auto gap-x-10 gap-y-7 sm:flex sm:flex-col sm:gap-5 ";
  const linkStyles = "hover:font-semibold cursor-pointer text-normal active:text-[#D9C6AF] focus:border-[#533630] nav-link";
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#0E1F2A] pt-5 md:pt-14 lg:pt-20 pb-5 text-[#B58C67]"> <div class="px-[5vw] lg:px-0 lg:pl-[9.3vw] pb-16"> <h2 class="text-4xl font-cinzel">PAULINA KOMENDA</h2> <h2 class="text-2xl font-cinzel">KANCELARIA ADWOKACKA</h2> </div> <div class="flex flex-col sm:flex-row sm:flex-wrap sm:justify-start sm:gap-x-12 sm:gap-y-5 md:justify-start md:pr-2 lg:justify-center"> <!--  --> <div${addAttribute(`${containerStyle} md:order-2`, "class")}> <h3${addAttribute(`${headingStyle}`, "class")}>USŁUGI PRAWNE</h3> <div class="hidden lg:block"> <div${addAttribute(`${elementsStyle}`, "class")}> ${renderComponent($$result, "FooterLink", FooterLink, { "client:load": true, "tabNum": 0, "linkTo": "#tgt", "client:component-hydration": "load", "client:component-path": "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/components/FooterLink", "client:component-export": "FooterLink" }, { "default": ($$result2) => renderTemplate`Prawo rodzinne` })} ${renderComponent($$result, "FooterLink", FooterLink, { "client:load": true, "tabNum": 1, "linkTo": "#tgt", "client:component-hydration": "load", "client:component-path": "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/components/FooterLink", "client:component-export": "FooterLink" }, { "default": ($$result2) => renderTemplate`Konwencja Haska` })} ${renderComponent($$result, "FooterLink", FooterLink, { "client:load": true, "tabNum": 2, "linkTo": "#tgt", "client:component-hydration": "load", "client:component-path": "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/components/FooterLink", "client:component-export": "FooterLink" }, { "default": ($$result2) => renderTemplate`Prawo spadkowe` })} ${renderComponent($$result, "FooterLink", FooterLink, { "client:load": true, "tabNum": 3, "linkTo": "#tgt", "client:component-hydration": "load", "client:component-path": "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/components/FooterLink", "client:component-export": "FooterLink" }, { "default": ($$result2) => renderTemplate`Prawo karne` })} ${renderComponent($$result, "FooterLink", FooterLink, { "client:load": true, "tabNum": 4, "linkTo": "#tgt", "client:component-hydration": "load", "client:component-path": "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/components/FooterLink", "client:component-export": "FooterLink" }, { "default": ($$result2) => renderTemplate`Prawo cywilne` })} </div> </div> <div class="block lg:hidden"> <div${addAttribute(`${elementsStyle}`, "class")}> ${renderComponent($$result, "FooterLink", FooterLink, { "client:load": true, "tabNum": 0, "linkTo": "#rodzinne", "client:component-hydration": "load", "client:component-path": "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/components/FooterLink", "client:component-export": "FooterLink" }, { "default": ($$result2) => renderTemplate`Prawo rodzinne` })} ${renderComponent($$result, "FooterLink", FooterLink, { "client:load": true, "tabNum": 1, "linkTo": "#haska", "client:component-hydration": "load", "client:component-path": "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/components/FooterLink", "client:component-export": "FooterLink" }, { "default": ($$result2) => renderTemplate`Konwencja Haska` })} ${renderComponent($$result, "FooterLink", FooterLink, { "client:load": true, "tabNum": 2, "linkTo": "#spadkowe", "client:component-hydration": "load", "client:component-path": "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/components/FooterLink", "client:component-export": "FooterLink" }, { "default": ($$result2) => renderTemplate`Prawo spadkowe` })} ${renderComponent($$result, "FooterLink", FooterLink, { "client:load": true, "tabNum": 3, "linkTo": "#karne", "client:component-hydration": "load", "client:component-path": "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/components/FooterLink", "client:component-export": "FooterLink" }, { "default": ($$result2) => renderTemplate`Prawo karne` })} ${renderComponent($$result, "FooterLink", FooterLink, { "client:load": true, "tabNum": 4, "linkTo": "#cywilne", "client:component-hydration": "load", "client:component-path": "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/components/FooterLink", "client:component-export": "FooterLink" }, { "default": ($$result2) => renderTemplate`Prawo cywilne` })} </div> </div> </div> <!--  --> <div${addAttribute(`${containerStyle} pt-12 sm:pt-0 md:order-3`, "class")}> <h3${addAttribute(`${headingStyle}`, "class")}>KANCELARIA</h3> <div${addAttribute(`${elementsStyle}`, "class")}> <a href="#about"${addAttribute(`${linkStyles} h-fit`, "class")}>O mnie</a> <a href="#blog"${addAttribute(`${linkStyles}`, "class")}>Blog</a> <a href="#"${addAttribute(`${linkStyles}`, "class")}>Facebook</a> <a href="#"${addAttribute(`${linkStyles}`, "class")}>Instagram</a> <a href="/rodo" target="_blank" class="hover:font-semibold cursor-pointer text-normal active:text-[#D9C6AF] focus:border-[#533630]">RODO</a> <!-- <a href="#" class=\`\${linkStyles}\`>Polityka prywatności</a> --> </div> </div> <!--  --> <div${addAttribute(`${containerStyle} pt-12 sm:pt-0 md:order-1`, "class")}> <a href="#contact"${addAttribute(`${headingStyle} nav-link`, "class")}>KONTAKT</a> <div class="flex flex-col gap-5 text-normal"> <span>ul. Sienkiewicza 55A/90 15-002 Białystok <br> Spółdzielnia "Trzy Kłosy"</span> <span>Pon - Pt 9:00 - 17:00</span> <a href="tel:+48698741258" class="hover:font-semibold">Tel.: 698 741 258</a> <a href="mailto:adw.komenda@gmail.com" class="hover:font-semibold md:min-w-52">adw.komenda@gmail.com</a> <span>NIP: 9662171426 </span> </div> </div> <!--  --> </div> <div class="flex gap-2 lg:gap-10 items-center justify-center pt-14 pb-10 px-[5vw] lg:px-10"> <div class="grow w-auto h-[1px] bg-[#5A4620]"></div> <img loading="lazy" class="max-w-[300px] max-h-[83px]" src="/logoKomenda.svg" alt="logoKancelariaPaulinaKomenda"> <div class="grow w-auto h-[1px] bg-[#5A4620]"></div> </div> </section>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://kancelaria-paulinakomenda.netlify.app/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template([`<html lang="en"> <head><script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="6f12c5da-6d0e-426a-9d66-ecb71c5a273d" type="text/javascript"><\/script><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Preconnect to Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Preload Fonts --><link rel="preload" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"><link rel="preload" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"><!-- Fallback if JS is disabled -->`, '<noscript><link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" rel="stylesheet"></noscript><meta name="generator"', "><title>", "</title>", "<!-- Google Tag Manager --><!-- End Google Tag Manager -->", '</head> <body> <section class="relative z-10"> ', " ", " ", ' </section> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MJV6G6WP" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) --> </body></html>'])), maybeRenderHead(), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Header", $$Header, { "animate": false }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/layouts/Layout.astro", void 0);

const $$Background = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="min-h-[80vh] w-full"> <div class="fixed left-0 top-0 -z-10 min-h-full w-full bg-[url('/statuaMobile.svg')] bg-cover bg-center bg-no-repeat opacity-100 sm:bg-[url('/statuaFull.svg')] sm:bg-right-top 2xl:mx-auto"></div> </div>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/ui/Background.astro", void 0);

const $$Astro$1 = createAstro("https://kancelaria-paulinakomenda.netlify.app/");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Container;
  const { items_position, isHovered, src, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex gap-1 w-fit ${items_position} ${isHovered ? "hover:text-[#EEE5DA]" : ""}`, "class")}> <img loading="lazy"${addAttribute(src, "src")}${addAttribute(alt, "alt")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/contact/container.astro", void 0);

const $$Astro = createAstro("https://kancelaria-paulinakomenda.netlify.app/");
const $$SocialIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocialIcon;
  const { src, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img loading="lazy"${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(`h-8 w-8 lg:h-9 lg:w-9 cursor-pointer hover:opacity-55`, "class")}>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/contact/socialIcon.astro", void 0);

const $$GoogleMap = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="no-underline overflow-hidden w-full mx-auto h-[340px] sm:h-[367px] max-w-[90vw] max-h-[90vw] md:max-w-[80vw] md:max-h-[80vw] lg:max-w-[70vw] lg:h-[60vh] lg:max-h-[553px] border border-gray-700 2xl:max-w-[1200px]"> <div class="w-full mx-auto h-[340px] sm:h-[367px] max-w-[90vw] max-h-[90vw] md:max-w-[80vw] md:max-h-[80vw] lg:max-w-[70vw] lg:h-[60vh] lg:max-h-[553px] flex justify-center items-center 2xl:max-w-[1200px]"> <iframe title="Sienkiewicza 55a/90 Białystok Kancelaria Adwokacka Paulina Komenda" width="600" height="450" class="w-full mx-auto h-[340px] sm:h-[367px] max-w-[90vw] max-h-[90vw] md:max-w-[80vw] md:max-h-[80vw] lg:max-w-[70vw] lg:h-[60vh] lg:max-h-[553px] 2xl:max-w-[1200px]" loading="eager" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?q=Sienkiewicza%2055a%2F90%2C%20Bia%C5%82ystok%2C%20Polska&key=AIzaSyBwBSYBNGnBKiyWP-Fogd9yL1KoYL7DQyA&maptype=satellite">
    </iframe> </div> </div>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/contact/googleMap.astro", void 0);

const $$Kancelaria = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="kanca" class="hidden absolute top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center z-50"> <div class="w-fit min-h-fit h-[99%] p-4 flex justify-center items-center relative" id="modalContainer"> <!-- Image with Close Button --> <div class="relative w-full h-full"> <img src="/zdjecieKancy.jpg" loading="lazy" id="modalImage" alt="Kancelaria" class="w-full h-1/2 md:w-full md:h-full"> <!-- Close button inside the image --> <button id="closeBtn" class="absolute top-2 right-2 text-black rounded-full px-2 py-1 font-bold" style="z-index: 10;">
X
</button> </div> </div> </section> `;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/contact/kancelaria.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#B58C67] pt-20 pb-10 xl:px-16 2xl:px-36 relative" id="contact"> <h2 class="text-3xl font-cinzel sm:text-4xl pb-7 lg:pb-16 px-5 sm:px-[9.3vw] lg:px-12 lg:text-5xl">
KONTAKT
</h2> <div class="flex flex-col lg:flex-row lg:gap-[8vw] justify-between text-normal sm:text-lg lg:mx-10"> <div class="flex flex-col gap-[3.5vh] max-w-[365px] sm:max-w-[420px] pb-7 sm:ml-[9.3vw] md:px-0 lg:ml-4 px-5 sm:px-0 2xl:gap-8 min-w-fit"> <h3 class="w-fit max-w-[400px]">
Zadzwoń i umów się na spotkanie w kancelarii. <br> Kancelaria obsługuje
        Klientów również w języku angielskim.
</h3> ${renderComponent($$result, "Container", $$Container, { "items_position": "items-start", "isHovered": false, "src": "IconLocation.svg", "alt": "Location Icon" }, { "default": ($$result2) => renderTemplate` <span>ul. Sienkiewicza 55A/90 <br> 15-002 Białystok <br> <span class="cursor-pointer text-gray-800 italic underline" id="modal">
Spółdzielnia "Trzy Kłosy"</span></span> ` })} ${renderComponent($$result, "Container", $$Container, { "items_position": "items-center", "isHovered": false, "src": "IconClock.svg", "alt": "Clock Icon" }, { "default": ($$result2) => renderTemplate`<span>poniedziałek - piątek 9:00 - 17:00 </span>` })} <div${addAttribute(`flex gap-1 w-fit items-center hover:text-[#EEE5DA]`, "class")}> <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_33_19" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28"> <rect width="28" height="28" fill="#D9D9D9"></rect> </mask> <g mask="url(#mask0_33_19)"> <path d="M23.275 24.5C20.8444 24.5 18.4431 23.9701 16.0708 22.9104C13.6986 21.8507 11.5403 20.3486 9.59583 18.4042C7.65139 16.4597 6.14931 14.3014 5.08958 11.9292C4.02986 9.55694 3.5 7.15556 3.5 4.725C3.5 4.375 3.61667 4.08333 3.85 3.85C4.08333 3.61667 4.375 3.5 4.725 3.5H9.45C9.72222 3.5 9.96528 3.59236 10.1792 3.77708C10.3931 3.96181 10.5194 4.18056 10.5583 4.43333L11.3167 8.51667C11.3556 8.82778 11.3458 9.09028 11.2875 9.30417C11.2292 9.51806 11.1222 9.70278 10.9667 9.85833L8.1375 12.7167C8.52639 13.4361 8.98819 14.1312 9.52292 14.8021C10.0576 15.4729 10.6458 16.1194 11.2875 16.7417C11.8903 17.3444 12.5222 17.9035 13.1833 18.4187C13.8444 18.934 14.5444 19.4056 15.2833 19.8333L18.025 17.0917C18.2 16.9167 18.4285 16.7854 18.7104 16.6979C18.9924 16.6104 19.2694 16.5861 19.5417 16.625L23.5667 17.4417C23.8389 17.5194 24.0625 17.6604 24.2375 17.8646C24.4125 18.0687 24.5 18.2972 24.5 18.55V23.275C24.5 23.625 24.3833 23.9167 24.15 24.15C23.9167 24.3833 23.625 24.5 23.275 24.5ZM7.02917 10.5L8.95417 8.575L8.45833 5.83333H5.8625C5.95972 6.63056 6.09583 7.41806 6.27083 8.19583C6.44583 8.97361 6.69861 9.74167 7.02917 10.5ZM17.4708 20.9417C18.2292 21.2722 19.0021 21.5347 19.7896 21.7292C20.5771 21.9236 21.3694 22.05 22.1667 22.1083V19.5417L19.425 18.9875L17.4708 20.9417Z"></path> </g> </svg> <a href="tel:+48508726150">508 726 150</a> </div> <div${addAttribute(`flex gap-1 w-fit items-center hover:text-[#EEE5DA]`, "class")}> <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <mask id="mask0_33_24" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28"> <rect width="28" height="28" fill="#D9D9D9"></rect> </mask> <g mask="url(#mask0_33_24)"> <path d="M14.0002 25.6666C12.3863 25.6666 10.8696 25.3603 9.45016 24.7478C8.03072 24.1353 6.796 23.3041 5.746 22.2541C4.696 21.2041 3.86475 19.9694 3.25225 18.5499C2.63975 17.1305 2.3335 15.6138 2.3335 13.9999C2.3335 12.386 2.63975 10.8694 3.25225 9.44992C3.86475 8.03047 4.696 6.79575 5.746 5.74575C6.796 4.69575 8.03072 3.8645 9.45016 3.252C10.8696 2.6395 12.3863 2.33325 14.0002 2.33325C15.6141 2.33325 17.1307 2.6395 18.5502 3.252C19.9696 3.8645 21.2043 4.69575 22.2543 5.74575C23.3043 6.79575 24.1356 8.03047 24.7481 9.44992C25.3606 10.8694 25.6668 12.386 25.6668 13.9999V15.6916C25.6668 16.8388 25.2731 17.8159 24.4856 18.6228C23.6981 19.4298 22.7307 19.8333 21.5835 19.8333C20.9029 19.8333 20.2613 19.6874 19.6585 19.3958C19.0557 19.1041 18.5502 18.686 18.1418 18.1416C17.5779 18.7055 16.9411 19.1284 16.2314 19.4103C15.5217 19.6923 14.7779 19.8333 14.0002 19.8333C12.3863 19.8333 11.0106 19.2645 9.87308 18.127C8.73558 16.9895 8.16683 15.6138 8.16683 13.9999C8.16683 12.386 8.73558 11.0103 9.87308 9.87284C11.0106 8.73534 12.3863 8.16659 14.0002 8.16659C15.6141 8.16659 16.9897 8.73534 18.1272 9.87284C19.2647 11.0103 19.8335 12.386 19.8335 13.9999V15.6916C19.8335 16.1971 19.9988 16.6249 20.3293 16.9749C20.6599 17.3249 21.0779 17.4999 21.5835 17.4999C22.0891 17.4999 22.5071 17.3249 22.8377 16.9749C23.1682 16.6249 23.3335 16.1971 23.3335 15.6916V13.9999C23.3335 11.3944 22.4293 9.18742 20.621 7.37909C18.8127 5.57075 16.6057 4.66659 14.0002 4.66659C11.3946 4.66659 9.18766 5.57075 7.37933 7.37909C5.571 9.18742 4.66683 11.3944 4.66683 13.9999C4.66683 16.6055 5.571 18.8124 7.37933 20.6208C9.18766 22.4291 11.3946 23.3333 14.0002 23.3333H19.8335V25.6666H14.0002ZM14.0002 17.4999C14.9724 17.4999 15.7988 17.1596 16.4793 16.4791C17.1599 15.7985 17.5002 14.9721 17.5002 13.9999C17.5002 13.0277 17.1599 12.2013 16.4793 11.5208C15.7988 10.8402 14.9724 10.4999 14.0002 10.4999C13.0279 10.4999 12.2016 10.8402 11.521 11.5208C10.8404 12.2013 10.5002 13.0277 10.5002 13.9999C10.5002 14.9721 10.8404 15.7985 11.521 16.4791C12.2016 17.1596 13.0279 17.4999 14.0002 17.4999Z"></path> </g> </svg> <a href="mailto:adw.komenda@gmail.com" class="hover:text-[#EEE5DA]">adw.komenda@gmail.com</a> </div> ${renderComponent($$result, "Container", $$Container, { "items_position": "items-center", "isHovered": false, "src": "IconNIP.svg", "alt": "NIP Icon" }, { "default": ($$result2) => renderTemplate`<span>NIP: 9662171426</span>` })} <div class="flex gap-5 items-center lg:pt-4"> ${renderComponent($$result, "SocialIcon", $$SocialIcon, { "src": "/facebook.svg", "alt": "Facebook Icon" })} ${renderComponent($$result, "SocialIcon", $$SocialIcon, { "src": "/instagram.svg", "alt": "Instagram Icon" })} ${renderComponent($$result, "SocialIcon", $$SocialIcon, { "src": "/linkedin.svg", "alt": "Linkedin Icon" })} </div> </div> ${renderComponent($$result, "GoogleMap", $$GoogleMap, {})} </div> ${renderComponent($$result, "Kancelaria", $$Kancelaria, {})} </section>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/contact/contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Paulina Komenda Kancelaria Adwokacka" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="overflow-hidden relative"> <div class="fixed z-20 inset-0 w-full h-screen bg-[#0E1F2A] flex items-center justify-center animate-slideLeft"> <img src="/animationLogo1440.svg" alt="Logo" class="animate-revealLogo px-10 opacity-0"> </div> ${renderComponent($$result2, "Hero", $$Hero, {})} <div> ${renderComponent($$result2, "Services", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/services/Services", "client:component-export": "Services" })} <div> ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Background", $$Background, {})} ${renderComponent($$result2, "Reviews", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/reviews/Reviews", "client:component-export": "Reviews" })} </div> ${renderComponent($$result2, "Blog", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/blog/Blog", "client:component-export": "Blog" })} ${renderComponent($$result2, "Contact", $$Contact, {})} </div> </main>  ` })}`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/index.astro", void 0);

const $$file = "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index as $, _page as _ };
