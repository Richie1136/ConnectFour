const squares = document.querySelectorAll('.grid div')
const result = document.querySelector('#result')
const whosTurn = document.querySelector('#currentplayer')

let currentPlayer = 1

for (let i = 0; i < squares.length; i++) {
  squares[i].onclick = () => {
    if (squares[i + 7].classList.contains('taken')) {
      if (currentPlayer === 1) {
        squares[i].classList.add('taken')
        squares[i].classList.add('player-1')
        currentPlayer = 2
        whosTurn.innerHTML = currentPlayer
      }
    }
  }
}