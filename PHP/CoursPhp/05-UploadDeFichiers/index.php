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
    <?php if($_GET["upload"] === "ok") { ?>
    <p>Votre fichier a bien été uploadé</p>
    <?php } ?>
</div>
<form enctype="multipart/form-data" action="file.php" method="post">
    <label for="image">Veuillez insérer votre fichier</label>
    <input type="file" name="image">
    <input type="submit" value="Envoyer">
</form>

</body>
</html>

