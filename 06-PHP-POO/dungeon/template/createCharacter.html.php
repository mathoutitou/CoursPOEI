<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Création de personnage</title>
</head>
<body>
<form action="" method="post">
    <div>
        <label for="personnage-nom">Nom</label>
        <input type="text" name="name" id="personnage-nom" required>
    </div>
    <div>
        <label for="personnage-type">Classe</label>
        <select name="type" id="personnage-type">
            <option value="" selected>--</option>
            <option value="warrior">Guerrier</option>
            <option value="thief">Voleur</option>
            <option value="wizard">Magicien</option>
        </select>
    </div>
    <button>C'est là qu'on clique</button>
</form>
</body>
</html>