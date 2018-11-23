<?php

include_once 'fonction.php';

?>

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Upload</title>
</head>
<body>
<div>
    <?php if(isset($_GET["upload"]) && $_GET['upload'] === "ok") { ?>
    <p>Votre fichier a bien été uploadé</p>
    <?php } ?>
</div>

<form enctype="multipart/form-data" action="file.php" method="post">
<!--    action=  page qui sera appelée lors de l'envoi du formulaire-->
    <label for="image">Veuillez insérer votre fichier</label>
<!--    Bouton "Parcourir..."-->
    <input type="file" name="image">
    <input type="submit" value="Envoyer">
</form>

<div>
    <?php
    foreach (displayImg() as $img) { ?>
    <img src="img/<?= $img ?>" alt="<?= basename($img, ".jpg") ?>">
        <?php    }
    ?>
</div>

</body>
</html>

