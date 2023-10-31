const logoBox = document.querySelector(".lg-box")
const search = document.querySelector(".search")
const contextMenu = document.querySelector("#context-menu")
let isContextDivRendered = false;

const createSideBarData = () => {
    const logoDiv = document.createElement("div")
    logoDiv.setAttribute("class", "logo")
    logoDiv.innerText = "SR"

    // useData div creation
    const userDataDiv = document.createElement("div")
    userDataDiv.setAttribute("class", "user-data")

    // name div creation
    const nameDiv = document.createElement("div")
    nameDiv.setAttribute("class", "name")
    nameDiv.innerText = "Sandeep Rajak"


    // email div creation
    const emailDiv = document.createElement("div")
    emailDiv.setAttribute("class", "email")
    emailDiv.innerText = "Sandeep@gmail.com"

    userDataDiv.appendChild(nameDiv).appendChild(emailDiv)

    // Appending children to the parent
    logoBox.appendChild(logoDiv)
    logoBox.appendChild(userDataDiv)
}

createSideBarData();


const addListBtn = document.querySelector(".list-btn")
addListBtn.addEventListener("click", () => {
    const rowDiv = createNewList();
    renderContextMenu(rowDiv)
})


// Function for creating the new List
const createNewList = () => {
    const rowDiv = document.createElement("div")
    rowDiv.setAttribute("class", "data")

    const img = document.createElement("img")
    Object.assign(img, {
        src: "./icons/menu.svg",
        alt: "menu-icon"
    })


    const listName = document.createElement("input")

    listName.setAttribute("class", "list-name")
    // Assigning a multiple attribute at once
    Object.assign(listName, {
        type: "text",
        value: "Untitled List",
    })
    const countDiv = document.createElement("div")
    countDiv.setAttribute("class", "count")
    countDiv.innerText = 0

    // Appending all child to the there parent
    rowDiv.appendChild(img)
    rowDiv.appendChild(listName)
    rowDiv.appendChild(countDiv)
    document.querySelector(".data2-box").appendChild(rowDiv)

    listName.focus()
    listName.select()

    // Adding a chage event on listName
    listName.addEventListener("change", (e) => {
        console.log(e.target.value);
    })

    listName.addEventListener("blur", () => {
        listName.setAttribute("readonly", true)
    })

    rowDiv.addEventListener("dblclick", () => {
        listName.removeAttribute("readonly");
        listName.focus();
        listName.select();
    })

    return rowDiv;
}

// Function for rendering the contextMenu 
const renderContextMenu = (rowDiv) => {
    rowDiv.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        contextMenu.style.top = `${rowDiv.getBoundingClientRect().top - 12}px`;
        contextMenu.style.display = 'block';
        isContextDivRendered = true;
    })
}

const topMenu = document.querySelector(".data1-box")
const heading = document.querySelector("#tab-heading span")
const headingIcon = document.querySelector("#tab-heading img")
let prevSelctedMenuItem = document.querySelector(".activeted-menu");

topMenu.addEventListener("click", (event) => {
    if (prevSelctedMenuItem) {
        prevSelctedMenuItem.classList.remove("active-menu")
    }
    event.target.offsetParent.classList.add("active-menu")
    const headingText = event.target.offsetParent.attributes[1].textContent
    setHeadingIcon(headingText)
    heading.innerText = headingText
    prevSelctedMenuItem = event.target.offsetParent
})

// Function to setHeading icon
const setHeadingIcon = (headingText) => {
    switch (headingText) {
        case "Tasks":
            headingIcon.src = "./icons/home.svg";
            break;
        case "Assigned to me":
            headingIcon.src = "./icons/user.svg";
            break;
        case "Planned":
            headingIcon.src = "./icons/book.svg";
            break;
        case "Important":
            headingIcon.src = "./icons/star.svg";
            break;
        default:
            headingIcon.src = "./icons/sun.svg";

    }
}