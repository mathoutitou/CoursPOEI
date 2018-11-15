<?php  

// Les opérations d'affectation

$a = 5;

// Addition
$a += 10;
// Même chose que la ligne du dessus
$a = $a + 10;

//Soustracion
$b = 5;
$b -= 10;
// $b = $b - 10;

// Division
$c = 10;
$c /= 2;
// $c = $c / 2;

// Multiplication
$d = 10;
$d *= 2;
// $d = $d * 2;

// Le modulo donne le reste de la division
$e = 5 % 2;

echo "<p>" . $a ."</p>";
echo "<p>" . $b ."</p>";
echo "<p>" . $c ."</p>";
echo "<p>" . $d ."</p>";
echo "<p>" . $e ."</p>";

// Le symbole + devant une variable converti celle-ci en int ou en float
$f = "10";
// var_dump nous retournera le contenu de la variable + son type
var_dump(+$f);

$g = 20;
var_dump(-$g);

/// Opérateur de comparaison
$b = "5";
$a == $b;
var_dump($a == $b);
// Tester une égalité strict (même valeur et même type)
$a === $b;
// Tester si les variables sont différentes
$a != $b;
// Tester si les variables sont différentes et n'ont pas le même type
$a !== $b;

// Test si la variable est plus petite que
$a < $b;
// Test si la variable est plus grande que
$a > $b;
// Test si la variable est plus petite ou égale 
$a <= $b;
// Test si la variable est plus grande ou égale 
$a >= $b;

/// Les opérateurs logiques 

// Le ET logique
$a and $b; 
$a && $b;
// Le OU logique
$a or $b;
$a || $b;

// La négation (différent)
!$a;
$a = 5;
$b = 5;

// IF
if ($a == $b) {
	echo $a;
}

$c = 10;
$d = 15;
if ($c == 10 && $d == 10) {
	echo "C et D vallent 10";
} else {
	echo "Une des deux valeurs n'est pas égale à 10";
}

// ELSE IF
$e = "text";
$f = 10;
if ($e === $f) {
	echo "<p> E et F sont égaux";
} elseif ($e != $f) {
	echo "<p> E et F sont différents";
} 
elseif ($e === "text") {
	echo "<p> E vaut : " . $e . "</p>";
}

$g = 15;
switch ($g) {
	case '"15"':
		echo "La variable G est une chaine de caracères";
		break;
	case 15:
		echo "La variable G vaut :" . $g;
		break;
	
	default:
		echo "Je ne connais pas cette valeur";
		break;
}

// Structure itératives
// FOR
for ($i=0; $i <= 10 ; $i++) { 
	echo "<p>" . $i . "</p>";
}
// DO WHILE
$h = 0;
do {
	echo "<p>" . $h . "</p>";
	$h++;
} while ( $h <= 10);
//
$j = 0;
while ($j <= 10) {
	echo "<p>" . $j . "</p>";
	$j++;
}


?>