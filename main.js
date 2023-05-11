const board = document.querySelector('.board')
const mapSmall = document.querySelector('.game__start__btn--small')
const mapMedium = document.querySelector('.game__start__btn--medium')
const mapBig = document.querySelector('.game__start__btn--big')
const bigSizeMap = 2000
const mediumSizeMap = 1500
const smallSizeMap = 1000
let selectedMapSize
let boardArray
let currentSnakePos

mapSmall.addEventListener('click', () => {
  selectedMapSize = smallSizeMap
  startGame(selectedMapSize)
})
mapMedium.addEventListener('click', () => {
  selectedMapSize = mediumSizeMap
  startGame(selectedMapSize)
})
mapBig.addEventListener('click', () => {
  selectedMapSize = bigSizeMap
  startGame(selectedMapSize)
})

function buildMap(mapSize) {
  if(board.hasChildNodes()) {
    board.innerHTML = ''
  }
  if(mapSize == 1000) {
    board.style.gridTemplateColumns = 'repeat(40, 1fr)'
  }
  if(mapSize == 1500) {
    board.style.gridTemplateColumns = 'repeat(50, 1fr)'
  }
  if(mapSize == 2000) {
    board.style.gridTemplateColumns = 'repeat(50, 1fr)'
  }
  for(let i = 0; i < mapSize; i++) {
    const newCube = document.createElement('div')
    newCube.classList.add('board__cube')
    newCube.setAttribute('data-position', i)
    board.appendChild(newCube)
  }
}

function startGame(mapSize) {
  buildMap(mapSize)
  board.style.display = 'grid'
  boardArray = Array.from(document.querySelectorAll('.board__cube'))
  apple(mapSize)
  snake(mapSize)
}

(function handleInputForSnake () {
  document.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowDown') {
      sendSnakeDown(currentSnakePos, selectedMapSize)
    }
    if(event.code === 'ArrowUp') {
      sendSnakeUp(currentSnakePos, selectedMapSize)
    }
    if(event.code === 'ArrowLeft') {
      sendSnakeLeft(currentSnakePos, selectedMapSize)
    }
    if(event.code === 'ArrowRight') {
      sendSnakeRight(currentSnakePos, selectedMapSize)
    }
  })
})()

function snake(mapSize) {
  if(mapSize === 1000) {
    boardArray[500].classList.add('snake')
    currentSnakePos = 500
  }
  if(mapSize === 1500) {
    boardArray[725].classList.add('snake')
    currentSnakePos = 725
  }
  if(mapSize === 2000) {
    boardArray[975].classList.add('snake')
    currentSnakePos = 975
  }
}
// if pos is undefined snake hit a wall and should game over
function sendSnakeDown(pos, mapSize) {
  if(mapSize === 1000) {
    pos = pos + 40
    try {
      boardArray[pos].classList.add('snake')
    } catch (error) {
      // Call game over function here
      console.log('game over')
    }
    boardArray[pos - 40].classList.remove('snake')
    currentSnakePos = pos
  }
  if(mapSize === 1500) {
    pos = pos + 50
    try {
      boardArray[pos].classList.add('snake')
    } catch (error) {
      // Call game over function here
      console.log('game over')
    }
    boardArray[pos - 50].classList.remove('snake')
    currentSnakePos = pos
  }
  if(mapSize === 2000) {
    pos = pos + 50
    try {
      boardArray[pos].classList.add('snake')
    } catch (error) {
      // Call game over function here
      console.log('game over')
    }
    boardArray[pos - 50].classList.remove('snake')
    currentSnakePos = pos
  }
}

function sendSnakeUp(pos, mapSize) {
  if(mapSize === 1000) {
    pos = pos - 40
    try {
      boardArray[pos].classList.add('snake')
    } catch (error) {
      // Call game over function here
      console.log('game over')
    }
    boardArray[pos + 40].classList.remove('snake')
    currentSnakePos = pos
  }
  if(mapSize === 1500) {
    pos = pos - 50
    try {
      boardArray[pos].classList.add('snake')
    } catch (error) {
      // Call game over function here
      console.log('game over')
    }
    boardArray[pos + 50].classList.remove('snake')
    currentSnakePos = pos
  }
  if(mapSize === 2000) {
    pos = pos - 50
    try {
      boardArray[pos].classList.add('snake')
    } catch (error) {
      // Call game over function here
      console.log('game over')
    }
    boardArray[pos + 50].classList.remove('snake')
    currentSnakePos = pos
  }
}

function sendSnakeLeft(pos) {
  if(
    pos === 40 || pos === 80 || pos === 120 || pos === 160 || pos === 200 ||
    pos === 240 || pos === 280 || pos === 320 || pos === 360 || pos === 400 || pos === 440 || pos === 480 || pos === 520 || pos === 560 || pos === 600 || pos === 640 || pos === 680 || pos === 720 || pos === 760 || pos === 800 || pos === 840 || pos === 880 || pos === 920 || pos === 960 || pos === 1000
    ) {
      // Call game over function here
    console.log('game over')
  }
  pos = pos - 1
  try {
    boardArray[pos].classList.add('snake')
  } catch (error) {
    // Call game over function here
    console.log('game over')
  }
  boardArray[pos + 1].classList.remove('snake')
  currentSnakePos = pos
}

function sendSnakeRight(pos) {
  if(
    pos === 39 || pos === 79 || pos === 119 || pos === 159 || pos === 199 ||
    pos === 239 || pos === 279 || pos === 319 || pos === 359 || pos === 399 || pos === 439 || pos === 479 || pos === 519 || pos === 559 || pos === 599 || pos === 639 || pos === 679 || pos === 719 || pos === 759 || pos === 799 || pos === 839 || pos === 879 || pos === 919 || pos === 959 || pos === 999
    ) {
      // Call game over function here
    console.log('game over')
  }
  pos = pos + 1
  try {
    boardArray[pos].classList.add('snake')
  } catch (error) {
    // Call game over function here
    console.log('game over')
  }
  boardArray[pos - 1].classList.remove('snake')
  currentSnakePos = pos
}

function gameOver() {

}

function apple(mapSize) {
  const randomPos = Math.floor(Math.random() * mapSize) + 1
  boardArray[randomPos].classList.add('apple')
}