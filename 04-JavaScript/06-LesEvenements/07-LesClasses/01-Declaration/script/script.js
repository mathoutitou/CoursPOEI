'use-strict';

const object1 = {
    prenom: "François",
    nom: "Le gallo",
};

const object2 = Object.assign({ville: "Nantes"}, object1);

console.log(object1);
console.log(object2);
var ii = 0;

class Personne {
    constructor(prenom, nom){
        this.prenom = prenom;
        this.nom = nom;
        ii++;
    }

    parle(){
        return `Bonjour, je m'appelle ${this.prenom} ${this.nom}`;
    }

    static getCompteur(toto){
        return ii + toto;
    }
}

var francois = new Personne("François", "Le gallo");
console.log(francois);
console.log(francois.parle());

var paul = new Personne("Paul", "Personne");
console.log(paul);
console.log(paul.parle());

var toto = new Personne("toto", "toto");

console.log(Personne.getCompteur(5));
