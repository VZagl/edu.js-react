/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={702:function(t,e,r){t.exports=function(){"use strict";function t(t){return"function"==typeof t}var e=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},n=0,o=void 0,i=void 0,s=function(t,e){f[n]=t,f[n+1]=e,2===(n+=2)&&(i?i(v):y())};var a="undefined"!=typeof window?window:void 0,c=a||{},l=c.MutationObserver||c.WebKitMutationObserver,u="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),d="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function h(){var t=setTimeout;return function(){return t(v,1)}}var f=new Array(1e3);function v(){for(var t=0;t<n;t+=2)(0,f[t])(f[t+1]),f[t]=void 0,f[t+1]=void 0;n=0}var m,_,g,p,y=void 0;function w(t,e){var r=this,n=new this.constructor(E);void 0===n[S]&&I(n);var o=r._state;if(o){var i=arguments[o-1];s((function(){return k(o,n,i,r._result)}))}else C(r,n,t,e);return n}function b(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(E);return x(e,t),e}y=u?function(){return process.nextTick(v)}:l?(_=0,g=new l(v),p=document.createTextNode(""),g.observe(p,{characterData:!0}),function(){p.data=_=++_%2}):d?((m=new MessageChannel).port1.onmessage=v,function(){return m.port2.postMessage(0)}):void 0===a?function(){try{var t=Function("return this")().require("vertx");return void 0!==(o=t.runOnLoop||t.runOnContext)?function(){o(v)}:h()}catch(t){return h()}}():h();var S=Math.random().toString(36).substring(2);function E(){}var L=void 0,M=1,A=2;function q(e,r,n){r.constructor===e.constructor&&n===w&&r.constructor.resolve===b?function(t,e){e._state===M?O(t,e._result):e._state===A?j(t,e._result):C(e,void 0,(function(e){return x(t,e)}),(function(e){return j(t,e)}))}(e,r):void 0===n?O(e,r):t(n)?function(t,e,r){s((function(t){var n=!1,o=function(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}(r,e,(function(r){n||(n=!0,e!==r?x(t,r):O(t,r))}),(function(e){n||(n=!0,j(t,e))}),t._label);!n&&o&&(n=!0,j(t,o))}),t)}(e,r,n):O(e,r)}function x(t,e){if(t===e)j(t,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(n=e),null===n||"object"!==o&&"function"!==o)O(t,e);else{var r=void 0;try{r=e.then}catch(e){return void j(t,e)}q(t,e,r)}var n,o}function T(t){t._onerror&&t._onerror(t._result),$(t)}function O(t,e){t._state===L&&(t._result=e,t._state=M,0!==t._subscribers.length&&s($,t))}function j(t,e){t._state===L&&(t._state=A,t._result=e,s(T,t))}function C(t,e,r,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+M]=r,o[i+A]=n,0===i&&t._state&&s($,t)}function $(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)n=e[s],o=e[s+r],n?k(r,n,o,i):o(i);t._subscribers.length=0}}function k(e,r,n,o){var i=t(n),s=void 0,a=void 0,c=!0;if(i){try{s=n(o)}catch(t){c=!1,a=t}if(r===s)return void j(r,new TypeError("A promises callback cannot return that same promise."))}else s=o;r._state!==L||(i&&c?x(r,s):!1===c?j(r,a):e===M?O(r,s):e===A&&j(r,s))}var D=0;function I(t){t[S]=D++,t._state=void 0,t._result=void 0,t._subscribers=[]}var N=function(){function t(t,r){this._instanceConstructor=t,this.promise=new t(E),this.promise[S]||I(this.promise),e(r)?(this.length=r.length,this._remaining=r.length,this._result=new Array(this.length),0===this.length?O(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),0===this._remaining&&O(this.promise,this._result))):j(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===L&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===b){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(t){s=!0,i=t}if(o===w&&t._state!==L)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(r===P){var a=new r(E);s?j(a,i):q(a,t,o),this._willSettleAt(a,e)}else this._willSettleAt(new r((function(e){return e(t)})),e)}else this._willSettleAt(n(t),e)},t.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===L&&(this._remaining--,t===A?j(n,r):this._result[e]=r),0===this._remaining&&O(n,this._result)},t.prototype._willSettleAt=function(t,e){var r=this;C(t,void 0,(function(t){return r._settledAt(M,e,t)}),(function(t){return r._settledAt(A,e,t)}))},t}();var P=function(){function e(t){this[S]=D++,this._result=this._state=void 0,this._subscribers=[],E!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){x(t,e)}),(function(e){j(t,e)}))}catch(e){j(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var r=this,n=r.constructor;return t(e)?r.then((function(t){return n.resolve(e()).then((function(){return t}))}),(function(t){return n.resolve(e()).then((function(){throw t}))})):r.then(e,e)},e}();return P.prototype.then=w,P.all=function(t){return new N(this,t).promise},P.race=function(t){var r=this;return e(t)?new r((function(e,n){for(var o=t.length,i=0;i<o;i++)r.resolve(t[i]).then(e,n)})):new r((function(t,e){return e(new TypeError("You must pass an array to race."))}))},P.resolve=b,P.reject=function(t){var e=new this(E);return j(e,t),e},P._setScheduler=function(t){i=t},P._setAsap=function(t){s=t},P._asap=s,P.polyfill=function(){var t=void 0;if(void 0!==r.g)t=r.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=P},P.Promise=P,P}()},746:()=>{window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var r=0;r<this.length;r++)t.call(e,this[r],r,this)})}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";r(746);r(702).polyfill(),window.addEventListener("DOMContentLoaded",(()=>{var t;(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"form";function e(t){const e=document.querySelector(".modal__dialog");e.classList.add("hide"),globalObj.modal.doModalOpen();const r=document.createElement("div");r.classList.add("modal__dialog"),r.innerHTML=`\n\t\t\t<div class="modal__content">\n\t\t\t\t<div data-modal-close class="modal__close">&times;</div>\n\t\t\t\t<div class="modal__title">${t}</div>\n\t\t\t</div>\n\t\t`,e.parentElement.append(r),setTimeout((()=>{r.remove(),e.classList.remove("hide"),globalObj.modal.doModalClose()}),4e3)}document.querySelectorAll(t).forEach((t=>{var r;(r=t).addEventListener("submit",(t=>{t.preventDefault();const n=document.createElement("img");n.src="img/form/spinner.svg",n.style.cssText="\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tmargin: 0 auto;\n\t\t\t\t",r.insertAdjacentElement("afterend",n);const o=new FormData(r);(async function(t,e){const r=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:e});return await r.json()})(0,JSON.stringify(Object.fromEntries(o.entries()))).then((t=>{console.log(t),e("Спасибо! Скоро мы с вами свяжемся"),r.reset()})).catch((()=>{e("Что-то пошло не так...")})).finally((()=>{n.remove()}))}))}))})("form"),globalObj.modal=(t=".modal",new class{#t=Object.create(null);constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".modal";this.vModalShowed=!1,this.vModalElement=document.querySelector(t),document.documentElement.addEventListener("click",(t=>this.onModalClick(t))),document.documentElement.addEventListener("keydown",(t=>this.onModalKeydown(t))),this.#t.eventScroll=()=>this.onModalScroll(),window.addEventListener("scroll",this.#t.eventScroll),this.timerId=setTimeout((()=>this.onModalTimer()),5e6)}onModalClick(t){t.target.hasAttribute("data-modal-show")&&this.doModalOpen(),t.target.hasAttribute("data-modal-close")&&this.doModalClose()}doModalClose(){this.vModalElement.classList.add("hide"),this.vModalElement.classList.remove("show"),document.body.style.overflow=""}doModalOpen(){clearTimeout(this.timerId),this.vModalElement.classList.add("show"),this.vModalElement.classList.remove("hide"),document.body.style.overflow="hidden",this.vModalShowed=!0}onModalKeydown(t){this.vModalElement.classList.contains("show")&&"Escape"===t.code&&this.doModalClose()}onModalScroll(){if(window.pageYOffset>=window.scrollMaxY-1){if(window.removeEventListener("scroll",this.#t.eventScroll),delete this.#t.eventScroll,this.vModalShowed)return;this.doModalOpen()}}onModalTimer(){this.vModalShowed||this.doModalOpen()}}(t)),function(){const t=document.querySelector("div.calculating"),e=t.querySelector("#gender"),r=e.querySelectorAll(".calculating__choose-item"),n=t.querySelector(".calculating__choose_medium"),o=n.querySelector("#height"),i=n.querySelector("#weight"),s=n.querySelector("#age"),a=t.querySelector(".calculating__choose_big"),c=a.querySelectorAll(".calculating__choose-item"),l=t.querySelector("div.calculating__result span");function u(){const t={height:d(o),weight:d(i),age:d(s)};r.forEach((e=>{e.classList.contains("calculating__choose-item_active")&&(t.gender=e.id)})),c.forEach((e=>{e.classList.contains("calculating__choose-item_active")&&(t.ratio=+e.getAttribute("data-ratio"),t.ratioId=e.id)}));let e="____";var n;t.height>0&&t.weight>0&&t.age>0&&(e="male"===t.gender?88.36+13.4*t.weight+4.8*t.height-5.7*t.age:447.6+9.2*t.weight+3.1*t.height-4.3*t.age,e*=t.ratio,e=Math.round(e)),l.textContent=e,n=t,localStorage.setItem("calcData",JSON.stringify(n))}function d(t){const e=+t.value;return t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="",e}!function(){if(!localStorage.getItem("calcData"))return;const t=JSON.parse(localStorage.getItem("calcData")),e=document.querySelector("div.calculating"),r=e.querySelector("#gender").querySelectorAll(".calculating__choose-item"),n=e.querySelector(".calculating__choose_medium"),o=n.querySelector("#height"),i=n.querySelector("#weight"),s=n.querySelector("#age"),a=e.querySelector(".calculating__choose_big").querySelectorAll(".calculating__choose-item");t.height&&(o.value=t.height),t.weight&&(i.value=t.weight),t.age&&(s.value=t.age),r.forEach((e=>{e.id===t.gender?e.classList.add("calculating__choose-item_active"):e.classList.remove("calculating__choose-item_active")})),a.forEach((e=>{e.id===t.ratioId?e.classList.add("calculating__choose-item_active"):e.classList.remove("calculating__choose-item_active")}))}(),u(),e.addEventListener("click",(t=>{t.target.classList.contains("calculating__choose-item")&&(r.forEach((e=>{e.classList.remove("calculating__choose-item_active"),e===t.target&&e.classList.add("calculating__choose-item_active")})),u())})),a.addEventListener("click",(t=>{t.target.classList.contains("calculating__choose-item")&&(c.forEach((e=>{e.classList.remove("calculating__choose-item_active"),e===t.target&&e.classList.add("calculating__choose-item_active")})),u())})),n.addEventListener("input",(()=>{u()}))}(),function(){class t{constructor(t,e,r,n,o,i){this.src=t,this.alt=e,this.title=r,this.descr=n,this.price=o;for(var s=arguments.length,a=new Array(s>6?s-6:0),c=6;c<s;c++)a[c-6]=arguments[c];this.classes=a,this.parent=document.querySelector(i),this.transfer=27,this.changeToUAH(),0===this.classes.length&&this.classes.push("menu__item")}changeToUAH(){this.price*=this.transfer}render(){const t=document.createElement("div");this.classes.forEach((e=>t.classList.add(e))),t.innerHTML=`\n\t\t\t\t\t<img src=${this.src} alt=${this.alt}>\n\t\t\t\t\t<h3 class="menu__item-subtitle">${this.title}</h3>\n\t\t\t\t\t<div class="menu__item-descr">${this.descr}</div>\n\t\t\t\t\t<div class="menu__item-divider"></div>\n\t\t\t\t\t<div class="menu__item-price">\n\t\t\t\t\t\t<div class="menu__item-cost">Цена:</div>\n\t\t\t\t\t\t<div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n\t\t\t\t\t</div>\n\t\t\t\t`,this.parent.append(t)}}(async function(t){const e=await fetch(t);if(!e.ok)throw new Error(`Could not fetch ${t}, status: ${e.status}`);return await e.json()})("http://localhost:3000/menu").then((e=>{e.forEach((e=>{let{img:r,altimg:n,title:o,descr:i,price:s}=e;new t(r,n,o,i,s,".menu .container").render()}))}))}(),function(t,e,r,n){const o=document.querySelectorAll(t),i=document.querySelectorAll(e),s=document.querySelector(r);function a(){i.forEach((t=>{t.classList.remove("show","fade"),t.classList.add("hide")})),o.forEach((t=>{t.classList.remove(n)}))}function c(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;i[t].classList.remove("hide"),i[t].classList.add("show","fade"),o[t].classList.add(n)}a(),c(),s.addEventListener("click",(e=>{const r=e.target;r&&r.classList.contains(t.slice(1))&&o.forEach(((t,e)=>{t==r&&(a(),c(e))}))}))}(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(t,e){const r=document.querySelector(t),n=r.querySelector("#days"),o=r.querySelector("#hours"),i=r.querySelector("#minutes"),s=r.querySelector("#seconds"),a=setInterval(c,1e3);function c(){const t=function(t){let e=Date.parse(t)-Date.now();e<0&&(e=0);const r=36e5;return{total:e,days:Math.floor(e/864e5),hours:Math.floor(e/r%24),minuts:Math.floor(e/6e4%60),seconds:Math.floor(e/1e3%60)}}(e);n.innerText=l(t.days),o.innerText=l(t.hours),i.innerText=l(t.minuts),s.innerText=l(t.seconds),t.total<=0&&clearInterval(a)}function l(t){return t<0||t>=10?`${t}`:`0${t}`}c()}(".timer","2023-06-22"),function(t){let{container:e,slide:r,nextArrow:n,prevArrow:o,totalCounter:i,currentCounter:s,wrapper:a,field:c}=t;const l=document.querySelector(e),u=l.querySelector(o),d=l.querySelector(n),h=l.querySelector(a),f=l.querySelector(c),v=+window.getComputedStyle(l).width.replace(/\D/g,""),m=l.querySelector(s),_={current:1,slides:[],dots:[]};_.slides=l.querySelectorAll(r),l.querySelector(i).textContent=`${_.slides.length<10?"0":""}${_.slides.length}`,f.style.width=100*_.slides.length+"%",f.style.display="flex",f.style.transition="0.5s all",h.style.overflow="hidden",_.slides.forEach((t=>{t.style.width=v})),l.style.position="relative";const g=document.createElement("ol");g.classList.add("carousel-indicators"),l.append(g);for(let t=0;t<_.slides.length;t++){const e=document.createElement("li");e.setAttribute("data-slide-to",t+1),e.classList.add("dot"),g.append(e),_.dots.push(e)}function p(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_.current;_.dots[_.current-1].classList.remove("dot-active"),_.current=t,t<1&&(_.current=_.slides.length),t>_.slides.length&&(_.current=1),_.dots[_.current-1].classList.add("dot-active"),f.style.transform=`translateX(-${(_.current-1)*v}px)`,m.textContent=`${_.current<10?"0":""}${_.current}`}g.addEventListener("click",(t=>{t.target.hasAttribute("data-slide-to")&&p(+t.target.getAttribute("data-slide-to"))})),u.addEventListener("click",(()=>p(_.current-1))),d.addEventListener("click",(()=>p(_.current+1))),p()}({container:"div.offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})})),console.log(">>> globalObj =",globalObj)})()})();
//# sourceMappingURL=bundle.js.map