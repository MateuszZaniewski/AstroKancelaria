import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro/server_cRt1WtEO.mjs';
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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BLw5gIyP.js"}],"styles":[{"type":"external","src":"/_astro/_all_.BpaX7apX.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n@keyframes slide-down{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes slide-up{0%{transform:translateY(0)}to{transform:translateY(-100%)}}.animation-menu-slide-in[data-astro-cid-3ef6ksr2]{animation:slide-down .7s forwards}.animation-menu-slide-out[data-astro-cid-3ef6ksr2]{animation:slide-up .7s forwards}.overflow-hidden[data-astro-cid-3ef6ksr2]{overflow:hidden}.mobile-menu[data-astro-cid-3ef6ksr2]{overflow-y:auto;-webkit-overflow-scrolling:touch}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.pJ-EpZOz.js"}],"styles":[{"type":"external","src":"/_astro/_all_.BpaX7apX.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n@keyframes slide-down{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes slide-up{0%{transform:translateY(0)}to{transform:translateY(-100%)}}.animation-menu-slide-in[data-astro-cid-3ef6ksr2]{animation:slide-down .7s forwards}.animation-menu-slide-out[data-astro-cid-3ef6ksr2]{animation:slide-up .7s forwards}.overflow-hidden[data-astro-cid-3ef6ksr2]{overflow:hidden}.mobile-menu[data-astro-cid-3ef6ksr2]{overflow-y:auto;-webkit-overflow-scrolling:touch}\n"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0TMDN3kZ.js"}],"styles":[{"type":"external","src":"/_astro/_all_.BpaX7apX.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n"}],"routeData":{"route":"/rodo","isIndex":false,"type":"page","pattern":"^\\/rodo\\/?$","segments":[[{"content":"rodo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rodo.astro","pathname":"/rodo","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BLw5gIyP.js"}],"styles":[{"type":"external","src":"/_astro/_all_.BpaX7apX.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n@keyframes slide-down{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes slide-up{0%{transform:translateY(0)}to{transform:translateY(-100%)}}.animation-menu-slide-in[data-astro-cid-3ef6ksr2]{animation:slide-down .7s forwards}.animation-menu-slide-out[data-astro-cid-3ef6ksr2]{animation:slide-up .7s forwards}.overflow-hidden[data-astro-cid-3ef6ksr2]{overflow:hidden}.mobile-menu[data-astro-cid-3ef6ksr2]{overflow-y:auto;-webkit-overflow-scrolling:touch}\n"}],"routeData":{"route":"/[all]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"all","dynamic":true,"spread":false}]],"params":["all"],"component":"src/pages/[all].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BLw5gIyP.js"}],"styles":[{"type":"external","src":"/_astro/_all_.BpaX7apX.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}\n@keyframes slide-down{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes slide-up{0%{transform:translateY(0)}to{transform:translateY(-100%)}}.animation-menu-slide-in[data-astro-cid-3ef6ksr2]{animation:slide-down .7s forwards}.animation-menu-slide-out[data-astro-cid-3ef6ksr2]{animation:slide-up .7s forwards}.overflow-hidden[data-astro-cid-3ef6ksr2]{overflow:hidden}.mobile-menu[data-astro-cid-3ef6ksr2]{overflow-y:auto;-webkit-overflow-scrolling:touch}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://kancelaria-paulinakomenda.netlify.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/rodo.astro",{"propagation":"none","containsHead":true}],["C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/[all].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/rodo@_@astro":"pages/rodo.astro.mjs","\u0000@astro-page:src/pages/[all]@_@astro":"pages/_all_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_BlWOLNIh.mjs","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/components/FooterLink":"_astro/FooterLink.C6wfcTFz.js","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/services/Services":"_astro/Services.2k0k3lwa.js","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/reviews/Reviews":"_astro/Reviews.CmPhs3v5.js","/astro/hoisted.js?q=1":"_astro/hoisted.BLw5gIyP.js","/astro/hoisted.js?q=0":"_astro/hoisted.pJ-EpZOz.js","/astro/hoisted.js?q=2":"_astro/hoisted.0TMDN3kZ.js","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/blog/Blog":"_astro/Blog.lRFDPQUR.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/logoKomenda.BLnRczZN.svg","/_astro/_all_.BpaX7apX.css","/3klosyUpScaling.jpg","/adwokatura.svg","/animationLogo1440.svg","/arrowDown.svg","/arrowUp.svg","/biggerPaulina.jpg","/blog1.png","/blog1.svg","/blog1HighRes.png","/blog2.png","/blog2.svg","/blog3.png","/blog3.svg","/BrowserStackLocal.msi","/civil.png","/close.svg","/criminal.png","/emptyStar.svg","/facebook.svg","/family-law.png","/favicon.svg","/fotoCrop.svg","/fullStar.svg","/google.svg","/haski.png","/IconClock.svg","/IconEmail.svg","/IconLocation.svg","/IconNIP.svg","/IconPhone.svg","/instagram.svg","/komenda480x640.svg","/linkedin.svg","/logo-adwokatura.png","/logo.png","/logoKomenda.svg","/logoKomendaGranat.svg","/newLogo.svg","/originalHighRes.jpg","/Paulina-Komenda-Adwokat-Kancelaria-Białystok.jpg","/Paulina-Komenda-Adwokat-Kancelaria-Białystok.png","/PaulinaCrop.png","/PaulinaKomendaUpScaling.jpg","/persona.svg","/qualityPaulina.png","/quotes.svg","/spadkowe.png","/statua.svg","/statuaDesktop.svg","/statuaFull.svg","/statuaMobile.svg","/statuaTablet.svg","/tło.png","/tło.svg","/tłoLg.svg","/tłoMobile.svg","/tłoTablet.svg","/tłoTabletNew.svg","/zdjecieKancy.jpg","/_astro/Blog.lRFDPQUR.js","/_astro/Blog.lRFDPQUR.js.gz","/_astro/client.BIGLHmRd.js","/_astro/client.BIGLHmRd.js.gz","/_astro/FooterLink.C6wfcTFz.js","/_astro/hoisted.0TMDN3kZ.js","/_astro/hoisted.BLw5gIyP.js","/_astro/hoisted.pJ-EpZOz.js","/_astro/index.CndI9BqS.js","/_astro/index.CndI9BqS.js.gz","/_astro/index.DhYZZe0J.js","/_astro/index.DhYZZe0J.js.gz","/_astro/jsx-runtime.7faW4zRM.js","/_astro/Reviews.CmPhs3v5.js","/_astro/Reviews.CmPhs3v5.js.gz","/_astro/Services.2k0k3lwa.js","/_astro/Services.2k0k3lwa.js.gz","/_astro/store.D1BJRhCk.js","/_astro/ViewTransitions.astro_astro_type_script_index_0_lang.XYQjTWMW.js","/_astro/ViewTransitions.astro_astro_type_script_index_0_lang.XYQjTWMW.js.gz"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { manifest };
