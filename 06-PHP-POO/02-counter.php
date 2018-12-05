<?php
/**
 * Counter
 * count
 * getTotal
 * restart
 */


/**
 * Cette classe possède 3 méthodes qui travaillent autour de la même donnée
 *
 * Attributs : sert à partager une variable au travers des différentes méthodes
 * situé entre la déclaration de la class et les Méthodes (fonctions)
 *
 * Méthodes : toutes les fonctions présentes dans l'objet
 *
 * Attributs + Méthodes = "Propriétés"
 */

class Counter
{
    // ATTRIBUTS
    /**
     * le modificateur de contrôle d'accès "private"
     * nous garanti que seul l'instance elle-même peut accéder à l'attribut
     *
     * C'est par la méthode publique getTotal qu'on exporte la valeur à l'extérieur
     * Ainsi, on a une donnée qui est accessible en _lecture seule_ depuis l'extérieur
     */
    private $total = 0;
    private $step;

    public const UNIT = "petits poids"; // const = constante, valeur ne peut jamais changer; TJ EN MAJ

    // METHODES
    /**
     * méthode magique, autremeent nommée "constructeur"
     * elle est appelée automatiquement lors de l'instanciation ("new Counter();")
     */
    public function __construct($step = 1) // step = paramètre : pas : compter de 1 en 1
        // peut metre 2 param, en 1er l'obligatoire, en deuxième l'optionnel
    {
        $this->step = $step; // step = nouvel attribut (mais mauvaise pratique : Attribut normalement placés en haut
    }

    public function count()
    {
        $this->total += $this->step;
    }

    public function getTotal()
    {
        return $this->total . ' ' . self::UNIT; // :: car est une constante, ne bougera jamais
    }

    public function restart()
    {
        $this->total = 0;
    }
}

/**
 * $this-> : Obligatoire pour utiliser un Attribut (variable) de l'objet à l'intérieur d'une Méthode
 */

$superCounter = new Counter(14);

$superCounter->count();
$superCounter->count();
$superCounter->count();
echo $superCounter->getTotal() ."\n"; // 14 +14+14
/**
 * créer une instance de mon objet Counter (un compteur particulier)
 *
 * lui demander de compter avant de lui demander getTotal,
 * car si getTotal sans compter avant : getTotal = 0
 *
 * exception : mettre une méthode magique dans l'Objet ( __ ) : appelée automatiquement
 *
 * si on demande de compter 3 fois sans restart, compte +1+1+1 (=3)
 *
 * echo (=montre-moi) seulement sur une fonction contenant un return,
 * car si pas de return, la fonction n'affiche rien (ne retourne rien)
 */
