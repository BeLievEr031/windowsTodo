const buildHTMLElement = (elem, classArr) => {
    const element = document.createElement(elem);
    for (let i = 0; i < classArr.length; i++) {
        element.setAttribute("class", classArr)
    }

    return element;
}

const appendHTMLElement = (parentElem, elementsArr) => {
    for (let i = 0; i < elementsArr.length; i++) {
        parentElem.appendChild(elementsArr[i])
    }

    return parentElem;
}


const setInnerTextHTML = () => {

}