var a = "Bonjour";

var b = "Jean";

var c =	a + ' ' + b;

console.log('Voici le contenu de ma variable');
console.log(c);
console.log('type de c:');
console.log(typeof(c));

var d = 5;
console.log('type de d:');
console.log(typeof(d));

var e = "6";
console.log('type de e:');
console.log(typeof(e));

var e = 6;
console.log('type de e:');
console.log(typeof(e));

// var answer = prompt('question :');
// console.log(answer);

// document.addEventListener("click", function(){
// 	document.getElementById("demo").innerHTML = "Hello World";
// });

var focus = document.querySelector('#focus');

focus.addEventListener("focus", function(){
	console.log('j ai le focus');
	this.value = "ça fonctionne";
});

focus.addEventListener("blur", function(){
	console.log('perte de focus');
	this.value = "perte du focus";
});