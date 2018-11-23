<?php

include_once '../../02-Les Fonctions/01-Declaration/librairies.php';

$listNumbers = [1, 2, 3, 4, 5, 6];
$listStrings = ["chocolat", "caramel", "confiture"];

$arrayResultMerg = array_merge($listNumbers, $listStrings); // Fusionne les deux tableaux l'un à la suite de l'autre

preDump($arrayResultMerg);
preDump($listNumbers);

$newArray = [];

array_push($newArray, "Toto", 10, true); // Empile un ou plusieurs éléments à la fin d'un tableau

preDump($newArray);

$sportList = ["baseball", "football", "tennis", "rugby", "rallye"];
// array_slice sort les éléments du tableau dans un nouveau tableau, à partir de l'élément 3 (rugby)
$newSportList = array_splice($sportList, 3);

preDump($newSportList);
preDump($sportList);

// array_rand — Prend une ou plusieurs clés, au hasard dans un tableau
$listName = ["Killian", "Gauthier", "Julien", "Mathilde", "Léa", "Gabriel", "Sima", "Jean", "Valentin"];
$rand_keys = array_rand($listName);
echo $listName[$rand_keys];

// Autre solution plus rapide
$listName2 = ["Killian", "Gauthier", "Julien", "Mathilde", "Léa", "Gabriel", "Sima", "Jean", "Valentin"];
echo ($listName2[array_rand($listName2)]);

?>