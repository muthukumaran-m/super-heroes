(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6de43374"],{"0a06":function(e,t,r){"use strict";var n=r("c532"),o=r("30b5"),s=r("f6b4"),a=r("5270"),i=r("4a7b");function c(e){this.defaults=e,this.interceptors={request:new s,response:new s}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=i(this.defaults,e),e.method=e.method?e.method.toLowerCase():"get";var t=[a,void 0],r=Promise.resolve(e);this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)r=r.then(t.shift(),t.shift());return r},c.prototype.getUri=function(e){return e=i(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,r){return this.request(n.merge(r||{},{method:e,url:t}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,r,o){return this.request(n.merge(o||{},{method:e,url:t,data:r}))}})),e.exports=c},"0df6":function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"1d2b":function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},2444:function(e,t,r){"use strict";(function(t){var n=r("c532"),o=r("c8af"),s={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function i(){var e;return"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t)?e=r("b50d"):"undefined"!==typeof XMLHttpRequest&&(e=r("b50d")),e}var c={adapter:i(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(s)})),e.exports=c}).call(this,r("4362"))},"2d83":function(e,t,r){"use strict";var n=r("387f");e.exports=function(e,t,r,o,s){var a=new Error(e);return n(a,t,r,o,s)}},"2e67":function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"30b5":function(e,t,r){"use strict";var n=r("c532");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var s;if(r)s=r(t);else if(n.isURLSearchParams(t))s=t.toString();else{var a=[];n.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),s=a.join("&")}if(s){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},"387f":function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},3934:function(e,t,r){"use strict";var n=r("c532");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return function(){return!0}}()},4362:function(e,t,r){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,n="/";t.cwd=function(){return n},t.chdir=function(t){e||(e=r("df7c")),n=e.resolve(t,n)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"467f":function(e,t,r){"use strict";var n=r("2d83");e.exports=function(e,t,r){var o=r.config.validateStatus;!o||o(r.status)?e(r):t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},"4a7b":function(e,t,r){"use strict";var n=r("c532");e.exports=function(e,t){t=t||{};var r={};return n.forEach(["url","method","params","data"],(function(e){"undefined"!==typeof t[e]&&(r[e]=t[e])})),n.forEach(["headers","auth","proxy"],(function(o){n.isObject(t[o])?r[o]=n.deepMerge(e[o],t[o]):"undefined"!==typeof t[o]?r[o]=t[o]:n.isObject(e[o])?r[o]=n.deepMerge(e[o]):"undefined"!==typeof e[o]&&(r[o]=e[o])})),n.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],(function(n){"undefined"!==typeof t[n]?r[n]=t[n]:"undefined"!==typeof e[n]&&(r[n]=e[n])})),r}},5270:function(e,t,r){"use strict";var n=r("c532"),o=r("c401"),s=r("2e67"),a=r("2444"),i=r("d925"),c=r("e683");function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){u(e),e.baseURL&&!i(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||a.adapter;return t(e).then((function(t){return u(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(u(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"5d88":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hero section"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-one-third"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-image"},[r("figure",{staticClass:"image is-4by3"},[r("img",{attrs:{src:e.heroInfo.data.image.url,alt:"Placeholder image"}})])]),r("div",{staticClass:"card-content"},[r("div",{staticClass:"media"},[r("div",{staticClass:"media-left"},[r("figure",{staticClass:"image is-48x48"},[r("img",{attrs:{src:e.heroInfo.data.image.url,alt:"Placeholder image"}})])]),r("div",{staticClass:"media-content"},[e.heroInfo.data.biography["full-name"]?r("p",{staticClass:"title is-4 has-text-black"},[e._v(e._s(e.heroInfo.data.biography["full-name"]))]):e._e(),r("p",{staticClass:"title is-4 has-text-black"},[e._v("@No Name")]),r("p",{staticClass:"subtitle is-6 has-text-black is-paddingless"},[e._v(e._s(e.heroInfo.data.biography["place-of-birth"]))])])]),r("div",{staticClass:"content biography"},[e._v(" "+e._s(e.heroInfo.data.biography["alter-egos"])+" Has different names like "+e._s(e.heroInfo.data.biography.aliases)+". His first appearance is "+e._s(e.heroInfo.data.biography["first-appearance"])+" . "+e._s(e.heroInfo.data.biography.publisher)+" is the publisher of this creature. This super hero has a alignment of "+e._s(e.heroInfo.data.biography.alignment)+". ")])])])]),r("div",{staticClass:"column"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("article",{staticClass:"message is-danger"},[e._m(0),r("div",{staticClass:"message-body has-text-left"},[r("p",[r("strong",[e._v("Intelligence")]),e._v(": "+e._s(e.heroInfo.data.powerstats.intelligence))]),r("p",[r("strong",[e._v("Strength")]),e._v(": "+e._s(e.heroInfo.data.powerstats.strength))]),r("p",[r("strong",[e._v("Speed")]),e._v(": "+e._s(e.heroInfo.data.powerstats.speed))]),r("p",[r("strong",[e._v("Durability")]),e._v(": "+e._s(e.heroInfo.data.powerstats.durability))]),r("p",[r("strong",[e._v("Power")]),e._v(": "+e._s(e.heroInfo.data.powerstats.power))]),r("p",[r("strong",[e._v("Combat")]),e._v(": "+e._s(e.heroInfo.data.powerstats.combat))])])])]),r("div",{staticClass:"column"},[r("article",{staticClass:"message is-primary"},[e._m(1),r("div",{staticClass:"message-body has-text-left"},[r("p",[r("strong",[e._v("Gender")]),e._v(": "+e._s(e.heroInfo.data.appearance.gender))]),r("p",[r("strong",[e._v("Race")]),e._v(": "+e._s(e.heroInfo.data.appearance.race))]),r("p",[r("strong",[e._v("Height")]),e._v(":"+e._s(e.heroInfo.data.appearance.height[0])+" | "+e._s(e.heroInfo.data.appearance.height[1]))]),r("p",[r("strong",[e._v("Weight")]),e._v(": "+e._s(e.heroInfo.data.appearance.weight[0])+" | "+e._s(e.heroInfo.data.appearance.weight[1]))]),r("p",[r("strong",[e._v("Eye-color")]),e._v(": "+e._s(e.heroInfo.data.appearance["eye-color"]))]),r("p",[r("strong",[e._v("Hair-color")]),e._v(": "+e._s(e.heroInfo.data.appearance["hair-color"]))])])])])]),r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("article",{staticClass:"message is-info"},[e._m(2),r("div",{staticClass:"message-body has-text-left"},[r("p",[r("strong",[e._v("Occupation")]),e._v(": "+e._s(e.heroInfo.data.work.occupation))]),r("p",[r("strong",[e._v("Base")]),e._v(": "+e._s(e.heroInfo.data.work.base))])])])]),r("div",{staticClass:"column"},[r("article",{staticClass:"message is-success"},[e._m(3),r("div",{staticClass:"message-body has-text-left"},[r("p",[r("strong",[e._v("Group-affiliation")]),e._v(": "+e._s(e.heroInfo.data.connections["group-affiliation"]))]),r("p",[r("strong",[e._v("Relatives")]),e._v(": "+e._s(e.heroInfo.data.connections.relatives))])])])])])])])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"message-header"},[r("p",[e._v("Powerstats")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"message-header"},[r("p",[e._v("Appearance")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"message-header"},[r("p",[e._v("Work")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"message-header"},[r("p",[e._v("Connections")])])}],s=r("bc3a"),a=r.n(s),i={name:"hero",components:{},data:function(){return{heroInfo:null}},props:["id"],mounted:function(){var e=this;a.a.get("https://superheroapi.com/api/163220391589190/"+this.$route.params.id,{useCredentails:!0}).then((function(t){return e.heroInfo=t}))}},c=i,u=r("2877"),f=Object(u["a"])(c,n,o,!1,null,null,null);t["default"]=f.exports},"7a77":function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},"7aac":function(e,t,r){"use strict";var n=r("c532");e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,s,a){var i=[];i.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),n.isString(o)&&i.push("path="+o),n.isString(s)&&i.push("domain="+s),!0===a&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"8df4":function(e,t,r){"use strict";var n=r("7a77");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e,t=new o((function(t){e=t}));return{token:t,cancel:e}},e.exports=o},b50d:function(e,t,r){"use strict";var n=r("c532"),o=r("467f"),s=r("30b5"),a=r("c345"),i=r("3934"),c=r("2d83");e.exports=function(e){return new Promise((function(t,u){var f=e.data,l=e.headers;n.isFormData(f)&&delete l["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password||"";l.Authorization="Basic "+btoa(d+":"+h)}if(p.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?a(p.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?p.response:p.responseText,s={data:n,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};o(t,u,s),p=null}},p.onabort=function(){p&&(u(c("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){u(c("Network Error",e,null,p)),p=null},p.ontimeout=function(){u(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var m=r("7aac"),v=(e.withCredentials||i(e.url))&&e.xsrfCookieName?m.read(e.xsrfCookieName):void 0;v&&(l[e.xsrfHeaderName]=v)}if("setRequestHeader"in p&&n.forEach(l,(function(e,t){"undefined"===typeof f&&"content-type"===t.toLowerCase()?delete l[t]:p.setRequestHeader(t,e)})),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(g){if("json"!==e.responseType)throw g}"function"===typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),u(e),p=null)})),void 0===f&&(f=null),p.send(f)}))}},bc3a:function(e,t,r){e.exports=r("cee4")},c345:function(e,t,r){"use strict";var n=r("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,s,a={};return e?(n.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=n.trim(e.substr(0,s)).toLowerCase(),r=n.trim(e.substr(s+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([r]):a[t]?a[t]+", "+r:r}})),a):a}},c401:function(e,t,r){"use strict";var n=r("c532");e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},c532:function(e,t,r){"use strict";var n=r("1d2b"),o=r("c7ce"),s=Object.prototype.toString;function a(e){return"[object Array]"===s.call(e)}function i(e){return"[object ArrayBuffer]"===s.call(e)}function c(e){return"undefined"!==typeof FormData&&e instanceof FormData}function u(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function f(e){return"string"===typeof e}function l(e){return"number"===typeof e}function p(e){return"undefined"===typeof e}function d(e){return null!==e&&"object"===typeof e}function h(e){return"[object Date]"===s.call(e)}function m(e){return"[object File]"===s.call(e)}function v(e){return"[object Blob]"===s.call(e)}function g(e){return"[object Function]"===s.call(e)}function y(e){return d(e)&&g(e.pipe)}function b(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function _(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function w(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function C(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),a(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function x(){var e={};function t(t,r){"object"===typeof e[r]&&"object"===typeof t?e[r]=x(e[r],t):e[r]=t}for(var r=0,n=arguments.length;r<n;r++)C(arguments[r],t);return e}function E(){var e={};function t(t,r){"object"===typeof e[r]&&"object"===typeof t?e[r]=E(e[r],t):e[r]="object"===typeof t?E({},t):t}for(var r=0,n=arguments.length;r<n;r++)C(arguments[r],t);return e}function A(e,t,r){return C(t,(function(t,o){e[o]=r&&"function"===typeof t?n(t,r):t})),e}e.exports={isArray:a,isArrayBuffer:i,isBuffer:o,isFormData:c,isArrayBufferView:u,isString:f,isNumber:l,isObject:d,isUndefined:p,isDate:h,isFile:m,isBlob:v,isFunction:g,isStream:y,isURLSearchParams:b,isStandardBrowserEnv:w,forEach:C,merge:x,deepMerge:E,extend:A,trim:_}},c7ce:function(e,t){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},c8af:function(e,t,r){"use strict";var n=r("c532");e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},cee4:function(e,t,r){"use strict";var n=r("c532"),o=r("1d2b"),s=r("0a06"),a=r("4a7b"),i=r("2444");function c(e){var t=new s(e),r=o(s.prototype.request,t);return n.extend(r,s.prototype,t),n.extend(r,t),r}var u=c(i);u.Axios=s,u.create=function(e){return c(a(u.defaults,e))},u.Cancel=r("7a77"),u.CancelToken=r("8df4"),u.isCancel=r("2e67"),u.all=function(e){return Promise.all(e)},u.spread=r("0df6"),e.exports=u,e.exports.default=u},d925:function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},df7c:function(e,t,r){(function(e){function r(e,t){for(var r=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function n(e){"string"!==typeof e&&(e+="");var t,r=0,n=-1,o=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!o){r=t+1;break}}else-1===n&&(o=!1,n=t+1);return-1===n?"":e.slice(r,n)}function o(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}t.resolve=function(){for(var t="",n=!1,s=arguments.length-1;s>=-1&&!n;s--){var a=s>=0?arguments[s]:e.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,n="/"===a.charAt(0))}return t=r(o(t.split("/"),(function(e){return!!e})),!n).join("/"),(n?"/":"")+t||"."},t.normalize=function(e){var n=t.isAbsolute(e),a="/"===s(e,-1);return e=r(o(e.split("/"),(function(e){return!!e})),!n).join("/"),e||n||(e="."),e&&a&&(e+="/"),(n?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(o(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,r){function n(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var r=e.length-1;r>=0;r--)if(""!==e[r])break;return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var o=n(e.split("/")),s=n(r.split("/")),a=Math.min(o.length,s.length),i=a,c=0;c<a;c++)if(o[c]!==s[c]){i=c;break}var u=[];for(c=i;c<o.length;c++)u.push("..");return u=u.concat(s.slice(i)),u.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,n=-1,o=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),47===t){if(!o){n=s;break}}else o=!1;return-1===n?r?"/":".":r&&1===n?"/":e.slice(0,n)},t.basename=function(e,t){var r=n(e);return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,r=0,n=-1,o=!0,s=0,a=e.length-1;a>=0;--a){var i=e.charCodeAt(a);if(47!==i)-1===n&&(o=!1,n=a+1),46===i?-1===t?t=a:1!==s&&(s=1):-1!==t&&(s=-1);else if(!o){r=a+1;break}}return-1===t||-1===n||0===s||1===s&&t===n-1&&t===r+1?"":e.slice(t,n)};var s="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(this,r("4362"))},e683:function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},f6b4:function(e,t,r){"use strict";var n=r("c532");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o}}]);
//# sourceMappingURL=chunk-6de43374.8b157476.js.map