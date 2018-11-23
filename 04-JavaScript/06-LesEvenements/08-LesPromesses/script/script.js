'use-strict'

function newPromise() {
    return new Promise((resolve, reject) => {
        // On défini un timer aléatoire, le timer le + rapide nous retournera la réponse en 1er
        setTimeout(function () {
            resolve('foo');
        }, Math.random() * 1000);

        setTimeout(function () {
            resolve('échec');
        }, Math.random() * 1000);
    })
}

var promise = newPromise();

// Permet de récupérer le resolve et le reject (la fontion then rend deux callback en paramètres)
promise.then(function (value) {
    console.log(value);
}, function (value) {
    console.log(value);
});

// Permet de récupérer uniquement l'échec
promise.catch(function (error) {
    console.log(error);
});

console.log(promise);
