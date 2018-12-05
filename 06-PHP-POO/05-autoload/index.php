<?php
/**
 * chargement du fichier autoload.php, en s'assurant de bien prendre
 * celui du même répertoire que le fichier actuel
 */
require __DIR__ . '/autoload.php';

/**
 * si l'autochargement se passe bien,
 * on n'aura pas d'erreur "nom de classe inconnu"
 */
new POE\formation\Toto();