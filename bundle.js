(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var i=t(81),o=t.n(i),r=t(645),c=t.n(r),a=t(667),d=t.n(a),s=new URL(t(485),t.b),l=c()(o()),p=d()(s);l.push([e.id,`@font-face {\n    font-family: PTSans-Regular;\n    src: url(${p});\n}\n\nbody {\n    background: black;\n    margin: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    width: 100vw;\n    font-family: PTSans-regular;\n    font-size: 1em;\n}\n\nvideo{\n    object-fit: cover;\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    top: 0;\n    left: 0;\n}\n\n.page-holder {\n    height: 95vh;\n    width: 97vw;\n\n    color: white;\n    font-size: 100px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n}\n\n#divisionTop {\n    height: 75%;\n    width: 100%;\n    color: black;\n    opacity: 10;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#divisionBottom {\n    height: 25%;\n    width: 100%;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#divLeft, #divRight {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n#divLeft {\n    color: bisque;\n}\n\n\n\n#divLeft h1, #divRight h1 {\n    margin: 0;\n    font-size: .5em;\n}\n\n#conditionDisplay {\n    margin: 0;\n    font-size: .3em;\n}\n\n.details-holder-left {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n}\n\n#tempDisp {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#tempDispLeft {\n    height: 100%;\n    width: 100%;\n}\n\n#tempDispRight {\n    height: 100%;\n    width: 100%;\n    \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.temp-disp-right-element {\n    height: 20%;\n    width: 100%;\n    font-size: 0.1em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#searchBar {\n    height: 6vh;\n    width: 25vw;\n    background: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#locationInputField {\n    height: 100%;\n    width: 80%;\n    padding: 0;\n    border: 0;\n    padding-left: 10px;\n}\n\n#locationSubmitButton {\n    height: 100%;\n    width: 20%;\n    padding: 0;\n    border: 0;\n    background: bisque;\n}\n\n#locationSubmitButton:hover {\n    background-color: beige;\n}\n\n#buttonUnitChange {\n    height: 5vh;\n    color: black;\n    background: bisque;\n    font-family: PTSans-Regular;\n}\n\n#buttonUnitChange:hover {\n    background: beige;\n}`,""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(i)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);i&&c[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var r={},c=[],a=0;a<e.length;a++){var d=e[a],s=i.base?d[0]+i.base:d[0],l=r[s]||0,p="".concat(s," ").concat(l);r[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=o(m,i);i.byIndex=a,n.splice(a,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=i(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var a=t(r[c]);n[a].references--}for(var d=i(e,o),s=0;s<r.length;s++){var l=t(r[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=d}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},485:(e,n,t)=>{e.exports=t.p+"77e92507394e2309d837.ttf"}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var r=n[i]={id:i,exports:{}};return e[i](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!e;)e=i[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),i=t(795),o=t.n(i),r=t(569),c=t.n(r),a=t(565),d=t.n(a),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),f={};async function h(e,n){const t=`https://api.weatherapi.com/v1/current.json?key=a8c47c71d28f40beb51203912230712&q=${e}&aqi=no`;(await fetch(t,{mode:"cors"})).json().then((function(e){var t,i,o;t=n,i=e.location,o=e.current,t.name=i.name,1==o.is_day?t.dayTime=!0:t.dayTime=!1,t.temp_C=o.temp_c,t.temp_F=o.temp_f,t.condition=o.condition,t.feelsLike_C=o.feelslike_c,t.feelsLike_F=o.feelslike_f,t.humidity=o.humidity,t.windDegree=o.wind_degree,t.wind_kph=o.wind_kph,t.localTime=i.localtime;const r=document.getElementById("nameDisplay"),c=document.getElementById("conditionDisplay"),a=document.getElementById("tempDispLeft"),d=document.getElementById("tempDispUnit"),s=document.getElementById("tempDispFeelsLike"),l=document.getElementById("tempDispHumidity");console.log(r),r.innerHTML=n.name,c.innerHTML=n.condition.text,a.innerHTML=n.temp_C,d.innerHTML="CELCIUS",s.innerHTML=`Feels like ${n.feelsLike_C}`,l.innerHTML=`Humidity: ${n.humidity}`}))}f.styleTagTransform=u(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,function(e,n){h("Bangalore",n),console.log("Loaded page content"),function(e,n){const t=document.createElement("div");t.id="divisionTop";const i=document.createElement("div");i.id="divisionBottom",n.appendChild(t),n.appendChild(i);const o=document.createElement("div");o.id="divLeft";const r=document.createElement("div");r.id="divRight",t.appendChild(o),t.appendChild(r);const c=document.createElement("div");c.classList.add("details-holder-left"),c.id="detailsHolderLeft",o.appendChild(c);const a=document.createElement("p");a.id="conditionDisplay";const d=document.createElement("h1");d.id="nameDisplay";const s=document.createElement("div");s.id="tempDisp",function(e){const n=document.createElement("div");n.id="tempDispLeft";const t=document.createElement("div");t.id="tempDispRight";const i=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div");i.classList.add("temp-disp-right-element"),o.classList.add("temp-disp-right-element"),r.classList.add("temp-disp-right-element"),i.id="tempDispUnit",o.id="tempDispFeelsLike",r.id="tempDispHumidity",t.appendChild(i),t.appendChild(o),t.appendChild(r),e.appendChild(n),e.appendChild(t)}(s);const l=document.createElement("button");l.id="buttonUnitChange",c.appendChild(a),c.appendChild(d),c.appendChild(s),c.appendChild(l),l.textContent="Change Unit";const p=document.createElement("div");p.id="searchBar",i.appendChild(p);const u=document.createElement("input"),m=document.createElement("button");u.type="text",u.id="locationInputField",u.placeholder="Location",m.id="locationSubmitButton",m.innerText="Submit",p.appendChild(u),p.appendChild(m)}(0,document.getElementById("pageHolder"));const t=document.getElementById("locationSubmitButton"),i=document.getElementById("locationInputField"),o=document.getElementById("buttonUnitChange");t.addEventListener("click",(()=>{console.log(i.value),h(i.value,n)})),o.addEventListener("click",(()=>{const e=document.getElementById("tempDispLeft"),t=document.getElementById("tempDispUnit"),i=document.getElementById("tempDispFeelsLike");n.isCelcius?(console.log(n.isCelcius),e.innerHTML=n.temp_F,t.innerHTML="FAHRENHEIT",i.innerHTML=n.feelsLike_F,n.isCelcius=!1):(console.log(n.isCelcius),e.innerHTML=n.temp_C,t.innerHTML="CELCIUS",i.innerHTML=n.feelsLike_C,n.isCelcius=!0)})),console.log(n)}(0,{condition:"",name:"",dayTime:!0,temp_C:"",temp_F:"",feelsLike_C:"",feelsLike_F:"",humidity:"",windDegree:"",wind_kph:"",localTime:"",isCelcius:!0}),document.getElementById("bgVid")})()})();