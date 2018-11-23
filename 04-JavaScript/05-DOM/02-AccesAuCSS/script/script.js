'use strict';

var div = document.querySelector("#style");
div.style.backgroundColor = "red";
div.style.marginLeft = "2em";
console.log(div);

div.removeAttribute("id");
div.setAttribute("class", "colorGreen");