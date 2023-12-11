const openNav = () => {
  let button = document.querySelector(".burger");
  let navbar = document.querySelector("nav");
  button.addEventListener("click", () => {
    navbar.classList.toggle("nav-responsive");
  });
};

openNav();
