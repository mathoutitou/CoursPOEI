<?php
session_start();
$_SESSION;

?>

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sessions</title>
</head>
<body>
    <div>
        <?php
        if($_GET["user"] == "ok"){
            echo "<p> L'utilisateur a bien été enregistré</p>";
        } elseif ($_GET["user"] == "notok"){
            echo "<p>Les champs ne peuvent pas être vides</p>";
        }
        ?>
    </div>
    <div><?php if(!empty($_SESSION["nom"])){ ?>
        <form action="destroy.php" method="post">
            <input type="submit" value="Deconnexion">
        </form>
        <?php
        }
        ?>

    </div>

<form action="form.php" method="post">
    <label for="nom">Nom : </label>
    <input type="text" name="nom">
    <label for="prenom">Prénom : </label>
    <input type="text" name="prenom">
    <label for="admin">Admin : </label>
    <input type="checkbox" name="admin" value="admin">
    <input type="submit" value="OK">
</form>

    <div>
        <?php
            if ($_SESSION["admin"] == "admin"){ ?>
                <a href="/admin.php">Administration</a>
        <?php    }


        ?>
    </div>

<div>
    <?php
        if(!empty($_SESSION)){ ?>
            <p><?= $_SESSION["nom"] ?></p>
            <p><?= $_SESSION["prenom"] ?></p>
            <p><?= $_SESSION["admin"] ?></p>
        <?php   }
        ?>
</div>

</body>
</html>
