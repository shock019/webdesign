$(document).ready(function() {
  // $('h1').css('color', 'white');
  $('#number5').click(function() {
    $('#number5').css('color', 'white');
    $('#bird-5').toggleClass('black');
  });
  $('#number4').click(function() {
    $('#number4').css('color', 'white');
    $('#bird-4').toggleClass('green');
  });
  $('#number3').click(function() {
    $('#number3').css('color', 'white');
    $('#bird-3').toggleClass('grey');
  });
  $('#number2').click(function() {
    $('#number2').css('color', 'white');
    $('#bird-2').toggleClass('yellow');
  });
  $('#number1').click(function() {
    $('#number1').css('color', 'white');
    $('#bird-1').toggleClass('red');
  });
});


















$('p').addClass('bigger');
console.log('added bigger');
$('p').click(function(){
  $('p').css('color', 'white');
  // added a message to the console, helpful in debugging
  console.log('added white');
  $('body').toggleClass('bodyBG');
});
