'use strict'

function utilisationRest(...rest){
    var resultat = 0;
    for (let i = 0; i < array.length; i++){
        resultat += rest[i];
    }
    return resultat;
}

console.log(utilisationRest(2));
console.log(utilisationRest(2, 2));
console.log(utilisationRest(2, 2, 2));
console.log(utilisationRest(2, 2, 2, 2));

// Spread

function utilisationDuSpread(x, y, z) {
    return x + y + z;
}

var mesArgs = [2, 2, 2, 2, 2];
console.log(utilisationDuSpread(...mesArgs));