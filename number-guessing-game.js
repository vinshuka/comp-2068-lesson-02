/*
    Author: Melissa Christie
    Objective:
        Create a number guessing game
*/
console.clear();
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const number = Math.round(Math.random() * (10 - 1) + 1);
//console.log(number);

const guess = async guess => {
    return new Promise((resolve, reject) => {
        rl.question("Guess a number between 1 and 10...\n\n", answer => {
            return resolve(number == answer);
        })
    });
};

let cont = false;

(async () => {
    while (!cont) {
        cont = await guess();
        if (!cont) console.error("You were wrong");
    }

    console.log("Congratulations");
    rl.close();
})();