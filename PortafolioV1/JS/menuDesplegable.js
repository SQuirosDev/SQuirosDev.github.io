// JS para manejar el menú desplegable
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle")
    const menuItems = document.getElementById("menu-items")

    menuToggle.addEventListener("click", () => {
        // Alterna entre las clases "hide" y "show"
        if (menuItems.classList.contains("hide")) {
            menuItems.classList.remove("hide");
            menuItems.classList.add("show");
        } else {
            menuItems.classList.remove("show");
            menuItems.classList.add("hide");
        }
    });
});