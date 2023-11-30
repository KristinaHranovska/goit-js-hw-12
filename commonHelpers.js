import{a as L,i as p,S as h}from"./assets/vendor-a57f9cde.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();function f(o){return o.map(({webformatURL:e,largeImageURL:r,tags:l,likes:t,views:s,comments:i,downloads:v})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${e}"
              alt="${l}"
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
              <p class="amount">${i}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${v}</p>
            </div>
          </div>
        </li>`).join("")}const w=40;async function g(o,e){const r="40891115-11d0b88dd3a60afc830d1d27f";try{return o.includes(" ")&&o.replace(/\s+/g,"+"),await L.get("https://pixabay.com/api/",{params:{key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:w}})}catch{p.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"}),console.error(error.message)}}function S(){document.addEventListener("DOMContentLoaded",function(){const o=document.querySelector(".up-btn");o.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"}),document.body.classList.add("scrolling")}),window.addEventListener("scroll",function(){window.scrollY>200?o.classList.add("show"):o.classList.remove("show"),document.body.classList.contains("scrolling")&&window.scrollY===0&&document.body.classList.remove("scrolling")})})}const b=document.querySelector(".js-search"),m=document.querySelector(".gallery"),a=document.querySelector(".loader"),n=document.querySelector(".btn-load"),u=document.querySelector(".loader-more");let c=1;const k=40;let y="",d;a.style.display="none";u.style.display="none";n.style.display="none";b.addEventListener("submit",q);n.addEventListener("click",E);S();function q(o){if(o.preventDefault(),c=1,m.innerHTML="",a.style.display="block",n.style.display="none",y=o.target.elements.search.value,!y){p.warning({title:"Caution",message:"Sorry, but you did not fill out the field!"}),a.style.display="none";return}g(y,c).then(({data:e})=>{if(a.style.display="none",!e.hits.length){p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}m.insertAdjacentHTML("beforeend",f(e.hits)),d=new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),d.refresh(),n.style.display="block",b.reset()}).catch(e=>{a.style.display="none",console.log(e)})}function E(){c+=1,d.destroy(),u.style.display="block",n.style.display="none";const o=()=>document.querySelector(".gallery-item").getBoundingClientRect();g(y,c).then(({data:e})=>{m.insertAdjacentHTML("beforeend",f(e.hits)),window.scrollBy({top:o().height*2,left:0,behavior:"smooth"}),d=new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),d.refresh();const r=Math.ceil(e.totalHits/k);if(c>r){p.info({title:"Caution",message:"We're sorry, but you've reached the end of search results."}),n.style.display="none",u.style.display="none";return}u.style.display="none",n.style.display="block"}).catch(e=>console.log(e))}
//# sourceMappingURL=commonHelpers.js.map
