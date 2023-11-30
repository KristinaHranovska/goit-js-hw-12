import{a as L,i as p,S as m}from"./assets/vendor-a57f9cde.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function f(s){return s.map(({webformatURL:e,largeImageURL:r,tags:n,likes:t,views:o,comments:a,downloads:v})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${e}"
              alt="${n}"
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
              <p class="amount">${o}</p>
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
        </li>`).join("")}const S=40;async function g(s,e){const r="40891115-11d0b88dd3a60afc830d1d27f";try{return s.includes(" ")&&s.replace(/\s+/g,"+"),await L.get("https://pixabay.com/api/",{params:{key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:S}})}catch{p.error({title:"Error",message:"Sorry! The site is currently unavailable. Please try later!"}),console.error(error.message)}}const b=document.querySelector(".js-search"),h=document.querySelector(".gallery"),i=document.querySelector(".loader"),l=document.querySelector(".btn-load"),u=document.querySelector(".loader-more");let c=1;const k=40;let y="",d;i.style.display="none";u.style.display="none";l.style.display="none";b.addEventListener("submit",w);l.addEventListener("click",q);function w(s){if(s.preventDefault(),c=1,h.innerHTML="",i.style.display="block",l.style.display="none",y=s.target.elements.search.value,!y){p.warning({title:"Caution",message:"Sorry, but you did not fill out the field!"}),i.style.display="none";return}g(y,c).then(({data:e})=>{if(i.style.display="none",!e.hits.length){p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}h.insertAdjacentHTML("beforeend",f(e.hits)),d=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),d.refresh(),l.style.display="block",b.reset()}).catch(e=>{i.style.display="none",console.log(e)})}function q(){c+=1,d.destroy(),u.style.display="block",l.style.display="none";const s=()=>document.querySelector(".gallery-item").getBoundingClientRect();g(y,c).then(({data:e})=>{h.insertAdjacentHTML("beforeend",f(e.hits)),window.scrollBy({top:s().height*2,left:0,behavior:"smooth"}),d=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),d.refresh();const r=Math.ceil(e.totalHits/k);if(c>r){p.info({title:"Caution",message:"We're sorry, but you've reached the end of search results."}),l.style.display="none",u.style.display="none";return}u.style.display="none",l.style.display="block"}).catch(e=>console.log(e))}
//# sourceMappingURL=commonHelpers.js.map
