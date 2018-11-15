<?php 

function bjrPrenom1 ($prenom1){
	$result = "Bonjour " . $prenom1;
	return $result;
}

$prenom1 = "Mathilde";
echo bjrPrenom1($prenom1);

?>

<!-- Autre solution plus rapide -->
<?php

function bjrPrenom2 ($prenom2){
	echo "Bonjour " . $prenom2;
}

$prenom2 = "Toto";
bjrPrenom2($prenom2);

?>
