!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(8);function o(e){setTimeout(()=>{if(document.querySelector(".clipModal").classList.contains("clipModalShow"))if("click"===e.type){if(e.target!==document.querySelector(".clipModal")&&e.target!==document.querySelector(".clipModal").childNodes[0]&&e.target!==document.querySelector(".clipModal").childNodes[1]&&e.target!==document.querySelector(".clipModal").childNodes[2]&&e.target!==document.querySelector(".clipModal").childNodes[3]&&e.target!==document.querySelector(".clipModal").childNodes[4]&&e.target!==document.querySelector(".clipModal").childNodes[5]){document.querySelector(".clipModal").classList.remove("clipModalShow"),document.querySelector("html").onclick=null,document.querySelector("#iframe").src=""}}else"touchend"===e.type&&setTimeout(()=>{document.querySelector(".clipModal").classList.remove("clipModalShow"),document.querySelector("html").onclick=null,document.querySelector("#iframe").src="",document.querySelector(".clipModal").classList.remove("right"),document.querySelector(".clipModal").classList.remove("left")},500)},5)}function i(){const e=document.querySelector(".clipModal");e.classList.add("clipModalShow"),document.querySelector("#iframe").src=`https://www.youtube.com/embed/${this.id}`;const n=document.querySelectorAll(`#${this.id}`);e.children[1].innerHTML=n[1].innerHTML,e.children[2].innerHTML=n[2].innerHTML,e.children[3].innerHTML=n[3].innerHTML,e.children[4].innerHTML=n[4].innerHTML,e.children[5].innerHTML=n[5].innerHTML,i.innerHTML=setTimeout(()=>{document.querySelector("html").onclick=o},5),function(){let e=0,n=0;const t=document.querySelector(".clipModal");function i(){n<e&&(document.querySelector(".clipModal").classList.add("left"),o(event)),n>e&&(document.querySelector(".clipModal").classList.add("right"),o(event))}t.addEventListener("touchstart",n=>{e=n.changedTouches[0].screenX},!1),t.addEventListener("touchend",e=>{n=e.changedTouches[0].screenX,i()},!1)}()}function r(e){let n;event.preventDefault();const t=document.querySelector("#searchKey").value;""!==e?n=`https://www.googleapis.com/youtube/v3/search?pageToken=${e}&key=AIzaSyCeY1fuTnv0Yhql8rHfiKH0OG3_oADUJgE&type=video&part=snippet&maxResults=15&q=`:(document.querySelector(".clipModal").classList.remove("clipModalShow"),n="https://www.googleapis.com/youtube/v3/search?key=AIzaSyCeY1fuTnv0Yhql8rHfiKH0OG3_oADUJgE&type=video&part=snippet&maxResults=15&q="),fetch(n+t).then(e=>{200===e.status?e.json().then(e=>{r.forNextPageToken=e.nextPageToken;const n=e;let t="";for(const n in e.items)t+=`${e.items[n].id.videoId},`;fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${t}&key=AIzaSyCeY1fuTnv0Yhql8rHfiKH0OG3_oADUJgE`).then(e=>{200===e.status?e.json().then(e=>{!function(e,n){document.querySelector(".progress-bar").classList.remove("rotate");const t=document.querySelector(".response");for(const o in e.items){const r=e.items[o].snippet.publishedAt.substr(0,10),c=document.createElement("div");c.className="clip-component",t.appendChild(c);const s=document.createElement("img");s.src=e.items[o].snippet.thumbnails.medium.url,s.className="clip-img",s.id=e.items[o].id.videoId,s.onclick=i,c.appendChild(s);const a=document.createElement("div");a.className="clip-title",a.id=e.items[o].id.videoId,a.textContent=e.items[o].snippet.title,c.appendChild(a);const l=document.createElement("div");l.className="clip-info channel-title",l.id=e.items[o].id.videoId,l.textContent=e.items[o].snippet.channelTitle,c.appendChild(l);const d=document.createElement("div");d.className="clip-info",d.id=e.items[o].id.videoId,d.textContent=`${n.items[o].statistics.viewCount} views`,c.appendChild(d);const u=document.createElement("div");u.className="clip-info clip-desription",u.id=e.items[o].id.videoId,u.textContent=e.items[o].snippet.description,c.appendChild(u);const p=document.createElement("div");p.className="clip-info clip-published",p.id=e.items[o].id.videoId,p.textContent=r,c.appendChild(p)}}(n,e)}):console.log(`Looks like there was a problem. Status Code: ${e.status}`)}).catch(e=>{console.log("Fetch Error :-S",e)})}):console.log(`Looks like there was a problem. Status Code: ${e.status}`)}).catch(e=>{console.log("Fetch Error :-S",e)})}function c(){document.querySelector(".progress-bar").classList.add("rotate");document.body.scrollTop=0,document.documentElement.scrollTop=0,document.querySelector(".response").innerHTML="",r("")}!function(){const e=document.createElement("header");e.className="header",e.innerHTML='<div class="wrapper">    <form class="search-form" autocomplete="off" name="search" method="post">      <input class="search-input" type="text" id="searchKey" name="searchKey">      <button class="search-submit" type="submit">        Search</button>    </form>  </div>',document.querySelector("body").appendChild(e),document.querySelector(".search-form").onsubmit=c}(),function(){const e=document.createElement("main");e.className="main",e.innerHTML='<div class="wrapper"> <div class="response"> </div> </div>';const n=document.querySelector("body");n.appendChild(e);const t=document.createElement("img");t.className="progress-bar",t.src="spinner-of-dots.png",n.appendChild(t)}(),function(){const e=document.createElement("div");e.className="clipModal",document.querySelector(".main").appendChild(e);const n=document.createElement("iframe");n.className="iframe",n.id="iframe",n.style.width="100%",n.style.height="75%",n.frameBorder="0",n.allowFullscreen="true",e.appendChild(n);const t=document.createElement("div");t.className="clip-title",t.textContent="",e.appendChild(t);const o=document.createElement("div");o.className="clip-info channel-title",o.textContent="",e.appendChild(o);const i=document.createElement("div");i.className="clip-info",i.textContent="",e.appendChild(i);const r=document.createElement("div");r.className="clip-info clip-desription",r.textContent="",e.appendChild(r);const c=document.createElement("div");c.className="clip-info clip-published",c.textContent="",e.appendChild(c)}(),window.onscroll=function(){const e=document.documentElement.offsetHeight,n=window.innerHeight,t=window.scrollY||window.pageYOffset||document.body.scrollTop,o=document.documentElement.scrollTop||0;e-1<=n+(t+(document.documentElement&&o))&&(document.querySelector(".progress-bar").classList.add("rotate"),r(r.forNextPageToken))}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,o=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var i,r=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,n,t){var o,i,r={},c=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),s=function(e){var n={};return function(e){if("function"==typeof e)return e();if(void 0===n[e]){var t=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}}(),a=null,l=0,d=[],u=t(1);function p(e,n){for(var t=0;t<e.length;t++){var o=e[t],i=r[o.id];if(i){i.refs++;for(var c=0;c<i.parts.length;c++)i.parts[c](o.parts[c]);for(;c<o.parts.length;c++)i.parts.push(w(o.parts[c],n))}else{var s=[];for(c=0;c<o.parts.length;c++)s.push(w(o.parts[c],n));r[o.id]={id:o.id,refs:1,parts:s}}}}function f(e,n){for(var t=[],o={},i=0;i<e.length;i++){var r=e[i],c=n.base?r[0]+n.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};o[c]?o[c].parts.push(s):t.push(o[c]={id:c,parts:[s]})}return t}function m(e,n){var t=s(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=d[d.length-1];if("top"===e.insertAt)o?o.nextSibling?t.insertBefore(n,o.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),d.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(e.insertInto+" "+e.insertAt.before);t.insertBefore(n,i)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=d.indexOf(e);n>=0&&d.splice(n,1)}function v(e){var n=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),y(n,e.attrs),m(e,n),n}function y(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function w(e,n){var t,o,i,r;if(n.transform&&e.css){if(!(r=n.transform(e.css)))return function(){};e.css=r}if(n.singleton){var c=l++;t=a||(a=v(n)),o=x.bind(null,t,c,!1),i=x.bind(null,t,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(n,e.attrs),m(e,n),n}(n),o=function(e,n,t){var o=t.css,i=t.sourceMap,r=void 0===n.convertToAbsoluteUrls&&i;(n.convertToAbsoluteUrls||r)&&(o=u(o));i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var c=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(c),s&&URL.revokeObjectURL(s)}.bind(null,t,n),i=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=v(n),o=function(e,n){var t=n.css,o=n.media;o&&e.setAttribute("media",o);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){h(t)});return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else i()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=c()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=f(e,n);return p(t,n),function(e){for(var o=[],i=0;i<t.length;i++){var c=t[i];(s=r[c.id]).refs--,o.push(s)}e&&p(f(e,n),n);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var a=0;a<s.parts.length;a++)s.parts[a]();delete r[s.id]}}}};var g,b=(g=[],function(e,n){return g[e]=n,g.filter(Boolean).join("\n")});function x(e,n,t,o){var i=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=b(n,i);else{var r=document.createTextNode(i),c=e.childNodes;c[n]&&e.removeChild(c[n]),c.length?e.insertBefore(r,c[n]):e.appendChild(r)}}},function(e,n,t){e.exports=t.p+"fc84e998bc29b297ea20321e4c90b6ed.ttf"},function(e,n,t){e.exports=t.p+"3e1af3ef546b9e6ecef9f3ba197bf7d2.ttf"},function(e,n){e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var i=(c=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),r=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[t].concat(r).concat([i]).join("\n")}var c;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<e.length;i++){var c=e[i];"number"==typeof c[0]&&o[c[0]]||(t&&!c[2]?c[2]=t:t&&(c[2]="("+c[2]+") and ("+t+")"),n.push(c))}},n}},function(e,n){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,n,t){var o=t(6);(e.exports=t(5)(!1)).push([e.i,'@font-face {\n    font-family: "Roboto";\n    src: url('+o(t(4))+');\n}\n@font-face {\n    font-family: "Roboto-light";\n    src: url('+o(t(3))+");\n}\n\nhtml{\n    width: 100%;\n    margin: 0;\n    padding: 0;\n}\nbody{\n    width: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n.wrapper{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 80%;\n    height: 100%;\n}@media screen and (max-device-width: 1200px){\n    .wrapper{\n        width: 90%;\n    }\n}\n\n.header{\n    top: -1px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 5vw;\n    position: fixed;\n    background-color: #cacaca;\n    box-shadow: 0 0 10px rgba(0,0,0,0.5);\n}@media screen and (max-device-width: 1200px){\n    .header{\n        height: 16vw;\n    }\n}\n\n.search-form{\n    padding-left: 10px;\n    padding-right: 10px;\n\n    width: 40%;\n    height: 2.5vw;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n}@media screen and (max-device-width: 1200px){\n    .search-form{\n        width: 80%;\n        height: 7vw;\n    }\n}\n\n.search-input{\n    border: 0;\n    width: 80%;\n    font-size: 1.2vw;\n}@media screen and (max-device-width: 1200px){\n    .search-input{\n        font-size: 4vw;\n    }\n}\n\n.search-submit{\n    border: 0;\n    background-color: #df3b08;\n    font-size: 1.2vw;\n    color: white;\n}@media screen and (max-device-width: 1200px){\n    .search-submit{\n        font-size: 4vw;\n    }\n}\n.search-submit:hover{\n    cursor: pointer;\n    background-color: black;\n}\n\n.main{\n    margin-top: 5vw;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    width: 100%;\n    font-family: Roboto-light, sans-serif;\n}@media screen and (max-device-width: 1200px){\n    .main{\n        margin-top: 17vw;\n    }\n}\n\n.response{\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    align-items: start;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    padding-bottom: 5px;\n}\n\n.clip-component{\n    width: 25%;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    position: static;\n    margin: 2vw;\n}@media screen and (max-device-width: 1200px){\n    .clip-component {\n        width: 40%;\n    }\n}@media screen and (max-device-width: 900px){\n    .clip-component {\n        width: 100%;\n    }\n}\n\n.clip-img{\n    width: 100%;\n}\n\n.clip-img:hover{\n    height: 98%;\n    width:98%;\n    cursor: pointer;\n    border: 2px solid red;\n}\n\n.clip-title{\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    font-weight: bold;\n    font-size: 1.5vw;\n}\n@media screen and (max-device-width: 1200px){\n    .clip-title{\n        font-size: 3vw;\n    }\n}\n\n.clip-info{\n    padding: 2px;\n    margin-top: 2px;\n    font-size: 1vw;\n}\n@media screen and (max-device-width: 1200px){\n    .clip-info{\n        font-size: 2.5vw;\n    }\n}\n\n.channel-title{\n    font-family: Roboto,sans-serif;\n}\n@media screen and (max-device-width: 1200px){\n    .channel-title{\n        font-size: 2.5vw;\n    }\n}\n\n.clip-published{\n    color: grey;\n}@media screen and (max-device-width: 1200px){\n    .clip-published{\n        font-size: 15px;\n    }\n}\n\n.clipModal{\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n\n    display: none;\n    flex-direction: column;\n    align-items: start;\n    justify-content: space-between;\n    top: 20%;\n    height: 60vh;\n    width: 60vw;\n    background-color: #f4f4f4;\n    position: fixed;\n    box-shadow: 0 0 10px rgba(0,0,0,0.5);\n}@media screen and (max-device-width: 1200px){\n    .clipModal{\n        width: 90vw;\n    }\n}\n\n.clipModalShow{\n    z-index: 10;\n    display: flex;\n}\n\n.iframe{\n    width: 100%;\n}\n\n.progress-bar{\n    position: fixed;\n    width: 5%;\n    top: 47%;\n    left: 47.5%;\n    display: none;\n    opacity: 0.9;\n}\n\n.rotate\n{\n    display: flex;\n    z-index: 11;\n    animation:spin 2s linear infinite;\n}\n@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }\n\n.left{\n    animation-duration: 0.5s;\n    animation-timing-function: ease-in;\n    animation-name: slideleft;\n}\n@keyframes slideleft {\n    from {\n        margin-left: 0;\n    }\n\n    to {\n        margin-left: -100%;\n    }\n}\n\n.right{\n    animation-duration: 0.5s;\n    animation-timing-function: ease-in;\n    animation-name: sliderigth;\n}\n@keyframes sliderigth {\n    from {\n        margin-left: 0;\n    }\n\n    to {\n        margin-left: 100%;\n    }\n}\n",""])},function(e,n,t){var o=t(7);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(2)(o,i);o.locals&&(e.exports=o.locals)}]);