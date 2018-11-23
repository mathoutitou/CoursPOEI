<?php

$name = "François";

$result = strlen($name); // strlen — Calcule la taille d'une chaîne de caractères

echo $result;


$majuscules = "NON ! JE NE GUEULE PAS";
$minuscules = strtolower($majuscules);

echo "<p>" . $minuscules . "</p>";

?>

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="" method="post">
    <label for="name">Nom: </label>
    <input type="text" name="name">
    <label for="name">Prénom: </label>
    <input type="text" name="firstname">
    <input type="submit" value="Envoyer">

    <?php
    // strlen — Calcule la taille d'une chaîne
    if (strlen($_POST['name']) <= 2)
        echo "Ton nom est trop court, il doit faire au moins 2 caractères";

    ?>
</form>
</body>
</html>

