let scoreHome = 00;
let scoreAway = 00;
let homeEl = document.getElementById("scoreHome");
let awayEl = document.getElementById("scoreAway");

const resetEl = document.getElementById("reset")

homeEl.textContent = scoreHome
awayEl.textContent = scoreAway

resetEl.addEventListener("click", function() {
    resetGame()
})

function addToHome (score) {
    scoreHome += score
    homeEl.textContent = scoreHome
}

function addToAway (score) {
    scoreAway += score
    awayEl.textContent = scoreAway
}

function resetGame() {
    homeEl.textContent = 0
    awayEl.textContent = 0
}
