function displayPics()
{
  var photos = document.querySelectorAll('.miniature') ;
  var big_pict = document.querySelector('#big-pic') ;
 
  // for (var i = 0 ; i < photos.length ; ++i) {
  //   photos[i].onclick = function() {
  //     big_pict.src = this.href;
  //     return false;
  //   };
  // }

  for (let i of photos){
    i.onclick = function() {
       big_pict.src = this.href;
       return false;
    }
  }
}
displayPics();

