<?php

function uploadFile($file){
    $dossier = "./img/";
    if(!empty($file) && isset($file)){
        $fichier = basename($file["image"]['name']);
        var_dump($fichier);
        if (file_exists($file['image']['tmp_name'])){
            $resultUpload = move_uploaded_file($file['image']['tmp_name'], $dossier.$fichier);
            if($resultUpload){
                header('Location: index.php.upload=ok');
            } else{
                return "Nous avons rencontré une erreur lors de l'upload";
            }
        }
    }
}