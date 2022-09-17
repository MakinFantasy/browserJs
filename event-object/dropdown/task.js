const listButton = Array.from(document.querySelectorAll('.dropdown'))
const listElements = Array.from(document.querySelectorAll('.dropdown__item'))



listElements.forEach( (item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault()
        item.parentElement.parentElement.firstChild.nextSibling.textContent = item.textContent
    })
})


listButton.forEach( (item) => {
    item.addEventListener('click', () => {
        item.children[1].classList.toggle('dropdown__list_active')
    })
})