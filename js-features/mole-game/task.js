const result = document.getElementsByClassName('hole')
console.log(result)

let gameData = {
    hitCount: 0,
    missCount: 0,
}

function reset (message, hits, misses) {
    alert(message);
    gameData.hitCount = 0;
    gameData.missCount = 0;
    hits.textContent = gameData.hitCount;
    misses.textContent = gameData.missCount;
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
                    reset('U won', hits, misses)
                }
            } else {
                gameData.missCount += 1
                misses.textContent = gameData.missCount
                if (gameData.missCount === 5) {
                    reset('U lost', hits, misses);
                }
            }
        }
    }




}

moleChecker()