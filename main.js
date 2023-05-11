const board = document.querySelector('.board')
const mapSmall = document.querySelector('.game__start__btn--small')
const mapMedium = document.querySelector('.game__start__btn--medium')
const mapBig = document.querySelector('.game__start__btn--big')
const highScore = document.querySelector('.highscore')
const gameInfo = document.querySelector('.game__info')
const mapSelectorButtons = document.querySelector('.size__selector__con')
const bigSizeMap = 2000
const mediumSizeMap = 1500
const smallSizeMap = 1000
let selectedMapSize
let boardArray
let currentSnakePos
let isSnakeMoving = false
let snakeTimeInterval
let lastArrowKeyPressed

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
  isSnakeMoving = true
  placeSnake(mapSize)
  highScore.style.display = 'block'
  mapSelectorButtons.style.display = 'none'
}

(function handleInputForSnake () {
  document.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowDown') {
      sendSnakeDown(currentSnakePos, selectedMapSize)
      snakeMover()
    }
    if(event.code === 'ArrowUp') {
      sendSnakeUp(currentSnakePos, selectedMapSize)
      snakeMover()
    }
    if(event.code === 'ArrowLeft') {
      sendSnakeLeft(currentSnakePos, selectedMapSize)
      snakeMover()
    }
    if(event.code === 'ArrowRight') {
      sendSnakeRight(currentSnakePos, selectedMapSize)
      snakeMover()
    }
  })
})()

function placeSnake(mapSize) {
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
  lastArrowKeyPressed = sendSnakeDown
  if(mapSize === 1000) {
    pos = pos + 40
    try {
      boardArray[pos].classList.add('snake')
    } catch (error) {
      // Call game over function here
      gameOver()
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
      gameOver()
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
      gameOver()
    }
    boardArray[pos - 50].classList.remove('snake')
    currentSnakePos = pos
  }
}

function sendSnakeUp(pos, mapSize) {
  lastArrowKeyPressed = sendSnakeUp
  if(mapSize === 1000) {
    pos = pos - 40
    try {
      boardArray[pos].classList.add('snake')
    } catch (error) {
      // Call game over function here
      gameOver()
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
      gameOver()
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
      gameOver()
    }
    boardArray[pos + 50].classList.remove('snake')
    currentSnakePos = pos
  }
}

function sendSnakeLeft(pos) {
  lastArrowKeyPressed = sendSnakeLeft
  if(selectedMapSize === 1000) {
    if(pos % 40 === 0) {
        // Call game over function here
      gameOver()
    }
  }
  if(selectedMapSize === 1500 || selectedMapSize === 2000) {
    if(pos % 50 === 0) {
        // Call game over function here
      gameOver()
    }
  }
  pos = pos - 1
  try {
    boardArray[pos].classList.add('snake')
  } catch (error) {
    // Call game over function here
    gameOver()
  }
  boardArray[pos + 1].classList.remove('snake')
  currentSnakePos = pos
}

function sendSnakeRight(pos) {
  lastArrowKeyPressed = sendSnakeRight
  if(selectedMapSize === 1000) {
    if(pos % 40 === 39) {
        // Call game over function here
      gameOver()
    }
  }
  if(selectedMapSize === 1500 || selectedMapSize === 2000) {
    if(pos % 50 === 49) {
        // Call game over function here
      gameOver()
    }
  }
  pos = pos + 1
  try {
    boardArray[pos].classList.add('snake')
  } catch (error) {
    // Call game over function here
    gameOver()
  }
  boardArray[pos - 1].classList.remove('snake')
  currentSnakePos = pos
}

function gameOver() {
  stopSnake()
  gameInfo.style.display = 'block'
  gameInfo.textContent = 'You died'
  board.style.display = 'none'
}

function stopSnake () {
  clearInterval(snakeTimeInterval)
}

function snakeMover() {
  if(isSnakeMoving) {
    clearInterval(snakeTimeInterval)
  }
  snakeTimeInterval = setInterval(() => {
    lastArrowKeyPressed(currentSnakePos, selectedMapSize)
  }, 200)
}

function apple(mapSize) {
  const randomPos = Math.floor(Math.random() * mapSize) + 1
  boardArray[randomPos].classList.add('apple')
}
