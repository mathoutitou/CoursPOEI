'use strict';

class AnimalDomestique {}

    class PetitChaton extends AnimalDomestique {}

    class Carre {}
// en prog : rectangle = type de carré où on peut faire + de choses (modif longueur), donc + spécifique
    class Rectangle extends Carre {

        constructor(longueur, largeur){
            this.longueur = longueur;
            this.largeur = largeur ? largeur : longueur; // si largeur est définie, ok, sinon, largeur = longueur
        }

        obtenirSurface(){
            return this.longueur * this.largeur;
        }
    }

    class Losange extends Carre {

        constructor(longueur, petitAngle){
            this.longueur = longueur;
            this.petitAngle = petitAngle;
        }

        obtenirSurface(){
            return this.longueur * this.longueur * Math.sin(this.petitAngle);
        }
    }
