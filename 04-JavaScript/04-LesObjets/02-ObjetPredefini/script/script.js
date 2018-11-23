'use strict';

console.log(document);

// Toujours partir de document pour sélectionner un élément
var divTitle = document.querySelector("#title");
console.log(divTitle.firstElementChild.innerHTML);