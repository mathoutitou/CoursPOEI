'use strict';

var array = [1, "2", 3];
// Ajoute de éléments à l'index indiqué
array.splice(1, 0, ["toto", "titi"]);
console.log(array);

// Supprime le dernier élément d'un tableau
array.pop();
console.log(array);

// Supprime le 1er élément d'un tableau
array.shift(array);
console.log(array);

// Ajoute une valeur au début du tableau
array[0] = "Ajoute cette valeur";
console.log(array);

// Ajoute une valeur à la fin du tableau
array.push(true);
console.log(array);

// Inverser un tableau
array.reverse();
console.log(array);

// Boucle pour parcourir un tableau
array.forEach(function (element) {
    console.log(element)
});

for (var i of array){
    console.log('Boucle for of');
    console.log(i);
}