<?php 

const LISTNUMBER = [
	10,
	25,
	30,
	50,
	120,
	190,
];


function nomDeFonction($arg, $arg1 = 2){
	echo $arg . " / " . $arg1 ;
}

nomDeFonction(25);

function preDump($array){
	echo "<pre>";
	var_dump($array);
	echo "<pre>";
}

preDump(LISTNUMBER);

function returnValue($array){
	foreach ($array as $value) {
		echo "<p>" . $value . "</p>";
	}
}

returnValue(LISTNUMBER);

function plusGrand($array, $number){
	foreach ($variable as $value) {
		if ($number > $value) {
			return "Le nombre saisit" . $number . "est plus grand que " . $value;
		}
		else{
			return "Le nombre saisit est inférieur au nombre du tableau";
		}
	}
}

function listNumber($array, $number){
	// Création d'un tableau pour récupérer nos valeurs plus grandes
	$listNumber = [];
	foreach ($array as $value) {
		if ($numbre > $value) {
			// Ajout de toutes les valeurs plus grandes que, dans notre tableau
			$listNumber = $value;
		}
	}
	// On retourne le tableau avec nos valeurs
	return $listNumber;
}

echo plusGrand(LISTNUMBER, 2);

// echo "<p>" . listNumber(LISTNUMBER, 15) . "<p>";
var_dump(listNumber (LISTNUMBER, 50));

 ?>
