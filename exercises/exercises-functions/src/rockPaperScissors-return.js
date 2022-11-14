function rockPaperScissors(choice1, choice2) {
    if(choice1 === choice2) {
        return "Draw";
}
if(choice1 === "rock") {
    if(choice2 === "scissors") {
        return "First player wins";
    } else {
        if(choice2 === "paper")
        return "Second player wins";
    }
}
if(choice1 === "paper") {
    if(choice2 === "rock") {
        return "First player wins";
    } else {
        if(choice2 === "scissors") {
            return "Second player wins";
    }
}
if(choice1 === "scissors") {
    if(choice2 === "rock") {
        return "First player wins";
    } else {
        if(choice2 === "paper") {
            return "Second player wins";
        }
    }
}
}
if (choice1 !="rock", "paper", "scissors"){
    return "Argument error"
}
if (choice2 !="rock", "paper", "scissors"){
    return "Argument error"
}
};

console.log(rockPaperScissors("glue", "paper"))