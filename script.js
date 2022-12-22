let bar = document.querySelector("#bar");
let bar2 = document.querySelector("#closeBar");
let resNav = document.querySelector(".res-nav");
let navBar = document.querySelector(".nav-bar");
bar.addEventListener("click", () => {
  resNav.classList.remove("hide");
  navBar.classList.add("hide");
});
bar2.addEventListener("click", () => {
  navBar.classList.remove("hide");
  resNav.classList.add("hide");
});
