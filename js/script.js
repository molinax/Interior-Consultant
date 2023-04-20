const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const menu = document.getElementById("menu");

menuOpen.addEventListener("click", () => {
    toggleDisplay(menu);
});

menuClose.addEventListener("click", () => {
    toggleDisplay(menu);
})

function toggleDisplay(element) {
    if (element.style.display === "none") {
        element.style.display = "inline-flex";
    } else {
        element.style.display = "none";
    }
}