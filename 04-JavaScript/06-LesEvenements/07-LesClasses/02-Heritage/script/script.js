'use strict';

class Figure {
    constructor(name){
        this.name = name;
    }

    air(){
        return "Ne possède pas de calcul d'air"
    }
}

class Rectangle extends Figure {
    constructor(name, hauteur, largeur){
        // Pour récupérer une valeur d'un parent, on ne peut pas passer par l'appel classique
        super(name);
        this.hauteur = hauteur;
        this.largeur = largeur;
    }

    air(){
        return this.hauteur * this.largeur;
    }
}

class Cercle extends Figure {
    constructor(name, rayon){
        super(name);
        this.rayon = rayon;
    }
    air(){
        return (this.rayon * this.rayon) * Math.PI;
    }
}

class Carre extends Rectangle{
    constructor(name, hauteur){
        super(name, hauteur);
        this.largeur = this.hauteur;
    }
}

var figure = new Figure("figure");
var rectangle = new Rectangle("rectangle", 10, 5);
var cercle = new Cercle("cercle", 3);
console.log(figure.air());
console.log(rectangle.air());
console.log(cercle.air());
var carre = new Carre("carre", 5);
console.log(carre);
console.log(carre.air());

);

