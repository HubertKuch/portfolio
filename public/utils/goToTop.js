document.addEventListener("scroll", ()=>{
  if(window.scrollY >= window.innerHeight)
    document.querySelector(".go-to-top").style.opacity = 1;

  if(window.scrollY <= window.innerHeight)
    document.querySelector(".go-to-top").style.opacity = 0;
})