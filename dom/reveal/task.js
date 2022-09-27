const popups = document.querySelectorAll('.reveal')


window.addEventListener('scroll', (e) => {
    popups.forEach( (popup) => {
        const {top, bottom} = popup.getBoundingClientRect();
        console.log(top, bottom, window.innerHeight)
        if (top <  window.innerHeight) {
            popup.classList.add('reveal_active')
        }
    })
})


