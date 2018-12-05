<?php

namespace POE;

/**
 * la class est définie au sein de l'espace de nommage POE
 * son nom pleinement qualifié est \POE\DateTime
 */

class DateTime
{

}
// utilisation du nom court au sein de l'espace POE
var_dump(new DateTime());

// accès à la classe de PHP avec le FQN (full qualified name)
var_dump(new \DateTime());

// nom complet, donne meme resultat que le 1er
var_dump(new \POE\DateTime());

/**
 * avant PHP 5.3 on avait des noms de classes comme:
 * POE_DateTime
 */