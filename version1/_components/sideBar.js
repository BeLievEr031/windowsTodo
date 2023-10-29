const logoBox = document.querySelector(".lg-box")

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


