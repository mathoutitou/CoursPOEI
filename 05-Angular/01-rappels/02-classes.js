'use strict';

class MaClasse {

    // On ne peut déclarer que des fonctions à l'intérieur d'une class
    // Tout ce qui est nécessaire à un objet viable : va dans le constructeur
    constructor(){
        this.attribut = null;
    }

    // mot function en anglais = mot réservé
    fonction(){
        console.log(this.attribut);

    }
}

var monInstance = new MaClasse();

monInstance.fonction();