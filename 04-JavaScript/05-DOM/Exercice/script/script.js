// Création d'une div
var div = document.createElement("div");
div.setAttribute("id", "contenu");

var content =`
    <h2>La galerie</h2>
    <div id="display">
        
    </div>
    <div id="images">
        <img src="img/mauricie.jpg" alt="1" class="image">
        <img src="img/montreal.jpg" alt="2" class="image">
        <img src="img/tadoussac.jpg" alt="3" class="image">
        <img src="img/tremblant.jpg" alt="4" class="image">
    </div>
        `;
div.innerHTML = content;
// Pour insérer le nouveau contenu, on doit récupérer l'élément dans lequel on veut le placer
var body = document.querySelector("body");
body.appendChild(div);
// On insère la div devant le script
var script = document.querySelector("script");
body.insertBefore(div, script);

// GALLERIE
function displayPics()
{
  var photos = document.querySelectorAll('.image') ;
  var big_pict = document.querySelector('#display') ;

  for (let i of photos){
    i.onclick = function() {
       big_pict.src = this.href;
       return false;
    }
  }
}
displayPics();

