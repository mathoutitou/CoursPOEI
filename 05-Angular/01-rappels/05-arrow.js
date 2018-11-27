'use strict';

const materials = [
    'Oxygène',
    'Hydrogène',
    'Hellium',
    'Berrylium'
];

// Syntaxe de fonction flêchée
console.log(materials.map(material => material.length));

// Expression de fonction flêchée
console.log(materials.map(function (material) { return material.length; }));

// Fonction flêchée qui retourne 'coucou'
() => 'coucou';

// Pas re return si non marqué (alors que automatique sans les accolades)
() => { 'coucou'; };

(firstName => `Coucou ${firstName}`)('Pierre');

const demo1 = function (firstName, lastName) {
    return {first: firstName, last:lastName}
};

// meilleure syntaxe
const demo2 = (firstName, lastName) => ({first:firstName, last:lastName});


const person = {
    prenom: 'Zinedine',
    famille: 'Zinedane',
    goals: 1234,
};



