const hammenu_btn = document.querySelector(".hammenu-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelector("nav");
const body_fade = document.querySelector(".body-fade");

hammenu_btn.addEventListener("click", () => {
    nav.classList.add("open");
    close_btn.style.display = "block";
    hammenu_btn.style.display = "none";
    body_fade.classList.add("body-fade-show");
    body_fade.classList.remove("body-fade-hide");
});

close_btn.addEventListener("click", () => {
    nav.classList.remove("open");
    close_btn.style.display = "none";
    hammenu_btn.style.display = "block";
    body_fade.classList.add("body-fade-hide");
    body_fade.classList.remove("body-fade-show");
});
