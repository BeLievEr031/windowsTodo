// Hidding the context-menu and theme-switcher on click other click
/*
    🔥🔥🔥🔥🔥 IMPORTANT NOTE 🔥🔥🔥🔥🔥
    ######### About Variable ########## 

    contextMenu 🟰🟰🟰 Available in sideBar.js ###./scripts/sideBar.js
    isContextDivRendered 🟰🟰🟰 Available in sideBar.js ###./scripts/sideBar.js

    themeCont 🟰🟰🟰 Available in sheet.js ###./scripts/sheet.js
    isThemeDivRendered 🟰🟰🟰 Available in sheet.js ###./scripts/sheet.js

*/

document.addEventListener("click", (event) => {
    if (isThemeDivRendered && event.target.alt !== "theme-switcher-icon" && event.target.className !== "theme-color") themeCont.classList.remove("render-theme-switch")
    if (isContextDivRendered) contextMenu.style.display = "none";
})
