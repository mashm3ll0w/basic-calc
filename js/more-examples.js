// To calculate number if its even or not

function isEven(number) {
	var number = parseInt(prompt("Enter Number"));
	if (number % 2 === 0) {
		alert("Its Even");
	} else {
		alert("Its Not Even");
	}
}

isEven(number);

// Choose either Tea or Coffee

var question = confirm("Would you like some Tea?");

if (question === true) {
	alert("Here's your Tea. Thank you and Enjoy");
} 
  else {
	var secondQuestion = confirm("Would you like some Coffee instead?");
	if (secondQuestion === true) {
		alert("Here's you Coffee. Enjoy!");
  } 
    else {
		alert("Sorry couldn't start your morning properly.");
	}
}
