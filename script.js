let btns = document.querySelectorAll(".box");
let win = document.querySelector(".winner")
let reset = document.querySelector("#reset-btn");
let turnO = true;
let winningCombinations = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

btns.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Button was clicked");
        if (turnO) {
            box.textContent = "O";
            turnO = false;

        }
        else {
            box.textContent = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    })
})
const resetGame = () => {
    turnO = true;
    enableBoxes();
    hidewinner();
}


const enableBoxes = () => {
    for (let box of btns) {
        box.disabled = false;
        box.textContent = "";
    }
}
const disabledboxes = () => {
    for (let box of btns) {
        box.disabled = true;
    }
}

const showwinner = (winner) => {
    win.textContent = `Congratulations! The winner is ${winner}`
    win.style.display = "block";
    disabledboxes();
}
const hidewinner = (winner) => {
    win.style.display = "none";
    
}
const checkwinner = () => {
    for (let pattren of winningCombinations) {
        let pos1val = btns[pattren[0]].innerText
        let pos2val = btns[pattren[1]].innerText
        let pos3val = btns[pattren[2]].innerText
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner" + pos1val)
                showwinner(pos1val);
            }
        }
    }
};

reset.addEventListener("click", resetGame);

