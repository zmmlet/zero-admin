System.register([],(function(e,t){"use strict";return{execute:function(){function t(e,t){return function(){return e.apply(t,arguments)}}// utils is a library of generic helper functions non-specific to axios
e({a:function(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e},g:function(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){if(this instanceof e){var n=[null];n.push.apply(n,arguments);var r=Function.bind.apply(t,n);return new r}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}}),e("c","undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{});const{toString:n}=Object.prototype,{getPrototypeOf:r}=Object,o=(i=Object.create(null),e=>{const t=n.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())});var i;const s=e=>(e=e.toLowerCase(),t=>o(t)===e),a=e=>t=>typeof t===e
/**
			 * Determine if a value is an Array
			 *
			 * @param {Object} val The value to test
			 *
			 * @returns {boolean} True if value is an Array, otherwise false
			 */,{isArray:c}=Array,u=a("undefined"),l=s("ArrayBuffer"),f=a("string"),d=a("function"),p=a("number"),h=e=>null!==e&&"object"==typeof e
/**
			 * Determine if a value is a Boolean
			 *
			 * @param {*} thing The value to test
			 * @returns {boolean} True if value is a Boolean, otherwise false
			 */,m=e=>{if("object"!==o(e))return!1;const t=r(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},y=s("Date"),b=s("File"),g=s("Blob"),w=s("FileList"),E=s("URLSearchParams");
/**
			 * Iterate over an Array or an Object invoking a function for each item.
			 *
			 * If `obj` is an Array callback will be called passing
			 * the value, index, and complete array for each item.
			 *
			 * If 'obj' is an Object callback will be called passing
			 * the value, key, and complete object for each property.
			 *
			 * @param {Object|Array} obj The object to iterate
			 * @param {Function} fn The callback to invoke for each item
			 *
			 * @param {Boolean} [allOwnKeys = false]
			 * @returns {any}
			 */
function O(e,t,{allOwnKeys:n=!1}={}){// Don't bother if no value provided
if(null==e)return;let r,o;if(// Force an array if not already something iterable
"object"!=typeof e&&(/*eslint no-param-reassign:0*/e=[e]),c(e))// Iterate over array values
for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{// Iterate over object keys
const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(r=0;r<i;r++)s=o[r],t.call(null,e[s],s,e)}}function S(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const R=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,A=e=>!u(e)&&e!==R
/**
			 * Accepts varargs expecting each argument to be an object, then
			 * immutably merges the properties of each object and returns result.
			 *
			 * When multiple objects contain the same key the later object in
			 * the arguments list will take precedence.
			 *
			 * Example:
			 *
			 * ```js
			 * var result = merge({foo: 123}, {foo: 456});
			 * console.log(result.foo); // outputs 456
			 * ```
			 *
			 * @param {Object} obj1 Object to merge
			 *
			 * @returns {Object} Result of all merge properties
			 */,T=(j="undefined"!=typeof Uint8Array&&r(Uint8Array),e=>j&&e instanceof j);var j;
/**
			 * For each entry in the object, call the function with the key and value.
			 *
			 * @param {Object<any, any>} obj - The object to iterate over.
			 * @param {Function} fn - The function to call for each entry.
			 *
			 * @returns {void}
			 */
const v=s("HTMLFormElement"),N=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),P=s("RegExp"),x=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};O(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},C={isArray:c,isArrayBuffer:l,isBuffer:
/**
			 * Determine if a value is a Buffer
			 *
			 * @param {*} val The value to test
			 *
			 * @returns {boolean} True if value is a Buffer, otherwise false
			 */
function(e){return null!==e&&!u(e)&&null!==e.constructor&&!u(e.constructor)&&d(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}
/**
			 * Determine if a value is an ArrayBuffer
			 *
			 * @param {*} val The value to test
			 *
			 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
			 */,isFormData:e=>{const t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||n.call(e)===t||d(e.toString)&&e.toString()===t)},isArrayBufferView:
/**
			 * Determine if a value is a view on an ArrayBuffer
			 *
			 * @param {*} val The value to test
			 *
			 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
			 */
function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer),t}
/**
			 * Determine if a value is a String
			 *
			 * @param {*} val The value to test
			 *
			 * @returns {boolean} True if value is a String, otherwise false
			 */,isString:f,isNumber:p,isBoolean:e=>!0===e||!1===e
/**
			 * Determine if a value is a plain Object
			 *
			 * @param {*} val The value to test
			 *
			 * @returns {boolean} True if value is a plain Object, otherwise false
			 */,isObject:h,isPlainObject:m,isUndefined:u,isDate:y,isFile:b,isBlob:g,isRegExp:P,isFunction:d,isStream:e=>h(e)&&d(e.pipe)
/**
			 * Determine if a value is a FormData
			 *
			 * @param {*} thing The value to test
			 *
			 * @returns {boolean} True if value is an FormData, otherwise false
			 */,isURLSearchParams:E,isTypedArray:T,isFileList:w,forEach:O,merge:function e(){const{caseless:t}=A(this)&&this||{},n={},r=(r,o)=>{const i=t&&S(n,o)||o;m(n[i])&&m(r)?n[i]=e(n[i],r):m(r)?n[i]=e({},r):c(r)?n[i]=r.slice():n[i]=r};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&O(arguments[o],r);return n}
/**
			 * Extends object a by mutably adding to it the properties of object b.
			 *
			 * @param {Object} a The object to be extended
			 * @param {Object} b The object to copy properties from
			 * @param {Object} thisArg The object to bind function to
			 *
			 * @param {Boolean} [allOwnKeys]
			 * @returns {Object} The resulting value of object a
			 */,extend:(e,n,r,{allOwnKeys:o}={})=>(O(n,((n,o)=>{r&&d(n)?e[o]=t(n,r):e[o]=n}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,o)=>{let i,s,a;const c={};// eslint-disable-next-line no-eq-null,eqeqeq
if(t=t||{},null==e)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)a=i[s],o&&!o(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&r(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:o,kindOfTest:s,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(c(e))return e;let t=e.length;if(!p(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:v,hasOwnProperty:N,hasOwnProp:N,// an alias to avoid ESLint no-prototype-builtins detection
reduceDescriptors:x,freezeMethods:e=>{x(e,((t,n)=>{// skip restricted props in strict mode
if(d(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];d(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return c(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:S,global:R,isContextDefined:A,toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(h(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=c(e)?[]:{};return O(e,((e,t)=>{const i=n(e,r+1);!u(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)}};
/**
			 * It takes a regular expression and a string, and returns an array of all the matches
			 *
			 * @param {string} regExp - The regular expression to match against.
			 * @param {string} str - The string to search.
			 *
			 * @returns {Array<boolean>}
			 */
/**
			 * Create an Error with the specified message, config, error code, request and response.
			 *
			 * @param {string} message The error message.
			 * @param {string} [code] The error code (for example, 'ECONNABORTED').
			 * @param {Object} [config] The config.
			 * @param {Object} [request] The request.
			 * @param {Object} [response] The response.
			 *
			 * @returns {Error} The created error.
			 */
function _(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}C.inherits(_,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:C.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const U=_.prototype,F={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{F[e]={value:e}})),Object.defineProperties(_,F),Object.defineProperty(U,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
_.from=(e,t,n,r,o,i)=>{const s=Object.create(U);return C.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),_.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const B="object"==typeof self?self.FormData:window.FormData;
/**
			 * Determines if the given thing is a array or js object.
			 *
			 * @param {string} thing - The object or array to be visited.
			 *
			 * @returns {boolean}
			 */function D(e){return C.isPlainObject(e)||C.isArray(e)}
/**
			 * It removes the brackets from the end of a string
			 *
			 * @param {string} key - The key of the parameter.
			 *
			 * @returns {string} the key without the brackets.
			 */function L(e){return C.endsWith(e,"[]")?e.slice(0,-2):e}
/**
			 * It takes a path, a key, and a boolean, and returns a string
			 *
			 * @param {string} path - The path to the current key.
			 * @param {string} key - The key of the current object being iterated over.
			 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
			 *
			 * @returns {string} The path to the current key.
			 */function k(e,t,n){return e?e.concat(t).map((function(e,t){// eslint-disable-next-line no-param-reassign
return e=L(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}
/**
			 * If the array is an array and none of its elements are visitable, then it's a flat array.
			 *
			 * @param {Array<any>} arr - The array to check
			 *
			 * @returns {boolean}
			 */const q=C.toFlatObject(C,{},null,(function(e){return/^is[A-Z]/.test(e)}));
/**
			 * If the thing is a FormData object, return true, otherwise return false.
			 *
			 * @param {unknown} thing - The thing to check.
			 *
			 * @returns {boolean}
			 */
/**
			 * Convert a data object to FormData
			 *
			 * @param {Object} obj
			 * @param {?Object} [formData]
			 * @param {?Object} [options]
			 * @param {Function} [options.visitor]
			 * @param {Boolean} [options.metaTokens = true]
			 * @param {Boolean} [options.dots = false]
			 * @param {?Boolean} [options.indexes = false]
			 *
			 * @returns {Object}
			 **/
/**
			 * It converts an object into a FormData object
			 *
			 * @param {Object<any, any>} obj - The object to convert to form data.
			 * @param {string} formData - The FormData object to append to.
			 * @param {Object<string, any>} options
			 *
			 * @returns
			 */
function M(e,t,n){if(!C.isObject(e))throw new TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
t=t||new(B||FormData);const r=(// eslint-disable-next-line no-param-reassign
n=C.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){// eslint-disable-next-line no-eq-null,eqeqeq
return!C.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,i=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&(c=t)&&C.isFunction(c.append)&&"FormData"===c[Symbol.toStringTag]&&c[Symbol.iterator];// eslint-disable-next-line no-use-before-define
var c;if(!C.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(C.isDate(e))return e.toISOString();if(!a&&C.isBlob(e))throw new _("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(e)||C.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}
/**
			   * Default visitor.
			   *
			   * @param {*} value
			   * @param {String|Number} key
			   * @param {Array<String|Number>} path
			   * @this {FormData}
			   *
			   * @returns {boolean} return true to visit the each prop of the value recursively
			   */function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(C.endsWith(n,"{}"))// eslint-disable-next-line no-param-reassign
n=r?n:n.slice(0,-2),// eslint-disable-next-line no-param-reassign
e=JSON.stringify(e);else if(C.isArray(e)&&function(e){return C.isArray(e)&&!e.some(D)}(e)||C.isFileList(e)||C.endsWith(n,"[]")&&(a=C.toArray(e)))// eslint-disable-next-line no-param-reassign
return n=L(n),a.forEach((function(e,r){!C.isUndefined(e)&&null!==e&&t.append(// eslint-disable-next-line no-nested-ternary
!0===s?k([n],r,i):null===s?n:n+"[]",u(e))})),!1;return!!D(e)||(t.append(k(o,n,i),u(e)),!1)}const f=[],d=Object.assign(q,{defaultVisitor:l,convertValue:u,isVisitable:D});if(!C.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!C.isUndefined(n)){if(-1!==f.indexOf(n))throw Error("Circular reference detected in "+r.join("."));f.push(n),C.forEach(n,(function(n,i){!0===(!(C.isUndefined(n)||null===n)&&o.call(t,n,C.isString(i)?i.trim():i,r,d))&&e(n,r?r.concat(i):[i])})),f.pop()}}(e),t}
/**
			 * It encodes a string by replacing all characters that are not in the unreserved set with
			 * their percent-encoded equivalents
			 *
			 * @param {string} str - The string to encode.
			 *
			 * @returns {string} The encoded string.
			 */function I(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}
/**
			 * It takes a params object and converts it to a FormData object
			 *
			 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
			 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
			 *
			 * @returns {void}
			 */function z(e,t){this._pairs=[],e&&M(e,this,t)}const J=z.prototype;
/**
			 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
			 * URI encoded counterparts
			 *
			 * @param {string} val The value to be encoded.
			 *
			 * @returns {string} The encoded value.
			 */
function H(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}
/**
			 * Build a URL by appending params to the end
			 *
			 * @param {string} url The base of the url (e.g., http://www.google.com)
			 * @param {object} [params] The params to be appended
			 * @param {?object} options
			 *
			 * @returns {string} The formatted url
			 */function W(e,t,n){/*eslint no-param-reassign:0*/if(!t)return e;const r=n&&n.encode||H,o=n&&n.serialize;let i;if(i=o?o(t,n):C.isURLSearchParams(t)?t.toString():new z(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}J.append=function(e,t){this._pairs.push([e,t])},J.toString=function(e){const t=e?function(t){return e.call(this,t,I)}:I;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};const K=class{constructor(){this.handlers=[]}
/**
			   * Add a new interceptor to the stack
			   *
			   * @param {Function} fulfilled The function to handle `then` for a `Promise`
			   * @param {Function} rejected The function to handle `reject` for a `Promise`
			   *
			   * @return {Number} An ID used to remove interceptor later
			   */use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}
/**
			   * Remove an interceptor from the stack
			   *
			   * @param {Number} id The ID that was returned by `use`
			   *
			   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
			   */eject(e){this.handlers[e]&&(this.handlers[e]=null)}
/**
			   * Clear all interceptors from the stack
			   *
			   * @returns {void}
			   */clear(){this.handlers&&(this.handlers=[])}
/**
			   * Iterate over all the registered interceptors
			   *
			   * This method is particularly useful for skipping over any
			   * interceptors that may have become `null` calling `eject`.
			   *
			   * @param {Function} fn The function to call for each interceptor
			   *
			   * @returns {void}
			   */forEach(e){C.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},V={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},$="undefined"!=typeof URLSearchParams?URLSearchParams:z,G=FormData,X=(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document})(),Q="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,Z={isBrowser:!0,classes:{URLSearchParams:$,FormData:G,Blob:Blob},isStandardBrowserEnv:X,isStandardBrowserWebWorkerEnv:Q,protocols:["http","https","file","blob","url","data"]};
/**
			 * It takes a FormData object and returns a JavaScript object
			 *
			 * @param {string} formData The FormData object to convert to JSON.
			 *
			 * @returns {Object<string, any> | null} The converted object.
			 */
function Y(e){function t(e,n,r,o){let i=e[o++];const s=Number.isFinite(+i),a=o>=e.length;return i=!i&&C.isArray(r)?r.length:i,a?(C.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!s):(r[i]&&C.isObject(r[i])||(r[i]=[]),t(e,n,r[i],o)&&C.isArray(r[i])&&(r[i]=
/**
			 * Convert an array to an object.
			 *
			 * @param {Array<any>} arr - The array to convert to an object.
			 *
			 * @returns An object with the same keys and values as the array.
			 */
function(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}(r[i])),!s)}if(C.isFormData(e)&&C.isFunction(e.entries)){const n={};return C.forEachEntry(e,((e,r)=>{t(
/**
			 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
			 *
			 * @param {string} name - The name of the property to get.
			 *
			 * @returns An array of strings.
			 */
function(e){// foo[x][y][z]
// foo.x.y.z
// foo-x-y-z
// foo x y z
return C.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const ee={"Content-Type":void 0},te={transitional:V,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=C.isObject(e);if(o&&C.isHTMLForm(e)&&(e=new FormData(e)),C.isFormData(e))return r&&r?JSON.stringify(Y(e)):e;if(C.isArrayBuffer(e)||C.isBuffer(e)||C.isStream(e)||C.isFile(e)||C.isBlob(e))return e;if(C.isArrayBufferView(e))return e.buffer;if(C.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return M(e,new Z.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Z.isNode&&C.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=C.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return M(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),
/**
			 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
			 * of the input
			 *
			 * @param {any} rawValue - The value to be stringified.
			 * @param {Function} parser - A function that parses a string into a JavaScript object.
			 * @param {Function} encoder - A function that takes a value and returns a string.
			 *
			 * @returns {string} A stringified version of the rawValue.
			 */
function(e,t,n){if(C.isString(e))try{return(t||JSON.parse)(e),C.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||te.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&C.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(o){if(n){if("SyntaxError"===o.name)throw _.from(o,_.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],
/**
			   * A timeout in milliseconds to abort a request. If set to 0 (default) a
			   * timeout is not created.
			   */
timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Z.classes.FormData,Blob:Z.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};C.forEach(["delete","get","head"],(function(e){te.headers[e]={}})),C.forEach(["post","put","patch"],(function(e){te.headers[e]=C.merge(ee)}));const ne=te,re=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),oe=Symbol("internals");// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
function ie(e){return e&&String(e).trim().toLowerCase()}function se(e){return!1===e||null==e?e:C.isArray(e)?e.map(se):String(e)}function ae(e,t,n,r){return C.isFunction(r)?r.call(this,t,n):C.isString(t)?C.isString(r)?-1!==t.indexOf(r):C.isRegExp(r)?r.test(t):void 0:void 0}class ce{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ie(t);if(!o)throw new Error("header name must be a non-empty string");const i=C.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=se(e))}const i=(e,t)=>C.forEach(e,((e,n)=>o(e,n,t)));return C.isPlainObject(e)||e instanceof this.constructor?i(e,t):C.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z]+$/.test(e.trim())?i((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&re[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=ie(e)){const n=C.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(C.isFunction(t))return t.call(this,e,n);if(C.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ie(e)){const n=C.findKey(this,e);return!(!n||t&&!ae(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ie(e)){const o=C.findKey(n,e);!o||t&&!ae(0,n[o],o,t)||(delete n[o],r=!0)}}return C.isArray(e)?e.forEach(o):o(e),r}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return C.forEach(this,((r,o)=>{const i=C.findKey(n,o);if(i)return t[i]=se(r),void delete t[o];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();s!==o&&delete t[o],t[s]=se(r),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return C.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&C.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[oe]=this[oe]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ie(e);t[r]||(function(e,t){const n=C.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return C.isArray(e)?e.forEach(r):r(e),this}}ce.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),C.freezeMethods(ce.prototype),C.freezeMethods(ce);const ue=ce;
/**
			 * Transform the data for a request or a response
			 *
			 * @param {Array|Function} fns A single function or Array of functions
			 * @param {?Object} response The response object
			 *
			 * @returns {*} The resulting transformed data
			 */function le(e,t){const n=this||ne,r=t||n,o=ue.from(r.headers);let i=r.data;return C.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function fe(e){return!(!e||!e.__CANCEL__)}
/**
			 * A `CanceledError` is an object that is thrown when an operation is canceled.
			 *
			 * @param {string=} message The message.
			 * @param {Object=} config The config.
			 * @param {Object=} request The request.
			 *
			 * @returns {CanceledError} The created error.
			 */function de(e,t,n){// eslint-disable-next-line no-eq-null,eqeqeq
_.call(this,null==e?"canceled":e,_.ERR_CANCELED,t,n),this.name="CanceledError"}C.inherits(de,_,{__CANCEL__:!0});const pe=Z.isStandardBrowserEnv?{write:function(e,t,n,r,o,i){const s=[];s.push(e+"="+encodeURIComponent(t)),C.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),C.isString(r)&&s.push("path="+r),C.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};
/**
			 * Determines whether the specified URL is absolute
			 *
			 * @param {string} url The URL to test
			 *
			 * @returns {boolean} True if the specified URL is absolute, otherwise false
			 */
/**
			 * Creates a new URL by combining the baseURL with the requestedURL,
			 * only when the requestedURL is not already an absolute URL.
			 * If the requestURL is absolute, this function returns the requestedURL untouched.
			 *
			 * @param {string} baseURL The base URL
			 * @param {string} requestedURL Absolute or relative URL to combine
			 *
			 * @returns {string} The combined full path
			 */
function he(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?
/**
			 * Creates a new URL by combining the specified URLs
			 *
			 * @param {string} baseURL The base URL
			 * @param {string} relativeURL The relative URL
			 *
			 * @returns {string} The combined URL
			 */
function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const me=Z.isStandardBrowserEnv?// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;
/**
			    * Parse a URL to discover it's components
			    *
			    * @param {String} url The URL to be parsed
			    * @returns {Object}
			    */function r(n){let r=n;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return e&&(// IE needs attribute set twice to normalize properties
t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}
/**
			    * Determine if a URL shares the same origin as the current location
			    *
			    * @param {String} requestURL The URL to test
			    * @returns {boolean} True if URL shares the same origin, otherwise false
			    */
return n=r(window.location.href),function(e){const t=C.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function ye(e,t){let n=0;const r=
/**
			 * Calculate data maxRate
			 * @param {Number} [samplesCount= 10]
			 * @param {Number} [min= 1000]
			 * @returns {Function}
			 */
function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[s];o||(o=c),n[i]=a,r[i]=c;let l=s,f=0;for(;l!==i;)f+=n[l++],l%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,c=r(a);n=i;const u={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&i<=s?(s-i)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const be={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=ue.from(e.headers).normalize(),i=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}C.isFormData(r)&&(Z.isStandardBrowserEnv||Z.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;// HTTP basic authentication
if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=he(e.baseURL,e.url);function l(){if(!c)return;// Prepare the response
const r=ue.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());!
/**
			 * Resolve or reject a Promise based on response status.
			 *
			 * @param {Function} resolve A function that resolves the promise.
			 * @param {Function} reject A function that rejects the promise.
			 * @param {object} response The response.
			 *
			 * @returns {object} The response.
			 */
function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new _("Request failed with status code "+n.status,[_.ERR_BAD_REQUEST,_.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:i&&"text"!==i&&"json"!==i?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),// Clean up request
c=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(c.open(e.method.toUpperCase(),W(u,e.params,e.paramsSerializer),!0),// Set the request timeout in MS
c.timeout=e.timeout,"onloadend"in c?// Use onloadend if available
c.onloadend=l:// Listen for ready state to emulate onloadend
c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(l);// The request errored out and we didn't get a response, this will be
// handled by onerror instead
// With one exception: request that using file: protocol, most browsers
// will return status as 0 even though it's a successful request
},// Handle browser request cancellation (as opposed to a manual cancellation)
c.onabort=function(){c&&(n(new _("Request aborted",_.ECONNABORTED,e,c)),// Clean up request
c=null)},// Handle low level network errors
c.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
n(new _("Network Error",_.ERR_NETWORK,e,c)),// Clean up request
c=null},// Handle timeout
c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||V;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new _(t,r.clarifyTimeoutError?_.ETIMEDOUT:_.ECONNABORTED,e,c)),// Clean up request
c=null},Z.isStandardBrowserEnv){// Add xsrf header
const t=(e.withCredentials||me(u))&&e.xsrfCookieName&&pe.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}// Remove Content-Type if data is undefined
void 0===r&&o.setContentType(null),// Add headers to the request
"setRequestHeader"in c&&C.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),// Add withCredentials to request if needed
C.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),// Add responseType to request if needed
i&&"json"!==i&&(c.responseType=e.responseType),// Handle progress if needed
"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",ye(e.onDownloadProgress,!0)),// Not all browsers support upload events
"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",ye(e.onUploadProgress)),(e.cancelToken||e.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
s=t=>{c&&(n(!t||t.type?new de(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const f=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(u);f&&-1===Z.protocols.indexOf(f)?n(new _("Unsupported protocol "+f+":",_.ERR_BAD_REQUEST,e)):// Send the request
c.send(r||null)}))}};C.forEach(be,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){// eslint-disable-next-line no-empty
}Object.defineProperty(e,"adapterName",{value:t})}}));const ge=e=>{e=C.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=C.isString(n)?be[n.toLowerCase()]:n));o++);if(!r){if(!1===r)throw new _(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(C.hasOwnProp(be,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!C.isFunction(r))throw new TypeError("adapter is not a function");return r};
/**
			 * Throws a `CanceledError` if cancellation has been requested.
			 *
			 * @param {Object} config The config that is to be used for the request
			 *
			 * @returns {void}
			 */function we(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new de(null,e)}
/**
			 * Dispatch a request to the server using the configured adapter.
			 *
			 * @param {object} config The config that is to be used for the request
			 *
			 * @returns {Promise} The Promise to be fulfilled
			 */function Ee(e){return we(e),e.headers=ue.from(e.headers),// Transform request data
e.data=le.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ge(e.adapter||ne.adapter)(e).then((function(t){return we(e),// Transform response data
t.data=le.call(e,e.transformResponse,t),t.headers=ue.from(t.headers),t}),(function(t){return fe(t)||(we(e),// Transform response data
t&&t.response&&(t.response.data=le.call(e,e.transformResponse,t.response),t.response.headers=ue.from(t.response.headers))),Promise.reject(t)}))}const Oe=e=>e instanceof ue?e.toJSON():e
/**
			 * Config-specific merge-function which creates a new config-object
			 * by merging two configuration objects together.
			 *
			 * @param {Object} config1
			 * @param {Object} config2
			 *
			 * @returns {Object} New object resulting from merging config2 to config1
			 */;function Se(e,t){// eslint-disable-next-line no-param-reassign
t=t||{};const n={};function r(e,t,n){return C.isPlainObject(e)&&C.isPlainObject(t)?C.merge.call({caseless:n},e,t):C.isPlainObject(t)?C.merge({},t):C.isArray(t)?t.slice():t}// eslint-disable-next-line consistent-return
function o(e,t,n){return C.isUndefined(t)?C.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}// eslint-disable-next-line consistent-return
function i(e,t){if(!C.isUndefined(t))return r(void 0,t)}// eslint-disable-next-line consistent-return
function s(e,t){return C.isUndefined(t)?C.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}// eslint-disable-next-line consistent-return
function a(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(Oe(e),Oe(t),!0)};return C.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){const i=c[r]||o,s=i(e[r],t[r],r);C.isUndefined(s)&&i!==a||(n[r]=s)})),n}const Re="1.2.2",Ae={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Ae[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Te={};
/**
			 * Transitional option validator
			 *
			 * @param {function|boolean?} validator - set to false if the transitional option has been removed
			 * @param {string?} version - deprecated version / removed since version
			 * @param {string?} message - some message with additional info
			 *
			 * @returns {function}
			 */Ae.transitional=function(e,t,n){// eslint-disable-next-line func-names
return(r,o,i)=>{if(!1===e)throw new _(function(e,t){return"[Axios v1.2.2] Transitional option '"+e+"'"+t+(n?". "+n:"")}(o," has been removed"+(t?" in "+t:"")),_.ERR_DEPRECATED);return t&&!Te[o]&&(Te[o]=!0),!e||e(r,o,i)}};const je={assertOptions:
/**
			 * Assert object's properties type
			 *
			 * @param {object} options
			 * @param {object} schema
			 * @param {boolean?} allowUnknown
			 *
			 * @returns {object}
			 */
function(e,t,n){if("object"!=typeof e)throw new _("options must be an object",_.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const t=e[i],n=void 0===t||s(t,i,e);if(!0!==n)throw new _("option "+i+" must be "+n,_.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new _("Unknown option "+i,_.ERR_BAD_OPTION)}},validators:Ae},ve=je.validators;
/**
			 * Create a new instance of Axios
			 *
			 * @param {Object} instanceConfig The default config for the instance
			 *
			 * @return {Axios} A new instance of Axios
			 */
class Ne{constructor(e){this.defaults=e,this.interceptors={request:new K,response:new K}}
/**
			   * Dispatch a request
			   *
			   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
			   * @param {?Object} config
			   *
			   * @returns {Promise} The Promise to be fulfilled
			   */request(e,t){/*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Se(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let i;// Flatten headers
void 0!==n&&je.assertOptions(n,{silentJSONParsing:ve.transitional(ve.boolean),forcedJSONParsing:ve.transitional(ve.boolean),clarifyTimeoutError:ve.transitional(ve.boolean)},!1),void 0!==r&&je.assertOptions(r,{encode:ve.function,serialize:ve.function},!0),// Set config.method
t.method=(t.method||this.defaults.method||"get").toLowerCase(),i=o&&C.merge(o.common,o[t.method]),i&&C.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=ue.concat(i,o);// filter out skipped interceptors
const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[Ee.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=s.length;let d=t;for(f=0;f<l;){const e=s[f++],t=s[f++];try{d=e(d)}catch(p){t.call(this,p);break}}try{u=Ee.call(this,d)}catch(p){return Promise.reject(p)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return W(he((e=Se(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}// Provide aliases for supported request methods
C.forEach(["delete","get","head","options"],(function(e){/*eslint func-names:0*/Ne.prototype[e]=function(t,n){return this.request(Se(n||{},{method:e,url:t,data:(n||{}).data}))}})),C.forEach(["post","put","patch"],(function(e){/*eslint func-names:0*/function t(t){return function(n,r,o){return this.request(Se(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ne.prototype[e]=t(),Ne.prototype[e+"Form"]=t(!0)}));const Pe=Ne;
/**
			 * A `CancelToken` is an object that can be used to request cancellation of an operation.
			 *
			 * @param {Function} executor The executor function.
			 *
			 * @returns {CancelToken}
			 */class xe{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;// eslint-disable-next-line func-names
this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),// eslint-disable-next-line func-names
this.promise.then=e=>{let t;// eslint-disable-next-line func-names
const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new de(e,r,o),t(n.reason))}))}
/**
			   * Throws a `CanceledError` if cancellation has been requested.
			   */throwIfRequested(){if(this.reason)throw this.reason}
/**
			   * Subscribe to the cancel signal
			   */subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}
/**
			   * Unsubscribe from the cancel signal
			   */unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}
/**
			   * Returns an object that contains a new `CancelToken` and a function that, when called,
			   * cancels the `CancelToken`.
			   */static source(){let e;return{token:new xe((function(t){e=t})),cancel:e}}}const Ce=xe,_e={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};
/**
			 * Syntactic sugar for invoking a function and expanding an array for arguments.
			 *
			 * Common use case would be to use `Function.prototype.apply`.
			 *
			 *  ```js
			 *  function f(x, y, z) {}
			 *  var args = [1, 2, 3];
			 *  f.apply(null, args);
			 *  ```
			 *
			 * With `spread` this example can be re-written.
			 *
			 *  ```js
			 *  spread(function(x, y, z) {})([1, 2, 3]);
			 *  ```
			 *
			 * @param {Function} callback
			 *
			 * @returns {Function}
			 */Object.entries(_e).forEach((([e,t])=>{_e[t]=e}));const Ue=_e,Fe=
/**
			 * Create an instance of Axios
			 *
			 * @param {Object} defaultConfig The default config for the instance
			 *
			 * @returns {Axios} A new instance of Axios
			 */
function e(n){const r=new Pe(n),o=t(Pe.prototype.request,r);// Copy axios.prototype to instance
return C.extend(o,Pe.prototype,r,{allOwnKeys:!0}),// Copy context to instance
C.extend(o,r,null,{allOwnKeys:!0}),// Factory for creating new instances
o.create=function(t){return e(Se(n,t))},o}// Create the default instance to be exported
(ne);// Expose Axios class to allow class inheritance
Fe.Axios=Pe,// Expose Cancel & CancelToken
Fe.CanceledError=de,Fe.CancelToken=Ce,Fe.isCancel=fe,Fe.VERSION=Re,Fe.toFormData=M,// Expose AxiosError class
Fe.AxiosError=_,// alias for CanceledError for backward compatibility
Fe.Cancel=Fe.CanceledError,// Expose all/spread
Fe.all=function(e){return Promise.all(e)},Fe.spread=function(e){return function(t){return e.apply(null,t)}}
/**
			 * Determines whether the payload is an error thrown by Axios
			 *
			 * @param {*} payload The value to test
			 *
			 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
			 */,// Expose isAxiosError
Fe.isAxiosError=function(e){return C.isObject(e)&&!0===e.isAxiosError},// Expose mergeConfig
Fe.mergeConfig=Se,Fe.AxiosHeaders=ue,Fe.formToJSON=e=>Y(C.isHTMLForm(e)?new FormData(e):e),Fe.HttpStatusCode=Ue,Fe.default=Fe,e("b",Fe)}}}));
