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
		console.log('OK');
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
		console.log('OK');
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
		console.log('OK');
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
document.querySelector("#button").addEventListener("click", function () {
    var regex = /^[a-zA-Z0-9.-]+@[a-z0-9.-]{2,}\.[a-z]{2,4}$/;
    console.log(pseudo.value, email.value, age.value);
    if((pseudo.value.length >= 2 && pseudo.value.length <= 10) && regex.test(email.value) && (age.value >= 18 && age.value <= 100)) {
        var newUser = new User(pseudo.value, email.value, age.value);
        console.log(newUser);
        var newLi = document.createElement("li");
        document.getElementById("myUsers").appendChild(newLi);

        var listUser = `
        <div class="content">
        <p>${pseudo.value}</p>
        <p>${email.value}</p>
        <p>${age.value} ans</p>
        <button type="button" name="supprimer" class="delete">Supprimer</button>
        </div>
        `;

        newLi.innerHTML += listUser;

        var buttonDeletes = document.querySelectorAll(".delete");

        buttonDeletes.forEach(function (element) {
            element.addEventListener("click", function () {
                console.log("delete");
                this.parentNode.parentNode.remove()
            })
        })

    }
});


