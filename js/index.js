
//Function to Add 2 numbers

// function add(number1, number2) {
//   return number1 + number2;
// }

// var number1 = parseInt(prompt("Enter the First Number"));
// var number2 = parseInt(prompt("Enter the Second Number"));

// alert("The sum of your two numbers is " + add(number1, number2));



//BMI Calculator


// function bmiCalculator(weight, height) {
//   var bmi = Math.round(weight / Math.pow(height, 2));
//   return (bmi);
// }

// var weight = parseInt(prompt("Enter your Weight in Kgs"));
// var height = parseInt(prompt("Enter your Height in Meters"));

// alert("Your BMI is " + bmiCalculator(weight, height));




//Convert from Celsius to Fahrenheit

// function toFahrenheit(celsius) {
//   return (celsius * (9 / 5) + 32);
// }
// var celsius = parseInt(prompt("Enter your temperature in Celsius"));
// alert("Your temperature in Fahrenheit is " + toFahrenheit(celsius));



// Convert from Fahrenheit to Celsius


function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * (5 / 9));
}

var fahrenheit = parseInt(prompt("Enter your temperature in Fahrenheit"));
alert("Your tempurature in Celsius is " + toCelsius(fahrenheit));