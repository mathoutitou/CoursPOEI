<?php 
// Les super globales sont des variables définies par le langage, elles seront accessibles partout
$maVariable = 10;
// Nous indique l'ensemble des varibales définies dans le scipt
$GLOBALS;
// echo "<pre>";
// var_dump($GLOBALS);
// echo "</pre>";

// Tableau associatif contenant les informations du serveur
$_SERVER;
// echo "<pre>";
// var_dump($_SERVER);
// echo "</pre>";

// /?name=mathilde

$_GET;
echo "<pre>";
var_dump($_GET);
echo "</pre>";

echo $_GET["name"];

// POST récupère les infos d'un formulaire
$_POST;
echo "<pre>";
var_dump($_POST);
echo "</pre>";

$_FILES;
echo "<pre>";
var_dump($_FILES);
echo "</pre>";

// Donne accès aux cookies stockés par le navigateur
$_COOKIE;
echo "<pre>";
var_dump($_COOKIE);
echo "</pre>";

// Variable de session, ne sera active que si on démarre la session avec le session_start()
$_SESSION;
echo "<pre>";
session_start();
var_dump($_SESSION);
echo "</pre>";

// Cette Super Globale donne accès aux variables $_GET, $_POST; $_COOKIE
$_REQUEST;
echo "<pre>";
var_dump($_REQUEST);
echo "</pre>";

// Les constantes
// 2 façons de les appeler
// Elle ne peut pas être redéfinie (impossible de lui attribuer une nouvelle valeur au cours de l'exécution du script)
define('NUMBERS', [1, 2, 3, 4]);
const NAME = "Mathilde";

var_dump(NUMBERS);
echo NAME;

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title>Super Globales</title>
</head>
<body>
	<form action="" method="post">
		<label for="name">Nom: </label>
		<input type="text" name="name">
		<label for="name">Prénom: </label>
		<input type="text" name="firstname">
		<label for="mail">Email: </label>
		<input type="submit" value="OK">
	</form>
	<form action="" enctype="multipart/from-data">
		<input type="file" name="cv" id="cv">
		<input type="submit" value="Envoyer">
	</form>

</body>
</html>

 