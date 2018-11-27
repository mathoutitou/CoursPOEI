'use-strict';

(2+3)*2;

(function() {
    var unObjet = {};

    unObjet.propriete = 'valeur';
    unObjet.propriete2 = function () {console.log(this.propriete); };
}) ();
// mieux d'isoler les variables dans des fonctions pour ne pas entrer en collision avec autres scripts
// peut manipuler le tout uniquement dans la fonction
// encadrer par des parentheses pour regrouper l'expression en 1 élément
// () derrière permet d'invoquer directement la fonction

// Fonction constructeur utilisée seulement pour construire des objets (1e lettre tjs en majuscules)
var UnConstructeur = function (valeur) {
    this.propriete = valeur;
};

var unAutreObjet = new UnConstructeur('uneAutreValeur');
// new permet de créer nouveau contexte, obligatoire !

// attacher fonctions en communs au prototype
UnConstructeur.prototype.propriete2 = function () {console.log(this.propriete); };

// propriete2 attaché au prototype donc peut être directement
// appellé à partir de n'importe quel objet construit via UnConstructeur
unAutreObjet.propriete2();
unAutreObjet.propriete = 'modif a posteriori';
unAutreObjet.propriete2();



// hoisting : les déclarations de variables et de fonctions sont déplacées physiquement en haut du code
// utilisable seulement avec var / pas let ou const

// let et const ont une portée de blocks (fonction = block), valables que à l'intérieur
for (let i = 0; i < 10; i++){
    
}
// let n'existe plus après
{
    let toto = 123;
}
// pareil -> permet de libérer de la mémoire car ne stocke pas plein de variables inutiles

// utiliser du const à 90%, toujours partir de ça ! Référence toujours pareille mais donnée peut être modifiée
// let = environ 9% : utiliser que pour les boucles for i++
// var = 1% (voir nul)

{
    const a = {prop: 'coucou'};
    const b = a;
    b.prop = 'hello';
    console.log(a.prop);
    // imprime 'hello'

    b = {prop:'salut'}; // erreur !
}