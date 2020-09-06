var firstname = prompt("What is your first name?");
var lastname = prompt("What is your last name?");
var age = prompt("How old are you?");
var height = prompt("How tall are you?");
var pet = prompt("What is your pet's name?");

if ((firstname[0] == lastname[0]) && (age >= 20 && age <= 30) && (height >= 170) && (pet[pet.length-1] == "y")){
  console.log("Spy!");
}
else
{console.log("rando");}
