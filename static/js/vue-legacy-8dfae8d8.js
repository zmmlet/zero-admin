System.register([],(function(e,t){"use strict";return{execute:function(){
/**
             * Make a map and return a function for checking if a key
             * is in that map.
             * IMPORTANT: all calls of this function must be prefixed with
             * \/\*#\_\_PURE\_\_\*\/
             * So that rollup can tree-shake them if necessary.
             */
function t(e,t){const n=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)n[o[r]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}e({$:Zr,D:ws,E:Fn,G:wo,H:Ao,J:Yr,N:Xr,O:Rt,R:Fo,S:oo,U:Eo,V:Lr,W:Nr,Z:vn,_:qr,a:ft,a1:Vr,a2:To,a3:mn,a4:gn,a6:Ro,a7:
/**
             * Creates a Router instance that can be used by a Vue app.
             *
             * @param options - {@link RouterOptions}
             */
function(e){const t=
/**
             * Creates a Router Matcher.
             *
             * @internal
             * @param routes - array of initial routes
             * @param globalOptions - global route options
             */
function(e,t){// normalized ordered array of matchers
const n=[],o=new Map;function r(e){return o.get(e)}function s(e,n,o){// used later on to remove by name
const r=!o,l=
/**
             * Normalizes a RouteRecordRaw. Creates a copy
             *
             * @param record
             * @returns the normalized version
             */
function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Fl(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}
/**
             * Normalize the optional `props` in a record to always be an object similar to
             * components. Also accept a boolean for components.
             * @param record
             */(e);// we might be the child of an alias
l.aliasOf=o&&o.record;const a=Bl(t,e),u=[l];// generate an array of records to correctly handle aliases
if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(Yi({},l,{// this allows us to hold a copy of the `components` option
// so that async components cache is hold on the original record
components:o?o.record.components:l.components,path:e,// we might be the child of an alias
aliasOf:o?o.record:l}))}let f,p;for(const t of u){const{path:u}=t;// Build up the path for nested routes if the child isn't an absolute
// route. Only add the / delimiter if the child path isn't empty and if the
// parent path doesn't have a trailing slash
if(n&&"/"!==u[0]){const e=n.record.path,o="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&o+u)}// create the object beforehand, so it can be passed to children
if(f=Pl(t,n,a),// if we are an alias we must tell the original record that we exist,
// so we can be removed
o?o.alias.push(f):(// otherwise, the first record is the original and others are aliases
p=p||f,p!==f&&p.alias.push(f),// remove the route if named and only for the top record (avoid in nested calls)
// this works because the original record is the first one
r&&e.name&&!Ml(f)&&i(e.name)),l.children){const e=l.children;for(let t=0;t<e.length;t++)s(e[t],f,o&&o.children[t])}// if there was no original record, then the first one was not an alias and all
// other aliases (if any) need to reference this record when adding children
o=o||f,// TODO: add normalized records for more flexibility
// if (parent && isAliasRecord(originalRecord)) {
//   parent.children.push(originalRecord)
// }
// Avoid adding a record that doesn't display anything. This allows passing through records without a component to
// not be reached and pass through the catch all route
(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&c(f)}return p?()=>{// since other matchers are aliases, they should be removed by the original matcher
i(p)}:Zi}function i(e){if(gl(e)){const t=o.get(e);t&&(o.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(i),t.alias.forEach(i))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&o.delete(e.record.name),e.children.forEach(i),e.alias.forEach(i))}}function l(){return n}function c(e){let t=0;for(;t<n.length&&kl(e,n[t])>=0&&(// Adding children with empty path should still appear before the parent
// https://github.com/vuejs/router/issues/1124
e.record.path!==n[t].record.path||!jl(e,n[t]));)t++;n.splice(t,0,e),// only add the original record to the name map
e.record.name&&!Ml(e)&&o.set(e.record.name,e)}function a(e,t){let r,s,i,l={};if("name"in e&&e.name){if(r=o.get(e.name),!r)throw bl(1/* ErrorTypes.MATCHER_NOT_FOUND */,{location:e});i=r.record.name,l=Yi(// paramsFromLocation is a new object
Tl(t.params,// only keep params that exist in the resolved location
// TODO: only keep optional params coming from a parent record
r.keys.filter((e=>!e.optional)).map((e=>e.name))),// discard any existing params in the current location that do not exist here
// #1497 this ensures better active/exact matching
e.params&&Tl(e.params,r.keys.map((e=>e.name)))),// throws if cannot be stringified
s=r.stringify(l)}else if("path"in e)// no need to resolve the path with the matcher as it was provided
// this also allows the user to control the encoding
s=e.path,r=n.find((e=>e.re.test(s))),// matcher should have a value after the loop
r&&(// we know the matcher works because we tested the regexp
l=r.parse(s),i=r.record.name);else{if(// match by name or path of current route
r=t.name?o.get(t.name):n.find((e=>e.re.test(t.path))),!r)throw bl(1/* ErrorTypes.MATCHER_NOT_FOUND */,{location:e,currentLocation:t});i=r.record.name,// since we are navigating to the same location, we don't need to pick the
// params like when `name` is provided
l=Yi({},t.params,e.params),s=r.stringify(l)}const c=[];let a=r;for(;a;)// reversed order so parents are at the beginning
c.unshift(a.record),a=a.parent;return{name:i,path:s,params:l,matched:c,meta:Ll(c)}}// add initial routes
return t=Bl({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:a,removeRoute:i,getRoutes:l,getRecordMatcher:r}}(e.routes,e),n=e.parseQuery||tc,o=e.stringifyQuery||nc,r=e.history,s=ac(),i=ac(),l=ac(),c=Rt(vl);let a=vl;// leave the scrollRestoration if no scrollBehavior is provided
Gi&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xi.bind(null,(e=>""+e)),f=Xi.bind(null,Ql),p=// @ts-expect-error: intentionally avoid the type check
Xi.bind(null,ec);function d(e,s){if(// const objectLocation = routerLocationAsObject(rawLocation)
// we create a copy to modify it later
s=Yi({},s||c.value),"string"==typeof e){const o=el(n,e,s.path),i=t.resolve({path:o.path},s),l=r.createHref(o.fullPath);// locationNormalized is always a new object
return Yi(o,i,{params:p(i.params),hash:ec(o.hash),redirectedFrom:void 0,href:l})}let i;// path could be relative in object as well
if("path"in e)i=Yi({},e,{path:el(n,e.path,s.path).path});else{// remove any nullish param
const t=Yi({},e.params);for(const e in t)null==t[e]&&delete t[e];// pass encoded values to the matcher, so it can produce encoded path and fullPath
i=Yi({},e,{params:f(e.params)}),// current location params are decoded, we need to encode them in case the
// matcher merges the params
s.params=f(s.params)}const l=t.resolve(i,s),a=e.hash||"";// the matcher might have merged current location params, so
// we need to run the decoding again
l.params=u(p(l.params));const d=
/**
             * Stringifies a URL object
             *
             * @param stringifyQuery
             * @param location
             */
function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}
/**
             * Strips off the base from the beginning of a location.pathname in a non-case-sensitive way.
             *
             * @param pathname - location.pathname
             * @param base - base to strip off
             */(o,Yi({},e,{hash:(h=a,Zl(h).replace(Kl,"{").replace(Yl,"}").replace(Wl,"^")),path:l.path}));
/**
             * Encode characters that need to be encoded on the hash section of the URL.
             *
             * @param text - string to encode
             * @returns encoded string
             */
var h;
/**
             * Encode characters that need to be encoded query values on the query
             * section of the URL.
             *
             * @param text - string to encode
             * @returns encoded string
             */const m=r.createHref(d);return Yi({fullPath:d,// keep the hash encoded so fullPath is effectively path + encodedQuery +
// hash
hash:a,query:// if the user is using a custom query lib like qs, we might have
// nested objects, so we keep the query as is, meaning it can contain
// numbers at `$route.query`, but at the point, the user will have to
// use their own type anyway.
// https://github.com/vuejs/router/issues/328#issuecomment-649481567
o===nc?oc(e.query):e.query||{}},l,{redirectedFrom:void 0,href:m})}function h(e){return"string"==typeof e?el(n,e,c.value.path):Yi({},e)}function m(e,t){if(a!==e)return bl(8/* ErrorTypes.NAVIGATION_CANCELLED */,{from:t,to:e})}function g(e){return y(e)}function v(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let o="function"==typeof n?n(e):n;return"string"==typeof o&&(o=o.includes("?")||o.includes("#")?o=h(o):// force empty params
{path:o},// @ts-expect-error: force empty params when a string is passed to let
// the router parse them again
o.params={}),Yi({query:e.query,hash:e.hash,// avoid transferring params if the redirect has a path
params:"path"in o?{}:e.params},o)}}function y(e,t){const n=a=d(e),r=c.value,s=e.state,i=e.force,l=!0===e.replace,u=v(n);if(u)return y(Yi(h(u),{state:"object"==typeof u?Yi({},s,u.state):s,force:i,replace:l}),// keep original redirectedFrom if it exists
t||n);// if it was a redirect we already called `pushWithRedirect` above
const f=n;let p;return f.redirectedFrom=t,!i&&
/**
             * Checks if two RouteLocation are equal. This means that both locations are
             * pointing towards the same {@link RouteRecord} and that all `params`, `query`
             * parameters and `hash` are the same
             *
             * @param a - first {@link RouteLocation}
             * @param b - second {@link RouteLocation}
             */
function(e,t,n){const o=t.matched.length-1,r=n.matched.length-1;return o>-1&&o===r&&nl(t.matched[o],n.matched[r])&&ol(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}
/**
             * Check if two `RouteRecords` are equal. Takes into account aliases: they are
             * considered equal to the `RouteRecord` they are aliasing.
             *
             * @param a - first {@link RouteRecord}
             * @param b - second {@link RouteRecord}
             */(o,r,n)&&(p=bl(16/* ErrorTypes.NAVIGATION_DUPLICATED */,{to:f,from:r}),// trigger scroll to allow scrolling to the same anchor
P(r,r,// this is a push, the only way for it to be triggered from a
// history.listen is with a redirect, which makes it become a push
!0,// This cannot be the first navigation because the initial location
// cannot be manually navigated to
!1)),(p?Promise.resolve(p):b(f,r)).catch((e=>Cl(e)?// navigation redirects still mark the router as ready
Cl(e,2/* ErrorTypes.NAVIGATION_GUARD_REDIRECT */)?e:O(e):// reject any unknown error
A(e,f,r))).then((e=>{if(e){if(Cl(e,2/* ErrorTypes.NAVIGATION_GUARD_REDIRECT */))return y(// keep options
Yi({// preserve an existing replacement but allow the redirect to override it
replace:l},h(e.to),{state:"object"==typeof e.to?Yi({},s,e.to.state):s,force:i}),// preserve the original redirectedFrom if any
t||f)}else// if we fail we don't finalize the navigation
e=w(f,r,!0,l,s);return C(f,r,e),e}))}
/**
                 * Helper to reject and skip all navigation guards if a new navigation happened
                 * @param to
                 * @param from
                 */function _(e,t){const n=m(e,t);return n?Promise.reject(n):Promise.resolve()}// TODO: refactor the whole before guards by internally using router.beforeEach
function b(e,t){let n;const[o,r,l]=function(e,t){const n=[],o=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let i=0;i<s;i++){const s=t.matched[i];s&&(e.matched.find((e=>nl(e,s)))?o.push(s):n.push(s));const l=e.matched[i];l&&(// the type doesn't matter because we are comparing per reference
t.matched.find((e=>nl(e,l)))||r.push(l))}return[n,o,r]}
/**
             * Returns the router instance. Equivalent to using `$router` inside
             * templates.
             */(e,t);// all components here have been resolved once because we are leaving
n=fc(o.reverse(),"beforeRouteLeave",e,t);// leavingRecords is already reversed
for(const s of o)s.leaveGuards.forEach((o=>{n.push(uc(o,e,t))}));const c=_.bind(null,e,t);// run the queue of per route beforeRouteLeave guards
return n.push(c),yc(n).then((()=>{// check global guards beforeEach
n=[];for(const o of s.list())n.push(uc(o,e,t));return n.push(c),yc(n)})).then((()=>{// check in components beforeRouteUpdate
n=fc(r,"beforeRouteUpdate",e,t);for(const o of r)o.updateGuards.forEach((o=>{n.push(uc(o,e,t))}));// run the queue of per route beforeEnter guards
return n.push(c),yc(n)})).then((()=>{// check the route beforeEnter
n=[];for(const o of e.matched)// do not trigger beforeEnter on reused views
if(o.beforeEnter&&!t.matched.includes(o))if(Ji(o.beforeEnter))for(const r of o.beforeEnter)n.push(uc(r,e,t));else n.push(uc(o.beforeEnter,e,t));// run the queue of per route beforeEnter guards
return n.push(c),yc(n)})).then((()=>(// NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
// clear existing enterCallbacks, these are added by extractComponentsGuards
e.matched.forEach((e=>e.enterCallbacks={})),// check in-component beforeRouteEnter
n=fc(l,"beforeRouteEnter",e,t),n.push(c),yc(n)))).then((()=>{// check global guards beforeResolve
n=[];for(const o of i.list())n.push(uc(o,e,t));return n.push(c),yc(n)})).catch((e=>Cl(e,8/* ErrorTypes.NAVIGATION_CANCELLED */)?e:Promise.reject(e)))}function C(e,t,n){// navigation is confirmed, call afterGuards
// TODO: wrap with error handlers
for(const o of l.list())o(e,t,n)}
/**
                 * - Cleans up any navigation guards
                 * - Changes the url if necessary
                 * - Calls the scrollBehavior
                 */function w(e,t,n,o,s){// a more recent navigation took place
const i=m(e,t);if(i)return i;// only consider as push if it's not the first navigation
const l=t===vl,a=Gi?history.state:{};// change URL only if the user did a push/replace and if it's not the initial navigation because
// it's just reflecting the url
n&&(// on the initial navigation, we want to reuse the scroll position from
// history state if it exists
o||l?r.replace(e.fullPath,Yi({scroll:l&&a&&a.scroll},s)):r.push(e.fullPath,s)),// accept current navigation
c.value=e,P(e,t,n,l),O()}let S;// attach listener to history to trigger navigations
function x(){// avoid setting up listeners twice due to an invalid first navigation
S||(S=r.listen(((e,t,n)=>{if(!L.listening)return;// cannot be a redirect route because it was in history
const o=d(e),s=v(o);// due to dynamic routing, and to hash history with manual navigation
// (manually changing the url or calling history.hash = '#/somewhere'),
// there could be a redirect record in history
if(s)return void y(Yi(s,{replace:!0}),o).catch(Zi);a=o;const i=c.value;// TODO: should be moved to web history?
var l,u;Gi&&(l=fl(i.fullPath,n.delta),u=ul(),pl.set(l,u)),b(o,i).catch((e=>Cl(e,12/* ErrorTypes.NAVIGATION_CANCELLED */)?e:Cl(e,2/* ErrorTypes.NAVIGATION_GUARD_REDIRECT */)?(// Here we could call if (info.delta) routerHistory.go(-info.delta,
// false) but this is bug prone as we have no way to wait the
// navigation to be finished before calling pushWithRedirect. Using
// a setTimeout of 16ms seems to work but there is no guarantee for
// it to work on every browser. So instead we do not restore the
// history entry and trigger a new navigation as requested by the
// navigation guard.
// the error is already handled by router.push we just want to avoid
// logging the error
y(e.to,o).then((e=>{// manual change in hash history #916 ending up in the URL not
// changing, but it was changed by the manual url change, so we
// need to manually change it ourselves
Cl(e,20/* ErrorTypes.NAVIGATION_DUPLICATED */)&&!n.delta&&n.type===il.pop&&r.go(-1,!1)})).catch(Zi),Promise.reject()):(// do not restore history on unknown direction
n.delta&&r.go(-n.delta,!1),A(e,o,i)))).then((e=>{// revert the navigation
(e=e||w(// after navigation, all matched components are resolved
o,i,!1))&&(n.delta&&// a new navigation has been triggered, so we do not want to revert, that will change the current history
// entry while a different route is displayed
!Cl(e,8/* ErrorTypes.NAVIGATION_CANCELLED */)?r.go(-n.delta,!1):n.type===il.pop&&Cl(e,20/* ErrorTypes.NAVIGATION_DUPLICATED */)&&// manual change in hash history #916
// it's like a push but lacks the information of the direction
r.go(-1,!1)),C(o,i,e)})).catch(Zi)})))}// Initialization and Errors
let E,k=ac(),R=ac();
/**
                 * Trigger errorHandlers added via onError and throws the error as well
                 *
                 * @param error - error to throw
                 * @param to - location we were navigating to when the error happened
                 * @param from - location we were navigating from when the error happened
                 * @returns the error as a rejected promise
                 */
function A(e,t,n){O(e);const o=R.list();return o.length&&o.forEach((o=>o(e,t,n))),Promise.reject(e)}function O(e){return E||(// still not ready if an error happened
E=!e,x(),k.list().forEach((([t,n])=>e?n(e):t())),k.reset()),e}// Scroll behavior
function P(t,n,o,r){const{scrollBehavior:s}=e;if(!Gi||!s)return Promise.resolve();const i=!o&&function(e){const t=pl.get(e);// consume it so it's not used again
return pl.delete(e),t}// TODO: RFC about how to save scroll position
/**
             * ScrollBehavior instance used by the router to compute and restore the scroll
             * position when navigating.
             */
// export interface ScrollHandler<ScrollPositionEntry extends HistoryStateValue, ScrollPosition extends ScrollPositionEntry> {
//   // returns a scroll position that can be saved in history
//   compute(): ScrollPositionEntry
//   // can take an extended ScrollPositionEntry
//   scroll(position: ScrollPosition): void
// }
// export const scrollHandler: ScrollHandler<ScrollPosition> = {
//   compute: computeScroll,
//   scroll: scrollToPosition,
// }
(fl(t.fullPath,0))||(r||!o)&&history.state&&history.state.scroll||null;return Zt().then((()=>s(t,n,i))).then((e=>e&&function(e){let t;if("el"in e){const n=e.el,o="string"==typeof n&&n.startsWith("#"),r="string"==typeof n?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}(e))).catch((e=>A(e,t,n)))}const T=e=>r.go(e);let F;const M=new Set,L={currentRoute:c,listening:!0,addRoute:function(e,n){let o,r;return gl(e)?(o=t.getRecordMatcher(e),r=n):r=e,t.addRoute(r,o)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:d,options:e,push:g,replace:function(e){return g(Yi(h(e),{replace:!0}))},go:T,back:()=>T(-1),forward:()=>T(1),beforeEach:s.add,beforeResolve:i.add,afterEach:l.add,onError:R.add,isReady:function(){return E&&c.value!==vl?Promise.resolve():new Promise(((e,t)=>{k.add([e,t])}))},install(e){e.component("RouterLink",dc),e.component("RouterView",vc),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Pt(c)}),// this initial navigation is only necessary on client, on server it doesn't
// make sense because it will create an extra unnecessary navigation and could
// lead to problems
Gi&&// used for the initial navigation client side to avoid pushing
// multiple times when the router is used in multiple apps
!F&&c.value===vl&&(// see above
F=!0,g(r.location).catch((e=>{})));const t={};for(const o in vl)// @ts-expect-error: the key matches
t[o]=bs((()=>c.value[o]));e.provide(ic,this),e.provide(lc,ft(t)),e.provide(cc,c);const n=e.unmount;M.add(e),e.unmount=function(){M.delete(e),// the router is not attached to an app anymore
M.size<1&&(// invalidate the current navigation
a=vl,S&&S(),S=null,c.value=vl,F=!1,E=!1),n()}}};return L},a8:
/**
             * Creates an HTML5 history. Most common history for single page applications.
             *
             * @param base -
             */
function(e){const t=function(e){const{history:t,location:n}=window,o={value:hl(e,n)},r={value:t.state};// private variables
function s(o,s,i){
/**
                     * if a base tag is provided, and we are on a normal domain, we have to
                     * respect the provided `base` attribute because pushState() will use it and
                     * potentially erase anything before the `#` like at
                     * https://github.com/vuejs/router/issues/685 where a base of
                     * `/folder/#` but a base of `/` would erase the `/folder/` section. If
                     * there is no host, the `<base>` tag makes no sense and if there isn't a
                     * base tag we can just use everything after the `#`.
                     */
const l=e.indexOf("#"),c=l>-1?(n.host&&document.querySelector("base")?e:e.slice(l))+o:dl()+e+o;try{// BROWSER QUIRK
// NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
t[i?"replaceState":"pushState"](s,"",c),r.value=s}catch(a){// Force the navigation, this also resets the call count
n[i?"replace":"assign"](c)}}function i(e,n){s(e,Yi({},t.state,ml(r.value.back,// keep back and forward entries but override current position
e,r.value.forward,!0),n,{position:r.value.position}),!0),o.value=e}function l(e,n){// Add to current entry the information of where we are going
// as well as saving the current position
const i=Yi({},// use current history state to gracefully handle a wrong call to
// history.replaceState
// https://github.com/vuejs/router/issues/366
r.value,t.state,{forward:e,scroll:ul()});s(i.current,i,!0),s(e,Yi({},ml(o.value,e,null),{position:i.position+1},n),!1),o.value=e}// build current history entry as this is a fresh navigation
return r.value||s(o.value,{back:null,current:o.value,forward:null,// the length is off by one, we need to decrease it
position:t.length-1,replaced:!0,// don't add a scroll as the user may have an anchor, and we want
// scrollBehavior to be triggered without a saved position
scroll:null},!0),{location:o,state:r,push:l,replace:i}}(e=// Generic utils
/**
             * Normalizes a base by removing any trailing slash and reading the base tag if
             * present.
             *
             * @param base - base to normalize
             */
function(e){if(!e)if(Gi){// respect <base> tag
const t=document.querySelector("base");// strip full URL origin
e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";// ensure leading slash when it was removed by the regex above avoid leading
// slash with hash because the file could be read from the disk like file://
// and the leading slash would cause problems
// remove the trailing slash so all other method can just do `base + fullPath`
// to build an href
return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(Qi,"")}// remove any character before the hash
(e)),n=function(e,t,n,o){let r=[],s=[],i=null;const l=({state:s})=>{const l=hl(e,location),c=n.value,a=t.value;let u=0;if(s){// ignore the popstate and reset the pauseState
if(n.value=l,t.value=s,i&&i===c)return void(i=null);u=a?s.position-a.position:0}else o(l);// console.log({ deltaFromCurrent })
// Here we could also revert the navigation by calling history.go(-delta)
// this listener will have to be adapted to not trigger again and to wait for the url
// to be updated before triggering the listeners. Some kind of validation function would also
// need to be passed to the listeners so the navigation can be accepted
// call all listeners
r.forEach((e=>{e(n.value,c,{delta:u,type:il.pop,direction:u?u>0?ll.forward:ll.back:ll.unknown})}))};function c(){i=n.value}function a(e){// set up the listener and prepare teardown callbacks
r.push(e);const t=()=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)};return s.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(Yi({},e.state,{scroll:ul()}),"")}function f(){for(const e of s)e();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}// set up the listeners and prepare teardown callbacks
return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:a,destroy:f}}
/**
             * Creates a state object
             */(e,t.state,t.location,t.replace),o=Yi({// it's overridden right after
location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:al.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o},a9:function(){return Tn(ic)},aa:o,ab:Zn,ac:ts,ad:ro,ae:Co,b:Et,c:mt,d:jt,e:ee,f:ne,h:Lt,i:Tn,k:Ur,l:Yn,m:bt,n:Zt,o:oe,r:kt,t:_t,u:Pt,w:Bn,x:Pn});const n=t("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt");function o(e){if(k(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=T(r)?l(r):o(r);if(s)for(const e in s)t[e]=s[e]}return t}return T(e)||M(e)?e:void 0}const r=/;(?![^(]*\))/g,s=/:([^]+)/,i=/\/\*[\s\S]*?\*\//g;function l(e){const t={};return e.replace(i,"").split(r).forEach((e=>{if(e){const n=e.split(s);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function c(e){let t="";if(T(e))t=e;else if(k(e))for(let n=0;n<e.length;n++){const o=c(e[n]);o&&(t+=o+" ")}else if(M(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}
/**
             * On the client we only need to offer special cases for boolean attributes that
             * have different names from their corresponding dom properties:
             * - itemscope -> N/A
             * - allowfullscreen -> allowFullscreen
             * - formnovalidate -> formNoValidate
             * - ismap -> isMap
             * - nomodule -> noModule
             * - novalidate -> noValidate
             * - readonly -> readOnly
             */
const a=t("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");
/**
             * Boolean attributes should be included if the value is truthy or ''.
             * e.g. `<select multiple>` compiles to `{ multiple: '' }`
             */
function u(e){return!!e||""===e}function f(e,t){if(e===t)return!0;let n=O(e),o=O(t);if(n||o)return!(!n||!o)&&e.getTime()===t.getTime();if(n=F(e),o=F(t),n||o)return e===t;if(n=k(e),o=k(t),n||o)return!(!n||!o)&&function(e,t){if(e.length!==t.length)return!1;let n=!0;for(let o=0;n&&o<e.length;o++)n=f(e[o],t[o]);return n}(e,t);if(n=M(e),o=M(t),n||o){/* istanbul ignore if: this if will probably never be called */if(!n||!o)return!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e){const o=e.hasOwnProperty(n),r=t.hasOwnProperty(n);if(o&&!r||!o&&r||!f(e[n],t[n]))return!1}}return String(e)===String(t)}function p(e,t){return e.findIndex((e=>f(e,t)))}
/**
             * For converting {{ interpolation }} values to displayed strings.
             * @private
             */const d=e("a0",(e=>T(e)?e:null==e?"":k(e)||M(e)&&(e.toString===B||!P(e.toString))?JSON.stringify(e,h,2):String(e))),h=(e,t)=>// can't use isRef here since @vue/shared has no deps
t&&t.__v_isRef?h(e,t.value):R(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:A(t)?{[`Set(${t.size})`]:[...t.values()]}:!M(t)||k(t)||$(t)?t:String(t),m={},g=[],v=()=>{},y=()=>!1,_=/^on[^a-z]/,b=e=>_.test(e),C=e=>e.startsWith("onUpdate:"),w=Object.assign,S=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},x=Object.prototype.hasOwnProperty,E=(e,t)=>x.call(e,t),k=Array.isArray,R=e=>"[object Map]"===j(e),A=e=>"[object Set]"===j(e),O=e=>"[object Date]"===j(e),P=e=>"function"==typeof e,T=e=>"string"==typeof e,F=e=>"symbol"==typeof e,M=e=>null!==e&&"object"==typeof e,L=e=>M(e)&&P(e.then)&&P(e.catch),B=Object.prototype.toString,j=e=>B.call(e),$=e=>"[object Object]"===j(e),I=e=>T(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,V=t(// the leading comma is intentional so empty string "" is also included
",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),N=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},U=/-(\w)/g,D=e("Q",N((e=>e.replace(U,((e,t)=>t?t.toUpperCase():""))))),H=/\B([A-Z])/g,z=N((e=>e.replace(H,"-$1").toLowerCase())),W=N((e=>e.charAt(0).toUpperCase()+e.slice(1))),q=N((e=>e?`on${W(e)}`:"")),K=(e,t)=>!Object.is(e,t),G=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Y=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},X=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Z,J;class Q{constructor(e=!1){this.detached=e,
/**
                     * @internal
                     */
this.active=!0,
/**
                     * @internal
                     */
this.effects=[],
/**
                     * @internal
                     */
this.cleanups=[],this.parent=J,!e&&J&&(this.index=(J.scopes||(J.scopes=[])).push(this)-1)}run(e){if(this.active){const t=J;try{return J=this,e()}finally{J=t}}}
/**
                 * This should only be called on non-detached scopes
                 * @internal
                 */on(){J=this}
/**
                 * This should only be called on non-detached scopes
                 * @internal
                 */off(){J=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);// nested scope, dereference from parent to avoid memory leaks
if(!this.detached&&this.parent&&!e){// optimized O(1) removal
const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this.active=!1}}}function ee(e){return new Q(e)}function te(e,t=J){t&&t.active&&t.effects.push(e)}function ne(){return J}function oe(e){J&&J.cleanups.push(e)}const re=e=>{const t=new Set(e);return t.w=0,t.n=0,t},se=e=>(e.w&ue)>0,ie=e=>(e.n&ue)>0,le=new WeakMap;// The number of effects currently being tracked recursively.
let ce,ae=0,ue=1;const fe=Symbol(""),pe=Symbol("");class de{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,te(this,n)}run(){if(!this.active)return this.fn();let e=ce,t=me;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ce,ce=this,me=!0,ue=1<<++ae,ae<=30?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ue;// set was tracked
})(this):he(this),this.fn()}finally{ae<=30&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const r=t[o];se(r)&&!ie(r)?r.delete(e):t[n++]=r,// clear bits
r.w&=~ue,r.n&=~ue}t.length=n}})(this),ue=1<<--ae,ce=this.parent,me=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){// stopped while running itself - defer the cleanup
ce===this?this.deferStop=!0:this.active&&(he(this),this.onStop&&this.onStop(),this.active=!1)}}function he(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let me=!0;const ge=[];function ve(){ge.push(me),me=!1}function ye(){const e=ge.pop();me=void 0===e||e}function _e(e,t,n){if(me&&ce){let t=le.get(e);t||le.set(e,t=new Map);let o=t.get(n);o||t.set(n,o=re()),be(o)}}function be(e,t){let n=!1;ae<=30?ie(e)||(e.n|=ue,// set newly tracked
n=!se(e)):// Full cleanup mode.
n=!e.has(ce),n&&(e.add(ce),ce.deps.push(e))}function Ce(e,t,n,o,r,s){const i=le.get(e);if(!i)// never been tracked
return;let l=[];if("clear"/* TriggerOpTypes.CLEAR */===t)// collection being cleared
// trigger all effects for target
l=[...i.values()];else if("length"===n&&k(e)){const e=X(o);i.forEach(((t,n)=>{("length"===n||n>=e)&&l.push(t)}))}else// also run for iteration key on ADD | DELETE | Map.SET
switch(// schedule runs for SET | ADD | DELETE
void 0!==n&&l.push(i.get(n)),t){case"add"/* TriggerOpTypes.ADD */:k(e)?I(n)&&// new index added to array -> length changes
l.push(i.get("length")):(l.push(i.get(fe)),R(e)&&l.push(i.get(pe)));break;case"delete"/* TriggerOpTypes.DELETE */:k(e)||(l.push(i.get(fe)),R(e)&&l.push(i.get(pe)));break;case"set"/* TriggerOpTypes.SET */:R(e)&&l.push(i.get(fe))}if(1===l.length)l[0]&&we(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);we(re(e))}}function we(e,t){// spread into array for stabilization
const n=k(e)?e:[...e];for(const o of n)o.computed&&Se(o);for(const o of n)o.computed||Se(o)}function Se(e,t){(e!==ce||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const xe=t("__proto__,__v_isRef,__isVue"),Ee=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(F)),ke=Fe(),Re=Fe(!1,!0),Ae=Fe(!0),Oe=Fe(!0,!0),Pe=Te();function Te(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=_t(this);for(let t=0,r=this.length;t<r;t++)_e(n,0/* TrackOpTypes.GET */,t+"");// we run the method using the original args first (which may be reactive)
const o=n[t](...e);return-1===o||!1===o?n[t](...e.map(_t)):o}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){ve();const n=_t(this)[t].apply(this,e);return ye(),n}})),e}function Fe(e=!1,t=!1){return function(n,o,r){if("__v_isReactive"/* ReactiveFlags.IS_REACTIVE */===o)return!e;if("__v_isReadonly"/* ReactiveFlags.IS_READONLY */===o)return e;if("__v_isShallow"/* ReactiveFlags.IS_SHALLOW */===o)return t;if("__v_raw"/* ReactiveFlags.RAW */===o&&r===(e?t?at:ct:t?lt:it).get(n))return n;const s=k(n);if(!e&&s&&E(Pe,o))return Reflect.get(Pe,o,r);const i=Reflect.get(n,o,r);return(F(o)?Ee.has(o):xe(o))?i:(e||_e(n,0/* TrackOpTypes.GET */,o),t?i:Et(i)?s&&I(o)?i:i.value:M(i)?e?dt(i):ft(i):i)}}function Me(e=!1){return function(t,n,o,r){let s=t[n];if(gt(s)&&Et(s)&&!Et(o))return!1;if(!e&&(vt(o)||gt(o)||(s=_t(s),o=_t(o)),!k(t)&&Et(s)&&!Et(o)))return s.value=o,!0;const i=k(t)&&I(n)?Number(n)<t.length:E(t,n),l=Reflect.set(t,n,o,r);// don't trigger if target is something up in the prototype chain of original
return t===_t(r)&&(i?K(o,s)&&Ce(t,"set"/* TriggerOpTypes.SET */,n,o):Ce(t,"add"/* TriggerOpTypes.ADD */,n,o)),l}}const Le={get:ke,set:Me(),deleteProperty:function(e,t){const n=E(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&n&&Ce(e,"delete"/* TriggerOpTypes.DELETE */,t,void 0),o},has:function(e,t){const n=Reflect.has(e,t);return F(t)&&Ee.has(t)||_e(e,0/* TrackOpTypes.HAS */,t),n},ownKeys:function(e){return _e(e,0/* TrackOpTypes.ITERATE */,k(e)?"length":fe),Reflect.ownKeys(e)}},Be={get:Ae,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},je=w({},Le,{get:Re,set:Me(!0)}),$e=w({},Be,{get:Oe}),Ie=e=>e,Ve=e=>Reflect.getPrototypeOf(e);function Ne(e,t,n=!1,o=!1){const r=_t(// #1772: readonly(reactive(Map)) should return readonly + reactive version
// of the value
e=e.__v_raw),s=_t(t);n||(t!==s&&_e(r,0/* TrackOpTypes.GET */,t),_e(r,0/* TrackOpTypes.GET */,s));const{has:i}=Ve(r),l=o?Ie:n?wt:Ct;return i.call(r,t)?l(e.get(t)):i.call(r,s)?l(e.get(s)):void(e!==r&&// #3602 readonly(reactive(Map))
// ensure that the nested reactive `Map` can do tracking for itself
e.get(t))}function Ue(e,t=!1){const n=this.__v_raw,o=_t(n),r=_t(e);return t||(e!==r&&_e(o,0/* TrackOpTypes.HAS */,e),_e(o,0/* TrackOpTypes.HAS */,r)),e===r?n.has(e):n.has(e)||n.has(r)}function De(e,t=!1){return e=e.__v_raw,!t&&_e(_t(e),0/* TrackOpTypes.ITERATE */,fe),Reflect.get(e,"size",e)}function He(e){e=_t(e);const t=_t(this);return Ve(t).has.call(t,e)||(t.add(e),Ce(t,"add"/* TriggerOpTypes.ADD */,e,e)),this}function ze(e,t){t=_t(t);const n=_t(this),{has:o,get:r}=Ve(n);let s=o.call(n,e);s||(e=_t(e),s=o.call(n,e));const i=r.call(n,e);return n.set(e,t),s?K(t,i)&&Ce(n,"set"/* TriggerOpTypes.SET */,e,t):Ce(n,"add"/* TriggerOpTypes.ADD */,e,t),this}function We(e){const t=_t(this),{has:n,get:o}=Ve(t);let r=n.call(t,e);r||(e=_t(e),r=n.call(t,e)),o&&o.call(t,e);// forward the operation before queueing reactions
const s=t.delete(e);return r&&Ce(t,"delete"/* TriggerOpTypes.DELETE */,e,void 0),s}function qe(){const e=_t(this),t=0!==e.size,n=e.clear();return t&&Ce(e,"clear"/* TriggerOpTypes.CLEAR */,void 0,void 0),n}function Ke(e,t){return function(n,o){const r=this,s=r.__v_raw,i=_t(s),l=t?Ie:e?wt:Ct;return!e&&_e(i,0/* TrackOpTypes.ITERATE */,fe),s.forEach(((e,t)=>n.call(o,l(e),l(t),r)))}}function Ge(e,t,n){return function(...o){const r=this.__v_raw,s=_t(r),i=R(s),l="entries"===e||e===Symbol.iterator&&i,c="keys"===e&&i,a=r[e](...o),u=n?Ie:t?wt:Ct;// return a wrapped iterator which returns observed versions of the
// values emitted from the real iterator
return!t&&_e(s,0/* TrackOpTypes.ITERATE */,c?pe:fe),{// iterator protocol
next(){const{value:e,done:t}=a.next();return t?{value:e,done:t}:{value:l?[u(e[0]),u(e[1])]:u(e),done:t}},// iterable protocol
[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return"delete"/* TriggerOpTypes.DELETE */!==e&&this}}function Xe(){const e={get(e){return Ne(this,e)},get size(){return De(this)},has:Ue,add:He,set:ze,delete:We,clear:qe,forEach:Ke(!1,!1)},t={get(e){return Ne(this,e,!1,!0)},get size(){return De(this)},has:Ue,add:He,set:ze,delete:We,clear:qe,forEach:Ke(!1,!0)},n={get(e){return Ne(this,e,!0)},get size(){return De(this,!0)},has(e){return Ue.call(this,e,!0)},add:Ye("add"/* TriggerOpTypes.ADD */),set:Ye("set"/* TriggerOpTypes.SET */),delete:Ye("delete"/* TriggerOpTypes.DELETE */),clear:Ye("clear"/* TriggerOpTypes.CLEAR */),forEach:Ke(!0,!1)},o={get(e){return Ne(this,e,!0,!0)},get size(){return De(this,!0)},has(e){return Ue.call(this,e,!0)},add:Ye("add"/* TriggerOpTypes.ADD */),set:Ye("set"/* TriggerOpTypes.SET */),delete:Ye("delete"/* TriggerOpTypes.DELETE */),clear:Ye("clear"/* TriggerOpTypes.CLEAR */),forEach:Ke(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((r=>{e[r]=Ge(r,!1,!1),n[r]=Ge(r,!0,!1),t[r]=Ge(r,!1,!0),o[r]=Ge(r,!0,!0)})),[e,n,t,o]}const[Ze,Je,Qe,et]=Xe();function tt(e,t){const n=t?e?et:Qe:e?Je:Ze;return(t,o,r)=>"__v_isReactive"/* ReactiveFlags.IS_REACTIVE */===o?!e:"__v_isReadonly"/* ReactiveFlags.IS_READONLY */===o?e:"__v_raw"/* ReactiveFlags.RAW */===o?t:Reflect.get(E(n,o)&&o in t?n:t,o,r)}const nt={get:tt(!1,!1)},ot={get:tt(!1,!0)},rt={get:tt(!0,!1)},st={get:tt(!0,!0)},it=new WeakMap,lt=new WeakMap,ct=new WeakMap,at=new WeakMap;function ut(e){return e.__v_skip||!Object.isExtensible(e)?0/* TargetType.INVALID */:function(e){switch(e){case"Object":case"Array":return 1/* TargetType.COMMON */;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2/* TargetType.COLLECTION */;default:return 0/* TargetType.INVALID */}}((e=>j(e).slice(8,-1))(e))}function ft(e){// if trying to observe a readonly proxy, return the readonly version.
return gt(e)?e:ht(e,!1,Le,nt,it)}
/**
             * Return a shallowly-reactive copy of the original object, where only the root
             * level properties are reactive. It also does not auto-unwrap refs (even at the
             * root level).
             */function pt(e){return ht(e,!1,je,ot,lt)}
/**
             * Creates a readonly copy of the original object. Note the returned copy is not
             * made reactive, but `readonly` can be called on an already reactive object.
             */function dt(e){return ht(e,!0,Be,rt,ct)}
/**
             * Returns a reactive-copy of the original object, where only the root level
             * properties are readonly, and does NOT unwrap refs nor recursively convert
             * returned properties.
             * This is used for creating the props proxy object for stateful components.
             */function ht(e,t,n,o,r){if(!M(e))return e;// target is already a Proxy, return it.
// exception: calling readonly() on a reactive object
if(e.__v_raw&&(!t||!e.__v_isReactive))return e;// target already has corresponding Proxy
const s=r.get(e);if(s)return s;// only specific value types can be observed.
const i=ut(e);if(0/* TargetType.INVALID */===i)return e;const l=new Proxy(e,2/* TargetType.COLLECTION */===i?o:n);return r.set(e,l),l}function mt(e){return gt(e)?mt(e.__v_raw):!(!e||!e.__v_isReactive)}function gt(e){return!(!e||!e.__v_isReadonly)}function vt(e){return!(!e||!e.__v_isShallow)}function yt(e){return mt(e)||gt(e)}function _t(e){const t=e&&e.__v_raw;return t?_t(t):e}function bt(e){return Y(e,"__v_skip"/* ReactiveFlags.SKIP */,!0),e}const Ct=e=>M(e)?ft(e):e,wt=e=>M(e)?dt(e):e;function St(e){me&&ce&&be((e=_t(e)).dep||(e.dep=re()))}function xt(e,t){(e=_t(e)).dep&&we(e.dep)}function Et(e){return!(!e||!0!==e.__v_isRef)}function kt(e){return At(e,!1)}function Rt(e){return At(e,!0)}function At(e,t){return Et(e)?e:new Ot(e,t)}class Ot{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:_t(e),this._value=t?e:Ct(e)}get value(){return St(this),this._value}set value(e){const t=this.__v_isShallow||vt(e)||gt(e);e=t?e:_t(e),K(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ct(e),xt(this))}}function Pt(e){return Et(e)?e.value:e}const Tt={get:(e,t,n)=>Pt(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return Et(r)&&!Et(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function Ft(e){return mt(e)?e:new Proxy(e,Tt)}class Mt{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:n}=e((()=>St(this)),(()=>xt(this)));this._get=t,this._set=n}get value(){return this._get()}set value(e){this._set(e)}}function Lt(e){const t=k(e)?new Array(e.length):{};for(const n in e)t[n]=jt(e,n);return t}class Bt{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}}function jt(e,t,n){const o=e[t];return Et(o)?o:new Bt(e,t,n)}var $t;class It{constructor(e,t,n,o){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[$t]=!1,this._dirty=!0,this.effect=new de(e,(()=>{this._dirty||(this._dirty=!0,xt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=n}get value(){// the computed ref may get wrapped by other proxies e.g. readonly() #3376
const e=_t(this);return St(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Vt(e,t,n,o){let r;try{r=o?e(...o):e()}catch(s){Ut(s,t,n)}return r}function Nt(e,t,n,o){if(P(e)){const r=Vt(e,t,n,o);return r&&L(r)&&r.catch((e=>{Ut(e,t,n)})),r}const r=[];for(let s=0;s<e.length;s++)r.push(Nt(e[s],t,n,o));return r}function Ut(e,t,n,o=!0){if(t&&t.vnode,t){let o=t.parent;// the exposed instance is the render proxy to keep it consistent with 2.x
const r=t.proxy,s=n;// in production the hook receives only the error code
for(;o;){const t=o.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,s))return;o=o.parent}// app-level handling
const i=t.appContext.config.errorHandler;if(i)return void Vt(i,null,10/* ErrorCodes.APP_ERROR_HANDLER */,[e,r,s])}}$t="__v_isReadonly"/* ReactiveFlags.IS_READONLY */;let Dt=!1,Ht=!1;const zt=[];let Wt=0;const qt=[];let Kt=null,Gt=0;const Yt=Promise.resolve();let Xt=null;function Zt(e){const t=Xt||Yt;return e?t.then(this?e.bind(this):e):t}// #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.
function Jt(e){// the dedupe search uses the startIndex argument of Array.includes()
// by default the search index includes the current job that is being run
// so it cannot recursively trigger itself again.
// if the job is a watch() callback, the search will start with a +1 index to
// allow it recursively trigger itself - it is the user's responsibility to
// ensure it doesn't end up in an infinite loop.
zt.length&&zt.includes(e,Dt&&e.allowRecurse?Wt+1:Wt)||(null==e.id?zt.push(e):zt.splice(function(e){// the start index should be `flushIndex + 1`
let t=Wt+1,n=zt.length;for(;t<n;){const o=t+n>>>1;on(zt[o])<e?t=o+1:n=o}return t}(e.id),0,e),Qt())}function Qt(){Dt||Ht||(Ht=!0,Xt=Yt.then(sn))}function en(e){k(e)?// if cb is an array, it is a component lifecycle hook which can only be
// triggered by a job, which is already deduped in the main queue, so
// we can skip duplicate check here to improve perf
qt.push(...e):Kt&&Kt.includes(e,e.allowRecurse?Gt+1:Gt)||qt.push(e),Qt()}function tn(e,// if currently flushing, skip the current job itself
t=(Dt?Wt+1:0)){for(;t<zt.length;t++){const e=zt[t];e&&e.pre&&(zt.splice(t,1),t--,e())}}function nn(e){if(qt.length){const e=[...new Set(qt)];// #1947 already has active queue, nested flushPostFlushCbs call
if(qt.length=0,Kt)return void Kt.push(...e);for(Kt=e,Kt.sort(((e,t)=>on(e)-on(t))),Gt=0;Gt<Kt.length;Gt++)Kt[Gt]();Kt=null,Gt=0}}const on=e=>null==e.id?1/0:e.id,rn=(e,t)=>{const n=on(e)-on(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function sn(e){Ht=!1,Dt=!0,// Sort queue before flush.
// This ensures that:
// 1. Components are updated from parent to child. (because parent is always
//    created before the child so its render effect will have smaller
//    priority number)
// 2. If a component is unmounted during a parent component's update,
//    its update can be skipped.
zt.sort(rn);try{for(Wt=0;Wt<zt.length;Wt++){const e=zt[Wt];e&&!1!==e.active&&// console.log(`running:`, job.id)
Vt(e,null,14/* ErrorCodes.SCHEDULER */)}}finally{Wt=0,zt.length=0,nn(),Dt=!1,Xt=null,// some postFlushCb queued jobs!
// keep flushing until it drains.
(zt.length||qt.length)&&sn()}}let ln,cn=[];function an(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||m;let r=n;const s=t.startsWith("update:"),i=s&&t.slice(7);// for v-model update:xxx events, apply modifiers on args
if(i&&i in o){const e=`${"modelValue"===i?"model":i}Modifiers`,{number:t,trim:s}=o[e]||m;s&&(r=n.map((e=>T(e)?e.trim():e))),t&&(r=n.map(X))}let l,c=o[l=q(t)]||// also try camelCase event handler (#2249)
o[l=q(D(t))];// for v-model update:xxx events, also trigger kebab-case equivalent
// for props passed via kebab-case
!c&&s&&(c=o[l=q(z(t))]),c&&Nt(c,e,6/* ErrorCodes.COMPONENT_EVENT_HANDLER */,r);const a=o[l+"Once"];if(a){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,Nt(a,e,6/* ErrorCodes.COMPONENT_EVENT_HANDLER */,r)}}function un(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(void 0!==r)return r;const s=e.emits;let i={},l=!1;// apply mixin/extends props
if(!P(e)){const o=e=>{const n=un(e,t,!0);n&&(l=!0,w(i,n))};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return s||l?(k(s)?s.forEach((e=>i[e]=null)):w(i,s),M(e)&&o.set(e,i),i):(M(e)&&o.set(e,null),null)}// Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.
function fn(e,t){return!(!e||!b(t))&&(t=t.slice(2).replace(/Once$/,""),E(e,t[0].toLowerCase()+t.slice(1))||E(e,z(t))||E(e,t))}
/**
             * mark the current rendering instance for asset resolution (e.g.
             * resolveComponent, resolveDirective) during render
             */let pn=null,dn=null;
/**
             * Note: rendering calls maybe nested. The function returns the parent rendering
             * instance if present, which should be restored after the render is done:
             *
             * ```js
             * const prev = setCurrentRenderingInstance(i)
             * // ...render
             * setCurrentRenderingInstance(prev)
             * ```
             */
function hn(e){const t=pn;return pn=e,dn=e&&e.type.__scopeId||null,t}
/**
             * Set scope id when creating hoisted vnodes.
             * @private compiler helper
             */function mn(e){dn=e}
/**
             * Technically we no longer need this after 3.0.8 but we need to keep the same
             * API for backwards compat w/ code generated by compilers.
             * @private
             */function gn(){dn=null}
/**
             * Only for backwards compat
             * @private
             */
/**
             * Wrap a slot function to memoize current rendering instance
             * @private compiler helper
             */
function vn(e,t=pn,n){if(!t)return e;// already normalized
if(e._n)return e;const o=(...n)=>{// If a user calls a compiled slot inside a template expression (#1745), it
// can mess up block tracking, so by default we disable block tracking and
// force bail out when invoking a compiled slot (indicated by the ._d flag).
// This isn't necessary if rendering a compiled `<slot>`, so we flip the
// ._d flag off when invoking the wrapped fn inside `renderSlot`.
o._d&&$r(-1);const r=hn(t);let s;try{s=e(...n)}finally{hn(r),o._d&&$r(1)}return s};// mark normalized to avoid duplicated wrapping
return o._n=!0,// mark this as compiled by default
// this is used in vnode.ts -> normalizeChildren() to set the slot
// rendering flag.
o._c=!0,// disable block tracking by default
o._d=!0,o}function yn(e){const{type:t,vnode:n,proxy:o,withProxy:r,props:s,propsOptions:[i],slots:l,attrs:c,emit:a,render:u,renderCache:f,data:p,setupState:d,ctx:h,inheritAttrs:m}=e;let g,v;const y=hn(e);try{if(4/* ShapeFlags.STATEFUL_COMPONENT */&n.shapeFlag){// withProxy is a proxy with a different `has` trap only for
// runtime-compiled render functions using `with` block.
const e=r||o;g=Jr(u.call(e,e,f,s,d,p,h)),v=c}else{// functional
const e=t;// in dev, mark attrs accessed if optional props (attrs === props)
g=Jr(e.length>1?e(s,{attrs:c,slots:l,emit:a}):e(s,null/* we know it doesn't need it */)),v=t.props?c:_n(c)}}catch(b){Fr.length=0,Ut(b,e,1/* ErrorCodes.RENDER_FUNCTION */),g=Kr(Pr)}// attr merging
// in dev mode, comments are preserved, and it's possible for a template
// to have comments along side the root element which makes it a fragment
let _=g;if(v&&!1!==m){const e=Object.keys(v),{shapeFlag:t}=_;e.length&&7/* ShapeFlags.COMPONENT */&t&&(i&&e.some(C)&&(// If a v-model listener (onUpdate:xxx) has a corresponding declared
// prop, it indicates this component expects to handle v-model and
// it should not fallthrough.
// related: #1543, #1643, #1989
v=bn(v,i)),_=Yr(_,v))}// inherit directives
return n.dirs&&(// clone before mutating since the root may be a hoisted vnode
_=Yr(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),// inherit transition data
n.transition&&(_.transition=n.transition),g=_,hn(y),g}const _n=e=>{let t;for(const n in e)("class"===n||"style"===n||b(n))&&((t||(t={}))[n]=e[n]);return t},bn=(e,t)=>{const n={};for(const o in e)C(o)&&o.slice(9)in t||(n[o]=e[o]);return n};function Cn(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const s=o[r];if(t[s]!==e[s]&&!fn(n,s))return!0}return!1}function wn({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Sn=e=>e.__isSuspense// Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.
,xn={name:"Suspense",// In order to make Suspense tree-shakable, we need to avoid importing it
// directly in the renderer. The renderer checks for the __isSuspense flag
// on a vnode's type and calls the `process` method, passing in renderer
// internals.
__isSuspense:!0,process(e,t,n,o,r,s,i,l,c,// platform-specific impl passed from renderer
a){null==e?function(e,t,n,o,r,s,i,l,c){const{p:a,o:{createElement:u}}=c,f=u("div"),p=e.suspense=kn(e,r,o,t,f,n,s,i,l,c);// start mounting the content subtree in an off-dom container
a(null,p.pendingBranch=e.ssContent,f,null,o,p,s,i),// now check if we have encountered any async deps
p.deps>0?(// has async
// invoke @fallback event
En(e,"onPending"),En(e,"onFallback"),// mount the fallback tree
a(null,e.ssFallback,t,n,o,null,// fallback tree will not have suspense context
s,i),On(p,e.ssFallback)):// Suspense has no async deps. Just resolve.
p.resolve()}(t,n,o,r,s,i,l,c,a):function(e,t,n,o,r,s,i,l,{p:c,um:a,o:{createElement:u}}){const f=t.suspense=e.suspense;f.vnode=t,t.el=e.el;const p=t.ssContent,d=t.ssFallback,{activeBranch:h,pendingBranch:m,isInFallback:g,isHydrating:v}=f;if(m)f.pendingBranch=p,Dr(p,m)?(// same root type but content may have changed.
c(m,p,f.hiddenContainer,null,r,f,s,i,l),f.deps<=0?f.resolve():g&&(c(h,d,n,o,r,null,// fallback tree will not have suspense context
s,i,l),On(f,d))):(// toggled before pending tree is resolved
f.pendingId++,v?(// if toggled before hydration is finished, the current DOM tree is
// no longer valid. set it as the active branch so it will be unmounted
// when resolved
f.isHydrating=!1,f.activeBranch=m):a(m,r,f),// increment pending ID. this is used to invalidate async callbacks
// reset suspense state
f.deps=0,// discard effects from pending branch
f.effects.length=0,// discard previous container
f.hiddenContainer=u("div"),g?(// already in fallback state
c(null,p,f.hiddenContainer,null,r,f,s,i,l),f.deps<=0?f.resolve():(c(h,d,n,o,r,null,// fallback tree will not have suspense context
s,i,l),On(f,d))):h&&Dr(p,h)?(// toggled "back" to current active branch
c(h,p,n,o,r,f,s,i,l),// force resolve
f.resolve(!0)):(// switched to a 3rd branch
c(null,p,f.hiddenContainer,null,r,f,s,i,l),f.deps<=0&&f.resolve()));else if(h&&Dr(p,h))// root did not change, just normal patch
c(h,p,n,o,r,f,s,i,l),On(f,p);else if(// root node toggled
// invoke @pending event
En(t,"onPending"),// mount pending branch in off-dom container
f.pendingBranch=p,f.pendingId++,c(null,p,f.hiddenContainer,null,r,f,s,i,l),f.deps<=0)// incoming branch has no async deps, resolve now.
f.resolve();else{const{timeout:e,pendingId:t}=f;e>0?setTimeout((()=>{f.pendingId===t&&f.fallback(d)}),e):0===e&&f.fallback(d)}}(e,t,n,o,r,i,l,c,a)},hydrate:function(e,t,n,o,r,s,i,l,c){/* eslint-disable no-restricted-globals */const a=t.suspense=kn(t,o,n,e.parentNode,document.createElement("div"),null,r,s,i,l,!0/* hydrating */),u=c(e,a.pendingBranch=t.ssContent,n,a,s,i);// there are two possible scenarios for server-rendered suspense:
// - success: ssr content should be fully resolved
// - failure: ssr content should be the fallback branch.
// however, on the client we don't really know if it has failed or not
// attempt to hydrate the DOM assuming it has succeeded, but we still
// need to construct a suspense boundary first
return 0===a.deps&&a.resolve(),u;/* eslint-enable no-restricted-globals */},create:kn,normalize:function(e){const{shapeFlag:t,children:n}=e,o=32/* ShapeFlags.SLOTS_CHILDREN */&t;e.ssContent=Rn(o?n.default:n),e.ssFallback=o?Rn(n.fallback):Kr(Pr)}};function En(e,t){const n=e.props&&e.props[t];P(n)&&n()}function kn(e,t,n,o,r,s,i,l,c,a,u=!1){const{p:f,m:p,um:d,n:h,o:{parentNode:m,remove:g}}=a,v=X(e.props&&e.props.timeout),y={vnode:e,parent:t,parentComponent:n,isSVG:i,container:o,hiddenContainer:r,anchor:s,deps:0,pendingId:0,timeout:"number"==typeof v?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(e=!1){const{vnode:t,activeBranch:n,pendingBranch:o,pendingId:r,effects:s,parentComponent:i,container:l}=y;if(y.isHydrating)y.isHydrating=!1;else if(!e){const e=n&&o.transition&&"out-in"===o.transition.mode;e&&(n.transition.afterLeave=()=>{r===y.pendingId&&p(o,l,t,0/* MoveType.ENTER */)});// this is initial anchor on mount
let{anchor:t}=y;// unmount current active tree
n&&(// if the fallback tree was mounted, it may have been moved
// as part of a parent suspense. get the latest anchor for insertion
t=h(n),d(n,i,y,!0)),e||// move content from off-dom container to actual container
p(o,l,t,0/* MoveType.ENTER */)}On(y,o),y.pendingBranch=null,y.isInFallback=!1;// flush buffered effects
// check if there is a pending parent suspense
let c=y.parent,a=!1;for(;c;){if(c.pendingBranch){// found a pending parent suspense, merge buffered post jobs
// into that parent
c.effects.push(...s),a=!0;break}c=c.parent}// no pending parent suspense, flush all jobs
a||en(s),y.effects=[],// invoke @resolve event
En(t,"onResolve")},fallback(e){if(!y.pendingBranch)return;const{vnode:t,activeBranch:n,parentComponent:o,container:r,isSVG:s}=y;// invoke @fallback event
En(t,"onFallback");const i=h(n),a=()=>{y.isInFallback&&(// mount the fallback tree
f(null,e,r,i,o,null,// fallback tree will not have suspense context
s,l,c),On(y,e))},u=e.transition&&"out-in"===e.transition.mode;u&&(n.transition.afterLeave=a),y.isInFallback=!0,// unmount current active branch
d(n,o,null,// no suspense so unmount hooks fire now
!0),u||a()},move(e,t,n){y.activeBranch&&p(y.activeBranch,e,t,n),y.container=e},next:()=>y.activeBranch&&h(y.activeBranch),registerDep(e,t){const n=!!y.pendingBranch;n&&y.deps++;const o=e.vnode.el;e.asyncDep.catch((t=>{Ut(t,e,0/* ErrorCodes.SETUP_FUNCTION */)})).then((r=>{// retry when the setup() promise resolves.
// component may have been unmounted before resolve.
if(e.isUnmounted||y.isUnmounted||y.pendingId!==e.suspenseId)return;// retry from this component
e.asyncResolved=!0;const{vnode:s}=e;ms(e,r,!1),o&&(// vnode may have been replaced if an update happened before the
// async dep is resolved.
s.el=o);const l=!o&&e.subTree.el;t(e,s,// component may have been moved before resolve.
// if this is not a hydration, instance.subTree will be the comment
// placeholder.
m(o||e.subTree.el),// anchor will not be used if this is hydration, so only need to
// consider the comment placeholder case.
o?null:h(e.subTree),y,i,c),l&&g(l),wn(e,s.el),// only decrease deps count if suspense is not already resolved
n&&0==--y.deps&&y.resolve()}))},unmount(e,t){y.isUnmounted=!0,y.activeBranch&&d(y.activeBranch,n,e,t),y.pendingBranch&&d(y.pendingBranch,n,e,t)}};return y}function Rn(e){let t;if(P(e)){const n=jr&&e._c;n&&(// disableTracking: false
// allow block tracking for compiled slots
// (see ./componentRenderContext.ts)
e._d=!1,Lr()),e=e(),n&&(e._d=!0,t=Mr,Br())}if(k(e)){const t=function(e){let t;for(let n=0;n<e.length;n++){const o=e[n];if(!Ur(o))return;// ignore user comment
if(o.type!==Pr||"v-if"===o.children){if(t)// has more than 1 non-comment child, return now
return;t=o}}return t}(e);e=t}return e=Jr(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter((t=>t!==e))),e}function An(e,t){t&&t.pendingBranch?k(e)?t.effects.push(...e):t.effects.push(e):en(e)}function On(e,t){e.activeBranch=t;const{vnode:n,parentComponent:o}=e,r=n.el=t.el;// in case suspense is the root node of a component,
// recursively update the HOC el
o&&o.subTree===n&&(o.vnode.el=r,wn(o,r))}function Pn(e,t){if(is){let n=is.provides;// by default an instance inherits its parent's provides object
// but when it needs to provide values of its own, it creates its
// own provides object using parent provides object as prototype.
// this way in `inject` we can simply look up injections from direct
// parent and let the prototype chain do the work.
const o=is.parent&&is.parent.provides;o===n&&(n=is.provides=Object.create(o)),// TS doesn't allow symbol as index type
n[e]=t}}function Tn(e,t,n=!1){// fallback to `currentRenderingInstance` so that this can be called in
// a functional component
const o=is||pn;if(o){// #2400
// to support `app.use` plugins,
// fallback to appContext's `provides` if the instance is at root
const r=null==o.parent?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)// TS doesn't allow symbol as index type
return r[e];if(arguments.length>1)return n&&P(t)?t.call(o.proxy):t}}// Simple effect.
function Fn(e,t){return jn(e,null,t)}function Mn(e,t){return jn(e,null,{flush:"post"})}// initial value for watchers to trigger on undefined initial values
const Ln={};// implementation
function Bn(e,t,n){return jn(e,t,n)}function jn(e,t,{immediate:n,deep:o,flush:r,onTrack:s,onTrigger:i}=m){const l=is;let c,a,u=!1,f=!1;if(Et(e)?(c=()=>e.value,u=vt(e)):mt(e)?(c=()=>e,o=!0):k(e)?(f=!0,u=e.some((e=>mt(e)||vt(e))),c=()=>e.map((e=>Et(e)?e.value:mt(e)?Vn(e):P(e)?Vt(e,l,2/* ErrorCodes.WATCH_GETTER */):void 0))):// getter with cb
c=P(e)?t?()=>Vt(e,l,2/* ErrorCodes.WATCH_GETTER */):()=>{if(!l||!l.isUnmounted)return a&&a(),Nt(e,l,3/* ErrorCodes.WATCH_CALLBACK */,[d])}:v,t&&o){const e=c;c=()=>Vn(e())}let p,d=e=>{a=_.onStop=()=>{Vt(e,l,4/* ErrorCodes.WATCH_CLEANUP */)}};// in SSR there is no need to setup an actual effect, and it should be noop
// unless it's eager or sync flush
if(ds){if(// we will also not call the invalidate callback (+ runner is not set up)
d=v,t?n&&Nt(t,l,3/* ErrorCodes.WATCH_CALLBACK */,[c(),f?[]:void 0,d]):c(),"sync"!==r)return v;{const e=xs();p=e.__watcherHandles||(e.__watcherHandles=[])}}let h=f?new Array(e.length).fill(Ln):Ln;const g=()=>{if(_.active)if(t){// watch(source, cb)
const e=_.run();(o||u||(f?e.some(((e,t)=>K(e,h[t]))):K(e,h)))&&(// cleanup before running cb again
a&&a(),Nt(t,l,3/* ErrorCodes.WATCH_CALLBACK */,[e,// pass undefined as the old value when it's changed for the first time
h===Ln?void 0:f&&h[0]===Ln?[]:h,d]),h=e)}else// watchEffect
_.run()};// important: mark the job as a watcher callback so that scheduler knows
// it is allowed to self-trigger (#1727)
let y;g.allowRecurse=!!t,"sync"===r?y=g:"post"===r?y=()=>gr(g,l&&l.suspense):(// default: 'pre'
g.pre=!0,l&&(g.id=l.uid),y=()=>Jt(g));const _=new de(c,y);// initial run
t?n?g():h=_.run():"post"===r?gr(_.run.bind(_),l&&l.suspense):_.run();const b=()=>{_.stop(),l&&l.scope&&S(l.scope.effects,_)};return p&&p.push(b),b}// this.$watch
function $n(e,t,n){const o=this.proxy,r=T(e)?e.includes(".")?In(o,e):()=>o[e]:e.bind(o,o);let s;P(t)?s=t:(s=t.handler,n=t);const i=is;cs(this);const l=jn(r,s.bind(o),n);return i?cs(i):as(),l}function In(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Vn(e,t){if(!M(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),Et(e))Vn(e.value,t);else if(k(e))for(let n=0;n<e.length;n++)Vn(e[n],t);else if(A(e)||R(e))e.forEach((e=>{Vn(e,t)}));else if($(e))for(const n in e)Vn(e[n],t);return e}function Nn(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return po((()=>{e.isMounted=!0})),go((()=>{e.isUnmounting=!0})),e}const Un=[Function,Array],Dn={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,// enter
onBeforeEnter:Un,onEnter:Un,onAfterEnter:Un,onEnterCancelled:Un,// leave
onBeforeLeave:Un,onLeave:Un,onAfterLeave:Un,onLeaveCancelled:Un,// appear
onBeforeAppear:Un,onAppear:Un,onAfterAppear:Un,onAppearCancelled:Un},setup(e,{slots:t}){const n=ls(),o=Nn();let r;return()=>{const s=t.default&&Gn(t.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1)// locate first non-comment child
for(const e of s)if(e.type!==Pr){i=e;break}// there's no need to track reactivity for these props so use the raw
// props for a bit better perf
const l=_t(e),{mode:c}=l;if(o.isLeaving)return Wn(i);// in the case of <transition><keep-alive/></transition>, we need to
// compare the type of the kept-alive children.
const a=qn(i);if(!a)return Wn(i);const u=zn(a,l,o,n);Kn(a,u);const f=n.subTree,p=f&&qn(f);let d=!1;const{getTransitionKey:h}=a.type;if(h){const e=h();void 0===r?r=e:e!==r&&(r=e,d=!0)}// handle mode
if(p&&p.type!==Pr&&(!Dr(a,p)||d)){const e=zn(p,l,o,n);// update old tree's hooks in case of dynamic transition
// switching between different views
if(Kn(p,e),"out-in"===c)return o.isLeaving=!0,// return placeholder node and queue update when leave finishes
e.afterLeave=()=>{o.isLeaving=!1,// #6835
// it also needs to be updated when active is undefined
!1!==n.update.active&&n.update()},Wn(i);"in-out"===c&&a.type!==Pr&&(e.delayLeave=(e,t,n)=>{Hn(o,p)[String(p.key)]=p,// early removal callback
e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return i}}};function Hn(e,t){const{leavingVNodes:n}=e;let o=n.get(t.type);return o||(o=Object.create(null),n.set(t.type,o)),o}// The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.
function zn(e,t,n,o){const{appear:r,mode:s,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:a,onEnterCancelled:u,onBeforeLeave:f,onLeave:p,onAfterLeave:d,onLeaveCancelled:h,onBeforeAppear:m,onAppear:g,onAfterAppear:v,onAppearCancelled:y}=t,_=String(e.key),b=Hn(n,e),C=(e,t)=>{e&&Nt(e,o,9/* ErrorCodes.TRANSITION_HOOK */,t)},w=(e,t)=>{const n=t[1];C(e,t),k(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},S={mode:s,persisted:i,beforeEnter(t){let o=l;if(!n.isMounted){if(!r)return;o=m||l}// for same element (v-show)
t._leaveCb&&t._leaveCb(!0/* cancelled */);// for toggled element with same key (v-if)
const s=b[_];s&&Dr(e,s)&&s.el._leaveCb&&// force early removal (not cancelled)
s.el._leaveCb(),C(o,[t])},enter(e){let t=c,o=a,s=u;if(!n.isMounted){if(!r)return;t=g||c,o=v||a,s=y||u}let i=!1;const l=e._enterCb=t=>{i||(i=!0,C(t?s:o,[e]),S.delayedLeave&&S.delayedLeave(),e._enterCb=void 0)};t?w(t,[e,l]):l()},leave(t,o){const r=String(e.key);if(t._enterCb&&t._enterCb(!0/* cancelled */),n.isUnmounting)return o();C(f,[t]);let s=!1;const i=t._leaveCb=n=>{s||(s=!0,o(),C(n?h:d,[t]),t._leaveCb=void 0,b[r]===e&&delete b[r])};b[r]=e,p?w(p,[t,i]):i()},clone:e=>zn(e,t,n,o)};return S}// the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.
function Wn(e){if(Qn(e))return(e=Yr(e)).children=null,e}function qn(e){return Qn(e)?e.children?e.children[0]:void 0:e}function Kn(e,t){6/* ShapeFlags.COMPONENT */&e.shapeFlag&&e.component?Kn(e.component.subTree,t):128/* ShapeFlags.SUSPENSE */&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Gn(e,t=!1,n){let o=[],r=0;for(let s=0;s<e.length;s++){let i=e[s];// #5360 inherit parent key in case of <template v-for>
const l=null==n?i.key:String(n)+String(null!=i.key?i.key:s);// handle fragment children case, e.g. v-for
i.type===Ar?(128/* PatchFlags.KEYED_FRAGMENT */&i.patchFlag&&r++,o=o.concat(Gn(i.children,t,l))):(t||i.type!==Pr)&&o.push(null!=l?Yr(i,{key:l}):i)}// #1126 if a transition children list contains multiple sub fragments, these
// fragments will be merged into a flat children array. Since each v-for
// fragment may contain different static bindings inside, we need to de-op
// these children to force full diffs to ensure correct behavior.
if(r>1)for(let s=0;s<o.length;s++)o[s].patchFlag=-2/* PatchFlags.BAIL */;return o}// implementation, close to no-op
function Yn(e){return P(e)?{setup:e,name:e.name}:e}const Xn=e=>!!e.type.__asyncLoader;function Zn(e){P(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:o,delay:r=200,timeout:s,suspensible:// undefined = never times out
i=!0,onError:l}=e;let c,a=null,u=0;const f=()=>{let e;return a||(e=a=t().catch((e=>{if(e=e instanceof Error?e:new Error(String(e)),l)return new Promise(((t,n)=>{l(e,(()=>t((u++,a=null,f()))),(()=>n(e)),u+1)}));throw e})).then((t=>e!==a&&a?a:(// interop module default
t&&(t.__esModule||"Module"===t[Symbol.toStringTag])&&(t=t.default),c=t,t))))};return Yn({name:"AsyncComponentWrapper",__asyncLoader:f,get __asyncResolved(){return c},setup(){const e=is;// already resolved
if(c)return()=>Jn(c,e);const t=t=>{a=null,Ut(t,e,13/* ErrorCodes.ASYNC_COMPONENT_LOADER */,!o/* do not throw in dev if user provided error component */)};// suspense-controlled or SSR.
if(i&&e.suspense||ds)return f().then((t=>()=>Jn(t,e))).catch((e=>(t(e),()=>o?Kr(o,{error:e}):null)));const l=kt(!1),u=kt(),p=kt(!!r);return r&&setTimeout((()=>{p.value=!1}),r),null!=s&&setTimeout((()=>{if(!l.value&&!u.value){const e=new Error(`Async component timed out after ${s}ms.`);t(e),u.value=e}}),s),f().then((()=>{l.value=!0,e.parent&&Qn(e.parent.vnode)&&// parent is keep-alive, force update so the loaded component's
// name is taken into account
Jt(e.parent.update)})).catch((e=>{t(e),u.value=e})),()=>l.value&&c?Jn(c,e):u.value&&o?Kr(o,{error:u.value}):n&&!p.value?Kr(n):void 0}})}function Jn(e,t){const{ref:n,props:o,children:r,ce:s}=t.vnode,i=Kr(e,o,r);// ensure inner component inherits the async wrapper's ref owner
return i.ref=n,// pass the custom element callback on to the inner comp
// and remove it from the async wrapper
i.ce=s,delete t.vnode.ce,i}const Qn=e=>e.type.__isKeepAlive,eo={name:"KeepAlive",// Marker for special handling inside the renderer. We are not using a ===
// check directly on KeepAlive in the renderer, because importing it directly
// would prevent it from being tree-shaken.
__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=ls(),o=n.ctx;// KeepAlive communicates with the instantiated renderer via the
// ctx where the renderer passes in its internals,
// and the KeepAlive instance exposes activate/deactivate implementations.
// The whole point of this is to avoid importing KeepAlive directly in the
// renderer to facilitate tree-shaking.
// if the internal renderer is not registered, it indicates that this is server-side rendering,
// for KeepAlive, we just need to render its children
if(!o.renderer)return()=>{const e=t.default&&t.default();return e&&1===e.length?e[0]:e};const r=new Map,s=new Set;let i=null;const l=n.suspense,{renderer:{p:c,m:a,um:u,o:{createElement:f}}}=o,p=f("div");function d(e){// reset the shapeFlag so it can be properly unmounted
lo(e),u(e,n,l,!0)}function h(e){r.forEach(((t,n)=>{const o=_s(t.type);!o||e&&e(o)||m(n)}))}function m(e){const t=r.get(e);i&&t.type===i.type?i&&// current active instance should no longer be kept-alive.
// we can't unmount it now but it might be later, so reset its flag now.
lo(i):d(t),r.delete(e),s.delete(e)}// prune cache on include/exclude prop change
o.activate=(e,t,n,o,r)=>{const s=e.component;a(e,t,n,0/* MoveType.ENTER */,l),// in case props have changed
c(s.vnode,e,t,n,s,l,o,e.slotScopeIds,r),gr((()=>{s.isDeactivated=!1,s.a&&G(s.a);const t=e.props&&e.props.onVnodeMounted;t&&ns(t,s.parent,e)}),l)},o.deactivate=e=>{const t=e.component;a(e,p,null,1/* MoveType.LEAVE */,l),gr((()=>{t.da&&G(t.da);const n=e.props&&e.props.onVnodeUnmounted;n&&ns(n,t.parent,e),t.isDeactivated=!0}),l)},Bn((()=>[e.include,e.exclude]),(([e,t])=>{e&&h((t=>no(e,t))),t&&h((e=>!no(t,e)))}),// prune post-render after `current` has been updated
{flush:"post",deep:!0});// cache sub tree after render
let g=null;const v=()=>{// fix #1621, the pendingCacheKey could be 0
null!=g&&r.set(g,co(n.subTree))};return po(v),mo(v),go((()=>{r.forEach((e=>{const{subTree:t,suspense:o}=n,r=co(t);if(e.type!==r.type)d(e);else{// current instance will be unmounted as part of keep-alive's unmount
lo(r);// but invoke its deactivated hook here
const e=r.component.da;e&&gr(e,o)}}))})),()=>{if(g=null,!t.default)return null;const n=t.default(),o=n[0];if(n.length>1)return i=null,n;if(!Ur(o)||!(4/* ShapeFlags.STATEFUL_COMPONENT */&o.shapeFlag||128/* ShapeFlags.SUSPENSE */&o.shapeFlag))return i=null,o;let l=co(o);const c=l.type,a=_s(Xn(l)?l.type.__asyncResolved||{}:c),{include:u,exclude:f,max:p}=e;// for async components, name check should be based in its loaded
// inner component if available
if(u&&(!a||!no(u,a))||f&&a&&no(f,a))return i=l,o;const d=null==l.key?c:l.key,h=r.get(d);// clone vnode if it's reused because we are going to mutate it
return l.el&&(l=Yr(l),128/* ShapeFlags.SUSPENSE */&o.shapeFlag&&(o.ssContent=l)),// #1513 it's possible for the returned vnode to be cloned due to attr
// fallthrough or scopeId, so the vnode here may not be the final vnode
// that is mounted. Instead of caching it directly, we store the pending
// key and cache `instance.subTree` (the normalized vnode) in
// beforeMount/beforeUpdate hooks.
g=d,h?(// copy over mounted state
l.el=h.el,l.component=h.component,l.transition&&// recursively update transition hooks on subTree
Kn(l,l.transition),// avoid vnode being mounted as fresh
l.shapeFlag|=512/* ShapeFlags.COMPONENT_KEPT_ALIVE */,// make this key the freshest
s.delete(d),s.add(d)):(s.add(d),// prune oldest entry
p&&s.size>parseInt(p,10)&&m(s.values().next().value)),// avoid vnode being unmounted
l.shapeFlag|=256/* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */,i=l,Sn(o.type)?o:l}}},to=e("a5",eo);function no(e,t){return k(e)?e.some((e=>no(e,t))):T(e)?e.split(",").includes(t):!!e.test&&e.test(t)/* istanbul ignore next */}function oo(e,t){so(e,"a"/* LifecycleHooks.ACTIVATED */,t)}function ro(e,t){so(e,"da"/* LifecycleHooks.DEACTIVATED */,t)}function so(e,t,n=is){// cache the deactivate branch check wrapper for injected hooks so the same
// hook can be properly deduped by the scheduler. "__wdc" stands for "with
// deactivation check".
const o=e.__wdc||(e.__wdc=()=>{// only fire the hook if the target instance is NOT in a deactivated branch.
let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});// In addition to registering it on the target instance, we walk up the parent
// chain and register it on all ancestor instances that are keep-alive roots.
// This avoids the need to walk the entire component tree when invoking these
// hooks, and more importantly, avoids the need to track child components in
// arrays.
if(ao(t,o,n),n){let e=n.parent;for(;e&&e.parent;)Qn(e.parent.vnode)&&io(o,t,n,e),e=e.parent}}function io(e,t,n,o){// injectHook wraps the original for error handling, so make sure to remove
// the wrapped version.
const r=ao(t,e,o,!0/* prepend */);vo((()=>{S(o[t],r)}),n)}function lo(e){// bitwise operations to remove keep alive flags
e.shapeFlag&=-257/* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */,e.shapeFlag&=-513/* ShapeFlags.COMPONENT_KEPT_ALIVE */}function co(e){return 128/* ShapeFlags.SUSPENSE */&e.shapeFlag?e.ssContent:e}function ao(e,t,n=is,o=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;// disable tracking inside all lifecycle hooks
// since they can potentially be called inside effects.
ve(),// Set currentInstance during hook invocation.
// This assumes the hook does not synchronously trigger other hooks, which
// can only be false when the user does something really funky.
cs(n);const r=Nt(t,n,e,o);return as(),ye(),r});// cache the error handling wrapper for injected hooks so the same hook
// can be properly deduped by the scheduler. "__weh" stands for "with error
// handling".
return o?r.unshift(s):r.push(s),s}}const uo=e=>(t,n=is)=>// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
(!ds||"sp"/* LifecycleHooks.SERVER_PREFETCH */===e)&&ao(e,((...e)=>t(...e)),n),fo=e("M",uo("bm"/* LifecycleHooks.BEFORE_MOUNT */)),po=e("p",uo("m"/* LifecycleHooks.MOUNTED */)),ho=e("P",uo("bu"/* LifecycleHooks.BEFORE_UPDATE */)),mo=e("q",uo("u"/* LifecycleHooks.UPDATED */)),go=e("I",uo("bum"/* LifecycleHooks.BEFORE_UNMOUNT */)),vo=e("s",uo("um"/* LifecycleHooks.UNMOUNTED */)),yo=uo("sp"/* LifecycleHooks.SERVER_PREFETCH */),_o=e("ag",uo("rtg"/* LifecycleHooks.RENDER_TRIGGERED */)),bo=e("af",uo("rtc"/* LifecycleHooks.RENDER_TRACKED */));function Co(e,t=is){ao("ec"/* LifecycleHooks.ERROR_CAPTURED */,e,t)}
/**
             * Adds directives to a VNode.
             */function wo(e,t){const n=pn;if(null===n)return e;const o=ys(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,i,l=m]=t[s];e&&(P(e)&&(e={mounted:e,updated:e}),e.deep&&Vn(n),r.push({dir:e,instance:o,value:n,oldValue:void 0,arg:i,modifiers:l}))}return e}function So(e,t,n,o){const r=e.dirs,s=t&&t.dirs;for(let i=0;i<r.length;i++){const l=r[i];s&&(l.oldValue=s[i].value);let c=l.dir[o];c&&(// disable tracking inside all lifecycle hooks
// since they can potentially be called inside effects.
ve(),Nt(c,n,8/* ErrorCodes.DIRECTIVE_HOOK */,[e.el,l,e,t]),ye())}}const xo="components";
/**
             * @private
             */
function Eo(e,t){return Oo(xo,e,!0,t)||e}const ko=Symbol();
/**
             * @private
             */function Ro(e){return T(e)?Oo(xo,e,!1)||e:e||ko}
/**
             * @private
             */function Ao(e){return Oo("directives",e)}// implementation
function Oo(e,t,n=!0,o=!1){const r=pn||is;if(r){const n=r.type;// explicit self name has highest priority
if(e===xo){const e=_s(n,!1/* do not include inferred name to avoid breaking existing code */);if(e&&(e===t||e===D(t)||e===W(D(t))))return n}const s=// local registration
// check instance[type] first which is resolved for options API
Po(r[e]||n[e],t)||// global registration
Po(r.appContext[e],t);return!s&&o?n:s}}function Po(e,t){return e&&(e[t]||e[D(t)]||e[W(D(t))])}
/**
             * Actual implementation
             */function To(e,t,n,o){let r;const s=n&&n[o];if(k(e)||T(e)){r=new Array(e.length);for(let n=0,o=e.length;n<o;n++)r[n]=t(e[n],n,void 0,s&&s[n])}else if("number"==typeof e){r=new Array(e);for(let n=0;n<e;n++)r[n]=t(n+1,n,void 0,s&&s[n])}else if(M(e))if(e[Symbol.iterator])r=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);r=new Array(n.length);for(let o=0,i=n.length;o<i;o++){const i=n[o];r[o]=t(e[i],i,o,s&&s[o])}}else r=[];return n&&(n[o]=r),r}
/**
             * Compiler runtime helper for creating dynamic slots object
             * @private
             */
/**
             * Compiler runtime helper for rendering `<slot/>`
             * @private
             */
function Fo(e,t,n={},// this is not a user-facing function, so the fallback is always generated by
// the compiler and guaranteed to be a function returning an array
o,r){if(pn.isCE||pn.parent&&Xn(pn.parent)&&pn.parent.isCE)return"default"!==t&&(n.name=t),Kr("slot",n,o&&o());let s=e[t];// a compiled slot disables block tracking by default to avoid manual
// invocation interfering with template-based block tracking, but in
// `renderSlot` we can be sure that it's template-based so we can force
// enable it.
s&&s._c&&(s._d=!1),Lr();const i=s&&Mo(s(n)),l=Nr(Ar,{key:n.key||// slot content array of a dynamic conditional slot may have a branch
// key attached in the `createSlots` helper, respect that
i&&i.key||`_${t}`},i||(o?o():[]),i&&1/* SlotFlags.STABLE */===e._?64/* PatchFlags.STABLE_FRAGMENT */:-2/* PatchFlags.BAIL */);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Mo(e){return e.some((e=>!Ur(e)||e.type!==Pr&&!(e.type===Ar&&!Mo(e.children))))?e:null}
/**
             * For prefixing keys in v-on="obj" with "on"
             * @private
             */
/**
             * #2437 In Vue 3, functional components do not have a public instance proxy but
             * they exist in the internal parent chain. For code that relies on traversing
             * public $parent chains, skip functional ones and go to the parent instead.
             */
const Lo=e=>e?us(e)?ys(e)||e.proxy:Lo(e.parent):null,Bo=// Move PURE marker to new line to workaround compiler discarding it
// due to type annotation
w(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Lo(e.parent),$root:e=>Lo(e.root),$emit:e=>e.emit,$options:e=>Ho(e),$forceUpdate:e=>e.f||(e.f=()=>Jt(e.update)),$nextTick:e=>e.n||(e.n=Zt.bind(e.proxy)),$watch:e=>$n.bind(e)}),jo=(e,t)=>e!==m&&!e.__isScriptSetup&&E(e,t),$o={get({_:e},t){const{ctx:n,setupState:o,data:r,props:s,accessCache:i,type:l,appContext:c}=e;// data / props / ctx
// This getter gets called for every property access on the render context
// during render and is a major hotspot. The most expensive part of this
// is the multiple hasOwn() calls. It's much faster to do a simple property
// access on a plain object, so we use an accessCache object (with null
// prototype) to memoize what access type a key corresponds to.
let a;if("$"!==t[0]){const l=i[t];if(void 0!==l)switch(l){case 1/* AccessTypes.SETUP */:return o[t];case 2/* AccessTypes.DATA */:return r[t];case 4/* AccessTypes.CONTEXT */:return n[t];case 3/* AccessTypes.PROPS */:return s[t];// default: just fallthrough
}else{if(jo(o,t))return i[t]=1/* AccessTypes.SETUP */,o[t];if(r!==m&&E(r,t))return i[t]=2/* AccessTypes.DATA */,r[t];if(// only cache other properties when instance has declared (thus stable)
// props
(a=e.propsOptions[0])&&E(a,t))return i[t]=3/* AccessTypes.PROPS */,s[t];if(n!==m&&E(n,t))return i[t]=4/* AccessTypes.CONTEXT */,n[t];Vo&&(i[t]=0/* AccessTypes.OTHER */)}}const u=Bo[t];let f,p;// public $xxx properties
return u?("$attrs"===t&&_e(e,0/* TrackOpTypes.GET */,t),u(e)):// css module (injected by vue-loader)
(f=l.__cssModules)&&(f=f[t])?f:n!==m&&E(n,t)?(// user may set custom properties to `this` that start with `$`
i[t]=4/* AccessTypes.CONTEXT */,n[t]):(// global properties
p=c.config.globalProperties,E(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:o,setupState:r,ctx:s}=e;return jo(r,t)?(r[t]=n,!0):o!==m&&E(o,t)?(o[t]=n,!0):!(E(e.props,t)||"$"===t[0]&&t.slice(1)in e||(s[t]=n,0))},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:s}},i){let l;return!!n[i]||e!==m&&E(e,i)||jo(t,i)||(l=s[0])&&E(l,i)||E(o,i)||E(Bo,i)||E(r.config.globalProperties,i)},defineProperty(e,t,n){return null!=n.get?// invalidate key cache of a getter based property #5417
e._.accessCache[t]=0:E(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},Io=w({},$o,{get(e,t){// fast path for unscopables when using `with` block
if(t!==Symbol.unscopables)return $o.get(e,t,e)},has:(e,t)=>"_"!==t[0]&&!n(t)});let Vo=!0;function No(e){const t=Ho(e),n=e.proxy,o=e.ctx;// do not cache property access on public proxy during state initialization
Vo=!1,// call beforeCreate first before accessing other options since
// the hook may mutate resolved options (#2791)
t.beforeCreate&&Uo(t.beforeCreate,e,"bc"/* LifecycleHooks.BEFORE_CREATE */);const{// state
data:r,computed:s,methods:i,watch:l,provide:c,inject:a,created:// lifecycle
u,beforeMount:f,mounted:p,beforeUpdate:d,updated:h,activated:m,deactivated:g,beforeDestroy:y,beforeUnmount:_,destroyed:b,unmounted:C,render:w,renderTracked:S,renderTriggered:x,errorCaptured:E,serverPrefetch:R,expose:// public API
A,inheritAttrs:O,components:// assets
T,directives:F,filters:L}=t;if(// options initialization order (to be consistent with Vue 2):
// - props (already done outside of this function)
// - inject
// - methods
// - data (deferred since it relies on `this` access)
// - computed
// - watch (deferred since it relies on `this` access)
a&&function(e,t,n=v,o=!1){k(e)&&(e=Ko(e));for(const r in e){const n=e[r];let s;s=M(n)?"default"in n?Tn(n.from||r,n.default,!0/* treat default function as factory */):Tn(n.from||r):Tn(n),Et(s)&&o?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[r]=s}}(a,o,null,e.appContext.config.unwrapInjectedRef),i)for(const v in i){const e=i[v];P(e)&&(o[v]=e.bind(n))}if(r){const t=r.call(n,n);M(t)&&(e.data=ft(t))}// state initialization complete at this point - start caching access
if(Vo=!0,s)for(const k in s){const e=s[k],t=P(e)?e.bind(n,n):P(e.get)?e.get.bind(n,n):v,r=!P(e)&&P(e.set)?e.set.bind(n):v,i=bs({get:t,set:r});Object.defineProperty(o,k,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(l)for(const v in l)Do(l[v],o,n,v);if(c){const e=P(c)?c.call(n):c;Reflect.ownKeys(e).forEach((t=>{Pn(t,e[t])}))}function B(e,t){k(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(u&&Uo(u,e,"c"/* LifecycleHooks.CREATED */),B(fo,f),B(po,p),B(ho,d),B(mo,h),B(oo,m),B(ro,g),B(Co,E),B(bo,S),B(_o,x),B(go,_),B(vo,C),B(yo,R),k(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});// options that are handled when creating the instance but also need to be
// applied from mixins
w&&e.render===v&&(e.render=w),null!=O&&(e.inheritAttrs=O),// asset options.
T&&(e.components=T),F&&(e.directives=F)}function Uo(e,t,n){Nt(k(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Do(e,t,n,o){const r=o.includes(".")?In(n,o):()=>n[o];if(T(e)){const n=t[e];P(n)&&Bn(r,n)}else if(P(e))Bn(r,e.bind(n));else if(M(e))if(k(e))e.forEach((e=>Do(e,t,n,o)));else{const o=P(e.handler)?e.handler.bind(n):t[e.handler];P(o)&&Bn(r,o,e)}}
/**
             * Resolve merged options and cache it on the component.
             * This is done only once per-component since the merging does not involve
             * instances.
             */function Ho(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:i}}=e.appContext,l=s.get(t);let c;return l?c=l:r.length||n||o?(c={},r.length&&r.forEach((e=>zo(c,e,i,!0))),zo(c,t,i)):c=t,M(t)&&s.set(t,c),c}function zo(e,t,n,o=!1){const{mixins:r,extends:s}=t;s&&zo(e,s,n,!0),r&&r.forEach((t=>zo(e,t,n,!0)));for(const i in t)if(o&&"expose"===i);else{const o=Wo[i]||n&&n[i];e[i]=o?o(e[i],t[i]):t[i]}return e}const Wo={data:qo,props:Yo,emits:Yo,// objects
methods:Yo,computed:Yo,// lifecycle
beforeCreate:Go,created:Go,beforeMount:Go,mounted:Go,beforeUpdate:Go,updated:Go,beforeDestroy:Go,beforeUnmount:Go,destroyed:Go,unmounted:Go,activated:Go,deactivated:Go,errorCaptured:Go,serverPrefetch:Go,// assets
components:Yo,directives:Yo,// watch
watch:function(e,t){if(!e)return t;if(!t)return e;const n=w(Object.create(null),e);for(const o in t)n[o]=Go(e[o],t[o]);return n},// provide / inject
provide:qo,inject:function(e,t){return Yo(Ko(e),Ko(t))}};function qo(e,t){return t?e?function(){return w(P(e)?e.call(this,this):e,P(t)?t.call(this,this):t)}:t:e}function Ko(e){if(k(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Go(e,t){return e?[...new Set([].concat(e,t))]:t}function Yo(e,t){return e?w(w(Object.create(null),e),t):t}function Xo(e,t,n,o){const[r,s]=e.propsOptions;let i,l=!1;if(t)for(let c in t){// key, ref are reserved and never passed down
if(V(c))continue;const a=t[c];// prop option names are camelized during normalization, so to support
// kebab -> camel conversion here we need to camelize the key.
let u;r&&E(r,u=D(c))?s&&s.includes(u)?(i||(i={}))[u]=a:n[u]=a:fn(e.emitsOptions,c)||c in o&&a===o[c]||(o[c]=a,l=!0)}if(s){const t=_t(n),o=i||m;for(let i=0;i<s.length;i++){const l=s[i];n[l]=Zo(r,t,l,o[l],e,!E(o,l))}}return l}function Zo(e,t,n,o,r,s){const i=e[n];if(null!=i){const e=E(i,"default");// default values
if(e&&void 0===o){const e=i.default;if(i.type!==Function&&P(e)){const{propsDefaults:s}=r;n in s?o=s[n]:(cs(r),o=s[n]=e.call(null,t),as())}else o=e}// boolean casting
i[0/* BooleanFlags.shouldCast */]&&(s&&!e?o=!1:!i[1/* BooleanFlags.shouldCastTrue */]||""!==o&&o!==z(n)||(o=!0))}return o}function Jo(e,t,n=!1){const o=t.propsCache,r=o.get(e);if(r)return r;const s=e.props,i={},l=[];// apply mixin/extends props
let c=!1;if(!P(e)){const o=e=>{c=!0;const[n,o]=Jo(e,t,!0);w(i,n),o&&l.push(...o)};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}if(!s&&!c)return M(e)&&o.set(e,g),g;if(k(s))for(let u=0;u<s.length;u++){const e=D(s[u]);Qo(e)&&(i[e]=m)}else if(s)for(const u in s){const e=D(u);if(Qo(e)){const t=s[u],n=i[e]=k(t)||P(t)?{type:t}:Object.assign({},t);if(n){const t=nr(Boolean,n.type),o=nr(String,n.type);n[0/* BooleanFlags.shouldCast */]=t>-1,n[1/* BooleanFlags.shouldCastTrue */]=o<0||t<o,// if the prop needs boolean casting or default value
(t>-1||E(n,"default"))&&l.push(e)}}}const a=[i,l];return M(e)&&o.set(e,a),a}function Qo(e){return"$"!==e[0]}// use function string name to check type constructors
// so that it works across vms / iframes.
function er(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function tr(e,t){return er(e)===er(t)}function nr(e,t){return k(t)?t.findIndex((t=>tr(t,e))):P(t)&&tr(t,e)?0:-1}const or=e=>"_"===e[0]||"$stable"===e,rr=e=>k(e)?e.map(Jr):[Jr(e)],sr=(e,t,n)=>{if(t._n)// already normalized - #5353
return t;const o=vn(((...e)=>rr(t(...e))),n);return o._c=!1,o},ir=(e,t,n)=>{const o=e._ctx;for(const r in e){if(or(r))continue;const n=e[r];if(P(n))t[r]=sr(0,n,o);else if(null!=n){const e=rr(n);t[r]=()=>e}}},lr=(e,t)=>{const n=rr(t);e.slots.default=()=>n};function cr(){return{app:null,config:{isNativeTag:y,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ar=0;function ur(e,t){return function(n,o=null){P(n)||(n=Object.assign({},n)),null==o||M(o)||(o=null);const r=cr(),s=new Set;let i=!1;const l=r.app={_uid:ar++,_component:n,_props:o,_container:null,_context:r,_instance:null,version:ks,get config(){return r.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&P(e.install)?(s.add(e),e.install(l,...t)):P(e)&&(s.add(e),e(l,...t))),l),mixin:e=>(r.mixins.includes(e)||r.mixins.push(e),l),component:(e,t)=>t?(r.components[e]=t,l):r.components[e],directive:(e,t)=>t?(r.directives[e]=t,l):r.directives[e],mount(s,c,a){if(!i){const u=Kr(n,o);// store app context on the root VNode.
// this will be set on the root instance on initial mount.
return u.appContext=r,c&&t?t(u,s):e(u,s,a),i=!0,l._container=s,s.__vue_app__=l,ys(u.component)||u.component.proxy}},unmount(){i&&(e(null,l._container),delete l._container.__vue_app__)},provide:(e,t)=>(r.provides[e]=t,l)};return l}}
/**
             * Function for handling a template ref
             */function fr(e,t,n,o,r=!1){if(k(e))return void e.forEach(((e,s)=>fr(e,t&&(k(t)?t[s]:t),n,o,r)));if(Xn(o)&&!r)// when mounting async components, nothing needs to be done,
// because the template ref is forwarded to inner component
return;const s=4/* ShapeFlags.STATEFUL_COMPONENT */&o.shapeFlag?ys(o.component)||o.component.proxy:o.el,i=r?null:s,{i:l,r:c}=e,a=t&&t.r,u=l.refs===m?l.refs={}:l.refs,f=l.setupState;if(// dynamic ref changed. unset old ref
null!=a&&a!==c&&(T(a)?(u[a]=null,E(f,a)&&(f[a]=null)):Et(a)&&(a.value=null)),P(c))Vt(c,l,12/* ErrorCodes.FUNCTION_REF */,[i,u]);else{const t=T(c),o=Et(c);if(t||o){const l=()=>{if(e.f){const n=t?E(f,c)?f[c]:u[c]:c.value;r?k(n)&&S(n,s):k(n)?n.includes(s)||n.push(s):t?(u[c]=[s],E(f,c)&&(f[c]=u[c])):(c.value=[s],e.k&&(u[e.k]=c.value))}else t?(u[c]=i,E(f,c)&&(f[c]=i)):o&&(c.value=i,e.k&&(u[e.k]=i))};i?(l.id=-1,gr(l,n)):l()}}}let pr=!1;const dr=e=>/svg/.test(e.namespaceURI)&&"foreignObject"!==e.tagName,hr=e=>8/* DOMNodeTypes.COMMENT */===e.nodeType// Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.;
function mr(e){const{mt:t,p:n,o:{patchProp:o,createText:r,nextSibling:s,parentNode:i,remove:l,insert:c,createComment:a}}=e,u=(n,o,l,a,g,v=!1)=>{const y=hr(n)&&"["===n.data,_=()=>h(n,o,l,a,g,y),{type:b,ref:C,shapeFlag:w,patchFlag:S}=o;let x=n.nodeType;o.el=n,-2/* PatchFlags.BAIL */===S&&(v=!1,o.dynamicChildren=null);let E=null;switch(b){case Or:3/* DOMNodeTypes.TEXT */!==x?// #5728 empty text node inside a slot can cause hydration failure
// because the server rendered HTML won't contain a text node
""===o.children?(c(o.el=r(""),i(n),n),E=n):E=_():(n.data!==o.children&&(pr=!0,n.data=o.children),E=s(n));break;case Pr:E=8/* DOMNodeTypes.COMMENT */!==x||y?_():s(n);break;case Tr:if(y&&(x=(// entire template is static but SSRed as a fragment
n=s(n)).nodeType),1/* DOMNodeTypes.ELEMENT */===x||3/* DOMNodeTypes.TEXT */===x){// determine anchor, adopt content
E=n;// if the static vnode has its content stripped during build,
// adopt it from the server-rendered HTML.
const e=!o.children.length;for(let t=0;t<o.staticCount;t++)e&&(o.children+=1/* DOMNodeTypes.ELEMENT */===E.nodeType?E.outerHTML:E.data),t===o.staticCount-1&&(o.anchor=E),E=s(E);return y?s(E):E}_();break;case Ar:E=y?d(n,o,l,a,g,v):_();break;default:if(1/* ShapeFlags.ELEMENT */&w)E=1/* DOMNodeTypes.ELEMENT */!==x||o.type.toLowerCase()!==n.tagName.toLowerCase()?_():f(n,o,l,a,g,v);else if(6/* ShapeFlags.COMPONENT */&w){// when setting up the render effect, if the initial vnode already
// has .el set, the component will perform hydration instead of mount
// on its sub-tree.
o.slotScopeIds=g;const e=i(n);// #3787
// if component is async, it may get moved / unmounted before its
// inner component is loaded, so we need to give it a placeholder
// vnode that matches its adopted DOM.
if(t(o,e,null,l,a,dr(e),v),// component may be async, so in the case of fragments we cannot rely
// on component's rendered output to determine the end of the fragment
// instead, we do a lookahead to find the end anchor node.
E=y?m(n):s(n),// #4293 teleport as component root
E&&hr(E)&&"teleport end"===E.data&&(E=s(E)),Xn(o)){let t;y?(t=Kr(Ar),t.anchor=E?E.previousSibling:e.lastChild):t=3===n.nodeType?Xr(""):Kr("div"),t.el=n,o.component.subTree=t}}else 64/* ShapeFlags.TELEPORT */&w?E=8/* DOMNodeTypes.COMMENT */!==x?_():o.type.hydrate(n,o,l,a,g,v,e,p):128/* ShapeFlags.SUSPENSE */&w&&(E=o.type.hydrate(n,o,l,a,dr(i(n)),g,v,e,u))}return null!=C&&fr(C,null,a,o),E},f=(e,t,n,r,s,i)=>{i=i||!!t.dynamicChildren;const{type:c,props:a,patchFlag:u,shapeFlag:f,dirs:d}=t,h="input"===c&&d||"option"===c;// #4006 for form elements with non-string v-model value bindings
// e.g. <option :value="obj">, <input type="checkbox" :true-value="1">
// skip props & children if this is hoisted static nodes
// #5405 in dev, always hydrate children for HMR
if(h||-1/* PatchFlags.HOISTED */!==u){// props
if(d&&So(t,null,n,"created"),a)if(h||!i||48/* PatchFlags.HYDRATE_EVENTS */&u)for(const t in a)(h&&t.endsWith("value")||b(t)&&!V(t))&&o(e,t,null,a[t],!1,void 0,n);else a.onClick&&// Fast path for click listeners (which is most often) to avoid
// iterating through props.
o(e,"onClick",null,a.onClick,!1,void 0,n);// vnode / directive hooks
let c;// children
if((c=a&&a.onVnodeBeforeMount)&&ns(c,n,t),d&&So(t,null,n,"beforeMount"),((c=a&&a.onVnodeMounted)||d)&&An((()=>{c&&ns(c,n,t),d&&So(t,null,n,"mounted")}),r),16/* ShapeFlags.ARRAY_CHILDREN */&f&&(!a||!a.innerHTML&&!a.textContent)){let o=p(e.firstChild,t,e,n,r,s,i);for(;o;){pr=!0;// The SSRed DOM contains more nodes than it should. Remove them.
const e=o;o=o.nextSibling,l(e)}}else 8/* ShapeFlags.TEXT_CHILDREN */&f&&e.textContent!==t.children&&(pr=!0,e.textContent=t.children)}return e.nextSibling},p=(e,t,o,r,s,i,l)=>{l=l||!!t.dynamicChildren;const c=t.children,a=c.length;for(let f=0;f<a;f++){const t=l?c[f]:c[f]=Jr(c[f]);if(e)e=u(e,t,r,s,i,l);else{if(t.type===Or&&!t.children)continue;pr=!0,// the SSRed DOM didn't contain enough nodes. Mount the missing ones.
n(null,t,o,null,r,s,dr(o),i)}}return e},d=(e,t,n,o,r,l)=>{const{slotScopeIds:u}=t;u&&(r=r?r.concat(u):u);const f=i(e),d=p(s(e),t,f,n,o,r,l);return d&&hr(d)&&"]"===d.data?s(t.anchor=d):(// fragment didn't hydrate successfully, since we didn't get a end anchor
// back. This should have led to node/children mismatch warnings.
pr=!0,// since the anchor is missing, we need to create one and insert it
c(t.anchor=a("]"),f,d),d)},h=(e,t,o,r,c,a)=>{if(pr=!0,t.el=null,a){// remove excessive fragment nodes
const t=m(e);for(;;){const n=s(e);if(!n||n===t)break;l(n)}}const u=s(e),f=i(e);return l(e),n(null,t,f,u,o,r,dr(f),c),u},m=e=>{let t=0;for(;e;)if((e=s(e))&&hr(e)&&("["===e.data&&t++,"]"===e.data)){if(0===t)return s(e);t--}return e};return[(e,t)=>{if(!t.hasChildNodes())return n(null,e,t),nn(),void(t._vnode=e);pr=!1,u(t.firstChild,e,null,null,null),nn(),t._vnode=e},u]}const gr=An;
/**
             * The createRenderer function accepts two generic arguments:
             * HostNode and HostElement, corresponding to Node and Element types in the
             * host environment. For example, for runtime-dom, HostNode would be the DOM
             * `Node` interface and HostElement would be the DOM `Element` interface.
             *
             * Custom renderers can pass in the platform specific types like this:
             *
             * ``` js
             * const { render, createApp } = createRenderer<Node, Element>({
             *   patchProp,
             *   ...nodeOps
             * })
             * ```
             */function vr(e){return _r(e)}// Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.
function yr(e){return _r(e,mr)}// implementation
function _r(e,t){(Z||(Z="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})).__VUE__=!0;const{insert:n,remove:o,patchProp:r,createElement:s,createText:i,createComment:l,setText:c,setElementText:a,parentNode:u,nextSibling:f,setScopeId:p=v,insertStaticContent:d}=e,h=(e,t,n,o=null,r=null,s=null,i=!1,l=null,c=!!t.dynamicChildren)=>{if(e===t)return;// patching & not same type, unmount old tree
e&&!Dr(e,t)&&(o=Y(e),U(e,r,s,!0),e=null),-2/* PatchFlags.BAIL */===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:a,ref:u,shapeFlag:f}=t;switch(a){case Or:y(e,t,n,o);break;case Pr:_(e,t,n,o);break;case Tr:null==e&&b(t,n,o,i);break;case Ar:P(e,t,n,o,r,s,i,l,c);break;default:1/* ShapeFlags.ELEMENT */&f?C(e,t,n,o,r,s,i,l,c):6/* ShapeFlags.COMPONENT */&f?T(e,t,n,o,r,s,i,l,c):(64/* ShapeFlags.TELEPORT */&f||128/* ShapeFlags.SUSPENSE */&f)&&a.process(e,t,n,o,r,s,i,l,c,J)}// set ref
null!=u&&r&&fr(u,e&&e.ref,s,t||e,!t)},y=(e,t,o,r)=>{if(null==e)n(t.el=i(t.children),o,r);else{const n=t.el=e.el;t.children!==e.children&&c(n,t.children)}},_=(e,t,o,r)=>{null==e?n(t.el=l(t.children||""),o,r):// there's no support for dynamic comments
t.el=e.el},b=(e,t,n,o)=>{[e.el,e.anchor]=d(e.children,t,n,o,e.el,e.anchor)},C=(e,t,n,o,r,s,i,l,c)=>{i=i||"svg"===t.type,null==e?S(t,n,o,r,s,i,l,c):R(e,t,r,s,i,l,c)},S=(e,t,o,i,l,c,u,f)=>{let p,d;const{type:h,props:m,shapeFlag:g,transition:v,dirs:y}=e;// props
if(p=e.el=s(e.type,c,m&&m.is,m),// mount children first, since some props may rely on child content
// being already rendered, e.g. `<select value>`
8/* ShapeFlags.TEXT_CHILDREN */&g?a(p,e.children):16/* ShapeFlags.ARRAY_CHILDREN */&g&&k(e.children,p,null,i,l,c&&"foreignObject"!==h,u,f),y&&So(e,null,i,"created"),m){for(const t in m)"value"===t||V(t)||r(p,t,null,m[t],c,e.children,i,l,K);
/**
                         * Special case for setting value on DOM elements:
                         * - it can be order-sensitive (e.g. should be set *after* min/max, #2325, #4024)
                         * - it needs to be forced (#1471)
                         * #2353 proposes adding another renderer option to configure this, but
                         * the properties affects are so finite it is worth special casing it
                         * here to reduce the complexity. (Special casing it also should not
                         * affect non-DOM renderers)
                         */"value"in m&&r(p,"value",null,m.value),(d=m.onVnodeBeforeMount)&&ns(d,i,e)}// scopeId
x(p,e,e.scopeId,u,i),y&&So(e,null,i,"beforeMount");// #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
// #1689 For inside suspense + suspense resolved case, just call it
const _=(!l||l&&!l.pendingBranch)&&v&&!v.persisted;_&&v.beforeEnter(p),n(p,t,o),((d=m&&m.onVnodeMounted)||_||y)&&gr((()=>{d&&ns(d,i,e),_&&v.enter(p),y&&So(e,null,i,"mounted")}),l)},x=(e,t,n,o,r)=>{if(n&&p(e,n),o)for(let s=0;s<o.length;s++)p(e,o[s]);if(r&&t===r.subTree){const t=r.vnode;x(e,t,t.scopeId,t.slotScopeIds,r.parent)}},k=(e,t,n,o,r,s,i,l,c=0)=>{for(let a=c;a<e.length;a++){const c=e[a]=l?Qr(e[a]):Jr(e[a]);h(null,c,t,n,o,r,s,i,l)}},R=(e,t,n,o,s,i,l)=>{const c=t.el=e.el;let{patchFlag:u,dynamicChildren:f,dirs:p}=t;// #1426 take the old vnode's patch flag into account since user may clone a
// compiler-generated vnode, which de-opts to FULL_PROPS
u|=16/* PatchFlags.FULL_PROPS */&e.patchFlag;const d=e.props||m,h=t.props||m;let g;// disable recurse in beforeUpdate hooks
n&&br(n,!1),(g=h.onVnodeBeforeUpdate)&&ns(g,n,t,e),p&&So(t,e,n,"beforeUpdate"),n&&br(n,!0);const v=s&&"foreignObject"!==t.type;if(f?A(e.dynamicChildren,f,c,n,o,v,i):l||// full diff
j(e,t,c,null,n,o,v,i,!1),u>0){// the presence of a patchFlag means this element's render code was
// generated by the compiler and can take the fast path.
// in this path old node and new node are guaranteed to have the same shape
// (i.e. at the exact same position in the source template)
if(16/* PatchFlags.FULL_PROPS */&u)// element props contain dynamic keys, full diff needed
O(c,t,d,h,n,o,s);else// props
// This flag is matched when the element has dynamic prop/attr bindings
// other than class and style. The keys of dynamic prop/attrs are saved for
// faster iteration.
// Note dynamic keys like :[foo]="bar" will cause this optimization to
// bail out and go through a full diff because we need to unset the old key
if(// class
// this flag is matched when the element has dynamic class bindings.
2/* PatchFlags.CLASS */&u&&d.class!==h.class&&r(c,"class",null,h.class,s),// style
// this flag is matched when the element has dynamic style bindings
4/* PatchFlags.STYLE */&u&&r(c,"style",d.style,h.style,s),8/* PatchFlags.PROPS */&u){// if the flag is present then dynamicProps must be non-null
const i=t.dynamicProps;for(let t=0;t<i.length;t++){const l=i[t],a=d[l],u=h[l];// #1471 force patch value
u===a&&"value"!==l||r(c,l,a,u,s,e.children,n,o,K)}}// text
// This flag is matched when the element has only dynamic text children.
1/* PatchFlags.TEXT */&u&&e.children!==t.children&&a(c,t.children)}else l||null!=f||// unoptimized, full diff
O(c,t,d,h,n,o,s);((g=h.onVnodeUpdated)||p)&&gr((()=>{g&&ns(g,n,t,e),p&&So(t,e,n,"updated")}),o)},A=(e,t,n,o,r,s,i)=>{for(let l=0;l<t.length;l++){const c=e[l],a=t[l],f=// oldVNode may be an errored async setup() component inside Suspense
// which will not have a mounted element
c.el&&(// - In the case of a Fragment, we need to provide the actual parent
// of the Fragment itself so it can move its children.
c.type===Ar||// - In the case of different nodes, there is going to be a replacement
// which also requires the correct parent container
!Dr(c,a)||// - In the case of a component, it could contain anything.
70/* ShapeFlags.TELEPORT */&c.shapeFlag)?u(c.el):// In other cases, the parent container is not actually used so we
// just pass the block element here to avoid a DOM parentNode call.
n;h(c,a,f,null,o,r,s,i,!0)}},O=(e,t,n,o,s,i,l)=>{if(n!==o){if(n!==m)for(const c in n)V(c)||c in o||r(e,c,n[c],null,l,t.children,s,i,K);for(const c in o){// empty string is not valid prop
if(V(c))continue;const a=o[c],u=n[c];// defer patching value
a!==u&&"value"!==c&&r(e,c,u,a,l,t.children,s,i,K)}"value"in o&&r(e,"value",n.value,o.value)}},P=(e,t,o,r,s,l,c,a,u)=>{const f=t.el=e?e.el:i(""),p=t.anchor=e?e.anchor:i("");let{patchFlag:d,dynamicChildren:h,slotScopeIds:m}=t;// check if this is a slot fragment with :slotted scope ids
m&&(a=a?a.concat(m):m),null==e?(n(f,o,r),n(p,o,r),// a fragment can only have array children
// since they are either generated by the compiler, or implicitly created
// from arrays.
k(t.children,o,p,s,l,c,a,u)):d>0&&64/* PatchFlags.STABLE_FRAGMENT */&d&&h&&// #2715 the previous fragment could've been a BAILed one as a result
// of renderSlot() with no valid children
e.dynamicChildren?(// a stable fragment (template root or <template v-for>) doesn't need to
// patch children order, but it may contain dynamicChildren.
A(e.dynamicChildren,h,o,s,l,c,a),(// #2080 if the stable fragment has a key, it's a <template v-for> that may
//  get moved around. Make sure all root level vnodes inherit el.
// #2134 or if it's a component root, it may also get moved around
// as the component is being moved.
null!=t.key||s&&t===s.subTree)&&Cr(e,t,!0/* shallow */)):// keyed / unkeyed, or manual fragments.
// for keyed & unkeyed, since they are compiler generated from v-for,
// each child is guaranteed to be a block so the fragment will never
// have dynamicChildren.
j(e,t,o,p,s,l,c,a,u)},T=(e,t,n,o,r,s,i,l,c)=>{t.slotScopeIds=l,null==e?512/* ShapeFlags.COMPONENT_KEPT_ALIVE */&t.shapeFlag?r.ctx.activate(t,n,o,i,c):F(t,n,o,r,s,i,c):M(e,t,c)},F=(e,t,n,o,r,s,i)=>{const l=e.component=ss(e,o,r);// inject renderer internals for keepAlive
// setup() is async. This component relies on async logic to be resolved
// before proceeding
if(Qn(e)&&(l.ctx.renderer=J),hs(l),l.asyncDep){// Give it a placeholder if this is not hydration
// TODO handle self-defined fallback
if(r&&r.registerDep(l,L),!e.el){const e=l.subTree=Kr(Pr);_(null,e,t,n)}}else L(l,e,t,n,r,s,i)},M=(e,t,n)=>{const o=t.component=e.component;if(function(e,t,n){const{props:o,children:r,component:s}=e,{props:i,children:l,patchFlag:c}=t,a=s.emitsOptions;// force child update for runtime directive or transition on component vnode.
if(t.dirs||t.transition)return!0;if(!(n&&c>=0))// this path is only taken by manually written render functions
// so presence of any children leads to a forced update
return!(!r&&!l||l&&l.$stable)||o!==i&&(o?!i||Cn(o,i,a):!!i);if(1024/* PatchFlags.DYNAMIC_SLOTS */&c)// slot content that references values that might have changed,
// e.g. in a v-for
return!0;if(16/* PatchFlags.FULL_PROPS */&c)return o?Cn(o,i,a):!!i;// presence of this flag indicates props are always non-null
if(8/* PatchFlags.PROPS */&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(i[n]!==o[n]&&!fn(a,n))return!0}}return!1}(e,t,n)){if(o.asyncDep&&!o.asyncResolved)return void B(o,t,n);// normal update
o.next=t,// in case the child component is also queued, remove it to avoid
// double updating the same child component in the same flush.
function(e){const t=zt.indexOf(e);t>Wt&&zt.splice(t,1)}(o.update),// instance.update is the reactive effect.
o.update()}else// no update needed. just copy over properties
t.el=e.el,o.vnode=t},L=(e,t,n,o,r,s,i)=>{const l=e.effect=new de((()=>{if(e.isMounted){// updateComponent
// This is triggered by mutation of component's own state (next: null)
// OR parent calling processComponent (next: VNode)
let t,{next:n,bu:o,u:l,parent:c,vnode:a}=e,f=n;// Disallow component effect recursion during pre-lifecycle hooks.
br(e,!1),n?(n.el=a.el,B(e,n,i)):n=a,// beforeUpdate hook
o&&G(o),// onVnodeBeforeUpdate
(t=n.props&&n.props.onVnodeBeforeUpdate)&&ns(t,c,n,a),br(e,!0);const p=yn(e),d=e.subTree;e.subTree=p,h(d,p,// parent may have changed if it's in a teleport
u(d.el),// anchor may have changed if it's in a fragment
Y(d),e,r,s),n.el=p.el,null===f&&// self-triggered update. In case of HOC, update parent component
// vnode el. HOC is indicated by parent instance's subTree pointing
// to child component's vnode
wn(e,p.el),// updated hook
l&&gr(l,r),// onVnodeUpdated
(t=n.props&&n.props.onVnodeUpdated)&&gr((()=>ns(t,c,n,a)),r)}else{let i;const{el:l,props:c}=t,{bm:a,m:u,parent:f}=e,p=Xn(t);if(br(e,!1),// beforeMount hook
a&&G(a),// onVnodeBeforeMount
!p&&(i=c&&c.onVnodeBeforeMount)&&ns(i,f,t),br(e,!0),l&&ee){// vnode has adopted host node - perform hydration instead of mount.
const n=()=>{e.subTree=yn(e),ee(l,e.subTree,e,r,null)};p?t.type.__asyncLoader().then((// note: we are moving the render call into an async callback,
// which means it won't track dependencies - but it's ok because
// a server-rendered async wrapper is already in resolved state
// and it will never need to change.
()=>!e.isUnmounted&&n())):n()}else{const i=e.subTree=yn(e);h(null,i,n,o,e,r,s),t.el=i.el}// mounted hook
// onVnodeMounted
if(u&&gr(u,r),!p&&(i=c&&c.onVnodeMounted)){const e=t;gr((()=>ns(i,f,e)),r)}// activated hook for keep-alive roots.
// #1742 activated hook must be accessed after first render
// since the hook may be injected by a child keep-alive
(256/* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */&t.shapeFlag||f&&Xn(f.vnode)&&256/* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */&f.vnode.shapeFlag)&&e.a&&gr(e.a,r),e.isMounted=!0,// #2458: deference mount-only object parameters to prevent memleaks
t=n=o=null}}),(()=>Jt(c)),e.scope),c=e.update=()=>l.run();// create reactive effect for rendering
c.id=e.uid,// allowRecurse
// #1801, #2043 component render effects should allow recursive updates
br(e,!0),c()},B=(e,t,n)=>{t.component=e;const o=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,o){const{props:r,attrs:s,vnode:{patchFlag:i}}=e,l=_t(r),[c]=e.propsOptions;let a=!1;if(// always force full diff in dev
// - #1942 if hmr is enabled with sfc component
// - vite#872 non-sfc component used by sfc component
!(o||i>0)||16/* PatchFlags.FULL_PROPS */&i){// in case of dynamic props, check if we need to delete keys from
// the props object
let o;// full props update.
Xo(e,t,r,s)&&(a=!0);for(const s in l)t&&(// for camelCase
E(t,s)||// it's possible the original props was passed in as kebab-case
// and converted to camelCase (#955)
(o=z(s))!==s&&E(t,o))||(c?!n||// for camelCase
void 0===n[s]&&// for kebab-case
void 0===n[o]||(r[s]=Zo(c,l,s,void 0,e,!0/* isAbsent */)):delete r[s]);// in the case of functional component w/o props declaration, props and
// attrs point to the same object so it should already have been updated.
if(s!==l)for(const e in s)t&&E(t,e)||(delete s[e],a=!0)}// trigger updates for $attrs in case it's used in component slots
else if(8/* PatchFlags.PROPS */&i){// Compiler-generated props & no keys change, just set the updated
// the props.
const n=e.vnode.dynamicProps;for(let o=0;o<n.length;o++){let i=n[o];// skip if the prop key is a declared emit event listener
if(fn(e.emitsOptions,i))continue;// PROPS flag guarantees rawProps to be non-null
const u=t[i];if(c)// attr / props separation was done on init and will be consistent
// in this code path, so just check if attrs have it.
if(E(s,i))u!==s[i]&&(s[i]=u,a=!0);else{const t=D(i);r[t]=Zo(c,l,t,u,e,!1/* isAbsent */)}else u!==s[i]&&(s[i]=u,a=!0)}}a&&Ce(e,"set"/* TriggerOpTypes.SET */,"$attrs")}(e,t.props,o,n),((e,t,n)=>{const{vnode:o,slots:r}=e;let s=!0,i=m;if(32/* ShapeFlags.SLOTS_CHILDREN */&o.shapeFlag){const e=t._;e?// compiled slots.
n&&1/* SlotFlags.STABLE */===e?// compiled AND stable.
// no need to update, and skip stale slots removal.
s=!1:(// compiled but dynamic (v-if/v-for on slots) - update slots, but skip
// normalization.
w(r,t),// #2893
// when rendering the optimized slots by manually written render function,
// we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
// i.e. let the `renderSlot` create the bailed Fragment
n||1/* SlotFlags.STABLE */!==e||delete r._):(s=!t.$stable,ir(t,r)),i=t}else t&&(// non slot object children (direct value) passed to a component
lr(e,t),i={default:1});// delete stale slots
if(s)for(const l in r)or(l)||l in i||delete r[l]})(e,t.children,n),ve(),// props update may have triggered pre-flush watchers.
// flush them before the render update.
tn(),ye()},j=(e,t,n,o,r,s,i,l,c=!1)=>{const u=e&&e.children,f=e?e.shapeFlag:0,p=t.children,{patchFlag:d,shapeFlag:h}=t;// fast path
if(d>0){if(128/* PatchFlags.KEYED_FRAGMENT */&d)// this could be either fully-keyed or mixed (some keyed some not)
// presence of patchFlag means children are guaranteed to be arrays
return void I(u,p,n,o,r,s,i,l,c);if(256/* PatchFlags.UNKEYED_FRAGMENT */&d)// unkeyed
return void $(u,p,n,o,r,s,i,l,c)}// children has 3 possibilities: text, array or no children.
8/* ShapeFlags.TEXT_CHILDREN */&h?(// text children fast path
16/* ShapeFlags.ARRAY_CHILDREN */&f&&K(u,r,s),p!==u&&a(n,p)):16/* ShapeFlags.ARRAY_CHILDREN */&f?// prev children was array
16/* ShapeFlags.ARRAY_CHILDREN */&h?// two arrays, cannot assume anything, do full diff
I(u,p,n,o,r,s,i,l,c):// no new children, just unmount old
K(u,r,s,!0):(// prev children was text OR null
// new children is array OR null
8/* ShapeFlags.TEXT_CHILDREN */&f&&a(n,""),// mount new if array
16/* ShapeFlags.ARRAY_CHILDREN */&h&&k(p,n,o,r,s,i,l,c))},$=(e,t,n,o,r,s,i,l,c)=>{t=t||g;const a=(e=e||g).length,u=t.length,f=Math.min(a,u);let p;for(p=0;p<f;p++){const o=t[p]=c?Qr(t[p]):Jr(t[p]);h(e[p],o,n,null,r,s,i,l,c)}a>u?// remove old
K(e,r,s,!0,!1,f):// mount new
k(t,n,o,r,s,i,l,c,f)},I=(e,t,n,o,r,s,i,l,c)=>{let a=0;const u=t.length;let f=e.length-1,p=u-1;// prev ending index
// next ending index
// 1. sync from start
// (a b) c
// (a b) d e
for(;a<=f&&a<=p;){const o=e[a],u=t[a]=c?Qr(t[a]):Jr(t[a]);if(!Dr(o,u))break;h(o,u,n,null,r,s,i,l,c),a++}// 2. sync from end
// a (b c)
// d e (b c)
for(;a<=f&&a<=p;){const o=e[f],a=t[p]=c?Qr(t[p]):Jr(t[p]);if(!Dr(o,a))break;h(o,a,n,null,r,s,i,l,c),f--,p--}// 3. common sequence + mount
// (a b)
// (a b) c
// i = 2, e1 = 1, e2 = 2
// (a b)
// c (a b)
// i = 0, e1 = -1, e2 = 0
if(a>f){if(a<=p){const e=p+1,f=e<u?t[e].el:o;for(;a<=p;)h(null,t[a]=c?Qr(t[a]):Jr(t[a]),n,f,r,s,i,l,c),a++}}else if(a>p)for(;a<=f;)U(e[a],r,s,!0),a++;else{const d=a,m=a,v=new Map;// prev starting index
for(a=m;a<=p;a++){const e=t[a]=c?Qr(t[a]):Jr(t[a]);null!=e.key&&v.set(e.key,a)}// 5.2 loop through old children left to be patched and try to patch
// matching nodes & remove nodes that are no longer present
let y,_=0;const b=p-m+1;let C=!1,w=0;// used to track whether any node has moved
// works as Map<newIndex, oldIndex>
// Note that oldIndex is offset by +1
// and oldIndex = 0 is a special value indicating the new node has
// no corresponding old node.
// used for determining longest stable subsequence
const S=new Array(b);for(a=0;a<b;a++)S[a]=0;for(a=d;a<=f;a++){const o=e[a];if(_>=b){// all new children have been patched so this can only be a removal
U(o,r,s,!0);continue}let u;if(null!=o.key)u=v.get(o.key);else// key-less node, try to locate a key-less node of the same type
for(y=m;y<=p;y++)if(0===S[y-m]&&Dr(o,t[y])){u=y;break}void 0===u?U(o,r,s,!0):(S[u-m]=a+1,u>=w?w=u:C=!0,h(o,t[u],n,null,r,s,i,l,c),_++)}// 5.3 move and mount
// generate longest stable subsequence only when nodes have moved
const x=C?// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function(e){const t=e.slice(),n=[0];let o,r,s,i,l;const c=e.length;for(o=0;o<c;o++){const c=e[o];if(0!==c){if(r=n[n.length-1],e[r]<c){t[o]=r,n.push(o);continue}for(s=0,i=n.length-1;s<i;)l=s+i>>1,e[n[l]]<c?s=l+1:i=l;c<e[n[s]]&&(s>0&&(t[o]=n[s-1]),n[s]=o)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=t[i];return n}(S):g;// looping backwards so that we can use last patched node as anchor
for(y=x.length-1,a=b-1;a>=0;a--){const e=m+a,f=t[e],p=e+1<u?t[e+1].el:o;0===S[a]?// mount new
h(null,f,n,p,r,s,i,l,c):C&&(// move if:
// There is no stable subsequence (e.g. a reverse)
// OR current node is not among the stable sequence
y<0||a!==x[y]?N(f,n,p,2/* MoveType.REORDER */):y--)}}},N=(e,t,o,r,s=null)=>{const{el:i,type:l,transition:c,children:a,shapeFlag:u}=e;if(6/* ShapeFlags.COMPONENT */&u)N(e.component.subTree,t,o,r);else if(128/* ShapeFlags.SUSPENSE */&u)e.suspense.move(t,o,r);else if(64/* ShapeFlags.TELEPORT */&u)l.move(e,t,o,J);else if(l!==Ar)if(l!==Tr)if(2/* MoveType.REORDER */!==r&&1/* ShapeFlags.ELEMENT */&u&&c)if(0/* MoveType.ENTER */===r)c.beforeEnter(i),n(i,t,o),gr((()=>c.enter(i)),s);else{const{leave:e,delayLeave:r,afterLeave:s}=c,l=()=>n(i,t,o),a=()=>{e(i,(()=>{l(),s&&s()}))};r?r(i,l,a):a()}else n(i,t,o);else(({el:e,anchor:t},o,r)=>{let s;for(;e&&e!==t;)s=f(e),n(e,o,r),e=s;n(t,o,r)})(e,t,o);// single nodes
else{n(i,t,o);for(let e=0;e<a.length;e++)N(a[e],t,o,r);n(e.anchor,t,o)}},U=(e,t,n,o=!1,r=!1)=>{const{type:s,props:i,ref:l,children:c,dynamicChildren:a,shapeFlag:u,patchFlag:f,dirs:p}=e;// unset ref
if(null!=l&&fr(l,null,n,e,!0),256/* ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE */&u)return void t.ctx.deactivate(e);const d=1/* ShapeFlags.ELEMENT */&u&&p,h=!Xn(e);let m;if(h&&(m=i&&i.onVnodeBeforeUnmount)&&ns(m,t,e),6/* ShapeFlags.COMPONENT */&u)q(e.component,n,o);else{if(128/* ShapeFlags.SUSPENSE */&u)return void e.suspense.unmount(n,o);d&&So(e,null,t,"beforeUnmount"),64/* ShapeFlags.TELEPORT */&u?e.type.remove(e,t,n,r,J,o):a&&(// #1153: fast path should not be taken for non-stable (v-for) fragments
s!==Ar||f>0&&64/* PatchFlags.STABLE_FRAGMENT */&f)?// fast path for block nodes: only need to unmount dynamic children.
K(a,t,n,!1,!0):(s===Ar&&384/* PatchFlags.UNKEYED_FRAGMENT */&f||!r&&16/* ShapeFlags.ARRAY_CHILDREN */&u)&&K(c,t,n),o&&H(e)}(h&&(m=i&&i.onVnodeUnmounted)||d)&&gr((()=>{m&&ns(m,t,e),d&&So(e,null,t,"unmounted")}),n)},H=e=>{const{type:t,el:n,anchor:r,transition:s}=e;if(t===Ar)return void W(n,r);if(t===Tr)return void(({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=f(e),o(e),e=n;o(t)})(e);const i=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1/* ShapeFlags.ELEMENT */&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:o}=s,r=()=>t(n,i);o?o(e.el,i,r):r()}else i()},W=(e,t)=>{// For fragments, directly remove all contained DOM nodes.
// (fragment child nodes cannot have transition)
let n;for(;e!==t;)n=f(e),o(e),e=n;o(t)},q=(e,t,n)=>{const{bum:o,scope:r,update:s,subTree:i,um:l}=e;// beforeUnmount hook
o&&G(o),// stop effects in component scope
r.stop(),// update may be null if a component is unmounted before its async
// setup has resolved.
s&&(// so that scheduler will no longer invoke it
s.active=!1,U(i,e,t,n)),// unmounted hook
l&&gr(l,t),gr((()=>{e.isUnmounted=!0}),t),// A component with async dep inside a pending suspense is unmounted before
// its async dep resolves. This should remove the dep from the suspense, and
// cause the suspense to resolve immediately if that was the last dep.
t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},K=(e,t,n,o=!1,r=!1,s=0)=>{for(let i=s;i<e.length;i++)U(e[i],t,n,o,r)},Y=e=>6/* ShapeFlags.COMPONENT */&e.shapeFlag?Y(e.component.subTree):128/* ShapeFlags.SUSPENSE */&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),X=(e,t,n)=>{null==e?t._vnode&&U(t._vnode,null,null,!0):h(t._vnode||null,e,t,null,null,null,n),tn(),nn(),t._vnode=e},J={p:h,um:U,m:N,r:H,mt:F,mc:k,pc:j,pbc:A,n:Y,o:e};// Note: functions inside this closure should use `const xxx = () => {}`
// style in order to prevent being inlined by minifiers.
let Q,ee;return t&&([Q,ee]=t(J)),{render:X,hydrate:Q,createApp:ur(X,Q)}}function br({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}
/**
             * #1156
             * When a component is HMR-enabled, we need to make sure that all static nodes
             * inside a block also inherit the DOM element from the previous tree so that
             * HMR updates (which are full updates) can retrieve the element for patching.
             *
             * #2080
             * Inside keyed `template` fragment static children, if a fragment is moved,
             * the children will always be moved. Therefore, in order to ensure correct move
             * position, el should be inherited from previous nodes.
             */function Cr(e,t,n=!1){const o=e.children,r=t.children;if(k(o)&&k(r))for(let s=0;s<o.length;s++){// this is only called in the optimized path so array children are
// guaranteed to be vnodes
const e=o[s];let t=r[s];1/* ShapeFlags.ELEMENT */&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32/* PatchFlags.HYDRATE_EVENTS */===t.patchFlag)&&(t=r[s]=Qr(r[s]),t.el=e.el),n||Cr(e,t)),// #6852 also inherit for text nodes
t.type===Or&&(t.el=e.el)}}const wr=e=>e&&(e.disabled||""===e.disabled),Sr=e=>"undefined"!=typeof SVGElement&&e instanceof SVGElement,xr=(e,t)=>{const n=e&&e.to;return T(n)?t?t(n):null:n};function Er(e,t,n,{o:{insert:o},m:r},s=2/* TeleportMoveTypes.REORDER */){// move target anchor if this is a target change.
0/* TeleportMoveTypes.TARGET_CHANGE */===s&&o(e.targetAnchor,t,n);const{el:i,anchor:l,shapeFlag:c,children:a,props:u}=e,f=2/* TeleportMoveTypes.REORDER */===s;// if this is a re-order and teleport is enabled (content is in target)
// do not move children. So the opposite is: only move children if this
// is not a reorder, or the teleport is disabled
if(// move main view anchor if this is a re-order.
f&&o(i,t,n),(!f||wr(u))&&16/* ShapeFlags.ARRAY_CHILDREN */&c)for(let p=0;p<a.length;p++)r(a[p],t,n,2/* MoveType.REORDER */);// move main view anchor if this is a re-order.
f&&o(l,t,n)}// Force-casted public typing for h and TSX props inference
const kr=e("z",{__isTeleport:!0,process(e,t,n,o,r,s,i,l,c,a){const{mc:u,pc:f,pbc:p,o:{insert:d,querySelector:h,createText:m,createComment:g}}=a,v=wr(t.props);let{shapeFlag:y,children:_,dynamicChildren:b}=t;if(null==e){// insert anchors in the main view
const e=t.el=m(""),a=t.anchor=m("");d(e,n,o),d(a,n,o);const f=t.target=xr(t.props,h),p=t.targetAnchor=m("");f&&(d(p,f),// #2652 we could be teleporting from a non-SVG tree into an SVG tree
i=i||Sr(f));const g=(e,t)=>{// Teleport *always* has Array children. This is enforced in both the
// compiler and vnode children normalization.
16/* ShapeFlags.ARRAY_CHILDREN */&y&&u(_,e,t,r,s,i,l,c)};v?g(n,a):f&&g(f,p)}else{// update content
t.el=e.el;const o=t.anchor=e.anchor,u=t.target=e.target,d=t.targetAnchor=e.targetAnchor,m=wr(e.props),g=m?n:u,y=m?o:d;if(i=i||Sr(u),b?(// fast path when the teleport happens to be a block root
p(e.dynamicChildren,b,g,r,s,i,l),// even in block tree mode we need to make sure all root-level nodes
// in the teleport inherit previous DOM references so that they can
// be moved in future patches.
Cr(e,t,!0)):c||f(e,t,g,y,r,s,i,l,!1),v)m||// enabled -> disabled
// move into main container
Er(t,n,o,a,1/* TeleportMoveTypes.TOGGLE */);else// target changed
if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=xr(t.props,h);e&&Er(t,e,null,a,0/* TeleportMoveTypes.TARGET_CHANGE */)}else m&&// disabled -> enabled
// move into teleport target
Er(t,u,d,a,1/* TeleportMoveTypes.TOGGLE */)}Rr(t)},remove(e,t,n,o,{um:r,o:{remove:s}},i){const{shapeFlag:l,children:c,anchor:a,targetAnchor:u,target:f,props:p}=e;// an unmounted teleport should always remove its children if not disabled
if(f&&s(u),(i||!wr(p))&&(s(a),16/* ShapeFlags.ARRAY_CHILDREN */&l))for(let d=0;d<c.length;d++){const e=c[d];r(e,t,n,!0,!!e.dynamicChildren)}},move:Er,hydrate:function(e,t,n,o,r,s,{o:{nextSibling:i,parentNode:l,querySelector:c}},a){const u=t.target=xr(t.props,c);if(u){// if multiple teleports rendered to the same target element, we need to
// pick up from where the last teleport finished instead of the first node
const c=u._lpa||u.firstChild;if(16/* ShapeFlags.ARRAY_CHILDREN */&t.shapeFlag)if(wr(t.props))t.anchor=a(i(e),t,l(e),n,o,r,s),t.targetAnchor=c;else{t.anchor=i(e);// lookahead until we find the target anchor
// we cannot rely on return value of hydrateChildren() because there
// could be nested teleports
let l=c;for(;l;)if(l=i(l),l&&8===l.nodeType&&"teleport anchor"===l.data){t.targetAnchor=l,u._lpa=t.targetAnchor&&i(t.targetAnchor);break}a(c,t,u,n,o,r,s)}Rr(t)}return t.anchor&&i(t.anchor)}});function Rr(e){// presence of .ut method indicates owner component uses css vars.
// code path here can assume browser environment.
const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)1===n.nodeType&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Ar=e("F",Symbol(void 0)),Or=e("T",Symbol(void 0)),Pr=e("C",Symbol(void 0)),Tr=Symbol(void 0),Fr=[];let Mr=null;
/**
             * Open a block.
             * This must be called before `createBlock`. It cannot be part of `createBlock`
             * because the children of the block are evaluated before `createBlock` itself
             * is called. The generated code typically looks like this:
             *
             * ```js
             * function render() {
             *   return (openBlock(),createBlock('div', null, [...]))
             * }
             * ```
             * disableTracking is true when creating a v-for fragment block, since a v-for
             * fragment always diffs its children.
             *
             * @private
             */function Lr(e=!1){Fr.push(Mr=e?null:[])}function Br(){Fr.pop(),Mr=Fr[Fr.length-1]||null}// Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)
let jr=1;
/**
             * Block tracking sometimes needs to be disabled, for example during the
             * creation of a tree that needs to be cached by v-once. The compiler generates
             * code like this:
             *
             * ``` js
             * _cache[1] || (
             *   setBlockTracking(-1),
             *   _cache[1] = createVNode(...),
             *   setBlockTracking(1),
             *   _cache[1]
             * )
             * ```
             *
             * @private
             */function $r(e){jr+=e}function Ir(e){// save current block children on the block vnode
return e.dynamicChildren=jr>0?Mr||g:null,// close block
Br(),// a block is always going to be patched, so track it as a child of its
// parent block
jr>0&&Mr&&Mr.push(e),e}
/**
             * @private
             */function Vr(e,t,n,o,r,s){return Ir(qr(e,t,n,o,r,s,!0/* isBlock */))}
/**
             * Create a block root vnode. Takes the same exact arguments as `createVNode`.
             * A block root keeps track of dynamic nodes within the block in the
             * `dynamicChildren` array.
             *
             * @private
             */function Nr(e,t,n,o,r){return Ir(Kr(e,t,n,o,r,!0/* isBlock: prevent a block from tracking itself */))}function Ur(e){return!!e&&!0===e.__v_isVNode}function Dr(e,t){return e.type===t.type&&e.key===t.key}
/**
             * Internal API for registering an arguments transform for createVNode
             * used for creating stubs in the test-utils
             * It is *internal* but needs to be exposed for test-utils to pick up proper
             * typings
             */const Hr="__vInternal",zr=({key:e})=>null!=e?e:null,Wr=({ref:e,ref_key:t,ref_for:n})=>null!=e?T(e)||Et(e)||P(e)?{i:pn,r:e,k:t,f:!!n}:e:null;function qr(e,t=null,n=null,o=0,r=null,s=(e===Ar?0:1/* ShapeFlags.ELEMENT */),i=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&zr(t),ref:t&&Wr(t),scopeId:dn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:pn};return l?(es(c,n),// normalize suspense children
128/* ShapeFlags.SUSPENSE */&s&&e.normalize(c)):n&&(// compiled element vnode - if children is passed, only possible types are
// string or Array.
c.shapeFlag|=T(n)?8/* ShapeFlags.TEXT_CHILDREN */:16/* ShapeFlags.ARRAY_CHILDREN */),// track vnode for block tree
jr>0&&// avoid a block node from tracking itself
!i&&// has current parent block
Mr&&(// presence of a patch flag indicates this node needs patching on updates.
// component nodes also should always be patched, because even if the
// component doesn't need to update, it needs to persist the instance on to
// the next vnode so that it can be properly unmounted later.
c.patchFlag>0||6/* ShapeFlags.COMPONENT */&s)&&// the EVENTS flag is only for hydration and if it is the only flag, the
// vnode should not be considered dynamic due to handler caching.
32/* PatchFlags.HYDRATE_EVENTS */!==c.patchFlag&&Mr.push(c),c}const Kr=e("v",(function(e,t=null,n=null,r=0,s=null,i=!1){if(e&&e!==ko||(e=Pr),Ur(e)){// createVNode receiving an existing vnode. This happens in cases like
// <component :is="vnode"/>
// #2078 make sure to merge refs during the clone instead of overwriting it
const o=Yr(e,t,!0/* mergeRef: true */);return n&&es(o,n),jr>0&&!i&&Mr&&(6/* ShapeFlags.COMPONENT */&o.shapeFlag?Mr[Mr.indexOf(e)]=o:Mr.push(o)),o.patchFlag|=-2/* PatchFlags.BAIL */,o}// class component normalization.
var l;// class & style normalization.
if(P(l=e)&&"__vccOpts"in l&&(e=e.__vccOpts),t){// for reactive or proxy objects, we need to clone it to enable mutation.
t=Gr(t);let{class:e,style:n}=t;e&&!T(e)&&(t.class=c(e)),M(n)&&(// reactive state objects need to be cloned since they are likely to be
// mutated
yt(n)&&!k(n)&&(n=w({},n)),t.style=o(n))}// encode the vnode type information into a bitmap
const a=T(e)?1/* ShapeFlags.ELEMENT */:Sn(e)?128/* ShapeFlags.SUSPENSE */:(e=>e.__isTeleport)(e)?64/* ShapeFlags.TELEPORT */:M(e)?4/* ShapeFlags.STATEFUL_COMPONENT */:P(e)?2/* ShapeFlags.FUNCTIONAL_COMPONENT */:0;return qr(e,t,n,r,s,a,i,!0)}));function Gr(e){return e?yt(e)||Hr in e?w({},e):e:null}function Yr(e,t,n=!1){// This is intentionally NOT using spread or extend to avoid the runtime
// key enumeration cost.
const{props:o,ref:r,patchFlag:s,children:i}=e,l=t?ts(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&zr(l),ref:t&&t.ref?// #2078 in the case of <component :is="vnode" ref="extra"/>
// if the vnode itself already has a ref, cloneVNode will need to merge
// the refs so the single vnode can be set on multiple refs
n&&r?k(r)?r.concat(Wr(t)):[r,Wr(t)]:Wr(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,// if the vnode is cloned with extra props, we can no longer assume its
// existing patch flag to be reliable and need to add the FULL_PROPS flag.
// note: preserve flag for fragments since they use the flag for children
// fast paths only.
patchFlag:t&&e.type!==Ar?-1===s?16/* PatchFlags.FULL_PROPS */:16/* PatchFlags.FULL_PROPS */|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,// These should technically only be non-null on mounted VNodes. However,
// they *should* be copied for kept-alive vnodes. So we just always copy
// them since them being non-null during a mount doesn't affect the logic as
// they will simply be overwritten.
component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Yr(e.ssContent),ssFallback:e.ssFallback&&Yr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}
/**
             * @private
             */function Xr(e=" ",t=0){return Kr(Or,null,e,t)}
/**
             * @private
             */
/**
             * @private
             */
function Zr(e="",// when used as the v-else branch, the comment node must be created as a
// block to ensure correct updates.
t=!1){return t?(Lr(),Nr(Pr,null,e)):Kr(Pr,null,e)}function Jr(e){return null==e||"boolean"==typeof e?Kr(Pr):k(e)?Kr(Ar,null,// #3666, avoid reference pollution when reusing vnode
e.slice()):"object"==typeof e?Qr(e):Kr(Or,null,String(e))}// optimized normalization for template-compiled render fns
function Qr(e){return null===e.el&&-1/* PatchFlags.HOISTED */!==e.patchFlag||e.memo?e:Yr(e)}function es(e,t){let n=0;const{shapeFlag:o}=e;if(null==t)t=null;else if(k(t))n=16/* ShapeFlags.ARRAY_CHILDREN */;else if("object"==typeof t){if(65/* ShapeFlags.TELEPORT */&o){// Normalize slot to plain children for plain element and Teleport
const n=t.default;return void(n&&(// _c marker is added by withCtx() indicating this is a compiled slot
n._c&&(n._d=!1),es(e,n()),n._c&&(n._d=!0)))}{n=32/* ShapeFlags.SLOTS_CHILDREN */;const o=t._;o||Hr in t?3/* SlotFlags.FORWARDED */===o&&pn&&(// a child component receives forwarded slots from the parent.
// its slot type is determined by its parent's slot type.
1/* SlotFlags.STABLE */===pn.slots._?t._=1/* SlotFlags.STABLE */:(t._=2/* SlotFlags.DYNAMIC */,e.patchFlag|=1024/* PatchFlags.DYNAMIC_SLOTS */)):t._ctx=pn}}else P(t)?(t={default:t,_ctx:pn},n=32/* ShapeFlags.SLOTS_CHILDREN */):(t=String(t),// force teleport children to array so it can be moved around
64/* ShapeFlags.TELEPORT */&o?(n=16/* ShapeFlags.ARRAY_CHILDREN */,t=[Xr(t)]):n=8/* ShapeFlags.TEXT_CHILDREN */);e.children=t,e.shapeFlag|=n}function ts(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=c([t.class,r.class]));else if("style"===e)t.style=o([t.style,r.style]);else if(b(e)){const n=t[e],o=r[e];!o||n===o||k(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=r[e])}return t}function ns(e,t,n,o=null){Nt(e,t,7/* ErrorCodes.VNODE_HOOK */,[n,o])}const os=cr();let rs=0;function ss(e,t,n){const o=e.type,r=(t?t.appContext:e.appContext)||os,s={uid:rs++,vnode:e,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Q(!0/* detached */),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],// local resolved assets
components:null,directives:null,// resolved props and emits options
propsOptions:Jo(o,r),emitsOptions:un(o,r),// emit
emit:null,emitted:null,// props default value
propsDefaults:m,// inheritAttrs
inheritAttrs:o.inheritAttrs,// state
ctx:m,data:m,props:m,attrs:m,slots:m,refs:m,setupState:m,setupContext:null,// suspense related
suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,// lifecycle hooks
// not using enums here because it results in computed properties
isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};// inherit parent app context - or - if root, adopt from root vnode
return s.ctx={_:s},s.root=t?t.root:s,s.emit=an.bind(null,s),// apply custom element special handling
e.ce&&e.ce(s),s}let is=null;const ls=e("g",(()=>is||pn)),cs=e=>{is=e,e.scope.on()},as=()=>{is&&is.scope.off(),is=null};function us(e){return 4/* ShapeFlags.STATEFUL_COMPONENT */&e.vnode.shapeFlag}let fs,ps,ds=!1;function hs(e,t=!1){ds=t;const{props:n,children:o}=e.vnode,r=us(e);!function(e,t,n,// result of bitwise flag comparison
o=!1){const r={},s={};Y(s,Hr,1),e.propsDefaults=Object.create(null),Xo(e,t,r,s);// ensure all declared prop keys are present
for(const i in e.propsOptions[0])i in r||(r[i]=void 0);n?// stateful
e.props=o?r:pt(r):e.type.props?// functional w/ declared props
e.props=r:// functional w/ optional props, props === attrs
e.props=s,e.attrs=s}(e,n,r,t),((e,t)=>{if(32/* ShapeFlags.SLOTS_CHILDREN */&e.vnode.shapeFlag){const n=t._;n?(// users can get the shallow readonly version of the slots object through `this.$slots`,
// we should avoid the proxy object polluting the slots of the internal instance
e.slots=_t(t),// make compiler marker non-enumerable
Y(t,"_",n)):ir(t,e.slots={})}else e.slots={},t&&lr(e,t);Y(e.slots,Hr,1)})(e,o);const s=r?function(e,t){const n=e.type;// 0. create render proxy property access cache
e.accessCache=Object.create(null),// 1. create public instance / render proxy
// also mark it raw so it's never observed
e.proxy=bt(new Proxy(e.ctx,$o));// 2. call setup()
const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?vs(e):null;cs(e),ve();const r=Vt(o,e,0/* ErrorCodes.SETUP_FUNCTION */,[e.props,n]);if(ye(),as(),L(r)){if(r.then(as,as),t)// return the promise so server-renderer can wait on it
return r.then((n=>{ms(e,n,t)})).catch((t=>{Ut(t,e,0/* ErrorCodes.SETUP_FUNCTION */)}));// async setup returned Promise.
// bail here and wait for re-entry.
e.asyncDep=r}else ms(e,r,t)}else gs(e,t)}(e,t):void 0;return ds=!1,s}function ms(e,t,n){P(t)?// setup returned an inline render function
e.type.__ssrInlineRender?// when the function's name is `ssrRender` (compiled by SFC inline mode),
// set it as ssrRender instead.
e.ssrRender=t:e.render=t:M(t)&&(e.setupState=Ft(t)),gs(e,n)}function gs(e,t,n){const o=e.type;// template / render function normalization
// could be already set when returned from setup()
if(!e.render){// only do on-the-fly compile if not in SSR - SSR on-the-fly compilation
// is done by server-renderer
if(!t&&fs&&!o.render){const t=o.template||Ho(e).template;if(t){const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:i}=o,l=w(w({isCustomElement:n,delimiters:s},r),i);o.render=fs(t,l)}}e.render=o.render||v,// for runtime-compiled render functions using `with` blocks, the render
// proxy used needs a different `has` handler which is more performant and
// also only allows a whitelist of globals to fallthrough.
ps&&ps(e)}// support for 2.x options
cs(e),ve(),No(e),ye(),as()}function vs(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=function(e){return new Proxy(e.attrs,{get:(t,n)=>(_e(e,0/* TrackOpTypes.GET */,"$attrs"),t[n])})}(e))},slots:e.slots,emit:e.emit,expose:t}}function ys(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ft(bt(e.exposed)),{get:(t,n)=>n in t?t[n]:n in Bo?Bo[n](e):void 0,has:(e,t)=>t in e||t in Bo}))}function _s(e,t=!0){return P(e)?e.displayName||e.name:e.name||t&&e.__name}const bs=e("j",((e,t)=>function(e,t,n=!1){let o,r;const s=P(e);return s?(o=e,r=v):(o=e.get,r=e.set),new It(o,r,s||!r,n)}(e,0,ds)));// implementation
function Cs(){const e=ls();return e.setupContext||(e.setupContext=vs(e))}
/**
             * Runtime helper for merging default declarations. Imported by compiled code
             * only.
             * @internal
             */ // Actual implementation
function ws(e,t,n){const o=arguments.length;return 2===o?M(t)&&!k(t)?// single vnode without props
Ur(t)?Kr(e,null,[t]):Kr(e,t):Kr(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):3===o&&Ur(n)&&(n=[n]),Kr(e,t,n))}const Ss=Symbol(""),xs=()=>Tn(Ss);function Es(e,t){const n=e.memo;if(n.length!=t.length)return!1;for(let o=0;o<n.length;o++)if(K(n[o],t[o]))return!1;// make sure to let parent block track it when returning cached
return jr>0&&Mr&&Mr.push(e),!0}// Core API ------------------------------------------------------------------
const ks="3.2.45",Rs={createComponentInstance:ss,setupComponent:hs,renderComponentRoot:yn,setCurrentRenderingInstance:hn,isVNode:Ur,normalizeVNode:Jr},As="undefined"!=typeof document?document:null,Os=As&&As.createElement("template"),Ps={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const r=t?As.createElementNS("http://www.w3.org/2000/svg",e):As.createElement(e,n?{is:n}:void 0);return"select"===e&&o&&null!=o.multiple&&r.setAttribute("multiple",o.multiple),r},createText:e=>As.createTextNode(e),createComment:e=>As.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>As.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},// __UNSAFE__
// Reason: innerHTML.
// Static content here can only come from compiled templates.
// As long as the user only uses trusted templates, this is safe.
insertStaticContent(e,t,n,o,r,s){// <parent> before | first ... last | anchor </parent>
const i=n?n.previousSibling:t.lastChild;// #5308 can only take cached path if:
// - has a single root node
// - nextSibling info is still available
if(r&&(r===s||r.nextSibling))// cached
for(;t.insertBefore(r.cloneNode(!0),n),r!==s&&(r=r.nextSibling););else{// fresh insert
Os.innerHTML=o?`<svg>${e}</svg>`:e;const r=Os.content;if(o){// remove outer svg wrapper
const e=r.firstChild;for(;e.firstChild;)r.appendChild(e.firstChild);r.removeChild(e)}t.insertBefore(r,n)}return[// first
i?i.nextSibling:t.firstChild,// last
n?n.previousSibling:t.lastChild]}},Ts=/\s*!important$/;function Fs(e,t,n){if(k(n))n.forEach((n=>Fs(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))// custom property definition
e.setProperty(t,n);else{const o=function(e,t){const n=Ls[t];if(n)return n;let o=D(t);if("filter"!==o&&o in e)return Ls[t]=o;o=W(o);for(let r=0;r<Ms.length;r++){const n=Ms[r]+o;if(n in e)return Ls[t]=n}return t}(e,t);Ts.test(n)?// !important
e.setProperty(z(o),n.replace(Ts,""),"important"):e[o]=n}}const Ms=["Webkit","Moz","ms"],Ls={},Bs="http://www.w3.org/1999/xlink";function js(e,t,n,o){e.addEventListener(t,n,o)}function $s(e,t,n,o,r=null){// vei = vue event invokers
const s=e._vei||(e._vei={}),i=s[t];if(o&&i)// patch
i.value=o;else{const[n,l]=function(e){let t;if(Is.test(e)){let n;for(t={};n=e.match(Is);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):z(e.slice(2));return[n,t]}// To avoid the overhead of repeatedly calling Date.now(), we cache
// and use the same timestamp for all event listeners attached in the same tick.
(t);if(o){// add
const i=s[t]=function(e,t){const n=e=>{// async edge case vuejs/vue#6566
// inner click event triggers patch, event handler
// attached to outer element during patch, and triggered again. This
// happens because browsers fire microtask ticks between event propagation.
// this no longer happens for templates in Vue 3, but could still be
// theoretically possible for hand-written render functions.
// the solution: we save the timestamp when a handler is attached,
// and also attach the timestamp to any event that was handled by vue
// for the first time (to avoid inconsistent event timestamp implementations
// or events fired from iframes, e.g. #2513)
// The handler would only fire if the event passed to it was fired
// AFTER it was attached.
if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();Nt(function(e,t){if(k(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}(e,n.value),t,5/* ErrorCodes.NATIVE_EVENT_HANDLER */,[e])};return n.value=e,n.attached=Vs||(Ns.then((()=>Vs=0)),Vs=Date.now()),n}(o,r);js(e,n,i,l)}else i&&(// remove
function(e,t,n,o){e.removeEventListener(t,n,o)}(e,n,i,l),s[t]=void 0)}}const Is=/(?:Once|Passive|Capture)$/;let Vs=0;const Ns=Promise.resolve(),Us=/^on[a-z]/;function Ds(e,t){const n=Yn(e);class o extends zs{constructor(e){super(n,e,t)}}return o.def=n,o}const Hs="undefined"!=typeof HTMLElement?HTMLElement:class{};class zs extends Hs{constructor(e,t={},n){super(),this._def=e,this._props=t,
/**
                     * @internal
                     */
this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||// for sync component defs we can immediately resolve props
this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,Zt((()=>{this._connected||(Di(null,this.shadowRoot),this._instance=null)}))}
/**
                 * resolve inner component definition (handle possible async component)
                 */_resolveDef(){this._resolved=!0;// set initial attrs
for(let n=0;n<this.attributes.length;n++)this._setAttr(this.attributes[n].name);// watch future attr changes
new MutationObserver((e=>{for(const t of e)this._setAttr(t.attributeName)})).observe(this,{attributes:!0});const e=(e,t=!1)=>{const{props:n,styles:o}=e;// cast Number-type props set before resolve
let r;if(n&&!k(n))for(const s in n){const e=n[s];(e===Number||e&&e.type===Number)&&(s in this._props&&(this._props[s]=X(this._props[s])),(r||(r=Object.create(null)))[D(s)]=!0)}this._numberProps=r,t&&// defining getter/setters on prototype
// for sync defs, this already happened in the constructor
this._resolveProps(e),// apply CSS
this._applyStyles(o),// initial render
this._update()},t=this._def.__asyncLoader;t?t().then((t=>e(t,!0))):e(this._def)}_resolveProps(e){const{props:t}=e,n=k(t)?t:Object.keys(t||{});// check if there are props set pre-upgrade or connect
for(const o of Object.keys(this))"_"!==o[0]&&n.includes(o)&&this._setProp(o,this[o],!0,!1);// defining getter/setters on prototype
for(const o of n.map(D))Object.defineProperty(this,o,{get(){return this._getProp(o)},set(e){this._setProp(o,e)}})}_setAttr(e){let t=this.getAttribute(e);const n=D(e);this._numberProps&&this._numberProps[n]&&(t=X(t)),this._setProp(n,t,!1)}
/**
                 * @internal
                 */_getProp(e){return this._props[e]}
/**
                 * @internal
                 */_setProp(e,t,n=!0,o=!0){t!==this._props[e]&&(this._props[e]=t,o&&this._instance&&this._update(),// reflect
n&&(!0===t?this.setAttribute(z(e),""):"string"==typeof t||"number"==typeof t?this.setAttribute(z(e),t+""):t||this.removeAttribute(z(e))))}_update(){Di(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Kr(this._def,w({},this._props));return this._instance||(e.ce=e=>{this._instance=e,e.isCE=!0;const t=(e,t)=>{this.dispatchEvent(new CustomEvent(e,{detail:t}))};// intercept emit
e.emit=(e,...n)=>{// dispatch both the raw and hyphenated versions of an event
// to match Vue behavior
t(e,n),z(e)!==e&&t(z(e),n)};// locate nearest Vue custom element parent for provide/inject
let n=this;for(;n=n&&(n.parentNode||n.host);)if(n instanceof zs){e.parent=n._instance,e.provides=n._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach((e=>{const t=document.createElement("style");t.textContent=e,this.shadowRoot.appendChild(t)}))}}function Ws(e,t){if(128/* ShapeFlags.SUSPENSE */&e.shapeFlag){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{Ws(n.activeBranch,t)}))}// drill down HOCs until it's a non-component vnode
for(;e.component;)e=e.component.subTree;if(1/* ShapeFlags.ELEMENT */&e.shapeFlag&&e.el)qs(e.el,t);else if(e.type===Ar)e.children.forEach((e=>Ws(e,t)));else if(e.type===Tr){let{el:n,anchor:o}=e;for(;n&&(qs(n,t),n!==o);)n=n.nextSibling}}function qs(e,t){if(1===e.nodeType){const n=e.style;for(const e in t)n.setProperty(`--${e}`,t[e])}}const Ks="transition",Gs="animation",Ys=e("y",((e,{slots:t})=>ws(Dn,ei(e),t)));Ys.displayName="Transition";const Xs={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Zs=Ys.props=w({},Dn.props,Xs),Js=(e,t=[])=>{k(e)?e.forEach((e=>e(...t))):e&&e(...t)},Qs=e=>!!e&&(k(e)?e.some((e=>e.length>1)):e.length>1);function ei(e){const t={};for(const w in e)w in Xs||(t[w]=e[w]);if(!1===e.css)return t;const{name:n="v",type:o,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:a=i,appearToClass:u=l,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=e,h=function(e){if(null==e)return null;if(M(e))return[ti(e.enter),ti(e.leave)];{const t=ti(e);return[t,t]}}(r),m=h&&h[0],g=h&&h[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:_,onLeave:b,onLeaveCancelled:C,onBeforeAppear:S=v,onAppear:x=y,onAppearCancelled:E=_}=t,k=(e,t,n)=>{oi(e,t?u:l),oi(e,t?a:i),n&&n()},R=(e,t)=>{e._isLeaving=!1,oi(e,f),oi(e,d),oi(e,p),t&&t()},A=e=>(t,n)=>{const r=e?x:y,i=()=>k(t,e,n);Js(r,[t,i]),ri((()=>{oi(t,e?c:s),ni(t,e?u:l),Qs(r)||ii(t,o,m,i)}))};return w(t,{onBeforeEnter(e){Js(v,[e]),ni(e,s),ni(e,i)},onBeforeAppear(e){Js(S,[e]),ni(e,c),ni(e,a)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>R(e,t);ni(e,f),// force reflow so *-leave-from classes immediately take effect (#2593)
ui(),ni(e,p),ri((()=>{e._isLeaving&&(oi(e,f),ni(e,d),Qs(b)||ii(e,o,g,n))})),Js(b,[e,n])},onEnterCancelled(e){k(e,!1),Js(_,[e])},onAppearCancelled(e){k(e,!0),Js(E,[e])},onLeaveCancelled(e){R(e),Js(C,[e])}})}function ti(e){return X(e)}function ni(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function oi(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function ri(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let si=0;function ii(e,t,n,o){const r=e._endId=++si,s=()=>{r===e._endId&&o()};if(n)return setTimeout(s,n);const{type:i,timeout:l,propCount:c}=li(e,t);if(!i)return o();const a=i+"end";let u=0;const f=()=>{e.removeEventListener(a,p),s()},p=t=>{t.target===e&&++u>=c&&f()};setTimeout((()=>{u<c&&f()}),l+1),e.addEventListener(a,p)}function li(e,t){const n=window.getComputedStyle(e),o=e=>(n[e]||"").split(", "),r=o(`${Ks}Delay`),s=o(`${Ks}Duration`),i=ci(r,s),l=o(`${Gs}Delay`),c=o(`${Gs}Duration`),a=ci(l,c);// JSDOM may return undefined for transition properties
let u=null,f=0,p=0;/* istanbul ignore if */return t===Ks?i>0&&(u=Ks,f=i,p=s.length):t===Gs?a>0&&(u=Gs,f=a,p=c.length):(f=Math.max(i,a),u=f>0?i>a?Ks:Gs:null,p=u?u===Ks?s.length:c.length:0),{type:u,timeout:f,propCount:p,hasTransform:u===Ks&&/\b(transform|all)(,|$)/.test(o(`${Ks}Property`).toString())}}function ci(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>ai(t)+ai(e[n]))))}// Old versions of Chromium (below 61.0.3163.100) formats floating pointer
// numbers in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down
// (i.e. acting as a floor function) causing unexpected behaviors
function ai(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}// synchronously force layout to put elements into a certain state
function ui(){return document.body.offsetHeight}const fi=new WeakMap,pi=new WeakMap,di=e("A",{name:"TransitionGroup",props:w({},Zs,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=ls(),o=Nn();let r,s;return mo((()=>{// children is guaranteed to exist after initial render
if(!r.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!function(e,t,n){// Detect whether an element with the move class applied has
// CSS transitions. Since the element may be inside an entering
// transition at this very moment, we make a clone of it and remove
// all other transition classes applied to ensure only the move class
// is applied.
const o=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&o.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&o.classList.add(e))),o.style.display="none";const r=1===t.nodeType?t:t.parentNode;r.appendChild(o);const{hasTransform:s}=li(o);return r.removeChild(o),s}(r[0].el,n.vnode.el,t))return;// we divide the work into three loops to avoid mixing DOM reads and writes
// in each iteration - which helps prevent layout thrashing.
r.forEach(hi),r.forEach(mi);const o=r.filter(gi);// force reflow to put everything in position
ui(),o.forEach((e=>{const n=e.el,o=n.style;ni(n,t),o.transform=o.webkitTransform=o.transitionDuration="";const r=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",r),n._moveCb=null,oi(n,t))};n.addEventListener("transitionend",r)}))})),()=>{const i=_t(e),l=ei(i);let c=i.tag||Ar;r=s,s=t.default?Gn(t.default()):[];for(let e=0;e<s.length;e++){const t=s[e];null!=t.key&&Kn(t,zn(t,l,o,n))}if(r)for(let e=0;e<r.length;e++){const t=r[e];Kn(t,zn(t,l,o,n)),fi.set(t,t.el.getBoundingClientRect())}return Kr(c,null,s)}}});function hi(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function mi(e){pi.set(e,e.el.getBoundingClientRect())}function gi(e){const t=fi.get(e),n=pi.get(e),o=t.left-n.left,r=t.top-n.top;if(o||r){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${o}px,${r}px)`,t.transitionDuration="0s",e}}const vi=e=>{const t=e.props["onUpdate:modelValue"]||!1;return k(t)?e=>G(t,e):t};function yi(e){e.target.composing=!0}function _i(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}// We are exporting the v-model runtime directly as vnode hooks so that it can
// be tree-shaken in case v-model is never used.
const bi={created(e,{modifiers:{lazy:t,trim:n,number:o}},r){e._assign=vi(r);const s=o||r.props&&"number"===r.props.type;js(e,t?"change":"input",(t=>{if(t.target.composing)return;let o=e.value;n&&(o=o.trim()),s&&(o=X(o)),e._assign(o)})),n&&js(e,"change",(()=>{e.value=e.value.trim()})),t||(js(e,"compositionstart",yi),js(e,"compositionend",_i),// Safari < 10.2 & UIWebView doesn't fire compositionend when
// switching focus before confirming composition choice
// this also fixes the issue where some browsers e.g. iOS Chrome
// fires "change" instead of "input" on autocomplete.
js(e,"change",_i))},// set value on mounted so it's after min/max for type="range"
mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:r}},s){// avoid clearing unresolved text. #2302
if(e._assign=vi(s),e.composing)return;if(document.activeElement===e&&"range"!==e.type){if(n)return;if(o&&e.value.trim()===t)return;if((r||"number"===e.type)&&X(e.value)===t)return}const i=null==t?"":t;e.value!==i&&(e.value=i)}},Ci={// #4096 array checkboxes need to be deep traversed
deep:!0,created(e,t,n){e._assign=vi(n),js(e,"change",(()=>{const t=e._modelValue,n=ki(e),o=e.checked,r=e._assign;if(k(t)){const e=p(t,n),s=-1!==e;if(o&&!s)r(t.concat(n));else if(!o&&s){const n=[...t];n.splice(e,1),r(n)}}else if(A(t)){const e=new Set(t);o?e.add(n):e.delete(n),r(e)}else r(Ri(e,o))}))},// set initial checked on mount to wait for true-value/false-value
mounted:wi,beforeUpdate(e,t,n){e._assign=vi(n),wi(e,t,n)}};function wi(e,{value:t,oldValue:n},o){e._modelValue=t,k(t)?e.checked=p(t,o.props.value)>-1:A(t)?e.checked=t.has(o.props.value):t!==n&&(e.checked=f(t,Ri(e,!0)))}const Si={created(e,{value:t},n){e.checked=f(t,n.props.value),e._assign=vi(n),js(e,"change",(()=>{e._assign(ki(e))}))},beforeUpdate(e,{value:t,oldValue:n},o){e._assign=vi(o),t!==n&&(e.checked=f(t,o.props.value))}},xi={// <select multiple> value need to be deep traversed
deep:!0,created(e,{value:t,modifiers:{number:n}},o){const r=A(t);js(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?X(ki(e)):ki(e)));e._assign(e.multiple?r?new Set(t):t:t[0])})),e._assign=vi(o)},// set value in mounted & updated because <select> relies on its children
// <option>s.
mounted(e,{value:t}){Ei(e,t)},beforeUpdate(e,t,n){e._assign=vi(n)},updated(e,{value:t}){Ei(e,t)}};function Ei(e,t){const n=e.multiple;if(!n||k(t)||A(t)){for(let o=0,r=e.options.length;o<r;o++){const r=e.options[o],s=ki(r);if(n)k(t)?r.selected=p(t,s)>-1:r.selected=t.has(s);else if(f(ki(r),t))return void(e.selectedIndex!==o&&(e.selectedIndex=o))}n||-1===e.selectedIndex||(e.selectedIndex=-1)}}// retrieve raw value set via :value bindings
function ki(e){return"_value"in e?e._value:e.value}// retrieve raw value for true-value and false-value set via :true-value or :false-value bindings
function Ri(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Ai={created(e,t,n){Pi(e,t,n,null,"created")},mounted(e,t,n){Pi(e,t,n,null,"mounted")},beforeUpdate(e,t,n,o){Pi(e,t,n,o,"beforeUpdate")},updated(e,t,n,o){Pi(e,t,n,o,"updated")}};function Oi(e,t){switch(e){case"SELECT":return xi;case"TEXTAREA":return bi;default:switch(t){case"checkbox":return Ci;case"radio":return Si;default:return bi}}}function Pi(e,t,n,o,r){const s=Oi(e.tagName,n.props&&n.props.type)[r];s&&s(e,t,n,o)}// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
const Ti=["ctrl","shift","alt","meta"],Fi={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Ti.some((n=>e[`${n}Key`]&&!t.includes(n)))},Mi=e("L",((e,t)=>(n,...o)=>{for(let e=0;e<t.length;e++){const o=Fi[t[e]];if(o&&o(n,t))return}return e(n,...o)})),Li={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Bi=e("K",{beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):ji(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),ji(e,!0),o.enter(e)):o.leave(e,(()=>{ji(e,!1)})):ji(e,t))},beforeUnmount(e,{value:t}){ji(e,t)}});function ji(e,t){e.style.display=t?e._vod:"none"}// SSR vnode transforms, only used when user includes client-oriented render
// function in SSR
const $i=w({patchProp:(e,t,n,o,r=!1,s,i,l,c)=>{"class"===t?// compiler should normalize class + :class bindings on the same element
// into a single binding ['staticClass', dynamic]
function(e,t,n){// directly setting className should be faster than setAttribute in theory
// if this is an element during a transition, take the temporary transition
// classes into account.
const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,o,r):"style"===t?function(e,t,n){const o=e.style,r=T(n);if(n&&!r){for(const e in n)Fs(o,e,n[e]);if(t&&!T(t))for(const e in t)null==n[e]&&Fs(o,e,"")}else{const s=o.display;r?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),// indicates that the `display` of the element is controlled by `v-show`,
// so we always keep the current `display` value regardless of the `style`
// value, thus handing over control to `v-show`.
"_vod"in e&&(o.display=s)}}(e,n,o):b(t)?// ignore v-model listeners
C(t)||$s(e,t,0,o,i):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):function(e,t,n,o){return o?// most keys must be set as attribute on svg elements to work
// ...except innerHTML & textContent
"innerHTML"===t||"textContent"===t||!!(t in e&&Us.test(t)&&P(n)):// these are enumerated attrs, however their corresponding DOM properties
// are actually booleans - this leads to setting it with a string "false"
// value leading it to be coerced to `true`, so we need to always treat
// them as attributes.
// Note that `contentEditable` doesn't have this problem: its DOM
// property is also enumerated string values.
"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&(// #1787, #2840 form property on form elements is readonly and must be set as
// attribute.
"form"!==t&&(// #1526 <input list> must be set as attribute
("list"!==t||"INPUT"!==e.tagName)&&(// #2766 <textarea type> must be set as attribute
("type"!==t||"TEXTAREA"!==e.tagName)&&(// native onclick with string value, must be set as attribute
(!Us.test(t)||!T(n))&&t in e))))}(e,t,o,r))?// __UNSAFE__
// functions. The user is responsible for using them with only trusted content.
function(e,t,n,// the following args are passed only due to potential innerHTML/textContent
// overriding existing VNodes, in which case the old tree must be properly
// unmounted.
o,r,s,i){if("innerHTML"===t||"textContent"===t)return o&&i(o,r,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&// custom elements may use _value internally
!e.tagName.includes("-")){// store value as _value as well since
// non-string values will be stringified.
e._value=n;const o=null==n?"":n;return e.value===o&&// #4956: always set for OPTION elements because its value falls back to
// textContent if no value attribute is present. And setting .value for
// OPTION has no side effect
"OPTION"!==e.tagName||(e.value=o),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const o=typeof e[t];"boolean"===o?// e.g. <select multiple> compiles to { multiple: '' }
n=u(n):null==n&&"string"===o?(// e.g. <div :id="null">
n="",l=!0):"number"===o&&(// e.g. <img :width="null">
n=0,l=!0)}// some properties perform value validation and throw,
// some properties has getter, no setter, will error in 'use strict'
// eg. <select :type="null"></select> <select :willValidate="null"></select>
try{e[t]=n}catch(c){}l&&e.removeAttribute(t)}(e,t,o,s,i,l,c):(// special case for <input v-model type="checkbox"> with
// :true-value & :false-value
// store value as dom properties since non-string values will be
// stringified.
"true-value"===t?e._trueValue=o:"false-value"===t&&(e._falseValue=o),function(e,t,n,o,r){if(o&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Bs,t.slice(6,t.length)):e.setAttributeNS(Bs,t,n);else{// note we are only checking boolean attributes that don't have a
// corresponding dom prop of the same name here.
const o=a(t);null==n||o&&!u(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}(e,t,o,r))}},Ps);// lazy create the renderer - this makes core renderer logic tree-shakable
// in case the user only imports reactivity utilities from Vue.
let Ii,Vi=!1;function Ni(){return Ii||(Ii=vr($i))}function Ui(){return Ii=Vi?Ii:yr($i),Vi=!0,Ii}// use explicit type casts here to avoid import() calls in rolled-up d.ts
const Di=e("B",((...e)=>{Ni().render(...e)})),Hi=(...e)=>{Ui().hydrate(...e)},zi=e("Y",((...e)=>{const t=Ni().createApp(...e),{mount:n}=t;return t.mount=e=>{const o=Wi(e);if(!o)return;const r=t._component;P(r)||r.render||r.template||(// __UNSAFE__
// Reason: potential execution of JS expressions in in-DOM template.
// The user must make sure the in-DOM template is trusted. If it's
// rendered by the server, the template should not contain any user data.
r.template=o.innerHTML),// clear content before mounting
o.innerHTML="";const s=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},t}));function Wi(e){return T(e)?document.querySelector(e):e}let qi=!1;
/**
             * @internal
             */const Ki=Object.freeze(Object.defineProperty({__proto__:null,compile:()=>{},EffectScope:Q,ReactiveEffect:de,customRef:function(e){return new Mt(e)},effect:function(e,t){e.effect&&(e=e.effect.fn);const n=new de(e);t&&(w(n,t),t.scope&&te(n,t.scope)),t&&t.lazy||n.run();const o=n.run.bind(n);return o.effect=n,o},effectScope:ee,getCurrentScope:ne,isProxy:yt,isReactive:mt,isReadonly:gt,isRef:Et,isShallow:vt,markRaw:bt,onScopeDispose:oe,proxyRefs:Ft,reactive:ft,readonly:dt,ref:kt,shallowReactive:pt,shallowReadonly:function(e){return ht(e,!0,$e,st,at)},shallowRef:Rt,stop:function(e){e.effect.stop()},toRaw:_t,toRef:jt,toRefs:Lt,triggerRef:function(e){xt(e)},unref:Pt,camelize:D,capitalize:W,normalizeClass:c,normalizeProps:function(e){if(!e)return null;let{class:t,style:n}=e;return t&&!T(t)&&(e.class=c(t)),n&&(e.style=o(n)),e},normalizeStyle:o,toDisplayString:d,toHandlerKey:q,BaseTransition:Dn,Comment:Pr,Fragment:Ar,KeepAlive:to,Static:Tr,Suspense:xn,Teleport:kr,Text:Or,callWithAsyncErrorHandling:Nt,callWithErrorHandling:Vt,cloneVNode:Yr,compatUtils:null,computed:bs,createBlock:Nr,createCommentVNode:Zr,createElementBlock:Vr,createElementVNode:qr,createHydrationRenderer:yr,createPropsRestProxy:
/**
             * Used to create a proxy for the rest element when destructuring props with
             * defineProps().
             * @internal
             */
function(e,t){const n={};for(const o in e)t.includes(o)||Object.defineProperty(n,o,{enumerable:!0,get:()=>e[o]});return n}
/**
             * `<script setup>` helper for persisting the current instance context over
             * async/await flows.
             *
             * `@vue/compiler-sfc` converts the following:
             *
             * ```ts
             * const x = await foo()
             * ```
             *
             * into:
             *
             * ```ts
             * let __temp, __restore
             * const x = (([__temp, __restore] = withAsyncContext(() => foo())),__temp=await __temp,__restore(),__temp)
             * ```
             * @internal
             */,createRenderer:vr,createSlots:function(e,t){for(let n=0;n<t.length;n++){const o=t[n];// array of dynamic slot generated by <template v-for="..." #[...]>
if(k(o))for(let t=0;t<o.length;t++)e[o[t].name]=o[t].fn;else o&&(// conditional single slot generated by <template v-if="..." #foo>
e[o.name]=o.key?(...e)=>{const t=o.fn(...e);// attach branch key so each conditional branch is considered a
// different fragment
return t&&(t.key=o.key),t}:o.fn)}return e},createStaticVNode:function(e,t){// A static vnode can contain multiple stringified elements, and the number
// of elements is necessary for hydration.
const n=Kr(Tr,null,e);return n.staticCount=t,n},createTextVNode:Xr,createVNode:Kr,defineAsyncComponent:Zn,defineComponent:Yn,defineEmits:// implementation
function(){return null}
/**
             * Vue `<script setup>` compiler macro for declaring a component's exposed
             * instance properties when it is accessed by a parent component via template
             * refs.
             *
             * `<script setup>` components are closed by default - i.e. variables inside
             * the `<script setup>` scope is not exposed to parent unless explicitly exposed
             * via `defineExpose`.
             *
             * This is only usable inside `<script setup>`, is compiled away in the
             * output and should **not** be actually called at runtime.
             */,defineExpose:function(e){}
/**
             * Vue `<script setup>` compiler macro for providing props default values when
             * using type-based `defineProps` declaration.
             *
             * Example usage:
             * ```ts
             * withDefaults(defineProps<{
             *   size?: number
             *   labels?: string[]
             * }>(), {
             *   size: 3,
             *   labels: () => ['default label']
             * })
             * ```
             *
             * This is only usable inside `<script setup>`, is compiled away in the output
             * and should **not** be actually called at runtime.
             */,defineProps:function(){return null},get devtools(){return ln},getCurrentInstance:ls,getTransitionRawChildren:Gn,guardReactiveProps:Gr,h:ws,handleError:Ut,initCustomFormatter:function(){},inject:Tn,isMemoSame:Es,isRuntimeOnly:()=>!fs,isVNode:Ur,mergeDefaults:function(e,t){const n=k(e)?e.reduce(((e,t)=>(e[t]={},e)),{}):e;for(const o in t){const e=n[o];e?k(e)||P(e)?n[o]={type:e,default:t[o]}:e.default=t[o]:null===e&&(n[o]={default:t[o]})}return n},mergeProps:ts,nextTick:Zt,onActivated:oo,onBeforeMount:fo,onBeforeUnmount:go,onBeforeUpdate:ho,onDeactivated:ro,onErrorCaptured:Co,onMounted:po,onRenderTracked:bo,onRenderTriggered:_o,onServerPrefetch:yo,onUnmounted:vo,onUpdated:mo,openBlock:Lr,popScopeId:gn,provide:Pn,pushScopeId:mn,queuePostFlushCb:en,registerRuntimeCompiler:
/**
             * For runtime-dom to register the compiler.
             * Note the exported method uses any to avoid d.ts relying on the compiler types.
             */
function(e){fs=e,ps=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,Io))}}// dev only
,renderList:To,renderSlot:Fo,resolveComponent:Eo,resolveDirective:Ao,resolveDynamicComponent:Ro,resolveFilter:null,resolveTransitionHooks:zn,setBlockTracking:$r,setDevtoolsHook:function e(t,n){var o,r;ln=t,ln?(ln.enabled=!0,cn.forEach((({event:e,args:t})=>ln.emit(e,...t))),cn=[]):// handle late devtools injection - only do this if we are in an actual
// browser environment to avoid the timer handle stalling test runner exit
// (#4815)
"undefined"!=typeof window&&// some envs mock window but not fully
window.HTMLElement&&// also exclude jsdom
!(null===(r=null===(o=window.navigator)||void 0===o?void 0:o.userAgent)||void 0===r?void 0:r.includes("jsdom"))?((n.__VUE_DEVTOOLS_HOOK_REPLAY__=n.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push((t=>{e(t,n)})),// clear buffer after 3s - the user probably doesn't have devtools installed
// at all, and keeping the buffer will cause memory leaks (#4738)
setTimeout((()=>{ln||(n.__VUE_DEVTOOLS_HOOK_REPLAY__=null,cn=[])}),3e3)):cn=[]},setTransitionHooks:Kn,ssrContextKey:Ss,ssrUtils:Rs,toHandlers:function(e,t){const n={};for(const o in e)n[t&&/[A-Z]/.test(o)?`on:${o}`:q(o)]=e[o];return n},transformVNodeArgs:function(e){},useAttrs:function(){return Cs().attrs},useSSRContext:xs,useSlots:function(){return Cs().slots},useTransitionState:Nn,version:ks,warn:function(e,...t){},watch:Bn,watchEffect:Fn,watchPostEffect:Mn,watchSyncEffect:function(e,t){return jn(e,null,{flush:"sync"})},withAsyncContext:function(e){const t=ls();let n=e();return as(),L(n)&&(n=n.catch((e=>{throw cs(t),e}))),[n,()=>cs(t)]},withCtx:vn,withDefaults:function(e,t){return null},withDirectives:wo,withMemo:function(e,t,n,o){const r=n[o];if(r&&Es(r,e))return r;const s=t();// shallow clone
return s.memo=e.slice(),n[o]=s},withScopeId:e=>vn,Transition:Ys,TransitionGroup:di,VueElement:zs,createApp:zi,createSSRApp:(...e)=>{const t=Ui().createApp(...e),{mount:n}=t;return t.mount=e=>{const t=Wi(e);if(t)return n(t,!0,t instanceof SVGElement)},t},defineCustomElement:Ds,defineSSRCustomElement:e=>Ds(e,Hi),hydrate:Hi,initDirectivesForSSR:()=>{qi||(qi=!0,bi.getSSRProps=({value:e})=>({value:e}),Si.getSSRProps=({value:e},t)=>{if(t.props&&f(t.props.value,e))return{checked:!0}},Ci.getSSRProps=({value:e},t)=>{if(k(e)){if(t.props&&p(e,t.props.value)>-1)return{checked:!0}}else if(A(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},Ai.getSSRProps=(e,t)=>{if("string"!=typeof t.type)return;const n=Oi(// resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
t.type.toUpperCase(),t.props&&t.props.type);return n.getSSRProps?n.getSSRProps(e,t):void 0},Bi.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}})},render:Di,useCssModule:function(e="$style"){/* istanbul ignore else */{const t=ls();if(!t)return m;const n=t.type.__cssModules;if(!n)return m;const o=n[e];return o||m}}
/**
             * Runtime helper for SFC's CSS variable injection feature.
             * @private
             */,useCssVars:function(e){const t=ls();/* istanbul ignore next */if(!t)return;const n=t.ut=(n=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e=>qs(e,n)))},o=()=>{const o=e(t.proxy);Ws(t.subTree,o),n(o)};Mn(o),po((()=>{const e=new MutationObserver(o);e.observe(t.subTree.el.parentNode,{childList:!0}),vo((()=>e.disconnect()))}))},vModelCheckbox:Ci,vModelDynamic:Ai,vModelRadio:Si,vModelSelect:xi,vModelText:bi,vShow:Bi,withKeys:(e,t)=>n=>{if(!("key"in n))return;const o=z(n.key);return t.some((e=>e===o||Li[e]===o))?e(n):void 0},withModifiers:Mi},Symbol.toStringTag,{value:"Module"}));e("X",Ki);
/*!
              * vue-router v4.1.6
              * (c) 2022 Eduardo San Martin Morote
              * @license MIT
              */
const Gi="undefined"!=typeof window,Yi=Object.assign;function Xi(e,t){const n={};for(const o in t){const r=t[o];n[o]=Ji(r)?r.map(e):e(r)}return n}const Zi=()=>{},Ji=Array.isArray,Qi=/\/$/;
/**
             * Typesafe alternative to Array.isArray
             * https://github.com/microsoft/TypeScript/pull/48228
             */
/**
             * Transforms a URI into a normalized history location
             *
             * @param parseQuery
             * @param location - URI to normalize
             * @param currentLocation - current absolute location. Allows resolving relative
             * paths. Must start with `/`. Defaults to `/`
             * @returns a normalized history location
             */
function el(e,t,n="/"){let o,r={},s="",i="";// Could use URL and URLSearchParams but IE 11 doesn't support it
// TODO: move to new URL()
const l=t.indexOf("#");let c=t.indexOf("?");// the hash appears before the search, so it's not part of the search string
// empty path means a relative query or hash `?foo=f`, `#thing`
return l<c&&l>=0&&(c=-1),c>-1&&(o=t.slice(0,c),s=t.slice(c+1,l>-1?l:t.length),r=e(s)),l>-1&&(o=o||t.slice(0,l),// keep the # character
i=t.slice(l,t.length)),// no search and no query
o=
/**
             * Resolves a relative path that starts with `.`.
             *
             * @param to - path location we are resolving
             * @param from - currentLocation.path, should start with `/`
             */
function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/");let r,s,i=n.length-1;for(r=0;r<o.length;r++)// we stay on the same position
if(s=o[r],"."!==s){// go up in the from array
if(".."!==s)break;// we can't go below zero, but we still need to increment toPosition
i>1&&i--;// continue
}return n.slice(0,i).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}(null!=o?o:t,n),{fullPath:o+(s&&"?")+s+i,path:o,query:r,hash:i}}function tl(e,t){// no base or base is not found at the beginning
return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function nl(e,t){// since the original record has an undefined value for aliasOf
// but all aliases point to the original record, this will always compare
// the original record
return(e.aliasOf||e)===(t.aliasOf||t)}function ol(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!rl(e[n],t[n]))return!1;return!0}function rl(e,t){return Ji(e)?sl(e,t):Ji(t)?sl(t,e):e===t}
/**
             * Check if two arrays are the same or if an array with one single entry is the
             * same as another primitive value. Used to check query and parameters
             *
             * @param a - array of values
             * @param b - array of values or a single value
             */function sl(e,t){return Ji(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var il,ll;!function(e){e.pop="pop",e.push="push"}(il||(il={})),function(e){e.back="back",e.forward="forward",e.unknown=""}(ll||(ll={}));const cl=/^[^#]+#/;function al(e,t){return e.replace(cl,"#")+t}const ul=()=>({left:window.pageXOffset,top:window.pageYOffset});function fl(e,t){return(history.state?history.state.position-t:-1)+e}const pl=new Map;let dl=()=>location.protocol+"//"+location.host
/**
             * Creates a normalized history location from a window.location object
             * @param location -
             */;function hl(e,t){const{pathname:n,search:o,hash:r}=t,s=e.indexOf("#");// allows hash bases like #, /#, #/, #!, #!/, /#!/, or even /folder#end
if(s>-1){let t=r.includes(e.slice(s))?e.slice(s).length:1,n=r.slice(t);// prepend the starting slash to hash so the url starts with /#
return"/"!==n[0]&&(n="/"+n),tl(n,"")}return tl(n,e)+o+r}function ml(e,t,n,o=!1,r=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:r?ul():null}}function gl(e){return"string"==typeof e||"symbol"==typeof e}
/**
             * Initial route location where the router is. Can be used in navigation guards
             * to differentiate the initial navigation.
             *
             * @example
             * ```js
             * import { START_LOCATION } from 'vue-router'
             *
             * router.beforeEach((to, from) => {
             *   if (from === START_LOCATION) {
             *     // initial navigation
             *   }
             * })
             * ```
             */const vl={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},yl=Symbol("");
/**
             * Enumeration with all possible types for navigation failures. Can be passed to
             * {@link isNavigationFailure} to check for specific failures.
             */
var _l;function bl(e,t){return Yi(new Error,{type:e,[yl]:!0},t)}function Cl(e,t){return e instanceof Error&&yl in e&&(null==t||!!(e.type&t))}// default pattern for a param: non-greedy everything but /
!function(e){
/**
                 * An aborted navigation is a navigation that failed because a navigation
                 * guard returned `false` or called `next(false)`
                 */
e[e.aborted=4]="aborted",
/**
                 * A cancelled navigation is a navigation that failed because a more recent
                 * navigation finished started (not necessarily finished).
                 */
e[e.cancelled=8]="cancelled",
/**
                 * A duplicated navigation is a navigation that failed because it was
                 * initiated while already being at the exact same location.
                 */
e[e.duplicated=16]="duplicated"}(_l||(_l={}));const wl="[^/]+?",Sl={sensitive:!1,strict:!1,start:!0,end:!0},xl=/[.+*?^${}()[\]/\\]/g;
/**
             * Compares an array of numbers as used in PathParser.score and returns a
             * number. This function can be used to `sort` an array
             *
             * @param a - first array of numbers
             * @param b - second array of numbers
             * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
             * should be sorted first
             */
function El(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];// only keep going if diff === 0
if(o)return o;n++}// if the last subsegment was Static, the shorter segments should be sorted first
// otherwise sort the longest segment first
return e.length<t.length?1===e.length&&80/* PathScore.Segment */===e[0]?-1:1:e.length>t.length?1===t.length&&80/* PathScore.Segment */===t[0]?1:-1:0}
/**
             * Compare function that can be used with `sort` to sort an array of PathParser
             *
             * @param a - first PathParser
             * @param b - second PathParser
             * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
             */function kl(e,t){let n=0;const o=e.score,r=t.score;for(;n<o.length&&n<r.length;){const e=El(o[n],r[n]);// do not return if both are equal
if(e)return e;n++}if(1===Math.abs(r.length-o.length)){if(Rl(o))return 1;if(Rl(r))return-1}// if a and b share the same score entries but b has more, sort b first
return r.length-o.length;// this is the ternary version
// return aScore.length < bScore.length
//   ? 1
//   : aScore.length > bScore.length
//   ? -1
//   : 0
}
/**
             * This allows detecting splats at the end of a path: /home/:id(.*)*
             *
             * @param score - score to check
             * @returns true if the last entry is negative
             */function Rl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Al={type:0/* TokenType.Static */,value:""},Ol=/[a-zA-Z0-9_]/;function Pl(e,t,n){const o=
/**
             * Creates a path parser from an array of Segments (a segment is an array of Tokens)
             *
             * @param segments - array of segments returned by tokenizePath
             * @param extraOptions - optional options for the regexp
             * @returns a PathParser
             */
function(e,t){const n=Yi({},Sl,t),o=[];// the amount of scores is the same as the length of segments except for the root segment "/"
// the regexp as a string
let r=n.start?"^":"";// extracted keys
const s=[];for(const c of e){// the root segment needs special treatment
const e=c.length?[]:[90/* PathScore.Root */];// allow trailing slash
n.strict&&!c.length&&(r+="/");for(let t=0;t<c.length;t++){const o=c[t];// resets the score if we are inside a sub-segment /:a-other-:b
let i=40/* PathScore.Segment */+(n.sensitive?.25/* PathScore.BonusCaseSensitive */:0);if(0/* TokenType.Static */===o.type)// prepend the slash if we are starting a new segment
t||(r+="/"),r+=o.value.replace(xl,"\\$&"),i+=40/* PathScore.Static */;else if(1/* TokenType.Param */===o.type){const{value:e,repeatable:n,optional:a,regexp:u}=o;s.push({name:e,repeatable:n,optional:a});const f=u||wl;// the user provided a custom regexp /:id(\\d+)
if(f!==wl){i+=10/* PathScore.BonusCustomRegExp */;// make sure the regexp is valid before using it
try{new RegExp(`(${f})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${e}" (${f}): `+l.message)}}// when we repeat we must take care of the repeating leading slash
let p=n?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;// prepend the slash if we are starting a new segment
t||(p=// avoid an optional / if there are more segments e.g. /:p?-static
// or /:p?-:p2
a&&c.length<2?`(?:/${p})`:"/"+p),a&&(p+="?"),r+=p,i+=20/* PathScore.Dynamic */,a&&(i+=-8/* PathScore.BonusOptional */),n&&(i+=-20/* PathScore.BonusRepeatable */),".*"===f&&(i+=-50/* PathScore.BonusWildcard */)}e.push(i)}// an empty array like /home/ -> [[{home}], []]
// if (!segment.length) pattern += '/'
o.push(e)}// only apply the strict bonus to the last score
if(n.strict&&n.end){const e=o.length-1;o[e][o[e].length-1]+=.7000000000000001/* PathScore.BonusStrict */}// TODO: dev only warn double trailing slash
n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");return{re:i,score:o,keys:s,parse:function(e){const t=e.match(i),n={};if(!t)return null;for(let o=1;o<t.length;o++){const e=t[o]||"",r=s[o-1];n[r.name]=e&&r.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",o=!1;// for optional parameters to allow to be empty
for(const r of e){o&&n.endsWith("/")||(n+="/"),o=!1;for(const e of r)if(0/* TokenType.Static */===e.type)n+=e.value;else if(1/* TokenType.Param */===e.type){const{value:s,repeatable:i,optional:l}=e,c=s in t?t[s]:"";if(Ji(c)&&!i)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const a=Ji(c)?c.join("/"):c;if(!a){if(!l)throw new Error(`Missing required param "${s}"`);// if we have more than one optional param like /:a?-static we don't need to care about the optional param
r.length<2&&(// remove the last slash as we could be at the end
n.endsWith("/")?n=n.slice(0,-1):o=!0)}n+=a}}// avoid empty path when we have multiple optional params
return n||"/"}}}(// After some profiling, the cache seems to be unnecessary because tokenizePath
// (the slowest part of adding a route) is very fast
// const tokenCache = new Map<string, Token[][]>()
function(e){if(!e)return[[]];if("/"===e)return[[Al]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);// if (tokenCache.has(path)) return tokenCache.get(path)!
function t(e){throw new Error(`ERR (${n})/"${a}": ${e}`)}let n=0/* TokenizerState.Static */,o=n;const r=[];// the segment will always be valid because we get into the initial state
// with the leading /
let s;function i(){s&&r.push(s),s=[]}// index on the path
let l,c=0,a="",u="";// char at index
function f(){a&&(0/* TokenizerState.Static */===n?s.push({type:0/* TokenType.Static */,value:a}):1/* TokenizerState.Param */===n||2/* TokenizerState.ParamRegExp */===n||3/* TokenizerState.ParamRegExpEnd */===n?(s.length>1&&("*"===l||"+"===l)&&t(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1/* TokenType.Param */,value:a,regexp:u,repeatable:"*"===l||"+"===l,optional:"*"===l||"?"===l})):t("Invalid state to consume buffer"),a="")}function p(){a+=l}for(;c<e.length;)if(l=e[c++],"\\"!==l||2/* TokenizerState.ParamRegExp */===n)switch(n){case 0/* TokenizerState.Static */:"/"===l?(a&&f(),i()):":"===l?(f(),n=1/* TokenizerState.Param */):p();break;case 4/* TokenizerState.EscapeNext */:p(),n=o;break;case 1/* TokenizerState.Param */:"("===l?n=2/* TokenizerState.ParamRegExp */:Ol.test(l)?p():(f(),n=0/* TokenizerState.Static */,// go back one character if we were not modifying
"*"!==l&&"?"!==l&&"+"!==l&&c--);break;case 2/* TokenizerState.ParamRegExp */:// TODO: is it worth handling nested regexp? like :p(?:prefix_([^/]+)_suffix)
// it already works by escaping the closing )
// https://paths.esm.dev/?p=AAMeJbiAwQEcDKbAoAAkP60PG2R6QAvgNaA6AFACM2ABuQBB#
// is this really something people need since you can also write
// /prefix_:p()_suffix
")"===l?// handle the escaped )
"\\"==u[u.length-1]?u=u.slice(0,-1)+l:n=3/* TokenizerState.ParamRegExpEnd */:u+=l;break;case 3/* TokenizerState.ParamRegExpEnd */:// same as finalizing a param
f(),n=0/* TokenizerState.Static */,// go back one character if we were not modifying
"*"!==l&&"?"!==l&&"+"!==l&&c--,u="";break;default:t("Unknown state")}else o=n,n=4/* TokenizerState.EscapeNext */;// tokenCache.set(path, tokens)
return 2/* TokenizerState.ParamRegExp */===n&&t(`Unfinished custom RegExp for param "${a}"`),f(),i(),r}(e.path),n),r=Yi(o,{record:e,parent:t,// these needs to be populated by the parent
children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Tl(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function Fl(e){const t={},n=e.props||!1;// props does not exist on redirect records, but we can set false directly
if("component"in e)t.default=n;else// NOTE: we could also allow a function to be applied to every component.
// Would need user feedback for use cases
for(const o in e.components)t[o]="boolean"==typeof n?n:n[o];return t}
/**
             * Checks if a record or any of its parent is an alias
             * @param record
             */function Ml(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}
/**
             * Merge meta fields of an array of records
             *
             * @param matched - array of matched records
             */function Ll(e){return e.reduce(((e,t)=>Yi(e,t.meta)),{})}function Bl(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function jl(e,t){return t.children.some((t=>t===e||jl(e,t)))}
/**
             * Encoding Rules ␣ = Space Path: ␣ " < > # ? { } Query: ␣ " < > # & = Hash: ␣ "
             * < > `
             *
             * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
             * defines some extra characters to be encoded. Most browsers do not encode them
             * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
             * also encode `!'()*`. Leaving un-encoded only ASCII alphanumeric(`a-zA-Z0-9`)
             * plus `-._~`. This extra safety should be applied to query by patching the
             * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
             * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
             * into a `/` if directly typed in. The _backtick_ (`````) should also be
             * encoded everywhere because some browsers like FF encode it when directly
             * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
             */
// const EXTRA_RESERVED_RE = /[!'()*]/g
// const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)
const $l=/#/g,Il=/&/g,Vl=/\//g,Nl=/=/g,Ul=/\?/g,Dl=/\+/g,Hl=/%5B/g,zl=/%5D/g,Wl=/%5E/g,ql=/%60/g,Kl=/%7B/g,Gl=/%7C/g,Yl=/%7D/g,Xl=/%20/g;// %23
// }
/**
             * Encode characters that need to be encoded on the path, search and hash
             * sections of the URL.
             *
             * @internal
             * @param text - string to encode
             * @returns encoded string
             */
function Zl(e){return encodeURI(""+e).replace(Gl,"|").replace(Hl,"[").replace(zl,"]")}function Jl(e){return Zl(e).replace(Dl,"%2B").replace(Xl,"+").replace($l,"%23").replace(Il,"%26").replace(ql,"`").replace(Kl,"{").replace(Yl,"}").replace(Wl,"^")}
/**
             * Like `encodeQueryValue` but also encodes the `=` character.
             *
             * @param text - string to encode
             */
/**
             * Encode characters that need to be encoded on the path section of the URL as a
             * param. This function encodes everything {@link encodePath} does plus the
             * slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
             * string instead.
             *
             * @param text - string to encode
             * @returns encoded string
             */
function Ql(e){return null==e?"":
/**
             * Encode characters that need to be encoded on the path section of the URL.
             *
             * @param text - string to encode
             * @returns encoded string
             */
function(e){return Zl(e).replace($l,"%23").replace(Ul,"%3F")}(e).replace(Vl,"%2F")}
/**
             * Decode text using `decodeURIComponent`. Returns the original text if it
             * fails.
             *
             * @param text - string to decode
             * @returns decoded string
             */function ec(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}
/**
             * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
             * version with the leading `?` and without Should work as URLSearchParams

             * @internal
             *
             * @param search - search string to parse
             * @returns a query object
             */function tc(e){const t={};// avoid creating an object with an empty key and empty value
// because of split('&')
if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let o=0;o<n.length;++o){// pre decode the + into space
const e=n[o].replace(Dl," "),r=e.indexOf("="),s=ec(r<0?e:e.slice(0,r)),i=r<0?null:ec(e.slice(r+1));// allow the = character
if(s in t){// an extra variable for ts types
let e=t[s];Ji(e)||(e=t[s]=[e]),e.push(i)}else t[s]=i}return t}
/**
             * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
             * doesn't prepend a `?`
             *
             * @internal
             *
             * @param query - query object to stringify
             * @returns string version of the query without the leading `?`
             */function nc(e){let t="";for(let n in e){const o=e[n];(n=Jl(n).replace(Nl,"%3D"),null!=o)?(Ji(o)?o.map((e=>e&&Jl(e))):[o&&Jl(o)]).forEach((e=>{// skip undefined values in arrays as if they were not present
// smaller code than using filter
void 0!==e&&(// only append & with non-empty search
t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})):// only null adds the value
void 0!==o&&(t+=(t.length?"&":"")+n);// keep null values
}return t}
/**
             * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
             * numbers into strings, removing keys with an undefined value and replacing
             * undefined with null in arrays
             *
             * @param query - query object to normalize
             * @returns a normalized query object
             */function oc(e){const t={};for(const n in e){const o=e[n];void 0!==o&&(t[n]=Ji(o)?o.map((e=>null==e?null:""+e)):null==o?o:""+o)}return t}
/**
             * RouteRecord being rendered by the closest ancestor Router View. Used for
             * `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
             * Location Matched
             *
             * @internal
             */const rc=Symbol(""),sc=Symbol(""),ic=Symbol(""),lc=Symbol(""),cc=Symbol("");
/**
             * Allows overriding the router view depth to control which component in
             * `matched` is rendered. rvd stands for Router View Depth
             *
             * @internal
             */
/**
             * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
             */
function ac(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function uc(e,t,n,o,r){// keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
const s=o&&(// name is defined if record is because of the function overload
o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise(((i,l)=>{const c=e=>{var c;!1===e?l(bl(4/* ErrorTypes.NAVIGATION_ABORTED */,{from:n,to:t})):e instanceof Error?l(e):"string"==typeof(c=e)||c&&"object"==typeof c?l(bl(2/* ErrorTypes.NAVIGATION_GUARD_REDIRECT */,{from:t,to:e})):(s&&// since enterCallbackArray is truthy, both record and name also are
o.enterCallbacks[r]===s&&"function"==typeof e&&s.push(e),i())},a=e.call(o&&o.instances[r],t,n,c);// wrapping with Promise.resolve allows it to work with both async and sync guards
let u=Promise.resolve(a);e.length<3&&(u=u.then(c)),u.catch((e=>l(e)))}))}function fc(e,t,n,o){const r=[];for(const i of e)for(const e in i.components){let l=i.components[e];// skip update and leave guards if the route component is not mounted
if("beforeRouteEnter"===t||i.instances[e])if("object"==typeof(s=l)||"displayName"in s||"props"in s||"__vccOpts"in s){// __vccOpts is added by vue-class-component and contain the regular options
const s=(l.__vccOpts||l)[t];s&&r.push(uc(s,n,o,i,e))}else{// start requesting the chunk already
let s=l();r.push((()=>s.then((r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${i.path}"`));const s=(l=r).__esModule||"Module"===l[Symbol.toStringTag]?r.default:r;// replace the function with the resolved component
// cannot be null or undefined because we went into the for loop
var l;i.components[e]=s;// __vccOpts is added by vue-class-component and contain the regular options
const c=(s.__vccOpts||s)[t];return c&&uc(c,n,o,i,e)()}))))}}
/**
             * Allows differentiating lazy components from functional components and vue-class-component
             * @internal
             *
             * @param component
             */
var s;// TODO: we could allow currentRoute as a prop to expose `isActive` and
// `isExactActive` behavior should go through an RFC
return r}function pc(e){const t=Tn(ic),n=Tn(lc),o=bs((()=>t.resolve(Pt(e.to)))),r=bs((()=>{const{matched:e}=o.value,{length:t}=e,r=e[t-1],s=n.matched;if(!r||!s.length)return-1;const i=s.findIndex(nl.bind(null,r));if(i>-1)return i;// possible parent record
const l=hc(e[t-2]);// we are dealing with nested routes
return t>1&&// if the parent and matched route have the same path, this link is
// referring to the empty child. Or we currently are on a different
// child of the same parent
hc(r)===l&&// avoid comparing the child with its parent
s[s.length-1].path!==l?s.findIndex(nl.bind(null,e[t-2])):i})),s=bs((()=>r.value>-1&&function(e,t){for(const n in t){const o=t[n],r=e[n];if("string"==typeof o){if(o!==r)return!1}else if(!Ji(r)||r.length!==o.length||o.some(((e,t)=>e!==r[t])))return!1}return!0}
/**
             * Get the original path value of a record by following its aliasOf
             * @param record
             */(n.params,o.value.params))),i=bs((()=>r.value>-1&&r.value===n.matched.length-1&&ol(n.params,o.value.params)));
/**
                 * NOTE: update {@link _RouterLinkI}'s `$slots` type when updating this
                 */
return{route:o,href:bs((()=>o.value.href)),isActive:s,isExactActive:i,navigate:function(n={}){return function(e){// don't redirect with control keys
if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||void 0!==e.button&&0!==e.button))// don't redirect on right click
{// don't redirect if `target="_blank"`
// @ts-expect-error getAttribute does exist
if(e.currentTarget&&e.currentTarget.getAttribute){// @ts-expect-error getAttribute exists
const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}// this may be a Weex event which doesn't have this method
return e.preventDefault&&e.preventDefault(),!0}// don't redirect when preventDefault called
}(n)?t[Pt(e.replace)?"replace":"push"](Pt(e.to)).catch(Zi):Promise.resolve()}}}const dc=Yn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,// inactiveClass: String,
exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:pc,setup(e,{slots:t}){const n=ft(pc(e)),{options:o}=Tn(ic),r=bs((()=>({[mc(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,// [getLinkClass(
//   props.inactiveClass,
//   options.linkInactiveClass,
//   'router-link-inactive'
// )]: !link.isExactActive,
[mc(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const o=t.default&&t.default(n);return e.custom?o:ws("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,// this would override user added attrs but Vue will still add
// the listener, so we end up triggering both
onClick:n.navigate,class:r.value},o)}}});// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
             * Component to render a link that triggers a navigation on click.
             */function hc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}
/**
             * Utility class to get the active class based on defaults.
             * @param propClass
             * @param globalClass
             * @param defaultClass
             */const mc=(e,t,n)=>null!=e?e:null!=t?t:n;function gc(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
             * Component to display the current route the user is at.
             */const vc=Yn({name:"RouterView",// #674 we manually inherit them
inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},// Better compat for @vue/compat users
// https://github.com/vuejs/router/issues/1315
compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=Tn(cc),r=bs((()=>e.route||o.value)),s=Tn(sc,0),i=bs((()=>{let e=Pt(s);const{matched:t}=r.value;let n;for(;(n=t[e])&&!n.components;)e++;return e})),l=bs((()=>r.value.matched[i.value]));Pn(sc,bs((()=>i.value+1))),Pn(rc,l),Pn(cc,r);const c=kt();// watch at the same time the component instance, the route record we are
// rendering, and the name
return Bn((()=>[c.value,l.value,e.name]),(([e,t,n],[o,r,s])=>{// copy reused instances
t&&(// this will update the instance for new instances as well as reused
// instances when navigating to a new route
t.instances[n]=e,// the component instance is reused for a different route or name, so
// we copy any saved update or leave guards. With async setup, the
// mounting component will mount before the matchedRoute changes,
// making instance === oldInstance, so we check if guards have been
// added before. This works because we remove guards when
// unmounting/deactivating components
r&&r!==t&&e&&e===o&&(t.leaveGuards.size||(t.leaveGuards=r.leaveGuards),t.updateGuards.size||(t.updateGuards=r.updateGuards))),// trigger beforeRouteEnter next callbacks
!e||!t||// if there is no instance but to and from are the same this might be
// the first visit
r&&nl(t,r)&&o||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const o=r.value,s=e.name,i=l.value,a=i&&i.components[s];// we need the value at the time we render because when we unmount, we
// navigated to a different location so the value is different
if(!a)return gc(n.default,{Component:a,route:o});// props from route configuration
const u=i.props[s],f=u?!0===u?o.params:"function"==typeof u?u(o):u:null,p=ws(a,Yi({},f,t,{onVnodeUnmounted:e=>{// remove the instance reference to prevent leak
e.component.isUnmounted&&(i.instances[s]=null)},ref:c}));// pass the vnode to the slot as a prop.
// h and <component :is="..."> both accept vnodes
return gc(n.default,{Component:p,route:o})||p}}});function yc(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}}}}));
