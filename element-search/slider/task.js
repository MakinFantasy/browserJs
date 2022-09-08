const imageList = document.querySelectorAll('.slider__item');
const arrows = document.querySelectorAll('.slider__arrow')
const dots = Array.from(document.querySelectorAll('.slider__dot'))

for (const arrow of arrows) {
    arrow.addEventListener('click', () => {
        let activeImage = Array.from(imageList).findIndex(element => element.className.includes('slider__item_active'));
        imageList[activeImage].classList.remove('slider__item_active');
        dots[activeImage].classList.remove('slider__dot_active')
        if (arrow.className.includes('slider__arrow_next')) {
            activeImage++;
            if (activeImage >= imageList.length) {
                activeImage = 0;
            }
            imageList[activeImage].classList.add('slider__item_active')
            dots[activeImage].classList.toggle('slider__dot_active')
        }
        if (arrow.className.includes('slider__arrow_prev')) {
            activeImage--;
            if (activeImage < 0) {
                activeImage = imageList.length - 1;
            }
            imageList[activeImage].classList.add('slidet__item_active')
            dots[activeImage].classList.add('slider__dot_active')
        }
    })
}

for (const dot of dots) {
    dot.addEventListener('click', () => {
        let dotIndex = dots.indexOf(dot)
        dots.forEach((dot) => {
            if (dot.className.includes('slider__dot_active')) {
                dot.classList.remove('slider__dot_active')
            }
        })
        console.log(dotIndex)
        let active = Array.from(imageList).findIndex(element => element.className.includes('slider__item_active'));
        console.log(active)
        imageList[active].classList.remove('slider__item_active');
        imageList[dotIndex].classList.add('slider__item_active');
        dots[dotIndex].classList.add('slider__dot_active')
    })
}