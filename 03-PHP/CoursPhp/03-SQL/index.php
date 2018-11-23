<?php

session_start();
$_SESSION;

header('Content-Type: text/html; charset=iso-8859-1');

$connect = mysqli_connect("localhost", "root", "", "blog");

/* Vérification de la connexion */
if (!$connect) {
    echo "Échec de la connexion : ".mysqli_connect_error();
    exit();
}

// mysqli_query — Exécute une requête sur la base de données
$result = mysqli_query($connect, "SELECT * FROM articles ORDER BY date_post");

// mysqli_fetch_all — Lit toutes les lignes de résultats dans un tableau
$articles = mysqli_fetch_all($result, MYSQLI_ASSOC);

?>

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"> 
    <link rel="stylesheet" href="css/styles.css">

    <title>Mon Super Blog</title>
</head>
<body class="allBlocks">
    <header class="header">
        <h1 class="title">Bienvenue sur mon Super Blog !</h1>

        <!--Aller sur page de connexion -->
        <div class="connexion">
            <a href="connexion.php" >CONNEXION</a>
        </div>
    </header>


<!--Affichage des articles-->
<div class="articles">
    <?php foreach ($articles as $article) { ?>
    <div class="article"><h2><?= $article["titre"] ?></h2>
        <img src="<?= $article["photo"]?>">
        <p><?= $article["contenu"]?></p>
        <p>Posté le : <?= $article["date_post"]?> par <?= $article["auteur"]?></p>
    </div>

    <?php }
    ?>
</div>



</body>
</html>