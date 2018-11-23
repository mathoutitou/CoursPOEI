<?php  

/// Déclaration de variables
// Chaine de caractères String
$nom = 'Fougeron';
$prenom = 'Mathilde';
$titre_page = 'Page de mathou';

// Nombres entiers
$number = 15555555;
// Nombres décimaux
$float = 1.25;
//
$aujourdhui = date("d/m/Y");
$heure = date("H:i:s");

// Concaténation
echo "<p>" . $prenom . "</p>";
echo "Bonjour " . $prenom . " " . $nom;



?>
<!DOCTYPE html>
<html>
<head>
	<title>
		<?php echo $titre_page; ?>
	</title>
</head>
<body>
	<p>
		<?php echo "Bonjour $prenom !<br>"; ?>
		<?php echo "Nous sommes le $aujourdhui ; Il est $heure" ?>
	</p>
</body>
</html>