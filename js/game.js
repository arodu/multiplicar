var dificultad = 'medio'
var n1
var n2
var resp
var correctas = 0
var incorrectas = 0

var $modal = $('#modal-result')
var $r_input = $('#resp')

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

var levels = {
  'facil': 'Fácil',
  'medio': 'Medio',
  'avanzado': 'Avanzado',
  'dificil': 'Difícil',
}

function newNumbers(){
    if(dificultad == 'facil'){
      n1 = intRandomNumber(1,4)
      n2 = intRandomNumber(1,4)
    }else if(dificultad == 'medio'){
      n1 = intRandomNumber(1,4)
      n2 = intRandomNumber(1,9)
    }else if(dificultad == 'avanzado'){
      n1 = intRandomNumber(1,9)
      n2 = intRandomNumber(1,9)
    }else{
      n1 = intRandomNumber(1,9)
      n2 = intRandomNumber(10,99)
    }
}

function intRandomNumber(init, end){
  return Math.floor((Math.random() * end) + init)
}

function reviewAns(){
  resp = $r_input.val()
  if(resp == ''){
    return false
  }
  if(resp == (n1*n2)){
    correctas++
    $modal.find('.modal-content .title').html('Muy Bien!! <i class="medium material-icons right">sentiment_very_satisfied</i> ')
  }else{
    incorrectas++
    $modal.find('.modal-content .title').html('Respuesta incorrecta <i class="medium material-icons right">sentiment_very_dissatisfied</i> ')
  }

  $('#dif_ans').text(levels[dificultad])
  $('#c_ans').text(correctas)
  $('#i_ans').text(incorrectas)
  $modal.modal('open')
}

function reset(){
  newNumbers()
  $('#n1').text(n1)
  $('#n2').text(n2)
  $r_input.val('')
  $r_input.focus()
}

function init(){
  correctas = 0
  incorrectas = 0
  reset()
}
