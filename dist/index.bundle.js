(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),d=new URL(t(323),t.b),l=a()(o());l.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap);"]);var p=s()(d);l.push([n.id,"* {\n  margin: 0;\n  padding: 0;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 16px;\n  font-family: 'Ubuntu', sans-serif;\n}\n\n/* HEADER */\nheader {\n  display: flex;\n  width: 600px;\n  height: 80px;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 1.5rem;\n}\n\nh2 {\n  text-decoration: underline overline;\n}\n\n.nav-list {\n  list-style: none;\n  display: flex;\n  width: 200px;\n  justify-content: space-between;\n  margin: 0 0;\n  padding: 0;\n  font-size: 1rem;\n}\n\nul > li {\n  cursor: pointer;\n  position: relative;\n}\n\nul > li:hover {\n  font-weight: 500;\n  text-decoration: underline;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* MAIN */\n\nmain {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  background: center / cover no-repeat url("+p+");\n}\n\n.home-shade-container {\n  position: relative;\n  margin-top: 130px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  height: 600px;\n  width: 600px;\n}\n\n.home-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(70, 70, 70, 0.8);\n  opacity: 0.7;\n  border-radius: 5px;\n}\n\n.home-text {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content:space-between;\n  color: #fff;\n  font-size: 1.4rem;\n  padding: 50px;\n  text-align: center;\n}\n\nh1 > span {\n  text-decoration: underline overline;\n}\n\nh1 {\n  font-size: 3rem;\n}\n\n/* MENU SECTION */\n\n.cards {\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n}\n\n.card {\n  width: 200px;\n  height: 200px;\n  background-color: rgba(70, 70, 70, 0.9);\n  border: 1px solid rgba(70, 70, 70, 1);\n  border-radius: 4px;\n}\n\n/* FOOTER SECTION */\n\n.attribution {\n  font-size: 1rem;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 40px;\n  background-color: #fff;\n}\n\n.attribution a {\n  color: hsl(228, 45%, 44%);\n}",""]);const u=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},323:(n,e,t)=>{n.exports=t.p+"65cac61f18d5935ab7b7.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=function(){const n=document.createElement("div");n.classList.add("home-shade-container");const e=document.createElement("div"),t=document.createElement("div");e.classList.add("home-shade"),t.classList.add("home-text"),t.id="home-text";const r=document.createElement("h1"),o=document.createElement("p"),i=document.createElement("p");return r.innerHTML="<span>Z</span>eus's <span>K</span>itchen",t.append(r),o.textContent="An authentic Greek restaurant offering an eating experience like no other.",i.textContent="Dine in only.",t.append(o),t.append(i),n.appendChild(e),n.appendChild(t),n},e=function(){const n=document.createElement("div"),e=document.createElement("h1");e.innerHTML="<span>M</span>enu",n.append(e);const t=document.createElement("div");t.classList.add("cards"),n.append(t);const r=document.createElement("div");return r.classList.add("card"),t.append(r),n},r=function(){const n=document.createElement("div");return n.textContent="from inside contact",n},o=function(){const t=document.createElement("header");function o(n){for(;n.firstChild;)n.removeChild(n.firstChild)}const i=document.createElement("h2");i.textContent="ZK",t.appendChild(i);const a=document.createElement("ul");a.classList.add("nav-list");const c=document.createElement("li"),s=document.createElement("li"),d=document.createElement("li");return c.textContent="Home",s.textContent="Menu",d.textContent="Contact",c.addEventListener("click",(function(){const e=document.getElementById("main");o(e),e.append(n())})),s.addEventListener("click",(function(){const n=document.getElementById("main");o(n),n.append(e())})),d.addEventListener("click",(function(){const n=document.getElementById("main");o(n),n.append(r())})),a.append(c),a.append(s),a.append(d),t.appendChild(a),t},i=function(){const n=document.createElement("footer");n.classList.add("attribution");const e=document.createElement("p");e.innerHTML='The Assignment by <a href="https://www.theodinproject.com" target="_blank">The Odin Project</a>.',n.appendChild(e);const t=document.createElement("p");return t.innerHTML='&nbsp Part of <a href="https://www.theodinproject.com/paths/full-stack-javascript?" target="_blank">the Full Stack Javascript</a> pathway.',n.appendChild(t),n};var a=t(379),c=t.n(a),s=t(795),d=t.n(s),l=t(569),p=t.n(l),u=t(565),f=t.n(u),m=t(216),h=t.n(m),v=t(589),g=t.n(v),x=t(426),b={};b.styleTagTransform=g(),b.setAttributes=f(),b.insert=p().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=h(),c()(x.Z,b),x.Z&&x.Z.locals&&x.Z.locals,document.body.appendChild(function(){const e=document.createElement("div");e.classList.add("content"),e.id="content",e.appendChild(o());const t=document.createElement("main");return t.id="main",t.appendChild(n()),e.appendChild(t),e.appendChild(i()),e}())})()})();