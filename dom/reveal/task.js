const popups = document.querySelectorAll('.reveal')


window.addEventListener('scroll', (e) => {
    console.log(e.type)
    const {top, bottom} = popups[0].getBoundingClientRect();
    console.log(top, bottom, window.innerHeight)
    if (top <  window.innerHeight) {
        popups[0].classList.add('reveal_active')
    } 
    if (bottom < 0 || top > window.innerHeight) {
        popups[0].classList.remove('reveal_active')
    }
})


