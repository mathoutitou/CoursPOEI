<?php

class Calculator
{
    /**
     * propriété statique:
     *  * attaché directement à la définition de classe, pas à l'instance
     *  * de fait, c'est accessible globalement
     *  * et donc, ce n'est pas maîtrisable
     */

    private static $previous = 0;

    public static function add($number1, $number2)
    {
        self::$previous += $number1 + $number2;
        return self::$previous;
    }
}

echo Calculator::add(2, 3) . "\n"; // affiche 5

echo Calculator::add(4, 7) . "\n"; // affiche 16

// Peu utilisé
// N'est pas de l'Objet