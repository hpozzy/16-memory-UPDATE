window.onload = function () {
  document.getElementById("buttonModal").onclick = function () {
    document.getElementById("modal").style.display = "none"
  }
}

const cards = document.querySelectorAll(".cards")

let hasFlipped = false
let stopClicks = false
let cardOne
let cardTwo

function flipCard() {
  if (stopClicks) {
    return
  }
  this.classList.add("showText")

  if (!hasFlipped) {
    hasFlipped = true
    cardOne = this
    return
  } else {
    cardTwo = this
    hasFlipped = false

    isMatch()
  }
}

function isMatch() {
  if (cardOne.dataset.title === cardTwo.dataset.title) {
    keepShowing()
    return
  }
  unflipCards()
}

function keepShowing() {
  cardOne.removeEventListener("click", flipCard)
  cardTwo.removeEventListener("click", flipCard)
}

function unflipCards() {
  stopClicks = true

  setTimeout(() => {
    cardOne.classList.remove("showText")
    cardTwo.classList.remove("showText")

    stopClicks = false
  }, 1000)
  document.querySelector("#livesLeft").innerHTML =
    "Lives Remaining: " + (lives -= 1)
  if (lives === 0) {
    alert("UR MEMORY TRASH & PLEASE RELOAD THE PAGE")
  }
}
;(function shuffle() {
  cards.forEach((card) => {
    let ramdomPos = Math.floor(Math.random() * 18)
    card.style.order = ramdomPos
  })
})()

let lives = 8
document.getElementById("livesLeft").innerHTML = "Lives Remaining: " + lives

cards.forEach((card) => card.addEventListener("click", flipCard))
