var words=[
"abruptly",
"absurd",
"abyss",
"affix",
"askew",
"avenue",
"awkward",
"axiom",
`azure`,
`bagpipes`,
`bandwagon`,
`banjo`,
`bayou`,
`beekeeper`,
`bikini`,
`blitz`,
`blizzard`,
`boggle`,
`bookworm`,
`boxcar`,
`boxful`,
`buckaroo`,
`buffalo`,
`buffoon`,
`buxom`,
`buzzard`,
`buzzing`,
`buzzwords`,
`caliph`,
`cobweb`,
`cockiness`,
`croquet`,
`crypt`,
`curacao`,
`cycle`,
`daiquiri`,
`dirndl`,
`disavow`,
`dizzying`,
`duplex`,
`dwarves`,
`embezzle`,
`equip`,
`espionage`,
`euouae`,
`exodus`,
`faking`,
`fishhook`,
`fixable`,
`fjord`,
`flapjack`,
`flopping`,
`fluffiness`,
"flyby"
]
let answer=''
let maxWrong=6
let mistakes=0
let guessed=[]
let wordStatus=null

function randomWord(){
    answer=words[Math.floor(Math.random()*words.length)]
}
randomWord()

function generateButtons(){
    let buttons='abcdefghijklmnopqrstuvwxyz'.split('').map(letter=>`
        <button class="btn"
            id="${letter}"
            onClick="handleGuess('${letter}')"
        >
            ${letter}
        </button>
    `).join("")
    document.getElementById("keyboard").innerHTML=buttons
}
generateButtons()

function guess(){
    console.log(answer)
    wordStatus=answer.split('').map(letter=>(guessed.indexOf(letter)>=0?letter:"_")).join("")
    document.querySelector("#guess").innerHTML=wordStatus

}
function handleGuess(cletter){
    guessed.indexOf(cletter) === -1? guessed.push(cletter):null
    document.getElementById(cletter).setAttribute('disabled',true)

    if(answer.indexOf(cletter)>=0){
        guess()
        youWin()
    }
    else if(answer.indexOf(cletter)===-1){
        mistakes++
        updateMistakes()
        youLost()
        updatePicture()
    }
}

function updatePicture(){
    document.querySelector("#hangman").src=`../images/hangman/${4+mistakes}.jpg`
}

function youWin(){
    if(wordStatus==answer){
        document.getElementById("keyboard").innerHTML="you won"
    }
}

function youLost(){
    if(mistakes==maxWrong){
        document.querySelector("#guess").innerHTML=`the answer was ${answer}`
        document.getElementById("keyboard").innerHTML="you lost"
    }
}
function updateMistakes(){
    document.querySelector("#mistakes").innerHTML=mistakes
}

guess()


function reset(){
    mistakes=0
    guessed=[]
    document.getElementById('hangman').src="../images/hangman/4.jpg"
    randomWord()
    guess()
    updateMistakes()
    generateButtons()
}