// function add(number1, number2) {
//   return number1 + number2;
// }

// var number1 = parseInt(prompt("Enter the First Number"));
// var number2 = parseInt(prompt("Enter the Second Number"));

// alert("The sum of your two numbers is " + add(number1, number2));

// function bmiCalculator(weight, height) {
//   var bmi = Math.round(weight / Math.pow(height, 2));
//   return (bmi);
// }

// var weight = parseInt(prompt("Enter your Weight in Kgs"));
// var height = parseInt(prompt("Enter your Height in Meters"));

// alert("Your BMI is " + bmiCalculator(weight, height));


function toFahrenheit(celsius) {
  return (celsius * (9 / 5) + 32);
}
var celsius = parseInt(prompt("Enter your temperature in Celsius"));
alert("Your temperature in Fahrenheit is " + toFahrenheit(celsius));