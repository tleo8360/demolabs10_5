var inputTemp =75;

var inputUnit= "C";


var outputTemp;


if (inputUnit=== "F"){
 
	outputTemp= (inputTemp - 32)*(5/9);
	console.log("The temperature of" + inputTemp + " degrees Fahrenheit is equal to " + outputTemp + " degrees in Celsius.");

}

else if (inputUnit ==="C"){
	outputTemp= inputTemp *(9/5)+32;
	console.log("The temperature of " + inputTemp + " degrees Celsius is equal to " + outputTemp + " degrees in Fahrenheit.");
}







