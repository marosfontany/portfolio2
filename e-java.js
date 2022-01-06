const navSlide = () => {
  const pop = document.querySelector(".pop");
  const nav = document.querySelector(".mainmenu");
  const mainmenu = document.querySelectorAll(".mainmenu li");

  pop.addEventListener("click",() => {
    nav.classList.toggle("nav-active");
    pop.classList.toggle("toggle");
  });


}

navSlide();

/* this code is taken and edited by me from here: https://www.youtube.com/watch?v=gXkqy0b4M5g&ab_channel=DevEd */