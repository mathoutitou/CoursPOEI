<?php 

include_once 'data.php';
include_once 'librairie.php';

 ?>
<!DOCTYPE html>
 <html>
 <head>
 	<title>Librairies</title>
 	<script src="/javascripts/application.js" type="text/javascript" charset="utf-8" async defer>
 	</script>
 </head>
 <body>
 	<div>
 		<p>Sélectionnez un utilisateur :</p>
	 		<form action="" method="post" accept-charset="utf-8">
	 			
	 			<select name="choix">
	 			<!-- <option value="mathilde" selected="selected">Mathilde</option>
	 			<option value="francois">François</option> -->
	 			<?php 
	 				returnUser(USERS, $_POST["choix"]);
	 			 ?>
	 		</select>

	 		<input type="submit" value="Envoyer">

	 		</form>		
 	</div>
 	<div>
 		<?php 
 			displayContent(ARTICLES, $_POST["choix"]);

 		 ?>
 	</div>	

 
 </body>
 </html>