import{a as w,i as d,S as k}from"./assets/vendor-a57f9cde.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();function h(o){return o.map(({webformatURL:e,largeImageURL:l,tags:i,likes:t,views:s,comments:a,downloads:v})=>`<li class="gallery-item">
          <a class="gallery-link" href="${l}">
            <img
              class="gallery-image"
              src="${e}"
              alt="${i}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${t}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${s}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${a}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${v}</p>
            </div>
          </div>
        </li>`).join("")}const S=40;async function f(o,e){const l="40891115-11d0b88dd3a60afc830d1d27f";try{return o.includes(" ")&&o.replace(/\s+/g,"+"),await w.get("https://pixabay.com/api/",{params:{key:l,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:S}})}catch{d.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"}),console.error(error.message)}}function q(){document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".up-btn");o.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"}),document.body.classList.add("scrolling")}),window.addEventListener("scroll",function(){window.scrollY>200?o.classList.add("show"):o.classList.remove("show"),document.body.classList.contains("scrolling")&&window.scrollY===0&&document.body.classList.remove("scrolling")})})}const g=document.querySelector(".js-search"),m=document.querySelector(".gallery"),c=document.querySelector(".loader"),n=document.querySelector(".btn-load"),y=document.querySelector(".loader-more"),u=document.querySelector(".end-loader");let r=1;const b=40;let p="",L;c.style.display="none";y.style.display="none";n.style.display="none";u.style.display="none";g.addEventListener("submit",P);n.addEventListener("click",E);q();function P(o){if(o.preventDefault(),r=1,m.innerHTML="",c.style.display="block",n.style.display="none",u.style.display="none",p=o.target.elements.search.value.trim(),!p){d.warning({title:"Caution",message:"Sorry, but you did not fill out the field!"}),c.style.display="none";return}f(p,r).then(({data:e})=>{c.style.display="none";const l=Math.ceil(e.totalHits/b);if(r===l?(n.style.display="none",u.style.display="block"):n.style.display="block",!e.hits.length){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}m.insertAdjacentHTML("beforeend",h(e.hits)),d.success({title:"Wow",message:`We found ${e.totalHits} pictures!`}),L=new k(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),g.reset()}).catch(e=>{c.style.display="none",console.log(e)})}function E(){r+=1,y.style.display="block",n.style.display="none",u.style.display="none";const o=()=>document.querySelector(".gallery-item").getBoundingClientRect();f(p,r).then(({data:e})=>{m.insertAdjacentHTML("beforeend",h(e.hits)),window.scrollBy({top:o().height*2,left:0,behavior:"smooth"}),L.refresh();const l=Math.ceil(e.totalHits/b);if(r===l){d.info({title:"Caution",message:"We're sorry, but you've reached the end of search results."}),n.style.display="none",y.style.display="none",u.style.display="block";return}y.style.display="none",n.style.display="block"}).catch(e=>console.log(e))}
//# sourceMappingURL=commonHelpers.js.map
