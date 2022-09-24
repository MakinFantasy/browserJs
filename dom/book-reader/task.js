const sizeButtons = document.querySelectorAll('.font-size')
const book = document.querySelector('.book')
console.log(book.classList)
const text = document.querySelectorAll('.book__content')
const textControl = [document.querySelector('.book__control_color').children[1], document.querySelector('.book__control_color').children[2], document.querySelector('.book__control_color').children[3]]
const backgroundControl = [document.querySelector('.book__control_background').children[1], document.querySelector('.book__control_background').children[2], document.querySelector('.book__control_background').children[3]]
console.log(textControl)



sizeButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault()
        sizeButtons.forEach( (icon) => {
            if (icon.classList.contains('font-size_active')) {
                icon.classList.remove('font-size_active')
            }
        })
        btn.classList.add('font-size_active')

        if (btn.dataset.size === 'small') {
            book.classList.remove('book_fs-big')
            book.classList.add('book_fs-small')
            console.log(btn.dataset.size)
        }

        if (btn.dataset.size === 'big') {
            book.classList.remove('book_fs-small')
            book.classList.add('book_fs-big')
            console.log(btn.dataset.size)
        }
        if (btn.dataset.size === undefined) {
            book.classList.remove('book_fs-big')
            book.classList.remove('book_fs-small')
            console.log(btn.dataset.size)
        }
    })
})




textControl.forEach( (btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();

        textControl.forEach( (icon) => {
            if (icon.classList.contains('color_active')) {
                icon.classList.remove('color_active')
            }
        })
        btn.classList.add('color_active')

        console.log(btn.dataset.textColor)

        if (btn.dataset.textColor === 'black') {
            book.classList.remove('book_color-whitesmoke')
            book.classList.remove('book_color-gray')
            book.classList.add('book_color-black')
        }
        if (btn.dataset.textColor === 'whitesmoke') {
            book.classList.remove('book_color-black')
            book.classList.remove('book_color-gray')
            book.classList.add('book_color-whitesmoke')
        }
        if (btn.dataset.textColor === 'gray') {
            book.classList.remove('book_color-black')
            book.classList.remove('book_color-whitesmoke')
            book.classList.add('book_color-gray')
        }
    })
} )




backgroundControl.forEach( (btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();

        backgroundControl.forEach( (icon) => {
            if (icon.classList.contains('color_active')) {
                icon.classList.remove('color_active')
            }
        })
        btn.classList.add('color_active')
        console.log(btn.dataset.bgColor)

        if (btn.dataset.bgColor === 'black') {
            book.classList.remove('book_bg-gray')
            book.classList.remove('book_bg-white')
            book.classList.add('book_bg-black')
        }
        if (btn.dataset.bgColor === 'gray') {
            book.classList.remove('book_bg-black')
            book.classList.remove('book_bg-white')
            book.classList.add('book_bg-gray')
        }
        if (btn.dataset.bgColor === 'white') {
            book.classList.remove('book_bg-gray')
            book.classList.remove('book_bg-black')
            book.classList.add('book_bg-white')
        }
    })
} )

