const board = document.querySelector('.board')
const mapSmall = document.querySelector('.game__start__btn--small')
const mapMedium = document.querySelector('.game__start__btn--medium')
const mapBig = document.querySelector('.game__start__btn--big')
const bigSizeMap = 2000
const mediumSizeMap = 1500
const smallSizeMap = 1000

mapSmall.addEventListener('click', () => {
  gameRound(smallSizeMap)
})
mapMedium.addEventListener('click', () => {
  gameRound(mediumSizeMap)
})
mapBig.addEventListener('click', () => {
  gameRound(bigSizeMap)
})

function appendCubes(mapSize) {
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

function gameRound(mapSize) {
  const randomPosForApple = apple(mapSize)
  appendCubes(mapSize)
  gameBoardArray(randomPosForApple)
  board.style.display = 'grid'
  gameBoardArray[randomPosForApple].style.backgroundColor = 'red'
}

function snake() {

}

function gameBoardArray(position) {
  const boardArray = Array.from(document.querySelectorAll('.board__cube'))
  
}

function apple(mapSize) {
  const randomPos = Math.floor(Math.random() * mapSize) + 1
  return randomPos
}