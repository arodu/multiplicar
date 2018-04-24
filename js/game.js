var dificultad = 'medio'
var n1
var n2
var resp
var correctas = 0
var incorrectas = 0

var corrects = [
  "Correcto!!",
  "Muy Bien, sigue intentado",
  "Muy Bien, Felicidades!",
  "Excelente",
  "Muy Bien!",
]

var fails = [
  "Incorrecto!!",
  "Sigue intentado",
]

function newNumbers(){
    if(dificultad == 'facil'){
      n1 = intRandomNumber(1,2)
      n2 = intRandomNumber(1,4)
    }else if(dificultad == 'medio'){
      n1 = intRandomNumber(1,4)
      n2 = intRandomNumber(1,4)
    }else if(dificultad == 'avanzado'){
      n1 = intRandomNumber(1,4)
      n2 = intRandomNumber(1,9)
    }else{
      n1 = intRandomNumber(1,9)
      n2 = intRandomNumber(1,9)
    }
}

function intRandomNumber(init, end){
  return Math.floor((Math.random() * end) + init)
}

function reset(){
  newNumbers()

  $('#n1').text(n1)
  $('#n2').text(n2)
  $('#resp').val('').focus()
}

function init(){
  correctas = 0
  incorrectas = 0
  reset()
}
