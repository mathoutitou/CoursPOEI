<?php

function uploadFile($file){
    $dossier = "./img/";
//    Si la variable file n'est pas vide, et si elle est définie et n'est pas NULL, alors
    if(!empty($file) && isset($file)){
        // variable "fichier" = nom de la composante finale du fichier "file"
        $fichier = basename($file["image"]['name']);
        var_dump($fichier);
        // S'il le fichier "file" existe dans répertoire temporaire, alors
        if (file_exists($file['image']['tmp_name'])){
            // déplace le fichier téléchargé dans le répertoire temporaire dans dossier(./img)
            $resultUpload = move_uploaded_file($file['image']['tmp_name'], $dossier.$fichier);
            // si le fichier a bien été déplacé, alors
            if($resultUpload){
                // envoi nouvelle en-tête http
                header('Location: index.php?upload=ok');
            } else{
                return "Nous avons rencontré une erreur lors de l'upload";
            }
        }
    }
}

function displayImg(){
    $dossier = "img/";
    $listImg = scandir($dossier);
    $listImg = array_splice($listImg, 2);
    return $listImg;
}