import{a as u,S as p,i}from"./assets/vendor-DQvd0HNi.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function d(n){const s="https://pixabay.com",t="/api/",o=new URLSearchParams({key:"55046527-8fc3f9f8db0162eee6eb185b5",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=s+t+"?"+o;return u.get(e).then(r=>r.data)}const l=document.querySelector(".gallery"),f=document.querySelector(".loader"),m=new p(".gallery a",{captionsData:"alt",captionDelay:250});function y(n){const s=n.map(t=>`
        <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p>Likes: ${t.likes}</p>
        <p>Views: ${t.views}</p>
        <p>Comments: ${t.comments}</p>
        <p>Downloads: ${t.downloads}</p>
      </div>
    </li>
        `).join("");l.insertAdjacentHTML("beforeend",s),m.refresh()}function g(){l.innerHTML=""}function h(){f.style.display="block"}function c(){f.style.display="none"}const L={form:document.querySelector(".form")};L.form.addEventListener("submit",n=>{n.preventDefault();const t=new FormData(n.target).get("search-text").trim();if(t===""){i.error({message:"Please enter a search query!",position:"topRight"});return}g(),h(),d(t).then(o=>{c(),o.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):y(o.hits)}).catch(o=>{c(),i.error({message:"Oops, something went wrong!",position:"topRight"}),console.log(o)})});
//# sourceMappingURL=index.js.map
