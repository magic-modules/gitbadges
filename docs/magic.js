(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function b(a){return n(a)||c(a)||l()}function c(a){if(Symbol.iterator in Object(a)||Object.prototype.toString.call(a)==="[object Arguments]")return Array.from(a)}function e(a,b){if(a==null)return{};var c=f(a,b);var d,e;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(e=0;e<g.length;e++)d=g[e],!(b.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(a,d)&&(c[d]=a[d])}return c}function f(a,b){if(a==null)return{};var c={};var d=Object.keys(a);var e,f;for(f=0;f<d.length;f++)e=d[f],!(b.indexOf(e)>=0)&&(c[e]=a[e]);return c}function g(a){for(var b=1;b<arguments.length;b++){var c=arguments[b]==null?{}:arguments[b];var d=Object.keys(c);typeof Object.getOwnPropertySymbols==="function"&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){j(a,b,c[b])})}return a}function j(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function k(a,b){return n(a)||m(a,b)||l()}function l(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function m(a,b){var c=[];var d=!0;var e=!1;var f=undefined;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]!=null&&h["return"]()}finally{if(e)throw f}}return c}function n(a){if(Array.isArray(a))return a}function o(a){return o=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function o(a){return typeof a}:function o(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},o(a)}var q=require("hyperapp"),r=q.app,s=q.h;var h=function(a){return function(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var d=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];var e=function is(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===o(a)})};return!d&&(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),s(a,b,d)}};var t=function Page(a){return function(b,c){return O({"class":"Wrapper",oncreate:function oncreate(){typeof window!=="undefined"&&c.go&&window.addEventListener("popstate",c.go)}},[N,O({"class":"Page"},a?a(b,c):"404 - not found"),M])}};var u=function GitBadges(a){if(typeof a==="string")a={project:a};else if(!a.project)return;var b=a,c=b.project,d=c!==void 0&&c,e=b.branch,f=e===void 0?"master":e,g=b.host,h=g===void 0?"github":g;var j=[["npm",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(f)}}],["appveyor",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;if(a){var b=a.split("/"),c=k(b,2),e=c[0],g=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(g,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(g,"/").concat(f,".svg")}}}],["coveralls",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return{to:"https://coveralls.io/".concat(h,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(h,"/").concat(a,"/").concat(f,".svg")}}],["greenkeeper",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://snyk.io/test/".concat(h,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=k(b,2),d=c[0],e=c[1];return e(a[d])}).filter(function(b){return b.to&&b.src});return j.length?i({"class":"GitBadges"},j.map(function(a){var b=a.to,c=a.src;return J([H({to:b},D({src:c}))])})):void 0};var v=function Pre(a){var b=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";return function(c,d){return O({"class":"Pre ".concat(b||c.pre.theme)},[O({"class":"menu"},[!b&&A({onclick:d.pre.changeTheme},c.pre.theme==="dark"?"light":"dark"),A({onclick:function onclick(){return d.pre.clip(a)}},"copy")]),z(LIB.PRE.format(a))])}};var w=h("h2");var x=h("h1");var y=h("code");var z=h("pre");var A=h("button");var B=h("img");var C=function Menu(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"menu";return function(b){typeof a==="string"&&(a={name:a});var c=a,d=c.name,e=d===void 0?"menu":d,f=c["class"],h=f===void 0?"Menu":f,j=c.items,k=j===void 0?[]:j,l=c.collapse;var n=b.url,o=b[e],p=o===void 0?[]:o;if(k=k.length?k:p,!!k.length)return b.hash&&(n+="#".concat(b.hash)),L({"class":h},i(k.map(function(a){return C.Item(g({},a,{url:n,collapse:l===void 0||l}))})))}};C.Item=function(b){var c=b.url,d=b.text,f=b.items,h=f===void 0?[]:f,j=b.parentTo,k=j===void 0?undefined:j,l=b.collapse,m=e(b,["url","text","items","parentTo","collapse"]);return function(b){if(m.to||d){var e={"class":"MenuItem"};if(k){var p=m.to.includes("://");var q=m.to.startsWith("/");var r=!k||m.to.startsWith(k);!r&&!q&&!p&&(!k.endsWith("/")&&!m.to.startsWith("-")&&(k="".concat(k,"/")),m.to=k+m.to)}var f=m.to.startsWith(b.root)?m.to:"".concat(b.root).concat(m.to.substr(1));var j=c.startsWith(f);c===f&&(e["class"]+=" active");var o=[];return(h.length&&j||!l)&&(o=i(h.map(function(a){return C.Item(g({parentTo:m.to,url:c,collapse:l},a))}))),J(e,[m.to?H(m,d):a(m,d),o])}}};var D=function Img(a){return function(){if(typeof a==="string"&&(a={src:a}),!!a.src)return!a.alt&&(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),B(a)}};var E=h("header");var F=h("footer");var G=h("a");var a=h("span");var H=function Link(a,b){var c=a.to,d=e(a,["to"]);return function(a,f){var g=d.href,h=d.text,i=d.nofollow,j=d.noreferrer,k=d.onclick,l=e(d,["href","text","nofollow","noreferrer","onclick"]);return c=c||g||"",l.href=c,c&&c.startsWith("/")&&!c.startsWith("//")?l.onclick=function(a){k&&k({e:a,to:c}),f.go({e:a,to:c})}:(l.target="_blank",l.rel="noopener",i&&(l.rel+=" nofollow"),j&&(l.rel+=" noreferrer")),G(l,[h,b])}};var I=h("p");var J=h("li");var p=h("text");var K=h("i");var i=h("ul");var L=h("nav");var M=function Footer(){return F({"class":"Footer"},[O({"class":"wrapper"},["made with a few bits of ",H({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])};var N=function Header(b){return(b.logo||b.menu||b.tagline)&&E({"class":"Header"},[(b.logo||b.logotext)&&H({to:"/git-badges/","class":"LogoWrapper"},[b.logo&&D({"class":"Logo",src:b.logo}),b.logotext&&a({"class":"LogoText"},b.logotext)]),b.menu&&C])};var O=h("div");var P={};(function(){var c="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final export throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()});var d="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()});var e=["true","false"];var f=function wrapWords(b){if(typeof b!=="string")return b;var f=b.split(/\b/);return b=f.map(function(b,g){if(b!==""){var h="";return b==="state"?h="state":b==="actions"?h="actions":f[g+1]&&f[g+1].includes(":")?h="colon":c.includes(b)?h="keyword":d.includes(b)?h="builtin":e.includes(b)?h="boolean":f[g-1]==="."?h="property":f[g+1]==="."&&(h="object"),h&&(b=a({"class":h},b)),b}}),b};var g=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g;var h=function wrapEmails(a){return a.split(g).map(function(a){if(g.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a);var c=a.replace("mailto:","");return H({"class":"email",to:b},c)}return f(a)})};var i=function wrapComments(a,b){return[m(a.substring(0,b)),m(a.substring(b))]};var j=function wrapLinks(a){return a.split(/(?= )/).map(function(a){return a.includes("://")?H({to:a},a):m(a)})};var k=function wrapUrls(a){return a.includes("://")&&!a.includes("@")?j(a):h(a)};var l=function wrapStrings(c){var d=c.replace(/"/g,"'");var e=d.split("'"),g=b(e),h=g[0],i=g[1],j=g.slice(2);var l=j;l.length===1?l=m(l[0]):l.length>1&&(l=m(l.join("'")));var n=[];return n=typeof i==="undefined"?f(c):[f(h),a({"class":"string"},["'",k(i),"'"]),l],n};var m=function wordsByLine(b){var c=b.indexOf("//");var d=b.trim();if(d.startsWith("//")){var e=b.search(/\S|$/);var f="";for(var g=0;g<e;g++)f+=" ";return!d.startsWith("// ")&&(b="".concat(f,"// ").concat(d.substr(2))),a({"class":"comment"},[f,"// ",m(d.substring(3))])}return c>-1&&b[c-1]!==":"?i(b,c):b.indexOf("://")>2?j(b):b.indexOf("@")&&b.includes(".")&&!b.trim().includes(" ")?h(b):l(b)};var n=function wrapLine(a){return y({"class":"line"},m(a))};P.PRE={keywords:c,builtins:d,format:function format(a){return a.trim().split("\n").map(n)},wordsByLine:m,wrapWords:f}})(),window.LIB=P;var Q={"/git-badges/":function gitBadges(a){return[x(a.title),I(["this is the ",H({to:"https://github.com/magic-modules"},"@magic-modules")," GitBadges component. ",a.description]),w({id:"installation"},"installation"),I("installation is done using npm. for now, all magic modules are living on github and not on npm."),I("note the missing @ before magic-modules."),I("this is how we install npm modules from github."),v("npm install magic-modules/git-badges"),w({id:"usage"},"usage"),I("in a page/component, just pass the badge user/project string for those badges you want to show:"),v("\nGitBadges({\n  // show all badges,\n  // insert project into the various urls of the badges\n  project: 'user/project',\n\n  // optional if different to project above\n  // every one of this arguments can be false to hide a badge\n  npm: 'user/project' || false,\n  travis: 'user/project' || false,\n  coveralls: 'user/project' || false,\n  appveyor: 'user/project' || false, // - will automatically be removed from the user (appveyor needs that)\n  greenkeeper: 'user/project' || false,\n\n  // optional, master is default value\n  branch: 'master',\n})\n"),w("gitlab / other git hosts"),I(["to use gitlab or any other git host in the urls that need a git host to be set,"," simply pass a host prop to the GitBadges module"]),v("GitBages({ project: 'gitlab-org/gitlab-repo', host: 'gitlab' })"),w({id:"demo"},"demo"),v("GitBadges('magic-modules/git-badges')"),I("renders"),u("magic-modules/git-badges"),w({id:"source"},"source"),I(["the source for this page is in the ",H({to:"https://github.com/magic-modules/git-badges/tree/master/example"},"example directory")," and gets built and published to github using ",H({to:"https://github.com/magic/core"},"@magic/core")])]},"/git-badges/404/":function gitBadges404(){return O("404 - not found")}};var R={"url":"/git-badges/","root":"/git-badges/","title":"@magic-modules/git-badges","description":"shows git badges for a github/gitlab repository.","logotext":"git-badges","menu":[{to:"/git-badges/#installation","text":"installation"},{to:"/git-badges/#usage","text":"usage"},{to:"/git-badges/#demo","text":"demo"},{to:"/git-badges/#source","text":"source"}],"pre":{"theme":"light"}};R.url=window.location.pathname,R.root="/git-badges/";var S={"go":function go(a){return function(b){if(typeof window==="undefined"||!window.history)return!0;var c=a.to;var d=a.e?a.e:a;d.preventDefault();var e=b.url;var f=e.split("#"),g=k(f,2),h=g[0],i=g[1],j=i===void 0?"":i;if(c){e=c.replace(window.location.origin,"");var l=e.split("#"),m=k(l,2),n=m[0],o=m[1],p=o===void 0?"":o;h=n,j=p&&p!=="/"?p:"";var q=b.hash?"#".concat(b.hash):window.location.hash;var r=b.url+q;(e!==r||j!==q)&&(window.history&&window.history.pushState({uri:h},"",e),!j&&window.scrollTo(0,0))}else h=d.state?d.state.uri:"/";if(window.location&&j){var s=document.getElementById(j);if(s){var t=s.offsetTop;window.scrollTo(0,t),window.location.hash=j}}return{url:h,hash:j,prev:b.url}}},"pre":{"changeTheme":function changeTheme(){return function(a){return{theme:a.theme==="dark"?"light":"dark"}}},"clip":function clip(a){if(typeof document!=="undefined"&&typeof document.execCommand==="function"){var b=document.createElement("textarea");b.id="copy",b.innerHTML=a,document.body.appendChild(b);var c=document.getElementById("copy");c.select(),document.execCommand("copy"),document.body.removeChild(c)}}}};var T=function view(a,b){var c=Q[a.url]?a.url:"/404/";var d=Q[c];if(a.pages){var e=a.pages[c];for(var f in e)a[f]=e[f]}if(b.pages){var g=b.pages[c];for(var h in g)b[h]=g[h]}return t(d)(a,b)};var U=document;var d=U.getElementById("Magic");!d&&(d=U.createElement("div"),d.id="magic",U.body.appendChild(d)),r(R,S,T,d);
},{"hyperapp":2}],2:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.hyperapp={})}(this,function(e){"use strict";e.h=function(e,n){for(var t=[],r=[],o=arguments.length;2<o--;)t.push(arguments[o]);for(;t.length;){var l=t.pop();if(l&&l.pop)for(o=l.length;o--;)t.push(l[o]);else null!=l&&!0!==l&&!1!==l&&r.push(l)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}},e.app=function(e,n,t,r){var o,l=[].map,u=r&&r.children[0]||null,i=u&&function n(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:l.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e)})}}(u),f=[],m=!0,a=v(e),c=function e(r,o,l){for(var n in l)"function"==typeof l[n]?function(e,t){l[e]=function(e){var n=t(e);return"function"==typeof n&&(n=n(h(r,a),l)),n&&n!==(o=h(r,a))&&!n.then&&d(a=p(r,v(o,n),a)),n}}(n,l[n]):e(r.concat(n),o[n]=v(o[n]),l[n]=v(l[n]));return l}([],a,v(n));return d(),c;function g(e){return"function"==typeof e?g(e(a,c)):null!=e?e:""}function s(){o=!o;var e=g(t);for(r&&!o&&(u=function e(n,t,r,o,l){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var u=k(o,l);n.insertBefore(u,t),null!=r&&T(n,t,r),t=u}else if(null==r.nodeName)t.nodeValue=o;else{x(t,r.attributes,o.attributes,l=l||"svg"===o.nodeName);for(var i={},f={},a=[],c=r.children,s=o.children,d=0;d<c.length;d++){a[d]=t.childNodes[d];var v=N(c[d]);null!=v&&(i[v]=[a[d],c[d]])}for(var d=0,p=0;p<s.length;){var v=N(c[d]),h=N(s[p]=g(s[p]));if(f[v])d++;else if(null==h||h!==N(c[d+1]))if(null==h||m)null==v&&(e(t,a[d],c[d],s[p],l),p++),d++;else{var y=i[h]||[];v===h?(e(t,y[0],y[1],s[p],l),d++):y[0]?e(t,t.insertBefore(y[0],a[d]),y[1],s[p],l):e(t,a[d],null,s[p],l),f[h]=s[p],p++}else null==v&&T(t,a[d],c[d]),d++}for(;d<c.length;)null==N(c[d])&&T(t,a[d],c[d]),d++;for(var d in i)f[d]||T(t,i[d][0],i[d][1])}return t}(r,u,i,i=e)),m=!1;f.length;)f.pop()()}function d(){o||(o=!0,setTimeout(s))}function v(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function p(e,n,t){var r={};return e.length?(r[e[0]]=1<e.length?p(e.slice(1),n,t[e[0]]):n,v(t,r)):n}function h(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function N(e){return e?e.key:null}function y(e){return e.currentTarget.events[e.type](e)}function b(e,n,t,r,o){if("key"===n);else if("style"===n)if("string"==typeof t)e.style.cssText=t;else for(var l in"string"==typeof r&&(r=e.style.cssText=""),v(r,t)){var u=null==t||null==t[l]?"":t[l];"-"===l[0]?e.style.setProperty(l,u):e.style[l]=u}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},(e.events[n]=t)?r||e.addEventListener(n,y):e.removeEventListener(n,y)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function k(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),r=e.attributes;if(r){r.oncreate&&f.push(function(){r.oncreate(t)});for(var o=0;o<e.children.length;o++)t.appendChild(k(e.children[o]=g(e.children[o]),n));for(var l in r)b(t,l,r[l],null,n)}return t}function x(e,n,t,r){for(var o in v(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&b(e,o,t[o],n[o],r);var l=m?t.oncreate:t.onupdate;l&&f.push(function(){l(e,n)})}function T(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}});

},{}]},{},[1]);
