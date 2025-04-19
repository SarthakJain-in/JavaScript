let boxs = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let winner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let player = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const cheakWinner = () => {
    for(let pattern of winPattern) {
        let pos1Val = boxs[pattern[0]].innerText;
        let pos2Val = boxs[pattern[1]].innerText;
        let pos3Val = boxs[pattern[2]].innerText;

        if(pos1Val != ""  && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
             }
        }
    }
}

const showWinner = (win) => {
    msg.innerText = `Congratulations, winner is ${win}`;
    winner.classList.remove("hide");
    resetBtn.innerText = "New Game";

    disableBoxes();

    
}

const disableBoxes = () =>{
    for(let box of boxs) {
        box.disabled = true;        
    }
}

const enableBoxes = () => {
    for(let box of boxs) {
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    player = true ;
    enableBoxes();
    winner.classList.add("hide");
    resetBtn.innerText = "Reset Game";
}

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if(player) {
            box.innerText = "X";
            player = false;
        } else {
            box.innerText = "O";
            player = true;
        }
        box.disabled = true;

        cheakWinner();
    })
});

resetBtn.addEventListener("click", resetGame);