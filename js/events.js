//define functions here
function getIt() {
  $('p').on('click', function(){
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('form').on('keydown', function(key){
    if (key === 71) {
      alert('YOU PRESSED G KEY!')
    }
  }
)}

$(document).ready(function(){

// call functions here
//getIt()

});
