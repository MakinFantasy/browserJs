function countdown () {
    let timer = document.getElementById('timer');
    console.log(timer.textContent)
    let counter = parseInt(timer.textContent)
    setInterval( () => {
        if (counter > 0) {
            timer.textContent = counter;
            counter--;
        }
        if (counter === 0) {
            alert('Вы победили в конкурсе')
            counter = 59;
        }
    }, 1000)
}

countdown()