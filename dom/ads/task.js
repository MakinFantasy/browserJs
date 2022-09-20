const text = document.querySelectorAll('.rotator__case')
const bannersRotators = document.querySelectorAll('.rotator')
console.log(text.length)
console.log(bannersRotators.length)

// if (cardsCount.length > 1) {
//     cardsCount.forEach( (card) => {
//         let index = 0
//         setInterval( () => {
//             console.log(index)
//             if (index >= text.length) {
//                 index = 0
//             }
//             if (index - 1 < 0) {
//                 text[index].classList.add('rotator__case_active')
//                 console.log(text[index].classList)
//                 index++;
//             } else {
//                 text[index - 1].classList.remove('rotator__case_active')
//                 text[index].classList.add('rotator__case_active')
//                 console.log(text[index].classList)
//                 index++;
//             }       
//         }, 1000)
//     })
// }

bannersRotators.forEach( (rotator) => {
    let index = 0;
    setInterval( () => {
        if (index >= rotator.children.length) {
            index = 0;
        }
        
        if (index - 1 < 0) {
            rotator.children[index].classList.add('rotator__case_active');
            index++;
        } else {
            rotator.children[index - 1].classList.remove('rotator__case_active');
            rotator.children[index].classList.add('rotator__case_active');
            index++;
        }
    }, 1000 )
} )


// let index = 0
// setInterval( () => {
//     console.log(index)
//     if (index >= text.length) {
//         index = 0
//     }
//     if (index - 1 < 0) {
//         text[index].classList.add('rotator__case_active')
//         console.log(text[index].classList)
//         index++;
//     } else {
//         text[index - 1].classList.remove('rotator__case_active')
//         text[index].classList.add('rotator__case_active')
//         console.log(text[index].classList)
//         index++;
//     }
// }, 1000)
