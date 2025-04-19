let yourScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");

let yourScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const playerChoice = choice.getAttribute("id");

        playGame(playerChoice);
    })
})

const playGame = (playerChoice) => {
    let compChoice = randomChoice();

    if(playerChoice === compChoice) {
        msg.innerText = "Game Draw";
    } else {
        let userWin = true;
        if(playerChoice === "rock") {
            userWin = compChoice === "paper" ? false : true ;
        } else if ( playerChoice === "paper") {
            userWin = compChoice === "rock" ? true : false ;
        } else {
            userWin = compChoice === "rock" ? false : true ;
        }

        if(userWin) {
            msg.innerText = `You win! your ${playerChoice} beats ${compChoice}`;
            yourScore++;
            yourScorePara.innerText = yourScore;
        } else {
            msg.innerText = `You lose! ${compChoice} beats your ${playerChoice}`;
            compScore++;
            compScorePara.innerText = compScore;
        }
    }
}

const randomChoice = () => {
    let randChoice = ["rock", "paper", "scissor"];
    let indx = Math.floor(Math.random()*3);
    return randChoice[indx];
}