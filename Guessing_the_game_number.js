//mthd 1
// let num = prompt("enter the random number");
// let gameNum = 34;
// if (num == gameNum){
//     console.log("Congratulations! You guessed the correct number.");
// } else {
//     console.log("Sorry, that's not the correct number.");

// }

//mthd 2
{
let num = prompt("enter the random number");
let gameNum = 34;

while (num != gameNum){
    num = prompt("Sorry, that's not the correct number. Try again!");
}
console.log("Congratulations! You guessed the correct number.");
}