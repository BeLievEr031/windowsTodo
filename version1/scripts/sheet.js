const themes = ["#788CDE", "#BC7ABC", "#E46C8C", "#E46B67", "#4AA079", "#479E98", "#8795A0", "#8BD3CE", "#D6BDE7", "#F5B6C2",]
const themeRows = document.querySelectorAll(".theme-row")

for (let i = 0; i < themes.length; i++) {
    const themeColorDiv = document.createElement("div")
    themeColorDiv.setAttribute("class", "theme-color")
    themeColorDiv.setAttribute("theme", themes[i])
    themeColorDiv.style.backgroundColor = themes[i]

    if (i <= 4) {
        themeRows[0].appendChild(themeColorDiv)
    } else {
        themeRows[1].appendChild(themeColorDiv)

    }
}

const themeCont = document.querySelector(".theme-cont")
const sheetDiv = document.querySelector("#section")
let isThemeDivRendered = false;
themeCont.addEventListener("click", (event) => {
    if (event.target.classList[0] === "theme-color") {
        event.target.style.border = "5px solid gray"
        // sheetDiv.style.backgroundColor = event.target.style.backgroundColor
    }
})


const themeSwithcherBtn = document.querySelector(".theme-switcher-icon")

themeSwithcherBtn.addEventListener("click", () => {
    themeCont.classList.add("render-theme-switch")
    isThemeDivRendered = true;
})


const taskBox = document.querySelector(".task")
const taskInfo = document.querySelector(".task-info")
let isClicked = false
taskBox.addEventListener("click", () => {
    if (isClicked) {
        taskInfo.classList.remove("active-task-info")
    } else {
        taskInfo.classList.add("active-task-info")
    }

    isClicked = !isClicked
})