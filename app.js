const tile = document.querySelectorAll('.tile');
const mole = document.querySelectorAll('.mole');
const timer = document.querySelector('#timer');
let score = document.querySelector('#score');
let result = 0;
let timeLeft = timer.textContent;

function selectRandomTile() {
    tile.forEach(className => {
        className.classList.remove('mole');
    });
    let randomPosition = tile[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    hitPosition = randomPosition.id;
}

function moveMole() {
    let timerId = null;
    timerId = setInterval(selectRandomTile, 1000);
}

tile.forEach(tileId => {
    tileId.addEventListener('mousedown', () => {
        if (tileId.id === hitPosition) {
            result += 1;
            score.textContent = result;
        }
    });
});

function countDown() {
    timeLeft--;
    timer.textContent = timeLeft;

    if (timer === 0) {
        clearInterval(timerId);
        alert('Game Over! Your final score is ' + result);
    }
}

let timerId = setInterval(countDown, 1000);

moveMole();