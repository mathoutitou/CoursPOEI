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
?>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/styles.css">
    <title>Ajouter un article</title>
</head>
<body class="ajouter_article">
<h1>Ajouter un article</h1>
<div class="champs_ajout">
    <div>
        <?php
        if(!empty($_SESSION)){ ?>
            <h2>Salut <?= $_SESSION["user"] ?>! A toi d'écrire le plus beau des articles</h2>
        <?php   }
        ?>
    </div>
    <form action="insertionArticle.php" method="POST" enctype="multipart/form-data">
        <p>Titre de l'article:
            <input type="text" name="titre" />
        </p>
        <p>Contenu de l'article: <br />
            <textarea name="contenu" rows="10" cols="50"></textarea>
        </p>
        <input type="date" name="date_post" />
        <input type="text" name="auteur"/>
        <input type="hidden" name="MAX_FILE_SIZE" value="2097152">
        <p>Choisis une photo avec une taille inférieure à 2 Mo stp.</p>
        <input type="file" name="photo">
        <br /><br />
        <input class="publier" type="submit" name="ok" value="Publier">
    </form>
    <br />
    <a href="index.php" >RETOURNER SUR LE BLOG</a>
</div>
</body>
</html>