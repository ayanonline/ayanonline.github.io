let bar = document.querySelector("#bar");
let bar2 = document.querySelector("#closeBar");
let resNav = document.querySelector(".res-nav");
let navBar = document.querySelector(".nav-bar");
const title = document.querySelector("#ayan");
const my_name = " Ayan";
let index = 1;
bar.addEventListener("click", () => {
  resNav.classList.remove("hide");
  navBar.classList.add("hide");
});
bar2.addEventListener("click", () => {
  navBar.classList.remove("hide");
  resNav.classList.add("hide");
});

//type writer effect
const typeWriter = () => {
  let new_title = my_name.slice(0, index);
  title.innerText = new_title;
  index > my_name.length ? (index = 1) : index++;

  setTimeout(() => typeWriter(), 400);
};

typeWriter();
