<?php
session_start();


function addNewUser($nom, $prenom, $bool){
    if(!empty($nom) && !empty($prenom)){
        $_SESSION["nom"] = $nom;
        $_SESSION["prenom"] = $prenom;
        $_SESSION["admin"] = $bool;

        header("Location: index.php?user=ok");
    } else {
        header("Location: index.php?user=notok");
    }
}

addNewUser($_POST["nom"], $_POST["prenom"], $_POST["admin"]);

?>