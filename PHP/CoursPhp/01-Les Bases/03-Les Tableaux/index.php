<?php
// Déclaration d'un tableau
$array1 = array();
// OU
$array2 = [];

$array1 = array('Mathilde', 'Nantes', 10, true);
// var_dump($array1[1]);
$array2 = ["Mathilde", "Nantes", 10];
// var_dump($array2);

// Tableau associatif (ou Tableau association clé => valeur)
$array3 = [
	"name" => "Mathilde",
	"city" => "Nantes",
	10 => "Number",
];
// Accès à la propriété name
// var_dump($array3["name"]);

$articles = [
	1 => [
		"title" => "Titre 1",
	"description" => "Super description 1"
	],
	2 => [
		"title" => "Titre 2",
	"description" => "Super description 2"
	],
	3 => [
		"title" => "Titre 3",
	"description" => "Super description 3"
	],
	4 => [
		"title" => "Titre 4",
	"description" => "Super description 4"
	],
	5 => [
		"title" => "Titre 5",
	"description" => "Super description 5"
	],
];
echo "<pre>";
// var_dump($articles);
echo "</pre>";

// var_dump($articles[4]["description"]);

// foreach ($articles as $article) {
// 	echo "<pre>";
// 	var_dump($article["description"]);
// 	echo "</pre>";
// }

foreach ($articles as $article) {
	// foreach ($articles as $key => $value) {
	// 	if ($key === "description") {
			echo "<br><br>" . $article["description"];			
		// }
	}
// }


 ?>