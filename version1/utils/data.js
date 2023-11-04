const themesArr = {
    theme1: "#788CDE",
    theme2: "#BC7ABC",
    theme3: "#A0CBF1",
    theme4: "#D6BDE7",
    theme5: "#4AA079",
    theme6: "#479E98",
    theme7: "#9AD2BA",
    theme8: "#8BD3CE",
    theme9: "#D6BDE7",
    theme10: "#F5B6C2",
}


const task = {
    title: "",
    description: "",
    isImportant: true,
    isMyday: true,
    // steps: [{ ...task }],
    // date: new Date.now,
    isComleted: true
}

const tasks = [
    {
        title: "Task one",
        description: "Task one description",
        isImportant: false,
        isMyday: false,
        steps: [],
        // date: new Date.now,
        isComleted: false
    },
    {
        title: "Task two",
        description: "Task two description",
        isImportant: true,
        isMyday: false,
        steps: [],
        // date: new Date.now,
        isComleted: false
    },
    {
        title: "Task three",
        description: "Task three description",
        isImportant: false,
        isMyday: true,
        steps: [],
        // date: new Date.now,
        isComleted: true
    },
]