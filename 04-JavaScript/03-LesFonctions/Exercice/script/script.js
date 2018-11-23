// Tableau données : faire ressortir nouveau tableau avec chiffres pair

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var pairs = array.filter(function(i){return i % 2 === 0;});

console.log(pairs);

// Autre solution
var listNombres = [];

var varPorte = 1;
let letPorte = 2;

for (let ii = 0; ii < 400; ii++){
    listNombres.push(ii);
}

console.log(listNombres);

(function(array2) {
    var arrayResult = [];
    array2.forEach(function (element){
        if ((element % 2) === 0){
            arrayResult.push(element);
        }
    });
    return console.log(arrayResult);
})(listNombres);