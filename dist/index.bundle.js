(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var i=t(81),r=t.n(i),o=t(645),a=t.n(o),c=t(667),s=t.n(c),d=new URL(t(323),t.b),p=a()(r());p.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap);"]);var l=s()(d);p.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 16px;\n  font-family: 'Ubuntu', sans-serif;\n}\n\n/* HEADER */\nheader {\n  display: flex;\n  width: 600px;\n  height: 80px;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 1.5rem;\n}\n\nh1 > span {\n  text-decoration: underline overline;\n}\n\nh1 {\n  font-size: 3rem;\n}\n\nh2 {\n  text-decoration: underline overline;\n}\n\n.nav-list {\n  list-style: none;\n  display: flex;\n  width: 200px;\n  justify-content: space-between;\n  margin: 0 0;\n  padding: 0;\n  font-size: 1rem;\n}\n\nul > li {\n  cursor: pointer;\n  position: relative;\n}\n\nul > li:hover {\n  font-weight: 500;\n  text-decoration: underline;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* MAIN */\n\nmain {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  background: center / cover no-repeat url("+l+');\n}\n\n.home-shade-container {\n  position: relative;\n  margin-top: 130px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  height: 600px;\n  width: 600px;\n}\n\n.shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(70, 70, 70, 0.8);\n  opacity: 0.7;\n  border-radius: 5px;\n}\n\n.text {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content:space-between;\n  color: #fff;\n  font-size: 1.4rem;\n  padding: 50px;\n  text-align: center;\n}\n\n/* MENU SECTION */\n\n.menu-shade-container {\n  position: relative;\n  margin-top: 130px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  height: 600px;\n  width: 1200px;\n}\n\n.cards {\n  display: flex;\n  /* flex-direction: column; */\n  justify-content: space-around;\n  flex-wrap: wrap;\n  padding: 20px;\n}\n\n.card {\n  width: 200px;\n  height: 200px;\n  margin: 10px;\n  padding: 10px;\n  background-color: rgba(70, 70, 70, 0.5);\n  border: 1px solid rgba(70, 70, 70, 1);\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  justify-content:space-between;\n  align-items: center;\n}\n\n.card-img {\n  width: 100%;\n  height: 100px;\n}\n\n.card > h3 {\n  font-size: 1.2rem;\n}\n\n.card-footer {\n  font-size: 0.8rem;\n  display: flex;\n  justify-content: space-between;\n}\n\n.card-descrip {\n  display: flex;\n  text-align: left;\n  margin-right: 5px;\n}\n\n.card-descrip {\n  font-size: 0.7rem;\n}\n\n.card-price {\n  display: flex;\n  justify-content: end;\n  align-items: flex-end;\n  height: 100%;\n  font-size: 1rem;\n}\n\n.card-price > p::before{\n  content: "$";\n}\n\n/* FOOTER SECTION */\n\n.attribution {\n  font-size: 1rem;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 40px;\n  background-color: #fff;\n}\n\n.attribution a {\n  color: hsl(228, 45%, 44%);\n}',""]);const u=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);i&&a[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),n.push(p))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var o={},a=[],c=0;c<e.length;c++){var s=e[c],d=i.base?s[0]+i.base:s[0],p=o[d]||0,l="".concat(d," ").concat(p);o[d]=p+1;var u=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=r(f,i);i.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=i(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var c=t(o[a]);n[c].references--}for(var s=i(e,r),d=0;d<o.length;d++){var p=t(o[d]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,r&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},323:(e,n,t)=>{e.exports=t.p+"65cac61f18d5935ab7b7.jpg"}},n={};function t(i){var r=n[i];if(void 0!==r)return r.exports;var o=n[i]={id:i,exports:{}};return e[i](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=function(){const e=document.createElement("div");e.classList.add("home-shade-container");const n=document.createElement("div"),t=document.createElement("div");n.classList.add("shade"),t.classList.add("text"),t.id="text";const i=document.createElement("h1"),r=document.createElement("p"),o=document.createElement("p");return i.innerHTML="<span>Z</span>eus's <span>K</span>itchen",t.append(i),r.textContent="An authentic Greek restaurant offering an eating experience like no other.",o.textContent="Dine in only.",t.append(r),t.append(o),e.appendChild(n),e.appendChild(t),e},n=function(){const e=document.createElement("div");e.classList.add("menu-shade-container");const n=document.createElement("div"),t=document.createElement("div");n.classList.add("shade"),t.classList.add("text"),t.id="text",e.appendChild(n),e.appendChild(t);const i=[{title:"item1",filePath:"./xxx.png",description:"A brief description about the dish",price:"20.00"},{title:"item2",filePath:"./xxx.png",description:"A brief description about the dish",price:"20.00"},{title:"item3",filePath:"./xxx.png",description:"A brief description about the dish",price:"20.00"},{title:"item4",filePath:"./xxx.png",description:"A brief description about the dish",price:"20.00"},{title:"item5",filePath:"./xxx.png",description:"A brief description about the dish",price:"20.00"},{title:"item6",filePath:"./xxx.png",description:"A brief description about the dish",price:"20.00"},{title:"item7",filePath:"./xxx.png",description:"A brief description about the dish",price:"20.00"},{title:"item8",filePath:"./xxx.png",description:"A brief description about the dish",price:"20.00"}],r=document.createElement("h1");r.innerHTML="<span>M</span>enu",t.append(r);const o=document.createElement("div");o.classList.add("cards"),t.append(o);for(let e=0;e<i.length;e+=1){const n=document.createElement("div");n.classList.add("card");const t=document.createElement("h3");t.textContent=i[e].title,n.append(t);const r=document.createElement("img");r.setAttribute("src",i[e].filePath),r.classList.add("card-img"),n.append(r);const a=document.createElement("div");a.classList.add("card-footer"),n.append(a);const c=document.createElement("div");c.classList.add("card-descrip"),a.append(c);const s=document.createElement("p");s.textContent=i[e].description,c.append(s);const d=document.createElement("div");d.classList.add("card-price");const p=document.createElement("p");p.textContent=i[e].price,d.append(p),a.append(d),o.append(n)}return e},i=function(){const e=document.createElement("div");return e.textContent="from inside contact",e},r=function(){const t=document.createElement("header");function r(e){for(;e.firstChild;)e.removeChild(e.firstChild)}const o=document.createElement("h2");o.textContent="ZK",t.appendChild(o);const a=document.createElement("ul");a.classList.add("nav-list");const c=document.createElement("li"),s=document.createElement("li"),d=document.createElement("li");return c.textContent="Home",s.textContent="Menu",d.textContent="Contact",c.addEventListener("click",(function(){const n=document.getElementById("main");r(n),n.append(e())})),s.addEventListener("click",(function(){const e=document.getElementById("main");r(e),e.append(n())})),d.addEventListener("click",(function(){const e=document.getElementById("main");r(e),e.append(i())})),a.append(c),a.append(s),a.append(d),t.appendChild(a),t},o=function(){const e=document.createElement("footer");e.classList.add("attribution");const n=document.createElement("p");n.innerHTML='The Assignment by <a href="https://www.theodinproject.com" target="_blank">The Odin Project</a>.',e.appendChild(n);const t=document.createElement("p");return t.innerHTML='&nbsp Part of <a href="https://www.theodinproject.com/paths/full-stack-javascript?" target="_blank">the Full Stack Javascript</a> pathway.',e.appendChild(t),e};var a=t(379),c=t.n(a),s=t(795),d=t.n(s),p=t(569),l=t.n(p),u=t(565),f=t.n(u),m=t(216),h=t.n(m),x=t(589),g=t.n(x),v=t(426),b={};b.styleTagTransform=g(),b.setAttributes=f(),b.insert=l().bind(null,"head"),b.domAPI=d(),b.insertStyleElement=h(),c()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals,document.body.appendChild(function(){const n=document.createElement("div");n.classList.add("content"),n.id="content",n.appendChild(r());const t=document.createElement("main");return t.id="main",t.appendChild(e()),n.appendChild(t),n.appendChild(o()),n}())})()})();