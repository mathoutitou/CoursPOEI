<?php

namespace POE\formation\unAutre;
/**
 * création d'un alias
 * équivalent à
 * use POE\formation\poo\DateTime as DateTime;
 */

use POE\formation\poo\DateTime;

/**
 * l'alias ne charge pas la définition de classe, il faut la charger quand même.
 * Par exemple avec un require
 */

require '04-namespace.php';

new DateTime();