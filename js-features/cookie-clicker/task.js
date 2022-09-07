function clicker () {

    const cookie = document.getElementById('cookie')
    let clickCount = document.getElementById('clicker__counter')
    let clickCookie = 0;
    cookie.onclick = () => {
        if (clickCookie % 2 === 0) {
            cookie.width *= 1.13;
            console.log(clickCookie, clickCookie % 2)
            clickCookie += 1
            clickCount.textContent = clickCookie
        } else {
            cookie.width *= 0.87
            console.log(clickCookie, clickCookie % 2)
            clickCookie += 1
            clickCount.textContent = clickCookie
        }

    }

}

clicker()