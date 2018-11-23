<?php
session_start();
include_once "users.php";

function addNewUser($user, $mdp, $userVerif){
    if(!empty($user) && !empty($mdp)){
        foreach ($userVerif as $userV){
            if ($user === $userV["user"] && $mdp === $userV["mdp"]){
                $_SESSION["user"] = $user;
                $_SESSION["mdp"] = $mdp;
                header("Location: admin.php");
            }
            else {
                header("Location: connexion.php?user=notok");
            }
        }
    }
}

addNewUser($_POST["user"], $_POST["mdp"], USERS);

?>