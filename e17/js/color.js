$(document).ready(function() {
    // run function on initial page load
	colorGuess();

});

function colorGuess() {
	var namearray = ["chicken noodle","tomato basil","butternut squash","cheeseburger","eggdrop","potato leek","carrot and ginger"];
	var imagearray = ["url(image/Chickennoodle.jpg)","url(image/tomatobasil.jpg)","url(image/butternutsquash.jpg)",
"url(image/cheeseburgersoup.jpg)","url(image/eggdrop.jpg)","url(image/potatoleek.jpg)","url(image/carrotandginger.jpg)"];
	var randomNumber = Math.floor(Math.random() * imagearray.length);
	console.log(imagearray[randomNumber]);
	$("#container").css("background-image", imagearray[randomNumber]);
	//console.log(stripped);
	//$('body').css('bg', colorArray[randomNumber]);
	$('#submit').click(function() {
		var input = $('input').val();
		var guess = input.toLowerCase();
		$("#container").css("background-image", imagearray[randomNumber]);
		 console.log(guess);
		 if (guess == namearray[randomNumber]) {
		 	$('h1').text(guess + ' is right!');
		 	$('input').val('');
		 	$('.button p').text('Play Again?');
		 	$('#submit').click(function() {
		 		location.reload(true);
		 	});
		 } else  {
		 	$('h1').text(guess + ' is wrong');
		 	$('input').val('');
		 	$('.button p').text('Play Again?');
		 	$('#submit').click(function() {
		 		location.reload(true);
		 	});
		}
	})
}
