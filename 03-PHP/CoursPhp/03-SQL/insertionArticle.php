<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr">
   <head>
      <title>Blog</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="stylesheet" href="css/styles.css">
   </head>
<body>
<?php
$connect = mysqli_connect("localhost", "root", "", "blog");

/* Vérification de la connexion */
if (!$connect) {
   echo "Échec de la connexion : ".mysqli_connect_error();
   exit();
}
//// Dans le cas d'upload de photos
if ($_FILES['photo']['error']) {
   switch ($_FILES['photo']['error']){
         case 1: // UPLOAD_ERR_INI_SIZE
            echo "La taille du fichier est plus grande que la limite autorisée par le serveur (paramètre upload_max_filesize du fichier php.ini).";
            break;
         case 2: // UPLOAD_ERR_FORM_SIZE
            echo "La taille du fichier est plus grande que la limite autorisée par le formulaire (paramètre post_max_size du fichier php.ini).";
            break;
         case 3: // UPLOAD_ERR_PARTIAL
            echo "L'envoi du fichier a été interrompu pendant le transfert.";

            break;
         case 4: // UPLOAD_ERR_NO_FILE
           echo "La taille du fichier que vous avez envoyé est nulle.";
            break;
      }
}
else {
//s'il n'y a pas d'erreur alors $_FILES['nom_du_fichier']['error']
//vaut 0
   echo "Aucune erreur dans le transfert du fichier.<br />";
   if (file_exists($_FILES['photo']['tmp_name'])) {
      $chemin_destination = 'img/';
      //déplacement du fichier du répertoire temporaire au répertoire de destination
      move_uploaded_file($_FILES['photo']['tmp_name'], $chemin_destination.$_FILES['photo']['name']);
      echo "Le fichier ".$_FILES['photo']['name']." a été copié dans le répertoire photos";
   }
   else {
      echo "Le fichier n'a pas pu être copié dans le répertoire photos.";
   }
}
$titre = $_POST['titre'];
$date = $_POST['date_post'];
$contenu = $_POST['contenu'];
$photo = "img/" . $_FILES['photo']['name'];
$auteur = $_POST['auteur'];


$requete = "INSERT INTO articles (titre, photo, contenu, auteur, date_post) 
VALUES (?,?,?,?,?)";

$stmt = mysqli_prepare($connect,$requete);
mysqli_stmt_bind_param($stmt, 'sssss', $titre, $photo, $contenu, $auteur, $date);
mysqli_stmt_execute($stmt);

/* Fermeture de la connexion */
mysqli_close($connect);

?>
<div>
    <a href="admin.php" >Ajouter un nouvel article</a>
    <a href="index.php" >Retourner sur le blog</a>
</div>

</body>
</html>