const logoBox = document.querySelector(".lg-box")
const search = document.querySelector(".search")
const contextMenu = document.querySelector("#context-menu")
// const sideBarLogoHTMLData = [
//     {
//         element: "div",
//         parent: logoBox,
//         class: "logo",
//         text: "SR",
//         myNode: null
//     },
//     {
//         element: "div",
//         parent: logoBox,
//         class: "user-data",
//         text: null,
//         myNode: null
//     },
//     {
//         element: "div",
//         parent: sideBarLogoHTMLData[1].myNode,
//         class: "name",
//         text: "Sandeep Rajak",
//         myNode: null
//     },
//     {
//         element: "div",
//         parent: sideBarLogoHTMLData[2].myNode,
//         class: "email",
//         text: "Sandeep@gmail.com",
//         myNode: null
//     },

// ]

// logoDiv creation


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


const addListBtn = document.querySelector(".list-btn")


addListBtn.addEventListener("click", () => {
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
        console.log(listName);
        listName.focus();
        listName.select();
    })

    rowDiv.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        contextMenu.style.top = `${rowDiv.getBoundingClientRect().top - 12}px`;
        contextMenu.style.display = 'block';
    })

})


document.addEventListener("click", () => {
    contextMenu.style.display = "none";
})

