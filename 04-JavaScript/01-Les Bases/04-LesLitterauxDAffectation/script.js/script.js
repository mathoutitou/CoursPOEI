var introduct = "Ma première chaine de caractère";

var textBrut = "<p> Ma deuxième chaine de caractère" + introduct + "</p>";

console.log(textBrut);

// Les littéraux de template

var text = `<p> J'aimerai écrire du texte </p>`;

var body = `
		<div>
			${test}
		</div>
		`;

		console.log(body);


		// Affectation par décomposition
		// Permet d'extraire des données d'un tableau ou d'un objet

		var a, b, rest;
		[a, b] = [2, 10];
		console.log(a);
		console.log(b);

		[a, b, ...rest] = [2, 10, "text"; 35, true] ;
		console.log(rest);