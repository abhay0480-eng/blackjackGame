


let cards_array = []

let sum = 0
let hasBlackJack = false
let isAlive = false

let title = document.getElementById("title")
let result = document.getElementById("result")
let cards = document.getElementById("cards")
let meme = document.getElementById("meme")
let  rule = document.getElementById("game-rules")

let message = ""
let count = 0






let player = {
    Name: "You won )) ",
    chips: 120
}
let player_info = document.getElementById("player-info")


function rules() {
    if (rule.style.display === "none") {
         rule.style.display = "block"
    }
    else {
         rule.style.display = "none"
    }
   
}

function getRandomCard() {
    let random_no = Math.floor(Math.random() * 13 + 1)
    if (random_no === 1) {
        return 11
    }
    else if (random_no > 10) {
        return 10
    }
    else
        return random_no

}



function startGame() {
    meme.style.display = "none"
    isAlive = true
    player_info.textContent = ''
    hasBlackJack = false
    cards_array = [];
    if (isAlive && !hasBlackJack) {

        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards_array = [firstCard, secondCard]
        sum = firstCard + secondCard

        renderGame()


    }



}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}





function renderGame() {
    cards.textContent = '';
    for (let i = 0; i < cards_array.length; i++) {
        cards.textContent += cards_array[i] + " "

    }

    if (sum <= 20) {
        message = "Do you want to draw a new card? "


    }
    else if (sum === 21) {
        message = "Wohooo! you won blackjack!"
        hasBlackJack = true

    }
    else {
        message = "Sorry! you are out of game "
        isAlive = false
    }

    title.textContent = message
    result.textContent = "Sum: " + " " + sum


}

function newCard() {

    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        sum += card
        cards_array.push(card)

        renderGame()

    }
    if (hasBlackJack) {
        player_info.textContent = player.Name + " : " + "  $" + player.chips
        meme.style.display = "block"
    }




}

