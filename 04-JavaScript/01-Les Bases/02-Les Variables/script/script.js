// 'use strict';
// Déclaration d'une variable 

// Déclaration possible sans le mot clé var
// prenom = "Mathilde";

// console.log(prenom);

// Trois mots-clés possibles
var nom = "Fougeron";
let ville = "Nantes";
const age = 23 ;

console.log(nom);
console.log(ville);
console.log(age);

nom = "Le Gallo";
prenom = "François";
ville = "Paris";
// Avec la déclaration par le mot "const", 
// il est interdit de déclarer une nouvelle valeur
// age = 31;

console.log(prenom);
console.log(nom);
console.log(ville);
console.log(age);

nom = 1582;
console.log(nom);

/// Types de données
// String
// Number
// Float (décimal)
// Boolean
// Array

var materiau = "fer";
var description = 'Je m\'appelle Mathilde';

// Pour définir un tableau
var materiaux = ["fer", "allu", "zinc", 152];
console.log(materiaux);

// Autre types de données
var u = null; // Notre variable est définie mais vaut null
var uu = undefined; // La variable existe mais n'a aucune valeur
var nn = NaN; // N'est pas un nombre ; Indique que la valeur vaut Not A Number

// typeof() permet de connaitre le type d'une variable
console.log(typeof(u));
console.log(typeof(uu));
console.log(typeof(nn));
console.log(typeof(materiaux));
console.log(typeof(description));

// {} Permet de définir le bloc d'instructions

// La portée des variables
var x = 1;
{
    console.log("X vaut : " + x);
    var x = 2;
}
console.log("X vaut hors du bloc : " +x);
    let v = 1;
{
    // La variable V ne peut être appelée car elle n'est pas encore définie
    // console.log("V vaut : " + v);
    let v = 2;
    console.log("A l'intérieur du bloc : " + v);
}
console.log("V hors du bloc vaut : " + v);

    const c = 1;
{
    console.log("Dans le bloc avant la définition c vaudra : " + c);
    
    const c = 2;
    console.log("Dans le bloc C vaudra : " + c);
}
console.log("Hors du bloc C vaudra : " + c);

