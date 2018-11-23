'use strict';

var personne = {
    name : "Le Gallo",
    firstName : "François",
    city : "Nantes,"
};

console.log(personne);
console.log(personne.firstName);

var voiture = {
    marque : "Ford",
    modele : "Mustang",
    annee : 1968,
};

// Deuxième façon d'appeler un objet
// On instancie l'objet à l'aide du mot-clé new
// Convention : Majuscule à l'objet
var formateur = new Object();
console.log(formateur);
formateur.prenom = "François";
formateur.nom = "Le Gallo";
formateur.ville = "Nantes";

console.log(formateur);


// Property Shorthand
// Façon raccourcis d'attribuer des valeurs à l'objet
var pseudo = "Picsou";
var age = 31;

var humain = {
    pseudo,
    age,
}

console.log(humain);
console.log(humain.pseudo);

function Person(name, firstName, city) {
    this.name = name;
    this.firstName = firstName;
    this.city = city;

    this.showCity = function() {
        console.log("J'habite à " + this.city);
    }
}

var francois = new Person("Le gallo", "François", "Nantes");
console.log(francois);
console.log(francois.firstName);
francois.showCity();
var paul = new Person("Personne", "Paul", "Paris");
console.log(paul);
console.log(paul.firstName);
paul.showCity();

Person.prototype.fullName = function() {
    return "Je m'appelle " + this.firstName + " " + this.name;
};
console.log(francois.fullName());