!function(){"use strict";var e,t={966:function(){var e=document.querySelectorAll("a"),t=document.querySelector(".exit-go-to-btn"),n=document.querySelector("#exit-timer"),r=document.querySelector("#exit-timer-text"),i=document.querySelector(".exit-popup"),o=document.querySelector(".exit-overlay"),c=document.querySelector(".exit-close"),a=document.querySelector(".exit-close-x"),d=document.querySelector(".exit-href-print");function l(e,t){clearInterval(t),r.textContent="Caricamento...."}function u(e,d,u){n.textContent="10";var s,f=e,v=setInterval((function(){var x;s=(s=parseInt(f%60,10))<10?"0"+s:s,d.textContent=s,--f<0&&(f=e,function(e,n){t.addEventListener("click",(function(){clearInterval(e),r.textContent="Caricamento....",window.location.href=n}))}(v,u)),x=v,c.addEventListener("click",(function(){clearInterval(x),n.textContent="10",o.classList.add("exit-hidden"),i.classList.add("exit-hidden")})),function(e){a.addEventListener("click",(function(){clearInterval(e),n.textContent="10",o.classList.add("exit-hidden"),i.classList.add("exit-hidden")}))}(v),function(e){o.addEventListener("click",(function(){clearInterval(e),n.textContent="10",o.classList.add("exit-hidden"),i.classList.add("exit-hidden")}))}(v),t.addEventListener("click",(function(){l(0,v),window.location.href=u})),"00"==s&&(l(0,v),window.location.href=u)}),1e3)}for(var s=0;s<e.length;s++)e[s].addEventListener("click",(function(e){e.preventDefault();var r,c,a=this.href;r=a,(c=document.createElement("a")).href=r,c.host!==window.location.host?(t.href=a,d.textContent=a,o.classList.remove("exit-hidden"),i.classList.remove("exit-hidden"),u(10,n,a)):window.location.href=a}))}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=function(t,n,i,o){if(!n){var c=1/0;for(u=0;u<e.length;u++){n=e[u][0],i=e[u][1],o=e[u][2];for(var a=!0,d=0;d<n.length;d++)(!1&o||c>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[d])}))?n.splice(d--,1):(a=!1,o<c&&(c=o));if(a){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,i,o]},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,c=n[0],a=n[1],d=n[2],l=0;if(c.some((function(t){return 0!==e[t]}))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(d)var u=d(r)}for(t&&t(n);l<c.length;l++)o=c[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},n=self.webpackChunkexit_website=self.webpackChunkexit_website||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var i=r.O(void 0,[431],(function(){return r(966)}));i=r.O(i)}();