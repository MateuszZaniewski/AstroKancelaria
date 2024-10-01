import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_Dkz4iR9-.mjs';
import 'clsx';
import 'html-escaper';
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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.AcwLDiQ0.js"}],"styles":[{"type":"external","src":"/_astro/_all_.OBj0GI1r.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}@font-face{font-family:Cinzel;font-style:normal;font-weight:400;font-display:swap;src:url(../fonts/Cinzel-Regular.ttf) format(\"truetype\")}@font-face{font-family:Cinzel;font-style:normal;font-weight:500;font-display:swap;src:url(../fonts/Cinzel-Medium.ttf) format(\"truetype\")}@font-face{font-family:Cinzel;font-style:normal;font-weight:600;font-display:swap;src:url(../fonts/Cinzel-SemiBold.ttf) format(\"truetype\")}@font-face{font-family:Cinzel;font-style:normal;font-weight:700;font-display:swap;src:url(../fonts/Cinzel-Bold.ttf) format(\"truetype\")}@font-face{font-family:Cinzel;font-style:normal;font-weight:800;font-display:swap;src:url(../fonts/Cinzel-ExtraBold.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:400;font-display:swap;src:url(../fonts/OpenSans-Regular.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:500;font-display:swap;src:url(../fonts/OpenSans-Medium.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:600;font-display:swap;src:url(../fonts/OpenSans-SemiBold.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:700;font-display:swap;src:url(../fonts/OpenSans-Bold.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:800;font-display:swap;src:url(../fonts/OpenSans-ExtraBold.ttf) format(\"truetype\")}\n.menu-transparent[data-astro-cid-3ef6ksr2]{background-color:transparent;color:#000;transition:background-color .3s ease,color .3s ease}.menu-light[data-astro-cid-3ef6ksr2]{background-color:#eee5da;color:#000;transition:background-color .3s ease,color .3s ease}.menu-dark[data-astro-cid-3ef6ksr2]{background-color:#0e1f2a;color:#b58c67;transition:background-color .3s ease,color .3s ease}@keyframes slide-down{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes slide-up{0%{transform:translateY(0)}to{transform:translateY(-100%)}}.animation-menu-slide-in[data-astro-cid-3ef6ksr2]{animation:slide-down .7s forwards}.animation-menu-slide-out[data-astro-cid-3ef6ksr2]{animation:slide-up .7s forwards}.overflow-hidden[data-astro-cid-3ef6ksr2]{overflow:hidden}.mobile-menu[data-astro-cid-3ef6ksr2]{overflow-y:auto;-webkit-overflow-scrolling:touch}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_all_.OBj0GI1r.css"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.fe6XBm_7.js"}],"styles":[{"type":"external","src":"/_astro/_all_.OBj0GI1r.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}@font-face{font-family:Cinzel;font-style:normal;font-weight:400;font-display:swap;src:url(../fonts/Cinzel-Regular.ttf) format(\"truetype\")}@font-face{font-family:Cinzel;font-style:normal;font-weight:500;font-display:swap;src:url(../fonts/Cinzel-Medium.ttf) format(\"truetype\")}@font-face{font-family:Cinzel;font-style:normal;font-weight:600;font-display:swap;src:url(../fonts/Cinzel-SemiBold.ttf) format(\"truetype\")}@font-face{font-family:Cinzel;font-style:normal;font-weight:700;font-display:swap;src:url(../fonts/Cinzel-Bold.ttf) format(\"truetype\")}@font-face{font-family:Cinzel;font-style:normal;font-weight:800;font-display:swap;src:url(../fonts/Cinzel-ExtraBold.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:400;font-display:swap;src:url(../fonts/OpenSans-Regular.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:500;font-display:swap;src:url(../fonts/OpenSans-Medium.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:600;font-display:swap;src:url(../fonts/OpenSans-SemiBold.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:700;font-display:swap;src:url(../fonts/OpenSans-Bold.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:800;font-display:swap;src:url(../fonts/OpenSans-ExtraBold.ttf) format(\"truetype\")}\n.menu-transparent[data-astro-cid-3ef6ksr2]{background-color:transparent;color:#000;transition:background-color .3s ease,color .3s ease}.menu-light[data-astro-cid-3ef6ksr2]{background-color:#eee5da;color:#000;transition:background-color .3s ease,color .3s ease}.menu-dark[data-astro-cid-3ef6ksr2]{background-color:#0e1f2a;color:#b58c67;transition:background-color .3s ease,color .3s ease}@keyframes slide-down{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes slide-up{0%{transform:translateY(0)}to{transform:translateY(-100%)}}.animation-menu-slide-in[data-astro-cid-3ef6ksr2]{animation:slide-down .7s forwards}.animation-menu-slide-out[data-astro-cid-3ef6ksr2]{animation:slide-up .7s forwards}.overflow-hidden[data-astro-cid-3ef6ksr2]{overflow:hidden}.mobile-menu[data-astro-cid-3ef6ksr2]{overflow-y:auto;-webkit-overflow-scrolling:touch}\n"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.pJ-EpZOz.js"}],"styles":[{"type":"external","src":"/_astro/_all_.OBj0GI1r.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}@font-face{font-family:Cinzel;font-style:normal;font-weight:400;font-display:swap;src:url(../fonts/Cinzel-Regular.ttf) format(\"truetype\")}@font-face{font-family:Cinzel;font-style:normal;font-weight:500;font-display:swap;src:url(../fonts/Cinzel-Medium.ttf) format(\"truetype\")}@font-face{font-family:Cinzel;font-style:normal;font-weight:600;font-display:swap;src:url(../fonts/Cinzel-SemiBold.ttf) format(\"truetype\")}@font-face{font-family:Cinzel;font-style:normal;font-weight:700;font-display:swap;src:url(../fonts/Cinzel-Bold.ttf) format(\"truetype\")}@font-face{font-family:Cinzel;font-style:normal;font-weight:800;font-display:swap;src:url(../fonts/Cinzel-ExtraBold.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:400;font-display:swap;src:url(../fonts/OpenSans-Regular.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:500;font-display:swap;src:url(../fonts/OpenSans-Medium.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:600;font-display:swap;src:url(../fonts/OpenSans-SemiBold.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:700;font-display:swap;src:url(../fonts/OpenSans-Bold.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:800;font-display:swap;src:url(../fonts/OpenSans-ExtraBold.ttf) format(\"truetype\")}\n"}],"routeData":{"route":"/rodo","isIndex":false,"type":"page","pattern":"^\\/rodo\\/?$","segments":[[{"content":"rodo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rodo.astro","pathname":"/rodo","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.AcwLDiQ0.js"}],"styles":[{"type":"external","src":"/_astro/_all_.OBj0GI1r.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}@font-face{font-family:Cinzel;font-style:normal;font-weight:400;font-display:swap;src:url(../fonts/Cinzel-Regular.ttf) format(\"truetype\")}@font-face{font-family:Cinzel;font-style:normal;font-weight:500;font-display:swap;src:url(../fonts/Cinzel-Medium.ttf) format(\"truetype\")}@font-face{font-family:Cinzel;font-style:normal;font-weight:600;font-display:swap;src:url(../fonts/Cinzel-SemiBold.ttf) format(\"truetype\")}@font-face{font-family:Cinzel;font-style:normal;font-weight:700;font-display:swap;src:url(../fonts/Cinzel-Bold.ttf) format(\"truetype\")}@font-face{font-family:Cinzel;font-style:normal;font-weight:800;font-display:swap;src:url(../fonts/Cinzel-ExtraBold.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:400;font-display:swap;src:url(../fonts/OpenSans-Regular.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:500;font-display:swap;src:url(../fonts/OpenSans-Medium.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:600;font-display:swap;src:url(../fonts/OpenSans-SemiBold.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:700;font-display:swap;src:url(../fonts/OpenSans-Bold.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:800;font-display:swap;src:url(../fonts/OpenSans-ExtraBold.ttf) format(\"truetype\")}\n.menu-transparent[data-astro-cid-3ef6ksr2]{background-color:transparent;color:#000;transition:background-color .3s ease,color .3s ease}.menu-light[data-astro-cid-3ef6ksr2]{background-color:#eee5da;color:#000;transition:background-color .3s ease,color .3s ease}.menu-dark[data-astro-cid-3ef6ksr2]{background-color:#0e1f2a;color:#b58c67;transition:background-color .3s ease,color .3s ease}@keyframes slide-down{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes slide-up{0%{transform:translateY(0)}to{transform:translateY(-100%)}}.animation-menu-slide-in[data-astro-cid-3ef6ksr2]{animation:slide-down .7s forwards}.animation-menu-slide-out[data-astro-cid-3ef6ksr2]{animation:slide-up .7s forwards}.overflow-hidden[data-astro-cid-3ef6ksr2]{overflow:hidden}.mobile-menu[data-astro-cid-3ef6ksr2]{overflow-y:auto;-webkit-overflow-scrolling:touch}\n"}],"routeData":{"route":"/[all]","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"all","dynamic":true,"spread":false}]],"params":["all"],"component":"src/pages/[all].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.AcwLDiQ0.js"}],"styles":[{"type":"external","src":"/_astro/_all_.OBj0GI1r.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}@font-face{font-family:Cinzel;font-style:normal;font-weight:400;font-display:swap;src:url(../fonts/Cinzel-Regular.ttf) format(\"truetype\")}@font-face{font-family:Cinzel;font-style:normal;font-weight:500;font-display:swap;src:url(../fonts/Cinzel-Medium.ttf) format(\"truetype\")}@font-face{font-family:Cinzel;font-style:normal;font-weight:600;font-display:swap;src:url(../fonts/Cinzel-SemiBold.ttf) format(\"truetype\")}@font-face{font-family:Cinzel;font-style:normal;font-weight:700;font-display:swap;src:url(../fonts/Cinzel-Bold.ttf) format(\"truetype\")}@font-face{font-family:Cinzel;font-style:normal;font-weight:800;font-display:swap;src:url(../fonts/Cinzel-ExtraBold.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:400;font-display:swap;src:url(../fonts/OpenSans-Regular.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:500;font-display:swap;src:url(../fonts/OpenSans-Medium.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:600;font-display:swap;src:url(../fonts/OpenSans-SemiBold.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:700;font-display:swap;src:url(../fonts/OpenSans-Bold.ttf) format(\"truetype\")}@font-face{font-family:Open Sans;font-style:normal;font-weight:800;font-display:swap;src:url(../fonts/OpenSans-ExtraBold.ttf) format(\"truetype\")}\n.menu-transparent[data-astro-cid-3ef6ksr2]{background-color:transparent;color:#000;transition:background-color .3s ease,color .3s ease}.menu-light[data-astro-cid-3ef6ksr2]{background-color:#eee5da;color:#000;transition:background-color .3s ease,color .3s ease}.menu-dark[data-astro-cid-3ef6ksr2]{background-color:#0e1f2a;color:#b58c67;transition:background-color .3s ease,color .3s ease}@keyframes slide-down{0%{transform:translateY(-100%)}to{transform:translateY(0)}}@keyframes slide-up{0%{transform:translateY(0)}to{transform:translateY(-100%)}}.animation-menu-slide-in[data-astro-cid-3ef6ksr2]{animation:slide-down .7s forwards}.animation-menu-slide-out[data-astro-cid-3ef6ksr2]{animation:slide-up .7s forwards}.overflow-hidden[data-astro-cid-3ef6ksr2]{overflow:hidden}.mobile-menu[data-astro-cid-3ef6ksr2]{overflow-y:auto;-webkit-overflow-scrolling:touch}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.adwokatkomenda.pl/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/rodo.astro",{"propagation":"none","containsHead":true}],["C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/[all].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/rodo@_@astro":"pages/rodo.astro.mjs","\u0000@astro-page:src/pages/[all]@_@astro":"pages/_all_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_D1zokbbl.mjs","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/content/posts/post1.md?astroContentCollectionEntry=true":"chunks/post1_B0ierejf.mjs","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/content/posts/post2.md?astroContentCollectionEntry=true":"chunks/post2_B_4QADTm.mjs","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/content/posts/post3.md?astroContentCollectionEntry=true":"chunks/post3_CsB_YqgV.mjs","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/content/posts/post1.md?astroPropagatedAssets":"chunks/post1_D03-K7KV.mjs","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/content/posts/post2.md?astroPropagatedAssets":"chunks/post2_Dc4F5TE-.mjs","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/content/posts/post3.md?astroPropagatedAssets":"chunks/post3_DQJHbEQk.mjs","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/content/posts/post1.md":"chunks/post1_BInv8NtJ.mjs","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/content/posts/post2.md":"chunks/post2_BInQAWhP.mjs","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/content/posts/post3.md":"chunks/post3_CGt9DrPd.mjs","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/blog/BlogPreview":"_astro/BlogPreview.C91kRVnb.js","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/blog/BlogReact":"_astro/BlogReact.DsGoiFmx.js","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/components/FooterLink":"_astro/FooterLink.COM-eE_B.js","/astro/hoisted.js?q=1":"_astro/hoisted.pJ-EpZOz.js","/astro/hoisted.js?q=0":"_astro/hoisted.fe6XBm_7.js","/astro/hoisted.js?q=2":"_astro/hoisted.AcwLDiQ0.js","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/services/ServicesReact":"_astro/ServicesReact.B76zG-JV.js","C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/reviews/ReviewsReact":"_astro/ReviewsReact.D_YjA750.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/newLogo.CplkPN28.svg","/_astro/_all_.OBj0GI1r.css","/3klosyUpScaling.webp","/adwokatura.svg","/animationLogo1440.png","/animationLogo1440.svg","/arrowDown.svg","/arrowUp.svg","/blog1.webp","/blog1big.svg","/blog2.webp","/blog2big.svg","/blog3.webp","/blog3big.svg","/blog4.svg","/blog5.svg","/civil.webp","/close.svg","/criminal.webp","/facebook.svg","/family-law.webp","/favicon.svg","/fullStar.svg","/google.svg","/google091fede5f4f9bed4.html","/haski.webp","/IconClock.svg","/IconEmail.svg","/IconLocation.svg","/IconNIP.svg","/IconPhone.svg","/instagram.svg","/linkedin.svg","/newLogo.svg","/newLogoForDarkBackground.svg","/PaulinaKomendaUpScaling.webp","/persona.svg","/quotes.svg","/robots.txt","/spadkowe.webp","/statuaDesktop.svg","/statuaFull.svg","/statuaMobile.svg","/statuaTablet.svg","/tło.svg","/tło2xl.svg","/tłoLg.svg","/tłoMobile.svg","/fonts/Cinzel-Black.ttf","/fonts/Cinzel-Bold.ttf","/fonts/Cinzel-ExtraBold.ttf","/fonts/Cinzel-Medium.ttf","/fonts/Cinzel-Regular.ttf","/fonts/Cinzel-SemiBold.ttf","/fonts/Cinzel-VariableFont_wght.ttf","/fonts/OFL.txt","/fonts/OpenSans-Bold.ttf","/fonts/OpenSans-ExtraBold.ttf","/fonts/OpenSans-Medium.ttf","/fonts/OpenSans-Regular.ttf","/fonts/OpenSans-SemiBold.ttf","/fonts/OpenSans-VariableFont_wdth,wght.ttf","/fonts/README.txt","/_astro/BlogPreview.C91kRVnb.js","/_astro/BlogPreview.C91kRVnb.js.gz","/_astro/BlogReact.DsGoiFmx.js","/_astro/BlogReact.DsGoiFmx.js.gz","/_astro/client.BIGLHmRd.js","/_astro/client.BIGLHmRd.js.gz","/_astro/FooterLink.COM-eE_B.js","/_astro/Header.astro_astro_type_script_index_0_lang.4SGx37CF.js","/_astro/Header.astro_astro_type_script_index_0_lang.4SGx37CF.js.gz","/_astro/hoisted.AcwLDiQ0.js","/_astro/hoisted.fe6XBm_7.js","/_astro/hoisted.pJ-EpZOz.js","/_astro/index.CndI9BqS.js","/_astro/index.CndI9BqS.js.gz","/_astro/index.DhYZZe0J.js","/_astro/index.DhYZZe0J.js.gz","/_astro/jsx-runtime.7faW4zRM.js","/_astro/posts.BVAyYul5.js","/_astro/posts.BVAyYul5.js.gz","/_astro/ReviewsReact.D_YjA750.js","/_astro/ReviewsReact.D_YjA750.js.gz","/_astro/ServicesReact.B76zG-JV.js","/_astro/ServicesReact.B76zG-JV.js.gz","/_astro/store.D1BJRhCk.js","/_astro/ViewTransitions.astro_astro_type_script_index_0_lang.XYQjTWMW.js","/_astro/ViewTransitions.astro_astro_type_script_index_0_lang.XYQjTWMW.js.gz"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { manifest };
