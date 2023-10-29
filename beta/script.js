const pt2 = document.querySelector(".pt-2")
const parent = document.querySelector(".parent")
const box1 = document.querySelector(".box1")

if (parent.scrollLeft === 0) {
    parent.scrollLeft += 800;
}



function isChildDivFullyVisible() {
    const parentRect = parent.getBoundingClientRect();
    const childRect = box1.getBoundingClientRect();

    console.log(childRect);

    // Check if the child div is entirely within the parent div horizontally
    const isFullyVisibleHorizontally =
        childRect.left >= parentRect.left &&
        childRect.right <= parentRect.right;

    return isFullyVisibleHorizontally;
}

// Example usage
let previousScrollLeft = parent.scrollLeft

// parent.addEventListener("scroll", () => {
//     // if (isChildDivFullyVisible()) {
//     //     console.log("Child div is fully visible.");
//     // } else {
//     //     console.log("Child div is partially or not visible.");
//     // }

//     // Get the current scroll position
//     const currentScrollLeft = parent.scrollLeft;
//     if (currentScrollLeft > previousScrollLeft) {
//         console.log("Scrolled to the right");
//     } else if (currentScrollLeft < previousScrollLeft) {
//         console.log("Scrolled to the left");
//     }

//     // Update the previous scroll position for the next comparison
//     previousScrollLeft = currentScrollLeft;

// })

const handleNotificationPermission = async () => {
    let permission = await Notification.requestPermission();
    console.log(permission);


}

const send = () => {
    const notification = new Notification('JavaScript Notification API', {
        body: 'This is a JavaScript Notification API demo',
        icon: 'https://s3.ap-south-1.amazonaws.com/s3.studytonight.com/curious/uploads/pictures/1590509193-1.jpg'
    });

    console.log(notification.body);
}

handleNotificationPermission()

send();

document.addEventListener('keydown', function (event) {
    // Check if Ctrl (or Command on Mac) and S keys are pressed
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        // Prevent the default browser save behavior
        event.preventDefault();

        // Your code to run when Ctrl + S (or Cmd + S on Mac) is pressed
        console.log('Ctrl + S (or Cmd + S) was pressed!');
    }
});
