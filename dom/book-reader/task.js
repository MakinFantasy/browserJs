const sizeButtons = document.querySelectorAll('.font-size')
const book = document.querySelector('.book')
console.log(book)

sizeButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        sizeButtons.forEach( (icon) => {
            if (icon.classList.contains('font-size_active')) {
                icon.classList.remove('font-size_active')
            }
        })
        btn.classList.toggle('font-size_active')

        if (btn.dataset.size === 'small') {
            if (book.classList.length > 1) {
                console.log(book.classList)
                book.classList.remove(book.classList[1])
            }
            book.classList.add('book_fs-small')
            console.log(btn.dataset.size)
        }

        if (btn.dataset.size === 'big') {
            if (book.classList.length > 1) {
                console.log(book.classList)
                book.classList.remove(book.classList[1])
            }
            book.classList.add('book_fs-big')
            console.log(btn.dataset.size)
        }
        if (btn.dataset.size === undefined) {
            if (book.classList.length > 1) {
                console.log(book.classList)
                book.classList.remove(book.classList[1])
            }
            console.log(btn.dataset.size)
        }
    })
})