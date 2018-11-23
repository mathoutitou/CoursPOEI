// Définition de l'objet User
function User(pseudo, email, age) {
    this.pseudo = pseudo;
    this.email= email;
    this.age = age;
}

// PSEUDO
var pseudo = document.querySelector('#pseudo');

pseudo.addEventListener('blur', function(){
	var pseudoLength = this.value.length;
	console.log(pseudoLength);

	if(pseudoLength >= 2 && pseudoLength <= 10 ){
		console.log('pas bon');
		this.style.backgroundColor = '#2ecc71';
        this.style.color = 'white';
	}
	else {
		console.log('pas bon');
		this.style.backgroundColor = '#e74c3c';
        this.style.color = 'white';
	}

});

// EMAIL
var email = document.querySelector('#email');

email.addEventListener('blur', function(){
	var emailValid = this.value;
	var regex = /^[a-zA-Z0-9.-]+@[a-z0-9.-]{2,}\.[a-z]{2,4}$/;
	console.log(emailValid);

	if(regex.test(emailValid)){
		console.log('Ok')
	this.style.backgroundColor = '#2ecc71';
		this.style.color = 'white';
	}
	else {
		console.log('nope');
		this.style.backgroundColor = '#e74c3c';
        this.style.color = 'white';
	}
});
	
// AGE
var age = document.querySelector('#age');

age.addEventListener('blur', function(){
	var ageValid = this.value;
	console.log(ageValid);

	if(ageValid >= 18 && ageValid <= 100 ){
		console.log('pas bon');
		this.style.backgroundColor = '#2ecc71';
        this.style.color = 'white';
	}
	else {
		console.log('pas bon');
		this.style.backgroundColor = '#e74c3c';
        this.style.color = 'white';
	}

});

// BOUTTON
var button = document.querySelector('#button');

button.addEventListener("click",function(){
    var clickButton = document.getElementById("button");
    clickButton.style.display="none";
    pFormElt.style.display="block";

    formElt.addEventListener("submit",function(e){
        var url=formElt.elements.url.value;
        if (url.indexOf("http://"===-1)){
            url= "http://" + url;
        }
        var titre=formElt.elements.titre.value;
        var auteur=formElt.elements.auteur.value;

        var nouveauLiens=Object.create(listeLiens);
        nouveauLiens.titre= titre;
        nouveauLiens.url= url;
        nouveauLiens.auteur = auteur;

        var ajoutLiens=ajout(nouveauLiens);
        document.getElementById("contenu").appendChild(ajoutLiens)