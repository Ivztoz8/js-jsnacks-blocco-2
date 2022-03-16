// Richiesta di un numero: se è pari stampa il numero, se è dispari stampa quello successivo
    let numberInput = parseInt(prompt("Inserisci un numero: "));
    if((numberInput % 2) === 0){
        alert(`${numberInput}`)
    }
    else {
        numberInput = numberInput + 1;
        alert(`${numberInput}`)
    }
