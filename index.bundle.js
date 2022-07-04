(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(81),i=t.n(a),c=t(645),o=t.n(c),r=t(667),d=t.n(r),s=new URL(t(169),t.b),l=o()(i());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap);"]);var p=d()(s);l.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nhtml {\n  box-sizing: border-box;\n  font-size: 16px;\n  font-family: 'Ubuntu', sans-serif;\n}\n\n/* HEADER */\nheader {\n  display: flex;\n  width: 600px;\n  height: 80px;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 1.5rem;\n}\n\nh1 > span {\n  text-decoration: underline overline;\n}\n\nh1 {\n  font-size: 3rem;\n}\n\nh2 {\n  text-decoration: underline overline;\n}\n\nh4 {\n  font-size: 1.3rem;\n  margin-bottom: 10px;\n}\n\n.nav-list {\n  list-style: none;\n  display: flex;\n  width: 200px;\n  justify-content: space-between;\n  margin: 0 0;\n  padding: 0;\n  font-size: 1rem;\n}\n\nul > li {\n  cursor: pointer;\n  position: relative;\n}\n\nul > li:hover {\n  font-weight: 500;\n  text-decoration: underline;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* MAIN */\n\nmain {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  background: center / cover no-repeat url("+p+');\n}\n\n.home-shade-container {\n  position: relative;\n  margin-top: 130px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  height: 600px;\n  width: 600px;\n}\n\n.shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(70, 70, 70, 0.8);\n  opacity: 0.7;\n  border-radius: 5px;\n}\n\n.text {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content:space-between;\n  color: #fff;\n  font-size: 1.4rem;\n  padding: 50px;\n  text-align: center;\n}\n\n/* MENU SECTION */\n\n.menu-shade-container {\n  position: relative;\n  margin-top: 130px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  height: 600px;\n  width: 1200px;\n}\n\n.cards {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  padding: 20px;\n}\n\n.card {\n  width: 200px;\n  height: 200px;\n  margin: 10px;\n  padding: 10px;\n  background-color: rgba(70, 70, 70, 0.5);\n  border: 1px solid rgba(70, 70, 70, 1);\n  border-radius: 4px;\n  display: flex;\n  flex-direction: column;\n  justify-content:space-between;\n  align-items: center;\n}\n\n.card-img {\n  width: 100%;\n  height: 100px;\n  object-fit: cover;\n}\n\n.card > h3 {\n  font-size: 1.2rem;\n}\n\n.card-footer {\n  font-size: 0.8rem;\n  display: flex;\n  justify-content: space-between;\n}\n\n.card-descrip {\n  display: flex;\n  text-align: left;\n  margin-right: 5px;\n}\n\n.card-descrip {\n  font-size: 0.7rem;\n}\n\n.card-price {\n  display: flex;\n  justify-content: end;\n  align-items: flex-end;\n  height: 100%;\n  font-size: 1rem;\n}\n\n.card-price > p::before{\n  content: "$";\n}\n\n/* CONTACT SECTION */\n\n.contact-text-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content:flex-start;\n  color: #fff;\n  padding: 50px;\n  text-align: center;\n}\n\n.contact-details {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  text-align: left;\n  width: 90%;\n  padding: 10px;\n}\n\n.contact-text {\n  width: 50%;\n  height: 400px;\n  margin: 10px;;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.contact-map {\n  width: 50%;\n  height: 100%;\n  padding: 10px;\n  margin: 10px;\n}\n\n.socials {\n  height: 80px;\n}\n\n.social-icon {\n  width: 24px;\n  height: 24px;\n  margin: 10px;\n  cursor: pointer;\n}\n\n.social-icon:hover {\n  width: 26px;\n  height: 26px;\n  margin: 8px;\n}\n\n/* FOOTER SECTION */\n\n.attribution {\n  font-size: 1rem;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 40px;\n  background-color: #fff;\n}\n\n.attribution a {\n  color: hsl(228, 45%, 44%);\n}',""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,i,c){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var r=0;r<this.length;r++){var d=this[r][0];null!=d&&(o[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&o[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var c={},o=[],r=0;r<e.length;r++){var d=e[r],s=a.base?d[0]+a.base:d[0],l=c[s]||0,p="".concat(s," ").concat(l);c[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=i(m,a);a.byIndex=r,n.splice(r,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function i(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,i){var c=a(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<c.length;o++){var r=t(c[o]);n[r].references--}for(var d=a(e,i),s=0;s<c.length;s++){var l=t(c[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}c=d}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,i&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},169:(e,n,t)=>{e.exports=t.p+"65cac61f18d5935ab7b7.jpg"}},n={};function t(a){var i=n[a];if(void 0!==i)return i.exports;var c=n[a]={id:a,exports:{}};return e[a](c,c.exports,t),c.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=function(){const e=document.createElement("div");e.classList.add("home-shade-container");const n=document.createElement("div"),t=document.createElement("div");n.classList.add("shade"),t.classList.add("text"),t.id="text";const a=document.createElement("h1"),i=document.createElement("p"),c=document.createElement("p");return a.innerHTML="<span>Z</span>eus's <span>K</span>itchen",t.append(a),i.textContent="An authentic Greek restaurant offering an eating experience like no other.",c.textContent="Dine in only.",t.append(i),t.append(c),e.appendChild(n),e.appendChild(t),e},n=t.p+"0671f27e68f90a25c9d5.jpg",a=t.p+"ce30dae655d2928900bb.jpg",i=t.p+"d29e7a15faf5cd03e357.jpg",c=t.p+"5c7dbf12113fea09df22.jpg",o=t.p+"b6a005b6f0654e46bde5.jpg",r=t.p+"f70dcf05c9920e718e4b.jpg",d=t.p+"11cb3a597b1fbe99e5cf.jpg",s=t.p+"1ba4295ad8ded8622a18.jpg",l=function(){const e=document.createElement("div");e.classList.add("menu-shade-container");const t=document.createElement("div"),l=document.createElement("div");t.classList.add("shade"),l.classList.add("text"),l.id="text",e.appendChild(t),e.appendChild(l);const p=[{title:"Grilled Chicken Skewers",filePath:n,description:"Marinated grilled chicken skewers.",price:"32.00"},{title:"Gyros Wrap",filePath:a,description:"Gyros wrapped in a pita bread",price:"25.00"},{title:"Assorted Food Platter",filePath:i,description:"Assorted platter with souvlaki, rice & pita",price:"28.00"},{title:"Lamb Meatball Platter",filePath:c,description:"100% Lamb meatball platter",price:"26.00"},{title:"Souvlaki",filePath:o,description:"Souvlaki with fried potatoes, tzatziki dip & pita",price:"29.00"},{title:"Arugula Fig Salad",filePath:r,description:"Arugula Fig Salad with Walnuts and Feta Cheese",price:"24.00"},{title:"Grilled Eggplant",filePath:d,description:"Grilled Eggplant stuffed with couscous, tomatoes, cilantro with ...",price:"27.00"},{title:"Grilled Fish",filePath:s,description:"Grilled Fish with Squid & Totatoes served with Tzatziki Sauce",price:"23.00"}],u=document.createElement("h1");u.innerHTML="<span>M</span>enu",l.appendChild(u);const m=document.createElement("div");m.classList.add("cards"),l.appendChild(m);for(let e=0;e<p.length;e+=1){const n=document.createElement("div");n.classList.add("card");const t=document.createElement("h3");t.textContent=p[e].title,n.appendChild(t);const a=new Image;a.classList.add("card-img"),a.src=p[e].filePath,n.appendChild(a);const i=document.createElement("div");i.classList.add("card-footer"),n.appendChild(i);const c=document.createElement("div");c.classList.add("card-descrip"),i.appendChild(c);const o=document.createElement("p");o.textContent=p[e].description,c.appendChild(o);const r=document.createElement("div");r.classList.add("card-price");const d=document.createElement("p");d.textContent=p[e].price,r.appendChild(d),i.appendChild(r),m.appendChild(n)}return e},p=t.p+"84318d1245b58f3c15c8.svg",u=t.p+"62976c081dee9df5e089.svg",m=t.p+"3f986527d185ed9ef19e.svg",f=function(){const e=document.createElement("div");e.classList.add("menu-shade-container");const n=document.createElement("div"),t=document.createElement("div");n.classList.add("shade"),t.classList.add("contact-text-container"),e.appendChild(n),e.appendChild(t);const a=document.createElement("h1");a.innerHTML="<span>C</span>ontact",t.append(a);const i=document.createElement("div");i.classList.add("contact-details"),t.append(i);const c=document.createElement("div");c.classList.add("contact-text");const o=document.createElement("div"),r=document.createElement("h4");r.textContent="Open Hours",o.append(r);const d=document.createElement("p");d.textContent="11:00am till late.",o.append(d),c.append(o);const s=document.createElement("div");s.classList.add("phone-address");const l=document.createElement("h4");l.textContent="Phone",s.append(l);const f=document.createElement("p");f.textContent="05 5555 5555",s.append(f),c.append(s);const h=document.createElement("div");h.classList.add("contact-address");const g=document.createElement("h4");g.textContent="Address",h.append(g);const x=document.createElement("p");x.textContent="5555 Ocean Street Maroochydore Qld",h.append(x),c.append(h);const v=document.createElement("div");v.classList.add("contact-socials");const b=document.createElement("h4");b.textContent="Socials",v.classList.add("socials"),v.append(b);const E=document.createElement("p"),y=document.createElement("img");y.setAttribute("src",p),y.classList.add("social-icon"),E.append(y);const w=document.createElement("img");w.setAttribute("src",u),w.classList.add("social-icon"),E.append(w);const C=document.createElement("img");C.setAttribute("src",m),C.classList.add("social-icon"),E.append(C),v.append(E),c.append(v);const L=document.createElement("div");L.classList.add("contact-message");const j=document.createElement("h4");j.textContent="Message",L.append(j),c.append(L),i.append(c);const T=document.createElement("div");T.classList.add("contact-map");const S=document.createElement("h4");S.textContent="Map",T.append(S);const k=document.createElement("div");return k.id="map-display",T.append(k),i.append(T),e},h=function(){const n=document.createElement("header");function t(e){for(;e.firstChild;)e.removeChild(e.firstChild)}const a=document.createElement("h2");a.textContent="ZK",n.appendChild(a);const i=document.createElement("ul");i.classList.add("nav-list");const c=document.createElement("li"),o=document.createElement("li"),r=document.createElement("li");return c.textContent="Home",o.textContent="Menu",r.textContent="Contact",c.addEventListener("click",(function(){const n=document.getElementById("main");t(n),n.append(e())})),o.addEventListener("click",(function(){const e=document.getElementById("main");t(e),e.append(l())})),r.addEventListener("click",(function(){const e=document.getElementById("main");t(e),e.append(f())})),i.append(c),i.append(o),i.append(r),n.appendChild(i),n},g=function(){const e=document.createElement("footer");e.classList.add("attribution");const n=document.createElement("p");n.innerHTML='The Assignment by <a href="https://www.theodinproject.com" target="_blank">The Odin Project</a>.',e.appendChild(n);const t=document.createElement("p");return t.innerHTML='&nbsp Part of <a href="https://www.theodinproject.com/paths/full-stack-javascript?" target="_blank">the Full Stack Javascript</a> pathway.',e.appendChild(t),e};var x=t(379),v=t.n(x),b=t(795),E=t.n(b),y=t(569),w=t.n(y),C=t(565),L=t.n(C),j=t(216),T=t.n(j),S=t(589),k=t.n(S),M=t(426),A={};A.styleTagTransform=k(),A.setAttributes=L(),A.insert=w().bind(null,"head"),A.domAPI=E(),A.insertStyleElement=T(),v()(M.Z,A),M.Z&&M.Z.locals&&M.Z.locals,document.body.appendChild(function(){const n=document.createElement("div");n.classList.add("content"),n.id="content",n.appendChild(h());const t=document.createElement("main");return t.id="main",t.appendChild(e()),n.appendChild(t),n.appendChild(g()),n}())})()})();