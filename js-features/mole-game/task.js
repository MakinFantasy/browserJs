const result = document.getElementsByClassName('hole')
console.log(result)

let gameData = {
    hitCount: 0,
    missCount: 0,
}


function moleChecker () {
    let hits = document.getElementById('dead')
    let misses = document.getElementById('lost')
    for (let key in result) {
        let hole = result[key]
        hole.onclick = () => {
            if (hole.className === 'hole hole_has-mole') {
                gameData.hitCount += 1
                hits.textContent = gameData.hitCount
                if (gameData.hitCount === 10) {
                    alert('U WON THE GAME!!!')
                    gameData.missCount = 0;
                    gameData.hitCount = 0;
                    hits.textContent = gameData.hitCount;
                    misses.textContent = gameData.missCount;
                }
            } else {
                gameData.missCount += 1
                misses.textContent = gameData.missCount
                if (gameData.missCount === 5) {
                    alert('U LOST ')
                    gameData.hitCount = 0;
                    gameData.missCount = 0;
                    hits.textContent = gameData.hitCount;
                    misses.textContent = gameData.missCount;
                }
            }
        }
    }




}

moleChecker()