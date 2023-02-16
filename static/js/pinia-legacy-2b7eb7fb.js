System.register(["./vue-legacy-8dfae8d8.js"],(function(t,e){"use strict";var n,o,s,c,r,a,i,u,f,p,l,h,d,y,v,b;return{setters:[t=>{n=t.e,o=t.r,s=t.m,c=t.g,r=t.i,a=t.w,i=t.a,u=t.b,f=t.c,p=t.t,l=t.d,h=t.f,d=t.o,y=t.n,v=t.h,b=t.j}],execute:function(){
/*!
        * pinia v2.0.28
        * (c) 2022 Eduardo San Martin Morote
        * @license MIT
        */
/**
       * setActivePinia must be called to handle SSR at the top of functions like
       * `fetch`, `setup`, `serverPrefetch` and others
       */
let e;
/**
       * Sets or unsets the active pinia. Used in SSR and internally when calling
       * actions and getters
       *
       * @param pinia - Pinia instance
       */t({c:
/**
       * Creates a Pinia instance to be used by the application
       */
function(){const t=n(!0),e=t.run((()=>o({})));// NOTE: here we could check the window object for a state and directly set it
// if there is anything like it with Vue 3 SSR
let c=[],r=[];// plugins added before calling app.use(pinia)
const a=s({install(t){// this allows calling useStore() outside of a component setup after
// installing pinia's plugin
_(a),a._a=t,t.provide(g,a),t.config.globalProperties.$pinia=a,r.forEach((t=>c.push(t))),r=[]},use(t){return this._a?c.push(t):r.push(t),this},_p:c,// it's actually undefined here
// @ts-expect-error
_a:null,_e:t,_s:new Map,state:e});return a},d:function(// TODO: add proper types from above
t,n,o){let a,i;const u="function"==typeof n;function f(t,o){const f=c();// StoreGeneric cannot be casted towards Store
return(t=// in test mode, ignore the argument provided as we can always retrieve a
// pinia instance with getActivePinia()
t||f&&r(g,null))&&_(t),(t=e)._s.has(a)||(// creating the store registers it in `pinia._s`
u?I(a,n,i,t):function(t,e,n,o){const{state:c,actions:r,getters:a}=e,i=n.state.value[t];let u;function f(){i||(n.state.value[t]=c?c():{});// avoid creating a state in pinia.state.value
const e=v(n.state.value[t]);return E(e,r,Object.keys(a||{}).reduce(((e,o)=>(e[o]=s(b((()=>{_(n);// it was created just before
const e=n._s.get(t);// @ts-expect-error
// return getters![name].call(context, context)
// TODO: avoid reading the getter while assigning with a global variable
return a[o].call(e,e)}))),e)),{}))}u=I(t,f,e,n,0,!0),u.$reset=function(){const t=c?c():{};// we use a patch to group all changes into one single subscription
this.$patch((e=>{E(e,t)}))}}(a,i,t)),t._s.get(a)}return"string"==typeof t?(a=t,// the option store setup will contain the actual options in this case
i=u?o:n):(i=t,a=t.id),f.$id=a,f}
/**
       * Creates an object of references with all the state, getters, and plugin-added
       * state properties of the store. Similar to `toRefs()` but specifically
       * designed for Pinia stores so methods and non reactive properties are
       * completely ignored.
       *
       * @param store - store to extract the refs from
       */,s:function(t){// See https://github.com/vuejs/pinia/issues/852
// It's easier to just use toRefs() even if it includes more stuff
{t=p(t);const e={};for(const n in t){const o=t[n];(u(o)||f(o))&&(// @ts-expect-error: the key is state or getter
e[n]=// ---
l(t,n))}return e}}});const _=t=>e=t,g=/* istanbul ignore next */Symbol();function j(// eslint-disable-next-line @typescript-eslint/no-explicit-any
t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}// type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> }
// TODO: can we change these to numbers?
/**
       * Possible types for SubscriptionCallback
       */var $;!function(t){
/**
           * Direct mutation of the state:
           *
           * - `store.name = 'new name'`
           * - `store.$state.name = 'new name'`
           * - `store.list.push('new item')`
           */
t.direct="direct",
/**
           * Mutated the state with `$patch` and an object
           *
           * - `store.$patch({ name: 'newName' })`
           */
t.patchObject="patch object",
/**
           * Mutated the state with `$patch` and a function
           *
           * - `store.$patch(state => state.name = 'newName')`
           */
t.patchFunction="patch function"}($||($={}));const O=()=>{};function m(t,e,n,o=O){t.push(e);const s=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),o())};return!n&&h()&&d(s),s}function S(t,...e){t.slice().forEach((t=>{t(...e)}))}function P(t,e){// Handle Map instances
t instanceof Map&&e instanceof Map&&e.forEach(((e,n)=>t.set(n,e))),// Handle Set instances
t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);// no need to go through symbols because they cannot be serialized anyway
for(const n in e){if(!e.hasOwnProperty(n))continue;const o=e[n],s=t[n];j(s)&&j(o)&&t.hasOwnProperty(n)&&!u(o)&&!f(o)?// NOTE: here I wanted to warn about inconsistent types but it's not possible because in setup stores one might
// start the value of a property as a certain type e.g. a Map, and then for some reason, during SSR, change that
// to `undefined`. When trying to hydrate, we want to override the Map with `undefined`.
t[n]=P(s,o):// @ts-expect-error: subPatch is a valid value
t[n]=o}return t}const w=/* istanbul ignore next */Symbol(),{assign:E}=Object;
/**
       * Returns whether a value should be hydrated
       *
       * @param obj - target variable
       * @returns true if `obj` should be hydrated
       */function I(t,e,c={},r,l,h){let d;const v=E({actions:{}},c),b={deep:!0};// watcher options for $subscribe
// internal state
let g,I,M,x=s([]),A=s([]);// set to true at the end
const F=r.state.value[t];// avoid setting the state for option stores if it is set
// by the setup
// avoid triggering too many listeners
// https://github.com/vuejs/pinia/issues/1129
let k;function J(e){let n;g=I=!1,"function"==typeof e?(e(r.state.value[t]),n={type:$.patchFunction,storeId:t,events:M}):(P(r.state.value[t],e),n={type:$.patchObject,payload:e,storeId:t,events:M});const o=k=Symbol();y().then((()=>{k===o&&(g=!0)})),I=!0,// because we paused the watcher, we need to manually call the subscriptions
S(x,n,r.state.value[t])}/* istanbul ignore next */h||F||(r.state.value[t]={}),o({});const N=O;
/**
           * Wraps an action to handle subscriptions.
           *
           * @param name - name of the action
           * @param action - action to wrap
           * @returns a wrapped action to handle subscriptions
           */
function q(e,n){return function(){_(r);const o=Array.from(arguments),s=[],c=[];function a(t){s.push(t)}function i(t){c.push(t)}// @ts-expect-error
let u;S(A,{args:o,name:e,store:B,after:a,onError:i});try{u=n.apply(this&&this.$id===t?this:B,o);// handle sync errors
}catch(f){throw S(c,f),f}return u instanceof Promise?u.then((t=>(S(s,t),t))).catch((t=>(S(c,t),Promise.reject(t)))):(// allow the afterCallback to override the return value
S(s,u),u)}}const z={_p:r,// _s: scope,
$id:t,$onAction:m.bind(null,A),$patch:J,$reset:N,$subscribe(e,n={}){const o=m(x,e,n.detached,(()=>s())),s=d.run((()=>a((()=>r.state.value[t]),(o=>{("sync"===n.flush?I:g)&&e({storeId:t,type:$.direct,events:M},o)}),E({},b,n))));return o},$dispose:function(){d.stop(),x=[],A=[],r._s.delete(t)}},B=i(z);// store the partial store now so the setup of stores can instantiate each other before they are finished without
// creating infinite loops.
r._s.set(t,B);// TODO: idea create skipSerialize that marks properties as non serializable and they are skipped
const C=r._e.run((()=>(d=n(),d.run((()=>e())))));// overwrite existing actions to support $onAction
for(const n in C){const e=C[n];if(u(e)&&(!u(G=e)||!G.effect)||f(e))// mark it as a piece of state to be serialized
h||(// in setup stores we must hydrate the state and sync pinia state tree with the refs the user just created
!F||j(D=e)&&D.hasOwnProperty(w)||(u(e)?e.value=F[n]:// probably a reactive object, lets recursively assign
// @ts-expect-error: prop is unknown
P(e,F[n])),r.state.value[t][n]=e);// action
else if("function"==typeof e){// @ts-expect-error: we are overriding the function we avoid wrapping if
const t=q(n,e);// this a hot module replacement store because the hotUpdate method needs
// to do it with the right context
/* istanbul ignore if */ // @ts-expect-error
C[n]=t,// list actions so they can be used in plugins
// @ts-expect-error
v.actions[n]=e}}// add the state, getters, and action properties
/* istanbul ignore if */var D,G;return E(B,C),// allows retrieving reactive objects with `storeToRefs()`. Must be called after assigning to the reactive object.
// Make `storeToRefs()` work with `reactive()` #799
E(p(B),C),// use this instead of a computed with setter to be able to create it anywhere
// without linking the computed lifespan to wherever the store is first
// created.
Object.defineProperty(B,"$state",{get:()=>r.state.value[t],set:t=>{J((e=>{E(e,t)}))}}),// apply all plugins
r._p.forEach((t=>{E(B,d.run((()=>t({store:B,app:r._a,pinia:r,options:v}))))})),// only apply hydrate to option stores with an initial state in pinia
F&&h&&c.hydrate&&c.hydrate(B.$state,F),g=!0,I=!0,B}}}}));
