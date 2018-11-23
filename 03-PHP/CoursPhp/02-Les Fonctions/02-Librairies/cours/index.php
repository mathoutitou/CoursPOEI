<?php 

include_once 'form.php';
include_once 'data.php';
include_once '../01-Declaration/librairies.php';
include_once '01-Exercice/data.php';

 ?>

 <!DOCTYPE html>
 <html>
 <head>
 	<title>Librairies</title>
 	<link rel="stylesheet" type="text/css" href="">
 	<script src="/javascripts/application.js" type="text/javascript" charset="utf-8" async defer></script>
 </head>
 <body>
 	<div>
 		<?php 
 			preDump(FRUITS);
 		 ?>
 	</div>
 	<?php 
 		returnArray(FRUITS);
 	 ?>
 	 <div>
 	 	<?php 
 	 		for ($i=0; $i < 10; $i++) { ?>
 	 		 	<a href="#">Lien <?= $i ?></a>
 	 		 <?php } 
 	 		 ?>
 	 	
 	 </div>
 
 </body>
 </html>