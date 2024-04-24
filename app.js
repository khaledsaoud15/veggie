const menu = document.querySelector(".menuToggle");
const linkContainer = document.querySelector(".linkContainer");

let toggler = true;

menu.addEventListener("click", () => {
  if (toggler) {
    linkContainer.classList.add("max-md:h-[20vh]");
    linkContainer.classList.remove("max-md:h-0");
    toggler = false;
  } else {
    linkContainer.classList.remove("max-md:h-[20vh]");
    linkContainer.classList.add("max-md:h-0");
    toggler = true;
  }
});
