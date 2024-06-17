function myFunction(){
  let start = document.querySelector(".progress");
  let gift = document.querySelector(".solarsystem");
  start.setAttribute("style","display:none");
  gift.setAttribute("style","display:block");
  document.querySelector("#audio-player").play();
  }
  //handle click open gift
  let click = document.querySelector("p1");
  click.addEventListener("click",myFunction);
  document.querySelector("#audio-player").pause();
  


