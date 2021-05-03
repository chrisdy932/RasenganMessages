console.log("Choose a number from 1-5");

let radomWords = ["Mercedes", "Ferrari", "Mclaren", "Williams", "Red Bull"];

randomChoice = Math.floor(Math.random() * 5);

storeData = [];

function chooseANumber(number) {
    if (number == 1) {
        return radomWords[0];
    } else if (number == 2) {
        return radomWords[1];
    } else if (number == 3) {
        return radomWords[2];
    } else if (number == 4) {
        return radomWords[3];
    } else if (number == 5) {
        return radomWords[4];
    } else {
        return "The number is not valid";
    }
}

storeData.push(chooseANumber(randomChoice))

console.log(`Your chosen F1 team is: ${storeData}`)


