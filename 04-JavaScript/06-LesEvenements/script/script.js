'use strict';
// // Evenement qui permetd'attendre que la page HTML soit chargée
// window.onload = function() {
//
// }

// Deuxième méthode (à privilégier)
window.addEventListener("load", function () {
    var button = document.querySelector("#button");
    button.addEventListener("click", function() {
        var inputText = document.querySelector("div>input");
        console.log(inputText.value);
    });

    var buttonList = document.querySelectorAll("#buttonList>button");

    for (var buttonType of buttonList){
        buttonType.addEventListener("click", function(event) {
            var divDisplay = document.querySelector("#display");

            console.log(event.target);
            console.log(this.innerText);
            switch (this.innerText) {
                case "Vert":
                    divDisplay.style.backgroundColor = "green";
                    break;
                case "Rouge":
                    divDisplay.style.backgroundColor = "red";
                    break;
                case "Noir":
                    divDisplay.style.backgroundColor = "black";
                    break;
                case "Rose":
                    divDisplay.style.backgroundColor = "pink";
                    break;
                case "Jaune":
                    divDisplay.style.backgroundColor = "yellow";
                    break;

                default:
                    break;

            }
        })
    }

});