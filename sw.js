if(!self.define){let e,i={};const r=(r,a)=>(r=new URL(r+".js",a).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let c={};const o=e=>r(e,n),d={module:{uri:n},exports:c,require:o};i[n]=Promise.all(a.map((e=>d[e]||o(e)))).then((e=>(s(...e),c)))}}define(["./workbox-537f91b8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"images/background.jpg",revision:"e7811956c1499175fd90c70f9350d21a"},{url:"images/home.png",revision:"56f8205850dc6a2e92c791a67e91da6f"},{url:"images/people.png",revision:"a47cad01939ae2a07d411e42ed9778ea"},{url:"images/person1.jpeg",revision:"0a98807837ea6c0949d8dbfe43d1a1d1"},{url:"images/person2.jpeg",revision:"26b90b1a27ce8f006ec3010cded280c9"},{url:"images/person3.jpeg",revision:"1c344bc02390b27cee2116d952a684bd"},{url:"images/profile.png",revision:"a7b57f091f63571a4bb8e7e0a77366ae"},{url:"images/search.png",revision:"b14ab4f8d084fadee8e342b9c1a28a2a"},{url:"images/shpak.jpg",revision:"0472c2d2d00dc9f69999d71f5b017295"},{url:"index.css",revision:"5655e2f5f2579c84954018eeae3ab7b8"},{url:"index.html",revision:"32467d3e7b6dbde638ffe19f6acd8eb0"},{url:"main.js",revision:"6827a700d041701e450a825b22e4b2e9"},{url:"package-lock.json",revision:"d7aed283a3cfde5ad5ceff88792eacb4"},{url:"package.json",revision:"9c2f3c2ed42f102ecaaa1c61c52e5030"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map