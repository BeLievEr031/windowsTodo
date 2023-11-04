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
    }
})


const themeSwithcherBtn = document.querySelector(".theme-switcher-icon")

themeSwithcherBtn.addEventListener("click", () => {
    themeCont.classList.add("render-theme-switch")
    isThemeDivRendered = true;
})


const taskContainer = document.querySelector(".task-container")
const taskBox = document.querySelector(".task")
const taskInfo = document.querySelector(".task-info")
let completedDropDown = document.querySelector(".completed-task-drop-down")

// ##### Fuction for creating completed task dropdown
const createCompletedDropDown = () => {
    // console.log();
    completedDropDown = buildHTMLElement("div", ["completed-task-drop-down"])
    const arrow = buildHTMLElement("div", ["arrow"])
    arrow.innerText = ">"
    const textData = buildHTMLElement("div", [""])
    textData.innerText = "Completed"
    return appendHTMLElement(completedDropDown, [arrow, textData])
}

// ##### Function for creating task html #####
const createTaskHTML = (task, index) => {
    const taskCont = buildHTMLElement("div", ["task"])
    taskCont.idx = index

    const markAsCompletedDiv = buildHTMLElement("div", ["circle"])

    const taskDataDiv = buildHTMLElement("div", ["task-data"])
    taskDataDiv.innerText = task.title
    taskDataDiv.idx = index

    const importantIcon = buildHTMLElement("img", ["important"])
    importantIcon.alt = "start-icon"
    importantIcon.src = "./icons/star.svg"

    // Appeding the child
    appendHTMLElement(taskCont, [markAsCompletedDiv, taskDataDiv, importantIcon])
    return taskCont;
}

// ##### Function for rendering the task #####
var renderTask = () => {
    for (let i = 0; i < tasks.length; i++) {
        if (!tasks[i].isComleted) {
            const task = appendHTMLElement(taskContainer, [createTaskHTML(tasks[i], i)])
            task.isCompleted = false
            continue;
        }

        appendHTMLElement(taskContainer, [createCompletedDropDown()])
        const task = appendHTMLElement(taskContainer, [createTaskHTML(tasks[i], i)])
        task.isCompleted = true
    }
}

renderTask();

// ##### IMPORTANT VARIABLE FOR MANAGING THE TASK INFORMATION 
let selectedTask = null;
let isClicked = false;
let prevSelectedTaskForInfo = null;

const currTask = document.querySelector(".curr-task")

const handleTaskInfoToggle = (event) => {
    selectedTask = tasks[event.target.idx]
    event.target.style.backgroundColor = "#404044"

    currTask.innerText = selectedTask.title;

    if (isClicked && prevSelectedTaskForInfo.idx === event.target.idx) {
        taskInfo.classList.remove("active-task-info")
        prevSelectedTaskForInfo.style.backgroundColor = "#2a2a2a"
        prevSelectedTaskForInfo = null;
        isClicked = false;
        return;
    } else {
        if (prevSelectedTaskForInfo !== null) prevSelectedTaskForInfo.style.backgroundColor = "#2a2a2a"
        taskInfo.classList.add("active-task-info")
    }

    if (prevSelectedTaskForInfo === event.target.idx) {
        isClicked = true;
        return;
    } else {
        isClicked = false;
    }
    prevSelectedTaskForInfo = event.target;
    isClicked = !isClicked
}

const handleTaskComplete = (event) => {
    const parentNode = event.target.parentNode;
    parentNode.remove()
    const idx = parentNode.idx;

    if (!tasks[idx].isComleted) {
        if (completedDropDown === null) {
            console.log(45);
            // createCompletedDropDown()
            appendHTMLElement(taskContainer, [createCompletedDropDown()])
        }

        taskContainer.insertBefore(parentNode, completedDropDown.nextSibling)
        tasks[idx].isComleted = true;


    } else {
        taskContainer.insertBefore(parentNode, completedDropDown)
        tasks[idx].isComleted = false;

        console.log(completedDropDown.nextSibling);
        if (!completedDropDown.nextSibling) {
            completedDropDown.remove();
            completedDropDown = null;
        }
    }

    // renderTask()
}

taskContainer.addEventListener("click", (event) => {
    if (event.target.className === "circle") {
        return handleTaskComplete(event);
    }
    if (event.target.className === "task" || event.target.className === "task-data") {
        handleTaskInfoToggle(event)
    }
})


var createStepTaskHTML = (stepTask) => {
    const currStepTaskCont = buildHTMLElement("div", ["step-task-cont"])
    const markAsCompletedDiv = buildHTMLElement("div", ["circle", "mark-complete-btn"])
    const currStepTask = buildHTMLElement("div", ["step-task"])
    currStepTask.innerText = stepTask.title;
    appendHTMLElement(currStepTaskCont, [markAsCompletedDiv, currTask])
}


// ##### Task CRUD operation #####
const taskInp = document.querySelector(".task-inp")

taskInp.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const newTask = {
            title: e.target.value,
            description: "",
            isImportant: false,
            isMyday: false,
            steps: [],
            isComleted: true
        }

        appendHTMLElement(taskContainer, [createNewTaskHTML(newTask)])
        tasks.push(newTask)
        taskInp.value = "";
    }

})


var createNewTaskHTML = (newTask) => {
    const task = buildHTMLElement("div", ["task"])
    task.idx = tasks.length;

    const markAsCompletedDiv = buildHTMLElement("div", ["circle"])
    const taskData = buildHTMLElement("div", ["task-data"])
    taskData.innerText = newTask.title;
    taskData.idx = tasks.length;

    const impIcon = buildHTMLElement("img", ["important"])
    impIcon.alt = "circle-icon"
    impIcon.src = "./icons/star.svg"

    appendHTMLElement(task, [markAsCompletedDiv, taskData, impIcon])
    return task;
}