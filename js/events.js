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
    if (key.which === 71) {
      alert('YOU PRESSED G KEY!')
    }
  }
)}

function submitIt() {
  $
}

$(document).ready(function(){

// call functions here
//getIt()

});
