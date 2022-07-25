var PersonName = "Mukesh";
var age = 22;
var gender = "M";

if((gender === "F" ) && (age >= 23  && age <= 30)){
	console.log("You are eligible for a loan with the amount of 50 lac.");

} else if ((gender === "M") && (age >= 21 && age <= 38 )){
	console.log(" you also eligible for make loan.");

} else if(age <=22 && age >= 18){
    console.log("We have capture your intrest, we will notify you, when you able for this.");

} else{
    console.log(" Please massage or contact with our branch.");
}

