let navItems = document.querySelectorAll(".nav-item");

navItems.forEach((el) => {
  el.addEventListener("click", () => {
    navItems.forEach((item) => {
      if (item !== el && item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });
    el.classList.toggle("active");
  });
});

let up = document.querySelector(".up");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
});

up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
