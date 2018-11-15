// PSEUDO
var pseudo = document.querySelector('#pseudo');

pseudo.addEventListener('blur', function(){
	var pseudoLength = this.value.length;
	console.log(pseudoLength);

	if(pseudoLength >= 2 && pseudoLength <= 10 ){
		console.log('pas bon');
		this.style.backgroundColor = 'green';
	}
	else {
		console.log('pas bon');
		this.style.backgroundColor = 'red';
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
	this.style.backgroundColor = 'green';
	}
	else {
		console.log('nope');
		this.style.backgroundColor = 'red';
	}
});
	
// AGE
var age = document.querySelector('#age');

age.addEventListener('blur', function(){
	var ageValid = this.value;
	console.log(ageValid);

	if(ageValid >= 18 && ageValid <= 100 ){
		console.log('pas bon');
		this.style.backgroundColor = 'green';
	}
	else {
		console.log('pas bon');
		this.style.backgroundColor = 'red';
	}

});