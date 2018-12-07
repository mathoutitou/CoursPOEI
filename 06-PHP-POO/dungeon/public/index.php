<?php

require __DIR__ . '/../src/autoload.php';

$dungeon = new POE\Dungeon();

/**
 * on décide de définir dans un tableau associatif la liste de
 * pages gérées par l'application
 * La clé représente le chemin d'URL de la valeur est le nom de la méthode à exécuter
 */

$pages = [
    '/jeu/situation' => 'reportSituation',
    '/creation-personnage' => 'createCharacter',
];

/**
 * Si l'URL demandée par le client n'est pas dans la liste,
 * on lui affiche une page 404
 */

if (!key_exists($_SERVER['REQUEST_URI'], $pages)){
    http_response_code(404);
    echo '<h1>404: NIEN NIEN NIEENNN</h1>';
    die;
}

/**
 * Si l'URL existe bien, on peut appeler la méthode correspondante.
 * Comme le nom de la méthode est stocké dans une variable, on passe par
 * call_user_func pour l'appeler
 */

$document = call_user_func([$dungeon, $pages[$_SERVER['REQUEST_URI']]]);

/**
 * l'envoi du document se fait à la toute fin
 * il n'y a plus aucun traitement à faire, donc plus d'erreur possible
 */
echo $document;
