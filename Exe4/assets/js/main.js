/* Dichiarazione Variabili */
// Const
const primoArray = [];
const secondArray = [];
// Let
let bigArray;
let smallArray;
// Random num
let foRandomNumber = (Math.round((Math.random() * 9) + 1));
let foRandomNumber2 = (Math.round((Math.random() * 9) + 1));

for (i = 0; i < foRandomNumber; i++){
    var randomNumberPrimoArray = (Math.round((Math.random() * 99) + 1));
    primoArray.push(randomNumberPrimoArray);
}

for (i = 0; i < foRandomNumber2; i++){
    var randomNumberSecondArray = (Math.round((Math.random() * 99) + 1));
    secondArray.push(randomNumberSecondArray);
}

if (primoArray.length == secondArray.length){
    console.log("sono uguali");
} else if (primoArray.length > secondArray.length) {
    bigArray = primoArray;
    smallArray = secondArray;
}else{
    bigArray = secondArray;
    smallArray = primoArray;
}
console.log(primoArray);
console.log(secondArray);