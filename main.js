let countButton = document.querySelector('.countButton')
let countItems = document.querySelector('.countItems')
countItems.innerText = localStorage.getItem('count');
if (!localStorage.getItem("count")) {
    localStorage.setItem('count', 0)
}

let count = localStorage.getItem('count')

countButton.addEventListener('click', () => {
    localStorage.setItem('count', count++)
    countItems.innerText = localStorage.getItem('count');
})