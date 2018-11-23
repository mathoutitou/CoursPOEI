<?php
 	function returnUser($users, $Choix){ // Noms n'ont pas de grande importance, variables ne sont pas réutilisées dans d'autres fonctions
 		foreach ($users as $user) { // Sélectionne 1 user puis démarre boucle
 			if ($Choix == $user){ 
 				echo '<option selected value="' . $user .'">' . $user .' </option>';
 				}
 			else {
 				echo '<option value="' . $user .'">' . $user .' </option>';
 			}
 		}
 	}

 	function displayContent($contents, $User){
 		foreach ($contents as $content) {
 			if ($User == $content["user"]) {
 				echo "<h2>" . $content["title"] . "</h2>" ;
 				echo "<p>" . $content["content"] . "</p>" ;
 				echo "<p>Créé par : " . $content["user"] . "</p>";
 			}
 				
 		}
 	}


 ?> 
