var O=Object.defineProperty;var b=(t,e,i)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var l=(t,e,i)=>(b(t,typeof e!="symbol"?e+"":e,i),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();function f(t){return Math.ceil(Math.random()*t)}const a=document.querySelector("#canvas"),y=a.getContext("2d");a.height=a.clientHeight;a.width=a.clientWidth;const g=document.querySelector(".start-window"),p=document.querySelector(".game-window"),v=document.querySelector(".end-window");function q(){g.style.display="flex",p.style.display="none",v.style.display="none"}function L(){g.style.display="none",p.style.display="block",v.style.display="none"}function w(){g.style.display="none",p.style.display="none",v.style.display="flex"}class S{constructor(e,i,r,n,s,c=5){l(this,"x");l(this,"y");l(this,"w");l(this,"h");l(this,"move");l(this,"imgsrc");this.x=e,this.y=i,this.w=r,this.h=n,this.move=c,this.imgsrc=s}drawCar(){const e=new Image;e.src=this.imgsrc,y.drawImage(e,this.x,this.y,this.w,this.h)}moveRight(){this.x+=this.move}moveLeft(){this.x-=this.move}moveDown(){this.y+=this.move}resetY(){this.y=-150}collision(e){if(this.x<e.x+e.w&&this.x+this.w>e.x&&this.y<e.y+e.h&&this.y+this.h>e.y)return console.log("collision"),!0}}const o=a.width,A=a.height;class d{constructor(e,i,r,n,s=5){l(this,"x");l(this,"y");l(this,"w");l(this,"h");l(this,"dy");this.x=e,this.y=i,this.w=r,this.h=n,this.dy=s}drawRoadLine(){y.fillStyle="white",y.fillRect(this.x,this.y,this.w,this.h)}move(){this.y+=this.dy,this.y>A&&(this.y=-this.h)}}const h=o/4,R={0:h/2,1:h/2+h,2:h/2+2*h,3:h/2+3*h},m=[],M=new d(o/4,0,10,200),N=new d(o/2,0,10,200),P=new d(o/4+o/2,0,10,200),C=new d(o/4,325,10,200),W=new d(o/2,325,10,200),D=new d(o/4+o/2,325,10,200),H=new d(o/4,650,10,200),B=new d(o/2,650,10,200),G=new d(o/4+o/2,650,10,200);m.push(M,N,P,C,W,D,H,B,G);const Y=["./enemy1.png","./enemy2.png","./enemy3.png"];function x(){const t=[],e=[];for(let i=0;i<4;++i){const r=f(2),n=f(3);if(t.indexOf(n)!==-1)continue;t.push(n);const c={car:new S(R[n]-50,-150,100,150,Y[r]),laneNo:n};e.push(c)}return e}function I(t,e,i,r,n=1){const s=setInterval(()=>{n===1?t.moveRight():t.moveLeft(),y.clearRect(0,0,a.width,a.height),r.forEach(c=>{c.drawRoadLine()}),e.forEach(c=>{c.car.drawCar(),t.collision(c.car)&&w()}),t.drawCar(),t.x+t.w/2>=i&&n===1&&clearInterval(s),t.x+t.w/2<=i&&n===-1&&clearInterval(s),(t.x<0||t.x+t.w>a.width)&&(w(),clearInterval(s))},10)}function $(t,e){const i=t.x+t.w/2+h;I(t,e,i,m)}function k(t,e){const i=t.x+t.w/2-h;I(t,e,i,m,-1)}const F=a.width,u=a.height,K=document.querySelector(".btn--start"),j=document.querySelector(".btn--restart");function E(){const t=new S(R[1]-75,u-150,150,150,"./player.png");let e=x(),i=f(e.length);const r=setInterval(()=>{let n=!1;y.clearRect(0,0,F,u);for(let s=0;s<i;++s)e[s].car.moveDown(),e[s].car.drawCar(),t.collision(e[s].car)&&(w(),clearInterval(r)),e[s].car.y>u&&(e[s].car.resetY(),n=!0);if(n){e=x();const s=f(e.length);i=s||2,n=!1}m.forEach(s=>{s.drawRoadLine(),s.move()}),t.drawCar()},10);document.addEventListener("keydown",n=>{n.key==="ArrowRight"&&$(t,e),n.key==="ArrowLeft"&&k(t,e)})}q();K.onclick=()=>{L(),E()};j.onclick=()=>{L(),E()};
