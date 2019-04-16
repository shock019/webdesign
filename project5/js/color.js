$(document).ready(function() {
    // run function on initial page load
	colorGuess();

});

function colorGuess() {
	var namearray = ["I could have told you that!","Not in This Life!", "I could not understand the question, try again and this time try to enunciate", "Solve it your self!", "How should I know?"];

	var randomNumber = Math.floor(Math.random() * namearray.length);
	//console.log(imagearray[randomNumber]);

	//console.log(stripped);
	//$('body').css('bg', colorArray[randomNumber]);
	$('#submit').click(function() {
		var input = $('input').val();
		var guess = input.toLowerCase();

		 console.log(guess);
		 if (guess == namearray[randomNumber]) {
		 	$('h1').text(guess + ' is right!');
		 	$('input').val('');
		 	$('.button p').text('Play Again?');
		 	$('#submit').click(function() {
		 		location.reload(true);
		 	});
		 } else  {
		 	$('h1').text(namearray[randomNumber]);
		 	$('input').val('');
		 	$('.button p').text('Play Again?');
		 	$('#submit').click(function() {
		 		location.reload(true);
		 	});
		}
	})
}
