var u=Object.defineProperty;var a=(n,t,o)=>t in n?u(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o;var c=(n,t,o)=>(a(n,typeof t!="symbol"?t+"":t,o),o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const s=document.querySelector("#canvas"),h=s.getContext("2d");s.height=s.clientHeight;s.width=s.clientWidth;const f=document.querySelector(".start-window"),m=document.querySelector(".game-window"),y=document.querySelector(".end-window");function d(){f.style.display="none",m.style.display="block",y.style.display="none"}class p{constructor(t,o,i,e,r=5){c(this,"x");c(this,"y");c(this,"w");c(this,"h");c(this,"move");this.x=t,this.y=o,this.w=i,this.h=e,this.move=r}drawCar(t){t.fillStyle="red",t.fillRect(this.x,this.y,this.w,this.h)}moveRight(){this.x+=this.move}moveLeft(){this.x-=this.move}}const w=document.querySelector(".btn--start"),g=document.querySelector(".btn--restart"),S=new p(s.width/2-25,s.height-100,50,100);w.onclick=()=>{d(),S.drawCar(h)};g.onclick=d;d();
