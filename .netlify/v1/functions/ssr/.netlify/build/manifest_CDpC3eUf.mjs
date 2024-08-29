import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro/server_DOrRJfdF.mjs';
import { compile } from 'path-to-regexp';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",()=>{const o=document.querySelector(\".mobile-menu-button\"),e=document.querySelector(\".mobile-menu\"),t=document.querySelector(\".hamburger-icon\"),n=document.querySelector(\".close-icon\"),i=document.querySelector(\".mobile-menu-close\"),c=document.querySelectorAll(\".mobile-menu .nav-link\");o.addEventListener(\"click\",()=>{e.classList.remove(\"hidden\",\"animation-menu-slide-out\"),e.classList.add(\"animation-menu-slide-in\"),t.classList.add(\"hidden\"),n.classList.remove(\"hidden\"),document.body.classList.add(\"overflow-hidden\")}),i.addEventListener(\"click\",()=>{e.classList.remove(\"animation-menu-slide-in\"),e.classList.add(\"animation-menu-slide-out\"),setTimeout(()=>{e.classList.add(\"hidden\"),document.body.classList.remove(\"overflow-hidden\")},700),t.classList.remove(\"hidden\"),n.classList.add(\"hidden\")}),c.forEach(s=>{s.addEventListener(\"click\",a=>{a.preventDefault();const l=s.getAttribute(\"href\").substring(1),d=document.getElementById(l);d&&d.scrollIntoView({behavior:\"smooth\"}),e.classList.remove(\"animation-menu-slide-in\"),e.classList.add(\"animation-menu-slide-out\"),setTimeout(()=>{e.classList.add(\"hidden\"),document.body.classList.remove(\"overflow-hidden\")},700),t.classList.remove(\"hidden\"),n.classList.add(\"hidden\")})})});\n"}],"styles":[{"type":"external","src":"/_astro/_all_.BqjpN-jw.css"},{"type":"inline","content":"@keyframes slide-down{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes slide-up{0%{transform:translateY(0)}to{transform:translateY(-100%)}}.animation-menu-slide-in[data-astro-cid-3ef6ksr2]{animation:slide-down .7s forwards}.animation-menu-slide-out[data-astro-cid-3ef6ksr2]{animation:slide-up .7s forwards}.overflow-hidden[data-astro-cid-3ef6ksr2]{overflow:hidden}.mobile-menu[data-astro-cid-3ef6ksr2]{overflow-y:auto;-webkit-overflow-scrolling:touch}.fixed-background{position:fixed;bottom:0;left:0;width:100%;height:100%;background-color:#0e1f2a;background-image:url(/statuaMobile.svg);background-size:cover;background-repeat:no-repeat;background-position:center;z-index:-1}@media (min-width: 640px){.fixed-background{background-image:url(/statuaFull.svg);background-position:right bottom}}@media (min-width: 1024px){.fixed-background{background-position:bottom}}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",()=>{const o=document.querySelector(\".mobile-menu-button\"),e=document.querySelector(\".mobile-menu\"),t=document.querySelector(\".hamburger-icon\"),n=document.querySelector(\".close-icon\"),i=document.querySelector(\".mobile-menu-close\"),c=document.querySelectorAll(\".mobile-menu .nav-link\");o.addEventListener(\"click\",()=>{e.classList.remove(\"hidden\",\"animation-menu-slide-out\"),e.classList.add(\"animation-menu-slide-in\"),t.classList.add(\"hidden\"),n.classList.remove(\"hidden\"),document.body.classList.add(\"overflow-hidden\")}),i.addEventListener(\"click\",()=>{e.classList.remove(\"animation-menu-slide-in\"),e.classList.add(\"animation-menu-slide-out\"),setTimeout(()=>{e.classList.add(\"hidden\"),document.body.classList.remove(\"overflow-hidden\")},700),t.classList.remove(\"hidden\"),n.classList.add(\"hidden\")}),c.forEach(s=>{s.addEventListener(\"click\",a=>{a.preventDefault();const l=s.getAttribute(\"href\").substring(1),d=document.getElementById(l);d&&d.scrollIntoView({behavior:\"smooth\"}),e.classList.remove(\"animation-menu-slide-in\"),e.classList.add(\"animation-menu-slide-out\"),setTimeout(()=>{e.classList.add(\"hidden\"),document.body.classList.remove(\"overflow-hidden\")},700),t.classList.remove(\"hidden\"),n.classList.add(\"hidden\")})})});\n"}],"styles":[{"type":"external","src":"/_astro/_all_.BqjpN-jw.css"},{"type":"inline","content":"@keyframes slide-down{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes slide-up{0%{transform:translateY(0)}to{transform:translateY(-100%)}}.animation-menu-slide-in[data-astro-cid-3ef6ksr2]{animation:slide-down .7s forwards}.animation-menu-slide-out[data-astro-cid-3ef6ksr2]{animation:slide-up .7s forwards}.overflow-hidden[data-astro-cid-3ef6ksr2]{overflow:hidden}.mobile-menu[data-astro-cid-3ef6ksr2]{overflow-y:auto;-webkit-overflow-scrolling:touch}.fixed-background{position:fixed;bottom:0;left:0;width:100%;height:100%;background-color:#0e1f2a;background-image:url(/statuaMobile.svg);background-size:cover;background-repeat:no-repeat;background-position:center;z-index:-1}@media (min-width: 640px){.fixed-background{background-image:url(/statuaFull.svg);background-position:right bottom}}@media (min-width: 1024px){.fixed-background{background-position:bottom}}\n"}],"routeData":{"route":"/[all]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"all","dynamic":true,"spread":false}]],"params":["all"],"component":"src/pages/[all].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",()=>{const o=document.querySelector(\".mobile-menu-button\"),e=document.querySelector(\".mobile-menu\"),t=document.querySelector(\".hamburger-icon\"),n=document.querySelector(\".close-icon\"),i=document.querySelector(\".mobile-menu-close\"),c=document.querySelectorAll(\".mobile-menu .nav-link\");o.addEventListener(\"click\",()=>{e.classList.remove(\"hidden\",\"animation-menu-slide-out\"),e.classList.add(\"animation-menu-slide-in\"),t.classList.add(\"hidden\"),n.classList.remove(\"hidden\"),document.body.classList.add(\"overflow-hidden\")}),i.addEventListener(\"click\",()=>{e.classList.remove(\"animation-menu-slide-in\"),e.classList.add(\"animation-menu-slide-out\"),setTimeout(()=>{e.classList.add(\"hidden\"),document.body.classList.remove(\"overflow-hidden\")},700),t.classList.remove(\"hidden\"),n.classList.add(\"hidden\")}),c.forEach(s=>{s.addEventListener(\"click\",a=>{a.preventDefault();const l=s.getAttribute(\"href\").substring(1),d=document.getElementById(l);d&&d.scrollIntoView({behavior:\"smooth\"}),e.classList.remove(\"animation-menu-slide-in\"),e.classList.add(\"animation-menu-slide-out\"),setTimeout(()=>{e.classList.add(\"hidden\"),document.body.classList.remove(\"overflow-hidden\")},700),t.classList.remove(\"hidden\"),n.classList.add(\"hidden\")})})});\n"}],"styles":[{"type":"external","src":"/_astro/_all_.BqjpN-jw.css"},{"type":"inline","content":"@keyframes slide-down{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes slide-up{0%{transform:translateY(0)}to{transform:translateY(-100%)}}.animation-menu-slide-in[data-astro-cid-3ef6ksr2]{animation:slide-down .7s forwards}.animation-menu-slide-out[data-astro-cid-3ef6ksr2]{animation:slide-up .7s forwards}.overflow-hidden[data-astro-cid-3ef6ksr2]{overflow:hidden}.mobile-menu[data-astro-cid-3ef6ksr2]{overflow-y:auto;-webkit-overflow-scrolling:touch}.fixed-background{position:fixed;bottom:0;left:0;width:100%;height:100%;background-color:#0e1f2a;background-image:url(/statuaMobile.svg);background-size:cover;background-repeat:no-repeat;background-position:center;z-index:-1}@media (min-width: 640px){.fixed-background{background-image:url(/statuaFull.svg);background-position:right bottom}}@media (min-width: 1024px){.fixed-background{background-position:bottom}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/[all].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/[all]@_@astro":"pages/_all_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_CDpC3eUf.mjs","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/ui/Background":"_astro/Background.CuD3eOr1.js","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/services/Services":"_astro/Services.COfAP4JR.js","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/reviews/Reviews":"_astro/Reviews.DjcSaaGo.js","/astro/hoisted.js?q=0":"_astro/hoisted.DBbokHRR.js","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/blog/Blog":"_astro/Blog.5ega9czo.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/persona.D8_lYgBS.svg","/_astro/logoKomenda.BLnRczZN.svg","/_astro/_all_.BqjpN-jw.css","/adwokatura.svg","/arrowDown.svg","/arrowUp.svg","/blog1.svg","/blog2.svg","/blog3.svg","/BrowserStackLocal.msi","/civil.png","/close.svg","/criminal.png","/emptyStar.svg","/facebook.svg","/family-law.png","/favicon.svg","/fullStar.svg","/google.svg","/haski.png","/IconClock.svg","/IconEmail.svg","/IconLocation.svg","/IconNIP.svg","/IconPhone.svg","/instagram.svg","/linkedin.svg","/logo-adwokatura.png","/logo.png","/logoKomenda.svg","/logoKomendaGranat.svg","/persona.svg","/quotes.svg","/spadkowe.png","/statua.svg","/statuaDesktop.svg","/statuaFull.svg","/statuaMobile.svg","/statuaTablet.svg","/tło.png","/tło.svg","/tłoLg.svg","/tłoMobile.svg","/tłoTablet.svg","/tłoTabletNew.svg","/_astro/Background.CuD3eOr1.js","/_astro/Blog.5ega9czo.js","/_astro/Blog.5ega9czo.js.gz","/_astro/client.BIGLHmRd.js","/_astro/client.BIGLHmRd.js.gz","/_astro/index.CndI9BqS.js","/_astro/index.CndI9BqS.js.gz","/_astro/index.Dgkm9BtQ.css","/_astro/index.DhYZZe0J.js","/_astro/index.DhYZZe0J.js.gz","/_astro/jsx-runtime.7faW4zRM.js","/_astro/Reviews.DjcSaaGo.js","/_astro/Reviews.DjcSaaGo.js.gz","/_astro/Services.COfAP4JR.js","/_astro/Services.COfAP4JR.js.gz"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { manifest };
