window.addEventListener("load", () => {
    let flexky = document.getElementById("flexky"),
        open = document.getElementById("btn-menu"),
        menu = document.getElementById("flexky-menu");
    if (window.pageYOffset > 100) flexky.classList.add("flexky--scroll");
    window.addEventListener("scroll", () => {
        window.pageYOffset > 100 && window.innerWidth > 900 ? flexky.classList.add("flexky--scroll") : flexky.classList.remove("flexky--scroll");
    });
    open.addEventListener("click", () => {
        menu.classList.toggle("flexky__container--active");
    });
});