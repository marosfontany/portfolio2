const navSlide = () => {
  const pop = document.querySelector(".pop");
  const nav = document.querySelector(".mainmenu");
  const mainmenu = document.querySelectorAll(".mainmenu li");

  pop.addEventListener("click",() => {
    nav.classList.toggle("nav-active");
  });


}

navSlide();