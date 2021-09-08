const word = document.getElementById('word')
const text = document.getElementById('text')
const scoreEl = document.getElementById('score')
const timeEl = document.getElementById('time')
const endGameEl = document.getElementById('end-game')
const settingsBtn = document.getElementById('settings-btn')
const settings = document.getElementById('settings')
const settingsForm = document.getElementById('settings-form')
const difficultySelect = document.getElementById('difficulty')

// List of words for game
const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
]

// init word
let randomWord

// init score
let score = 0

// init time
let time = 10

// Start the count down
const timeInterval = setInterval(updateTime, 1000);

// focus on text inpute when game starts
text.focus()

// Function to get a random word
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
}

// Add random word to DOM
function addWordToDom() {
    randomWord = getRandomWord()
    word.innerHTML = randomWord
}

// function to update player score
function updateScore() {
    score++
    scoreEl.innerHTML = score
}

// function to update time
function updateTime() {
    time--
    timeEl.innerHTML = time + 's'

    if(time === 0) {
        clearInterval(timeInterval)

        // call end game function to end players game 
        gameOver()
    }
}

// function to end game + show game over screen
function gameOver() {
    endGameEl.innerHTML = `
    <h1>Time Ran Out</h1>
    <p>Your final score is: ${score}</p>
    <button onclick ="location.reload()">Play Again</button>
    `

    endGameEl.style.display = "flex"
}

addWordToDom()

// Event Listners
text.addEventListener('input', e => {
    const insertedText = e.target.value
    
    if(insertedText === randomWord) {
        // call addWordToDom
        addWordToDom()

        // update player score
        updateScore()

        // clear input field
        e.target.value = ''
    }
})

