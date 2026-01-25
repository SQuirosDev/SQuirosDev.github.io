// JS para manejar el menú desplegable
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle")
    const menuItems = document.getElementById("menu-items")
    const menu = document.getElementById("menu")

    menuToggle.addEventListener("click", () => {
        // Alterna entre las clases "hide" y "show"
        if (menuItems.classList.contains("hide")) {
            menuItems.classList.remove("hide");
            menuItems.classList.add("show");
            menuItems.classList.add("tron-box");
            menu.classList.add("semi-redondo");
        } else {
            menuItems.classList.remove("show");
            menuItems.classList.remove("tron-box");
            menu.classList.remove("semi-redondo");
            menuItems.classList.add("hide");
        }
    });
});