const numbersArray = [3, 7, 8, 15, 11, 18, 99, 54, 75];
let sommaElements = 0;

for (let i = 0; i < numbersArray.length; i++){
    if ( (i % 2) != 0 ){
        sommaElements += numbersArray[i];
    }
}

console.log(sommaElements);