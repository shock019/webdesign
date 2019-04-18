$(document).ready(function() {
    // run function on initial page load
	colorGuess();

});

function colorGuess() {
	var namearray = ["I could have told you that!","Not in This Life!",
	"I could not understand the question, try again and this time try to think about what you are saying!",
	"Solve it your self!", "How should I know?","It's not like it matters anyway!",
"Confucius say, your out of luck!",
"You realize you are turning to a online magic 8 ball for life advise?",
"Insert insult here.",
"It's not like it matters anyway, we are all just on a slow march to death.",
"Everyone laughs at you behind your back. I dont know if it is related to the question but it is true.",
"Hmm...yeah...Oh yeah I was totaly listening.","Have you tried not sucking?",
"Wow, that was so stupid I can't insult it. But that was my purpose in life. That question was so bad its making me question my reason for being!",
"Sigh, really?","I don't care!",
"........................................................................................................................................(Maybe if I dont respond they will go away....)",
"I mock you because I care."];

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
		 	$('.button p').text('Ask Again?');
		 	$('#submit').click(function() {
		 		location.reload(true);
		 	});
		 } else  {
		 	$('h1').text(namearray[randomNumber]);
		 	$('input').val('');
		 	$('.button p').text('Ask Again?');
		 	$('#submit').click(function() {
		 		location.reload(true);
		 	});
		}
	})
}
