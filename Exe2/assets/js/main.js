/*Dichiarazione di variabili*/
let listaNomi = ["John", "Matt", "Phil", "Mike", "Steve", "April", "Daisy", "Betty", "Jay", "Mod", "Lizzy", "Susy", "Tammy", "Dom", "Sandy", "Jack", "Ektor"];
let listaCognomi = ["Stevens", "Neil", "Anderson", "Blue", "Grisham", "Stark", "Allen", "Dorset", "Gatsby", "Morris", "Groove", "McAdams", "Dean", "Loan", "Sparks"];
let listaFake = [];
let listaFakeOutput = document.getElementById("outPut");  
//Creo un indice random


// Creazione della falsa lista di Gatsby
for (i= 0; i < 20; i++){
    let randomindex = (Math.round((Math.random() * 10) + 1));
    let randomindex2 = (Math.round((Math.random() * 10) + 1));
    let nomeEstratto = listaNomi[randomindex];
    let cognomeEstratto = listaCognomi[randomindex2];
    let newGuestName = `${nomeEstratto} ${cognomeEstratto}`;
    let Guestchecked = listaFake.indexOf(newGuestName);
    // Verifico se dentro la lista c'è già un ospite col nome random creato
    if (Guestchecked > -1){
        newGuestName = null;
    }else{
        listaFake.push(newGuestName);
    }
}
//console.log(listaFake);
listaFakeOutput.innerHTML = `<div class="col">${(listaFake)}</div>`;