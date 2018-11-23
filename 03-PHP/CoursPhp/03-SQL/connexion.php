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
    <title>Connexion</title>
</head>
<body class="connexion_page">

<h1>Se Connecter</h1>
<div class="connecte-toi">
    <?php
    if(empty($_SESSION)){ ?>
        <p>Connecte-toi afin de pouvoir ajouter un nouvel article au Super Blog !</p>
        <!--Champs du formulaire-->
        <form action="form.php" method="post">
            <div>
                <label for="user">Nom d'utilisateur : </label>
                <input type="text" name="user">
            </div>
            <div>
               <label for="mdp">Mot de passe : </label>
                <input type="password" name="mdp"> 
            </div>            
            <input class="submit" type="submit" value="CONNEXION">
        </form>
    <?php   }
    ?>
</div>

<div>
    <?php
    if (isset($_SESSION["admin"]) == "admin"){ ?>
        <a href="admin.php">Administration</a>
    <?php    }
    ?>
</div>
<!--Bien connecté !-->
<div>
    <?php
    if(!empty($_SESSION)){ ?>
        <p>Bienvenue <?= $_SESSION["user"] ?> ! Tu es bien connecté à ta session</p>
    <?php   }
    ?>
</div>

<!--Utilisateur/MDP invalide-->
<?php
if (isset($_GET["user"]) && $_GET["user"] == "notok"){
    echo "<p>Attention ! Nom d'utilisateur ou mot de passe invalide</p>";
    echo "<a href=\"index.php\" >RETOURNER SUR LE BLOG</a>";
}
?>

<!--Déconnection-->
    <div class="buttons">
        <?php if(!empty($_SESSION["user"])){ ?>
            <form action="admin.php" method="post">
                <input type="submit" value="Ajouter un article">
            </form>
            <form action="destroy.php" method="post">
                <input type="submit" value="Deconnexion">
            </form>
    </div>
        <?php
    }
    ?>
</div>
</body>
</html>