const timer = function () {
    let time = document.getElementById('timer')
    time.textContent -= 1;
    if (time.textContent == 0) {
        alert('u won');
        clearInterval(countdown)
    }
}

const countdown = setInterval(timer, 1000)