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


