function rockPaperScissors(choice1, choice2) {
    if(choice1 === choice2) {
        console.log("Draw") ;
}
if(choice1 === "rock") {
    if(choice2 === "scissors") {
        console.log("First player wins");
    } else {
        console.log("Second player wins");
    }
}
if(choice1 === "paper") {
    if(choice2 === "rock") {
        console.log("First player wins");
    } else {
        if(choice2 === "scissors") {
            console.log("Second player wins");
    }
}
if(choice1 === "scissors") {
    if(choice2 === "rock") {
        console.log("First player wins");
    } else {
        if(choice2 === "paper") {
            console.log("Second player wins");
        }
    }
}
}
}
rockPaperScissors("rock", "paper")