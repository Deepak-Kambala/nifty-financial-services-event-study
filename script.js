(function(){"use strict";
function math(){if(!window.katex)return;
document.querySelectorAll(".m,.eq").forEach(function(el){
try{katex.render(el.textContent,el,{displayMode:el.classList.contains("eq"),throwOnError:false});}catch(e){}});}
if(window.katex)math();else window.addEventListener("load",math);
var links=[].slice.call(document.querySelectorAll("aside a"));
if("IntersectionObserver"in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){
if(e.isIntersecting)links.forEach(function(a){a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id);});});},{rootMargin:"-15% 0px -75% 0px"});
document.querySelectorAll("main section").forEach(function(s){io.observe(s);});}
})();
