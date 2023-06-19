// List of prompts for the user
var prompts = [
	'Type your name',
	'Type an adjective',
	'Type a noun'
   ];
//here's an array to keep answers in
var answers = [];

// Keep track of current prompt we're on
var currentPrompt = 0;

// A function that will call the next prompt
var nextPrompt = function() {
  //there's no answer the first time nextPrompt
  if(currentPrompt != 0){
    answers.push($('input').val()); 
  }
	// if there is a next prompt
	if (currentPrompt < prompts.length) {
	  //put prompt and form into your html
	  
		// put first prompt in all html elements with class 
		$('.prompt').html(prompts[currentPrompt] + '<br><input type="text">');
		// move the next prompt into variable currentPrompt 
		currentPrompt = currentPrompt + 1;
	}
	//or else if we're at the end of the array
	else {
		//run showFinal function
		showFinal();
	}
}
//puts the user's input into the html
var showFinal = function() {
  $('.prompt').html(answers[0]+' '+answers[1]+' '+answers[2]); 
}

// run nextPrompt function when button is clicked
$('button').click(function() {
	nextPrompt();
});

// Show the first prompt as soon as js loads
nextPrompt();