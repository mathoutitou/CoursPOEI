'use-strict';

window.addEventListener("load", function () {
    var dragged;

    document.addEventListener("dragstart", function (event) {
        dragged = event.target;

        event.target.style.oppacity = .5;
        console.log("YATA");
        console.log("event.target");
    });

    document.addEventListener("dragend", function (event) {
        event.target.style.oppacity = "";
    });

    document.addEventListener("dragover", function( event ) {
        event.preventDefault();
    });

    document.addEventListener("dragenter", function (event) {
        if (event.target.className == "dropzone"){
            event.target.style.background = "purple";
        }
    });

    document.addEventListener("dragleave", function (event) {
        if (event.target.className == "dropzone"){
       event.target.style.background = "";
        }
    });

    document.addEventListener("drop", function (event) {
        event.preventDefault();
        if (event.target.className == "dropzone" ){
            event.target.style.background = "";
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
        }
    })
});